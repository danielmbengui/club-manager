import { firestore } from "@/firebase";
import { collection, doc, getDoc, getDocs, query, updateDoc } from "firebase/firestore";

export async function getSiteList(clubRef) {
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
  return sites;
}
export async function getCourtsList(clubRef) {
  const queryCourts = query(collection(clubRef, "COURTS"),
    // where("site_uid", "==", site),
    // where("match_start_date", ">=", firstDay),
    // where("match_start_date", "<=", lastDay),
  );
  const querySnapshot = await getDocs(queryCourts);
  const courts = [];
  querySnapshot.forEach(async (docCourt) => {
    const court = docCourt.data();
    courts.push(court);
  });
  return courts;
}

export async function updateSettingsClub(clubRef, limitDaysBookings = 10, limitHoursBeforeBooking = 0.5, limitHoursBeforeCancel = 6, limitActivesBookings = 3) {
  await updateDoc(clubRef, {
    limitDaysBookings: limitDaysBookings,          // Nouvelle valeur pour 'age'
    limitHoursBeforeBooking: limitHoursBeforeBooking, // Nouvelle valeur pour 'location'
    limitHoursBeforeCancel: limitHoursBeforeCancel, // Nouvelle valeur pour 'location'
    limitActivesBookings: limitActivesBookings, // Nouvelle valeur pour 'location'
  });
}