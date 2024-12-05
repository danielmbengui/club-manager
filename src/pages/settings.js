import React, { useEffect, useState } from 'react';
import { BillingPage, CalendarPage, ClubPage, SettingsPage, } from "@/devlink";
import Head from "next/head";
import { TITLE_PAGE_BILLING, TITLE_PAGE_CALENDAR, TITLE_PAGE_CLUB, TITLE_PAGE_SETTINGS, TITLE_WEB_APP } from "@/constants";
import { useAuth } from "@/providers/AuthProvider";
import LayoutLoading from '@/components/layouts/LayoutLoading';
import { CircularProgress, MenuItem, Select, Stack, Typography } from '@mui/material';
import SwitchTheme from '@/components/SwitchTheme';
import Image from 'next/image';
import { useThemeMode } from '@/contexts/ThemeProvider';
import { updateSettingsClub } from '@/functions/club';
import { firestore } from '@/firebase';
import { doc } from 'firebase/firestore';

let indexLabelsLineChart = 9;
let indexDays = -1;
let indexHours = -1;
let indexActives = 0;

const ARRAY_LIMIT_DAYS = Array.from({ length: 21 }, () => { indexLabelsLineChart++; return indexLabelsLineChart });
const ARRAY_LIMIT_DAYS_CANCEL = Array.from({ length: 31 }, () => { indexDays++; return indexDays });
const ARRAY_LIMIT_HOURS = Array.from({ length: 24 }, () => { indexHours++; return indexHours });
const ARRAY_LIMIT_MINUTES = [0, 15, 30, 45];
const ARRAY_LIMIT_ACTIVES_BOOKINGS = Array.from({ length: 10 }, () => { indexActives++; return indexActives });
export default function Settings() {
  const { theme, themeMode } = useThemeMode();
  const { text } = theme.palette;
  const { login, user, logout, club } = useAuth();
  const [clubName, setClubName] = useState('');
  const [clubLogo, setClubLogo] = useState('');
  const [clubBackColor, setClubBackColor] = useState('');
  const [limitDaysBookings, setLimitDaysBookings] = useState(0);
  const [limitHoursBeforeBooking, setLimitHoursBeforeBooking] = useState(0);

  const [limitHoursBeforeBooking_H, setLimitHoursBeforeBooking_H] = useState(0);
  const [limitHoursBeforeBooking_M, setLimitHoursBeforeBooking_M] = useState(0);

  const [limitHoursBeforeCancel, setLimitHoursBeforeCancel] = useState(0);
  const [limitHoursBeforeCancel_D, setLimitHoursBeforeCancel_D] = useState(0);
  const [limitHoursBeforeCancel_H, setLimitHoursBeforeCancel_H] = useState(0);
  const [limitHoursBeforeCancel_M, setLimitHoursBeforeCancel_M] = useState(0);

  const [limitActivesBookings, setLimitActivesBookings] = useState(0);

  const [isLoading, setIsLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isSucess, setIsSucess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isWarning, setIsWarning] = useState(false);
  const [warningMessage, setWarningMessage] = useState(false);

  const initSettings = (club) => {
    if (club) {
      const limitHoursBeforeBooking = club.limitHoursBeforeBooking;
      const limitHoursBeforeCancel = club.limitHoursBeforeCancel;
      setClubName(club.name);
      setClubLogo(club.logo);
      setClubBackColor(club.back_color_logo);
      setLimitDaysBookings(club.limitDaysBookings);
      setLimitHoursBeforeBooking(limitHoursBeforeBooking);
      setLimitHoursBeforeCancel(limitHoursBeforeCancel);
      setLimitActivesBookings(club.limitActivesBookings);

      setLimitHoursBeforeBooking_H(parseInt(limitHoursBeforeBooking));
      setLimitHoursBeforeBooking_M((limitHoursBeforeBooking - parseInt(limitHoursBeforeBooking)) * 60);

      setLimitHoursBeforeCancel_D(limitHoursBeforeCancel >= 24 ? parseInt(limitHoursBeforeCancel / 24) : 0);
      setLimitHoursBeforeCancel_H(limitHoursBeforeCancel >= 1 && limitHoursBeforeCancel < 24 ? parseInt(limitHoursBeforeCancel) : 0);
      setLimitHoursBeforeCancel_M((limitHoursBeforeCancel - parseInt(limitHoursBeforeCancel)) * 60);
      handleChangeIsEditing(club, club.limitDaysBookings, limitHoursBeforeBooking, limitHoursBeforeCancel, club.limitActivesBookings);
      handleChangeIsWarning(limitHoursBeforeBooking, limitHoursBeforeCancel);
    }
  }
  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Login failed:', error);
    }
  };
  const handleChangeIsEditing = (club, limitDays, limitBeforeBooking, limitBeforeCanel, limitAtivesBooking) => {
    if (club.limitDaysBookings != limitDays ||
      club.limitHoursBeforeBooking != limitBeforeBooking ||
      club.limitHoursBeforeCancel != limitBeforeCanel ||
      club.limitActivesBookings != limitAtivesBooking) {
      setIsEditing(true);
    } else {
      setIsEditing(false);
    }
  };
  const handleChangeIsWarning = (limitBeforeBooking, limitBeforeCancel) => {
    var warning = false;
    var message = "";
    if (limitBeforeBooking == 0) {
      warning = true;
      message = "Vérifiez le temps minimum avant une réservation! Les joueurs pourront réserver dans la minute !";
    } else if (limitBeforeBooking == 0 ||
      limitBeforeCancel == 0) {
      warning = true;
      message = "Vérifiez le temps minimum avant une annulation de réservation! Les joueurs seront remboursés à tout moment !";
    }
    setIsWarning(warning);
    setWarningMessage(message);
  };

  const handleChangeLimitDaysBookings = (event) => {
    setLimitDaysBookings(event.target.value);
    setIsSucess(false);
    handleChangeIsEditing(club, event.target.value, limitHoursBeforeBooking, limitHoursBeforeCancel, limitActivesBookings);
    handleChangeIsWarning(limitHoursBeforeBooking, limitHoursBeforeCancel);
  };
  const handleChangeLimitActivesBookings = (event) => {
    setLimitActivesBookings(event.target.value);
    setIsSucess(false);
    handleChangeIsEditing(club, limitDaysBookings, limitHoursBeforeBooking, limitHoursBeforeCancel, event.target.value);
    handleChangeIsWarning(limitHoursBeforeBooking, limitHoursBeforeCancel);
  };
  const handleChangeLimitHoursBeforeBooking_H = (event) => {
    const hoursBefore = event.target.value;
    const limitHoursBeforeBookingParam = hoursBefore + (limitHoursBeforeBooking_M / 60);
    setLimitHoursBeforeBooking_H(hoursBefore);
    setLimitHoursBeforeBooking(limitHoursBeforeBookingParam);
    setIsSucess(false);
    handleChangeIsEditing(club, limitDaysBookings, limitHoursBeforeBookingParam, limitHoursBeforeCancel, limitActivesBookings);
    handleChangeIsWarning(limitHoursBeforeBookingParam, limitHoursBeforeCancel);
  };
  const handleChangeLimitHoursBeforeBooking_M = (event) => {
    const minutesBefore = event.target.value;
    const limitHoursBeforeBookingParam = limitHoursBeforeBooking_H + (minutesBefore / 60);
    setLimitHoursBeforeBooking_M(minutesBefore);
    setLimitHoursBeforeBooking(limitHoursBeforeBookingParam);
    setIsSucess(false);
    handleChangeIsEditing(club, limitDaysBookings, limitHoursBeforeBookingParam, limitHoursBeforeCancel, limitActivesBookings);
    handleChangeIsWarning(limitHoursBeforeBookingParam, limitHoursBeforeCancel);
  };

  const handleChangeLimitHoursBeforeCancel_D = (event) => {
    const daysBefore = event.target.value;
    const limitHoursBeforeCancelParam = (daysBefore * 24) + limitHoursBeforeCancel_H + (limitHoursBeforeCancel_M / 60);
    setLimitHoursBeforeCancel_D(daysBefore);
    setLimitHoursBeforeCancel(limitHoursBeforeCancelParam);
    setIsSucess(false);
    handleChangeIsEditing(club, limitDaysBookings, limitHoursBeforeBooking, limitHoursBeforeCancelParam, limitActivesBookings);
    handleChangeIsWarning(limitHoursBeforeBooking, limitHoursBeforeCancelParam);
  };
  const handleChangeLimitHoursBeforeCancel_H = (event) => {
    const hoursBefore = event.target.value;
    //const limitHoursBeforeCancel = hoursBefore + (limitHoursBeforeBooking_M / 60);
    const limitHoursBeforeCancelParam = (limitHoursBeforeCancel_D * 24) + hoursBefore + (limitHoursBeforeCancel_M / 60);
    setLimitHoursBeforeCancel_H(hoursBefore);
    setLimitHoursBeforeCancel(limitHoursBeforeCancelParam);
    setIsSucess(false);
    handleChangeIsEditing(club, limitDaysBookings, limitHoursBeforeBooking, limitHoursBeforeCancelParam, limitActivesBookings);
    handleChangeIsWarning(limitHoursBeforeBooking, limitHoursBeforeCancelParam);
  };
  const handleChangeLimitHoursBeforeCancel_M = (event) => {
    const minutesBefore = event.target.value;
    // const limitHoursBeforeCancel = limitHoursBeforeBooking_H + (minutesBefore / 60);
    const limitHoursBeforeCancelParam = (limitHoursBeforeCancel_D * 24) + limitHoursBeforeCancel_H + (minutesBefore / 60);
    setLimitHoursBeforeCancel_M(minutesBefore);
    setLimitHoursBeforeCancel(limitHoursBeforeCancelParam);
    setIsSucess(false);
    handleChangeIsEditing(club, limitDaysBookings, limitHoursBeforeBooking, limitHoursBeforeCancelParam, limitActivesBookings);
    handleChangeIsWarning(limitHoursBeforeBooking, limitHoursBeforeCancelParam);
  };
  useEffect(() => {
    if (club) {
      initSettings(club);
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
      isLoading={isLoading}
      isNotLoading={false}
      isError={isError}
      isWarning={isWarning}
      isNotWarning={!isWarning}
      warningText={warningMessage}
      isSuccess={isSucess}
      isEditing={isEditing}
      actionCancel={{
        onClick: () => {
          initSettings(club);
        },  // Ajout de la fonction onClick ici
      }}
      actionEdit={{
        onClick: async () => {
          //initSettings(club);
          //alert('WEEESH')
          setIsLoading(true);
          async function start() {
            const clubRef = doc(firestore, "CLUBS", club.uid); // Remplacez par votre collection et ID de document
            await updateSettingsClub(clubRef, limitDaysBookings, limitHoursBeforeBooking, limitHoursBeforeCancel, limitActivesBookings);
          }
          await start();
          //updateSettingsClub(club.uid);
          //alert('Les informations vont été réinitialisées');
          setIsEditing(false);
          setIsSucess(true);
          setIsError(false);
          setIsWarning(false);
          setIsLoading(false);
        },  // Ajout de la fonction onClick ici
      }}

      componentProgress={<CircularProgress color="primary" size={'20px'} />}
      componentLimitDays={<Select
        className='form_input is-select-input is-dashboard'
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={limitDaysBookings}
        label="Limit bookings days"
        onChange={handleChangeLimitDaysBookings}
        sx={{ height: 40, color: text.primary }}
      >
        {
          ARRAY_LIMIT_DAYS.map((day, index) => {
            return (
              <MenuItem key={`${day}${index}`} value={day} sx={{ color: text.primary }}><Typography color='text.primary'>{day}</Typography></MenuItem>
            )
          })
        }
      </Select>}
      componentLimitHoursBeforeBooking={<Select
        className='form_input is-select-input is-dashboard'
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={limitHoursBeforeBooking_H}
        label="Limit before booking hours"
        onChange={handleChangeLimitHoursBeforeBooking_H}
        sx={{ height: 40, color: text.primary }}
      >
        {
          ARRAY_LIMIT_HOURS.map((day, index) => {
            return (
              <MenuItem key={`${day}${index}`} value={day} sx={{ color: text.primary }}><Typography color='text.primary'>{day}</Typography></MenuItem>
            )
          })
        }
      </Select>}
      componentLimitMinutesBeforeBooking={<Select
        className='form_input is-select-input is-dashboard'
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={limitHoursBeforeBooking_M}
        label="Limit before booking minutes"
        onChange={handleChangeLimitHoursBeforeBooking_M}
        sx={{ height: 40, color: text.primary }}
      >
        {
          ARRAY_LIMIT_MINUTES.map((day, index) => {
            return (
              <MenuItem key={`${day}${index}`} value={day} sx={{ color: text.primary }}><Typography color='text.primary'>{day}</Typography></MenuItem>
            )
          })
        }
      </Select>}
      componentLimitDaysBeforeCancel={<Select
        className='form_input is-select-input is-dashboard'
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={limitHoursBeforeCancel_D}
        label="Limit bookings days"
        onChange={handleChangeLimitHoursBeforeCancel_D}
        sx={{ height: 40, color: text.primary }}
      >
        {
          ARRAY_LIMIT_DAYS_CANCEL.map((day, index) => {
            return (
              <MenuItem key={`${day}${index}`} value={day} sx={{ color: text.primary }}><Typography color='text.primary'>{day}</Typography></MenuItem>
            )
          })
        }
      </Select>}
      componentLimitHoursBeforeCancel={<Select
        className='form_input is-select-input is-dashboard'
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={limitHoursBeforeCancel_H}
        label="Limit before cancel hours"
        onChange={handleChangeLimitHoursBeforeCancel_H}
        sx={{ height: 40, color: text.primary }}
      >
        {
          ARRAY_LIMIT_HOURS.map((day, index) => {
            return (
              <MenuItem key={`${day}${index}`} value={day} sx={{ color: text.primary }}><Typography color='text.primary'>{day}</Typography></MenuItem>
            )
          })
        }
      </Select>}
      componentLimitMinutesBeforeCancel={<Select
        className='form_input is-select-input is-dashboard'
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={limitHoursBeforeCancel_M}
        label="Limit before cancel minutes"
        onChange={handleChangeLimitHoursBeforeCancel_M}
        sx={{ height: 40, color: text.primary }}
      >
        {
          ARRAY_LIMIT_MINUTES.map((day, index) => {
            return (
              <MenuItem key={`${day}${index}`} value={day} sx={{ color: text.primary }}><Typography color='text.primary'>{day}</Typography></MenuItem>
            )
          })
        }
      </Select>}
      componentLimitActivesBookings={<Select
        //error
        className='form_input is-select-input is-dashboard'
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={limitActivesBookings}
        label="Limit actives bookings"
        onChange={handleChangeLimitActivesBookings}
        sx={{ height: 40, color: text.primary }}
      >
        {
          ARRAY_LIMIT_ACTIVES_BOOKINGS.map((day, index) => {
            return (
              <MenuItem key={`${day}${index}`} value={day} sx={{ color: text.primary }}><Typography color='text.primary'>{day}</Typography></MenuItem>
            )
          })
        }
      </Select>}



      componentSwitch={<Stack sx={{ width: '100%', height: '100%' }}><SwitchTheme /></Stack>}
      componentLogoClub={<Stack sx={{ height: '100%', p: '2px', background: clubBackColor }} alignItems={'center'} justifyContent={'center'}>
        <Image src={clubLogo} width={50} height={50} style={{ width: '2rem', height: 'auto' }} loading='lazy' />
      </Stack>}
      limitDaysBookings={`${limitDaysBookings}j`}
      limitHoursBeforeBooking={`${limitHoursBeforeBooking_H > 0 ? `${limitHoursBeforeBooking_H}h ` : ''}${limitHoursBeforeBooking_M > 0 ? `${limitHoursBeforeBooking_M}min ` : ''}`}
      limitHoursBeforeCancel={`${limitHoursBeforeCancel_D > 0 ? `${limitHoursBeforeCancel_D}j ` : ''}${limitHoursBeforeCancel_H > 0 ? `${limitHoursBeforeCancel_H}h ` : ''}${limitHoursBeforeCancel_M > 0 ? `${limitHoursBeforeCancel_M}min ` : ''}`}
      //limitHoursBeforeCancel={`${limitHoursBeforeCancel}h`}
      limitActivesBookings={`${limitActivesBookings}`}
      loader={<CircularProgress color="primary" />}
      //limitHoursBeforeBooking={`${club.limitHoursBeforeBooking * 60 >= 60 ? club.limitHoursBeforeBooking + " heure(s)" : (club.limitHoursBeforeBooking * 60) + " minutes"}
      styleSettings={{
        className: "sidebar4_link w--current",
      }}
      disconnectButtonProps={{
        onClick: handleLogout,  // Ajout de la fonction onClick ici
      }}
    /*
    inputLimitDaysBookingsProps={{
      //onChange: handleLogout,  // Ajout de la fonction onClick ici
      defaultValue:limitDaysBookings,
      onChange: (event) => handleChangeLimitDaysBookings(event),  // Ajout de la fonction onClick ici
      value: changeLimitDaysBookings,  // Ajout de la fonction onClick ici
    }}
    */


    /></>);
}
