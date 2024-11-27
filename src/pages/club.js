import React, { useEffect, useState } from 'react';
import { BillingPage, CalendarPage, ClubInfoRow, ClubInfoSubRow, ClubPage, } from "@/devlink";
import Head from "next/head";
import { TITLE_PAGE_BILLING, TITLE_PAGE_CALENDAR, TITLE_PAGE_CLUB, TITLE_WEB_APP } from "@/constants";
import { useAuth } from "@/providers/AuthProvider";
import LayoutLoading from '@/components/layouts/LayoutLoading';
import { Stack } from '@mui/material';
import SwitchTheme from '@/components/SwitchTheme';
import Image from 'next/image';
import { formatCurrency, parseDoubleToHourInterval } from '@/functions';
import { getArrayDayStr } from '@/functions/manage-time';

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
  const [pricesStandard, setPricesStandard] = useState([]);
  const [pricesWeek, setPricesWeek] = useState([]);
  const [pricesSpecial, setPricesSpecial] = useState([]);

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
      setPricesStandard(club.booking_prices_standard);
      setPricesWeek(club.booking_prices_week_days);
      setPricesSpecial(club.booking_prices_special_days);
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
      standardPriceList={<Stack>
        {
          pricesStandard.map((price, index) => {
            const valueName = price.duration.name;
            const priceGame = price.price_game;
            const dayPrices = price.day_prices;
            return (<ClubInfoRow
              key={`${valueName}${index}`}
              timeName={valueName}
              priceValue={formatCurrency(priceGame, 2)}
              intervalTime={"WESH"}
              extraPriceValue={38}
              standardExtraPriceList={dayPrices.map((extraPrice, index) => {
                const priceGame = extraPrice.price_game;
                const startHour = parseDoubleToHourInterval(extraPrice.start_hour);
                const endHour = parseDoubleToHourInterval(extraPrice.end_hour);
                return (<ClubInfoSubRow
                  key={`${priceGame}${index}`}
                  intervalTime={`${startHour}-${endHour}`}
                  extraPriceValue={formatCurrency(priceGame, 2)} />)
              })}
            />)
          })
        }
      </Stack>}
      weekPriceList={<Stack>
        {
          pricesWeek.map((price, index) => {
            const valueName = price.day_of_week;
            //const priceGame = price.price_game;
            //const dayPrices = price.day_prices;
            return (<ClubInfoRow
              key={`${valueName}${index}`}
              timeName={getArrayDayStr()[valueName-1]}
              priceValue={""}
              /*
              
              intervalTime={"WESH"}
              extraPriceValue={38}
              standardExtraPriceList={dayPrices.map((extraPrice, index) => {
                const priceGame = extraPrice.price_game;
                const startHour = parseDoubleToHourInterval(extraPrice.start_hour);
                const endHour = parseDoubleToHourInterval(extraPrice.end_hour);
                return (<ClubInfoSubRow
                  key={`${priceGame}${index}`}
                  intervalTime={`${startHour}-${endHour}`}
                  extraPriceValue={formatCurrency(priceGame, 2)} />)
              })}
              */
            />)
          })
        }
      </Stack>}
      specialPriceList={<Stack>
        {
          pricesStandard.map((price, index) => {
            const valueName = price.duration.name;
            const priceGame = price.price_game;
            const dayPrices = price.day_prices;
            return (<ClubInfoRow
              key={`${valueName}${index}`}
              timeName={valueName}
              priceValue={formatCurrency(priceGame, 2)}
              intervalTime={"WESH"}
              extraPriceValue={38}
              standardExtraPriceList={dayPrices.map((extraPrice, index) => {
                const priceGame = extraPrice.price_game;
                const startHour = parseDoubleToHourInterval(extraPrice.start_hour);
                const endHour = parseDoubleToHourInterval(extraPrice.end_hour);
                return (<ClubInfoSubRow
                  key={`${priceGame}${index}`}
                  intervalTime={`${startHour}-${endHour}`}
                  extraPriceValue={formatCurrency(priceGame, 2)} />)
              })}
            />)
          })
        }
      </Stack>}

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
