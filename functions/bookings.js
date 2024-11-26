import { firestore } from "@/firebase";
import { getArrayMonthStr, getFirstAndLastDayOfMonth, getFirstAndLastDayOfYear, parseDoubleToHourInterval } from "@/functions";
import { collection, doc, getDoc, getDocs, query, updateDoc, where } from "firebase/firestore";
import { addHoursToDate, isSummerTime } from "./manage-time";

export async function getCountBookingsClub(querySnapshotBooking) {
    let countBoookingsPlayPad = 0;
    querySnapshotBooking.forEach((doc) => {
        const booking = doc.data();
        if (booking.is_from_web_app) {
            countBoookingsPlayPad++;
        }
        // doc.data() is never undefined for query doc snapshots
        //console.log(doc.id, " => ", doc.data());
    });

    return countBoookingsPlayPad;
}
export async function getCountBookingsClubBySite(querySnapshotBooking, site) {
    let countBoookingsTotal = 0;
    console.log("size snap funtion", querySnapshotBooking.size)
    querySnapshotBooking.forEach((doc) => {
        const booking = doc.data();
        if (booking.site_ref.id == site) {
            countBoookingsTotal++;
        }
        // doc.data() is never undefined for query doc snapshots
        //console.log(doc.id, " => ", doc.data());
    });
    return countBoookingsTotal;
}
export async function getCountBookingsClubByCourt(querySnapshotBooking, court) {
    let countBoookingsTotal = 0;
    querySnapshotBooking.forEach((doc) => {
        const booking = doc.data();
        if (booking.court_ref.id == court) {
            countBoookingsTotal++;
        }
        // doc.data() is never undefined for query doc snapshots
        //console.log(doc.id, " => ", doc.data());
    });

    return countBoookingsTotal;
}
export async function getBookingListTotal(querySnapshotBooking) {

    return querySnapshotBooking.docs.map((bookingDoc, index) => {
        const booking = bookingDoc.data();
        return booking;
    });
}
export async function getBookingListDashboard(querySnapshotBooking, is_from_app = 0, is_pending = false) {
    if (typeof is_from_app !== "boolean") {
        console.log("first ondition")
        return querySnapshotBooking.docs.map((bookingDoc) => {
            const booking = bookingDoc.data();
            const createdDateTimestamp = booking.created_date;
            const createdDate = new Date(createdDateTimestamp.seconds * 1_000);
            const matchDateTimestamp = booking.match_date;
            const matchDate = new Date(matchDateTimestamp.seconds * 1_000);
            return {
                uid: booking.uid,
                name: booking.user_info.name,
                created_date: `${createdDate.getDate().toString().padStart(2, '0')}.${(createdDate.getMonth() + 1).toString().padStart(2, '0')}.${createdDate.getFullYear()} ${createdDate.getHours().toString().padStart(2, '0')}h${createdDate.getMinutes().toString().padStart(2, '0')}`,
                //match_date: matchDate,
                match_date: `${matchDate.getDate().toString().padStart(2, '0')}.${(matchDate.getMonth() + 1).toString().padStart(2, '0')}.${matchDate.getFullYear()}`,

                is_from_app: booking.is_from_app,
                club_uid: booking.club_ref.id,
                site_name: booking.site_name,
                court_name: booking.court_name,
                is_pending: is_pending,
                amount_paid: amount_paid,
                first_booking_time: first_booking_time,
                last_booking_time: last_booking_time,
                duration: `${parseDoubleToHourInterval(booking.last_booking_time - booking.first_booking_time + 0.5)}`,
            };
        });
    }
    console.log("second ondition")
    return querySnapshotBooking.docs
        .map((bookingDoc) => {
            const { uid, user_info, transaction_ref,type,description,access_code, created_date, first_booking_time, last_booking_time, amount_paid, match_start_date, match_finished_date, club_ref, site_name, court_name, site_ref, court_ref, is_from_app: appFlag } = bookingDoc.data();
            const createdDateTimestamp = created_date;
            const createdDate = new Date(createdDateTimestamp.seconds * 1_000);
            const matchDateTimestamp = match_start_date;
            const matchDate = new Date(matchDateTimestamp.seconds * 1_000);
            const matchDateTimestampF = match_finished_date;
            const matchDateF = new Date(matchDateTimestampF.seconds * 1_000);
            if (appFlag === is_from_app) {
                return {
                    uid,
                    name: user_info.name,
                    phone: user_info.phone_number,
                    email: user_info.email,
                    created_date: `${createdDate.getDate().toString().padStart(2, '0')}.${(createdDate.getMonth() + 1).toString().padStart(2, '0')}.${createdDate.getFullYear()} ${createdDate.getHours().toString().padStart(2, '0')}h${createdDate.getMinutes().toString().padStart(2, '0')}`,
                    //match_date: matchDate,
                    match_date: `${matchDate.getDate().toString().padStart(2, '0')}.${(matchDate.getMonth() + 1).toString().padStart(2, '0')}.${matchDate.getFullYear()} ${matchDate.getHours().toString().padStart(2, '0')}h${matchDate.getMinutes().toString().padStart(2, '0')}-${matchDateF.getHours().toString().padStart(2, '0')}h${matchDateF.getMinutes().toString().padStart(2, '0')}`,
                    is_from_app: appFlag,
                    club_uid: club_ref.id,
                    site_name: site_name,
                    court_name: court_name,
                    is_pending: is_pending,
                    amount_paid: amount_paid,
                    first_booking_time: first_booking_time,
                    last_booking_time: last_booking_time,
                    duration: `${parseDoubleToHourInterval(last_booking_time - first_booking_time + 0.5)}`,
                    status: is_pending ? "En attente" : "Confirmé",
                    transaction_uid: transaction_ref ? transaction_ref.id : "",
                    type:type,
                    access_code:access_code,
                    description: description,
                };
            }
        })
        .filter(Boolean); // Supprime les valeurs undefined
}
export async function getCountBookingsPlayPad(querySnapshotBooking) {
    /*
    const clubRef = doc(firestore, "CLUBS", clubUid);
    let queryBooking;
    if (month != 0) {
        const { firstDay, lastDay } = getFirstAndLastDayOfMonth(month - 1, year);
        queryBooking = query(collection(clubRef, "COURT_BOOKINGS"),
            where("is_from_app", "==", true),
            where("match_start_date", ">=", firstDay),
            where("match_start_date", "<=", lastDay),
        );

    */
    let countBoookingsPlayPad = 0;
    querySnapshotBooking.forEach((doc) => {
        const booking = doc.data();
        if (booking.is_from_app) {
            countBoookingsPlayPad++;
        }
        // doc.data() is never undefined for query doc snapshots
        //console.log(doc.id, " => ", doc.data());
    });

    return countBoookingsPlayPad;
}
export async function getCountBookingsTotal(querySnapshotBooking) {
    return querySnapshotBooking.size;
}
export async function getRateBookingsPlayPad(querySnapshotBooking) {
    let countBoookingsPlayPad = 0;
    let countBoookingsTotal = 0;
    querySnapshotBooking.forEach((doc) => {
        const booking = doc.data();
        if (booking.is_from_app) {
            countBoookingsPlayPad++;
        }
        countBoookingsTotal++;
        // doc.data() is never undefined for query doc snapshots
        //console.log(doc.id, " => ", doc.data());
    });

    return countBoookingsTotal > 0 ? countBoookingsPlayPad * 100 / countBoookingsTotal : 0;
}
export async function getRateBookingsClub(querySnapshotBooking) {
    let countBoookingsPlayPad = 0;
    let countBoookingsTotal = 0;
    querySnapshotBooking.forEach((doc) => {
        const booking = doc.data();
        if (booking.is_from_web_app) {
            countBoookingsPlayPad++;
        }
        countBoookingsTotal++;
        // doc.data() is never undefined for query doc snapshots
        //console.log(doc.id, " => ", doc.data());
    });

    return countBoookingsTotal > 0 ? countBoookingsPlayPad * 100 / countBoookingsTotal : 0;
}
export async function getRateHoursPlayPad(querySnapshotBooking) {
    let countBoookingsPlayPad = 0;
    let countBoookingsTotal = 0;
    for (const docData of querySnapshotBooking.docs) {
        const booking = docData.data();
        const addValue = booking.last_booking_time - booking.first_booking_time + 0.5;
        /*
        const match_start_timestamp = booking.match_start_date;
        const match_finish_timestamp = booking.match_finished_date;
        const clubRef = doc(firestore, "CLUBS", booking.club_ref.id);
        if (!booking.hasOwnProperty('last_booking_time')) {
            const bookingRef = doc(collection(clubRef, "COURT_BOOKINGS"), booking.uid);
            console.log("no last time", booking.uid)
            const jetlag = isSummerTime(new Date(match_finish_timestamp.seconds * 1000)) ? 2 : 1;
            var start_date = new Date(match_finish_timestamp.seconds * 1000);
            //const eligibleDate = addHoursToDate(new Date(), jetlag + hourCancelMatch);
            const matchDate = addHoursToDate(start_date, jetlag);
            const hours = start_date.getHours();
            const minutes = start_date.getMinutes();
            await updateDoc(bookingRef, {
                last_booking_time: (hours + (minutes > 0 ? minutes / 60 : 0)) > 0 ? (hours + (minutes > 0 ? minutes / 60 : 0)) - 0.5 : 0,
                //site_uid: courtData.site_uid,
            });
        }
        if (!booking.hasOwnProperty('first_booking_time')) {
            const bookingRef = doc(collection(clubRef, "COURT_BOOKINGS"), booking.uid);
            const jetlag = isSummerTime(new Date(match_start_timestamp.seconds * 1000)) ? 2 : 1;
            var start_date = new Date(match_start_timestamp.seconds * 1000);
            //const eligibleDate = addHoursToDate(new Date(), jetlag + hourCancelMatch);
            const matchDate = addHoursToDate(start_date, jetlag);
            const hours = start_date.getHours();
            const minutes = start_date.getMinutes();
            console.log("no frist time", booking.uid, start_date, hours, minutes);
            await updateDoc(bookingRef, {
                first_booking_time: hours + (minutes > 0 ? minutes / 60 : 0),
                //site_uid: courtData.site_uid,
            });
        }
        */
        if (booking.is_from_app) {
            countBoookingsPlayPad += addValue;
        }
        countBoookingsTotal += addValue;
        // doc.data() is never undefined for query doc snapshots
        //console.log(doc.id, " => ", doc.data());
    }

    return countBoookingsTotal > 0 ? countBoookingsPlayPad * 100 / countBoookingsTotal : 0;
}
export async function getRateHoursClub(querySnapshotBooking) {
    let countBoookingsPlayPad = 0;
    let countBoookingsTotal = 0;
    querySnapshotBooking.forEach((doc) => {
        const booking = doc.data();
        const addValue = booking.last_booking_time - booking.first_booking_time + 0.5;
        if (booking.is_from_web_app) {

            countBoookingsPlayPad += addValue;
        }
        countBoookingsTotal += addValue;
        // doc.data() is never undefined for query doc snapshots
        //console.log(doc.id, " => ", doc.data());
    });

    return countBoookingsTotal > 0 ? countBoookingsPlayPad * 100 / countBoookingsTotal : 0;
}
export async function getCountHoursPlayPad(querySnapshotBooking) {
    let countBoookingsHoursPlayPad = 0;
    //let countBoookingsTotal = 0;
    querySnapshotBooking.forEach((doc) => {
        const booking = doc.data();
        const addValue = booking.last_booking_time - booking.first_booking_time + 0.5;
        if (booking.is_from_app) {

            countBoookingsHoursPlayPad += addValue;
        }
        // countBoookingsTotal += addValue;
        // doc.data() is never undefined for query doc snapshots
        //console.log(doc.id, " => ", doc.data());
    });

    return countBoookingsHoursPlayPad;
}
export async function getCountHoursClub(querySnapshotBooking) {
    let countBoookingsHoursClub = 0;
    //let countBoookingsTotal = 0;
    querySnapshotBooking.forEach((doc) => {
        const booking = doc.data();
        const addValue = booking.last_booking_time - booking.first_booking_time + 0.5;
        if (booking.is_from_web_app) {

            countBoookingsHoursClub += addValue;
        }
        // countBoookingsTotal += addValue;
        // doc.data() is never undefined for query doc snapshots
        //console.log(doc.id, " => ", doc.data());
    });

    return countBoookingsHoursClub;
}

export async function getCountUsersPlayPad(querySnapshotBooking) {
    let countUsers = 0;
    let countBoookingsHoursPlayPad = 0;
    //let countBoookingsTotal = 0;
    const arrayUsers = [];
    querySnapshotBooking.forEach((doc) => {
        const booking = doc.data();
        const userInfo = booking.user_info;
        //const addValue = booking.last_booking_time - booking.first_booking_time + 0.5;
        if (booking.is_from_app) {
            arrayUsers.push(userInfo);
            //countBoookingsHoursPlayPad += addValue;
        }
        // countBoookingsTotal += addValue;
        // doc.data() is never undefined for query doc snapshots
        //console.log(doc.id, " => ", doc.data());
    });
    const uniqueUsers = arrayUsers.filter(
        (user, index, self) => index === self.findIndex((u) => u.email === user.email)
    );

    return uniqueUsers.length;
}
export async function getCountUsersClub(querySnapshotBooking) {
    let countUsers = 0;
    let countBoookingsHoursPlayPad = 0;
    //let countBoookingsTotal = 0;
    const arrayUsers = [];
    querySnapshotBooking.forEach((doc) => {
        const booking = doc.data();
        const userInfo = booking.user_info;
        //const addValue = booking.last_booking_time - booking.first_booking_time + 0.5;
        if (booking.is_from_web_app) {
            arrayUsers.push(userInfo);
            //countBoookingsHoursPlayPad += addValue;
        }
        // countBoookingsTotal += addValue;
        // doc.data() is never undefined for query doc snapshots
        //console.log(doc.id, " => ", doc.data());
    });
    const uniqueUsers = arrayUsers.filter(
        (user, index, self) => index === self.findIndex((u) => {
            if (u.name) {
                return u.name === user.name;
            } else if (u.email) {
                return u.email === user.email;
            } else if (u.phone_number) {
                return u.phone_number === user.phone_number;
            }
        })
    );

    return uniqueUsers.length;
}
