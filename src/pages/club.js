import React, { useEffect, useState } from 'react';
import { BillingPage, CalendarPage, CardOneCourt, CardOneSite, ClubInfoRow, ClubInfoSubRow, ClubPage, } from "@/devlink";
import Head from "next/head";
import { TITLE_PAGE_BILLING, TITLE_PAGE_CALENDAR, TITLE_PAGE_CLUB, TITLE_WEB_APP } from "@/constants";
import { useAuth } from "@/providers/AuthProvider";
import LayoutLoading from '@/components/layouts/LayoutLoading';
import { Grid2, Stack, TextField } from '@mui/material';
import SwitchTheme from '@/components/SwitchTheme';
import Image from 'next/image';
import { formatCurrency, getArrayMonthStr, getFirstAndLastDayOfDay, getFirstAndLastDayOfMonth, getFirstAndLastDayOfYear, parseDoubleToHourInterval } from '@/functions';
import { getArrayDayStr, getDateFromDayOfYear } from '@/functions/manage-time';
import { getCourtsList, getSiteList } from '@/functions/club';
import { firestore } from '@/firebase';
import { collection, doc, getDoc } from 'firebase/firestore';
import { useThemeMode } from '@/contexts/ThemeProvider';
import { getGoogleMapAddress } from '@/functions/google-map';

export default function Club() {
  const { theme, themeMode } = useThemeMode();
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

  const [editClubName, setEditClubName] = useState('--');
  const [errorClubName, setErrorClubName] = useState(false);
  const [helperClubName, setHelperClubName] = useState("");

  const [editClubAddress, setEditClubAddress] = useState('--');
  const [errorClubAddress, setErrorClubAddress] = useState(false);
  const [helperClubAddress, setHelperClubAddress] = useState("");

  const [editClubPhone, setEditClubPhone] = useState('--');
  const [errorClubPhone, setErrorClubPhone] = useState(false);
  const [helperClubPhone, setHelperClubPhone] = useState("");

  const [editClubMail, setEditClubMail] = useState('--');
  const [errorClubMail, setErrorClubMail] = useState(false);
  const [helperClubMail, setHelperClubMail] = useState("");

  const [editClubWebsite, setEditClubWebsite] = useState('--');
  const [errorClubWebsite, setErrorClubWebsite] = useState(false);
  const [helperClubWebsite, setHelperClubWebsite] = useState("");




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
      setEditClubName(club.name);
      setEditClubAddress(clubAddress.fullAddress);
      setEditClubPhone(clubContact.phones[0] ?? "");
      setEditClubMail(clubContact.mails[0] ?? "");
      setEditClubWebsite(clubContact.websites[0] ?? "");
      //setSites(getSiteList(clubRef));
    }
  }, [club]);
  useEffect(() => {
    if (club) {
      async function start() {
        const clubRef = doc(firestore, "CLUBS", club.uid);
        const list = await getSiteList(clubRef);
        const courtList = await getCourtsList(clubRef);
        
        setSites(list);
        setCourts(courtList);
        console.log("ADDDDD", await getGoogleMapAddress("Rue Croix du levant 20"))
      }
      start();
    }
  }, [club]);
  const handleChangeClubName = (event) => {
    const newName = event.target.value;
    setEditClubName(newName);
    if (newName.length <= 3) {
      setErrorClubName(true);
      setHelperClubName("Le nom du club doit avoir minimum 3 caractères");
    } else {
      setErrorClubName(false);
      setHelperClubName("");
    }
  }
  const handleChangeClubAddress = (event) => {
    const newAddress = event.target.value;
    setEditClubAddress(newAddress);
    if (newAddress.length <= 3) {
      setErrorClubAddress(true);
      setHelperClubAddress("L'adresse est introuvable");
    } else {
      setErrorClubAddress(false);
      setHelperClubAddress("");
    }
  }
  const handleChangeClubPhone = (event) => {
    const newPhone = event.target.value;
    setEditClubPhone(newPhone);
    if (!newPhone.includes("+")) {
      setErrorClubPhone(true);
      setHelperClubPhone("Il manque l'indicatif !");
    } else {
      setErrorClubPhone(false);
      setHelperClubPhone("");
    }
  }
  const handleChangeClubMail = (event) => {
    const newMail = event.target.value;
    setEditClubMail(newMail);
    if (!newMail.includes("@")) {
      setErrorClubMail(true);
      setHelperClubMail("Le format de l'email est invalide !");
    } else {
      setErrorClubMail(false);
      setHelperClubMail("");
    }
  }
  const handleChangeClubWebsite = (event) => {
    const newWebsite = event.target.value;
    setEditClubWebsite(newWebsite);
    if (!newWebsite.includes("https")) {
      setErrorClubWebsite(true);
      setHelperClubWebsite("L'adresse du site internet est invalide !");
    } else {
      setErrorClubWebsite(false);
      setHelperClubWebsite("");
    }
  }
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
      isEditing={false}
      isLoading={false}
      isSuccess={false}
      isError={false}
      textfieldClubName={<TextField
        //className='form_input'
        value={editClubName}
        onChange={handleChangeClubName}
        helperText={helperClubName}
        error={errorClubName}
        placeholder='Nom'
        sx={{
          width: '100%',
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              border: 'none', // Supprime la bordure principale
            },
            '&:focus-within fieldset': {
              border: `1px solid ${theme.palette.primary.main}`, // Bordure bleue ou personnalisée au focus
            },
          },
        }}
        slotProps={{
          input: {
            sx: {
              width: '100%',
              height: '2.5rem', // Définit la hauteur de l'élément <input>
              padding: 0, // Ajuste le padding si nécessaire
              background: "var(--color--light-card)",
              borderRadius: '5px',
              border: 'none'
            },
          },
        }}
      />}
      textfieldClubAddress={<TextField
        //className='form_input'
        value={editClubAddress}
        onChange={handleChangeClubAddress}
        helperText={helperClubAddress}
        error={errorClubAddress}
        placeholder='Adresse'
        sx={{
          width: '100%',
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              border: 'none', // Supprime la bordure principale
            },
            '&:focus-within fieldset': {
              border: `1px solid ${theme.palette.primary.main}`, // Bordure bleue ou personnalisée au focus
            },
          },
        }}
        slotProps={{
          input: {
            sx: {
              width: '100%',
              height: '2.5rem', // Définit la hauteur de l'élément <input>
              padding: 0, // Ajuste le padding si nécessaire
              background: "var(--color--light-card)",
              borderRadius: '5px',
              border: 'none'
            },
          },
        }}
      />}
      
      textfieldClubPhone={<TextField
        //className='form_input'
        value={editClubPhone}
        onChange={handleChangeClubPhone}
        helperText={helperClubPhone}
        error={errorClubPhone}
        placeholder='Téléphone'
        sx={{
          width: '100%',
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              border: 'none', // Supprime la bordure principale
            },
            '&:focus-within fieldset': {
              border: `1px solid ${theme.palette.primary.main}`, // Bordure bleue ou personnalisée au focus
            },
          },
        }}
        slotProps={{
          input: {
            sx: {
              height: '2.5rem', // Définit la hauteur de l'élément <input>
              padding: 0, // Ajuste le padding si nécessaire
              background: "var(--color--light-card)",
              borderRadius: '5px',
              border: 'none'
            },
          },
        }}
      />}
      textfieldClubMail={<TextField
        //className='form_input'
        value={editClubMail}
        onChange={handleChangeClubMail}
        helperText={helperClubMail}
        error={errorClubMail}
        placeholder='Email'
        sx={{
          width: '100%',
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              border: 'none', // Supprime la bordure principale
            },
            '&:focus-within fieldset': {
              border: `1px solid ${theme.palette.primary.main}`, // Bordure bleue ou personnalisée au focus
            },
          },
        }}
        slotProps={{
          input: {
            sx: {
              height: '2.5rem', // Définit la hauteur de l'élément <input>
              padding: 0, // Ajuste le padding si nécessaire
              background: "var(--color--light-card)",
              borderRadius: '5px',
              border: 'none'
            },
          },
        }}
      />}
      textfieldClubWebsite={<TextField
        //className='form_input'
        value={editClubWebsite}
        onChange={handleChangeClubWebsite}
        helperText={helperClubWebsite}
        error={errorClubWebsite}
        placeholder='Adresse site internet'
        sx={{
          width: '100%',
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              border: 'none', // Supprime la bordure principale
            },
            '&:focus-within fieldset': {
              border: `1px solid ${theme.palette.primary.main}`, // Bordure bleue ou personnalisée au focus
            },
          },
        }}
        slotProps={{
          input: {
            sx: {
              height: '2.5rem', // Définit la hauteur de l'élément <input>
              padding: 0, // Ajuste le padding si nécessaire
              background: "var(--color--light-card)",
              borderRadius: '5px',
              border: 'none'
            },
          },
        }}
      />}




      componentSites={<Grid2 container spacing={1}>
        {
          sites.sort((a, b) => a.name.localeCompare(b.name)).map((site, index) => {
            return (<Grid2 size={4} key={`${site.name}${index} `}>
              <CardOneSite
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

            //

            //const courtData = await getDoc(courtRef);
            //const siteRef = doc(collection(clubRef, "SITES"), club);
            // const courtSnap= await getDoc(courtRef);
            //const clubData = clubSnap.data();
            //commission = clubData.comission_percentage;

            return (<Grid2 size={4} key={`${court.name_or_number}${index}`}>
              <CardOneCourt
                courtName={court.name_or_number}
                address={court.site_name}
                //siteName={court.name_or_number}
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
