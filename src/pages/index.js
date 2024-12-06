import React, { useEffect, useMemo, useState } from 'react';
import { ButtonPrimary, ButtonSecondary, DashboardPage } from "@/devlink";
import Head from "next/head";
import LayoutLogin from "@/components/layouts/LayoutLogin";
import { LINK_PAGE_DASHBOARD, LINK_PAGE_MANAGE, PLAYPAD_CREATION_YEAR, START_BOOKING_YEAR, TITLE_PAGE_DASHBOARD, TITLE_WEB_APP } from "@/constants";
import { useAuth } from "@/providers/AuthProvider";
import { Button, CircularProgress, MenuItem, Select, Stack, Typography } from '@mui/material';
import { collection, query, where, getDocs, doc, getDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { firestore } from '@/firebase';
import { formatCountBookings, formatCurrency, formatNumber, formatPercentage, getArrayMonthJson, getArrayMonthStr, getDaysInMonth, getFirstAndLastDayOfDay, getFirstAndLastDayOfMonth, getFirstAndLastDayOfYear, getRandomRGBA, parseDoubleToHourChartInterval, parseDoubleToHourInterval, parseDoubleToTimeInterval } from '@/functions';
import { getBookingListDashboard, getBookingListTotal, getCountBookingsClub, getCountBookingsClubByCourt, getCountBookingsClubBySite, getCountBookingsPlayPad, getCountBookingsTotal, getCountHoursClub, getCountHoursPlayPad, getCountUsersClub, getCountUsersPlayPad, getOneBookingCalendar, getRateBookingsClub, getRateBookingsPlayPad, getRateHoursClub, getRateHoursPlayPad, getTypeBookingStr } from '@/functions/bookings';
import { getArrayRevenuesTotal, getOneTransactionCalendar, getRevenuesClub, getRevenuesPlayPad, getRevenuesTotal, getRevenuesTotalCourt, getRevenuesTotalSite } from '@/functions/transactions';
import PieChart from '@/components/PieChart';
import LineChart from '@/components/LineChart';
import BarChartCustom from '@/components/BarChartCustom';
import { getSiteList } from '@/functions/club';
import { useTable, useSortBy } from 'react-table';
import { KeyboardArrowDown, KeyboardArrowUp, UnfoldMore } from '@mui/icons-material';
import { useThemeMode } from '@/contexts/ThemeProvider';
import { BLACK, WHITE } from '@/colors';
import SwitchTheme from '@/components/SwitchTheme';
import Image from 'next/image';


const SORT_UID = 'uid';
const SORT_CREATED_DATE = 'created_date';
const SORT_MATCH_DATE = 'match_date';
const SORT_CLIENT = 'client';
const SORT_SITE = 'site';
const SORT_COURT = 'court';
const SORT_DURATION = 'duration';
const SORT_PRICE = 'price';
const SORT_STATUS = 'status';
const SORT_SOURCE = 'source';
const SORT_ACTIONS = 'actions';


const MONTHS = getArrayMonthJson();

var DAYS = [
  { value: 0, text: "Tous" },
];

const YEARS = [
  { value: 0, text: "Tous" }
];
for (let i = START_BOOKING_YEAR; i <= new Date().getFullYear() + 1; i++) {
  YEARS.push({ value: i, text: "" + i });
}

const SITES = [
  { value: 0, name: "Tous" }
];
var COURTS = [
  { value: 0, name: "Tous" }
];

var BACKGROUNDS = [
  "rgba(66, 133, 244,1)"
];

var BORDERS = [
  "rgba(66, 133, 244, 0.5)"
];


export default function Home() {
  const { theme, themeMode } = useThemeMode();
  const { primary, primaryShadowChart, text } = theme.palette;
  const defaultBackground = primaryShadowChart.main;
  const defaultBorder = primary.main;
  const { login, user, logout, club } = useAuth();
  const [clubName, setClubName] = useState('');
  const [clubLogo, setClubLogo] = useState('');
  const [clubBackColor, setClubBackColor] = useState('');
  const [day, setDay] = useState(0);
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [year, setYear] = useState(new Date().getFullYear());
  const [isLoading, setIsLoading] = useState(false);
  const [disabledAllMonth, setDisabledAllMonth] = useState(false);
  const [disabledAllYear, setDisabledAllYear] = useState(false);
  const [countBookingsClub, setCountBookingsClub] = useState(0);
  const [countBookingsPlayPad, setCountBookingsPlayPad] = useState(0);
  const [countBookingsTotal, setCountBookingsTotal] = useState(0);
  const [revenuesClubs, setRevenuesClubs] = useState(0);
  const [revenuesPlayPad, setRevenuesPlayPad] = useState(0);
  const [revenuesTotal, setRevenuesTotal] = useState(0);
  const [revenuesTotalSite, setRevenuesTotalSite] = useState(0);
  const [revenuesTotalCourt, setRevenuesTotalCourt] = useState(0);
  const [bookingList, setBookingList] = useState([]);
  const [data, setData] = useState([]);
  const [showDialogBooking, setShowDialogBooking] = useState(false);
  const [selectedBooking, setSeletedBooking] = useState(null);
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [selectedSorting, setSelectedSorting] = useState(SORT_CREATED_DATE);
  const [selectedDesc, setSelectedDesc] = useState(true);

  const Table = ({ columns, data }) => {
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
      useTable({ columns, data }, useSortBy);

    return (
      <table {...getTableProps()} style={{ width: '100%', borderCollapse: 'collapse', }}>
        <thead className='table_head' >
          {headerGroups.map((headerGroup, index) => {
            const { key, ...rest } = headerGroup.getHeaderGroupProps(); // Extraire `key`
            return (
              <tr key={key} {...rest} className='table_row' >
                {headerGroup.headers.map((column, index) => {
                  const { keyR, ...rest } = column.getHeaderProps(column.getSortByToggleProps()); // Extraire `key`
                  return (
                    <th
                      key={keyR}
                      {...rest}
                      className='table_header'
                      style={{
                        cursor: 'pointer',
                        //display:'flex',
                        //flexDirection:'row',
                        color: 'var(--text-primary-devlink)',
                        justifyContent: 'space-between',
                        //borderBottom: '1px solid black',
                        background: 'var(--card-light-devlink)',
                        textAlign: 'center',
                        padding: '8px',
                      }}

                    >
                      {column.render('Header')}
                      {column.id !== 'actions' ? column.isSorted ? (
                        column.isSortedDesc ? (
                          <KeyboardArrowUp fontSize='small' sx={{ color: "var(--playpad-sort-table-icon)" }}
                            onClick={() => {
                              var sorted = SORT_CREATED_DATE;
                              if (column.id === SORT_UID) {
                                sorted = SORT_UID;
                              } else if (column.id === SORT_CREATED_DATE) {
                                sorted = SORT_CREATED_DATE;
                              } else if (column.id === SORT_CLIENT) {
                                sorted = SORT_CLIENT;
                              } else if (column.id === SORT_SITE) {
                                sorted = SORT_SITE;
                              } else if (column.id === SORT_COURT) {
                                sorted = SORT_COURT;
                              } else if (column.id === SORT_DURATION) {
                                sorted = SORT_DURATION;
                              } else if (column.id === SORT_PRICE) {
                                sorted = SORT_PRICE;
                              } else if (column.id === SORT_STATUS) {
                                sorted = SORT_STATUS;
                              }
                              setSelectedSorting(sorted);
                              setSelectedDesc(true);
                            }}
                          />
                        ) : (
                          <KeyboardArrowDown fontSize='small' sx={{ color: 'var(--playpad-sort-table-icon)' }}
                            onClick={() => {
                              var sorted = SORT_CREATED_DATE;
                              if (column.id === SORT_UID) {
                                sorted = SORT_UID;
                              } else if (column.id === SORT_CREATED_DATE) {
                                sorted = SORT_CREATED_DATE;
                              } else if (column.id === SORT_CLIENT) {
                                sorted = SORT_CLIENT;
                              } else if (column.id === SORT_SITE) {
                                sorted = SORT_SITE;
                              } else if (column.id === SORT_COURT) {
                                sorted = SORT_COURT;
                              } else if (column.id === SORT_DURATION) {
                                sorted = SORT_DURATION;
                              } else if (column.id === SORT_PRICE) {
                                sorted = SORT_PRICE;
                              } else if (column.id === SORT_STATUS) {
                                sorted = SORT_STATUS;
                              }
                              setSelectedSorting(sorted);
                              setSelectedDesc(true);
                            }}
                          />
                        )
                      ) : (
                        <UnfoldMore fontSize='small' sx={{ color: 'var(--playpad-sort-table-icon)' }} onClick={() => {
                          var sorted = SORT_CREATED_DATE;
                          if (column.id === SORT_UID) {
                            sorted = SORT_UID;
                          } else if (column.id === SORT_CREATED_DATE) {
                            sorted = SORT_CREATED_DATE;
                          } else if (column.id === SORT_CLIENT) {
                            sorted = SORT_CLIENT;
                          } else if (column.id === SORT_SITE) {
                            sorted = SORT_SITE;
                          } else if (column.id === SORT_COURT) {
                            sorted = SORT_COURT;
                          } else if (column.id === SORT_DURATION) {
                            sorted = SORT_DURATION;
                          } else if (column.id === SORT_PRICE) {
                            sorted = SORT_PRICE;
                          } else if (column.id === SORT_STATUS) {
                            sorted = SORT_STATUS;
                          }
                          setSelectedSorting(sorted);
                          setSelectedDesc(false);
                        }} />
                      ) : <></>}
                    </th>
                  )
                })}
              </tr>
            )
          })}
        </thead>
        <tbody {...getTableBodyProps()} className='table_body' >
          {rows.map((row, index) => {

            prepareRow(row);
            const { key, ...rest } = row.getRowProps(); // Extraire `key`
            const colorBackground = row.cells[7].value == "En attente" ? 'var(--warning-devlink)' : '';
            const colorText = row.cells[7].value == "En attente" ? 'black' : 'var(--text-primary-devlink)';
            return (
              <tr key={key} {...rest} style={{ borderCollapse: 'collapse', background: colorBackground }} className='table_row' >
                {row.cells.map((cell, index) => {
                  const { keyD, ...rest } = cell.getCellProps(); // Extraire `key`
                  return (
                    <td
                      key={keyD}
                      {...rest}
                      className='table_cell'
                      style={{
                        padding: '8px',
                        color: colorText,
                        //borderBottom: '1px solid #ddd',
                        //borderRight: '1px solid #ddd',
                        textAlign: 'center'
                      }}
                    >
                      {cell.column.id === 'actions' ? (
                        <Stack justifyContent={'center'} alignItems={'center'} sx={{ width: "100%", }}>
                          <div style={{ width: '80%' }}>
                            <ButtonSecondary
                              text={"Infos"}
                              style={{
                                //width:"80%",
                                //padding: '5px 10px',
                                //backgroundColor: 'var(--playpad-secondary)',
                                //color: '#fff',
                                //border: 'none',
                                //borderRadius: '4px',
                                //cursor: 'pointer',
                              }}

                              action={{
                                onClick: async () => {
                                  setShowDialogBooking(true);
                                  setIsLoading(true);
                                  const id = bookingList[cell.row.index].uid;
                                  const clubRef = doc(firestore, "CLUBS", club.uid);
                                  var bookingRef = doc((collection(clubRef, "COURT_PENDING_BOOKINGS")), id);
                                  var bookingSnap = await getDoc(bookingRef);
                                  const isPending = bookingSnap.exists();
                                  if (!isPending) {
                                    bookingRef = doc((collection(clubRef, "COURT_BOOKINGS")), id);
                                    bookingSnap = await getDoc(bookingRef);
                                  }
                                  //const bookingData = bookingSnap.data();
                                  const bookingData = getOneBookingCalendar(bookingSnap, isPending);
                                  setSeletedBooking(bookingData);
                                  if (bookingData.transaction_uid != "") {
                                    const transactionCollection = isPending ? "COURT_PENDING_TRANSACTIONS" : "COURT_TRANSACTIONS";
                                    var transactionRef = doc((collection(clubRef, transactionCollection)), bookingData.transaction_uid);
                                    var transactionSnap = await getDoc(transactionRef);
                                    const transactionData = getOneTransactionCalendar(transactionSnap, isPending);
                                    setSelectedTransaction(transactionData);
                                  }
                                  setIsLoading(false);
                                },  // Ajout de la fonction onClick ici
                                //className: "btn-primary",  // Ajout d'une classe CSS
                                //type: "button"
                              }}
                            />
                          </div>
                        </Stack>
                      ) : (
                        cell.render('Cell')
                      )}
                    </td>
                  )
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await getTableBooking(bookingList);
      setData(result);
    };

    fetchData();
  }, [bookingList]); // Recalcule uniquement si bookingList change
  useEffect(() => {
    const allBookings = sortBookingList([...bookingList], selectedSorting, selectedDesc);
    //setBookingList(allBookings);
    setBookingList(allBookings);
  }, [selectedSorting, selectedDesc]); // Recalcule uniquement si bookingList change


  async function getTableBooking(bookingList) {
    const bookings = [];
    for (let booking of bookingList) {
      const createdDateTimestamp = booking.created_date;
      const createdDate = new Date(createdDateTimestamp.seconds * 1_000);
      const matchDateTimestamp = booking.match_date;
      const matchDate = new Date(matchDateTimestamp.seconds * 1_000);
      bookings.push({
        //key: booking.uid,
        [SORT_UID]: booking.uid,
        [SORT_CLIENT]: booking.name,
        //created_date: `${createdDate.getDate().toString().padStart(2, '0')}.${(createdDate.getMonth() + 1).toString().padStart(2, '0')}.${createdDate.getFullYear()} ${createdDate.getHours().toString().padStart(2, '0')}h${createdDate.getMinutes().toString().padStart(2, '0')}`,
        [SORT_CREATED_DATE]: booking.created_date,
        //match_date: `${matchDate.getDate().toString().padStart(2, '0')}.${(matchDate.getMonth() + 1).toString().padStart(2, '0')}.${matchDate.getFullYear()}`,
        [SORT_SITE]: booking.site_name,
        [SORT_COURT]: booking.court_name,
        [SORT_DURATION]: booking.duration,
        [SORT_PRICE]: formatCurrency(booking.amount_paid, 2),
        [SORT_STATUS]: booking.status,
        [SORT_SOURCE]: booking.is_from_app ? "PlayPad" : clubName,
        [SORT_ACTIONS]: "Infos",
      });
    }
    return bookings;
  }
  const columns = useMemo(
    () => [
      { Header: 'Numéro', accessor: SORT_UID },
      { Header: 'Crée le', accessor: SORT_CREATED_DATE },
      { Header: 'Nom', accessor: SORT_CLIENT },
      //{ Header: 'Date Match', accessor: 'SORT_MATCH_DATE' },
      { Header: 'Site', accessor: SORT_SITE },
      { Header: 'Terrain', accessor: SORT_COURT },
      { Header: 'Durée', accessor: SORT_DURATION },
      { Header: 'Prix', accessor: SORT_PRICE },
      { Header: 'Statut', accessor: SORT_STATUS },
      //{ Header: 'Source', accessor: 'SORT_SOURCE' },
      { Header: '', accessor: SORT_ACTIONS },
    ],
    []
  );

  const [rateBookingPlayPad, setRateBookingPlayPad] = useState(0);
  const [rateBookingClub, setRateBookingClub] = useState(0);

  const [rateHoursPlayPad, setRateHoursPlayPad] = useState(0);
  const [rateHoursClub, setRateHourClub] = useState(0);

  const [countMatchsClub, setCountMatchsClub] = useState(0);
  const [countMatchsPlayPad, setCountMatchsPlayPad] = useState(0);
  const [countMatchsTotal, setCountMatchsTotal] = useState(0);

  const [countHoursPlayPad, setCountHoursPlayPad] = useState(0);
  const [countHoursClub, setCountHoursClub] = useState(0);

  const [countUsersPlayPad, setCountUsersPlayPad] = useState(0);
  const [countUsersClub, setCountUsersClub] = useState(0);
  var indexLabelsLineChart = -1;
  const [labelsLineChart, setLabelsLineChart] = useState(Array.from({ length: 12 }, () => { indexLabelsLineChart++; return getArrayMonthStr()[indexLabelsLineChart]; }));
  const [valuesLineChart, setValuesLineChart] = useState(Array.from({ length: 12 }, () => { indexLabelsLineChart++; return 0 }));

  //const labels = Array.from({ length: 12 }, () => { i++; return getMonthStr(i); });
  const [titleBarChart, setTitleBarChart] = useState("");
  const [labelsBarChart, setLabelsBarChart] = useState([]);
  const [valuesBarChart, setValuesBarChart] = useState([]);
  const [backgroundBarChart, setBackgroundBarChart] = useState([]);
  const [bordersBarChart, setBordersBarChart] = useState([]);


  //const year = new Date().getFullYear();
  const [selectedSite, setSelectedSite] = useState(SITES[0].value);
  const [selectedCourt, setSelectedCourt] = useState(COURTS[0].value);
  const [siteslub, setSitesClub] = useState(SITES);

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Login failed:', error);
    }
  };
  async function initSites(club, site = 0, court = 0, month = 0, year = 2024) {
    const clubRef = doc(firestore, "CLUBS", club.uid);
    const querySite = query(collection(clubRef, "SITES"),
      where("available", "==", true),
      // where("match_start_date", ">=", firstDay),
      // where("match_start_date", "<=", lastDay),
    );
    const querySnapshotSites = await getDocs(querySite);
    for (let snapshotSite of querySnapshotSites.docs) {
      const site = snapshotSite.data();
      SITES.push({ value: site.uid, name: site.name });
    }
    setTitleBarChart("Par site");
    setLabelsBarChart(SITES.slice(1).map(site => site.name));
    const initBackgrounds = [defaultBackground];
    const initBorders = [defaultBorder];
    for (let i = 1; i < SITES.slice(1).length; i++) {
      const site = SITES.slice(1)[i];
      const colors = getRandomRGBA(0.2);
      initBackgrounds.push(colors[1]);
      initBorders.push(colors[0]);
    }
    setBackgroundBarChart(initBackgrounds);
    setBordersBarChart(initBorders);
  }
  async function initCourts(club, site = 0, court = 0, month = 0, year = 2024) {
    const clubRef = doc(firestore, "CLUBS", club.uid);
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
      newCourts.push({ value: court.uid, name: court.name_or_number });
    }
    COURTS = newCourts.sort((a, b) => a.name.localeCompare(b.name));
    COURTS.unshift({ value: 0, name: "Tous" });
  }
  function initDays(month = 0, year = 0) {
    const newTab = getDaysInMonth(month, year);
    DAYS = [{ value: 0, text: "Tous" }];
    for (let element of newTab) {
      DAYS.push({ value: element, text: "" + element },);
    }
  }

  function getQueryBooking(clubRef, site, court, day, month, year, pending = false) {
    const collectionStr = pending ? "COURT_PENDING_BOOKINGS" : "COURT_BOOKINGS";
    let queryBooking;
    if (site != 0) {
      const siteRef = doc(collection(clubRef, "SITES"), site);
      if (day != 0 || month != 0 || year != 0) {
        var { firstDay, lastDay } = {};
        if (day != 0) {
          firstDay = getFirstAndLastDayOfDay(day, month - 1, year).firstDay;
          lastDay = getFirstAndLastDayOfDay(day, month - 1, year).lastDay;
          setDisabledAllYear(true);
          setDisabledAllMonth(true);
        } else if (month != 0) {
          setDisabledAllYear(true);
          //const { firstDay, lastDay } = getFirstAndLastDayOfMonth(month - 1, year);
          firstDay = getFirstAndLastDayOfMonth(month - 1, year).firstDay;
          lastDay = getFirstAndLastDayOfMonth(month - 1, year).lastDay;
        } else if (year != 0) {
          //const requestMonth = month!=0?month:0;
          if (YEARS.length > 2) {
            setDisabledAllYear(false);
          }
          setMonth(0);
          //const { firstDay, lastDay } = getFirstAndLastDayOfYear(year);
          firstDay = getFirstAndLastDayOfYear(year).firstDay;
          lastDay = getFirstAndLastDayOfYear(year).lastDay;
        }
        if (court != 0) {
          const courtRef = doc(collection(clubRef, "COURTS"), court);
          queryBooking = query(collection(clubRef, collectionStr),
            where("site_ref", "==", siteRef),
            where("court_ref", "==", courtRef),
            where("created_date", ">=", firstDay),
            where("created_date", "<=", lastDay),
          );
        } else {
          queryBooking = query(collection(clubRef, collectionStr),
            //where("is_from_app", "==", true),
            where("site_ref", "==", siteRef),
            where("created_date", ">=", firstDay),
            where("created_date", "<=", lastDay),
          );
        }
      } else {
        if (court != 0) {
          const courtRef = doc(collection(clubRef, "COURTS"), court);
          queryBooking = query(collection(clubRef, collectionStr),
            where("site_ref", "==", siteRef),
            where("court_ref", "==", courtRef),
            //where("match_start_date", ">=", firstDay),
            //where("match_start_date", "<=", lastDay),
          );
        } else {
          queryBooking = query(collection(clubRef, collectionStr),
            //where("is_from_app", "==", true),
            where("site_ref", "==", siteRef),
            //where("match_start_date", ">=", firstDay),
            //where("match_start_date", "<=", lastDay),
          );
        }
      }
    } else if (court != 0) {
      const courtRef = doc(collection(clubRef, "COURTS"), court);
      var { firstDay, lastDay } = {};
      if (day != 0 || month != 0 || year != 0) {
        if (day != 0) {
          setDisabledAllYear(true);
          setDisabledAllMonth(true);
          //const { firstDay, lastDay } = getFirstAndLastDayOfMonth(month - 1, year);
          firstDay = getFirstAndLastDayOfDay(day, month - 1, year).firstDay;
          lastDay = getFirstAndLastDayOfDay(day, month - 1, year).lastDay;
          //const { firstDay, lastDay } = getFirstAndLastDayOfDay(day, month - 1, year);
          //(day, month, year)
        } else if (month != 0) {
          setDisabledAllYear(true);
          //const { firstDay, lastDay } = getFirstAndLastDayOfMonth(month - 1, year);
          firstDay = getFirstAndLastDayOfMonth(month - 1, year).firstDay;
          lastDay = getFirstAndLastDayOfMonth(month - 1, year).lastDay;
        } else if (year != 0) {
          //const requestMonth = month!=0?month:0;
          if (YEARS.length > 2) {
            setDisabledAllYear(false);
          }
          setMonth(0);
          //const { firstDay, lastDay } = getFirstAndLastDayOfYear(year);
          firstDay = getFirstAndLastDayOfYear(year).firstDay;
          lastDay = getFirstAndLastDayOfYear(year).lastDay;
        }
        queryBooking = query(collection(clubRef, collectionStr),
          // where("is_from_app", "==", true),
          where("court_ref", "==", courtRef),
          //where("match_start_date", ">=", firstDay),
          //where("match_start_date", "<=", lastDay),
          where("created_date", ">=", firstDay),
          where("created_date", "<=", lastDay),
        );
      } else {
        if (YEARS.length > 2) {
          setDisabledAllYear(false);
        }
        queryBooking = query(collection(clubRef, collectionStr),
          where("court_ref", "==", courtRef),
          //where("is_from_app", "==", true),
          //where("match_start_date", ">=", firstDay),
          //where("match_start_date", "<=", lastDay),
        );
      }
    } else {
      if (day != 0 || month != 0 || year != 0) {
        var { firstDay, lastDay } = {};
        if (day != 0) {
          setDisabledAllYear(true);
          setDisabledAllMonth(true);
          //const { firstDay, lastDay } = getFirstAndLastDayOfMonth(month - 1, year);
          firstDay = getFirstAndLastDayOfDay(day, month - 1, year).firstDay;
          lastDay = getFirstAndLastDayOfDay(day, month - 1, year).lastDay;
        } else if (month != 0) {
          setDisabledAllYear(true);
          firstDay = getFirstAndLastDayOfMonth(month - 1, year).firstDay;
          lastDay = getFirstAndLastDayOfMonth(month - 1, year).lastDay;
        } else if (year != 0) {
          //const requestMonth = month!=0?month:0;
          if (YEARS.length > 2) {
            setDisabledAllYear(false);
          }
          setMonth(0);
          //const { firstDay, lastDay } = getFirstAndLastDayOfYear(year);
          firstDay = getFirstAndLastDayOfYear(year).firstDay;
          lastDay = getFirstAndLastDayOfYear(year).lastDay;
        }
        queryBooking = query(collection(clubRef, collectionStr),
          //where("is_from_app", "==", true),
          where("created_date", ">=", firstDay),
          where("created_date", "<=", lastDay),
          //where("match_start_date", ">=", firstDay),
          //where("match_start_date", "<=", lastDay),
        );
      } else {
        if (YEARS.length > 2) {
          setDisabledAllYear(false);
        }
        queryBooking = query(collection(clubRef, collectionStr),
          //where("is_from_app", "==", true),
          //where("match_start_date", ">=", firstDay),
          //where("match_start_date", "<=", lastDay),
        );
      }
    }
    return queryBooking;
  }
  function getQueryBookingStats(clubRef, site, court, day, month, year, pending = false) {
    const collectionStr = pending ? "COURT_PENDING_BOOKINGS" : "COURT_BOOKINGS";
    let queryBookingStats;
    if (site != 0) {
      const siteRef = doc(collection(clubRef, "SITES"), site);
      if (day != 0 || month != 0 || year != 0) {
        var { firstDay, lastDay } = {};
        if (day != 0) {
          firstDay = getFirstAndLastDayOfDay(day, month - 1, year).firstDay;
          lastDay = getFirstAndLastDayOfDay(day, month - 1, year).lastDay;
          setDisabledAllYear(true);
          setDisabledAllMonth(true);
        } else if (month != 0) {
          setDisabledAllYear(true);
          //const { firstDay, lastDay } = getFirstAndLastDayOfMonth(month - 1, year);
          firstDay = getFirstAndLastDayOfMonth(month - 1, year).firstDay;
          lastDay = getFirstAndLastDayOfMonth(month - 1, year).lastDay;
        } else if (year != 0) {
          //const requestMonth = month!=0?month:0;
          if (YEARS.length > 2) {
            setDisabledAllYear(false);
          }
          setMonth(0);
          //const { firstDay, lastDay } = getFirstAndLastDayOfYear(year);
          firstDay = getFirstAndLastDayOfYear(year).firstDay;
          lastDay = getFirstAndLastDayOfYear(year).lastDay;
        }
        if (court != 0) {
          const courtRef = doc(collection(clubRef, "COURTS"), court);
          queryBookingStats = query(collection(clubRef, collectionStr),
            where("site_ref", "==", siteRef),
            where("court_ref", "==", courtRef),
            where("match_start_date", ">=", firstDay),
            where("match_start_date", "<=", lastDay),
          );
        } else {
          queryBookingStats = query(collection(clubRef, collectionStr),
            where("site_ref", "==", siteRef),
            //where("court_ref", "==", courtRef),
            where("match_start_date", ">=", firstDay),
            where("match_start_date", "<=", lastDay),
          );
        }
      } else {
        if (court != 0) {
          const courtRef = doc(collection(clubRef, "COURTS"), court);
          queryBookingStats = query(collection(clubRef, collectionStr),
            where("site_ref", "==", siteRef),
            where("court_ref", "==", courtRef),
            //where("payment_date", ">=", firstDay),
            //where("payment_date", "<=", lastDay),
          );
        } else {
          queryBookingStats = query(collection(clubRef, collectionStr),
            where("site_ref", "==", siteRef),
            //where("court_ref", "==", courtRef),
            //where("payment_date", ">=", firstDay),
            //where("payment_date", "<=", lastDay),
          );
        }
      }
    } else if (court != 0) {
      const courtRef = doc(collection(clubRef, "COURTS"), court);
      var { firstDay, lastDay } = {};
      if (day != 0 || month != 0 || year != 0) {
        if (day != 0) {
          setDisabledAllYear(true);
          setDisabledAllMonth(true);
          //const { firstDay, lastDay } = getFirstAndLastDayOfMonth(month - 1, year);
          firstDay = getFirstAndLastDayOfDay(day, month - 1, year).firstDay;
          lastDay = getFirstAndLastDayOfDay(day, month - 1, year).lastDay;
          //const { firstDay, lastDay } = getFirstAndLastDayOfDay(day, month - 1, year);
          //(day, month, year)
        } else if (month != 0) {
          setDisabledAllYear(true);
          //const { firstDay, lastDay } = getFirstAndLastDayOfMonth(month - 1, year);
          firstDay = getFirstAndLastDayOfMonth(month - 1, year).firstDay;
          lastDay = getFirstAndLastDayOfMonth(month - 1, year).lastDay;
        } else if (year != 0) {
          //const requestMonth = month!=0?month:0;
          if (YEARS.length > 2) {
            setDisabledAllYear(false);
          }
          setMonth(0);
          //const { firstDay, lastDay } = getFirstAndLastDayOfYear(year);
          firstDay = getFirstAndLastDayOfYear(year).firstDay;
          lastDay = getFirstAndLastDayOfYear(year).lastDay;
        }
        queryBookingStats = query(collection(clubRef, collectionStr),
          //where("site_ref", "==", siteRef),
          where("court_ref", "==", courtRef),
          where("match_start_date", ">=", firstDay),
          where("match_start_date", "<=", lastDay),
        );
      } else {
        if (YEARS.length > 2) {
          setDisabledAllYear(false);
        }
        queryBookingStats = query(collection(clubRef, collectionStr),
          //where("site_ref", "==", siteRef),
          where("court_ref", "==", courtRef),
          //where("match_start_date", ">=", firstDay),
          //where("match_start_date", "<=", lastDay),
        );
      }
    } else {
      if (day != 0 || month != 0 || year != 0) {
        var { firstDay, lastDay } = {};
        if (day != 0) {
          setDisabledAllYear(true);
          setDisabledAllMonth(true);
          //const { firstDay, lastDay } = getFirstAndLastDayOfMonth(month - 1, year);
          firstDay = getFirstAndLastDayOfDay(day, month - 1, year).firstDay;
          lastDay = getFirstAndLastDayOfDay(day, month - 1, year).lastDay;
        } else if (month != 0) {
          setDisabledAllYear(true);
          firstDay = getFirstAndLastDayOfMonth(month - 1, year).firstDay;
          lastDay = getFirstAndLastDayOfMonth(month - 1, year).lastDay;
        } else if (year != 0) {
          //const requestMonth = month!=0?month:0;
          if (YEARS.length > 2) {
            setDisabledAllYear(false);
          }
          setMonth(0);
          //const { firstDay, lastDay } = getFirstAndLastDayOfYear(year);
          firstDay = getFirstAndLastDayOfYear(year).firstDay;
          lastDay = getFirstAndLastDayOfYear(year).lastDay;
        }
        queryBookingStats = query(collection(clubRef, collectionStr),
          //where("site_ref", "==", siteRef),
          //where("court_ref", "==", courtRef),
          where("match_start_date", ">=", firstDay),
          where("match_start_date", "<=", lastDay),
        );
      } else {
        if (YEARS.length > 2) {
          setDisabledAllYear(false);
        }
        queryBookingStats = query(collection(clubRef, collectionStr),
          //where("site_ref", "==", siteRef),
          //where("court_ref", "==", courtRef),
          //where("match_start_date", ">=", firstDay),
          //where("match_start_date", "<=", lastDay),
        );
      }
    }
    return queryBookingStats;
  }
  function getQueryTransaction(clubRef, site, court, day, month, year, pending = false) {
    const collectionStr = pending ? "COURT_PENDING_TRANSACTIONS" : "COURT_TRANSACTIONS";
    let queryTransaction;
    if (site != 0) {
      const siteRef = doc(collection(clubRef, "SITES"), site);
      if (day != 0 || month != 0 || year != 0) {
        var { firstDay, lastDay } = {};
        if (day != 0) {
          firstDay = getFirstAndLastDayOfDay(day, month - 1, year).firstDay;
          lastDay = getFirstAndLastDayOfDay(day, month - 1, year).lastDay;
          setDisabledAllYear(true);
          setDisabledAllMonth(true);
        } else if (month != 0) {
          setDisabledAllYear(true);
          //const { firstDay, lastDay } = getFirstAndLastDayOfMonth(month - 1, year);
          firstDay = getFirstAndLastDayOfMonth(month - 1, year).firstDay;
          lastDay = getFirstAndLastDayOfMonth(month - 1, year).lastDay;
        } else if (year != 0) {
          //const requestMonth = month!=0?month:0;
          if (YEARS.length > 2) {
            setDisabledAllYear(false);
          }
          setMonth(0);
          //const { firstDay, lastDay } = getFirstAndLastDayOfYear(year);
          firstDay = getFirstAndLastDayOfYear(year).firstDay;
          lastDay = getFirstAndLastDayOfYear(year).lastDay;
        }
        if (court != 0) {
          const courtRef = doc(collection(clubRef, "COURTS"), court);
          queryTransaction = query(collection(clubRef, "COURT_TRANSACTIONS"),
            where("site_ref", "==", siteRef),
            where("court_ref", "==", courtRef),
            where("payment_date", ">=", firstDay),
            where("payment_date", "<=", lastDay),
          );
        } else {
          queryTransaction = query(collection(clubRef, "COURT_TRANSACTIONS"),
            //where("is_from_app", "==", true),
            where("site_ref", "==", siteRef),
            where("payment_date", ">=", firstDay),
            where("payment_date", "<=", lastDay),
          );
        }
      } else {
        if (court != 0) {
          const courtRef = doc(collection(clubRef, "COURTS"), court);
          queryTransaction = query(collection(clubRef, "COURT_TRANSACTIONS"),
            where("site_ref", "==", siteRef),
            where("court_ref", "==", courtRef),
            //where("payment_date", ">=", firstDay),
            //where("payment_date", "<=", lastDay),
          );
        } else {
          queryTransaction = query(collection(clubRef, "COURT_TRANSACTIONS"),
            //where("is_from_app", "==", true),
            where("site_ref", "==", siteRef),
            //where("payment_date", ">=", firstDay),
            //where("payment_date", "<=", lastDay),
          );
        }
      }
    } else if (court != 0) {
      const courtRef = doc(collection(clubRef, "COURTS"), court);
      var { firstDay, lastDay } = {};
      if (day != 0 || month != 0 || year != 0) {
        if (day != 0) {
          setDisabledAllYear(true);
          setDisabledAllMonth(true);
          //const { firstDay, lastDay } = getFirstAndLastDayOfMonth(month - 1, year);
          firstDay = getFirstAndLastDayOfDay(day, month - 1, year).firstDay;
          lastDay = getFirstAndLastDayOfDay(day, month - 1, year).lastDay;
          //const { firstDay, lastDay } = getFirstAndLastDayOfDay(day, month - 1, year);
          //(day, month, year)
        } else if (month != 0) {
          setDisabledAllYear(true);
          //const { firstDay, lastDay } = getFirstAndLastDayOfMonth(month - 1, year);
          firstDay = getFirstAndLastDayOfMonth(month - 1, year).firstDay;
          lastDay = getFirstAndLastDayOfMonth(month - 1, year).lastDay;
        } else if (year != 0) {
          //const requestMonth = month!=0?month:0;
          if (YEARS.length > 2) {
            setDisabledAllYear(false);
          }
          setMonth(0);
          //const { firstDay, lastDay } = getFirstAndLastDayOfYear(year);
          firstDay = getFirstAndLastDayOfYear(year).firstDay;
          lastDay = getFirstAndLastDayOfYear(year).lastDay;
        }
        queryTransaction = query(collection(clubRef, "COURT_TRANSACTIONS"),
          //where("is_from_app", "==", true),
          where("court_ref", "==", courtRef),
          //where("payment_date", ">=", firstDay),
          //where("payment_date", "<=", lastDay),
          where("created_date", ">=", firstDay),
          where("created_date", "<=", lastDay),
        );
      } else {
        if (YEARS.length > 2) {
          setDisabledAllYear(false);
        }
        queryTransaction = query(collection(clubRef, "COURT_TRANSACTIONS"),
          where("court_ref", "==", courtRef),
          //where("is_from_app", "==", true),
          //where("payment_date", ">=", firstDay),
          //where("payment_date", "<=", lastDay),
        );
      }
    } else {
      if (day != 0 || month != 0 || year != 0) {
        var { firstDay, lastDay } = {};
        if (day != 0) {
          setDisabledAllYear(true);
          setDisabledAllMonth(true);
          //const { firstDay, lastDay } = getFirstAndLastDayOfMonth(month - 1, year);
          firstDay = getFirstAndLastDayOfDay(day, month - 1, year).firstDay;
          lastDay = getFirstAndLastDayOfDay(day, month - 1, year).lastDay;
        } else if (month != 0) {
          setDisabledAllYear(true);
          firstDay = getFirstAndLastDayOfMonth(month - 1, year).firstDay;
          lastDay = getFirstAndLastDayOfMonth(month - 1, year).lastDay;
        } else if (year != 0) {
          //const requestMonth = month!=0?month:0;
          if (YEARS.length > 2) {
            setDisabledAllYear(false);
          }
          setMonth(0);
          //const { firstDay, lastDay } = getFirstAndLastDayOfYear(year);
          firstDay = getFirstAndLastDayOfYear(year).firstDay;
          lastDay = getFirstAndLastDayOfYear(year).lastDay;
        }
        queryTransaction = query(collection(clubRef, "COURT_TRANSACTIONS"),
          //where("is_from_app", "==", true),
          where("payment_date", ">=", firstDay),
          where("payment_date", "<=", lastDay),
        );
      } else {
        if (YEARS.length > 2) {
          setDisabledAllYear(false);
        }
        queryTransaction = query(collection(clubRef, "COURT_TRANSACTIONS"),
          //where("is_from_app", "==", true),
          //where("payment_date", ">=", firstDay),
          //where("payment_date", "<=", lastDay),
        );
      }
    }
    return queryTransaction;
  }
  async function getBookings(club, site = 0, court = 0, day = 0, month = 0, year = 2024, pending = false) {
    const clubRef = doc(firestore, "CLUBS", club.uid);
    setIsLoading(true);
    let indexLabelsLineChart = -1;
    if (day != 0) {
      setLabelsLineChart(Array.from({ length: 24 }, () => { indexLabelsLineChart++; return `${parseDoubleToHourChartInterval(indexLabelsLineChart)} - ${parseDoubleToHourChartInterval(indexLabelsLineChart + 1)}`; }))
    } else if (month != 0) {
      const daysInMonth = getDaysInMonth(month, year);
      setLabelsLineChart(Array.from({ length: daysInMonth.length }, () => { indexLabelsLineChart++; return daysInMonth[indexLabelsLineChart]; }));
    } else {
      setLabelsLineChart(Array.from({ length: 12 }, () => { indexLabelsLineChart++; return getArrayMonthStr()[indexLabelsLineChart]; }));
    }

    const queryBooking = getQueryBooking(clubRef, site, court, day, month, year, pending);
    const queryBookingStats = getQueryBookingStats(clubRef, site, court, day, month, year, pending);
    const queryTransaction = getQueryTransaction(clubRef, site, court, day, month, year, pending);
    //setQueryBooking(queryBooking);
    //setQueryBookingStats(queryBookingStats);
    //setQueryTransaction(queryTransaction);
    const querySnapshotBooking = await getDocs(queryBooking);
    const querySnapshotBookingStats = await getDocs(queryBookingStats);
    const querySnapshotTransaction = await getDocs(queryTransaction);
    /*
    const bookings = querySnapshotBooking.docs.map((bookingDoc, index) => {
      const booking = bookingDoc.data();
      return booking;
    });
    */

    const [countBoookingsClub, countBoookingsPlayPad, countBookingsTotal, countHoursClub, countHoursPlayPad,
      revenuesClub, revenuesPlayPad, revenuesTotal, arrayRevenuesTotal, revenuesTotalSite, revenuesTotalCourt,
      rateBookingPlayPad, rateBookingClub, rateHourPlayPad, rateHourClub, countUsersClub, countUsersPlayPad,
      countMatchsClub, countMatchsPlayPad, countMatchsTotal, /*bookingTotal*/] = await Promise.all([
        getCountBookingsClub(querySnapshotBooking),
        getCountBookingsPlayPad(querySnapshotBooking),
        getCountBookingsTotal(querySnapshotBooking),
        getCountHoursClub(querySnapshotBookingStats),
        getCountHoursPlayPad(querySnapshotBookingStats),

        getRevenuesClub(clubRef, querySnapshotBooking),
        //getRevenuesClub(clubRef, querySnapshotTransaction),
        getRevenuesPlayPad(clubRef, querySnapshotBooking),
        //getRevenuesPlayPad(clubRef, querySnapshotTransaction),
        getRevenuesTotal(querySnapshotBooking),
        //getRevenuesTotal(querySnapshotTransaction),
        getArrayRevenuesTotal(day, month, year, querySnapshotBooking),
        getRevenuesTotalSite(clubRef, site, querySnapshotTransaction),
        getRevenuesTotalCourt(clubRef, site, court, querySnapshotTransaction),
        getRateBookingsPlayPad(querySnapshotBookingStats),
        getRateBookingsClub(querySnapshotBookingStats),
        getRateHoursPlayPad(querySnapshotBookingStats),
        getRateHoursClub(querySnapshotBookingStats),

        getCountUsersClub(querySnapshotBookingStats),
        getCountUsersPlayPad(querySnapshotBookingStats),

        getCountBookingsClub(querySnapshotBookingStats),
        getCountBookingsPlayPad(querySnapshotBookingStats),
        getCountBookingsTotal(querySnapshotBookingStats),
      ]);
    const chartBarLabels = [];
    const chartBarValues = [];
    if (site == 0) {
      for (let i = 0; i < SITES.length; i++) {
        const siteName = SITES[i].name;
        const siteUid = SITES[i].value;
        if (siteUid != 0) {
          const count = await getCountBookingsClubBySite(querySnapshotBookingStats, siteUid);
          chartBarLabels.push(siteName);
          chartBarValues.push(count);
        }
      }
    } else {
      for (let i = 0; i < COURTS.length; i++) {
        const courtName = COURTS[i].name;
        const courtUid = COURTS[i].value;
        if (courtUid != 0) {
          const count = await getCountBookingsClubByCourt(querySnapshotBookingStats, courtUid);
          chartBarLabels.push(courtName);
          chartBarValues.push(count);
        }
      }
    }
    setLabelsBarChart(chartBarLabels);
    setValuesBarChart(chartBarValues);
    setCountBookingsTotal(countBookingsTotal);
    setCountBookingsPlayPad(countBoookingsPlayPad);
    setCountBookingsClub(countBoookingsClub);

    setRevenuesClubs(revenuesClub);
    setRevenuesPlayPad(revenuesPlayPad);
    setRevenuesTotal(revenuesTotal);
    setRevenuesTotalSite(revenuesTotalSite);
    setRevenuesTotalCourt(revenuesTotalCourt);

    setRateBookingPlayPad(rateBookingPlayPad);
    setRateBookingClub(rateBookingClub);
    setRateHoursPlayPad(rateHourPlayPad);
    setRateHourClub(rateHourClub);

    setCountMatchsClub(countMatchsClub);
    setCountMatchsPlayPad(countMatchsPlayPad);
    setCountMatchsTotal(countMatchsTotal);

    setCountHoursClub(countHoursClub);
    setCountHoursPlayPad(countHoursPlayPad);

    setCountUsersClub(countUsersClub);
    setCountUsersPlayPad(countUsersPlayPad);

    setValuesLineChart(arrayRevenuesTotal);


    setIsLoading(false);
    return queryBooking;
  }

  useEffect(() => {
    initDays(month, year);
    setDay(new Date().getDate());
    if (club) {
      setClubName(club.name);
      setClubLogo(club.logo);
      setClubBackColor(club.back_color_logo);
      initSites(club);
      initCourts(club, selectedSite);
      var currentYear = year;
      if (month != 0) {
        if (currentYear == 0) {
          currentYear = new Date().getFullYear();
        }
        //setMonth(event.target.value);
        setYear(currentYear);
      }
      async function start() {
        const queryPendingBooking = await getBookings(club, 0, 0, 0, 0, 0, true);
        const queryBooking = await getBookings(club, selectedSite, selectedCourt, day, month, year, false);
        if (queryBooking && queryPendingBooking) {
          const querySnapshotPendingBooking = await getDocs(queryPendingBooking);
          const querySnapshotBooking = await getDocs(queryBooking);
          const pendingBookingTotal = await getBookingListDashboard(querySnapshotPendingBooking, true, true);
          const bookingTotal = await getBookingListDashboard(querySnapshotBooking, true, false);
          const allBookings = bookingTotal.concat(pendingBookingTotal);
          //allBookings = allBookings.sort((a, b) => b.created_date.localeCompare(a.created_date));
          setBookingList(sortBookingList(allBookings, selectedSorting, selectedDesc));
          const result = await getTableBooking(allBookings);
          setData(result);
        }
      }
      start();
    }
  }, [club]);
  const handleChangeDay = (event) => {
    var dayParam = event.target.value;
    if (dayParam == 0) {
      setDisabledAllMonth(false);
    }
    setDay(dayParam);
    async function start() {
      const queryPendingBooking = await getBookings(club, 0, 0, 0, 0, 0, true);
      const queryBooking = await getBookings(club, selectedSite, selectedCourt, dayParam, month, year, false);
      if (queryBooking && queryPendingBooking) {
        const querySnapshotPendingBooking = await getDocs(queryPendingBooking);
        const querySnapshotBooking = await getDocs(queryBooking);
        const pendingBookingTotal = await getBookingListDashboard(querySnapshotPendingBooking, true, true);
        const bookingTotal = await getBookingListDashboard(querySnapshotBooking, true, false);
        setBookingList(bookingTotal.concat(pendingBookingTotal));
        const result = await getTableBooking(bookingTotal.concat(pendingBookingTotal));
        setData(result);
      }
    }
    start();
  };
  const handleChangeMonth = (event) => {
    var monthParam = event.target.value;
    var currentYear = year;
    if (currentYear == 0) {
      currentYear = new Date().getFullYear();
    }
    if (monthParam != 0) {
      initDays(monthParam, currentYear);
    }
    setMonth(monthParam);
    setYear(currentYear);
    //getBookings(club, selectedSite, selectedCourt, day, event.target.value, currentYear);
    async function start() {
      const queryPendingBooking = await getBookings(club, 0, 0, 0, 0, 0, true);
      const queryBooking = await getBookings(club, selectedSite, selectedCourt, day, monthParam, year, false);
      if (queryBooking && queryPendingBooking) {
        const querySnapshotPendingBooking = await getDocs(queryPendingBooking);
        const querySnapshotBooking = await getDocs(queryBooking);
        const bookingPendingTotal = await getBookingListDashboard(querySnapshotPendingBooking, true, true);
        const bookingTotal = await getBookingListDashboard(querySnapshotBooking, true, false);
        setBookingList(bookingTotal.concat(bookingPendingTotal));
        //const bookingsTotal = await getBookingListTotal(querySnapshotBooking);
        const result = await getTableBooking(bookingTotal.concat(bookingPendingTotal));
        setData(result);
      }
    }
    start();
  };
  const handleChangeYear = (event) => {
    var yearParam = event.target.value;
    setYear(event.target.value);
    //getBookings(club, selectedSite, selectedCourt, day, month, event.target.value);
    async function start() {
      const queryPendingBooking = await getBookings(club, 0, 0, 0, 0, 0, true);
      const queryBooking = await getBookings(club, selectedSite, selectedCourt, day, month, yearParam, false);
      if (queryBooking && queryPendingBooking) {
        const querySnapshotPendingBooking = await getDocs(queryPendingBooking);
        const querySnapshotBooking = await getDocs(queryBooking);
        const bookingPendingTotal = await getBookingListDashboard(querySnapshotPendingBooking, true, true);
        const bookingTotal = await getBookingListDashboard(querySnapshotBooking, true, false);
        setBookingList(bookingTotal.concat(bookingPendingTotal));
        const result = await getTableBooking(bookingTotal.concat(bookingPendingTotal));
        setData(result);
      }
    }
    start();
  };
  const handleChangeSite = (event) => {
    var newSite = event.target.value;
    var newCourt = selectedCourt;
    setSelectedSite(newSite);
    setTitleBarChart("Par Site");
    if (newSite != 0) {
      newCourt = 0;
      setSelectedCourt(0);
      setTitleBarChart("Par Terrain");
    }
    initCourts(club, newSite);
    //getBookings(club, newSite, selectedCourt, day, month, year);
    async function start() {
      const queryPendingBooking = await getBookings(club, 0, 0, 0, 0, 0, true);
      const queryBooking = await getBookings(club, newSite, newCourt, day, month, year, false);
      if (queryBooking && queryPendingBooking) {
        const querySnapshotPendingBooking = await getDocs(queryPendingBooking);
        const querySnapshotBooking = await getDocs(queryBooking);
        const bookingPendingTotal = await getBookingListDashboard(querySnapshotPendingBooking, true, true);
        const bookingTotal = await getBookingListDashboard(querySnapshotBooking, true, false);
        setBookingList(bookingTotal.concat(bookingPendingTotal));
        const result = await getTableBooking(bookingTotal.concat(bookingPendingTotal));
        setData(result);
      }
    }
    start();
  };
  const handleChangeCourt = (event) => {
    var newCourt = event.target.value;
    setSelectedCourt(newCourt);
    //getBookings(club, selectedSite, event.target.value, day, month, year);
    async function start() {
      const queryPendingBooking = await getBookings(club, 0, 0, 0, 0, 0, true);
      const queryBooking = await getBookings(club, selectedSite, newCourt, day, month, year, false);
      if (queryBooking) {
        const querySnapshotPendingBooking = await getDocs(queryPendingBooking);
        const querySnapshotBooking = await getDocs(queryBooking);
        const bookingPendingTotal = await getBookingListDashboard(querySnapshotPendingBooking, true, true);
        const bookingTotal = await getBookingListDashboard(querySnapshotBooking, true, false);
        setBookingList(bookingTotal.concat(bookingPendingTotal));
        const result = await getTableBooking(bookingTotal.concat(bookingPendingTotal));
        setData(result);
      }
    }
    start();
  };

  function sortBookingList(bookingList, order_by, desc = false) {
    const list = [...bookingList];
    if (order_by == SORT_UID) {
      return list.sort((a, b) => {
        var first = a; var second = b;
        if (desc) {
          first = b;
          second = a;
        }
        return first.uid.localeCompare(second.uid);
      });
    } else if (order_by == SORT_CREATED_DATE) {
      return list.sort((a, b) => {
        var first = a; var second = b;
        if (desc) {
          first = b;
          second = a;
        }
        return first.created_date.localeCompare(second.created_date);
      });
    } else if (order_by == SORT_CLIENT) {
      return list.sort((a, b) => {
        var first = a; var second = b;
        if (desc) {
          first = b;
          second = a;
        }
        return first.name.localeCompare(second.name);
      });
    } else if (order_by == SORT_SITE) {
      return list.sort((a, b) => {
        var first = a; var second = b;
        if (desc) {
          first = b;
          second = a;
        }
        return first.site_name.localeCompare(second.site_name);
      });
    } else if (order_by == SORT_COURT) {
      return list.sort((a, b) => {
        var first = a; var second = b;
        if (desc) {
          first = b;
          second = a;
        }
        return first.court_name.localeCompare(second.court_name);
      });
    } else if (order_by == SORT_DURATION) {
      return list.sort((a, b) => {
        var first = a; var second = b;
        if (desc) {
          first = b;
          second = a;
        }
        return first.duration.localeCompare(second.duration);
      });
    } else if (order_by == SORT_PRICE) {
      return list.sort((a, b) => {
        var first = a; var second = b;
        if (desc) {
          first = b;
          second = a;
        }
        return first.amount_paid - second.amount_paid;
      });
    }
    else if (order_by == SORT_STATUS) {
      return list.sort((a, b) => {
        var first = a; var second = b;
        if (desc) {
          first = b;
          second = a;
        }
        return first.amount_paid - second.amount_paid;
      });
    }
    return list.sort((a, b) => {
      return b.status.localeCompare(a.status);
    });
  }

  const ThemeSwitcher = () => {
    return (
      <SwitchTheme />
    );
  };

  return (<><Head>
    <title>{`${TITLE_WEB_APP} | ${TITLE_PAGE_DASHBOARD}`}</title>
  </Head>
    <LayoutLogin
      title={TITLE_PAGE_DASHBOARD}

      component={<DashboardPage
        titlePage={TITLE_PAGE_DASHBOARD}
        clubName={clubName}
        clubLogo={clubLogo}
        isLoading={isLoading}
        isNotLoading={!isLoading}
        componentProgress={<CircularProgress color="primary" size={'20px'} />}
        isLoadingUpdateBooking={isLoading}
        isNotLoadingUpdateBooking={!isLoading}
        componentProgressUpdateBooking={<CircularProgress color="primary" size={'50px'} />}
        bookingCreatedDate={selectedBooking ? selectedBooking.created_date : ""}
        bookingUid={selectedBooking ? selectedBooking.uid : ""}
        //transactionUid={selectedBooking ? selectedBooking.transaction_uid : ""}
        //hasTransaction={selectedBooking && selectedBooking.transaction_uid ? true : false}
        accessCode={selectedBooking ? selectedBooking.access_code : ""}
        clientName={selectedBooking ? selectedBooking.name : ""}
        clientPhone={selectedBooking ? selectedBooking.phone : ""}
        clientEmail={selectedBooking ? selectedBooking.email : ""}
        bookingType={selectedBooking ? getTypeBookingStr(selectedBooking.type) : ""}
        bookingSite={selectedBooking ? selectedBooking.site_name : ""}
        bookingCourt={selectedBooking ? selectedBooking.court_name : ""}
        bookingMatchDate={selectedBooking ? selectedBooking.match_date : ""}
        bookingDuration={selectedBooking ? selectedBooking.duration : ""}
        bookingDescription={selectedBooking ? selectedBooking.description : ""}

        hasTransaction={selectedTransaction}
        transactionUid={selectedTransaction ? selectedTransaction.uid : ""}
        paymentProvider={selectedTransaction ? selectedTransaction.payment_provider : ""}
        refNo={selectedTransaction ? selectedTransaction.ref_no : ""}
        paymentDate={selectedTransaction ? selectedTransaction.payment_date : ""}

        //paymentMethod={selectedTransaction ? selectedTransaction.payment_method : ""}
        walletUsedAmount={formatCurrency(selectedTransaction ? selectedTransaction.wallet_used_amount : 0, 2)}
        cardUsedAmount={formatCurrency(selectedTransaction ? selectedTransaction.total_amount - selectedTransaction.wallet_used_amount : 0, 2)}
        totalAmount={formatCurrency(selectedTransaction ? selectedTransaction.total_amount : 0, 2)}

        componentSwitch={<Stack sx={{ width: '100%', height: '100%' }}><ThemeSwitcher /></Stack>}
        //clientPhone={""}
        componentLogoClub={<Stack sx={{ height: '100%', p: '2px', background: clubBackColor }} alignItems={'center'} justifyContent={'center'}>
          <Image src={clubLogo} width={50} height={50} style={{ width: '2rem', height: 'auto' }} loading='lazy' />
        </Stack>}
        showDialogEditBooking={false}
        editable={false}
        notEditable={true}
        isWebAppBooking={false}
        removable={false}
        styleDialogEditBooking={{
          style: {
            display: showDialogBooking ? 'flex' : 'none'
          }
        }}
        closeDialogBooking={{
          onClick: () => {
            const sorting = selectedSorting;
            const desc = selectedDesc;
            setSeletedBooking(null);
            setSelectedTransaction(null);
            setShowDialogBooking(false);
          },  // Ajout de la fonction onClick ici
          //className: "btn-primary",  // Ajout d'une classe CSS
          //type: "button"
        }}
        titleBookingsClub={`Réservations ${clubName}`}
        titleRevenuesClub={`Revenues ${clubName}`}
        nBookingslub={formatCountBookings(countBookingsClub)}
        nBookingsPlayPad={formatCountBookings(countBookingsPlayPad)}
        nBookingsTotal={formatCountBookings(countBookingsTotal)}
        //revenuesTotal={"72'000 CHF"}
        revenuesClub={formatCurrency(revenuesTotal - revenuesPlayPad)}
        revenuesPlayPad={formatCurrency(revenuesPlayPad)}
        revenuesTotal={formatCurrency(revenuesTotal)}
        revenuesTotalSite={formatCurrency(revenuesTotalSite)}
        revenuesTotalCourt={formatCurrency(revenuesTotalCourt)}


        countBookingsPlayPadStats={`${formatNumber(countMatchsPlayPad)} Matchs`}
        countBookingsClubStats={`${formatNumber(countMatchsClub)} Matchs`}
        countBookingsTotalStats={`${formatNumber(countMatchsPlayPad + countMatchsClub)} Matchs`}
        visibleStat={true}
        //visibleErrorStat={selectedCourt!=0}

        countHoursPlayPad={`${formatNumber(countHoursPlayPad, 1)}h`}
        countHoursClub={`${formatNumber(countHoursClub, 1)}h`}
        countHoursTotal={`${formatNumber(countHoursPlayPad + countHoursClub, 1)}h`}

        countUsersClub={`${formatNumber(countUsersClub)} Joueurs`}
        countUsersPlayPad={`${formatNumber(countUsersPlayPad)} Joueurs`}
        countUsersTotal={`${formatNumber(countUsersClub + countUsersPlayPad)} Joueurs`}


        periodStats={`${day != 0 || month != 0 || year != 0 ? `${day !== 0 ? day : ''} ${month !== 0 ? getArrayMonthStr()[month - 1] : ''} ${year !== 0 ? year : ''}` : "Tous"}`}

        nAllBookings={bookingList ? bookingList.length : 0}

        //rateBookingPlayPad={"43.28%"}
        rateBookingPlayPad={formatPercentage(rateBookingPlayPad)}
        rateBookingClub={formatPercentage(rateBookingClub)}
        componentChartRateBooking={<PieChart clubName={clubName} playpadRate={rateBookingPlayPad} clubRate={rateBookingClub} />}
        componentChartRateHour={<PieChart clubName={clubName} playpadRate={rateHoursPlayPad} clubRate={rateHoursClub} />}
        //componentChartRateHour={<PieChart playpadRate={10} clubRate={12} />}
        componentChartRateTotal={<PieChart clubName={clubName} playpadRate={(rateBookingPlayPad + rateHoursPlayPad) / 2} clubRate={(rateBookingClub + rateHoursClub) / 2} />}
        componentChartRevenues={<LineChart title={`${day != 0 || month != 0 || year != 0 ? `${day !== 0 ? day : ''} ${month !== 0 ? getArrayMonthStr()[month - 1] : ''} ${year !== 0 ? year : ''}` : "Tous"}`} revenuesTotal={revenuesTotal} playpadRate={rateHoursPlayPad} clubRate={rateHoursClub} labels={labelsLineChart} values={valuesLineChart} />}

        componentChartCountBySite={<BarChartCustom
          title={titleBarChart}
          labels={labelsBarChart}
          values={valuesBarChart}
          backgrounds={backgroundBarChart}
          borders={bordersBarChart}
          playpadRate={rateBookingPlayPad} clubRate={rateBookingClub} />}
        //componentChartCountByCourt={<BarChartCustom playpadRate={rateBookingPlayPad} clubRate={rateBookingClub} />}

        componentDays={<Select
          className='form_input is-select-input is-dashboard'
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={day}
          label="Day"
          onChange={handleChangeDay}
          sx={{ height: 40, color: text.primary }}
        >
          {
            DAYS.map((obj, index) => {
              return (
                <MenuItem key={`${obj.text}${index}`} value={obj.value} sx={{ color: text.primary }}><Typography color='text.primary'>{obj.text}</Typography></MenuItem>
              )
            })
          }
        </Select>}
        componentMonth={<Select
          className='form_input is-select-input is-dashboard'
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={month}
          label="Month"
          onChange={handleChangeMonth}
          sx={{ height: 40 }}
        >
          {
            MONTHS.map((obj, index) => {
              return (
                <MenuItem disabled={disabledAllMonth && index == 0} key={`${obj.text}${index}`} value={obj.value}><Typography color='text.primary'>{obj.text}</Typography></MenuItem>
              )
            })
          }
        </Select>}
        componentYear={<Select
          className='form_input is-select-input is-dashboard'
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={year}
          label="Year"
          onChange={handleChangeYear}
          sx={{ height: 40 }}
        >
          {
            YEARS.map((obj, index) => {
              return (
                <MenuItem disabled={disabledAllYear && index == 0} key={`${obj.text}${index}`} value={obj.value}><Typography color='text.primary'>{obj.text}</Typography></MenuItem>
              )
            })
          }
        </Select>}
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
            SITES.sort((a, b) => a.value - b.value).map((obj, index) => {
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
            COURTS.sort((a, b) => a.value - b.value).map((obj, index) => {
              return (
                <MenuItem key={`${obj.name}${index}`} value={obj.value}><Typography color='text.primary'>{obj.name}</Typography></MenuItem>
              )
            })
          }
        </Select>}
        //linkDashboard={LINK_PAGE_DASHBOARD}
        //linkManage={LINK_PAGE_MANAGE}
        styleDashboard={{
          className: "sidebar4_link w--current",
        }}
        disconnectButtonProps={{
          onClick: () => { handleLogout() },  // Ajout de la fonction onClick ici
          //className: "btn-primary",  // Ajout d'une classe CSS
          //type: "button"
        }}
        actionUpdate={{
          onClick: () => {
            async function start() {
              const queryPendingBooking = await getBookings(club, 0, 0, 0, 0, 0, true);
              const queryBooking = await getBookings(club, selectedSite, selectedCourt, day, month, year, false);
              if (queryBooking && queryPendingBooking) {
                const querySnapshotPendingBooking = await getDocs(queryPendingBooking);
                const querySnapshotBooking = await getDocs(queryBooking);
                const pendingBookingTotal = await getBookingListDashboard(querySnapshotPendingBooking, true, true);
                const bookingTotal = await getBookingListDashboard(querySnapshotBooking, true, false);
                setBookingList(bookingTotal.concat(pendingBookingTotal));
                const result = await getTableBooking(bookingTotal.concat(pendingBookingTotal));
                setData(result);
              }
            }
            start();
          },  // Ajout de la fonction onClick ici
          //className: "btn-primary",  // Ajout d'une classe CSS
          //type: "button"
        }}

        componentListBookings={data.length > 0 ? <Table columns={columns} data={data} /> : <></>}


      />}




    /></>);
}
