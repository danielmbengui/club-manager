import React, { useEffect, useState } from 'react';
import { BillingPage, CalendarPage, CardOneCourt, CardOneSite, ClubInfoRow, ClubInfoSubRow, ClubPage, } from "@/devlink";
import Head from "next/head";
import { TITLE_PAGE_BILLING, TITLE_PAGE_CALENDAR, TITLE_PAGE_CLUB, TITLE_WEB_APP } from "@/constants";
import { useAuth } from "@/providers/AuthProvider";
import LayoutLoading from '@/components/layouts/LayoutLoading';
import { Grid2, Stack } from '@mui/material';
import SwitchTheme from '@/components/SwitchTheme';
import Image from 'next/image';
import { formatCurrency, getArrayMonthStr, parseDoubleToHourInterval } from '@/functions';
import { getArrayDayStr, getDateFromDayOfYear } from '@/functions/manage-time';
import { getCourtsList, getSiteList } from '@/functions/club';
import { firestore } from '@/firebase';
import { collection, doc, getDoc } from 'firebase/firestore';

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
  const [openingStandard, setOpeningStandard] = useState({});
  const [openingWeek, setOpeningWeek] = useState([]);
  const [openingSpecial, setOpeningSpecial] = useState([]);
  const [sites, setSites] = useState([]);
  const [courts, setCourts] = useState([]);

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
      setOpeningStandard(club.booking_opening_standard);
      setOpeningWeek(club.booking_opening_week_days);
      setOpeningSpecial(club.booking_opening_special_days);
      console.log("WEEEEESH", club.booking_opening_standard);
      //const clubRef = doc(firestore, court);

      //setSites(getSiteList(clubRef));
    }
  }, [club]);
  useEffect(() => {
    if (club) {
      async function start() {
        const clubRef = doc(firestore, "CLUBS", club.uid);
        const list = await getSiteList(clubRef);
        const courtList = await getCourtsList(clubRef);
        console.log("WESH", list);
        setSites(list);
        setCourts(courtList);
      }
      start();
    }
  }, [club])
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
      
      componentSites={<Grid2 container spacing={1}>
        {
          sites.sort((a, b) => a.name.localeCompare(b.name)).map((site, index) => {
            return (<Grid2 size={4}>
              <CardOneSite
                key={`${site.name}${index}`}
                siteName={site.name}
                imageSite={club.gallery[0]}
                addressSite={site.address.fullAddress}
                nCourts={`${9} terrains `}
                courtName={"WESH"}
              />
            </Grid2>)
          })
        }
      </Grid2>}
      
      componentCourts={<Grid2 container spacing={1}>
        {
          courts.sort((a, b) => a.name_or_number.localeCompare(b.name_or_number)).map((court, index) => {
            const openTime = court.booking_opening_standard.open_time.name;
            const closeTime = court.booking_opening_standard.close_time.name;
            const clubRef = doc(firestore, "CLUBS", club.uid);
            return (<Grid2 size={4}><CardOneCourt
              key={`${court.name_or_number}${index}`}
              courtName={court.name_or_number}
              address={court.site_name}
              openTime={openTime}
              closeTime={closeTime}
            /></Grid2>)
          })
        }
      </Grid2>}
      
      siteName={""}
      imageSite={""}
      addressSite={""}
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
              hasExtraPrice={dayPrices.length > 0}
              standardExtraPriceList={dayPrices.map((extraPrice, index) => {
                const priceGame = extraPrice.price_game;
                const startHour = parseDoubleToHourInterval(extraPrice.start_hour);
                const endHour = parseDoubleToHourInterval(extraPrice.end_hour);
                return (<ClubInfoSubRow
                  key={`${priceGame}${index}`}
                  intervalTime={`${startHour}-${endHour}`}
                  extraPriceValue={formatCurrency(priceGame, 2)}
                  hasExtraPrice={false}
                />)
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
            const prices = price.prices;

            return (<ClubInfoRow
              key={`${valueName}${index}`}
              timeName={getArrayDayStr()[valueName - 1]}
              priceValue={""}
              hasExtraPrice={prices.length > 0}
              standardExtraPriceList={prices.map((extraPrice, index) => {
                const valueName = extraPrice.duration.name;
                const priceGame = extraPrice.price_game;
                const dayPrices = extraPrice.day_prices;
                const startHour = parseDoubleToHourInterval(extraPrice.start_hour);
                const endHour = parseDoubleToHourInterval(extraPrice.end_hour);
                return (<ClubInfoSubRow
                  key={`${priceGame}${index}`}
                  intervalTime={`${valueName}`}
                  extraPriceValue={formatCurrency(priceGame, 2)}
                  hasExtraPrice={dayPrices.length > 0}
                  standardExtraPriceList={dayPrices.map((extraPrice, index) => {
                    //const valueName = extraPrice.duration.name;
                    const priceGame = extraPrice.price_game;
                    //const dayPrices = price.day_prices;
                    const startHour = parseDoubleToHourInterval(extraPrice.start_hour);
                    const endHour = parseDoubleToHourInterval(extraPrice.end_hour);
                    return (<ClubInfoSubRow
                      key={`${priceGame}${index}`}
                      intervalTime={`(${startHour}-${endHour})`}
                      extraPriceValue={formatCurrency(priceGame, 2)}
                      hasExtraPrice={false}
                    />)
                  })}
                />)
              })}
            />)
          })
        }
      </Stack>}
      specialPriceList={<Stack>
        {
          pricesSpecial.map((price, index) => {
            const dayOfYear = price.day_of_year;
            const year = price.year;
            const date = getDateFromDayOfYear(dayOfYear, year);
            //const priceGame = price.price_game;
            const prices = price.prices;

            return (<ClubInfoRow
              key={`${dayOfYear}${year}${index}`}
              timeName={`${date.getDate()} ${getArrayMonthStr()[date.getMonth()]} ${date.getFullYear()}`}
              priceValue={""}
              hasExtraPrice={prices.length > 0}
              standardExtraPriceList={prices.map((extraPrice, index) => {
                const valueName = extraPrice.duration.name;
                const priceGame = extraPrice.price_game;
                const dayPrices = extraPrice.day_prices;
                const startHour = parseDoubleToHourInterval(extraPrice.start_hour);
                const endHour = parseDoubleToHourInterval(extraPrice.end_hour);
                return (<ClubInfoSubRow
                  key={`${priceGame}${index}`}
                  intervalTime={`${valueName}`}
                  extraPriceValue={formatCurrency(priceGame, 2)}
                  hasExtraPrice={dayPrices.length > 0}
                  standardExtraPriceList={dayPrices.map((extraPrice, index) => {
                    //const valueName = extraPrice.duration.name;
                    const priceGame = extraPrice.price_game;
                    //const dayPrices = price.day_prices;
                    const startHour = parseDoubleToHourInterval(extraPrice.start_hour);
                    const endHour = parseDoubleToHourInterval(extraPrice.end_hour);
                    return (<ClubInfoSubRow
                      key={`${priceGame}${index}`}
                      intervalTime={`(${startHour}-${endHour})`}
                      extraPriceValue={formatCurrency(priceGame, 2)}
                      hasExtraPrice={false}

                    />)
                  })}
                />)
              })}
            />)
          })
        }
      </Stack>}

      standardOpeningList={<Stack>
        {
          openingStandard.open_time && <ClubInfoRow
            // key={`${openTime.value}${closeTime.value}${index}`}
            timeName={`${openingStandard.open_time.name}-${openingStandard.close_time.name}`}
            priceValue={""}
            hasExtraPrice={true}
            standardExtraPriceList={openingStandard.extra_closed_time_list.map((opening, index) => {
              const startHour = opening.start_hour;
              const endHour = opening.end_hour;
              return (<ClubInfoSubRow
                key={`${startHour}${endHour}${index}`}
                intervalTime={`Fermé de ${startHour}h à ${endHour}h`}
                extraPriceValue={""}
                hasExtraPrice={false}

              />)
            })}
          />
        }
      </Stack>}
      weekOpeningList={<Stack>
        {
          openingWeek.map((opening, index) => {
            const dayOfWeek = opening.day_of_week;
            const bookingTime = opening.booking_time;
            const openTime = bookingTime.open_time;
            const closeTime = bookingTime.close_time;
            const extra = bookingTime.extra_closed_time_list;

            return (<ClubInfoRow
              key={`${dayOfWeek}${index}`}
              timeName={`${getArrayDayStr()[dayOfWeek - 1]}`}
              priceValue={""}
              hasExtraPrice={true}
              standardExtraPriceList={<ClubInfoSubRow
                key={`${dayOfWeek}${openTime.value}${closeTime.value}`}
                intervalTime={`${openTime.name}-${closeTime.name}`}
                extraPriceValue={""}
                hasExtraPrice={extra.length > 0}
                standardExtraPriceList={extra.map((opening, index) => {
                  const startHour = opening.start_hour;
                  const endHour = opening.end_hour;
                  return (<ClubInfoSubRow
                    key={`${startHour}${endHour}${index}`}
                    intervalTime={`Fermé de ${startHour}h à ${endHour}h`}
                    extraPriceValue={""}
                    hasExtraPrice={false}
                  />)
                })}
              />}
            />)
          })
        }
      </Stack>}
      specialOpeningList={<Stack>
        {
          openingSpecial.map((opening, index) => {
            const dayOfYear = opening.day_of_year;
            const year = opening.year;
            const bookingTime = opening.booking_time;
            const openTime = bookingTime.open_time;
            const closeTime = bookingTime.close_time;
            const extra = bookingTime.extra_closed_time_list;
            const date = getDateFromDayOfYear(dayOfYear, year);
            return (<ClubInfoRow
              key={`${dayOfYear}${year}${index}`}
              //timeName={`${date}`}
              timeName={`${date.getDate()} ${getArrayMonthStr()[date.getMonth()]} ${date.getFullYear()}`}
              priceValue={""}
              hasExtraPrice={true}
              standardExtraPriceList={<ClubInfoSubRow
                key={`${dayOfYear}${year}${openTime.value}${closeTime.value}`}
                intervalTime={`${openTime.name}-${closeTime.name}`}
                extraPriceValue={""}
                hasExtraPrice={extra.length > 0}
                standardExtraPriceList={extra.map((opening, index) => {
                  const startHour = opening.start_hour;
                  const endHour = opening.end_hour;
                  return (<ClubInfoSubRow
                    key={`${startHour}${endHour}${index}`}
                    intervalTime={`Fermé de ${startHour}h à ${endHour}h`}
                    extraPriceValue={""}
                    hasExtraPrice={false}
                  />)
                })}
              />}
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
