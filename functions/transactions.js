import { firestore } from "@/firebase";
import { getFirstAndLastDayOfMonth, getFirstAndLastDayOfYear } from "@/functions";
import { collection, doc, getDoc, getDocs, loadBundle, query, where } from "firebase/firestore";

export async function getRevenuesClub(querySnapshotTransaction) {
    /*
    const clubRef = doc(firestore, "CLUBS", clubUid);
    let queryTransaction;
    if (month != 0) {
        //const requestYear = year!=0?year:new Date().getFullYear();
        //setYear(requestYear);
        //setDisabledAllMonth(false);
        const { firstDay, lastDay } = getFirstAndLastDayOfMonth(month - 1, year);
        queryTransaction = query(collection(clubRef, "COURT_TRANSACTIONS"),
          //where("is_from_app", "==", true),
          where("payment_date", ">=", firstDay),
          where("payment_date", "<=", lastDay),
        );
      } else if (year != 0) {
        const { firstDay, lastDay } = getFirstAndLastDayOfYear(year);
        queryTransaction = query(collection(clubRef, "COURT_TRANSACTIONS"),
          //where("is_from_app", "==", true),
          where("payment_date", ">=", firstDay),
          where("payment_date", "<=", lastDay),
        );
      } else {
        queryTransaction = query(collection(clubRef, "COURT_TRANSACTIONS"),
          //where("is_from_app", "==", true),
          //where("payment_date", ">=", firstDay),
          //where("payment_date", "<=", lastDay),
        );
      }
    const querySnapshotTransaction = await getDocs(queryTransaction);
    */
    let revenuesClub = 0;
    var clubRef = querySnapshotTransaction.size > 0 ? querySnapshotTransaction.docs[0].data().club_ref : null;
   // console.log(clubRef.id)
   let commission = 1;
if(clubRef != null) {
    const clubSnap = await getDoc(clubRef);
    
    if(clubSnap.exists()) {
        console.log("Ouaih", clubRef.id)
        const clubData = clubSnap.data();
        commission = clubData.comission_percentage;
        console.log("WESH",clubData)
    }
}
    
    querySnapshotTransaction.forEach((doc) => {
      const transaction = doc.data();
      revenuesClub += transaction.total_amount;
    });
    return revenuesClub - (revenuesClub * commission);
}
export async function getRevenuesPlayPad(querySnapshotTransaction) {
    /*
    const clubRef = doc(firestore, "CLUBS", clubUid);
    let queryTransaction;
    if (month != 0) {
        //const requestYear = year!=0?year:new Date().getFullYear();
        //setYear(requestYear);
        //setDisabledAllMonth(false);
        const { firstDay, lastDay } = getFirstAndLastDayOfMonth(month - 1, year);
        queryTransaction = query(collection(clubRef, "COURT_TRANSACTIONS"),
          //where("is_from_app", "==", true),
          where("payment_date", ">=", firstDay),
          where("payment_date", "<=", lastDay),
        );
      } else if (year != 0) {
        const { firstDay, lastDay } = getFirstAndLastDayOfYear(year);
        queryTransaction = query(collection(clubRef, "COURT_TRANSACTIONS"),
          //where("is_from_app", "==", true),
          where("payment_date", ">=", firstDay),
          where("payment_date", "<=", lastDay),
        );
      } else {
        queryTransaction = query(collection(clubRef, "COURT_TRANSACTIONS"),
          //where("is_from_app", "==", true),
          //where("payment_date", ">=", firstDay),
          //where("payment_date", "<=", lastDay),
        );
      }
    const querySnapshotTransaction = await getDocs(queryTransaction);
    */
    let revenuesClub = 0;
    var clubRef = querySnapshotTransaction.size > 0 ? querySnapshotTransaction.docs[0].data().club_ref : null;
   // console.log(clubRef.id)
   let commission = 1;
if(clubRef != null) {
    const clubSnap = await getDoc(clubRef);
    
    if(clubSnap.exists()) {
        console.log("Ouaih", clubRef.id)
        const clubData = clubSnap.data();
        commission = clubData.comission_percentage;
        console.log("WESH",clubData)
    }
}
    
    querySnapshotTransaction.forEach((doc) => {
      const transaction = doc.data();
      revenuesClub += transaction.total_amount;
    });
    return revenuesClub * commission;
}

export async function getRevenuesTotal(querySnapshotTransaction) {
    /*
    const clubRef = doc(firestore, "CLUBS", clubUid);
    let queryTransaction;
    if (month != 0) {
        //const requestYear = year!=0?year:new Date().getFullYear();
        //setYear(requestYear);
        //setDisabledAllMonth(false);
        const { firstDay, lastDay } = getFirstAndLastDayOfMonth(month - 1, year);
        queryTransaction = query(collection(clubRef, "COURT_TRANSACTIONS"),
          //where("is_from_app", "==", true),
          where("payment_date", ">=", firstDay),
          where("payment_date", "<=", lastDay),
        );
      } else if (year != 0) {
        const { firstDay, lastDay } = getFirstAndLastDayOfYear(year);
        queryTransaction = query(collection(clubRef, "COURT_TRANSACTIONS"),
          //where("is_from_app", "==", true),
          where("payment_date", ">=", firstDay),
          where("payment_date", "<=", lastDay),
        );
      } else {
        queryTransaction = query(collection(clubRef, "COURT_TRANSACTIONS"),
          //where("is_from_app", "==", true),
          //where("payment_date", ">=", firstDay),
          //where("payment_date", "<=", lastDay),
        );
      }
    const querySnapshotTransaction = await getDocs(queryTransaction);
    */
    let revenuesClub = 0;
    querySnapshotTransaction.forEach((doc) => {
      const transaction = doc.data();
      revenuesClub += transaction.total_amount;
    });
    return revenuesClub;
}
