import React, { useEffect, useState, useRef } from "react";
import FullCalendar from "@fullcalendar/react";
import resourceTimeGridPlugin from "@fullcalendar/resource-timegrid";
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from "@fullcalendar/interaction";
import { Stack } from "@mui/material";
import { collection, doc, getDocs, query, where } from "firebase/firestore";
import { getFirstAndLastDayOfDay, getFirstAndLastDayOfMonth, getFirstAndLastDayOfYear } from "@/functions";
import { firestore } from "@/firebase";
import { getBookingListCalendar } from "@/functions/bookings";
import { getFirstAndLastDayOfWeek, getWeek, removeMinutesToDate } from "@/functions/manage-time";
import { LastPage } from "@mui/icons-material";
//import listPlugin from "@fullcalendar/list";

const Calendar = ({ isReseting, setIsReseting, clubUid, setIsLoading, siteUid = 0, courtUid = 0, setCountBookings, setCountPendingBookings }) => {
    const calendarRef = useRef(null);
    const today = new Date();
    const [firstDay, setFirstDay] = useState(getFirstAndLastDayOfDay(today.getDate(), today.getMonth(), today.getFullYear()).firstDay);
    const [lastDay, setLastDay] = useState(getFirstAndLastDayOfDay(today.getDate(), today.getMonth(), today.getFullYear()).lastDay);
    const [week, setWeek] = useState(0);
    const [day, setDay] = useState(new Date().getDate());
    const [month, setMonth] = useState(new Date().getMonth() + 1);
    const [year, setYear] = useState(new Date().getFullYear());
    const [events, setEvents] = useState([]);
    const [resources, setResources] = useState([]);
    const [isResourceView, setIsResourceView] = useState(true);
    const [initialView, setInitialView] = useState("resourceTimeGridDay");
    const [rightToolbar, setRightToolbar] = useState("resourceTimeGridDay,resourceTimeGridWeek");
    const [slotMinTime, setSlotMinTime] = useState("06:00:00");
    const [slotMaxTime, setSlotMaxTime] = useState("24:00:00");
    // Recalculer les valeurs dynamiquement


    function getQueryBookingStats(clubRef, site, court, firstDay, lastDay, pending = false) {
        //const clubRef = doc(firestore, "CLUBS", club.uid);
        const collectionStr = pending ? "COURT_PENDING_BOOKINGS" : "COURT_BOOKINGS";
        let queryBookingStats;
        if (court != 0) {
            const courtRef = doc(collection(clubRef, "COURTS"), court);
            //var { firstDay, lastDay } = {};
            queryBookingStats = query(collection(clubRef, collectionStr),
                //where("site_ref", "==", siteRef),
                where("court_ref", "==", courtRef),
                where("match_start_date", ">=", firstDay),
                where("match_start_date", "<=", lastDay),
            );
        } else if (site != 0) {
            const siteRef = doc(collection(clubRef, "SITES"), site);
            if (court != 0) {
                const courtRef = doc(collection(clubRef, "COURTS"), court);
                queryBookingStats = query(collection(clubRef, collectionStr),
                    where("site_ref", "==", siteRef),
                    where("court_ref", "==", courtRef),
                    where("match_start_date", ">=", firstDay),
                    where("match_start_date", "<=", lastDay),
                );
            } else {
                queryBookingStats = query(collection(clubRef, collectionStr),
                    where("site_ref", "==", siteRef),
                    where("match_start_date", ">=", firstDay),
                    where("match_start_date", "<=", lastDay),
                );
            }
        } else {
            queryBookingStats = query(collection(clubRef, collectionStr),
                //where("site_ref", "==", siteRef),
                //where("court_ref", "==", courtRef),
                where("match_start_date", ">=", firstDay),
                where("match_start_date", "<=", lastDay),
            );
        }
        return queryBookingStats;
    }
    async function init(site = 0, court = 0, firstDay, lastDay) {
        const clubRef = doc(firestore, "CLUBS", clubUid);
        var queryCourt = query(collection(clubRef, "COURTS"),
            //where("site_uid", "==", site),
            // where("match_start_date", ">=", firstDay),
            // where("match_start_date", "<=", lastDay),
        );
        if (court != 0) {
            queryCourt = query(collection(clubRef, "COURTS"),
                where("uid", "==", courtUid),
                // where("match_start_date", ">=", firstDay),
                // where("match_start_date", "<=", lastDay),
            );
        } else if (site != 0) {
            queryCourt = query(collection(clubRef, "COURTS"),
                where("site_uid", "==", site),
                // where("match_start_date", ">=", firstDay),
                // where("match_start_date", "<=", lastDay),
            );
        }

        const querySnapshotCourts = await getDocs(queryCourt);
        var newCourts = [];
        for (let snapshotCourt of querySnapshotCourts.docs) {
            const court = snapshotCourt.data();
            newCourts.push({ id: court.name_or_number, title: court.name_or_number, className: "terrain-orange" });
        }
        newCourts = newCourts.sort((a, b) => { return a.title.localeCompare(b.title) });
        setResources(newCourts);
        console.log("courts", newCourts);
        const pendingQueryBooking = getQueryBookingStats(clubRef, site, court, firstDay, lastDay, true);
        const pendingQuerySnapshotBooking = await getDocs(pendingQueryBooking);
        const pendingCalendarBooking = await getBookingListCalendar(pendingQuerySnapshotBooking, true);
        const queryBooking = getQueryBookingStats(clubRef, site, court, firstDay, lastDay, false);
        const querySnapshotBooking = await getDocs(queryBooking);
        const calendarBooking = await getBookingListCalendar(querySnapshotBooking, false);
        const newBookings = [];
        var countBookings = 0;
        var countPendingBookings = 0;
        for (let booking of calendarBooking.concat(pendingCalendarBooking)) {
            //const court = snapshotCourt.data();
            //console.log("court", booking);
            if (booking.is_pending) {
                countPendingBookings++;
            } else {
                countBookings++;
            }
            newBookings.push({
                id: booking.uid,
                resourceId: booking.court_name,
                title: booking.name,
                start: booking.match_start_date,
                end: booking.match_finished_date,
                backgroundColor: booking.is_pending ? "var(--warning-devlink)" /*: booking.is_from_app ? "var(--playpad-primary)"*/ : "", // Changer la couleur de fond
                //borderColor: "darkgreen", // Couleur de bordure
                //textColor: theme.palette.text.primary, // Couleur du texte
                //borderLeft: "3px solid red",
            });
        }
        setEvents(newBookings);
        setCountBookings(countBookings);
        setCountPendingBookings(countPendingBookings);
        console.log("bookings", newBookings);
    }
    useEffect(() => {
        if (isReseting) {
            setEvents([]);
            setIsLoading(true);
            //firstDay = getFirstAndLastDayOfDay(day, month - 1, year).firstDay;
            //          lastDay = getFirstAndLastDayOfDay(day, month - 1, year).lastDay;
            init(siteUid, courtUid, firstDay, lastDay);
            const isResource = courtUid === 0;
            console.log("isResourceView recalculé :", isResource);
            console.log("courtUid :", courtUid, "resources.length :", resources.length);

            setRightToolbar(
                isResource
                    ? "resourceTimeGridDay,resourceTimeGridWeek"
                    : "resourceTimeGridDay,resourceTimeGridWeek,dayGridMonth,year"
            );
            setIsResourceView(isResource);
            setInitialView(isResource ? "resourceTimeGridDay" : "timeGridDay");
            //console.log("day change", week)
            setIsLoading(false);
            setIsReseting(false);
        }
    }, [isReseting])
    useEffect(() => {
        setIsLoading(true);
        //firstDay = getFirstAndLastDayOfDay(day, month - 1, year).firstDay;
        //          lastDay = getFirstAndLastDayOfDay(day, month - 1, year).lastDay;
        init(siteUid, courtUid, firstDay, lastDay);
        const isResource = courtUid === 0;
        console.log("isResourceView recalculé :", isResource);
        console.log("courtUid :", courtUid, "resources.length :", resources.length);

        setRightToolbar(
            isResource
                ? "resourceTimeGridDay,resourceTimeGridWeek"
                : "resourceTimeGridDay,resourceTimeGridWeek,dayGridMonth,year"
        );
        setIsResourceView(isResource);
        //setInitialView("resourceTimeGridDay");
        //console.log("day change", week)
        setIsLoading(false);
    }, [firstDay, lastDay, day, week, month, year]);
    useEffect(() => {
        setIsLoading(true);
        init(siteUid, courtUid, firstDay, lastDay);
        //console.log("site change", siteUid, "court change", courtUid);
        const isResource = courtUid === 0;
        console.log("isResourceView recalculé :", isResource);
        console.log("courtUid :", courtUid, "resources.length :", resources.length);

        setRightToolbar(
            isResource
                ? "resourceTimeGridDay,resourceTimeGridWeek"
                : "resourceTimeGridDay,resourceTimeGridWeek,dayGridMonth,year"
        );
        if (isResource) {
            //goToDate(new Date());
            setIsResourceView(isResource);
            setInitialView("resourceTimeGridDay");
            //simulateDatesSet("resourceTimeGridDay");
            
        }

        //setInitialView("resourceTimeGridDay");
        setIsLoading(false);
    }, [siteUid, courtUid]);

    const handleRefresh = () => {
        setIsLoading(true);
        setEvents([]);
        init(siteUid, courtUid, firstDay, lastDay);
        const isResource = courtUid === 0;
        console.log("isResourceView recalculé :", isResource);
        console.log("courtUid :", courtUid, "resources.length :", resources.length);

        setRightToolbar(
            isResource
                ? "resourceTimeGridDay,resourceTimeGridWeek"
                : "resourceTimeGridDay,resourceTimeGridWeek,dayGridMonth,year"
        );
        setIsResourceView(isResource);
        //setInitialView(isResource ? "resourceTimeGridDay" : "timeGridDay");
        //setInitialView("resourceTimeGridDay");
        console.log("site change", siteUid);
        setIsLoading(false);
    };

    const renderEventContent = (eventInfo) => {
        const { title, start, end } = eventInfo.event;
        const calculateDuration = (start, end) => {
            const startDate = new Date(start);
            const endDate = new Date(end);
            const diff = (endDate - startDate) / (1000 * 60);
            const hours = Math.floor(diff / 60);
            const minutes = diff % 60;
            return `${hours}h${minutes > 0 ? ` ${minutes}m` : ""}`;
        };
        const duration = calculateDuration(start, end);

        return (
            <div style={{ textAlign: 'start' }}>
                <div>{title}</div>
                <div style={{ fontWeight: "bold" }}>{`${new Date(start).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                })} - ${new Date(end).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                })}`}</div>
                <div>{duration}</div>
            </div>
        );
    };

    const handleEventClick = (clickInfo) => {
        // Récupérer les informations sur l'événement cliqué
        const { title, start, end, id } = clickInfo.event;

        // Par exemple, afficher un message ou lancer une action personnalisée
        alert(`Vous avez cliqué sur l'événement : 
- ID : ${id}
- Titre : ${title}
- Début : ${new Date(start).toLocaleString()}
- Fin : ${new Date(end).toLocaleString()}`);
    };

    const handleDatesSet = (info) => {
        // Récupérez les nouvelles dates de la vue
        const startDate = new Date(info.startStr); // Début de la période visible (format ISO)
        const endDate = removeMinutesToDate(new Date(info.endStr), 1); // Fin de la période visible (format ISO)
        const currentView = info.view.type; // Vue actuelle (ex : 'resourceTimeGridDay')
        var { firstDay, lastDay } = {};
        //var lastDay = getFirstAndLastDayOfDay(day, month - 1, year).lastDay;
        if (currentView == "resourceTimeGridDay" || currentView == "timeGridDay") {
            setDay(startDate.getDate());
            //setWeek(0);
            //setMonth(0);
            //setYear(0);
            firstDay = getFirstAndLastDayOfDay(startDate.getDate(), startDate.getMonth(), startDate.getFullYear()).firstDay;
            lastDay = getFirstAndLastDayOfDay(endDate.getDate(), endDate.getMonth(), endDate.getFullYear()).lastDay;
            setInitialView(currentView);
        } else if (currentView == "resourceTimeGridWeek" || currentView == "timeGridWeek") {
            //setDay(0);
            setWeek(getWeek(startDate));
            //setMonth(0);
            //setYear(0);
            firstDay = getFirstAndLastDayOfWeek(year, getWeek(startDate)).firstDay;
            lastDay = getFirstAndLastDayOfWeek(year, getWeek(endDate)).lastDay;
            setInitialView(currentView);
        } else if (currentView == "dayGridMonth") {
            setDay(0);
            setWeek(0);
            setMonth(startDate.getMonth() + 1);
            setYear(0);
            firstDay = getFirstAndLastDayOfMonth(startDate.getMonth(), startDate.getFullYear()).firstDay;
            lastDay = getFirstAndLastDayOfMonth(endDate.getMonth(), endDate.getFullYear()).lastDay;
            setInitialView("resourceTimeGridDay");
        } else if (currentView == "year") {
            setDay(0);
            setWeek(0);
            setMonth(0);
            setYear(startDate.getFullYear());
            //setYear(0);
            firstDay = getFirstAndLastDayOfYear(startDate.getFullYear()).firstDay;
            lastDay = getFirstAndLastDayOfYear(endDate.getFullYear()).lastDay;
            setInitialView("resourceTimeGridDay");
        } else {
            setDay(startDate.getDate());
            setWeek(0);
            setMonth(0);
            setYear(0);
            firstDay = getFirstAndLastDayOfDay(startDate.getDate(), month - 1, year).firstDay;
            lastDay = getFirstAndLastDayOfDay(endDate.getDate(), month - 1, year).lastDay;
            //setWeek(0);
            setInitialView(currentView);
        }

        //setMonth(startDate.getMonth() + 1);
        //setYear(startDate.getFullYear());
        setFirstDay(firstDay);
        setLastDay(lastDay);
        console.log(`Nouvelle période : ${new Date(startDate)} - ${endDate}`);
        console.log(`Vue actuelle : ${currentView}`);

        // Vous pouvez ici recharger les événements pour cette période
        // Exemple : fetchEvents(startDate, endDate);
    };
    const simulateDatesSet = (currentView) => {
        var today = new Date();
        var { firstDay, lastDay } = {};
        if (currentView == "resourceTimeGridDay" || currentView == "timeGridDay") {
            setDay(today.getDate());
            //setWeek(0);
            //setMonth(0);
            //setYear(0);
            firstDay = getFirstAndLastDayOfDay(today.getDate(), today.getMonth(), today.getFullYear()).firstDay;
            lastDay = getFirstAndLastDayOfDay(today.getDate(), today.getMonth(), today.getFullYear()).lastDay;
        }
        setInitialView(currentView);
        const simulatedInfo = {
            startStr: firstDay.toISOString(),
            endStr: lastDay.toISOString(),
            view: { type: currentView }, // Simulez la vue souhaitée
        };
        console.log("simulate");
        handleDatesSet(simulatedInfo);
    };

    function goNext() {
        const calendarApi = calendarRef.current.getApi()
        calendarApi.next()
      }
      const goToDate = (date) => {
        const calendarApi = calendarRef.current.getApi()
        calendarApi.gotoDate(date.toISOString())
        //console.log("go date", date);
      }

    return (
        <div style={{ margin: "20px" }}>
            <button onClick={goNext}>Go Next!</button>
            <FullCalendar
                ref={calendarRef}
                plugins={[resourceTimeGridPlugin, interactionPlugin, dayGridPlugin]}
                //initialView="resourceTimeGridDay"
                initialView={initialView}
                initialDate={new Date().toISOString()} // S'assurer que la période inclut vos événements
                firstDay={1} // Commence la semaine le lundi
                slotMinTime={slotMinTime}
                slotMaxTime={slotMaxTime}
                slotLabelContent={(info) => {
                    if (info.text === "all-day") {
                        return "Toute la journée"; // Remplace "all-day"
                    }
                    return info.text; // Conserve les autres labels
                }}
                //scrollTime="09:00:00" // Scroll automatique à 9h
                locale="fr"
                editable={true}
                selectable={true}
                resources={isResourceView ? resources : null}
                //resourceDidMount={handleResourceMount} // Appliquer les styles au montage des ressources
                events={events}
                views={{
                    year: {
                        type: "dayGrid", // Utilisation de la grille pour afficher l'année
                        //type: "dayGrid", // Utilisation de la grille pour afficher l'année
                        duration: { years: 1 }, // Plage de temps : 1 an
                        buttonText: "Année", // Texte du bouton
                    },
                }}
                headerToolbar={{
                    left: "prev,next today refreshButton",
                    center: `title`,
                    right: rightToolbar,
                    //right: "timeGridDay,timeGridWeek,dayGridMonth,year",
                }}
                titleFormat={{
                    year: "numeric", // Année complète (ex : 2024)
                    month: "long",   // Mois en lettres (ex : novembre)
                    day: "numeric",  // Jour (ex : 28)
                    weekday: "short", // Nom du jour (ex : jeudi)
                }}
                buttonText={{
                    today: "Aujourd'hui",  // Change le texte du bouton "today"
                    day: "Jour",           // Change le texte du bouton "day"
                    week: "Semaine",       // Change le texte du bouton "week"
                    month: "Mois",         // Si utilisé, change "month"
                    resourceTimeGridDay: "Jour",
                    resourceTimeGridWeek: "Semaine",
                    dayGridMonth: "Mois",
                    year: "Année", // Texte du bouton année
                }}
                customButtons={{
                    refreshButton: {
                        text: "Actualiser",
                        click: handleRefresh,
                        classNames: ['fc-refresh-button'], // Classe CSS personnalisée
                    },
                }}
                datesSet={handleDatesSet} // Appelé à chaque changement de période
                eventContent={renderEventContent} // Customisation des événements
                eventClick={handleEventClick} // Gestion du clic sur un événement
                height="auto"
            />
        </div>
    );
};

export default Calendar;
