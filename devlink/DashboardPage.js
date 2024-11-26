"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import { GlobalStyles } from "./GlobalStyles";
import { SidebarDevlink } from "./SidebarDevlink";
import { DevLinkNavBarSwitchTheme } from "./DevLinkNavBarSwitchTheme";
import { ButtonPrimary } from "./ButtonPrimary";
import { DialogUpdateBooking } from "./DialogUpdateBooking";

const _interactionsData = JSON.parse(
  '{"events":{"e-9":{"id":"e-9","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-304"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"1bf7d8b1-45bf-7ee7-4978-3821b784e19b","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"1bf7d8b1-45bf-7ee7-4978-3821b784e19b","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1684414757890},"e-7":{"id":"e-7","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-306"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"1bf7d8b1-45bf-7ee7-4978-3821b784e19d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"1bf7d8b1-45bf-7ee7-4978-3821b784e19d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1684414757890},"e-16":{"id":"e-16","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-17"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"65edcb06e424209e95092c7e|1fc86f64-e14b-b0d7-6c3f-bb9669afcfbf","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65edcb06e424209e95092c7e|1fc86f64-e14b-b0d7-6c3f-bb9669afcfbf","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1706887097380},"e-18":{"id":"e-18","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-19"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"65edcb06e424209e95092c7e|1fc86f64-e14b-b0d7-6c3f-bb9669afcfc1","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65edcb06e424209e95092c7e|1fc86f64-e14b-b0d7-6c3f-bb9669afcfc1","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1706887097380},"e-20":{"id":"e-20","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-21"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"65edcb06e424209e95092c82|1fc86f64-e14b-b0d7-6c3f-bb9669afcfbf","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65edcb06e424209e95092c82|1fc86f64-e14b-b0d7-6c3f-bb9669afcfbf","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1708104615453},"e-22":{"id":"e-22","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-23"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"65edcb06e424209e95092c82|1fc86f64-e14b-b0d7-6c3f-bb9669afcfc1","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65edcb06e424209e95092c82|1fc86f64-e14b-b0d7-6c3f-bb9669afcfc1","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1708104615453},"e-24":{"id":"e-24","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-25"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"65edcb06e424209e95092c83|1fc86f64-e14b-b0d7-6c3f-bb9669afcfbf","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65edcb06e424209e95092c83|1fc86f64-e14b-b0d7-6c3f-bb9669afcfbf","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1708104787165},"e-26":{"id":"e-26","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-27"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"65edcb06e424209e95092c83|1fc86f64-e14b-b0d7-6c3f-bb9669afcfc1","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65edcb06e424209e95092c83|1fc86f64-e14b-b0d7-6c3f-bb9669afcfc1","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1708104787165},"e-160":{"id":"e-160","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-161"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"6650fca0bdd809151a219ff1|1fc86f64-e14b-b0d7-6c3f-bb9669afcfbf","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6650fca0bdd809151a219ff1|1fc86f64-e14b-b0d7-6c3f-bb9669afcfbf","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1716583585383},"e-162":{"id":"e-162","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-163"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"6650fca0bdd809151a219ff1|1fc86f64-e14b-b0d7-6c3f-bb9669afcfc1","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6650fca0bdd809151a219ff1|1fc86f64-e14b-b0d7-6c3f-bb9669afcfc1","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1716583585383},"e-204":{"id":"e-204","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-36","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-205"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"65edcb06e424209e95092c80|4d7cab3d-9000-1d9f-aefe-022edc3ae44f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65edcb06e424209e95092c80|4d7cab3d-9000-1d9f-aefe-022edc3ae44f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1727470895089},"e-206":{"id":"e-206","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-36","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-207"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"65edcb06e424209e95092c80|4d7cab3d-9000-1d9f-aefe-022edc3ae451","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65edcb06e424209e95092c80|4d7cab3d-9000-1d9f-aefe-022edc3ae451","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1727470895089},"e-258":{"id":"e-258","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-305"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"3bf6ef48-906c-6954-3b84-47cb5cf21b00","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"3bf6ef48-906c-6954-3b84-47cb5cf21b00","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1727734053325},"e-260":{"id":"e-260","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-307"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"3bf6ef48-906c-6954-3b84-47cb5cf21b02","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"3bf6ef48-906c-6954-3b84-47cb5cf21b02","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1727734053325},"e-274":{"id":"e-274","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-275"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"cd5dc5ca-f5d4-aeec-6107-f3c88afbc67c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"cd5dc5ca-f5d4-aeec-6107-f3c88afbc67c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1727736126886},"e-276":{"id":"e-276","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-277"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"cd5dc5ca-f5d4-aeec-6107-f3c88afbc67e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"cd5dc5ca-f5d4-aeec-6107-f3c88afbc67e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1727736126886},"e-298":{"id":"e-298","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-305"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"0f103e9a-02fc-bbae-2ea7-466330996187","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"0f103e9a-02fc-bbae-2ea7-466330996187","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1727736965141},"e-300":{"id":"e-300","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-307"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"0f103e9a-02fc-bbae-2ea7-466330996189","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"0f103e9a-02fc-bbae-2ea7-466330996189","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1727736965141},"e-308":{"id":"e-308","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-309"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"56d276ce-6ef8-b699-75b4-3571b6bf318f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"56d276ce-6ef8-b699-75b4-3571b6bf318f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1727737404364},"e-310":{"id":"e-310","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-311"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"56d276ce-6ef8-b699-75b4-3571b6bf3191","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"56d276ce-6ef8-b699-75b4-3571b6bf3191","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1727737404364}},"actionLists":{"a-8":{"id":"a-8","title":"Topbar 3 Search [Close]","actionItemGroups":[{"actionItems":[{"id":"a-8-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuad","duration":200,"target":{"selector":".topbar3_search-tablet","selectorGuids":["46f22993-c095-a3c8-9aa4-d6a267c87fcd"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-8-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".topbar3_search-tablet","selectorGuids":["46f22993-c095-a3c8-9aa4-d6a267c87fcd"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1684414258357},"a-36":{"id":"a-36","title":"Topbar 3 Search [Close] 2","actionItemGroups":[{"actionItems":[{"id":"a-36-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuad","duration":200,"target":{"selector":".topbar3_search-tablet","selectorGuids":["46f22993-c095-a3c8-9aa4-d6a267c87fcd"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-36-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".topbar3_search-tablet","selectorGuids":["46f22993-c095-a3c8-9aa4-d6a267c87fcd"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1684414258357}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function DashboardPage({
  as: _Component = _Builtin.Block,
  titlePage = "Tableau de Bord",
  clubName = "PlayPad Test",
  clubLogo = "https://cdn.prod.website-files.com/64ad6274d8c64f92f123999e/65da7ead8c280d989d9bd5d3_ball-logo.png",
  disconnectButtonProps,
  styleDashboard = {},

  linkDashboard = {
    href: "/",
  },

  linkManage = {
    href: "/manage",
  },

  linkCalendar = {
    href: "/calendar",
  },

  linkBilling = {
    href: "/billing",
  },

  linkClub = {
    href: "/club",
  },

  linkSettings = {
    href: "/settings",
  },

  loader,
  componentMonth,
  componentYear,
  nBookingsPlayPad = "0",
  nBookingsTotal = "0",
  revenuesTotal = "0",
  rateBookingPlayPad = "0 %",
  componentProgress,
  isLoading = true,
  isNotLoading = true,
  nBookingslub = "0",
  revenuesClub = "0",
  revenuesPlayPad = "0",
  componentSite,
  componentCourts,
  revenuesTotalSite = "0",
  revenuesTotalCourt = "0",
  componentChartRateBooking,
  componentChartRateHour,
  componentChartRateTotal,
  componentDays,
  componentChartRevenues,
  componentCardStats,
  componentChartCountBySite,
  componentChartCountCourt,
  componentChartCountByCourt,
  actionUpdate = {},
  countHoursPlayPad = "266h",
  countHoursClub = "84h",
  countHoursTotal = "350h",
  countUsersPlayPad = "31",
  countUsersClub = "7",
  countBookingsPlayPadStats = "27",
  countBookingsClubStats = "14",
  countBookingsTotalStats = "41 Matchs",
  periodStats = "21 Novembre 2024",
  titleBookingsClub = "Réservations Club",
  titleRevenuesClub = "Revenus Club",
  visibleStat = true,
  visibleErrorStat = true,
  componentListBookings,
  nAllBookings = "0",
  countUsersTotal = "38 Joueurs",
  showDialogEditBooking = true,
  styleDialogEditBooking,
  editable = true,
  closeDialogBooking = {},
  bookingDescription = "--",
  bookingDuration = "--",
  bookingMatchDate = "--",
  bookingSite = "--",
  bookingCourt = "--",
  bookingType = "--",
  clientEmail = "--",
  clientPhone = "--",
  clientName = "--",
  notEditable = true,
  accessCode = "--",
  transactionUid = "--",
  bookingUid = "ROksz0ABcdeD52HG4Kcx",
  isWebAppBooking = true,
  bookingCreatedDate = "--",
  hasTransaction = true,
  componentSwitch,
  componentLogoClub,
}) {
  _interactions.useInteractions(_interactionsData);

  return (
    <_Component className="page-wrapper" tag="div">
      <GlobalStyles />
      <_Builtin.Block className="main-wrapper" tag="main">
        <_Builtin.Block className="page-wrapper" tag="div">
          <_Builtin.HtmlEmbed
            className="global-styles"
            value="%3Cstyle%3E%0A%0A%2F*%20Set%20color%20style%20to%20inherit%20*%2F%0A.inherit-color%20*%20%7B%0A%20%20%20%20color%3A%20inherit%3B%0A%7D%0A%0A%2F*%20Focus%20state%20style%20for%20keyboard%20navigation%20for%20the%20focusable%20elements%20*%2F%0A*%5Btabindex%5D%3Afocus-visible%2C%0A%20%20input%5Btype%3D%22file%22%5D%3Afocus-visible%20%7B%0A%20%20%20outline%3A%200.125rem%20solid%20%234d65ff%3B%0A%20%20%20outline-offset%3A%200.125rem%3B%0A%7D%0A%0A%2F*%20Get%20rid%20of%20top%20margin%20on%20first%20element%20in%20any%20rich%20text%20element%20*%2F%0A.w-richtext%20%3E%20%3Anot(div)%3Afirst-child%2C%20.w-richtext%20%3E%20div%3Afirst-child%20%3E%20%3Afirst-child%20%7B%0A%20%20margin-top%3A%200%20!important%3B%0A%7D%0A%0A%2F*%20Get%20rid%20of%20bottom%20margin%20on%20last%20element%20in%20any%20rich%20text%20element%20*%2F%0A.w-richtext%3E%3Alast-child%2C%20.w-richtext%20ol%20li%3Alast-child%2C%20.w-richtext%20ul%20li%3Alast-child%20%7B%0A%09margin-bottom%3A%200%20!important%3B%0A%7D%0A%0A%2F*%20Prevent%20all%20click%20and%20hover%20interaction%20with%20an%20element%20*%2F%0A.pointer-events-off%20%7B%0A%09pointer-events%3A%20none%3B%0A%7D%0A%0A%2F*%20Enables%20all%20click%20and%20hover%20interaction%20with%20an%20element%20*%2F%0A.pointer-events-on%20%7B%0A%20%20pointer-events%3A%20auto%3B%0A%7D%0A%0A%2F*%20Create%20a%20class%20of%20.div-square%20which%20maintains%20a%201%3A1%20dimension%20of%20a%20div%20*%2F%0A.div-square%3A%3Aafter%20%7B%0A%09content%3A%20%22%22%3B%0A%09display%3A%20block%3B%0A%09padding-bottom%3A%20100%25%3B%0A%7D%0A%0A%2F*%20Make%20sure%20containers%20never%20lose%20their%20center%20alignment%20*%2F%0A.container-medium%2C.container-small%2C%20.container-large%20%7B%0A%09margin-right%3A%20auto%20!important%3B%0A%20%20margin-left%3A%20auto%20!important%3B%0A%7D%0A%0A%2F*%20%0AMake%20the%20following%20elements%20inherit%20typography%20styles%20from%20the%20parent%20and%20not%20have%20hardcoded%20values.%20%0AImportant%3A%20You%20will%20not%20be%20able%20to%20style%20for%20example%20%22All%20Links%22%20in%20Designer%20with%20this%20CSS%20applied.%0AUncomment%20this%20CSS%20to%20use%20it%20in%20the%20project.%20Leave%20this%20message%20for%20future%20hand-off.%0A*%2F%0A%2F*%0Aa%2C%0A.w-input%2C%0A.w-select%2C%0A.w-tab-link%2C%0A.w-nav-link%2C%0A.w-dropdown-btn%2C%0A.w-dropdown-toggle%2C%0A.w-dropdown-link%20%7B%0A%20%20color%3A%20inherit%3B%0A%20%20text-decoration%3A%20inherit%3B%0A%20%20font-size%3A%20inherit%3B%0A%7D%0A*%2F%0A%0A%2F*%20Apply%20%22...%22%20after%203%20lines%20of%20text%20*%2F%0A.text-style-3lines%20%7B%0A%09display%3A%20-webkit-box%3B%0A%09overflow%3A%20hidden%3B%0A%09-webkit-line-clamp%3A%203%3B%0A%09-webkit-box-orient%3A%20vertical%3B%0A%7D%0A%0A%2F*%20Apply%20%22...%22%20after%202%20lines%20of%20text%20*%2F%0A.text-style-2lines%20%7B%0A%09display%3A%20-webkit-box%3B%0A%09overflow%3A%20hidden%3B%0A%09-webkit-line-clamp%3A%202%3B%0A%09-webkit-box-orient%3A%20vertical%3B%0A%7D%0A%0A%2F*%20Adds%20inline%20flex%20display%20*%2F%0A.display-inlineflex%20%7B%0A%20%20display%3A%20inline-flex%3B%0A%7D%0A%0A%2F*%20These%20classes%20are%20never%20overwritten%20*%2F%0A.hide%20%7B%0A%20%20display%3A%20none%20!important%3B%0A%7D%0A%0A%40media%20screen%20and%20(max-width%3A%20991px)%20%7B%0A%20%20%20%20.hide%2C%20.hide-tablet%20%7B%0A%20%20%20%20%20%20%20%20display%3A%20none%20!important%3B%0A%20%20%20%20%7D%0A%7D%0A%20%20%40media%20screen%20and%20(max-width%3A%20767px)%20%7B%0A%20%20%20%20.hide-mobile-landscape%7B%0A%20%20%20%20%20%20display%3A%20none%20!important%3B%0A%20%20%20%20%7D%0A%7D%0A%20%20%40media%20screen%20and%20(max-width%3A%20479px)%20%7B%0A%20%20%20%20.hide-mobile%7B%0A%20%20%20%20%20%20display%3A%20none%20!important%3B%0A%20%20%20%20%7D%0A%7D%0A%20%0A.margin-0%20%7B%0A%20%20margin%3A%200rem%20!important%3B%0A%7D%0A%20%20%0A.padding-0%20%7B%0A%20%20padding%3A%200rem%20!important%3B%0A%7D%0A%0A.spacing-clean%20%7B%0Apadding%3A%200rem%20!important%3B%0Amargin%3A%200rem%20!important%3B%0A%7D%0A%0A.margin-top%20%7B%0A%20%20margin-right%3A%200rem%20!important%3B%0A%20%20margin-bottom%3A%200rem%20!important%3B%0A%20%20margin-left%3A%200rem%20!important%3B%0A%7D%0A%0A.padding-top%20%7B%0A%20%20padding-right%3A%200rem%20!important%3B%0A%20%20padding-bottom%3A%200rem%20!important%3B%0A%20%20padding-left%3A%200rem%20!important%3B%0A%7D%0A%20%20%0A.margin-right%20%7B%0A%20%20margin-top%3A%200rem%20!important%3B%0A%20%20margin-bottom%3A%200rem%20!important%3B%0A%20%20margin-left%3A%200rem%20!important%3B%0A%7D%0A%0A.padding-right%20%7B%0A%20%20padding-top%3A%200rem%20!important%3B%0A%20%20padding-bottom%3A%200rem%20!important%3B%0A%20%20padding-left%3A%200rem%20!important%3B%0A%7D%0A%0A.margin-bottom%20%7B%0A%20%20margin-top%3A%200rem%20!important%3B%0A%20%20margin-right%3A%200rem%20!important%3B%0A%20%20margin-left%3A%200rem%20!important%3B%0A%7D%0A%0A.padding-bottom%20%7B%0A%20%20padding-top%3A%200rem%20!important%3B%0A%20%20padding-right%3A%200rem%20!important%3B%0A%20%20padding-left%3A%200rem%20!important%3B%0A%7D%0A%0A.margin-left%20%7B%0A%20%20margin-top%3A%200rem%20!important%3B%0A%20%20margin-right%3A%200rem%20!important%3B%0A%20%20margin-bottom%3A%200rem%20!important%3B%0A%7D%0A%20%20%0A.padding-left%20%7B%0A%20%20padding-top%3A%200rem%20!important%3B%0A%20%20padding-right%3A%200rem%20!important%3B%0A%20%20padding-bottom%3A%200rem%20!important%3B%0A%7D%0A%20%20%0A.margin-horizontal%20%7B%0A%20%20margin-top%3A%200rem%20!important%3B%0A%20%20margin-bottom%3A%200rem%20!important%3B%0A%7D%0A%0A.padding-horizontal%20%7B%0A%20%20padding-top%3A%200rem%20!important%3B%0A%20%20padding-bottom%3A%200rem%20!important%3B%0A%7D%0A%0A.margin-vertical%20%7B%0A%20%20margin-right%3A%200rem%20!important%3B%0A%20%20margin-left%3A%200rem%20!important%3B%0A%7D%0A%20%20%0A.padding-vertical%20%7B%0A%20%20padding-right%3A%200rem%20!important%3B%0A%20%20padding-left%3A%200rem%20!important%3B%0A%7D%0A%0A%2F*%20Apply%20%22...%22%20at%20100%25%20width%20*%2F%0A.truncate-width%20%7B%20%0A%09%09width%3A%20100%25%3B%20%0A%20%20%20%20white-space%3A%20nowrap%3B%20%0A%20%20%20%20overflow%3A%20hidden%3B%20%0A%20%20%20%20text-overflow%3A%20ellipsis%3B%20%0A%7D%0A%2F*%20Removes%20native%20scrollbar%20*%2F%0A.no-scrollbar%20%7B%0A%20%20%20%20-ms-overflow-style%3A%20none%3B%0A%20%20%20%20overflow%3A%20-moz-scrollbars-none%3B%20%0A%7D%0A%0A.no-scrollbar%3A%3A-webkit-scrollbar%20%7B%0A%20%20%20%20display%3A%20none%3B%0A%7D%0A%0A%3C%2Fstyle%3E"
          />
          <_Builtin.Block className="shell3_wrapper" tag="div">
            <_Builtin.Block className="shell3_sidebar-wrapper" tag="div">
              <SidebarDevlink
                disconnectButtonProps={disconnectButtonProps}
                linkDashboard={linkDashboard}
                styleDashboard={styleDashboard}
                linkManage={linkManage}
                linkCalendar={linkCalendar}
                linkBilling={linkBilling}
                linkClub={linkClub}
                linkSettings={linkSettings}
              />
            </_Builtin.Block>
            <_Builtin.Block className="shell3_main-wrapper" tag="main">
              <_Builtin.Block
                className="topbar3_component box-shadow devlink"
                tag="div"
              >
                <_Builtin.Block className="topbar3_container" tag="div">
                  <_Builtin.Block
                    className="top_bar-heading"
                    id="w-node-_1bf7d8b1-45bf-7ee7-4978-3821b784e188-b784e17d"
                    tag="div"
                  >
                    <_Builtin.HtmlEmbed
                      className="icon-embed-xxsmall"
                      value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20x%3D%220%22%20y%3D%220%22%20viewBox%3D%220%200%20512%20512%22%20style%3D%22enable-background%3Anew%200%200%20512%20512%22%20xml%3Aspace%3D%22preserve%22%20class%3D%22%22%3E%3Cg%3E%3Cpath%20d%3D%22M197.332%200h-160C16.746%200%200%2016.746%200%2037.332v96c0%2020.59%2016.746%2037.336%2037.332%2037.336h160c20.59%200%2037.336-16.746%2037.336-37.336v-96C234.668%2016.746%20217.922%200%20197.332%200zM197.332%20213.332h-160C16.746%20213.332%200%20230.078%200%20250.668v224C0%20495.254%2016.746%20512%2037.332%20512h160c20.59%200%2037.336-16.746%2037.336-37.332v-224c0-20.59-16.746-37.336-37.336-37.336zM474.668%20341.332h-160c-20.59%200-37.336%2016.746-37.336%2037.336v96c0%2020.586%2016.746%2037.332%2037.336%2037.332h160C495.254%20512%20512%20495.254%20512%20474.668v-96c0-20.59-16.746-37.336-37.332-37.336zM474.668%200h-160c-20.59%200-37.336%2016.746-37.336%2037.332v224c0%2020.59%2016.746%2037.336%2037.336%2037.336h160c20.586%200%2037.332-16.746%2037.332-37.336v-224C512%2016.746%20495.254%200%20474.668%200zm0%200%22%20fill%3D%22currentColor%22%20opacity%3D%221%22%20class%3D%22%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                    />
                    <_Builtin.Block className="text-block-14" tag="div">
                      {titlePage}
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <DevLinkNavBarSwitchTheme
                    clubLogo={clubLogo}
                    clubName={clubName}
                    componentSwitch={componentSwitch}
                    componentLogoClub={componentLogoClub}
                  />
                </_Builtin.Block>
                <_Builtin.Block className="topbar3_search-tablet" tag="div">
                  <_Builtin.Block className="topbar3_search-wrapper" tag="div">
                    <_Builtin.FormWrapper className="topbar3_form-block">
                      <_Builtin.FormForm
                        className="topbar3_form"
                        name="wf-form-Search-3-5"
                        data-name="Search 3"
                        method="get"
                        id="email-form"
                      >
                        <_Builtin.Block className="topbar3_search" tag="div">
                          <_Builtin.FormTextInput
                            className="form_input is-icon-left"
                            autoFocus={false}
                            maxLength={256}
                            name="Field-3"
                            data-name="Field 3"
                            placeholder="Search"
                            type="text"
                            disabled={false}
                            required={false}
                            id="Field-3"
                          />
                          <_Builtin.Block
                            className="form_icon-wrapper"
                            tag="div"
                          >
                            <_Builtin.HtmlEmbed
                              className="icon-embed-xsmall"
                              value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20preserveAspectRatio%3D%22xMidYMid%20meet%22%20aria-hidden%3D%22true%22%20role%3D%22img%22%3E%0A%3Cpath%20d%3D%22M10%2018C11.775%2017.9996%2013.4988%2017.4054%2014.897%2016.312L19.293%2020.708L20.707%2019.294L16.311%2014.898C17.405%2013.4997%2017.9996%2011.7754%2018%2010C18%205.589%2014.411%202%2010%202C5.589%202%202%205.589%202%2010C2%2014.411%205.589%2018%2010%2018ZM10%204C13.309%204%2016%206.691%2016%2010C16%2013.309%2013.309%2016%2010%2016C6.691%2016%204%2013.309%204%2010C4%206.691%206.691%204%2010%204Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                            />
                          </_Builtin.Block>
                        </_Builtin.Block>
                      </_Builtin.FormForm>
                      <_Builtin.FormSuccessMessage>
                        <_Builtin.Block tag="div">
                          {"Thank you! Your submission has been received!"}
                        </_Builtin.Block>
                      </_Builtin.FormSuccessMessage>
                      <_Builtin.FormErrorMessage>
                        <_Builtin.Block tag="div">
                          {
                            "Oops! Something went wrong while submitting the form."
                          }
                        </_Builtin.Block>
                      </_Builtin.FormErrorMessage>
                    </_Builtin.FormWrapper>
                    <_Builtin.Block
                      className="topbar3_close-icon"
                      data-w-id="1bf7d8b1-45bf-7ee7-4978-3821b784e19b"
                      tag="div"
                    >
                      <_Builtin.HtmlEmbed
                        className="icon-embed-small"
                        value="%3Csvg%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2032%2033%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M22.8354%2022.864L22.3639%2023.3354C22.1036%2023.5957%2021.6815%2023.5957%2021.4211%2023.3354L16%2017.9142L10.5788%2023.3353C10.3185%2023.5957%209.89638%2023.5957%209.63603%2023.3353L9.16462%2022.8639C8.90427%2022.6036%208.90427%2022.1815%209.16462%2021.9211L14.5858%2016.5L9.16462%2011.0788C8.90427%2010.8185%208.90427%2010.3964%209.16462%2010.136L9.63602%209.66463C9.89637%209.40428%2010.3185%209.40428%2010.5788%209.66463L16%2015.0858L21.4211%209.66462C21.6815%209.40427%2022.1036%209.40427%2022.3639%209.66462L22.8354%2010.136C23.0957%2010.3964%2023.0957%2010.8185%2022.8354%2011.0788L17.4142%2016.5L22.8354%2021.9211C23.0957%2022.1815%2023.0957%2022.6036%2022.8354%2022.864Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                      />
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className="topbar3_search-overlay"
                    data-w-id="1bf7d8b1-45bf-7ee7-4978-3821b784e19d"
                    tag="div"
                  />
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block className="shell3_inner-wrapper" tag="div">
                <_Builtin.HtmlEmbed
                  className="shell3_inner-wrapper-height"
                  value="%3Cstyle%3E%0A%2F*%20This%20code%20adjusts%20the%20height%20of%20the%20main%20content%20to%20work%20with%20the%20topbar%20and%20fit%20within%20the%20viewport%20height%20*%2F%0A.shell3_inner-wrapper%20%7B%0A%20%20height%3A%20calc(100vh%20-%204.5rem)%3B%20%2F*%204.5rem%20reflects%20the%20height%20of%20the%20topbar%20*%2F%0A%7D%0A%3C%2Fstyle%3E"
                />
                <_Builtin.Block className="stat1_component devlink" tag="div">
                  <_Builtin.Block
                    className="padding-horizontal padding-medium"
                    tag="div"
                  >
                    <_Builtin.Block className="container-large" tag="div">
                      <_Builtin.Block
                        className="padding-vertical padding-small"
                        tag="div"
                      >
                        <_Builtin.Block className="stats_big-grid" tag="div">
                          <_Builtin.Block
                            className="stats_big-grid_left"
                            id="w-node-_1bf7d8b1-45bf-7ee7-4978-3821b784e1a5-b784e17d"
                            tag="div"
                          >
                            <_Builtin.Block
                              className="header_subtext choose-place devlink"
                              tag="div"
                            >
                              <_Builtin.Block
                                className="div-block-22 dashboard"
                                tag="div"
                              >
                                <_Builtin.Block
                                  className="header-flex"
                                  tag="div"
                                >
                                  <_Builtin.Block
                                    className="subheader devlink"
                                    tag="div"
                                  >
                                    {"Site"}
                                  </_Builtin.Block>
                                  <_Builtin.Block
                                    className="form_dashboard devlink site"
                                    tag="div"
                                  >
                                    <_Builtin.Block tag="div">
                                      {componentSite}
                                    </_Builtin.Block>
                                  </_Builtin.Block>
                                </_Builtin.Block>
                                <_Builtin.Block
                                  className="header-flex"
                                  tag="div"
                                >
                                  <_Builtin.Block
                                    className="subheader devlink"
                                    tag="div"
                                  >
                                    {"Terrain"}
                                  </_Builtin.Block>
                                  <_Builtin.Block
                                    className="form_dashboard devlink site"
                                    tag="div"
                                  >
                                    <_Builtin.Block tag="div">
                                      {componentCourts}
                                    </_Builtin.Block>
                                  </_Builtin.Block>
                                </_Builtin.Block>
                              </_Builtin.Block>
                              <_Builtin.Link
                                className="button is-xsmall update all-data"
                                button={true}
                                wized="getStats_btn"
                                block=""
                                options={{
                                  href: "#",
                                }}
                                {...actionUpdate}
                              >
                                {"Actualiser"}
                              </_Builtin.Link>
                              <ButtonPrimary action={actionUpdate} />
                            </_Builtin.Block>
                            <_Builtin.Block
                              className="header_subtext devlink"
                              tag="div"
                            >
                              <_Builtin.Block className="header-flex" tag="div">
                                <_Builtin.Block
                                  className="subheader devlink"
                                  tag="div"
                                >
                                  {"Jour"}
                                </_Builtin.Block>
                                <_Builtin.Block
                                  className="form_dashboard devlink site"
                                  tag="div"
                                >
                                  <_Builtin.Block tag="div">
                                    {componentDays}
                                  </_Builtin.Block>
                                </_Builtin.Block>
                              </_Builtin.Block>
                              <_Builtin.Block className="header-flex" tag="div">
                                <_Builtin.Block
                                  className="subheader devlink"
                                  tag="div"
                                >
                                  {"Mois"}
                                </_Builtin.Block>
                                <_Builtin.Block
                                  className="form_dashboard devlink"
                                  tag="div"
                                >
                                  <_Builtin.Block tag="div">
                                    {componentMonth}
                                  </_Builtin.Block>
                                </_Builtin.Block>
                              </_Builtin.Block>
                              <_Builtin.Block className="header-flex" tag="div">
                                <_Builtin.Block
                                  className="subheader devlink"
                                  tag="div"
                                >
                                  {"Année"}
                                </_Builtin.Block>
                                <_Builtin.Block
                                  className="form_dashboard devlink"
                                  tag="div"
                                >
                                  <_Builtin.Block tag="div">
                                    {componentYear}
                                  </_Builtin.Block>
                                </_Builtin.Block>
                              </_Builtin.Block>
                              <_Builtin.Link
                                className="button is-xsmall update"
                                button={true}
                                wized="getStats_btn"
                                block=""
                                options={{
                                  href: "#",
                                }}
                              >
                                {"Actualiser"}
                              </_Builtin.Link>
                            </_Builtin.Block>
                            <_Builtin.Block
                              className="stat1_list-wrapper devlink"
                              tag="div"
                            >
                              <_Builtin.Block
                                className="stat1_item box-shadow devlink"
                                id="w-node-_1e6832ce-d2fa-b3fb-7320-66be712db2a7-b784e17d"
                                tag="div"
                              >
                                <_Builtin.Block
                                  className="margin-bottom"
                                  tag="div"
                                >
                                  <_Builtin.Block
                                    className="stat1_item-content-top"
                                    tag="div"
                                  >
                                    <_Builtin.Block
                                      className="stats_icon-box playpad"
                                      tag="div"
                                    >
                                      <_Builtin.HtmlEmbed
                                        className="stats_icon playpad"
                                        value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%20400%20400%22%20fill%3D%22none%22%3E%0A%3Cg%20clip-path%3D%22url(%23clip0_2885_1338)%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M312.597%2083.2311C310.619%2084.7881%20308.46%2086.4901%20307.8%2087.0121C307.14%2087.5351%20305.07%2089.1561%20303.2%2090.6151C301.33%2092.0731%20299.436%2093.5661%20298.991%2093.9331C298.546%2094.3001%20297.106%2095.4101%20295.791%2096.4001C294.476%2097.3901%20293.207%2098.3801%20292.97%2098.6001C292.734%2098.8201%20291.954%2099.4501%20291.236%20100C290.518%20100.55%20289.717%20101.18%20289.456%20101.4C286.334%20104.028%20284.784%20105.2%20284.428%20105.2C284.193%20105.2%20284%20105.345%20284%20105.522C284%20105.698%20282.709%20106.823%20281.131%20108.022C279.553%20109.22%20278.068%20110.383%20277.831%20110.606C277.594%20110.829%20276.59%20111.634%20275.6%20112.395C274.61%20113.157%20273.71%20113.874%20273.6%20113.991C273.49%20114.107%20272.322%20115.012%20271.004%20116.001C269.686%20116.99%20268.005%20118.34%20267.268%20119C266.532%20119.66%20265.65%20120.358%20265.308%20120.551C264.967%20120.745%20262.862%20122.365%20260.631%20124.151C258.401%20125.938%20255.879%20127.94%20255.028%20128.6C254.178%20129.26%20252.804%20130.34%20251.977%20131C251.149%20131.66%20249.884%20132.65%20249.165%20133.2C248.447%20133.75%20247.666%20134.383%20247.43%20134.606C247.193%20134.829%20246.19%20135.634%20245.2%20136.395C244.21%20137.157%20243.31%20137.887%20243.2%20138.018C243.09%20138.149%20241.92%20139.041%20240.6%20140C239.28%20140.959%20238.11%20141.851%20238%20141.982C237.89%20142.113%20236.99%20142.841%20236%20143.6C235.01%20144.359%20234.11%20145.079%20234%20145.201C233.303%20145.973%20226.778%20150.8%20226.431%20150.8C226.197%20150.8%20225.598%20150.445%20225.099%20150.011C222.708%20147.933%20211.738%20141.603%20210.523%20141.601C208.63%20141.597%20209.252%20137.722%20211.283%20136.867C211.458%20136.793%20211.6%20136.559%20211.6%20136.345C211.6%20135.881%20215.989%20129.858%20216.467%20129.667C216.65%20129.593%20216.8%20129.359%20216.8%20129.145C216.8%20128.681%20221.189%20122.658%20221.667%20122.467C221.85%20122.393%20222%20122.169%20222%20121.968C222%20121.768%20223.89%20118.996%20226.2%20115.809C231.906%20107.938%20231.607%20107.594%20223.6%20112.814C223.27%20113.029%20222.73%20113.326%20222.4%20113.474C222.07%20113.622%20220.407%20114.611%20218.704%20115.672C217.002%20116.732%20215.52%20117.6%20215.411%20117.6C215.233%20117.6%20210.678%20120.251%20209.2%20121.214C208.87%20121.429%20208.33%20121.728%20208%20121.878C207.67%20122.028%20206.5%20122.72%20205.4%20123.416C204.3%20124.111%20202.32%20125.277%20201%20126.006C199.68%20126.735%20198.06%20127.654%20197.4%20128.049C196.74%20128.444%20195.623%20129.06%20194.918%20129.42C194.214%20129.78%20193.426%20130.327%20193.169%20130.637C192.912%20130.947%20192.535%20131.2%20192.332%20131.2C192.128%20131.2%20191.018%20131.804%20189.864%20132.542C185.804%20135.139%20185.118%20135.339%20181.254%20135.047C177.328%20134.751%20177.078%20134.841%20177.677%20136.34C177.909%20136.923%20178.232%20137.76%20178.394%20138.2C178.556%20138.64%20178.984%20139.681%20179.345%20140.514C179.705%20141.346%20180%20142.393%20180%20142.84C180%20143.287%20180.181%20143.991%20180.403%20144.405C181.106%20145.718%20182.022%20152.226%20182.769%20161.2C182.983%20163.777%20182.953%20169.264%20182.69%20175.4C182.261%20185.422%20182.712%20199.946%20183.59%20204.4C184.625%20209.65%20185.308%20212.665%20185.587%20213.213C185.758%20213.55%20186.034%20214.444%20186.2%20215.2C186.366%20215.956%20186.642%20216.85%20186.814%20217.187C186.985%20217.524%20187.908%20219.42%20188.863%20221.4C189.818%20223.38%20190.708%20225.09%20190.84%20225.2C190.972%20225.31%20191.588%20226.21%20192.208%20227.2C194.76%20231.273%20202.75%20238.142%20207.2%20240.088C212.858%20242.563%20224.089%20242.727%20228.813%20240.403C229.15%20240.237%20230.003%20239.975%20230.709%20239.82C231.414%20239.665%20232.094%20239.372%20232.219%20239.169C232.345%20238.966%20232.767%20238.8%20233.157%20238.8C234.123%20238.8%20239.464%20235.979%20243.6%20233.284C247.911%20230.476%20255.468%20223.001%20256.828%20220.2C257.362%20219.1%20257.966%20218.08%20258.169%20217.934C258.372%20217.787%20258.511%20215.646%20258.478%20213.175L258.418%20208.682L260.195%20206.441C262.937%20202.983%20271.343%20192.217%20274%20188.76C274.55%20188.045%20275.18%20187.266%20275.4%20187.03C275.62%20186.793%20276.61%20185.521%20277.6%20184.202C279.731%20181.363%20279.527%20181.629%20281.909%20178.584C282.949%20177.255%20284.34%20175.468%20285%20174.612C285.66%20173.757%20286.47%20172.758%20286.8%20172.393C287.13%20172.028%20287.58%20171.451%20287.8%20171.111C288.928%20169.366%20294.207%20162.8%20294.482%20162.8C294.657%20162.8%20294.803%20162.575%20294.808%20162.3C294.812%20162.025%20295.442%20161.082%20296.208%20160.204C298.671%20157.382%20297.559%20157.655%20292.699%20161.066C291.654%20161.8%20290.634%20162.4%20290.432%20162.4C290.231%20162.4%20290.007%20162.535%20289.933%20162.7C289.816%20162.964%20286.206%20165.467%20284.318%20166.593C283.944%20166.817%20281.784%20168.26%20279.518%20169.8C277.253%20171.34%20275.22%20172.672%20275%20172.76C274.78%20172.848%20274.51%20173.028%20274.4%20173.161C274.194%20173.409%20269.947%20176.267%20268.704%20176.993C268.322%20177.217%20265.654%20179.02%20262.777%20181C253.628%20187.297%20253.885%20187.188%20252.954%20185.148C251.725%20182.455%20247.816%20174.573%20247.623%20174.4C247.5%20174.29%20247.079%20173.57%20246.686%20172.8C246.293%20172.03%20245.346%20170.68%20244.581%20169.8C242.105%20166.95%20241.96%20167.279%20249.425%20158.8C251.652%20156.27%20253.818%20153.775%20254.237%20153.257C254.657%20152.738%20255.462%20151.838%20256.027%20151.257C256.592%20150.675%20257.222%20149.907%20257.427%20149.549C257.632%20149.19%20259%20147.57%20260.466%20145.949C261.933%20144.327%20263.55%20142.468%20264.06%20141.819C264.569%20141.169%20265.439%20140.162%20265.993%20139.581C266.547%20139%20267.433%20138.001%20267.962%20137.362C269.405%20135.618%20273.357%20131.028%20273.612%20130.8C273.734%20130.69%20275.108%20129.07%20276.664%20127.2C278.22%20125.33%20280.143%20123.117%20280.936%20122.283C281.73%20121.448%20282.609%20120.443%20282.889%20120.05C283.512%20119.177%20287.023%20115.09%20288.407%20113.627C288.961%20113.042%20289.831%20112.031%20290.341%20111.381C290.851%20110.732%20292.268%20109.068%20293.49%20107.684C294.711%20106.3%20296.089%20104.68%20296.551%20104.084C297.014%20103.488%20297.754%20102.617%20298.196%20102.149C298.638%20101.681%20299.9%20100.255%20301%2098.9791C302.1%2097.7041%20303.81%2095.7391%20304.8%2094.6131C306.668%2092.4891%20309.369%2089.2991%20309.897%2088.5951C310.064%2088.3721%20311.118%2087.1731%20312.239%2085.9291C317.736%2079.8351%20317.832%2079.1101%20312.597%2083.2311ZM164.6%20135.852C163.5%20136.145%20161.936%20136.388%20161.124%20136.392C160.312%20136.397%20159.549%20136.559%20159.429%20136.754C159.308%20136.948%20158.371%20137.233%20157.346%20137.387C156.321%20137.541%20155.194%20137.81%20154.841%20137.985C154.489%20138.16%20153.21%20138.61%20152%20138.986C149.365%20139.803%20148.235%20140.252%20143.413%20142.401C140.347%20143.766%20139.915%20143.976%20138.2%20144.934C135.935%20146.198%20131.288%20149.269%20129.4%20150.75C128.52%20151.44%20127.26%20152.404%20126.6%20152.891C125.272%20153.871%20116.603%20162.472%20115.494%20163.909C111.328%20169.308%20107.469%20175.195%20105.734%20178.8C103.531%20183.377%20102%20186.906%20102%20187.406C102%20187.707%20101.84%20188.051%20101.645%20188.172C101.45%20188.293%20101.168%20189.045%20101.018%20189.845C100.868%20190.644%20100.599%20191.591%20100.42%20191.949C100.117%20192.555%2099.6499%20194.277%2098.7239%20198.2C98.5169%20199.08%2098.1859%20201.052%2097.9889%20202.582C97.7919%20204.111%2097.4439%20206.235%2097.2159%20207.301C95.0949%20217.189%2097.5829%20222.964%20106.751%20229.434C108.428%20230.618%20109.991%20231.724%20110.224%20231.893C111.94%20233.137%20123.315%20238.8%20124.097%20238.8C124.484%20238.8%20124.8%20238.98%20124.8%20239.2C124.8%20239.42%20124.998%20239.6%20125.24%20239.6C125.481%20239.6%20126.336%20239.889%20127.14%20240.243C127.943%20240.597%20129.14%20241.119%20129.8%20241.403C133.585%20243.031%20140.106%20246.105%20140.4%20246.4C140.51%20246.511%20141.5%20247.039%20142.6%20247.574C143.7%20248.109%20145.536%20249.144%20146.681%20249.874C147.825%20250.603%20148.841%20251.2%20148.938%20251.2C149.221%20251.2%20155.69%20255.633%20156.305%20256.248C156.612%20256.554%20157.224%20256.999%20157.665%20257.235C159.807%20258.381%20172.8%20271.211%20172.8%20272.18C172.8%20272.521%20172.938%20272.8%20173.106%20272.8C173.903%20272.8%20180%20283.774%20180%20285.208C180%20285.556%20180.161%20286.011%20180.358%20286.22C180.814%20286.704%20181.628%20290.063%20181.856%20292.4C182.225%20296.177%20182.045%20296%20185.524%20296C187.233%20296%20189.669%20295.73%20190.935%20295.4C192.202%20295.07%20193.691%20294.8%20194.244%20294.8C194.797%20294.8%20196.184%20294.519%20197.325%20294.176C198.466%20293.833%20200.12%20293.36%20201%20293.124C201.88%20292.889%20203.167%20292.45%20203.86%20292.148C204.554%20291.847%20205.499%20291.6%20205.96%20291.6C206.422%20291.6%20206.8%20291.441%20206.8%20291.247C206.8%20291.052%20207.205%20290.793%20207.7%20290.671C209.569%20290.21%20211.6%20289.393%20211.6%20289.102C211.6%20288.936%20211.798%20288.8%20212.04%20288.8C212.7%20288.8%20215.098%20287.623%20217.907%20285.92C219.286%20285.084%20220.576%20284.4%20220.774%20284.4C220.972%20284.4%20221.193%20284.262%20221.267%20284.093C221.34%20283.924%20222.39%20283.165%20223.6%20282.406C224.81%20281.647%20225.89%20280.93%20226%20280.812C226.11%20280.695%20227.547%20279.519%20229.193%20278.199C234.993%20273.549%20240.8%20267.155%20244.811%20261C246.101%20259.02%20247.301%20257.209%20247.478%20256.976C247.9%20256.422%20249.077%20254.27%20250.255%20251.9C252.754%20246.875%20253.2%20245.887%20253.2%20245.377C253.2%20245.074%20253.495%20244.146%20253.855%20243.314C254.604%20241.586%20254.818%20240.998%20255.738%20238.146C256.793%20234.874%20256.651%20234.507%20254.9%20235.972C252.666%20237.842%20252.626%20237.873%20249.35%20240.223C247.681%20241.42%20246.065%20242.4%20245.758%20242.4C245.451%20242.4%20245.2%20242.547%20245.2%20242.726C245.2%20242.906%20243.625%20243.818%20241.7%20244.754C239.775%20245.69%20237.69%20246.713%20237.068%20247.028C236.445%20247.342%20235.626%20247.6%20235.248%20247.6C234.869%20247.6%20234.389%20247.757%20234.18%20247.949C233.971%20248.14%20232.72%20248.599%20231.4%20248.968C230.08%20249.337%20228.46%20249.813%20227.8%20250.026C223.783%20251.322%20210.826%20251.299%20208.384%20249.991C207.982%20249.776%20207.383%20249.6%20207.054%20249.6C203.332%20249.6%20191.747%20241.12%20186.808%20234.781C186.045%20233.801%20185.304%20232.91%20185.162%20232.8C184.025%20231.92%20178.4%20221.014%20178.4%20219.688C178.4%20219.288%20178.246%20218.789%20178.058%20218.58C177.557%20218.023%20176.4%20214.204%20176.4%20213.105C176.4%20212.585%20176.237%20211.989%20176.038%20211.78C175.584%20211.304%20174.8%20206.856%20174.386%20202.4C173.292%20190.638%20173.155%20186.016%20173.611%20176.2C174.081%20166.087%20173.694%20154.745%20172.778%20151.772C172.57%20151.096%20172.4%20150.055%20172.4%20149.459C172.4%20148.862%20172.13%20147.728%20171.8%20146.938C171.47%20146.149%20171.2%20145.085%20171.2%20144.575C171.2%20144.065%20171.034%20143.545%20170.831%20143.419C170.628%20143.294%20170.339%20142.634%20170.19%20141.953C169.869%20140.493%20168.065%20136.873%20167.204%20135.96C166.671%20135.396%20166.364%20135.383%20164.6%20135.852ZM99.8969%20237.3C99.9829%20238.015%20100.203%20238.96%20100.385%20239.4C100.567%20239.84%20101.018%20241.1%20101.389%20242.2C101.759%20243.3%20102.218%20244.56%20102.409%20245C102.6%20245.44%20103.136%20246.7%20103.6%20247.8C104.588%20250.144%20106.512%20254.112%20106.8%20254.4C106.91%20254.51%20107.283%20255.14%20107.629%20255.8C107.975%20256.46%20108.515%20257.447%20108.829%20257.993C109.363%20258.922%20113.842%20265.17%20115.469%20267.255C116.566%20268.663%20125.239%20277.267%20126.607%20278.306C127.263%20278.804%20129.15%20280.202%20130.8%20281.412C132.45%20282.623%20134.017%20283.791%20134.283%20284.007C134.549%20284.223%20135.022%20284.4%20135.334%20284.4C135.646%20284.4%20136.108%20284.648%20136.359%20284.951C136.796%20285.477%20146.406%20290.4%20146.996%20290.4C147.152%20290.4%20147.846%20290.652%20148.54%20290.959C149.233%20291.267%20150.79%20291.829%20152%20292.208C153.21%20292.587%20154.519%20293.059%20154.909%20293.257C155.299%20293.455%20156.428%20293.729%20157.42%20293.865C158.411%20294.001%20159.318%20294.267%20159.435%20294.456C159.552%20294.645%20160.165%20294.8%20160.799%20294.8C161.432%20294.8%20163.087%20295.053%20164.475%20295.363C165.864%20295.672%20168.395%20296.005%20170.1%20296.103L173.2%20296.28V294.715C173.2%20293.187%20172.312%20289.692%20171.571%20288.305C171.367%20287.923%20171.2%20287.365%20171.2%20287.065C171.2%20286.567%20170.775%20285.695%20168.552%20281.624C168.138%20280.866%20167.473%20279.876%20167.073%20279.424C166.674%20278.971%20165.957%20277.97%20165.481%20277.2C164.709%20275.951%20162.561%20273.47%20160.157%20271.049C159.266%20270.152%20155.946%20267.228%20153.6%20265.275C151.988%20263.932%20144.468%20258.8%20144.113%20258.8C143.982%20258.8%20143.319%20258.384%20142.638%20257.876C141.957%20257.368%20137.98%20255.287%20133.8%20253.253C129.62%20251.218%20125.69%20249.294%20125.068%20248.977C124.445%20248.66%20123.59%20248.4%20123.168%20248.4C122.745%20248.4%20122.4%20248.22%20122.4%20248C122.4%20247.78%20122.112%20247.6%20121.761%20247.6C121.195%20247.6%20111.049%20242.73%20109.014%20241.482C108.582%20241.217%20107.052%20240.285%20105.614%20239.411C104.176%20238.536%20102.552%20237.411%20102.004%20236.911C100.521%20235.554%2099.7029%20235.706%2099.8969%20237.3Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fg%3E%0A%3Cdefs%3E%0A%3CclipPath%20id%3D%22clip0_2885_1338%22%3E%0A%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2FclipPath%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E"
                                      />
                                    </_Builtin.Block>
                                    <_Builtin.Block
                                      className=" stats_text-box"
                                      tag="div"
                                    >
                                      {"Réservations PlayPad"}
                                    </_Builtin.Block>
                                  </_Builtin.Block>
                                </_Builtin.Block>
                                <_Builtin.Block
                                  className="stat1_item-content-bottom"
                                  tag="div"
                                >
                                  {isNotLoading ? (
                                    <_Builtin.Block
                                      className="stats_box-number devlink"
                                      tag="div"
                                      wized="dashboard_reservations"
                                    >
                                      {nBookingsPlayPad}
                                    </_Builtin.Block>
                                  ) : null}
                                  {isLoading ? (
                                    <_Builtin.Block
                                      className="div-block-5"
                                      tag="div"
                                    >
                                      <_Builtin.Block
                                        className="block-progress small"
                                        tag="div"
                                      >
                                        {componentProgress}
                                      </_Builtin.Block>
                                    </_Builtin.Block>
                                  ) : null}
                                  <_Builtin.Block
                                    className="stat1_item-badge"
                                    tag="div"
                                  >
                                    <_Builtin.Block
                                      className="text-size-small"
                                      tag="div"
                                    >
                                      {"0%"}
                                    </_Builtin.Block>
                                  </_Builtin.Block>
                                </_Builtin.Block>
                              </_Builtin.Block>
                              <_Builtin.Block
                                className="stat1_item box-shadow devlink"
                                tag="div"
                              >
                                <_Builtin.Block
                                  className="margin-bottom"
                                  tag="div"
                                >
                                  <_Builtin.Block
                                    className="stat1_item-content-top"
                                    tag="div"
                                  >
                                    <_Builtin.Block
                                      className=" stats_text-box"
                                      tag="div"
                                    >
                                      {titleBookingsClub}
                                    </_Builtin.Block>
                                  </_Builtin.Block>
                                </_Builtin.Block>
                                <_Builtin.Block
                                  className="stat1_item-content-bottom"
                                  tag="div"
                                >
                                  {isNotLoading ? (
                                    <_Builtin.Block
                                      className="stats_box-number devlink"
                                      tag="div"
                                      wized="dashboard_reservations"
                                    >
                                      {nBookingslub}
                                    </_Builtin.Block>
                                  ) : null}
                                  {isLoading ? (
                                    <_Builtin.Block
                                      className="div-block-5"
                                      tag="div"
                                    >
                                      <_Builtin.Block
                                        className="block-progress small"
                                        tag="div"
                                      >
                                        {componentProgress}
                                      </_Builtin.Block>
                                    </_Builtin.Block>
                                  ) : null}
                                  <_Builtin.Block
                                    className="stat1_item-badge"
                                    tag="div"
                                  >
                                    <_Builtin.Block
                                      className="text-size-small"
                                      tag="div"
                                    >
                                      {"0%"}
                                    </_Builtin.Block>
                                  </_Builtin.Block>
                                </_Builtin.Block>
                                <_Builtin.Block
                                  className="stats_icon-box"
                                  tag="div"
                                >
                                  <_Builtin.HtmlEmbed
                                    className="stats_icon"
                                    value="%3Csvg%20width%3D%22auto%22%20height%3D%22auto%22%20viewBox%3D%220%200%2013%2014%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M9.89688%205.78345H6.72246C6.47456%205.78345%206.26897%205.57786%206.26897%205.32996C6.26897%205.08205%206.47456%204.87647%206.72246%204.87647H9.89688C10.0172%204.87647%2010.1325%204.92425%2010.2175%205.00929C10.3026%205.09434%2010.3504%205.20968%2010.3504%205.32996C10.3504%205.45023%2010.3026%205.56558%2010.2175%205.65062C10.1325%205.73567%2010.0172%205.78345%209.89688%205.78345ZM3.54804%206.24298C3.43316%206.24298%203.31828%206.20066%203.22758%206.10996L2.77409%205.65647C2.59874%205.48112%202.59874%205.19089%202.77409%205.01554C2.94944%204.84019%203.23967%204.84019%203.41502%205.01554L3.54804%205.14856L4.58804%204.10856C4.76339%203.93321%205.05362%203.93321%205.22897%204.10856C5.40432%204.28391%205.40432%204.57414%205.22897%204.74949L3.86851%206.10996C3.78354%206.19503%203.66828%206.24288%203.54804%206.24298ZM9.89688%2010.016H6.72246C6.47456%2010.016%206.26897%209.81042%206.26897%209.56252C6.26897%209.31461%206.47456%209.10903%206.72246%209.10903H9.89688C10.0172%209.10903%2010.1325%209.15681%2010.2175%209.24185C10.3026%209.3269%2010.3504%209.44224%2010.3504%209.56252C10.3504%209.68279%2010.3026%209.79813%2010.2175%209.88318C10.1325%209.96823%2010.0172%2010.016%209.89688%2010.016ZM3.54804%2010.4755C3.43316%2010.4755%203.31828%2010.4332%203.22758%2010.3425L2.77409%209.88903C2.59874%209.71368%202.59874%209.42345%202.77409%209.2481C2.94944%209.07275%203.23967%209.07275%203.41502%209.2481L3.54804%209.38112L4.58804%208.34112C4.76339%208.16577%205.05362%208.16577%205.22897%208.34112C5.40432%208.51647%205.40432%208.8067%205.22897%208.98205L3.86851%2010.3425C3.78354%2010.4276%203.66828%2010.4754%203.54804%2010.4755Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3Cpath%20d%3D%22M8.312%2013.7222H4.68409C1.40084%2013.7222%20-0.00195312%2012.3194%20-0.00195312%209.03612V5.40821C-0.00195312%202.12496%201.40084%200.722168%204.68409%200.722168H8.312C11.5953%200.722168%2012.998%202.12496%2012.998%205.40821V9.03612C12.998%2012.3194%2011.5953%2013.7222%208.312%2013.7222ZM4.68409%201.62914C1.89665%201.62914%200.905024%202.62077%200.905024%205.40821V9.03612C0.905024%2011.8236%201.89665%2012.8152%204.68409%2012.8152H8.312C11.0994%2012.8152%2012.0911%2011.8236%2012.0911%209.03612V5.40821C12.0911%202.62077%2011.0994%201.62914%208.312%201.62914H4.68409Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                                  />
                                </_Builtin.Block>
                              </_Builtin.Block>
                              <_Builtin.Block
                                className="stat1_item box-shadow devlink"
                                id="w-node-_834ef077-8613-3b45-8a13-5c0973218ecd-b784e17d"
                                tag="div"
                              >
                                <_Builtin.Block
                                  className="margin-bottom"
                                  tag="div"
                                >
                                  <_Builtin.Block
                                    className="stat1_item-content-top"
                                    tag="div"
                                  >
                                    <_Builtin.Block
                                      className="stats_icon-box"
                                      tag="div"
                                    >
                                      <_Builtin.HtmlEmbed
                                        className="stats_icon"
                                        value="%3Csvg%20width%3D%22auto%22%20height%3D%22auto%22%20viewBox%3D%220%200%2011%2010%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M1.78695%203.44484H1.91891C2.42693%203.44484%202.84258%203.8605%202.84258%204.36852V8.98688C2.84258%209.49489%202.42693%209.91055%201.91891%209.91055H1.78695C1.27893%209.91055%200.863281%209.49489%200.863281%208.98688V4.36852C0.863281%203.8605%201.27893%203.44484%201.78695%203.44484ZM5.48164%200.673828C5.98966%200.673828%206.40531%201.08948%206.40531%201.5975V8.98688C6.40531%209.49489%205.98966%209.91055%205.48164%209.91055C4.97362%209.91055%204.55797%209.49489%204.55797%208.98688V1.5975C4.55797%201.08948%204.97362%200.673828%205.48164%200.673828ZM9.17633%205.95195C9.68435%205.95195%2010.1%206.36761%2010.1%206.87563V8.98688C10.1%209.49489%209.68435%209.91055%209.17633%209.91055C8.66831%209.91055%208.25266%209.49489%208.25266%208.98688V6.87563C8.25266%206.36761%208.66831%205.95195%209.17633%205.95195Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                                      />
                                    </_Builtin.Block>
                                    <_Builtin.Block
                                      className=" stats_text-box"
                                      tag="div"
                                    >
                                      {"Réservations Total"}
                                    </_Builtin.Block>
                                  </_Builtin.Block>
                                </_Builtin.Block>
                                <_Builtin.Block
                                  className="stat1_item-content-bottom"
                                  tag="div"
                                >
                                  <_Builtin.Block
                                    className="stat1_item-badge"
                                    tag="div"
                                  >
                                    <_Builtin.Block
                                      className="text-size-small"
                                      tag="div"
                                    >
                                      {"0%"}
                                    </_Builtin.Block>
                                  </_Builtin.Block>
                                  {isNotLoading ? (
                                    <_Builtin.Block
                                      className="stats_box-number devlink"
                                      tag="div"
                                      wized="total_reservations"
                                    >
                                      {nBookingsTotal}
                                    </_Builtin.Block>
                                  ) : null}
                                  {isLoading ? (
                                    <_Builtin.Block
                                      className="div-block-5"
                                      tag="div"
                                    >
                                      <_Builtin.Block
                                        className="block-progress small"
                                        tag="div"
                                      >
                                        {componentProgress}
                                      </_Builtin.Block>
                                    </_Builtin.Block>
                                  ) : null}
                                </_Builtin.Block>
                              </_Builtin.Block>
                              <_Builtin.Block
                                className="stat1_item box-shadow devlink"
                                tag="div"
                              >
                                <_Builtin.Block
                                  className="margin-bottom"
                                  tag="div"
                                >
                                  <_Builtin.Block
                                    className="stat1_item-content-top"
                                    tag="div"
                                  >
                                    <_Builtin.Block
                                      className=" stats_text-box"
                                      tag="div"
                                    >
                                      {"Revenus PlayPad"}
                                    </_Builtin.Block>
                                  </_Builtin.Block>
                                </_Builtin.Block>
                                <_Builtin.Block
                                  className="stat1_item-content-bottom"
                                  tag="div"
                                >
                                  <_Builtin.Block
                                    className="stat1_item-badge"
                                    tag="div"
                                  >
                                    <_Builtin.Block
                                      className="text-size-small"
                                      tag="div"
                                    >
                                      {"0%"}
                                    </_Builtin.Block>
                                  </_Builtin.Block>
                                  {isNotLoading ? (
                                    <_Builtin.Block
                                      className="stats_box-number devlink"
                                      tag="div"
                                      wized="total_reservations"
                                    >
                                      {revenuesPlayPad}
                                    </_Builtin.Block>
                                  ) : null}
                                  {isLoading ? (
                                    <_Builtin.Block
                                      className="div-block-5"
                                      tag="div"
                                    >
                                      <_Builtin.Block
                                        className="block-progress small"
                                        tag="div"
                                      >
                                        {componentProgress}
                                      </_Builtin.Block>
                                    </_Builtin.Block>
                                  ) : null}
                                </_Builtin.Block>
                              </_Builtin.Block>
                              <_Builtin.Block
                                className="stat1_item box-shadow devlink"
                                id="w-node-_1bf7d8b1-45bf-7ee7-4978-3821b784e1de-b784e17d"
                                tag="div"
                              >
                                <_Builtin.Block tag="div">
                                  <_Builtin.Block
                                    className="stat1_item-content-top"
                                    tag="div"
                                  >
                                    <_Builtin.Block
                                      className=" stats_text-box"
                                      tag="div"
                                    >
                                      {titleRevenuesClub}
                                    </_Builtin.Block>
                                  </_Builtin.Block>
                                </_Builtin.Block>
                                <_Builtin.Block
                                  className="stat1_item-content-bottom"
                                  tag="div"
                                >
                                  <_Builtin.Block
                                    className="stat1_item-badge"
                                    tag="div"
                                  >
                                    <_Builtin.Block
                                      className="text-size-small"
                                      tag="div"
                                    >
                                      {"0%"}
                                    </_Builtin.Block>
                                  </_Builtin.Block>
                                  {isNotLoading ? (
                                    <_Builtin.Block
                                      className="stats_box-number devlink"
                                      tag="div"
                                      wized="dashboard_revenue"
                                    >
                                      {revenuesClub}
                                    </_Builtin.Block>
                                  ) : null}
                                  {isLoading ? (
                                    <_Builtin.Block
                                      className="div-block-5"
                                      tag="div"
                                    >
                                      <_Builtin.Block
                                        className="block-progress small"
                                        tag="div"
                                      >
                                        {componentProgress}
                                      </_Builtin.Block>
                                    </_Builtin.Block>
                                  ) : null}
                                </_Builtin.Block>
                              </_Builtin.Block>
                              <_Builtin.Block
                                className="stat1_item box-shadow devlink"
                                id="w-node-_6c309289-9b83-1214-5b45-5c6ec532405d-b784e17d"
                                tag="div"
                              >
                                <_Builtin.Block tag="div">
                                  <_Builtin.Block
                                    className="stat1_item-content-top"
                                    tag="div"
                                  >
                                    <_Builtin.Block
                                      className=" stats_text-box"
                                      tag="div"
                                    >
                                      {"Revenus Total"}
                                    </_Builtin.Block>
                                  </_Builtin.Block>
                                </_Builtin.Block>
                                <_Builtin.Block
                                  className="stat1_item-content-bottom"
                                  tag="div"
                                >
                                  <_Builtin.Block
                                    className="stat1_item-badge"
                                    tag="div"
                                  >
                                    <_Builtin.Block
                                      className="text-size-small"
                                      tag="div"
                                    >
                                      {"0%"}
                                    </_Builtin.Block>
                                  </_Builtin.Block>
                                  {isNotLoading ? (
                                    <_Builtin.Block
                                      className="stats_box-number devlink"
                                      tag="div"
                                      wized="dashboard_revenue"
                                    >
                                      {revenuesTotal}
                                    </_Builtin.Block>
                                  ) : null}
                                  {isLoading ? (
                                    <_Builtin.Block
                                      className="div-block-5"
                                      tag="div"
                                    >
                                      <_Builtin.Block
                                        className="block-progress small"
                                        tag="div"
                                      >
                                        {componentProgress}
                                      </_Builtin.Block>
                                    </_Builtin.Block>
                                  ) : null}
                                </_Builtin.Block>
                              </_Builtin.Block>
                            </_Builtin.Block>
                            <_Builtin.Block
                              className="card chart_line _1"
                              id="w-node-fd0f5c39-e11d-81ff-98b9-8875a849291a-b784e17d"
                              tag="div"
                            >
                              <_Builtin.Block
                                className="card_header chart_line"
                                tag="div"
                              >
                                <_Builtin.Block
                                  className="card_header_content"
                                  tag="div"
                                >
                                  <_Builtin.Block
                                    className="heading-style-h5"
                                    tag="div"
                                  >
                                    {"Revenu Total"}
                                  </_Builtin.Block>
                                </_Builtin.Block>
                                <_Builtin.Block
                                  className="timeline-button-group"
                                  tag="div"
                                >
                                  <_Builtin.Link
                                    className="button is-icon is-tiny timeline"
                                    button={false}
                                    wized="yearly_line_btn"
                                    block="inline"
                                    options={{
                                      href: "#",
                                    }}
                                  >
                                    <_Builtin.Block tag="div">
                                      {"1A"}
                                    </_Builtin.Block>
                                  </_Builtin.Link>
                                  <_Builtin.Link
                                    className="button is-icon is-tiny timeline"
                                    button={false}
                                    wized="monthly_line_btn"
                                    block="inline"
                                    options={{
                                      href: "#",
                                    }}
                                  >
                                    <_Builtin.Block tag="div">
                                      {"1M"}
                                    </_Builtin.Block>
                                  </_Builtin.Link>
                                  <_Builtin.Link
                                    className="button is-icon is-tiny timeline"
                                    button={false}
                                    wized="weekly_line_btn"
                                    block="inline"
                                    options={{
                                      href: "#",
                                    }}
                                  >
                                    <_Builtin.Block tag="div">
                                      {"1S"}
                                    </_Builtin.Block>
                                  </_Builtin.Link>
                                </_Builtin.Block>
                              </_Builtin.Block>
                              <_Builtin.Block
                                className="revenue_chart"
                                tag="div"
                              >
                                <_Builtin.HtmlEmbed
                                  className="chart_embed"
                                  wized="revenue_chart"
                                  value="%3Ccanvas%20id%3D%22revenueChart%22%20height%3D%22100%25%22%20width%3D%22100%25%22%20max-width%3D%22100%25%22%3E%3C%2Fcanvas%3E"
                                />
                                <_Builtin.NotSupported _atom="Animation" />
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Block>
                          <_Builtin.Block
                            className="stats_big-grid_right"
                            tag="div"
                          >
                            <_Builtin.Block
                              className="div-block-7"
                              id="w-node-f6dcefbc-75d1-249c-a70c-fc0d68e016cf-b784e17d"
                              tag="div"
                            >
                              <_Builtin.Block
                                className="stats_court bookings devlink"
                                id="w-node-f6dcefbc-75d1-249c-a70c-fc0d68e016d0-b784e17d"
                                tag="div"
                              >
                                <_Builtin.Block
                                  className="div-block-23"
                                  tag="div"
                                >
                                  <_Builtin.Block
                                    className=" stats_text-box big"
                                    tag="div"
                                  >
                                    {"Taux d'occupation"}
                                  </_Builtin.Block>
                                  <_Builtin.Block
                                    className=" stats_text-box big title-rate"
                                    tag="div"
                                  >
                                    {periodStats}
                                  </_Builtin.Block>
                                  {isNotLoading ? (
                                    <_Builtin.Block
                                      className=" stats_text-box big"
                                      tag="div"
                                    >
                                      {"-"}
                                    </_Builtin.Block>
                                  ) : null}
                                  {isNotLoading ? (
                                    <_Builtin.Block
                                      className=" stats_text-box big"
                                      tag="div"
                                    >
                                      {countBookingsTotalStats}
                                    </_Builtin.Block>
                                  ) : null}
                                  {isNotLoading ? (
                                    <_Builtin.Block
                                      className=" stats_text-box big"
                                      tag="div"
                                    >
                                      {"-"}
                                    </_Builtin.Block>
                                  ) : null}
                                  {isNotLoading ? (
                                    <_Builtin.Block
                                      className=" stats_text-box big"
                                      tag="div"
                                    >
                                      {countHoursTotal}
                                    </_Builtin.Block>
                                  ) : null}
                                  {isNotLoading ? (
                                    <_Builtin.Block
                                      className=" stats_text-box big"
                                      tag="div"
                                    >
                                      {"-"}
                                    </_Builtin.Block>
                                  ) : null}
                                  {isNotLoading ? (
                                    <_Builtin.Block
                                      className=" stats_text-box big"
                                      tag="div"
                                    >
                                      {countUsersTotal}
                                    </_Builtin.Block>
                                  ) : null}
                                </_Builtin.Block>
                                <_Builtin.Block
                                  className="div-block-8"
                                  tag="div"
                                >
                                  {isLoading ? (
                                    <_Builtin.Block
                                      className="div-block-5"
                                      tag="div"
                                    >
                                      <_Builtin.Block
                                        className="block-progress small"
                                        tag="div"
                                      >
                                        {componentProgress}
                                      </_Builtin.Block>
                                    </_Builtin.Block>
                                  ) : null}
                                  <_Builtin.Block
                                    className="stat1_item-content-bottom court rate-stats"
                                    tag="div"
                                  >
                                    <_Builtin.Block
                                      className="div-block-11 _1"
                                      id="w-node-f6dcefbc-75d1-249c-a70c-fc0d68e016db-b784e17d"
                                      tag="div"
                                    >
                                      <_Builtin.Block
                                        className="div-block-10 hours"
                                        tag="div"
                                      >
                                        {isNotLoading ? (
                                          <_Builtin.Block
                                            className="form_dashboard devlink site chart rate-stats"
                                            tag="div"
                                          >
                                            <_Builtin.Block tag="div">
                                              {componentChartRateHour}
                                            </_Builtin.Block>
                                          </_Builtin.Block>
                                        ) : null}
                                        {isNotLoading ? (
                                          <_Builtin.Block
                                            className="div-block-20"
                                            id="w-node-f6dcefbc-75d1-249c-a70c-fc0d68e016df-b784e17d"
                                            tag="div"
                                          >
                                            <_Builtin.Block
                                              className="div-block-19 bis"
                                              id="w-node-f6dcefbc-75d1-249c-a70c-fc0d68e016e0-b784e17d"
                                              tag="div"
                                            >
                                              <_Builtin.Block
                                                className="div-block-28"
                                                id="w-node-f6dcefbc-75d1-249c-a70c-fc0d68e016e1-b784e17d"
                                                tag="div"
                                              >
                                                <_Builtin.Block
                                                  className="divtitlecard"
                                                  tag="div"
                                                >
                                                  <_Builtin.Block
                                                    className="titleresult"
                                                    id="w-node-f6dcefbc-75d1-249c-a70c-fc0d68e016e3-b784e17d"
                                                    tag="div"
                                                  >
                                                    {"PlayPad"}
                                                  </_Builtin.Block>
                                                  <_Builtin.HtmlEmbed
                                                    className="stats_icon playpad rate-stats"
                                                    value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%20400%20400%22%20fill%3D%22none%22%3E%0A%3Cg%20clip-path%3D%22url(%23clip0_2885_1338)%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M312.597%2083.2311C310.619%2084.7881%20308.46%2086.4901%20307.8%2087.0121C307.14%2087.5351%20305.07%2089.1561%20303.2%2090.6151C301.33%2092.0731%20299.436%2093.5661%20298.991%2093.9331C298.546%2094.3001%20297.106%2095.4101%20295.791%2096.4001C294.476%2097.3901%20293.207%2098.3801%20292.97%2098.6001C292.734%2098.8201%20291.954%2099.4501%20291.236%20100C290.518%20100.55%20289.717%20101.18%20289.456%20101.4C286.334%20104.028%20284.784%20105.2%20284.428%20105.2C284.193%20105.2%20284%20105.345%20284%20105.522C284%20105.698%20282.709%20106.823%20281.131%20108.022C279.553%20109.22%20278.068%20110.383%20277.831%20110.606C277.594%20110.829%20276.59%20111.634%20275.6%20112.395C274.61%20113.157%20273.71%20113.874%20273.6%20113.991C273.49%20114.107%20272.322%20115.012%20271.004%20116.001C269.686%20116.99%20268.005%20118.34%20267.268%20119C266.532%20119.66%20265.65%20120.358%20265.308%20120.551C264.967%20120.745%20262.862%20122.365%20260.631%20124.151C258.401%20125.938%20255.879%20127.94%20255.028%20128.6C254.178%20129.26%20252.804%20130.34%20251.977%20131C251.149%20131.66%20249.884%20132.65%20249.165%20133.2C248.447%20133.75%20247.666%20134.383%20247.43%20134.606C247.193%20134.829%20246.19%20135.634%20245.2%20136.395C244.21%20137.157%20243.31%20137.887%20243.2%20138.018C243.09%20138.149%20241.92%20139.041%20240.6%20140C239.28%20140.959%20238.11%20141.851%20238%20141.982C237.89%20142.113%20236.99%20142.841%20236%20143.6C235.01%20144.359%20234.11%20145.079%20234%20145.201C233.303%20145.973%20226.778%20150.8%20226.431%20150.8C226.197%20150.8%20225.598%20150.445%20225.099%20150.011C222.708%20147.933%20211.738%20141.603%20210.523%20141.601C208.63%20141.597%20209.252%20137.722%20211.283%20136.867C211.458%20136.793%20211.6%20136.559%20211.6%20136.345C211.6%20135.881%20215.989%20129.858%20216.467%20129.667C216.65%20129.593%20216.8%20129.359%20216.8%20129.145C216.8%20128.681%20221.189%20122.658%20221.667%20122.467C221.85%20122.393%20222%20122.169%20222%20121.968C222%20121.768%20223.89%20118.996%20226.2%20115.809C231.906%20107.938%20231.607%20107.594%20223.6%20112.814C223.27%20113.029%20222.73%20113.326%20222.4%20113.474C222.07%20113.622%20220.407%20114.611%20218.704%20115.672C217.002%20116.732%20215.52%20117.6%20215.411%20117.6C215.233%20117.6%20210.678%20120.251%20209.2%20121.214C208.87%20121.429%20208.33%20121.728%20208%20121.878C207.67%20122.028%20206.5%20122.72%20205.4%20123.416C204.3%20124.111%20202.32%20125.277%20201%20126.006C199.68%20126.735%20198.06%20127.654%20197.4%20128.049C196.74%20128.444%20195.623%20129.06%20194.918%20129.42C194.214%20129.78%20193.426%20130.327%20193.169%20130.637C192.912%20130.947%20192.535%20131.2%20192.332%20131.2C192.128%20131.2%20191.018%20131.804%20189.864%20132.542C185.804%20135.139%20185.118%20135.339%20181.254%20135.047C177.328%20134.751%20177.078%20134.841%20177.677%20136.34C177.909%20136.923%20178.232%20137.76%20178.394%20138.2C178.556%20138.64%20178.984%20139.681%20179.345%20140.514C179.705%20141.346%20180%20142.393%20180%20142.84C180%20143.287%20180.181%20143.991%20180.403%20144.405C181.106%20145.718%20182.022%20152.226%20182.769%20161.2C182.983%20163.777%20182.953%20169.264%20182.69%20175.4C182.261%20185.422%20182.712%20199.946%20183.59%20204.4C184.625%20209.65%20185.308%20212.665%20185.587%20213.213C185.758%20213.55%20186.034%20214.444%20186.2%20215.2C186.366%20215.956%20186.642%20216.85%20186.814%20217.187C186.985%20217.524%20187.908%20219.42%20188.863%20221.4C189.818%20223.38%20190.708%20225.09%20190.84%20225.2C190.972%20225.31%20191.588%20226.21%20192.208%20227.2C194.76%20231.273%20202.75%20238.142%20207.2%20240.088C212.858%20242.563%20224.089%20242.727%20228.813%20240.403C229.15%20240.237%20230.003%20239.975%20230.709%20239.82C231.414%20239.665%20232.094%20239.372%20232.219%20239.169C232.345%20238.966%20232.767%20238.8%20233.157%20238.8C234.123%20238.8%20239.464%20235.979%20243.6%20233.284C247.911%20230.476%20255.468%20223.001%20256.828%20220.2C257.362%20219.1%20257.966%20218.08%20258.169%20217.934C258.372%20217.787%20258.511%20215.646%20258.478%20213.175L258.418%20208.682L260.195%20206.441C262.937%20202.983%20271.343%20192.217%20274%20188.76C274.55%20188.045%20275.18%20187.266%20275.4%20187.03C275.62%20186.793%20276.61%20185.521%20277.6%20184.202C279.731%20181.363%20279.527%20181.629%20281.909%20178.584C282.949%20177.255%20284.34%20175.468%20285%20174.612C285.66%20173.757%20286.47%20172.758%20286.8%20172.393C287.13%20172.028%20287.58%20171.451%20287.8%20171.111C288.928%20169.366%20294.207%20162.8%20294.482%20162.8C294.657%20162.8%20294.803%20162.575%20294.808%20162.3C294.812%20162.025%20295.442%20161.082%20296.208%20160.204C298.671%20157.382%20297.559%20157.655%20292.699%20161.066C291.654%20161.8%20290.634%20162.4%20290.432%20162.4C290.231%20162.4%20290.007%20162.535%20289.933%20162.7C289.816%20162.964%20286.206%20165.467%20284.318%20166.593C283.944%20166.817%20281.784%20168.26%20279.518%20169.8C277.253%20171.34%20275.22%20172.672%20275%20172.76C274.78%20172.848%20274.51%20173.028%20274.4%20173.161C274.194%20173.409%20269.947%20176.267%20268.704%20176.993C268.322%20177.217%20265.654%20179.02%20262.777%20181C253.628%20187.297%20253.885%20187.188%20252.954%20185.148C251.725%20182.455%20247.816%20174.573%20247.623%20174.4C247.5%20174.29%20247.079%20173.57%20246.686%20172.8C246.293%20172.03%20245.346%20170.68%20244.581%20169.8C242.105%20166.95%20241.96%20167.279%20249.425%20158.8C251.652%20156.27%20253.818%20153.775%20254.237%20153.257C254.657%20152.738%20255.462%20151.838%20256.027%20151.257C256.592%20150.675%20257.222%20149.907%20257.427%20149.549C257.632%20149.19%20259%20147.57%20260.466%20145.949C261.933%20144.327%20263.55%20142.468%20264.06%20141.819C264.569%20141.169%20265.439%20140.162%20265.993%20139.581C266.547%20139%20267.433%20138.001%20267.962%20137.362C269.405%20135.618%20273.357%20131.028%20273.612%20130.8C273.734%20130.69%20275.108%20129.07%20276.664%20127.2C278.22%20125.33%20280.143%20123.117%20280.936%20122.283C281.73%20121.448%20282.609%20120.443%20282.889%20120.05C283.512%20119.177%20287.023%20115.09%20288.407%20113.627C288.961%20113.042%20289.831%20112.031%20290.341%20111.381C290.851%20110.732%20292.268%20109.068%20293.49%20107.684C294.711%20106.3%20296.089%20104.68%20296.551%20104.084C297.014%20103.488%20297.754%20102.617%20298.196%20102.149C298.638%20101.681%20299.9%20100.255%20301%2098.9791C302.1%2097.7041%20303.81%2095.7391%20304.8%2094.6131C306.668%2092.4891%20309.369%2089.2991%20309.897%2088.5951C310.064%2088.3721%20311.118%2087.1731%20312.239%2085.9291C317.736%2079.8351%20317.832%2079.1101%20312.597%2083.2311ZM164.6%20135.852C163.5%20136.145%20161.936%20136.388%20161.124%20136.392C160.312%20136.397%20159.549%20136.559%20159.429%20136.754C159.308%20136.948%20158.371%20137.233%20157.346%20137.387C156.321%20137.541%20155.194%20137.81%20154.841%20137.985C154.489%20138.16%20153.21%20138.61%20152%20138.986C149.365%20139.803%20148.235%20140.252%20143.413%20142.401C140.347%20143.766%20139.915%20143.976%20138.2%20144.934C135.935%20146.198%20131.288%20149.269%20129.4%20150.75C128.52%20151.44%20127.26%20152.404%20126.6%20152.891C125.272%20153.871%20116.603%20162.472%20115.494%20163.909C111.328%20169.308%20107.469%20175.195%20105.734%20178.8C103.531%20183.377%20102%20186.906%20102%20187.406C102%20187.707%20101.84%20188.051%20101.645%20188.172C101.45%20188.293%20101.168%20189.045%20101.018%20189.845C100.868%20190.644%20100.599%20191.591%20100.42%20191.949C100.117%20192.555%2099.6499%20194.277%2098.7239%20198.2C98.5169%20199.08%2098.1859%20201.052%2097.9889%20202.582C97.7919%20204.111%2097.4439%20206.235%2097.2159%20207.301C95.0949%20217.189%2097.5829%20222.964%20106.751%20229.434C108.428%20230.618%20109.991%20231.724%20110.224%20231.893C111.94%20233.137%20123.315%20238.8%20124.097%20238.8C124.484%20238.8%20124.8%20238.98%20124.8%20239.2C124.8%20239.42%20124.998%20239.6%20125.24%20239.6C125.481%20239.6%20126.336%20239.889%20127.14%20240.243C127.943%20240.597%20129.14%20241.119%20129.8%20241.403C133.585%20243.031%20140.106%20246.105%20140.4%20246.4C140.51%20246.511%20141.5%20247.039%20142.6%20247.574C143.7%20248.109%20145.536%20249.144%20146.681%20249.874C147.825%20250.603%20148.841%20251.2%20148.938%20251.2C149.221%20251.2%20155.69%20255.633%20156.305%20256.248C156.612%20256.554%20157.224%20256.999%20157.665%20257.235C159.807%20258.381%20172.8%20271.211%20172.8%20272.18C172.8%20272.521%20172.938%20272.8%20173.106%20272.8C173.903%20272.8%20180%20283.774%20180%20285.208C180%20285.556%20180.161%20286.011%20180.358%20286.22C180.814%20286.704%20181.628%20290.063%20181.856%20292.4C182.225%20296.177%20182.045%20296%20185.524%20296C187.233%20296%20189.669%20295.73%20190.935%20295.4C192.202%20295.07%20193.691%20294.8%20194.244%20294.8C194.797%20294.8%20196.184%20294.519%20197.325%20294.176C198.466%20293.833%20200.12%20293.36%20201%20293.124C201.88%20292.889%20203.167%20292.45%20203.86%20292.148C204.554%20291.847%20205.499%20291.6%20205.96%20291.6C206.422%20291.6%20206.8%20291.441%20206.8%20291.247C206.8%20291.052%20207.205%20290.793%20207.7%20290.671C209.569%20290.21%20211.6%20289.393%20211.6%20289.102C211.6%20288.936%20211.798%20288.8%20212.04%20288.8C212.7%20288.8%20215.098%20287.623%20217.907%20285.92C219.286%20285.084%20220.576%20284.4%20220.774%20284.4C220.972%20284.4%20221.193%20284.262%20221.267%20284.093C221.34%20283.924%20222.39%20283.165%20223.6%20282.406C224.81%20281.647%20225.89%20280.93%20226%20280.812C226.11%20280.695%20227.547%20279.519%20229.193%20278.199C234.993%20273.549%20240.8%20267.155%20244.811%20261C246.101%20259.02%20247.301%20257.209%20247.478%20256.976C247.9%20256.422%20249.077%20254.27%20250.255%20251.9C252.754%20246.875%20253.2%20245.887%20253.2%20245.377C253.2%20245.074%20253.495%20244.146%20253.855%20243.314C254.604%20241.586%20254.818%20240.998%20255.738%20238.146C256.793%20234.874%20256.651%20234.507%20254.9%20235.972C252.666%20237.842%20252.626%20237.873%20249.35%20240.223C247.681%20241.42%20246.065%20242.4%20245.758%20242.4C245.451%20242.4%20245.2%20242.547%20245.2%20242.726C245.2%20242.906%20243.625%20243.818%20241.7%20244.754C239.775%20245.69%20237.69%20246.713%20237.068%20247.028C236.445%20247.342%20235.626%20247.6%20235.248%20247.6C234.869%20247.6%20234.389%20247.757%20234.18%20247.949C233.971%20248.14%20232.72%20248.599%20231.4%20248.968C230.08%20249.337%20228.46%20249.813%20227.8%20250.026C223.783%20251.322%20210.826%20251.299%20208.384%20249.991C207.982%20249.776%20207.383%20249.6%20207.054%20249.6C203.332%20249.6%20191.747%20241.12%20186.808%20234.781C186.045%20233.801%20185.304%20232.91%20185.162%20232.8C184.025%20231.92%20178.4%20221.014%20178.4%20219.688C178.4%20219.288%20178.246%20218.789%20178.058%20218.58C177.557%20218.023%20176.4%20214.204%20176.4%20213.105C176.4%20212.585%20176.237%20211.989%20176.038%20211.78C175.584%20211.304%20174.8%20206.856%20174.386%20202.4C173.292%20190.638%20173.155%20186.016%20173.611%20176.2C174.081%20166.087%20173.694%20154.745%20172.778%20151.772C172.57%20151.096%20172.4%20150.055%20172.4%20149.459C172.4%20148.862%20172.13%20147.728%20171.8%20146.938C171.47%20146.149%20171.2%20145.085%20171.2%20144.575C171.2%20144.065%20171.034%20143.545%20170.831%20143.419C170.628%20143.294%20170.339%20142.634%20170.19%20141.953C169.869%20140.493%20168.065%20136.873%20167.204%20135.96C166.671%20135.396%20166.364%20135.383%20164.6%20135.852ZM99.8969%20237.3C99.9829%20238.015%20100.203%20238.96%20100.385%20239.4C100.567%20239.84%20101.018%20241.1%20101.389%20242.2C101.759%20243.3%20102.218%20244.56%20102.409%20245C102.6%20245.44%20103.136%20246.7%20103.6%20247.8C104.588%20250.144%20106.512%20254.112%20106.8%20254.4C106.91%20254.51%20107.283%20255.14%20107.629%20255.8C107.975%20256.46%20108.515%20257.447%20108.829%20257.993C109.363%20258.922%20113.842%20265.17%20115.469%20267.255C116.566%20268.663%20125.239%20277.267%20126.607%20278.306C127.263%20278.804%20129.15%20280.202%20130.8%20281.412C132.45%20282.623%20134.017%20283.791%20134.283%20284.007C134.549%20284.223%20135.022%20284.4%20135.334%20284.4C135.646%20284.4%20136.108%20284.648%20136.359%20284.951C136.796%20285.477%20146.406%20290.4%20146.996%20290.4C147.152%20290.4%20147.846%20290.652%20148.54%20290.959C149.233%20291.267%20150.79%20291.829%20152%20292.208C153.21%20292.587%20154.519%20293.059%20154.909%20293.257C155.299%20293.455%20156.428%20293.729%20157.42%20293.865C158.411%20294.001%20159.318%20294.267%20159.435%20294.456C159.552%20294.645%20160.165%20294.8%20160.799%20294.8C161.432%20294.8%20163.087%20295.053%20164.475%20295.363C165.864%20295.672%20168.395%20296.005%20170.1%20296.103L173.2%20296.28V294.715C173.2%20293.187%20172.312%20289.692%20171.571%20288.305C171.367%20287.923%20171.2%20287.365%20171.2%20287.065C171.2%20286.567%20170.775%20285.695%20168.552%20281.624C168.138%20280.866%20167.473%20279.876%20167.073%20279.424C166.674%20278.971%20165.957%20277.97%20165.481%20277.2C164.709%20275.951%20162.561%20273.47%20160.157%20271.049C159.266%20270.152%20155.946%20267.228%20153.6%20265.275C151.988%20263.932%20144.468%20258.8%20144.113%20258.8C143.982%20258.8%20143.319%20258.384%20142.638%20257.876C141.957%20257.368%20137.98%20255.287%20133.8%20253.253C129.62%20251.218%20125.69%20249.294%20125.068%20248.977C124.445%20248.66%20123.59%20248.4%20123.168%20248.4C122.745%20248.4%20122.4%20248.22%20122.4%20248C122.4%20247.78%20122.112%20247.6%20121.761%20247.6C121.195%20247.6%20111.049%20242.73%20109.014%20241.482C108.582%20241.217%20107.052%20240.285%20105.614%20239.411C104.176%20238.536%20102.552%20237.411%20102.004%20236.911C100.521%20235.554%2099.7029%20235.706%2099.8969%20237.3Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fg%3E%0A%3Cdefs%3E%0A%3CclipPath%20id%3D%22clip0_2885_1338%22%3E%0A%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2FclipPath%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E"
                                                  />
                                                </_Builtin.Block>
                                                <_Builtin.Block
                                                  className="div-block-27"
                                                  id="w-node-f6dcefbc-75d1-249c-a70c-fc0d68e016e6-b784e17d"
                                                  tag="div"
                                                >
                                                  <_Builtin.Block
                                                    className="countresult"
                                                    id="w-node-f6dcefbc-75d1-249c-a70c-fc0d68e016e7-b784e17d"
                                                    tag="div"
                                                  >
                                                    {countBookingsPlayPadStats}
                                                  </_Builtin.Block>
                                                  <_Builtin.Block
                                                    className="countresult"
                                                    id="w-node-f6dcefbc-75d1-249c-a70c-fc0d68e016e8-b784e17d"
                                                    tag="div"
                                                  >
                                                    {countHoursPlayPad}
                                                  </_Builtin.Block>
                                                  <_Builtin.Block
                                                    className="countresult"
                                                    id="w-node-f6dcefbc-75d1-249c-a70c-fc0d68e016e9-b784e17d"
                                                    tag="div"
                                                  >
                                                    {countUsersPlayPad}
                                                  </_Builtin.Block>
                                                </_Builtin.Block>
                                              </_Builtin.Block>
                                              <_Builtin.Block
                                                className="div-block-28"
                                                id="w-node-f6dcefbc-75d1-249c-a70c-fc0d68e016ea-b784e17d"
                                                tag="div"
                                              >
                                                <_Builtin.Block
                                                  className="divtitlecard club"
                                                  tag="div"
                                                >
                                                  <_Builtin.Block
                                                    className="titleresult"
                                                    id="w-node-f6dcefbc-75d1-249c-a70c-fc0d68e016ec-b784e17d"
                                                    tag="div"
                                                  >
                                                    {clubName}
                                                  </_Builtin.Block>
                                                  <_Builtin.HtmlEmbed
                                                    className="stats_icon rate-stats"
                                                    value="%3Csvg%20width%3D%22auto%22%20height%3D%22auto%22%20viewBox%3D%220%200%2013%2014%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M9.89688%205.78345H6.72246C6.47456%205.78345%206.26897%205.57786%206.26897%205.32996C6.26897%205.08205%206.47456%204.87647%206.72246%204.87647H9.89688C10.0172%204.87647%2010.1325%204.92425%2010.2175%205.00929C10.3026%205.09434%2010.3504%205.20968%2010.3504%205.32996C10.3504%205.45023%2010.3026%205.56558%2010.2175%205.65062C10.1325%205.73567%2010.0172%205.78345%209.89688%205.78345ZM3.54804%206.24298C3.43316%206.24298%203.31828%206.20066%203.22758%206.10996L2.77409%205.65647C2.59874%205.48112%202.59874%205.19089%202.77409%205.01554C2.94944%204.84019%203.23967%204.84019%203.41502%205.01554L3.54804%205.14856L4.58804%204.10856C4.76339%203.93321%205.05362%203.93321%205.22897%204.10856C5.40432%204.28391%205.40432%204.57414%205.22897%204.74949L3.86851%206.10996C3.78354%206.19503%203.66828%206.24288%203.54804%206.24298ZM9.89688%2010.016H6.72246C6.47456%2010.016%206.26897%209.81042%206.26897%209.56252C6.26897%209.31461%206.47456%209.10903%206.72246%209.10903H9.89688C10.0172%209.10903%2010.1325%209.15681%2010.2175%209.24185C10.3026%209.3269%2010.3504%209.44224%2010.3504%209.56252C10.3504%209.68279%2010.3026%209.79813%2010.2175%209.88318C10.1325%209.96823%2010.0172%2010.016%209.89688%2010.016ZM3.54804%2010.4755C3.43316%2010.4755%203.31828%2010.4332%203.22758%2010.3425L2.77409%209.88903C2.59874%209.71368%202.59874%209.42345%202.77409%209.2481C2.94944%209.07275%203.23967%209.07275%203.41502%209.2481L3.54804%209.38112L4.58804%208.34112C4.76339%208.16577%205.05362%208.16577%205.22897%208.34112C5.40432%208.51647%205.40432%208.8067%205.22897%208.98205L3.86851%2010.3425C3.78354%2010.4276%203.66828%2010.4754%203.54804%2010.4755Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3Cpath%20d%3D%22M8.312%2013.7222H4.68409C1.40084%2013.7222%20-0.00195312%2012.3194%20-0.00195312%209.03612V5.40821C-0.00195312%202.12496%201.40084%200.722168%204.68409%200.722168H8.312C11.5953%200.722168%2012.998%202.12496%2012.998%205.40821V9.03612C12.998%2012.3194%2011.5953%2013.7222%208.312%2013.7222ZM4.68409%201.62914C1.89665%201.62914%200.905024%202.62077%200.905024%205.40821V9.03612C0.905024%2011.8236%201.89665%2012.8152%204.68409%2012.8152H8.312C11.0994%2012.8152%2012.0911%2011.8236%2012.0911%209.03612V5.40821C12.0911%202.62077%2011.0994%201.62914%208.312%201.62914H4.68409Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                                                  />
                                                </_Builtin.Block>
                                                <_Builtin.Block
                                                  className="div-block-27"
                                                  id="w-node-f6dcefbc-75d1-249c-a70c-fc0d68e016ee-b784e17d"
                                                  tag="div"
                                                >
                                                  <_Builtin.Block
                                                    className="countresult"
                                                    id="w-node-f6dcefbc-75d1-249c-a70c-fc0d68e016ef-b784e17d"
                                                    tag="div"
                                                  >
                                                    {countBookingsClubStats}
                                                  </_Builtin.Block>
                                                  <_Builtin.Block
                                                    className="countresult"
                                                    id="w-node-f6dcefbc-75d1-249c-a70c-fc0d68e016f0-b784e17d"
                                                    tag="div"
                                                  >
                                                    {countHoursClub}
                                                  </_Builtin.Block>
                                                  <_Builtin.Block
                                                    className="countresult"
                                                    id="w-node-f6dcefbc-75d1-249c-a70c-fc0d68e016f1-b784e17d"
                                                    tag="div"
                                                  >
                                                    {countUsersClub}
                                                  </_Builtin.Block>
                                                </_Builtin.Block>
                                              </_Builtin.Block>
                                            </_Builtin.Block>
                                            <_Builtin.Block
                                              className="div-block-19"
                                              id="w-node-f6dcefbc-75d1-249c-a70c-fc0d68e016f2-b784e17d"
                                              tag="div"
                                            />
                                          </_Builtin.Block>
                                        ) : null}
                                      </_Builtin.Block>
                                    </_Builtin.Block>
                                  </_Builtin.Block>
                                </_Builtin.Block>
                              </_Builtin.Block>
                            </_Builtin.Block>
                            <_Builtin.Block
                              className="div-block-7"
                              id="w-node-e7636227-2c5b-8d03-60ac-eb0f6fc8a28f-b784e17d"
                              tag="div"
                            >
                              <_Builtin.Block
                                className="stats_court bookings devlink"
                                id="w-node-_1bf7d8b1-45bf-7ee7-4978-3821b784e209-b784e17d"
                                tag="div"
                              >
                                <_Builtin.Block
                                  className="div-block-23"
                                  tag="div"
                                >
                                  <_Builtin.Block
                                    className=" stats_text-box big"
                                    tag="div"
                                  >
                                    {"Statistiques"}
                                  </_Builtin.Block>
                                  <_Builtin.Block
                                    className=" stats_text-box big title-rate"
                                    tag="div"
                                  >
                                    {periodStats}
                                  </_Builtin.Block>
                                  {isNotLoading ? (
                                    <_Builtin.Block
                                      className=" stats_text-box big"
                                      tag="div"
                                    >
                                      {"-"}
                                    </_Builtin.Block>
                                  ) : null}
                                  {isNotLoading ? (
                                    <_Builtin.Block
                                      className=" stats_text-box big"
                                      tag="div"
                                    >
                                      {countBookingsTotalStats}
                                    </_Builtin.Block>
                                  ) : null}
                                </_Builtin.Block>
                                {visibleStat ? (
                                  <_Builtin.Block
                                    className="div-block-8"
                                    tag="div"
                                  >
                                    {isLoading ? (
                                      <_Builtin.Block
                                        className="div-block-5"
                                        tag="div"
                                      >
                                        <_Builtin.Block
                                          className="block-progress small"
                                          tag="div"
                                        >
                                          {componentProgress}
                                        </_Builtin.Block>
                                      </_Builtin.Block>
                                    ) : null}
                                    <_Builtin.Block
                                      className="stat1_item-content-bottom court rate-stats"
                                      tag="div"
                                    >
                                      {isNotLoading ? (
                                        <_Builtin.Block
                                          className="div-block-11 chart-bar _2 bis"
                                          id="w-node-_065324a5-bba9-7929-b16a-5cfc7f4382eb-b784e17d"
                                          tag="div"
                                        >
                                          <_Builtin.Block
                                            className="div-block-21"
                                            tag="div"
                                          >
                                            {componentChartCountBySite}
                                          </_Builtin.Block>
                                        </_Builtin.Block>
                                      ) : null}
                                    </_Builtin.Block>
                                  </_Builtin.Block>
                                ) : null}
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Block>
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block className="section_shell3-layout" tag="div">
                  <_Builtin.Block
                    className="padding-horizontal padding-medium"
                    tag="div"
                  >
                    <_Builtin.Block className="container-large" tag="div">
                      <_Builtin.Block className="padding-vertical" tag="div">
                        <_Builtin.Block className="stats_grid" tag="div">
                          <_Builtin.Block
                            className="card chart_line devlink"
                            id="w-node-_1bf7d8b1-45bf-7ee7-4978-3821b784e23f-b784e17d"
                            tag="div"
                          >
                            <_Builtin.Block
                              className="card_header chart_line"
                              tag="div"
                            >
                              <_Builtin.Block
                                className="card_header_content"
                                tag="div"
                              >
                                <_Builtin.Block
                                  className="heading-style-h5"
                                  tag="div"
                                >
                                  {"Revenu Total"}
                                </_Builtin.Block>
                              </_Builtin.Block>
                              <ButtonPrimary action={actionUpdate} />
                            </_Builtin.Block>
                            <_Builtin.Block className="revenue_chart" tag="div">
                              {isNotLoading ? (
                                <_Builtin.Block
                                  className="chart_embed final"
                                  tag="div"
                                >
                                  <_Builtin.Block
                                    className="chartline"
                                    tag="div"
                                  >
                                    {componentChartRevenues}
                                  </_Builtin.Block>
                                </_Builtin.Block>
                              ) : null}
                              {isLoading ? (
                                <_Builtin.Block
                                  className="div-block-5"
                                  tag="div"
                                >
                                  <_Builtin.Block
                                    className="block-progress small"
                                    tag="div"
                                  >
                                    {componentProgress}
                                  </_Builtin.Block>
                                </_Builtin.Block>
                              ) : null}
                            </_Builtin.Block>
                          </_Builtin.Block>
                          <_Builtin.Block
                            className="card devlink"
                            id="w-node-_1bf7d8b1-45bf-7ee7-4978-3821b784e251-b784e17d"
                            tag="div"
                          >
                            <_Builtin.Block className="card_header" tag="div">
                              <_Builtin.Block
                                className="card_header_content booking-list"
                                tag="div"
                              >
                                <_Builtin.Block
                                  className="heading-style-h5"
                                  tag="div"
                                >
                                  {"Réservations PlayPad"}
                                </_Builtin.Block>
                                <_Builtin.Block
                                  className="div-block-30"
                                  tag="div"
                                >
                                  <_Builtin.Block
                                    className="heading-style-h5"
                                    tag="div"
                                  >
                                    {"("}
                                  </_Builtin.Block>
                                  {isNotLoading ? (
                                    <_Builtin.Block
                                      className="heading-style-h5 count-booking-playpad"
                                      tag="div"
                                    >
                                      {nAllBookings}
                                    </_Builtin.Block>
                                  ) : null}
                                  <_Builtin.Block
                                    className="heading-style-h5"
                                    tag="div"
                                  >
                                    {")"}
                                  </_Builtin.Block>
                                </_Builtin.Block>
                              </_Builtin.Block>
                              <ButtonPrimary action={actionUpdate} />
                            </_Builtin.Block>
                            <_Builtin.Block className="card_line" tag="div">
                              <_Builtin.Block
                                className="div-block-31"
                                tag="div"
                              >
                                {isNotLoading ? (
                                  <_Builtin.Block
                                    className="div-block-29"
                                    tag="div"
                                  >
                                    <_Builtin.Block
                                      className="div-block-bookings"
                                      tag="div"
                                    >
                                      {componentListBookings}
                                    </_Builtin.Block>
                                  </_Builtin.Block>
                                ) : null}
                                {isLoading ? (
                                  <_Builtin.Block
                                    className="div-block-5"
                                    tag="div"
                                  >
                                    <_Builtin.Block
                                      className="block-progress small"
                                      tag="div"
                                    >
                                      {componentProgress}
                                    </_Builtin.Block>
                                  </_Builtin.Block>
                                ) : null}
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Block>
                          <_Builtin.Block
                            className="card taux-occupation-chart"
                            id="w-node-_1bf7d8b1-45bf-7ee7-4978-3821b784e270-b784e17d"
                            tag="div"
                          >
                            <_Builtin.Block className="card_header" tag="div">
                              <_Builtin.Block
                                className="card_header_content"
                                tag="div"
                              >
                                <_Builtin.Block
                                  className="heading-style-h5"
                                  tag="div"
                                >
                                  {"Taux d'occupation"}
                                </_Builtin.Block>
                                <_Builtin.Block
                                  className="text-size-large"
                                  tag="div"
                                  wized="total_occupations"
                                >
                                  {"0 %"}
                                </_Builtin.Block>
                                <_Builtin.NotSupported _atom="Animation" />
                              </_Builtin.Block>
                            </_Builtin.Block>
                            <_Builtin.Block className="revenue_chart" tag="div">
                              <_Builtin.HtmlEmbed
                                className="chart_embed"
                                value="%3Ccanvas%20id%3D%22occupationChart%22%20height%3D%22auto%22%20width%3D%22auto%22%3E%3C%2Fcanvas%3E"
                              />
                              <_Builtin.NotSupported _atom="Animation" />
                            </_Builtin.Block>
                          </_Builtin.Block>
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <DialogUpdateBooking
        styleDialogEditBooking={styleDialogEditBooking}
        editable={editable}
        close={closeDialogBooking}
        bookingDescription={bookingDescription}
        bookingDuration={bookingDuration}
        bookingMatchDate={bookingMatchDate}
        bookingSite={bookingSite}
        bookingCourt={bookingCourt}
        bookingType={bookingType}
        clientEmail={clientEmail}
        clientPhone={clientPhone}
        clientName={clientName}
        notEditable={notEditable}
        accessCode={accessCode}
        transactionUid={transactionUid}
        bookingUid={bookingUid}
        isWebAppBooking={isWebAppBooking}
        bookingCreatedDate={bookingCreatedDate}
        hasTransaction={hasTransaction}
      />
    </_Component>
  );
}
