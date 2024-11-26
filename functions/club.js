import { firestore } from "@/firebase";
import { collection, doc, query, updateDoc } from "firebase/firestore";

export function getSiteList(clubRef) {

    const querySites = query(collection(clubRef, "SITES"),
          //where("is_from_app", "==", true),
          //where("match_start_date", ">=", firstDay),
          //where("match_start_date", "<=", lastDay),
        );
    const sites = querySites.map((site, index)=> site);
    return sites;
}

export async function updateSettingsClub(clubRef, limitDaysBookings=10, limitHoursBeforeBooking=0.5, limitHoursBeforeCancel=6, limitActivesBookings=3) {
    
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