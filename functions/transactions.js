import { firestore } from "@/firebase";
import { distributeWithPrecision, getDaysInMonth, getFirstAndLastDayOfDay, getFirstAndLastDayOfMonth, getFirstAndLastDayOfYear, parseDoubleToTimeInterval } from "@/functions";
import { collection, doc, getDoc, getDocs, loadBundle, query, where, updateDoc } from "firebase/firestore";
import { addHoursToDate, isSummerTime } from "./manage-time";

export function getOneTransactionCalendar(transactionDoc, is_pending=false) {
    //const { uid, user_info, transaction_ref, type, description, access_code, created_date, first_booking_time, last_booking_time, amount_paid, match_start_date, match_finished_date, club_ref, site_name, court_name, site_ref, court_ref, is_from_app, is_from_web_app } = transactionDoc.data();
    const {uid, created_date, payment_date, payment_method, payment_provider, ref_no, wallet_used, wallet_used_amount, total_amount} = transactionDoc.data();        
    const createdDateTimestamp = created_date;
            const createdDate = new Date(createdDateTimestamp.seconds * 1_000);
            const paymentDateTimestamp = payment_date;
            const paymentDate = new Date(paymentDateTimestamp.seconds * 1_000);
            const paymentMethod = payment_method.toLowerCase().includes("card") ? "Carte" : "Wallet";
            
            return {
                uid,
                created_date: `${createdDate.getDate().toString().padStart(2, '0')}.${(createdDate.getMonth() + 1).toString().padStart(2, '0')}.${createdDate.getFullYear()} ${createdDate.getHours().toString().padStart(2, '0')}h${createdDate.getMinutes().toString().padStart(2, '0')}`,
                payment_date: `${paymentDate.getDate().toString().padStart(2, '0')}.${(paymentDate.getMonth() + 1).toString().padStart(2, '0')}.${paymentDate.getFullYear()} ${paymentDate.getHours().toString().padStart(2, '0')}h${paymentDate.getMinutes().toString().padStart(2, '0')}`,
                payment_method:paymentMethod,
                payment_provider:payment_provider,
                ref_no:ref_no,
                wallet_used:wallet_used,
                card_used_amount:total_amount-wallet_used_amount,
                wallet_used_amount:wallet_used_amount,
                total_amount:total_amount,
            };
}

export async function getRevenuesClub(clubRef, querySnapshotBooking) {
    const total = await getRevenuesTotal(querySnapshotBooking);
    let revenuesClub = 0;
    let commission = 1;
    const clubSnap = await getDoc(clubRef);
    if (clubSnap.exists()) {
        const clubData = clubSnap.data();
        commission = clubData.comission_percentage;
    }

    querySnapshotBooking.forEach((doc) => {
        const booking = doc.data();
        revenuesClub += booking.amount_paid;
    });
    const results = distributeWithPrecision(total, [commission * 100, (1 - commission) * 100]);
    return results[1];
}
export async function getRevenuesClubBis(clubRef, querySnapshotTransaction) {
    let revenuesClub = 0;
    let commission = 1;
    const clubSnap = await getDoc(clubRef);
    if (clubSnap.exists()) {
        const clubData = clubSnap.data();
        commission = clubData.comission_percentage;
    }

    querySnapshotTransaction.forEach((doc) => {
        const transaction = doc.data();
        revenuesClub += transaction.total_amount;
    });
    return revenuesClub - (revenuesClub * commission);
}
export async function getRevenuesPlayPad(clubRef, querySnapshotBooking) {
    const total = await getRevenuesTotal(querySnapshotBooking);
    let revenuesClub = 0;
    let commission = 1;
    const clubSnap = await getDoc(clubRef);

    if (clubSnap.exists()) {
        const clubData = clubSnap.data();
        commission = clubData.comission_percentage;
    }

    for (let doc of querySnapshotBooking.docs) {
        const booking = doc.data();

        if (booking.transaction_ref) {
            revenuesClub += booking.amount_paid;

        }
    }
    const results = distributeWithPrecision(total, [commission * 100, (1 - commission) * 100]);
    return results[0];
}
export async function getRevenuesPlayPadBis(clubRef, querySnapshotTransaction) {
    let revenuesClub = 0;
    let commission = 1;
    const clubSnap = await getDoc(clubRef);

    if (clubSnap.exists()) {
        const clubData = clubSnap.data();
        commission = clubData.comission_percentage;
    }

    querySnapshotTransaction.forEach((doc) => {
        const transaction = doc.data();
        revenuesClub += transaction.total_amount;
    });
    return revenuesClub * commission;
}

export async function getRevenuesTotal(querySnapshotBooking) {
    let revenuesClub = 0;
    for (let doc of querySnapshotBooking.docs) {
        const booking = doc.data();
        if (booking.transaction_ref) {
            revenuesClub += booking.amount_paid;
        }
    }
    return revenuesClub;
}
export async function getArrayRevenuesTotal(day = 0, month = 0, year = 0, querySnapshotBooking) {
    let indexLabelsLineChart = -1;
    let values = [];
    var { firstDay, lastDay } = {};
    var hourTime = 0;
    if (day != 0) {
        // firstDay = getFirstAndLastDayOfDay(day, month - 1, year).firstDay;
        //lastDay = getFirstAndLastDayOfDay(day, month - 1, year).lastDay;
        values = Array.from({ length: 24 }, () => { indexLabelsLineChart++; return 0 })
    } else if (month != 0) {
        const daysInMonth = getDaysInMonth(month, year);
        values = Array.from({ length: daysInMonth.length }, () => { indexLabelsLineChart++; return 0; });
    } else if (year != 0) {
        values = Array.from({ length: 12 }, () => { indexLabelsLineChart++; return 0; });
    }

    for (let doc of querySnapshotBooking.docs) {
        const booking = doc.data();
        if (booking.transaction_ref && booking.created_date) {
            const match_start_timestamp = booking.created_date;
            const jetlag = isSummerTime(new Date(match_start_timestamp.seconds * 1000)) ? 2 : 1;
            var start_date = new Date(match_start_timestamp.seconds * 1000);
            const matchDate = start_date;
            var hourTime = 0;
            if (day != 0) {
                hourTime = parseInt(matchDate.getHours());
                values[hourTime] += booking.amount_paid;
            } else if (month != 0) {
                hourTime = matchDate.getDate();
                values[hourTime - 1] += booking.amount_paid;
            } else if (year != 0) {
                hourTime = matchDate.getMonth();
                values[hourTime] += booking.amount_paid;
            }
        }
    }
    return values;
}
export async function getRevenuesTotalBis(querySnapshotTransaction) {
    let revenuesClub = 0;
    querySnapshotTransaction.forEach((doc) => {
        const transaction = doc.data();
        revenuesClub += transaction.total_amount;
    });
    return revenuesClub;
}
export async function getRevenuesTotalSite(clubRef, site = 0, querySnapshotTransaction) {

    let revenuesTotal = 0;
    if (site != 0) {
        querySnapshotTransaction.forEach((doc) => {
            const transaction = doc.data();
            if (transaction.site_uid == site) {
                revenuesTotal += transaction.total_amount;
            }
        });
        return revenuesTotal;
    }
    querySnapshotTransaction.forEach((doc) => {
        const transaction = doc.data();
        revenuesTotal += transaction.total_amount;
    });
    return revenuesTotal;
}
export async function getRevenuesTotalCourt(clubRef, site = 0, court = 0, querySnapshotTransaction) {
    querySnapshotTransaction.forEach(async (myDoc) => {
        const transaction = myDoc.data();
        if (!transaction.hasOwnProperty('site_ref')) {
            const siteRef = doc(collection(clubRef, "SITES"), site);
            const transationRef = doc(collection(clubRef, "COURT_TRANSACTIONS"), transaction.uid);
            const courtRef = doc(collection(clubRef, "COURTS"), transaction.court_ref.id);
            const courtSnap = await getDoc(transaction.court_ref);

            if (courtSnap.exists()) {
                const courtData = courtSnap.data();
            }

        }
    });
    let revenuesTotal = 0;
    if (site != 0) {
        querySnapshotTransaction.forEach(async (myDoc) => {
            const transaction = myDoc.data();
            if (court != 0) {
                const courtRef = doc(collection(clubRef, "COURTS"), court);
                if (transaction.site_ref.id == site && transaction.court_ref.id == courtRef.id) {
                    revenuesTotal += transaction.total_amount;
                }
            } else if (transaction.site_uid == site) {
                revenuesTotal += transaction.total_amount;
            }
        });
        return revenuesTotal;
    } else if (court != 0) {
        const courtRef = doc(collection(clubRef, "COURTS"), court);
        querySnapshotTransaction.forEach((doc) => {
            const transaction = doc.data();
            if (transaction.court_ref.id == courtRef.id) {
                revenuesTotal += transaction.total_amount;
            }
        });
        return revenuesTotal;
    }
    querySnapshotTransaction.forEach((doc) => {
        const transaction = doc.data();
        revenuesTotal += transaction.total_amount;
    });
    return revenuesTotal;
}
