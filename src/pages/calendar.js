import React, { useEffect, useState } from 'react';
import { BillingPage, CalendarPage, } from "@/devlink";
import Head from "next/head";
import { TITLE_PAGE_BILLING, TITLE_PAGE_CALENDAR, TITLE_WEB_APP } from "@/constants";
import { useAuth } from "@/providers/AuthProvider";
import LayoutLoading from '@/components/layouts/LayoutLoading';

export default function CalendarComponent() {
  const { login, user, logout, club } = useAuth();
  const [clubName, setClubName] = useState('');
  const [clubLogo, setClubLogo] = useState('');
  const year = new Date().getFullYear();
  const handleLogout = async () => {
    try {
      await logout();
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
      <title>{`${TITLE_WEB_APP} | ${TITLE_PAGE_BILLING}`}</title>
    </Head><LayoutLoading /></>);
  }

  return (<><Head>
    <title>{`${TITLE_WEB_APP} | ${TITLE_PAGE_BILLING}`}</title>
  </Head>
    <BillingPage
      titlePage={TITLE_PAGE_BILLING}
      clubName={clubName}
      clubLogo={clubLogo}
      styleBilling={{
        className: "sidebar4_link w--current",
      }}
      disconnectButtonProps={{
        onClick: handleLogout,  // Ajout de la fonction onClick ici
      }} /></>);
}
