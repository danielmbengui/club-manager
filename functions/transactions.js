import { firestore } from "@/firebase";
import { getDaysInMonth, getFirstAndLastDayOfDay, getFirstAndLastDayOfMonth, getFirstAndLastDayOfYear, parseDoubleToTimeInterval } from "@/functions";
import { collection, doc, getDoc, getDocs, loadBundle, query, where, updateDoc } from "firebase/firestore";
import { addHoursToDate, isSummerTime } from "./manage-time";

export async function getRevenuesClub(clubRef, querySnapshotBooking) {
    let revenuesClub = 0;
    let commission = 1;
    const clubSnap = await getDoc(clubRef);
    if (clubSnap.exists()) {
        //console.log("Ouaih", clubRef.id)
        const clubData = clubSnap.data();
        commission = clubData.comission_percentage;
        //console.log("WESH", clubData)
    }

    querySnapshotBooking.forEach((doc) => {
        const booking = doc.data();
        revenuesClub += booking.amount_paid;
    });
    return revenuesClub - (revenuesClub * commission);
}
export async function getRevenuesClubBis(clubRef, querySnapshotTransaction) {
    let revenuesClub = 0;
    let commission = 1;
    const clubSnap = await getDoc(clubRef);
    if (clubSnap.exists()) {
        console.log("Ouaih", clubRef.id)
        const clubData = clubSnap.data();
        commission = clubData.comission_percentage;
        console.log("WESH", clubData)
    }

    querySnapshotTransaction.forEach((doc) => {
        const transaction = doc.data();
        revenuesClub += transaction.total_amount;
    });
    return revenuesClub - (revenuesClub * commission);
}
export async function getRevenuesPlayPad(clubRef, querySnapshotBooking) {
    let revenuesClub = 0;
    //var clubRef = querySnapshotTransaction.size > 0 ? querySnapshotTransaction.docs[0].data().club_ref : null;
    // console.log(clubRef.id)
    let commission = 1;
    const clubSnap = await getDoc(clubRef);

    if (clubSnap.exists()) {
        //console.log("Ouaih", clubRef.id)
        const clubData = clubSnap.data();
        commission = clubData.comission_percentage;
        //console.log("WESH", clubData)
    }

    for (let doc of querySnapshotBooking.docs) {
        const booking = doc.data();

        if (booking.transaction_ref) {
            //console.log("REF", booking.uid, booking.transaction_ref);
            revenuesClub += booking.amount_paid;

        }
    }
    //console.log("transaction total", revenuesClub)
    return revenuesClub * commission;
}
export async function getRevenuesPlayPadBis(clubRef, querySnapshotTransaction) {
    let revenuesClub = 0;
    //var clubRef = querySnapshotTransaction.size > 0 ? querySnapshotTransaction.docs[0].data().club_ref : null;
    // console.log(clubRef.id)
    let commission = 1;
    const clubSnap = await getDoc(clubRef);

    if (clubSnap.exists()) {
        console.log("Ouaih", clubRef.id)
        const clubData = clubSnap.data();
        commission = clubData.comission_percentage;
        console.log("WESH", clubData)
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
            //console.log("REF", booking.uid, booking.transaction_ref);
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
            //const eligibleDate = addHoursToDate(new Date(), jetlag + hourCancelMatch);
            //const matchDate = addHoursToDate(start_date, jetlag);
            const matchDate = start_date;
            //console.log("date match", matchDate);
            var hourTime = 0;
            if (day != 0) {
                hourTime = parseInt(matchDate.getHours());
                values[hourTime] += booking.amount_paid;
                // firstDay = getFirstAndLastDayOfDay(day, month - 1, year).firstDay;
                //lastDay = getFirstAndLastDayOfDay(day, month - 1, year).lastDay;
                //values = Array.from({ length: 24 }, () => { indexLabelsLineChart++; return 0 })
            } else if (month != 0) {
                hourTime = matchDate.getDate();
                values[hourTime - 1] += booking.amount_paid;
                //const daysInMonth = getDaysInMonth(month, year);
                //values = Array.from({ length: daysInMonth.length }, () => { indexLabelsLineChart++; return 0; });
            } else if (year != 0) {
                hourTime = matchDate.getMonth();
                values[hourTime] += booking.amount_paid;
                //values = Array.from({ length: 12 }, () => { indexLabelsLineChart++; return 0; });
            }
        }
    }
    //console.log("values", values);
    //console.log("values size", values.length);
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
        //console.log("Site uid", site);
        //const siteRef = doc(collection(clubRef, "SITES"), site);
        //console.log("Site ref", siteRef);
        querySnapshotTransaction.forEach((doc) => {
            const transaction = doc.data();
            if (transaction.site_uid == site) {
                //console.log("transation", transaction.uid);
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
            console.log("court", transaction.court_ref.id)
            const siteRef = doc(collection(clubRef, "SITES"), site);
            const transationRef = doc(collection(clubRef, "COURT_TRANSACTIONS"), transaction.uid);
            const courtRef = doc(collection(clubRef, "COURTS"), transaction.court_ref.id);
            const courtSnap = await getDoc(transaction.court_ref);

            if (courtSnap.exists()) {
                //console.log("Ouaih", clubRef.id)
                const courtData = courtSnap.data();
                //commission = clubData.comission_percentage;
                //console.log("WESH", clubData)
/*
                await updateDoc(transationRef, {
                    site_ref: courtData.site_ref,
                    site_uid: courtData.site_uid,
                });
*/

            }

        }
    });
    let revenuesTotal = 0;
    if (site != 0) {
        //console.log("Site uid", site);
        //const siteRef = doc(collection(clubRef, "SITES"), site);
        //console.log("Site ref", siteRef);
        //const courtRef = doc(collection(clubRef, "COURTS"), court);
        querySnapshotTransaction.forEach(async (myDoc) => {
            const transaction = myDoc.data();
            if (court != 0) {
                //console.log("transation", transaction.uid);
                const courtRef = doc(collection(clubRef, "COURTS"), court);
                if (transaction.site_ref.id == site && transaction.court_ref.id == courtRef.id) {
                    //console.log("transation", transaction.uid);
                    revenuesTotal += transaction.total_amount;
                }
            } else if (transaction.site_uid == site) {
                //console.log("transation", transaction.uid);
                revenuesTotal += transaction.total_amount;
            }
        });
        return revenuesTotal;
    } else if (court != 0) {
        //console.log("Site uid", site);
        const courtRef = doc(collection(clubRef, "COURTS"), court);
        //console.log("Site ref", siteRef);
        querySnapshotTransaction.forEach((doc) => {
            const transaction = doc.data();
            if (transaction.court_ref.id == courtRef.id) {
                //console.log("transation", transaction.uid);
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
