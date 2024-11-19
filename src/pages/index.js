import React, { useEffect, useState } from 'react';
import { DashboardPage } from "@/devlink";
import Head from "next/head";
import LayoutLogin from "@/components/layouts/LayoutLogin";
import { LINK_PAGE_DASHBOARD, LINK_PAGE_MANAGE, PLAYPAD_CREATION_YEAR, START_BOOKING_YEAR, TITLE_PAGE_DASHBOARD, TITLE_WEB_APP } from "@/constants";
import { useAuth } from "@/providers/AuthProvider";
import { Button, CircularProgress, MenuItem, Select, Stack } from '@mui/material';
import { collection, query, where, getDocs, doc } from "firebase/firestore";
import { firestore } from '@/firebase';
import { formatCountBookings, formatCurrency, formatNumber, formatPercentage, getDaysInMonth, getFirstAndLastDayOfDay, getFirstAndLastDayOfMonth, getFirstAndLastDayOfYear } from '@/functions';
import { getCountBookingsClub, getCountBookingsPlayPad, getCountBookingsTotal, getRateBookingsClub, getRateBookingsPlayPad, getRateHoursClub, getRateHoursPlayPad } from '@/functions/bookings';
import { getRevenuesClub, getRevenuesPlayPad, getRevenuesTotal, getRevenuesTotalCourt, getRevenuesTotalSite } from '@/functions/transactions';
import PieChart from '@/components/PieChart';
import LineChart from '@/components/LineChart';

const MONTHS = [
  { value: 0, text: "Tous" },
  { value: 1, text: "Janvier" },
  { value: 2, text: "Février" },
  { value: 3, text: "Mars" },
  { value: 4, text: "Avril" },
  { value: 5, text: "Mai" },
  { value: 6, text: "Juin" },
  { value: 7, text: "Juillet" },
  { value: 8, text: "Août" },
  { value: 9, text: "Septembre" },
  { value: 10, text: "Octobre" },
  { value: 11, text: "Novembre" },
  { value: 12, text: "Décembre" },
];

var DAYS = [
  { value: 0, text: "Tous" },
];

const YEARS = [
  { value: 0, text: "Tous" }
];
for (let i = START_BOOKING_YEAR; i <= new Date().getFullYear(); i++) {
  YEARS.push({ value: i, text: "" + i });
}

const SITES = [
  { value: 0, name: "Tous" }
];
var COURTS = [
  { value: 0, name: "Tous" }
];


export default function Home() {
  const { login, user, logout, club } = useAuth();
  const [clubName, setClubName] = useState('');
  const [clubLogo, setClubLogo] = useState('');
  const [day, setDay] = useState(new Date().getDate());
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [year, setYear] = useState(new Date().getFullYear());
  const [isLoading, setIsLoading] = useState(false);
  const [disabledAllMonth, setDisabledAllMonth] = useState(false);
  const [disabledAllYear, setDisabledAllYear] = useState(false);
  const [countBookingsClub, setCountBookingsClub] = useState(0);
  const [countBookingsPlayPad, setCountBookingsPlayPad] = useState(0);
  const [countBookingsTotal, setCountBookingsTotal] = useState(0);
  const [revenuesClubs, setRevenuesClubs] = useState(0);
  const [revenuesPlayPad, setRevenuesPlayPad] = useState(0);
  const [revenuesTotal, setRevenuesTotal] = useState(0);
  const [revenuesTotalSite, setRevenuesTotalSite] = useState(0);
  const [revenuesTotalCourt, setRevenuesTotalCourt] = useState(0);


  const [rateBookingPlayPad, setRateBookingPlayPad] = useState(0);
  const [rateBookingClub, setRateBookingClub] = useState(0);

  const [rateHoursPlayPad, setRateHourPlayPad] = useState(0);
  const [rateHoursClub, setRateHourClub] = useState(0);



  //const year = new Date().getFullYear();
  const [selectedSite, setSelectedSite] = useState(0);
  const [selectedCourt, setSelectedCourt] = useState(0);
  const [siteslub, setSitesClub] = useState(SITES);
  const handleLogout = async () => {
    try {
      await logout();
      console.log("disconnect");
    } catch (error) {
      console.error('Login failed:', error);
    }
  };
  async function initSites(club, site = 0, court = 0, month = 0, year = 2024) {
    const clubRef = doc(firestore, "CLUBS", club.uid);
    const querySite = query(collection(clubRef, "SITES"),
      //where("is_from_app", "==", true),
      // where("match_start_date", ">=", firstDay),
      // where("match_start_date", "<=", lastDay),
    );
    const querySnapshotSites = await getDocs(querySite);
    for (let snapshotSite of querySnapshotSites.docs) {
      const site = snapshotSite.data();
      console.log("site", site.name);
      SITES.push({ value: site.uid, name: site.name });
    }
    console.log("size", querySnapshotSites.size)
  }
  async function initCourts(club, site = 0, court = 0, month = 0, year = 2024) {
    const clubRef = doc(firestore, "CLUBS", club.uid);
    var queryCourt = query(collection(clubRef, "COURTS"),
      //where("is_from_app", "==", true),
      // where("match_start_date", ">=", firstDay),
      // where("match_start_date", "<=", lastDay),
    );
    if (site != 0) {
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
      console.log("court", court.name_or_number);
      newCourts.push({ value: court.uid, name: court.name_or_number });
    }
    COURTS = newCourts.sort((a, b) => a.name.localeCompare(b.name));
    COURTS.unshift({ value: 0, name: "Tous" });
    //COURTS = COURTS.concat(newCourts);
  }
  function initDays(month = 0, year=0) {
    const newTab = getDaysInMonth(month, year);
    DAYS = [{ value: 0, text: "Tous" }];
    for(let element of newTab) {
DAYS.push({ value: element, text: ""+element },);
    }
  }
  async function getBookings(club, site = 0, court = 0, day=0,month = 0, year = 2024) {
    console.log("try get bookings");
    //const { firstDay, lastDay } = getFirstAndLastDayOfMonth(year, month - 1);
    const clubRef = doc(firestore, "CLUBS", club.uid);
    //setSitesClub();
    let queryBooking;
    let queryTransaction;

    setIsLoading(true);
    if (site != 0) {
      const siteRef = doc(collection(clubRef, "SITES"), site);
      if (day != 0) {
        setDisabledAllYear(true);
        setDisabledAllMonth(true);
        //const { firstDay, lastDay } = getFirstAndLastDayOfMonth(month - 1, year);
        const { firstDay, lastDay } = getFirstAndLastDayOfDay(day, month - 1, year);
        //(day, month, year)
        queryBooking = query(collection(clubRef, "COURT_BOOKINGS"),
          //where("is_from_app", "==", true),
          where("site_ref", "==", siteRef),
          where("match_start_date", ">=", firstDay),
          where("match_start_date", "<=", lastDay),
        );
        queryTransaction = query(collection(clubRef, "COURT_TRANSACTIONS"),
          //where("is_from_app", "==", true),
          where("site_ref", "==", siteRef),
          where("payment_date", ">=", firstDay),
          where("payment_date", "<=", lastDay),
        );
      } else if (month != 0) {
        setDisabledAllYear(true);
        const { firstDay, lastDay } = getFirstAndLastDayOfMonth(month - 1, year);
        queryBooking = query(collection(clubRef, "COURT_BOOKINGS"),
          where("site_ref", "==", siteRef),
          where("match_start_date", ">=", firstDay),
          where("match_start_date", "<=", lastDay),
        );
        queryTransaction = query(collection(clubRef, "COURT_TRANSACTIONS"),
          where("site_ref", "==", siteRef),
          where("payment_date", ">=", firstDay),
          where("payment_date", "<=", lastDay),
        );
        if (court != 0) {
          const courtRef = doc(collection(clubRef, "COURTS"), court);
          queryBooking = query(collection(clubRef, "COURT_BOOKINGS"),
            where("site_ref", "==", siteRef),
            where("court_ref", "==", courtRef),
            where("match_start_date", ">=", firstDay),
            where("match_start_date", "<=", lastDay),
          );
          queryTransaction = query(collection(clubRef, "COURT_TRANSACTIONS"),
            where("site_ref", "==", siteRef),
            where("court_ref", "==", courtRef),
            where("payment_date", ">=", firstDay),
            where("payment_date", "<=", lastDay),
          );
        }
      } else if (year != 0) {
        //const requestMonth = month!=0?month:0;
        setDisabledAllYear(false);
        setMonth(0);
        const { firstDay, lastDay } = getFirstAndLastDayOfYear(year);
        queryBooking = query(collection(clubRef, "COURT_BOOKINGS"),
          // where("is_from_app", "==", true),
          where("site_ref", "==", siteRef),
          where("match_start_date", ">=", firstDay),
          where("match_start_date", "<=", lastDay),
        );
        queryTransaction = query(collection(clubRef, "COURT_TRANSACTIONS"),
          //where("is_from_app", "==", true),
          where("site_ref", "==", siteRef),
          where("payment_date", ">=", firstDay),
          where("payment_date", "<=", lastDay),
        );
        if (court != 0) {
          const courtRef = doc(collection(clubRef, "COURTS"), court);
          queryBooking = query(collection(clubRef, "COURT_BOOKINGS"),
            where("site_ref", "==", siteRef),
            where("court_ref", "==", courtRef),
            where("match_start_date", ">=", firstDay),
            where("match_start_date", "<=", lastDay),
          );
          queryTransaction = query(collection(clubRef, "COURT_TRANSACTIONS"),
            where("site_ref", "==", siteRef),
            where("court_ref", "==", courtRef),
            where("payment_date", ">=", firstDay),
            where("payment_date", "<=", lastDay),
          );
        }
      } else {
        setDisabledAllYear(false);
        queryBooking = query(collection(clubRef, "COURT_BOOKINGS"),
          where("site_ref", "==", siteRef),
          //where("is_from_app", "==", true),
          //where("match_start_date", ">=", firstDay),
          //where("match_start_date", "<=", lastDay),
        );
        queryTransaction = query(collection(clubRef, "COURT_TRANSACTIONS"),
          where("site_ref", "==", siteRef),
          //where("is_from_app", "==", true),
          //where("payment_date", ">=", firstDay),
          //where("payment_date", "<=", lastDay),
        );
        if (court != 0) {
          const courtRef = doc(collection(clubRef, "COURTS"), court);
          queryBooking = query(collection(clubRef, "COURT_BOOKINGS"),
            where("site_ref", "==", siteRef),
            where("court_ref", "==", courtRef),
            where("match_start_date", ">=", firstDay),
            where("match_start_date", "<=", lastDay),
          );
          queryTransaction = query(collection(clubRef, "COURT_TRANSACTIONS"),
            where("site_ref", "==", siteRef),
            where("court_ref", "==", courtRef),
            where("payment_date", ">=", firstDay),
            where("payment_date", "<=", lastDay),
          );
        }
      }
    } else if (court != 0) {
      const courtRef = doc(collection(clubRef, "COURTS"), court);
      if (day != 0) {
        setDisabledAllYear(true);
        setDisabledAllMonth(true);
        //const { firstDay, lastDay } = getFirstAndLastDayOfMonth(month - 1, year);
        const { firstDay, lastDay } = getFirstAndLastDayOfDay(day, month - 1, year);
        //(day, month, year)
        queryBooking = query(collection(clubRef, "COURT_BOOKINGS"),
          //where("is_from_app", "==", true),
          where("court_ref", "==", courtRef),
          where("match_start_date", ">=", firstDay),
          where("match_start_date", "<=", lastDay),
        );
        queryTransaction = query(collection(clubRef, "COURT_TRANSACTIONS"),
          //where("is_from_app", "==", true),
          where("court_ref", "==", courtRef),
          where("payment_date", ">=", firstDay),
          where("payment_date", "<=", lastDay),
        );
      } else if (month != 0) {
        setDisabledAllYear(true);
        const { firstDay, lastDay } = getFirstAndLastDayOfMonth(month - 1, year);
        queryBooking = query(collection(clubRef, "COURT_BOOKINGS"),
          where("court_ref", "==", courtRef),
          where("match_start_date", ">=", firstDay),
          where("match_start_date", "<=", lastDay),
        );
        queryTransaction = query(collection(clubRef, "COURT_TRANSACTIONS"),
          where("court_ref", "==", courtRef),
          where("payment_date", ">=", firstDay),
          where("payment_date", "<=", lastDay),
        );
      } else if (year != 0) {
        //const requestMonth = month!=0?month:0;
        setDisabledAllYear(false);
        setMonth(0);
        const { firstDay, lastDay } = getFirstAndLastDayOfYear(year);
        queryBooking = query(collection(clubRef, "COURT_BOOKINGS"),
          // where("is_from_app", "==", true),
          where("court_ref", "==", courtRef),
          where("match_start_date", ">=", firstDay),
          where("match_start_date", "<=", lastDay),
        );
        queryTransaction = query(collection(clubRef, "COURT_TRANSACTIONS"),
          //where("is_from_app", "==", true),
          where("court_ref", "==", courtRef),
          where("payment_date", ">=", firstDay),
          where("payment_date", "<=", lastDay),
        );
      } else {
        setDisabledAllYear(false);
        queryBooking = query(collection(clubRef, "COURT_BOOKINGS"),
          where("court_ref", "==", courtRef),
          //where("is_from_app", "==", true),
          //where("match_start_date", ">=", firstDay),
          //where("match_start_date", "<=", lastDay),
        );
        queryTransaction = query(collection(clubRef, "COURT_TRANSACTIONS"),
          where("court_ref", "==", courtRef),
          //where("is_from_app", "==", true),
          //where("payment_date", ">=", firstDay),
          //where("payment_date", "<=", lastDay),
        );
      }
    } else {
      if (day != 0) {
        setDisabledAllYear(true);
        setDisabledAllMonth(true);
        //const { firstDay, lastDay } = getFirstAndLastDayOfMonth(month - 1, year);
        const { firstDay, lastDay } = getFirstAndLastDayOfDay(day, month - 1, year);
        //(day, month, year)
        queryBooking = query(collection(clubRef, "COURT_BOOKINGS"),
          //where("is_from_app", "==", true),
          where("match_start_date", ">=", firstDay),
          where("match_start_date", "<=", lastDay),
        );
        queryTransaction = query(collection(clubRef, "COURT_TRANSACTIONS"),
          //where("is_from_app", "==", true),
          where("payment_date", ">=", firstDay),
          where("payment_date", "<=", lastDay),
        );
      } else if (month != 0) {
        setDisabledAllYear(true);
        const { firstDay, lastDay } = getFirstAndLastDayOfMonth(month - 1, year);
        queryBooking = query(collection(clubRef, "COURT_BOOKINGS"),
          //where("is_from_app", "==", true),
          where("match_start_date", ">=", firstDay),
          where("match_start_date", "<=", lastDay),
        );
        queryTransaction = query(collection(clubRef, "COURT_TRANSACTIONS"),
          //where("is_from_app", "==", true),
          where("payment_date", ">=", firstDay),
          where("payment_date", "<=", lastDay),
        );
      } else if (year != 0) {
        //const requestMonth = month!=0?month:0;
        setDisabledAllYear(false);
        setMonth(0);
        const { firstDay, lastDay } = getFirstAndLastDayOfYear(year);
        queryBooking = query(collection(clubRef, "COURT_BOOKINGS"),
          // where("is_from_app", "==", true),
          where("match_start_date", ">=", firstDay),
          where("match_start_date", "<=", lastDay),
        );
        queryTransaction = query(collection(clubRef, "COURT_TRANSACTIONS"),
          //where("is_from_app", "==", true),
          where("payment_date", ">=", firstDay),
          where("payment_date", "<=", lastDay),
        );
      } else {
        setDisabledAllYear(false);
        queryBooking = query(collection(clubRef, "COURT_BOOKINGS"),
          //where("is_from_app", "==", true),
          //where("match_start_date", ">=", firstDay),
          //where("match_start_date", "<=", lastDay),
        );
        queryTransaction = query(collection(clubRef, "COURT_TRANSACTIONS"),
          //where("is_from_app", "==", true),
          //where("payment_date", ">=", firstDay),
          //where("payment_date", "<=", lastDay),
        );
      }
    }
    const querySnapshotBooking = await getDocs(queryBooking);
    const querySnapshotTransaction = await getDocs(queryTransaction);

    const [countBoookingsClub, countBoookingsPlayPad, countBookingTotal,
      revenuesClub, revenuesPlayPad, revenuesTotal, revenuesTotalSite, revenuesTotalCourt,
      rateBookingPlayPad, rateBookingClub, rateHourPlayPad, rateHourClub] = await Promise.all([
        getCountBookingsClub(querySnapshotBooking),
        getCountBookingsPlayPad(querySnapshotBooking),
        getCountBookingsTotal(querySnapshotBooking),
        getRevenuesClub(clubRef, querySnapshotTransaction),
        getRevenuesPlayPad(clubRef, querySnapshotTransaction),
        getRevenuesTotal(querySnapshotTransaction),
        getRevenuesTotalSite(clubRef, site, querySnapshotTransaction),
        getRevenuesTotalCourt(clubRef, site, court, querySnapshotTransaction),
        getRateBookingsPlayPad(querySnapshotBooking),
        getRateBookingsClub(querySnapshotBooking),
        getRateHoursPlayPad(querySnapshotBooking),
        getRateHoursClub(querySnapshotBooking),
        //countBookingsPlayPad(club.uid, month, year),
      ]);
    setCountBookingsTotal(countBookingTotal);
    setCountBookingsPlayPad(countBoookingsPlayPad);
    setCountBookingsClub(countBoookingsClub);

    setRevenuesClubs(revenuesClub);
    setRevenuesPlayPad(revenuesPlayPad);
    setRevenuesTotal(revenuesTotal);
    setRevenuesTotalSite(revenuesTotalSite);
    setRevenuesTotalCourt(revenuesTotalCourt);

    setRateBookingPlayPad(rateBookingPlayPad);
    setRateBookingClub(rateBookingClub);
    setRateHourPlayPad(rateHourPlayPad);
    setRateHourClub(rateHourClub);

    setIsLoading(false);
    console.log("finish try", querySnapshotBooking.size)
    setIsLoading(false);
  }

  useEffect(() => {
    if (club) {
      setClubName(club.name);
      setClubLogo(club.logo);
      initSites(club);
      initCourts(club, selectedSite);
      initDays(month, year);
      var currentYear = year;
      if (month != 0) {
        if (currentYear == 0) {
          currentYear = new Date().getFullYear();
        }
        //setMonth(event.target.value);
        setYear(currentYear);
      }
      getBookings(club, selectedSite, selectedCourt, day, month, currentYear);
    }
  }, [club]);
  const handleChangeDay = (event) => {
    //initDays(event.target.value, currentYear);
    //setMonth(event.target.value);
    //setYear(currentYear);
    setDay(event.target.value);
    getBookings(club, selectedSite, selectedCourt, event.target.value, month, year);
  };
  const handleChangeMonth = (event) => {
    var currentYear = year;
    if (currentYear == 0) {
      currentYear = new Date().getFullYear();
    }
    initDays(event.target.value, currentYear);
    setMonth(event.target.value);
    setYear(currentYear);
    getBookings(club, selectedSite, selectedCourt, day, event.target.value, currentYear);
  };
  const handleChangeYear = (event) => {
    setYear(event.target.value);
    getBookings(club, selectedSite, selectedCourt, day, month, event.target.value);
  };
  const handleChangeSite = (event) => {
    const newSite = event.target.value;
    setSelectedSite(newSite);
    if (newSite != 0) {
      setSelectedCourt(0);
    }
    initCourts(club, newSite);
    getBookings(club, newSite, selectedCourt, day, month, year);
  };
  const handleChangeCourt = (event) => {
    setSelectedCourt(event.target.value);
    getBookings(club, selectedSite, event.target.value, day, month, year);
  };

  return (<><Head>
    <title>{`${TITLE_WEB_APP} | ${TITLE_PAGE_DASHBOARD}`}</title>
  </Head>
    <LayoutLogin
      title={TITLE_PAGE_DASHBOARD}
      component={<DashboardPage
        titlePage={TITLE_PAGE_DASHBOARD}
        clubName={clubName}
        clubLogo={clubLogo}
        isLoading={isLoading}
        isNotLoading={!isLoading}
        componentProgress={<CircularProgress color="primary" size={'20px'} />}

        nBookingslub={formatCountBookings(countBookingsClub)}
        nBookingsPlayPad={formatCountBookings(countBookingsPlayPad)}
        nBookingsTotal={formatCountBookings(countBookingsTotal)}
        //revenuesTotal={"72'000 CHF"}
        revenuesClub={formatCurrency(revenuesClubs)}
        revenuesPlayPad={formatCurrency(revenuesPlayPad)}
        revenuesTotal={formatCurrency(revenuesTotal)}
        revenuesTotalSite={formatCurrency(revenuesTotalSite)}
        revenuesTotalCourt={formatCurrency(revenuesTotalCourt)}

        //rateBookingPlayPad={"43.28%"}
        rateBookingPlayPad={formatPercentage(rateBookingPlayPad)}
        rateBookingClub={formatPercentage(rateBookingClub)}
        componentChartRateBooking={<PieChart playpadRate={rateBookingPlayPad} clubRate={rateBookingClub} />}
        componentChartRateHour={<PieChart playpadRate={rateHoursPlayPad} clubRate={rateHoursClub} />}
        componentChartRateTotal={<PieChart playpadRate={(rateBookingPlayPad + rateHoursPlayPad) / 2} clubRate={(rateBookingClub + rateHoursClub) / 2} />}
        componentChartRevenues={<LineChart playpadRate={rateHoursPlayPad} clubRate={rateHoursClub} />}
        componentDays={<Select
          className='form_input is-select-input is-dashboard'
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={day}
          label="Day"
          onChange={handleChangeDay}
          sx={{ height: 40 }}
        >
          {
            DAYS.map((obj, index) => {
              return (
                <MenuItem key={`${obj.text}${index}`} value={obj.value}>{obj.text}</MenuItem>
              )
            })
          }
        </Select>}
        componentMonth={<Select
          className='form_input is-select-input is-dashboard'
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={month}
          label="Month"
          onChange={handleChangeMonth}
          sx={{ height: 40 }}
        >
          {
            MONTHS.map((obj, index) => {
              return (
                <MenuItem disabled={disabledAllMonth && index == 0} key={`${obj.text}${index}`} value={obj.value}>{obj.text}</MenuItem>
              )
            })
          }
        </Select>}
        componentYear={<Select
          className='form_input is-select-input is-dashboard'
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={year}
          label="Year"
          onChange={handleChangeYear}
          sx={{ height: 40 }}
        >
          {
            YEARS.map((obj, index) => {
              return (
                <MenuItem disabled={disabledAllYear && index == 0} key={`${obj.text}${index}`} value={obj.value}>{obj.text}</MenuItem>
              )
            })
          }
        </Select>}
        componentSite={<Select
          className='form_input is-select-input is-dashboard'
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedSite}
          label="Sites"
          onChange={handleChangeSite}
          sx={{ height: 40 }}
        >
          {
            SITES.sort((a, b) => a.value - b.value).map((obj, index) => {
              return (
                <MenuItem key={`${obj.name}${index}`} value={obj.value}>{obj.name}</MenuItem>
              )
            })
          }
        </Select>}

        componentCourts={<Select
          className='form_input is-select-input is-dashboard'
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedCourt}
          label="Courts"
          onChange={handleChangeCourt}
          sx={{ height: 40 }}
        >
          {
            COURTS.sort((a, b) => a.value - b.value).map((obj, index) => {
              return (
                <MenuItem key={`${obj.name}${index}`} value={obj.value}>{obj.name}</MenuItem>
              )
            })
          }
        </Select>}
        //linkDashboard={LINK_PAGE_DASHBOARD}
        //linkManage={LINK_PAGE_MANAGE}
        styleDashboard={{
          className: "sidebar4_link w--current",
        }}
        disconnectButtonProps={{
          onClick: handleLogout,  // Ajout de la fonction onClick ici
          //className: "btn-primary",  // Ajout d'une classe CSS
          //type: "button"
        }} />}
    /></>);
}
