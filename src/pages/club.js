import React, { useEffect, useState } from 'react';
import { BillingPage, CalendarPage, ClubPage, } from "@/devlink";
import Head from "next/head";
import { TITLE_PAGE_BILLING, TITLE_PAGE_CALENDAR, TITLE_PAGE_CLUB, TITLE_WEB_APP } from "@/constants";
import { useAuth } from "@/providers/AuthProvider";
import LayoutLoading from '@/components/layouts/LayoutLoading';
import { Stack } from '@mui/material';
import SwitchTheme from '@/components/SwitchTheme';
import Image from 'next/image';

export default function Club() {
  const { login, user, logout, club } = useAuth();
  const [clubName, setClubName] = useState('--');
  const [clubLogo, setClubLogo] = useState('');
  const [clubBackColor, setClubBackColor] = useState('--');
  const [street, setStreet] = useState('--');
  const [street1, setStreet1] = useState('--');
  const [zipCode, setZipCode] = useState('--');
  const [city, setCity] = useState('--');
  const [country, setCountry] = useState('--');
  const [email, setEmail] = useState('--');
  const [phone, setPhone] = useState('--');
  const [website, setWebsite] = useState('--');

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
      const clubAddress = club.address_club;
      const clubContact = club.contact;
      setStreet(clubAddress.street);
      setStreet1(clubAddress.street1 ?? "");
      setZipCode(clubAddress.zipCode ?? "");
      setCity(clubAddress.city.nameFR ?? "");
      setCountry(clubAddress.city.country.nameFR ?? "");

      setEmail(clubContact.mails[0] ?? "");
      setPhone(clubContact.phones[0] ?? "");
      setWebsite(clubContact.websites[0] ?? "");

    }
  }, [club]);
  if (user && !user.connected) {
    return (<><Head>
      <title>{`${TITLE_WEB_APP} | ${TITLE_PAGE_CLUB}`}</title>
    </Head><LayoutLoading /></>);
  }

  return (<><Head>
    <title>{`${TITLE_WEB_APP} | ${TITLE_PAGE_CLUB}`}</title>
  </Head>
    <ClubPage
      titlePage={TITLE_PAGE_CLUB}
      clubName={clubName}
      clubLogo={clubLogo}
      street={street}
      street1={street1}
      hasStreet1={street1.length > 0}
      zipCode={zipCode}
      city={city}
      country={country}
      email={email}
      phone={phone}
      website={website}
      componentSwitch={<Stack sx={{ width: '100%', height: '100%' }}><SwitchTheme /></Stack>}
      componentLogoClub={<Stack sx={{ height: '100%', p: '2px', background: clubBackColor }} alignItems={'center'} justifyContent={'center'}>
        <Image src={clubLogo} width={50} height={50} style={{ width: '2rem', height: 'auto' }} loading='lazy' />
      </Stack>}
      styleClub={{
        className: "sidebar4_link w--current",
      }}
      disconnectButtonProps={{
        onClick: handleLogout,  // Ajout de la fonction onClick ici
      }}
    />
  </>);
}
