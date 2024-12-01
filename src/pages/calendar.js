import React, { useEffect, useState } from 'react';
import { CalendarPage, } from "@/devlink";
import Head from "next/head";
import { TITLE_PAGE_CALENDAR, TITLE_WEB_APP } from "@/constants";
import { useAuth } from "@/providers/AuthProvider";
import LayoutLoading from '@/components/layouts/LayoutLoading';
import dynamic from "next/dynamic";
import { CircularProgress, MenuItem, Select, Stack, TextField, Typography } from '@mui/material';
import SwitchTheme from '@/components/SwitchTheme';
import Image from 'next/image';
import { firestore } from '@/firebase';
import { collection, doc, getDocs, query, where } from 'firebase/firestore';
import { formatCurrency, getFirstAndLastDayOfDay, getFirstAndLastDayOfMonth, getFirstAndLastDayOfYear } from '@/functions';
import { getBookingListCalendar } from '@/functions/bookings';
import { useThemeMode } from '@/contexts/ThemeProvider';

// Importation dynamique pour éviter les problèmes de SSR (Server-Side Rendering)
const Calendar = dynamic(() => import("@/components/Calendar"), { ssr: false });
const SITES = [];
var COURTS = [
  { value: 0, name: "Tous" }
];

export default function CalendarComponent() {
  const { theme, themeMode } = useThemeMode();
  const { login, user, logout, club } = useAuth();
  const [clubName, setClubName] = useState('');
  const [clubLogo, setClubLogo] = useState('');
  const [clubBackColor, setClubBackColor] = useState('');
  const [courtValues, setCourtValues] = useState([]);
  const [calendarValues, setCalendarValues] = useState([]);

  const [site, setSite] = useState(0);
  const [court, setCourt] = useState(0);
  const [day, setDay] = useState(new Date().getDate());
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [year, setYear] = useState(new Date().getFullYear());
  //const year = new Date().getFullYear();
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingDialogBooking, setIsLoadingDialogBooking] = useState(false);
  const [isReseting, setIsReseting] = useState(false);

  const [allSites, setAllSites] = useState([{ value: 0, name: "Tous" }]);
  const [selectedSite, setSelectedSite] = useState(0);
  const [allCourts, setAllCourts] = useState([{ value: 0, name: "Tous" }]);
  const [selectedCourt, setSelectedCourt] = useState(0);
  const [countBookings, setCountBookings] = useState(0);
  const [countPendingBookings, setCountPendingBookings] = useState(0);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [showDialogBooking, setShowDialogBooking] = useState(false);


  //const [countPendingBookings, setCountPendingBookings] = useState(0);
  async function initSites(clubUid) {
    const clubRef = doc(firestore, "CLUBS", clubUid);
    const querySite = query(collection(clubRef, "SITES"),
      where("available", "==", true),
      // where("match_start_date", ">=", firstDay),
      // where("match_start_date", "<=", lastDay),
    );
    const querySnapshotSites = await getDocs(querySite);
    var list = [];
    for (let snapshotSite of querySnapshotSites.docs) {
      const site = snapshotSite.data();
      console.log("site CALENDAR", site.name);
      list.push({ value: site.uid, name: site.name });
    }
    list = list.sort((a, b) => a.name.localeCompare(b.name));
    //list.unshift({ value: 0, name: "Tous" });
    setAllSites((prev) => prev.concat(list));
    setSelectedSite(0);
    console.log("size", querySnapshotSites.size)
  }
  async function initCourts(clubUid, site = 0) {
    const clubRef = doc(firestore, "CLUBS", clubUid);
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
      console.log("court CALENDAR init", court.name_or_number);
      newCourts.push({ value: court.uid, name: court.name_or_number });
    }
    newCourts = newCourts.sort((a, b) => a.name.localeCompare(b.name));
    newCourts.unshift({ value: 0, name: "Tous" });
    setAllCourts(newCourts);
    setSelectedCourt(0);
    //COURTS = COURTS.concat(newCourts);
  }

  const handleChangeSite = (event) => {
    var newSite = event.target.value;
    var newCourt = selectedCourt;
    setSelectedSite(newSite);
    //setTitleBarChart("Par Site");
    if (newSite != 0) {
      newCourt = 0;
      //
      //setTitleBarChart("Par Terrain");
    }
    initCourts(club.uid, newSite);
    setSelectedCourt(newCourt);
    //getBookings(club, newSite, selectedCourt, day, month, year);
    //start();
  };

  const handleChangeCourt = (event) => {
    var newCourt = event.target.value;
    setSelectedCourt(newCourt);
  };

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
      async function start() {
        await initSites(club.uid);
        await initCourts(club.uid, selectedSite);
      }
      start();
    }
  }, [club]);
  /*
*/
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
      isLoading={isLoading}
      isNotLoading={!isLoading}
      isLoadingUpdateBooking={isLoadingDialogBooking}
      isNotLoadingUpdateBooking={!isLoadingDialogBooking}
      componentProgressUpdateBooking={<CircularProgress color="primary" size={'50px'} />}
      editable={selectedBooking ? selectedBooking.is_from_web_app && selectedBooking.match_finished_date_D > new Date() : false}
      notEditable={selectedBooking ? selectedBooking.is_from_app || (selectedBooking.is_from_web_app && new Date(selectedBooking.match_finished_date_D) < new Date()) : true}
      removable={selectedBooking ? selectedBooking.is_from_web_app && selectedBooking.match_finished_date_D > new Date() : false}

      isEditing={true}
      isSuccess={true}
      //successMessage={""}
      isError={true}
      //errorMessage={""}
      //waitMessage={""}
      isWarning={true}
      isNotWarning={true}
      //warningMessage={""}

      actionResetDialogUpdate={{
        onClick: () => {
          alert("RESET");
        },  // Ajout de la fonction onClick ici
        //className: "btn-primary",  // Ajout d'une classe CSS
        //type: "button"
      }}
      updateBooking={{
        onClick: () => {
          alert("SAVE");
        },  // Ajout de la fonction onClick ici
        //className: "btn-primary",  // Ajout d'une classe CSS
        //type: "button"
      }}
      inputDate={<input className='custom-date-input' style={{ width: '100%', color:theme.palette.text.primary }} type='date' />}
      selectStartHour={<label>Start hour</label>}
      selectEndHour={<label>End hour</label>}
      selectTypeBooking={<Select
        className='form_select'
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={"Lesson"}
        label="Day"
        //onChange={handleChangeDay}
        sx={{ height: 40, width:'100%', color: 'text.primary' }}
      >
        <MenuItem value={"Lesson"} sx={{ color: 'text.primary' }}><Typography color='text.primary'>{"Cours"}</Typography></MenuItem>
        <MenuItem value={"Training"} sx={{ color: 'text.primary' }}><Typography color='text.primary'>{"Entrainement"}</Typography></MenuItem>
        <MenuItem value={"Tournament"} sx={{ color: 'text.primary' }}><Typography color='text.primary'>{"Tournoi"}</Typography></MenuItem>
      </Select>}
      textFieldDescription={<TextField
        multiline
        minRows={2} maxRows={10}
        sx={{
          width: '100%', background: 'var(--color--light-card)',
          '& .MuiOutlinedInput-root': {
            border: 'none', // Supprime la bordure pour "outlined"
          },
        }}
        slotProps={{
          input: {
            style: {
              border: 'none', // Supprime la bordure de l'élément d'entrée
              outline: 'none', // Supprime le contour au focus
            },
          },
        }}
      />}


      //notEditable={selectedBooking ? !selectedBooking.is_from_web_app : true}
      isWebAppBooking={selectedBooking ? selectedBooking.is_from_web_app : false}

      bookingUid={selectedBooking ? selectedBooking.uid : ""}
      accessCode={selectedBooking ? (selectedBooking.access_code ? selectedBooking.access_code : "--") : ""}
      clientName={selectedBooking ? (selectedBooking.name ? selectedBooking.name : "--") : ""}
      clientPhone={selectedBooking ? (selectedBooking.phone ? selectedBooking.phone : "--") : ""}
      clientEmail={selectedBooking ? (selectedBooking.email ? selectedBooking.email : "--") : ""}
      bookingType={selectedBooking ? selectedBooking.type : ""}
      bookingSite={selectedBooking ? selectedBooking.site_name : ""}
      bookingCourt={selectedBooking ? selectedBooking.court_name : ""}
      bookingCreatedDate={selectedBooking ? selectedBooking.created_date : ""}
      bookingMatchDate={selectedBooking ? selectedBooking.match_date : ""}
      bookingDuration={selectedBooking ? selectedBooking.duration : ""}
      bookingDescription={selectedBooking ? (selectedBooking.description ? selectedBooking.description : "--") : ""}

      hasTransaction={selectedTransaction}
      transactionUid={selectedTransaction ? selectedTransaction.uid : ""}
      paymentProvider={selectedTransaction ? selectedTransaction.payment_provider : ""}
      refNo={selectedTransaction ? selectedTransaction.ref_no : ""}
      paymentDate={selectedTransaction ? selectedTransaction.payment_date : ""}

      //paymentMethod={selectedTransaction ? selectedTransaction.payment_method : ""}
      walletUsedAmount={formatCurrency(selectedTransaction ? selectedTransaction.wallet_used_amount : 0, 2)}
      cardUsedAmount={formatCurrency(selectedTransaction ? selectedTransaction.total_amount - selectedTransaction.wallet_used_amount : 0, 2)}
      totalAmount={formatCurrency(selectedTransaction ? selectedTransaction.total_amount : 0, 2)}

      componentProgress={<CircularProgress color="primary" size={'20px'} />}
      nBookings={`(${countBookings})`}
      nPendingBookings={`(${countPendingBookings})`}
      styleCalendar={{
        className: "sidebar4_link w--current",
      }}
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
          allSites.length > 0 && allSites.sort((a, b) => a.value - b.value).map((obj, index) => {
            return (
              <MenuItem key={`${obj.name}${index}`} value={obj.value}><Typography color='text.primary'>{obj.name}</Typography></MenuItem>
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
          allCourts.length > 0 && allCourts.map((obj, index) => {
            return (
              <MenuItem key={`${obj.name}${index}`} value={obj.value}><Typography color='text.primary'>{obj.name}</Typography></MenuItem>
            )
          })
        }
      </Select>}
      componentCalendar={club && <Calendar
        setShowDialogBooking={setShowDialogBooking}
        selectedBooking={selectedBooking}
        setSelectedBooking={setSelectedBooking}
        setSelectedTransaction={setSelectedTransaction}
        isReseting={isReseting}
        setIsReseting={setIsReseting}
        setCountBookings={setCountBookings}
        setCountPendingBookings={setCountPendingBookings}
        clubUid={club.uid}
        isLoading={isLoading}
        siteUid={selectedSite}
        courtUid={selectedCourt}
        setIsLoading={setIsLoadingDialogBooking}
        //setIsLoadingDialogBooking={}
        courts={allCourts}
        values={calendarValues}
      />}
      styleDialogEditBooking={{
        style: {
          display: showDialogBooking ? 'flex' : 'none'
        }
      }}
      closeDialogUpdateBooking={{
        onClick: () => {
          setShowDialogBooking(false);
          setSelectedBooking(null);
          setSelectedTransaction(null);
          console.log("dialog closed");
        },  // Ajout de la fonction onClick ici
        //className: "btn-primary",  // Ajout d'une classe CSS
        //type: "button"
      }}
      componentSwitch={<Stack sx={{ width: '100%', height: '100%' }}><SwitchTheme /></Stack>}
      componentLogoClub={clubLogo && <Stack sx={{ height: '100%', p: '2px', background: clubBackColor }} alignItems={'center'} justifyContent={'center'}>
        <Image alt={`logo ${clubName}`} width={50} height={50} style={{ width: '2rem', height: 'auto' }} loading='lazy' src={clubLogo} />
      </Stack>}
      actionUpdate={{
        onClick: () => {
          console.log("updated");
          /*
          setSelectedSite((prevState) => {
            //setSelectedSite(-1);
            setSelectedSite(prevState);
          });
          */
          setIsReseting(true);

        },  // Ajout de la fonction onClick ici
        //className: "btn-primary",  // Ajout d'une classe CSS
        //type: "button"
      }}
      disconnectButtonProps={{
        onClick: handleLogout,  // Ajout de la fonction onClick ici
      }} /></>);
}
