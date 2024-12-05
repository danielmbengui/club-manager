import { firestore } from "@/firebase";
import { getArrayMonthStr, getFirstAndLastDayOfMonth, getFirstAndLastDayOfYear, parseDoubleToHourInterval } from "@/functions";
import { collection, deleteDoc, doc, getDoc, getDocs, query, updateDoc, where } from "firebase/firestore";
import { addHoursToDate, formatDateToISO, getStartAndEndOfDay, isSummerTime } from "./manage-time";
import { getFirestoreSubData } from "./manage-firestore";

export async function getCountBookingsClub(querySnapshotBooking) {
    let countBoookingsPlayPad = 0;
    querySnapshotBooking.forEach((doc) => {
        const booking = doc.data();
        if (booking.is_from_web_app) {
            countBoookingsPlayPad++;
        }
    });

    return countBoookingsPlayPad;
}
export async function getCountBookingsClubBySite(querySnapshotBooking, site) {
    let countBoookingsTotal = 0;
    querySnapshotBooking.forEach((doc) => {
        const booking = doc.data();
        if (booking.site_ref.id == site) {
            countBoookingsTotal++;
        }
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
<<<<<<< HEAD
    /*
    for (const snap of querySnapshotBooking.docs) {
        const booking = snap.data();
        
        const clubRef = doc(firestore, "CLUBS", booking.club_ref.id);
        const bookingRef = doc((collection(clubRef, "COURT_BOOKINGS")), booking.uid);
        if (!booking.hasOwnProperty('site_name')) {
            console.log("no site", booking.uid)
            const siteSnap = await getDoc(booking.site_ref);
            if (siteSnap.exists()) {
                const siteData = siteSnap.data();
                await updateDoc(bookingRef, {
                    site_name: siteData.name,          // Nouvelle valeur pour 'age
                });
            }
        }
        if (!booking.hasOwnProperty('court_name')) {
            console.log("no court", booking.uid)
            const courtSnap = await getDoc(booking.court_ref);
            if (courtSnap.exists()) {
                const courtData = courtSnap.data();
                await updateDoc(bookingRef, {
                    court_name: courtData.name_or_number,          // Nouvelle valeur pour 'age
                });
            }
        }
        if (booking.transaction_ref) {
            const transactionRef = doc((collection(clubRef, "COURT_TRANSACTIONS")), booking.transaction_ref.id);
            const transactionSnap = await getDoc(booking.transaction_ref);
            console.log("transaction OKAY", transactionRef.id);
            
            if (transactionSnap.exists()) {
                const transactionData = transactionSnap.data();
                //const siteRef = doc(collection(clubRef, "SITES"), site);
                if (!transactionData.hasOwnProperty('site_name')) {
                    console.log("no site", booking.uid)
                    const siteSnap = await getDoc(transactionData.site_ref);
                    if (siteSnap.exists()) {
                        const siteData = siteSnap.data();
                        await updateDoc(transactionRef, {
                            site_name: siteData.name,          // Nouvelle valeur pour 'age
                        });
                    }
                }
                if (!transactionData.hasOwnProperty('court_name')) {
                    console.log("no court", booking.uid)
                    const courtSnap = await getDoc(transactionData.court_ref);
                    if (courtSnap.exists()) {
                        const courtData = courtSnap.data();
                        await updateDoc(transactionRef, {
                            court_name: courtData.name_or_number,          // Nouvelle valeur pour 'age
                        });
                    }
                }
                if (!transactionData.hasOwnProperty('payment_provider')) {
                    console.log("no payment_provider", booking.uid)
                    await updateDoc(transactionRef, {
                        payment_provider: "datatrans",          // Nouvelle valeur pour 'age
                    });
                }
            } else {
                await deleteDoc(transactionRef);
            }
        }
    }
    */
<<<<<<< HEAD
    console.log("second ondition")
=======
    // console.log("second condition");
>>>>>>> bb43e94 (add dialog delete booking)
=======
>>>>>>> 1bc3946 (last version to be sure)
    return querySnapshotBooking.docs
        .map((bookingDoc) => {
            const { uid, user_info, transaction_ref, type, description, access_code, created_date, first_booking_time, last_booking_time, amount_paid, match_start_date, match_finished_date, club_ref, site_name, court_name, site_ref, court_ref, is_from_app: appFlag } = bookingDoc.data();
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
                    type: type,
                    access_code: access_code,
                    description: description,
                };
            }
        })
        .filter(Boolean); // Supprime les valeurs undefined
}
export async function getBookingListCalendar(querySnapshotBooking, is_pending = false) {
    return querySnapshotBooking.docs
        .map((bookingDoc) => {
            const { uid, user_info, transaction_ref, type, description, access_code, created_date, first_booking_time, last_booking_time, amount_paid, match_start_date, match_finished_date, club_ref, site_name, court_name, site_ref, court_ref, is_from_app: appFlag } = bookingDoc.data();
            const createdDateTimestamp = created_date;
            const createdDate = new Date(createdDateTimestamp.seconds * 1_000);
            const matchDateTimestamp = match_start_date;
            const matchDate = new Date(matchDateTimestamp.seconds * 1_000);
            const matchDateTimestampF = match_finished_date;
            const matchDateF = new Date(matchDateTimestampF.seconds * 1_000);
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
                duration_DO: last_booking_time - first_booking_time + 0.5,
                duration: `${parseDoubleToHourInterval(last_booking_time - first_booking_time + 0.5)}`,
                status: is_pending ? "En attente" : "Confirmé",
                transaction_uid: transaction_ref ? transaction_ref.id : "",
                type: type,
                access_code: access_code,
                description: description,
                //const startDate = new Date(booking.match_start_date).toISOString();
                //const endDate = new Date(booking.match_finished_date).toISOString();
                //id: uid,
                site_uid: site_ref.id,
                court_uid: court_ref.id,
                match_start_date: new Date(matchDate).toISOString(),
                match_finished_date: new Date(matchDateF).toISOString(),
                //title: "Emilie Devaud",
                //start: "2024-11-30T07:00:00",
                //end: "2024-11-30T08:30:00",
                backgroundColor: "green", // Changer la couleur de fond
                borderColor: "darkgreen", // Couleur de bordure
                textColor: "white", // Couleur du texte
            };
        })
        .filter(Boolean); // Supprime les valeurs undefined
}
export function getOneBookingCalendar(bookingDoc, is_pending = false) {
    const { uid, user_info, transaction_ref, type, description, access_code, created_date, first_booking_time, last_booking_time, amount_paid, match_start_date, match_finished_date, club_ref, site_name, court_name, site_ref, court_ref, is_from_app, is_from_web_app } = bookingDoc.data();
    const createdDateTimestamp = created_date;
    const createdDate = new Date(createdDateTimestamp.seconds * 1_000);
    const matchDateTimestamp = match_start_date;
    const matchDate = new Date(matchDateTimestamp.seconds * 1_000);
    const matchDateTimestampF = match_finished_date;
    const matchDateF = new Date(matchDateTimestampF.seconds * 1_000);
    return {
        uid,
        name: user_info.name,
        phone: user_info.phone_number,
        email: user_info.email,
        created_date_D: createdDate,
        match_start_date_D: matchDate,
        match_finished_date_D: matchDateF,
        created_date: `${createdDate.getDate().toString().padStart(2, '0')}.${(createdDate.getMonth() + 1).toString().padStart(2, '0')}.${createdDate.getFullYear()} ${createdDate.getHours().toString().padStart(2, '0')}h${createdDate.getMinutes().toString().padStart(2, '0')}`,
        //match_date: matchDate,
        match_date: `${matchDate.getDate().toString().padStart(2, '0')}.${(matchDate.getMonth() + 1).toString().padStart(2, '0')}.${matchDate.getFullYear()} ${matchDate.getHours().toString().padStart(2, '0')}h${matchDate.getMinutes().toString().padStart(2, '0')}-${matchDateF.getHours().toString().padStart(2, '0')}h${matchDateF.getMinutes().toString().padStart(2, '0')}`,
        is_from_app: is_from_app,
        is_from_web_app: is_from_web_app,
        club_uid: club_ref.id,
        site_name: site_name,
        court_name: court_name,
        is_pending: is_pending,
        amount_paid: amount_paid,
        first_booking_time: first_booking_time,
        last_booking_time: last_booking_time,
        duration_DO: last_booking_time - first_booking_time + 0.5,
        duration: `${parseDoubleToHourInterval(last_booking_time - first_booking_time + 0.5)}`,
        status: is_pending ? "En attente" : "Confirmé",
        transaction_uid: transaction_ref ? transaction_ref.id : "",
        type: type,
        access_code: access_code,
        description: description,
        //const startDate = new Date(booking.match_start_date).toISOString();
        //const endDate = new Date(booking.match_finished_date).toISOString();
        //id: uid,
        site_uid: site_ref.id,
        court_uid: court_ref.id,
        match_start_date: new Date(matchDate).toISOString(),
        match_finished_date: new Date(matchDateF).toISOString(),
        //title: "Emilie Devaud",
        //start: "2024-11-30T07:00:00",
        //end: "2024-11-30T08:30:00",
        backgroundColor: "green", // Changer la couleur de fond
        borderColor: "darkgreen", // Couleur de bordure
        textColor: "white", // Couleur du texte
    };
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
    });

    return countBoookingsTotal > 0 ? countBoookingsPlayPad * 100 / countBoookingsTotal : 0;
}
export async function getRateHoursPlayPad(querySnapshotBooking) {
    let countBoookingsPlayPad = 0;
    let countBoookingsTotal = 0;
    for (const docData of querySnapshotBooking.docs) {
        const booking = docData.data();
        const addValue = booking.last_booking_time - booking.first_booking_time + 0.5;
        if (booking.is_from_app) {
            countBoookingsPlayPad += addValue;
        }
        countBoookingsTotal += addValue;
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
        //doc.id, " => ", doc.data());
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
        }
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
export function getTypeBookingJson(type, lang = "fr") {
    if (type == "Match") {
        return { value: "Match", name: "Match" };
    }
    if (type == "Lesson") {
        return { value: "Lesson", name: "Cours" };
    }
    if (type == "Training") {
        return { value: "Training", name: "Entrainement" };
    }
    if (type == "Tournament") {
        return { value: "Tournament", name: "Tournoi" };
    }
    return { value: "Unknow", name: "Inonnu" };
}
export function getTypeBookingStr(type, lang = "fr") {
    if (type == "Match") {
        return "Match";
    }
    if (type == "Lesson") {
        return "Cours";
    }
    if (type == "Training") {
        return "Entrainement";
    }
    if (type == "Tournament") {
        return "Tournoi";
    }
    return "Inconnu";
}
export async function isBookedTime(
    bookingId,
    collectionName,
    clubId,
    courtRef,
    year,
    dayOfYear,
    time = 0
) {
    const { startOfDay, endOfDay } = getStartAndEndOfDay(year, dayOfYear);

    // Construire une requête pour les réservations du jour
    const bookingsQuery = query(
        collection(doc(firestore, "CLUBS", clubId), collectionName),
        where("match_start_date", ">=", startOfDay),
        where("match_start_date", "<=", endOfDay),
        where("court_ref", "==", courtRef)
    );

    // Récupérer les documents
    const bookingsSnapshot = await getDocs(bookingsQuery);

    const bookings = await Promise.all(
        bookingsSnapshot.docs.map(async (bookingDoc) => {
            // Récupérer les sous-données si nécessaire
            const bookingRef = bookingDoc.ref;
            const subData = await getFirestoreSubData(clubId, "CLUBS", bookingRef.id, collectionName);
            return subData;
        })
    );

    // Vérification de la plage horaire
    for (const booking of bookings) {
        const match_start_timestamp = booking.match_start_date;
        const match_end_timestamp = booking.match_finished_date;

        // Convertir les timestamps Firestore en objets Date
        const startDate = new Date(match_start_timestamp.seconds * 1000);
        const endDate = new Date(match_end_timestamp.seconds * 1000);

        // Gérer le décalage horaire
        const jetlag = isSummerTime(startDate) ? 2 : 1;
        //const start_date = addHoursToDate(startDate, jetlag);
        //const end_date = addHoursToDate(endDate, jetlag);
        const start_date = startDate;
        const end_date = endDate;

        // Calculer les heures de début et de fin
        const hourStart = start_date.getHours();
        const minutesStart = start_date.getMinutes();
        const bookingTimeValueStart = hourStart + minutesStart / 60;

        const hourEnd = end_date.getHours();
        const minutesEnd = end_date.getMinutes();
        const bookingTimeValueEnd = hourEnd + minutesEnd / 60;
        if (booking.uid != bookingId && time >= bookingTimeValueStart && time < bookingTimeValueEnd) {
            return true;
        }
    }
    return false;
}
