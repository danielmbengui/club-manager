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
import { collection, doc, getDoc, getDocs, query, updateDoc, where } from 'firebase/firestore';
import { formatCurrency, getFirstAndLastDayOfDay, getFirstAndLastDayOfMonth, getFirstAndLastDayOfYear, parseDoubleToHourInterval } from '@/functions';
import { getBookingListCalendar, getOneBookingCalendar, getTypeBookingJson, getTypeBookingStr, isBookedTime } from '@/functions/bookings';
import { useThemeMode } from '@/contexts/ThemeProvider';
import { addHoursToDate, convertDateToHourValue, convertValueToHourMinutesJson, formatDateToInputDate, getDayOfYear } from '@/functions/manage-time';
import { createArrayDurationCourt, createArrayDurationManageCourt, getFirstAndLastHourCourt } from '@/functions/courts';
import { createArrayBookingType, getFirestoreRef, getFirestoreSubData, getFirestoreSubRef } from '@/functions/manage-firestore';
//import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { frFR } from '@mui/x-date-pickers/locales';
import { getValue } from "firebase/remote-config";
import { getSmartPadelApiKey } from '@/functions/smartpadel';
//import { SecretManagerServiceClient } from '@google-cloud/secret-manager';



// Importation dynamique pour éviter les problèmes de SSR (Server-Side Rendering)
const Calendar = dynamic(() => import("@/components/Calendar"), { ssr: false });
const SITES = [];
var COURTS = [
  { value: 0, name: "Tous" }
];

const DURATIONS = createArrayDurationManageCourt(1, 9);
const BOOKING_TYPES = createArrayBookingType();
export default function CalendarComponent({ remoteConfig }) {

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
  const [isReseting, setIsReseting] = useState(true);

  const [isLoadingDialogBooking, setIsLoadingDialogBooking] = useState(true);
  const [isChangedDatas, setIsChangedDatas] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isEditingDialogBooking, setIsEditingDialogBooking] = useState(false);
  const [isSuccessDialogBooking, setIsSuccessDialogBooking] = useState(false);
  const [isErrorDialogBooking, setIsErrorDialogBooking] = useState(false);
  const [errorMessageDialogBooking, setErrorMessageDialogBooking] = useState("");
  const [isWarningDialogBooking, setIsWarningDialogBooking] = useState(false);
  const [isResetingDialogBooking, setIsResetingDialogBooking] = useState(false);



  const [allSites, setAllSites] = useState([{ value: 0, name: "Tous" }]);
  const [selectedSite, setSelectedSite] = useState(0);
  const [allCourts, setAllCourts] = useState([{ value: 0, name: "Tous" }]);
  const [selectedCourt, setSelectedCourt] = useState(0);
  const [countBookings, setCountBookings] = useState(0);
  const [countPendingBookings, setCountPendingBookings] = useState(0);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [availableHours, setAvailableHours] = useState([]);
  const [selectedDate, setSelectedDate] = useState();
  const [selectedHour, setSelectedHour] = useState();
  const [selectedDuration, setSelectedDuration] = useState();
  const [selectedType, setSelectedType] = useState();
  const [selectedDescription, setSelectedDescription] = useState();

  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [showDialogBooking, setShowDialogBooking] = useState(false);
  const [showDialogReset, setShowDialogReset] = useState(false);


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
    if (remoteConfig) {
      const keysLink = getValue(remoteConfig, "urlGetKeys")._value;
      //const value =val._val;
      console.log("remote config", keysLink);
    }
  }, [remoteConfig])
  useEffect(() => {

    if (club) {
      setClubName(club.name);
      setClubLogo(club.logo);
      setClubBackColor(club.back_color_logo);
      async function start() {
        await initSites(club.uid);
        await initCourts(club.uid, selectedSite);
        const resp = await getSmartPadelApiKey(club.uid, "1z75sPYrBFrAFrkAZH5K", club.qr_code_provider);
        alert(resp);
      }
      start();
    }
  }, [club]);

  async function resetBooking() {
    if (selectedBooking) {
      //setIsLoadingDialogBooking(true);
      setIsResetingDialogBooking(true);
      const clubRef = await getFirestoreRef(club.uid, "CLUBS");
      const bookingRef = doc((collection(clubRef, "COURT_BOOKINGS")), selectedBooking.uid);
      const bookingSnap = await getDoc(bookingRef);
      const bookingData = getOneBookingCalendar(bookingSnap, false);
      const courtData = await getFirestoreSubData(club.uid, "CLUBS", bookingData.court_uid, "COURTS");
      const hours = createArrayDurationCourt(courtData);
      const startHour = bookingData.first_booking_time;
      const endHour = bookingData.last_booking_time + 0.5;
      setAvailableHours(hours);
      setSelectedDate(formatDateToInputDate(bookingData.match_start_date_D));
      setSelectedHour(startHour);
      setSelectedDuration(endHour - startHour);
      setSelectedType(getTypeBookingJson(bookingData.type).value);
      setSelectedDescription(bookingData.description != "--" ? bookingData.description : "");
      setSelectedBooking(bookingData);
      setIsResetingDialogBooking(false);
      setIsChangedDatas(false);
      //setIsLoadingDialogBooking(false);
      setIsEditingDialogBooking(false);
      setIsErrorDialogBooking(false);
      setErrorMessageDialogBooking("");
      setIsDisabled(false);
      setShowDialogReset(false);
    }
  }
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
      isReseting={isReseting}
      componentProgressUpdateBooking={<CircularProgress color="primary" size={'50px'} />}
      editable={selectedBooking ? selectedBooking.is_from_web_app && selectedBooking.match_finished_date_D > new Date() : false}
      notEditable={selectedBooking ? selectedBooking.is_from_app || (selectedBooking.is_from_web_app && new Date(selectedBooking.match_finished_date_D) < new Date()) : true}
      removable={selectedBooking ? selectedBooking.is_from_web_app && selectedBooking.match_finished_date_D > new Date() : false}

      isDifferentDatas={isChangedDatas}
      isDisabled={isDisabled}
      isNotDisabled={!isDisabled}
      isEditing={isEditingDialogBooking}
      isSuccess={isSuccessDialogBooking}
      //successMessage={""}
      isError={isErrorDialogBooking}
      errorMessage={errorMessageDialogBooking}
      //waitMessage={""}
      isWarning={isWarningDialogBooking}
      isNotWarning={true}
      //warningMessage={""}
      isLoadingReset={isResetingDialogBooking}
      openResetingDialog={{
        onClick: async () => {
          //alert("open dialog RESET");
          setShowDialogReset(true);
        },  // Ajout de la fonction onClick ici
        //className: "btn-primary",  // Ajout d'une classe CSS
        //type: "button"
      }}
      closeResetingDialog={{
        onClick: async () => {
          //alert("close dialog RESET");
          setShowDialogReset(false);
        },  // Ajout de la fonction onClick ici
        //className: "btn-primary",  // Ajout d'une classe CSS
        //type: "button"
      }}
      actionResetDialogUpdate={{
        onClick: async () => {
          //alert("RESET");
          await resetBooking();
          //setIsReseting(false);
        },  // Ajout de la fonction onClick ici
        //className: "btn-primary",  // Ajout d'une classe CSS
        //type: "button"
      }}
      updateBooking={{
        onClick: async () => {

          alert(`Date:${new Date(selectedDate).toDateString()}\nStart hour:${selectedHour}\nDuration:${selectedDuration}\nType:${selectedType}\nDescription:${selectedDescription}\n
            Potential error:slot already booked, slot outside opening hours
            Future warnings:recursive bookig -> say how many recursive will be created
            Future edits: site,court,name,phone,email\n
            Action: update booking, IF smart padel -> remove + recreate booking
            `);
          setIsEditingDialogBooking(true);
          setIsErrorDialogBooking(false);
          setErrorMessageDialogBooking("");
          setIsDisabled(false);
          setIsSuccessDialogBooking(false);
          setIsChangedDatas(false);
          const selected = new Date(selectedDate);
          const year = selected.getFullYear();
          const month = selected.getMonth();
          const day = selected.getDate();
          const hour = parseInt(selectedHour);
          const minutes = selectedHour - parseInt(selectedHour);
          const matchStartDate = new Date(year, month, day, hour, minutes * 60);
          const matchEndDate = addHoursToDate(matchStartDate, selectedDuration);
          const hourF = matchEndDate.getHours();
          const minutesF = matchEndDate.getMinutes();
          const collectionName = selectedBooking.is_pending ? "COURT_PENDING_BOOKINGS" : "COURT_BOOKINGS";
          const bookingRef = await getFirestoreSubRef(club.uid, "CLUBS", selectedBooking.uid, collectionName);
          var bookingSnap = await getDoc(bookingRef);
          var bookingData = getOneBookingCalendar(bookingSnap, selectedBooking.is_pending);
          const courtRef = await getFirestoreSubRef(club.uid, "CLUBS", selectedBooking.court_uid, "COURTS");
          const courtData = await getFirestoreSubData(club.uid, "CLUBS", selectedBooking.court_uid, "COURTS");
          const { first_time, last_time } = getFirstAndLastHourCourt(courtData);
          var is_error = false;
          var is_disabled = false;
          var error_message = "";
          if (selectedHour + selectedDuration > last_time) {
            is_error = true;
            is_disabled = true;
            const mainMessage = `Cette plage horaire est en dehors des horaires d'ouverture : ${parseDoubleToHourInterval(first_time)}-${parseDoubleToHourInterval(last_time)} !`;
            //error_message = `Cette plage horaire est déjà occupée : ${parseDoubleToHourInterval(time)}-${parseDoubleToHourInterval(time + 0.5)} !<br><br>\n\nVeuillez changer de plage horaire !`;
            error_message = (
              <>
                {mainMessage}
                <br />
                Veuillez changer de plage horaire !
              </>
            )
          }
          if (!is_error && !is_disabled) {
            var dayOfYear = getDayOfYear(matchStartDate);
            let bookingTimeValueStart = hour + minutes;
            let bookingTimeValueEnd = (matchEndDate.getHours() + (matchEndDate.getMinutes() / 60)) - 0.5;
            for (let time = bookingTimeValueStart; time <= bookingTimeValueEnd; time += 0.5) {
              const booked = await isBookedTime(bookingRef.id, "COURT_BOOKINGS", club.uid, courtRef, year, dayOfYear, time);
              const pending_booked = await isBookedTime(bookingRef.id, "COURT_PENDING_BOOKINGS", club.uid, courtRef, year, dayOfYear, time);
              if (booked || pending_booked) {
                console.log("Is Time busy", time);
                //console.log("This slot is already busy !");
                is_error = true;
                is_disabled = true;
                const mainMessage = `Cette plage horaire est déjà occupée : ${parseDoubleToHourInterval(time)}-${parseDoubleToHourInterval(time + 0.5)} !`;
                //error_message = `Cette plage horaire est déjà occupée : ${parseDoubleToHourInterval(time)}-${parseDoubleToHourInterval(time + 0.5)} !<br><br>\n\nVeuillez changer de plage horaire !`;
                error_message = (
                  <>
                    {mainMessage}
                    <br />
                    Veuillez changer de plage horaire !
                  </>
                )
                break;
              } else {
                console.log("Is Time NOT busy", time);
              }
              if (time == 24) {
                time = 0;
                dayOfYear++;
              }
            }
          }
          setIsSuccessDialogBooking(!is_disabled && !is_error);
          setIsDisabled(is_disabled);
          setIsErrorDialogBooking(is_error);
          setErrorMessageDialogBooking(error_message);

          setIsEditingDialogBooking(false);
          console.log("ADDD hours", matchStartDate, matchEndDate);


          await updateDoc(bookingRef, {
            match_start_date: matchStartDate,
            match_finished_date: matchEndDate,
            first_booking_time: selectedHour,
            last_booking_time: selectedHour + selectedDuration - 0.5,
            day_of_year: getDayOfYear(new Date(selectedDate)),
            description: selectedDescription,
            edit_date: new Date(),
            type: selectedType,
            year: new Date(new Date(selectedDate)).getFullYear()
          });
          bookingSnap = await getDoc(bookingRef);
          bookingData = getOneBookingCalendar(bookingSnap, selectedBooking.is_pending);
          //const bookingRef = await getFirestoreSubRef(club.uid, "CLUBS", selectedBooking.uid,selectedBooking.is_pending ? "COURT_PENDING_BOOKINGS" : "COURT_BOOKINGS");
          if (!is_error) {
            setIsReseting(true);
          }
          setSelectedBooking(bookingData);
          console.log("WESH", bookingRef.id);
          //console.log("booked", booked);
        },  // Ajout de la fonction onClick ici
        //className: "btn-primary",  // Ajout d'une classe CSS
        //type: "button"
      }}

      inputDate={<TextField
        value={selectedDate}
        className="custom-date-input"
        style={{
          width: '100%',
          color: theme.palette.text.primary,
        }}
        inputProps={{
          min: formatDateToInputDate(new Date()), // Date actuelle comme date minimale
        }}
        slotProps={{
          input: {
            type: "date",
            //min: formatDateToInputDate(new Date()),
            style: {
              height: '2.5rem',
              borderRadius: '20px',
              border: '1px solid var(--color--light-card)',
              backgroundColor: 'var(--color--light-card)',
              padding: '0.25rem 0.5rem',
            },
          },
          select: {
            style: {
              color: 'red'
            }
          }

        }}

        onChange={(event) => {
          const date = event.target.value;
          /*
          const selected = new Date(selectedDate);
          const year = selected.getFullYear();
          const month = selected.getMonth();
          const day = selected.getDate();
          const hour = parseInt(selectedHour);
          const minutes = selectedHour - parseInt(selectedHour);
          const matchStartDate = new Date(year, month, day, hour, minutes * 60);
          const matchEndDate = addHoursToDate(matchStartDate, selectedDuration);
          */
          setSelectedDate(event.target.value);
          //setIsEditingDialogBooking();
        }}
      />}

      /*
      inputDate={<LocalizationProvider localeText={frFR.components.MuiLocalizationProvider.defaultProps.localeText} dateAdapter={AdapterDayjs}>
      <DatePicker label="Basic date picker" />
    </LocalizationProvider>}
    */
      selectStartHour={<Select
        className='form_input is-select-input is-calendar'
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={selectedHour}
        label="Start hour"
        sx={{ height: 40, width: '100%', color: 'text.primary' }}
        onChange={(event) => {
          const hour = event.target.value;
          var editing = false;
          if (selectedBooking) {
            editing = hour !== selectedBooking.first_booking_time;
          }
          setSelectedHour(event.target.value);
          console.log("time booking", selectedBooking.first_booking_time)
          setIsChangedDatas(editing);
          setIsDisabled(false);
          setIsSuccessDialogBooking(false);
          setIsErrorDialogBooking(false);
          setIsWarningDialogBooking(false);
        }}
      >
        {
          availableHours.sort((a, b) => a.value - b.value).map((hour, index) => {
            const date = new Date(selectedDate);
            const { value, name } = hour;
            const { hours, minutes } = convertValueToHourMinutesJson(value);
            const dateDisabled = new Date(date.getFullYear(), date.getMonth(), date.getDate(), hours, minutes);
            //console.log("disabled date", hours, minutes);
            return (<MenuItem
              disabled={dateDisabled < new Date()}
              key={`${name}${index}`} value={value} sx={{ color: 'text.primary' }}><Typography color='text.primary'>{name}</Typography></MenuItem>)
          })
        }
      </Select>}
      selectDuration={<Select
        className='form_input is-select-input is-calendar'
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={selectedDuration}
        label="Selet duration"
        //onChange={handleChangeDay}
        sx={{ height: 40, width: '100%', color: 'text.primary' }}
        onChange={async (event) => {
          const duration = event.target.value;
          var editing = false;
          if (selectedBooking) {

            editing = duration !== selectedBooking.duration_DO;
          }
          //setSelectedHour(event.target.value);
          setSelectedDuration(duration);

          setIsChangedDatas(editing);
          setIsDisabled(false);
          setIsSuccessDialogBooking(false);
          setIsErrorDialogBooking(false);
          setIsWarningDialogBooking(false);
        }}
      >
        {
          DURATIONS.sort((a, b) => a.value - b.value).map((hour, index) => {
            const { value, name } = hour;
            return (<MenuItem key={`${name}${index}`} value={value} sx={{ color: 'text.primary' }}><Typography color='text.primary'>{name}</Typography></MenuItem>)
          })
        }
      </Select>}
      selectTypeBooking={<Select
        className='form_input is-select-input is-calendar'
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={selectedType}
        label="Select type"
        //onChange={handleChangeDay}
        sx={{ height: 40, width: '100%', color: 'text.primary' }}
        onChange={(event) => {
          const type = event.target.value;
          var editing = false;
          if (selectedBooking) {
            editing = type !== selectedBooking.type;
          }
          //setSelectedHour(event.target.value);
          setSelectedType(type);
          console.log("duration booking", selectedBooking.type)
          setIsChangedDatas(editing);
          setIsDisabled(false);
          setIsSuccessDialogBooking(false);
          setIsErrorDialogBooking(false);
          setIsWarningDialogBooking(false);
        }}
      >
        {
          BOOKING_TYPES.map((type, index) => {
            return (<MenuItem key={`${type.name}${index}`} value={type.value} sx={{ color: 'text.primary' }}><Typography color='text.primary'>{type.name}</Typography></MenuItem>)
          })
        }
      </Select>}
      textFieldDescription={<TextField
        value={selectedDescription}
        //className='form_input is-text-input'
        multiline
        minRows={2} maxRows={10}
        sx={{
          width: '100%',

          '& .MuiOutlinedInput-root': {
            border: 'none', // Supprime la bordure pour "outlined"
          },
        }}
        slotProps={{
          input: {
            style: {
              background: 'var(--color--light-card)',
              border: 'none', // Supprime la bordure de l'élément d'entrée
              borderRadius: '20px',
              outline: 'none', // Supprime le contour au focus
            },
          },
        }}
        onChange={(event) => {
          const description = event.target.value;
          var editing = false;
          if (selectedBooking) {
            editing = description !== selectedBooking.description;
          }
          //setSelectedHour(event.target.value);
          setSelectedDescription(description)
          console.log("description booking", selectedBooking.description)
          setIsChangedDatas(editing);
          setIsDisabled(false);
          setIsSuccessDialogBooking(false);
          setIsErrorDialogBooking(false);
          setIsWarningDialogBooking(false);

        }}
      />}


      //notEditable={selectedBooking ? !selectedBooking.is_from_web_app : true}
      isWebAppBooking={selectedBooking ? selectedBooking.is_from_web_app : false}

      bookingUid={selectedBooking ? selectedBooking.uid : ""}
      accessCode={selectedBooking ? (selectedBooking.access_code ? selectedBooking.access_code : "--") : ""}
      clientName={selectedBooking ? (selectedBooking.name ? selectedBooking.name : "--") : ""}
      clientPhone={selectedBooking ? (selectedBooking.phone ? selectedBooking.phone : "--") : ""}
      clientEmail={selectedBooking ? (selectedBooking.email ? selectedBooking.email : "--") : ""}
      bookingType={selectedBooking ? getTypeBookingStr(selectedBooking.type) : ""}
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
        setShowDialogReset={setShowDialogReset}
        selectedBooking={selectedBooking}
        setSelectedBooking={setSelectedBooking}
        setAvailableHours={setAvailableHours}
        setSelectedDate={setSelectedDate}
        setSelectedHour={setSelectedHour}
        setSelectedDuration={setSelectedDuration}
        setSelectedTransaction={setSelectedTransaction}
        setSelectedType={setSelectedType}
        setSelectedDescription={setSelectedDescription}
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
      //values={calendarValues}
      />}
      styleDialogEditBooking={{
        style: {
          display: showDialogBooking ? 'flex' : 'none'
        }
      }}
      styleDialogResetBooking={{
        style: {
          display: showDialogReset ? 'flex' : 'none'
        }
      }}

      closeDialogUpdateBooking={{
        onClick: () => {
          setShowDialogBooking(false);
          setSelectedBooking(null);
          setSelectedTransaction(null);

          setIsChangedDatas(false);
          setIsDisabled(false);
          setIsSuccessDialogBooking(false);
          setIsErrorDialogBooking(false);
          setIsWarningDialogBooking(false);
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
          alert("updated");
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
