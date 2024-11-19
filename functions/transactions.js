import { firestore } from "@/firebase";
import { getFirstAndLastDayOfMonth, getFirstAndLastDayOfYear } from "@/functions";
import { collection, doc, getDoc, getDocs, loadBundle, query, where, updateDoc } from "firebase/firestore";

export async function getRevenuesClub(clubRef, querySnapshotTransaction) {
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
export async function getRevenuesPlayPad(clubRef, querySnapshotTransaction) {
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

export async function getRevenuesTotal(querySnapshotTransaction) {
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
                
                await updateDoc(transationRef, {
                    site_ref: courtData.site_ref,
                    site_uid: courtData.site_uid,
                });
                
                
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
            } else if (transaction.site_uid== site) {
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
