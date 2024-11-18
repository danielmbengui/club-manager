import React, { useEffect, useState } from 'react';
import { DashboardPage } from "@/devlink";
import Head from "next/head";
import LayoutLogin from "@/components/layouts/LayoutLogin";
import { LINK_PAGE_DASHBOARD, PLAYPAD_CREATION_YEAR, TITLE_PAGE_DASHBOARD, TITLE_WEB_APP } from "@/constants";
import { useAuth } from "@/providers/AuthProvider";

export default function Home() {
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
  return (<><Head>
    <title>{`${TITLE_WEB_APP} | ${TITLE_PAGE_DASHBOARD}`}</title>
  </Head>
    <LayoutLogin
      title={"Dashboard Dedal-E"}
      component={<DashboardPage
        titlePage={TITLE_PAGE_DASHBOARD}
        clubName={clubName}
        clubLogo={clubLogo}
        linkDashboard={LINK_PAGE_DASHBOARD}
        styleMenu={{
          className: "sidebar4_link w--current",
        }}
        disconnectButtonProps={{
          onClick: handleLogout,  // Ajout de la fonction onClick ici
          //className: "btn-primary",  // Ajout d'une classe CSS
          //type: "button"
        }} />}
    /></>);
}
