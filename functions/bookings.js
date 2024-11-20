import { firestore } from "@/firebase";
import { getFirstAndLastDayOfMonth, getFirstAndLastDayOfYear } from "@/functions";
import { collection, doc, getDocs, query, updateDoc, where } from "firebase/firestore";
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
    } else if (year != 0) {
        const { firstDay, lastDay } = getFirstAndLastDayOfYear(year);
        queryBooking = query(collection(clubRef, "COURT_BOOKINGS"),
            where("is_from_app", "==", true),
            where("match_start_date", ">=", firstDay),
            where("match_start_date", "<=", lastDay),
        );
    } else {
        queryBooking = query(collection(clubRef, "COURT_BOOKINGS"),
            where("is_from_app", "==", true),
            //where("match_start_date", ">=", firstDay),
            //where("match_start_date", "<=", lastDay),
        );
    }
    const querySnapshotBooking = await getDocs(queryBooking);
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


