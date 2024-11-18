import React, { useEffect, useState } from 'react';
import { DashboardPage } from "@/devlink";
import Head from "next/head";
import LayoutLogin from "@/components/layouts/LayoutLogin";
import { LINK_PAGE_DASHBOARD, LINK_PAGE_MANAGE, PLAYPAD_CREATION_YEAR, START_BOOKING_YEAR, TITLE_PAGE_DASHBOARD, TITLE_WEB_APP } from "@/constants";
import { useAuth } from "@/providers/AuthProvider";
import { Button, CircularProgress, MenuItem, Select, Stack } from '@mui/material';
import { collection, query, where, getDocs, doc } from "firebase/firestore";
import { firestore } from '@/firebase';
import { formatCountBookings, formatCurrency, formatNumber, formatPercentage, getFirstAndLastDayOfMonth, getFirstAndLastDayOfYear } from '@/functions';
import { getCountBookingsClub, getCountBookingsPlayPad, getCountBookingsTotal, getRateBookingsPlayPad } from '@/functions/bookings';
import { getRevenuesClub, getRevenuesPlayPad } from '@/functions/transactions';

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

const YEARS = [
  { value: 0, text: "Tous" }
];
for (let i = START_BOOKING_YEAR; i <= new Date().getFullYear(); i++) {
  YEARS.push({ value: i, text: "" + i });
}

export default function Home() {
  const { login, user, logout, club } = useAuth();
  const [clubName, setClubName] = useState('');
  const [clubLogo, setClubLogo] = useState('');
  const [month, setMonth] = useState(11);
  const [year, setYear] = useState(2024);
  const [isLoading, setIsLoading] = useState(false);
  const [disabledAllMonth, setDisabledAllMonth] = useState(false);
  const [disabledAllYear, setDisabledAllYear] = useState(false);
  const [countBookingsClub, setCountBookingsClub] = useState(0);
  const [countBookingsPlayPad, setCountBookingsPlayPad] = useState(0);
  const [countBookingsTotal, setCountBookingsTotal] = useState(0);
  const [revenuesClubs, setRevenuesClubs] = useState(0);
  const [revenuesPlayPad, setRevenuesPlayPad] = useState(0);
  const [rateBookingPlayPad, setRateBookingPlayPad] = useState(0);
  //const year = new Date().getFullYear();

  const handleLogout = async () => {
    try {
      await logout();
      console.log("disconnect");
    } catch (error) {
      console.error('Login failed:', error);
    }
  };
  async function getBookings(club, month = 0, year = 2024) {
    console.log("try get bookings");
    //const { firstDay, lastDay } = getFirstAndLastDayOfMonth(year, month - 1);
    const clubRef = doc(firestore, "CLUBS", club.uid);
    let queryBooking;
    let queryTransaction;

    setIsLoading(true);
    if (month != 0) {
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
    const querySnapshotBooking = await getDocs(queryBooking);
    const querySnapshotTransaction = await getDocs(queryTransaction);
    
    const [countBoookingsClub,countBoookingsPlayPad, countBookingTotal, revenuesTotal, revenuesPlayPad, rateBookingPlayPad] = await Promise.all([
      getCountBookingsClub(querySnapshotBooking),
      getCountBookingsPlayPad(querySnapshotBooking),
      getCountBookingsTotal(querySnapshotBooking),
      getRevenuesClub(querySnapshotTransaction),
      getRevenuesPlayPad(querySnapshotTransaction),
      getRateBookingsPlayPad(querySnapshotBooking),
      //countBookingsPlayPad(club.uid, month, year),
      //getRevenuesClub(club.uid, month, year),
    ]);
    setCountBookingsTotal(countBookingTotal);
    setCountBookingsPlayPad(countBoookingsPlayPad);
    setCountBookingsClub(countBoookingsClub);
    
    setRevenuesClubs(revenuesTotal);
    setRevenuesPlayPad(revenuesPlayPad);
    setRateBookingPlayPad(rateBookingPlayPad);
    setIsLoading(false);
    console.log("finish try", querySnapshotBooking.size)
    setIsLoading(false);
  }

  useEffect(() => {
    if (club) {
      setClubName(club.name);
      setClubLogo(club.logo);
      var currentYear = year;
      if(month!=0){
        if(currentYear == 0) {
          currentYear = new Date().getFullYear();
        }
        //setMonth(event.target.value);
        setYear(currentYear);
      }
      getBookings(club, month, currentYear);
    }
  }, [club]);
  const handleChangeMonth = (event) => {
    var currentYear = year;
    if(currentYear == 0) {
      currentYear = new Date().getFullYear();
    }
    setMonth(event.target.value);
    setYear(currentYear);
    getBookings(club, event.target.value, currentYear);
  };
  const handleChangeYear = (event) => {
    setYear(event.target.value);
    getBookings(club, month, event.target.value);
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
        //revenuesTotal={formatCurrency(18_736.30)}

        //rateBookingPlayPad={"43.28%"}
        rateBookingPlayPad={formatPercentage(rateBookingPlayPad)}
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
