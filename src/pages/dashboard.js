import React, { useEffect, useState } from 'react';
import { CalendarPage, DashboardPage, } from "@/devlink";
import Head from "next/head";
import { TITLE_PAGE_CALENDAR, TITLE_PAGE_DASHBOARD, TITLE_WEB_APP } from "@/constants";
import { useAuth } from "@/providers/AuthProvider";
import LayoutLoading from '@/components/layouts/LayoutLoading';
import { CircularProgress } from '@mui/material';

export default function Dashboard() {
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
      <title>{`${TITLE_WEB_APP} | ${TITLE_PAGE_DASHBOARD}`}</title>
    </Head><LayoutLoading /></>);
  }

  return (<><Head>
    <title>{`${TITLE_WEB_APP} | ${TITLE_PAGE_DASHBOARD}`}</title>
  </Head>
    <DashboardPage
      titlePage={TITLE_PAGE_DASHBOARD}
      clubName={clubName}
      clubLogo={clubLogo}
      //loader={<CircularProgress size={20} sx={{color:'var(--brand-1)'}} />}
      periodComponent={<CircularProgress sx={{color:'var(--brand-1)'}} />}
      
      styleDashboard={{
        className: "sidebar4_link w--current",
      }}
      disconnectButtonProps={{
        onClick: handleLogout,  // Ajout de la fonction onClick ici
      }} /></>);
}
