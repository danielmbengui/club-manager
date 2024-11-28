import { firestore } from "@/firebase";
import { collection, doc, getDoc, getDocs, query, updateDoc } from "firebase/firestore";

export async function getSiteList(clubRef) {
  console.log("UID", clubRef.id);

  const querySites = query(collection(clubRef, "SITES"),
    // where("site_uid", "==", site),
    // where("match_start_date", ">=", firstDay),
    // where("match_start_date", "<=", lastDay),
  );
  const querySnapshot = await getDocs(querySites);
  const sites = [];
  querySnapshot.forEach((doc) => {
    const site = doc.data();
    sites.push(site);
  });
  //console.log(querySnapshot.size)
  /*
  const querySites = query(collection(clubRef, "SITES"),
    //where("is_from_app", "==", true),
    //where("match_start_date", ">=", firstDay),
    //where("match_start_date", "<=", lastDay),
  );
  */
  //const sites = querySites.map((site, index) => site);
  return sites;
}
export async function getCourtsList(clubRef) {
  console.log("UID", clubRef.id);

  const queryCourts = query(collection(clubRef, "COURTS"),
    // where("site_uid", "==", site),
    // where("match_start_date", ">=", firstDay),
    // where("match_start_date", "<=", lastDay),
  );
  const querySnapshot = await getDocs(queryCourts);
  const courts = [];
  querySnapshot.forEach(async (docCourt) => {
    const court = docCourt.data();
    //const siteDoc = await getDoc(siteRef);
    //const siteData = siteDoc.data();
    //console.log("SIIIITES", siteData.name)
    courts.push(court);
  });
  //console.log(querySnapshot.size)
  /*
  const querySites = query(collection(clubRef, "SITES"),
    //where("is_from_app", "==", true),
    //where("match_start_date", ">=", firstDay),
    //where("match_start_date", "<=", lastDay),
  );
  */
  //const sites = querySites.map((site, index) => site);
  return courts;
}

export async function updateSettingsClub(clubRef, limitDaysBookings = 10, limitHoursBeforeBooking = 0.5, limitHoursBeforeCancel = 6, limitActivesBookings = 3) {
  console.log("lub uid", clubRef.id);
  await updateDoc(clubRef, {
    limitDaysBookings: limitDaysBookings,          // Nouvelle valeur pour 'age'
    limitHoursBeforeBooking: limitHoursBeforeBooking, // Nouvelle valeur pour 'location'
    limitHoursBeforeCancel: limitHoursBeforeCancel, // Nouvelle valeur pour 'location'
    limitActivesBookings: limitActivesBookings, // Nouvelle valeur pour 'location'
  });
  /*
  try {
   
 
    console.log("Document updated successfully!");
  } catch (error) {
    console.error("Error updating document: ", error);
  }
  */
}