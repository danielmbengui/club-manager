import React, { useEffect, useState } from 'react';
import { CalendarPage, } from "@/devlink";
import Head from "next/head";
import { TITLE_PAGE_CALENDAR, TITLE_WEB_APP } from "@/constants";
import { useAuth } from "@/providers/AuthProvider";
import LayoutLoading from '@/components/layouts/LayoutLoading';

export default function Calendar() {
  const { login, user, logout, club } = useAuth();
  const [clubName, setClubName] = useState('');
  const [clubLogo, setClubLogo] = useState('');
  const year = new Date().getFullYear();
  const handleLogout = async () => {
    try {
      await logout();
      console.log("disconnect");
    } catch (error) {
      console.error('Login failed:', error);
    }
  };
  useEffect(() => {
    if (club) {
      setClubName(club.name);
      setClubLogo(club.logo);
    }
  });
  if (user && !user.connected) {
    return (<><Head>
      <title>{`${TITLE_WEB_APP} | ${TITLE_PAGE_CALENDAR}`}</title>
    </Head><LayoutLoading /></>);
  }

  return (<><Head>
    <title>{`${TITLE_WEB_APP} | ${TITLE_PAGE_CALENDAR}`}</title>
  </Head>
    <CalendarPage
      titlePage={TITLE_PAGE_CALENDAR}
      clubName={clubName}
      clubLogo={clubLogo}
      styleCalendar={{
        className: "sidebar4_link w--current",
      }}
      disconnectButtonProps={{
        onClick: handleLogout,  // Ajout de la fonction onClick ici
      }} /></>);
}
