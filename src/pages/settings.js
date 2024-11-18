import React, { useEffect, useState } from 'react';
import { BillingPage, CalendarPage, ClubPage, SettingsPage, } from "@/devlink";
import Head from "next/head";
import { TITLE_PAGE_BILLING, TITLE_PAGE_CALENDAR, TITLE_PAGE_CLUB, TITLE_PAGE_SETTINGS, TITLE_WEB_APP } from "@/constants";
import { useAuth } from "@/providers/AuthProvider";
import LayoutLoading from '@/components/layouts/LayoutLoading';
import { CircularProgress } from '@mui/material';

export default function Settings() {
  const { login, user, logout, club } = useAuth();
  const [clubName, setClubName] = useState('');
  const [clubLogo, setClubLogo] = useState('');
  const [limitDaysBookings, setLimitDaysBookings] = useState(0);
  const [changeLimitDaysBookings, setChangeLimitDaysBookings] = useState(0);
  const [limitHoursBeforeBooking, setLimitHoursBeforeBooking] = useState(0);
  const [limitHoursBeforeCancel, setLimitHoursBeforeCancel] = useState(0);
  const [limitActivesBookings, setLimitActivesBookings] = useState(0);
  //const [limitDaysBookings, setLimitDaysBookings] = useState(0);
  const year = new Date().getFullYear();
  const handleLogout = async () => {
    try {
      await logout();
      console.log("disconnect");
    } catch (error) {
      console.error('Login failed:', error);
    }
  };
  const handleChangeLimitDaysBookings = async (event) => {
    console.log("value limit days bookings", event.target.value)
    setChangeLimitDaysBookings(event.target.value);
  };
  useEffect(() => {
    if (club) {
      setClubName(club.name);
      setClubLogo(club.logo);
      setLimitDaysBookings(club.limitDaysBookings);
      setChangeLimitDaysBookings(club.limitDaysBookings);
      setLimitHoursBeforeBooking(club.limitHoursBeforeBooking);
      setLimitHoursBeforeCancel(club.limitHoursBeforeCancel);
      setLimitActivesBookings(club.limitActivesBookings);
    }
  }, [club]);
  if (user && !user.connected) {
    return (<><Head>
      <title>{`${TITLE_WEB_APP} | ${TITLE_PAGE_SETTINGS}`}</title>
    </Head><LayoutLoading /></>);
  }

  return (<><Head>
    <title>{`${TITLE_WEB_APP} | ${TITLE_PAGE_SETTINGS}`}</title>
  </Head>
    <SettingsPage
      titlePage={TITLE_PAGE_SETTINGS}
      clubName={clubName}
      clubLogo={clubLogo}
      limitDaysBookings={`${limitDaysBookings} jour(s)`}
      limitHoursBeforeBooking={limitHoursBeforeBooking >= 1 ? `${limitHoursBeforeBooking} heure(s)` : `${limitHoursBeforeBooking * 60} minute(s)`}
      limitHoursBeforeCancel={`${limitHoursBeforeCancel} heure(s)`}
      limitActivesBookings={`${limitActivesBookings}`}
      loader={<CircularProgress color="primary" />}
      //limitHoursBeforeBooking={`${club.limitHoursBeforeBooking * 60 >= 60 ? club.limitHoursBeforeBooking + " heure(s)" : (club.limitHoursBeforeBooking * 60) + " minutes"}
      styleSettings={{
        className: "sidebar4_link w--current",
      }}
      disconnectButtonProps={{
        onClick: handleLogout,  // Ajout de la fonction onClick ici
      }}
      inputLimitDaysBookingsProps={{
        //onChange: handleLogout,  // Ajout de la fonction onClick ici
        defaultValue:limitDaysBookings,
        onChange: (event) => handleChangeLimitDaysBookings(event),  // Ajout de la fonction onClick ici
        value: changeLimitDaysBookings,  // Ajout de la fonction onClick ici
      }}
      
      
      /></>);
}
