import { firestore } from "@/firebase";
import { getFirstAndLastDayOfMonth, getFirstAndLastDayOfYear } from "@/functions";
import { collection, doc, getDocs, query, where } from "firebase/firestore";

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


