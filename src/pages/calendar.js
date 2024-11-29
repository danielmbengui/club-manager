import React, { useEffect, useState } from 'react';
import { CalendarPage, } from "@/devlink";
import Head from "next/head";
import { TITLE_PAGE_CALENDAR, TITLE_WEB_APP } from "@/constants";
import { useAuth } from "@/providers/AuthProvider";
import LayoutLoading from '@/components/layouts/LayoutLoading';
import dynamic from "next/dynamic";
import { Stack } from '@mui/material';
import SwitchTheme from '@/components/SwitchTheme';
import Image from 'next/image';

// Importation dynamique pour éviter les problèmes de SSR (Server-Side Rendering)
const Calendar = dynamic(() => import("@/components/Calendar"), { ssr: false });

export default function CalendarComponent() {
  const { login, user, logout, club } = useAuth();
  const [clubName, setClubName] = useState('');
  const [clubLogo, setClubLogo] = useState('');
  const [clubBackColor, setClubBackColor] = useState('');
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
      setClubBackColor(club.back_color_logo);
    }
  }, [club]);
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
      componentCalendar={<Calendar />}
      componentSwitch={<Stack sx={{ width: '100%', height: '100%' }}><SwitchTheme /></Stack>}
      componentLogoClub={clubLogo && <Stack sx={{ height: '100%', p: '2px', background: clubBackColor }} alignItems={'center'} justifyContent={'center'}>
      <Image alt={`logo ${clubName}`} width={50} height={50} style={{ width: '2rem', height: 'auto' }} loading='lazy' src={clubLogo} />
    </Stack>}
      disconnectButtonProps={{
        onClick: handleLogout,  // Ajout de la fonction onClick ici
      }} /></>);
}
