"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import { GlobalStyles } from "./GlobalStyles";
import { DialogCreateBooking } from "./DialogCreateBooking";
import { DialogUpdateBooking } from "./DialogUpdateBooking";
import { DialogResetBooking } from "./DialogResetBooking";
import { SidebarDevlink } from "./SidebarDevlink";
import { DevLinkNavBarSwitchTheme } from "./DevLinkNavBarSwitchTheme";
import { ButtonPrimary } from "./ButtonPrimary";

const _interactionsData = JSON.parse(
  '{"events":{"e-9":{"id":"e-9","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-304"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"1bf7d8b1-45bf-7ee7-4978-3821b784e19b","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"1bf7d8b1-45bf-7ee7-4978-3821b784e19b","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1684414757890},"e-7":{"id":"e-7","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-306"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"1bf7d8b1-45bf-7ee7-4978-3821b784e19d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"1bf7d8b1-45bf-7ee7-4978-3821b784e19d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1684414757890},"e-16":{"id":"e-16","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-17"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"65edcb06e424209e95092c7e|1fc86f64-e14b-b0d7-6c3f-bb9669afcfbf","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65edcb06e424209e95092c7e|1fc86f64-e14b-b0d7-6c3f-bb9669afcfbf","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1706887097380},"e-18":{"id":"e-18","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-19"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"65edcb06e424209e95092c7e|1fc86f64-e14b-b0d7-6c3f-bb9669afcfc1","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65edcb06e424209e95092c7e|1fc86f64-e14b-b0d7-6c3f-bb9669afcfc1","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1706887097380},"e-20":{"id":"e-20","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-21"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"65edcb06e424209e95092c82|1fc86f64-e14b-b0d7-6c3f-bb9669afcfbf","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65edcb06e424209e95092c82|1fc86f64-e14b-b0d7-6c3f-bb9669afcfbf","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1708104615453},"e-22":{"id":"e-22","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-23"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"65edcb06e424209e95092c82|1fc86f64-e14b-b0d7-6c3f-bb9669afcfc1","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65edcb06e424209e95092c82|1fc86f64-e14b-b0d7-6c3f-bb9669afcfc1","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1708104615453},"e-24":{"id":"e-24","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-25"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"65edcb06e424209e95092c83|1fc86f64-e14b-b0d7-6c3f-bb9669afcfbf","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65edcb06e424209e95092c83|1fc86f64-e14b-b0d7-6c3f-bb9669afcfbf","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1708104787165},"e-26":{"id":"e-26","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-27"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"65edcb06e424209e95092c83|1fc86f64-e14b-b0d7-6c3f-bb9669afcfc1","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65edcb06e424209e95092c83|1fc86f64-e14b-b0d7-6c3f-bb9669afcfc1","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1708104787165},"e-160":{"id":"e-160","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-161"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"6650fca0bdd809151a219ff1|1fc86f64-e14b-b0d7-6c3f-bb9669afcfbf","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6650fca0bdd809151a219ff1|1fc86f64-e14b-b0d7-6c3f-bb9669afcfbf","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1716583585383},"e-162":{"id":"e-162","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-163"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"6650fca0bdd809151a219ff1|1fc86f64-e14b-b0d7-6c3f-bb9669afcfc1","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6650fca0bdd809151a219ff1|1fc86f64-e14b-b0d7-6c3f-bb9669afcfc1","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1716583585383},"e-204":{"id":"e-204","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-36","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-205"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"65edcb06e424209e95092c80|4d7cab3d-9000-1d9f-aefe-022edc3ae44f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65edcb06e424209e95092c80|4d7cab3d-9000-1d9f-aefe-022edc3ae44f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1727470895089},"e-206":{"id":"e-206","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-36","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-207"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"65edcb06e424209e95092c80|4d7cab3d-9000-1d9f-aefe-022edc3ae451","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65edcb06e424209e95092c80|4d7cab3d-9000-1d9f-aefe-022edc3ae451","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1727470895089},"e-258":{"id":"e-258","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-305"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"3bf6ef48-906c-6954-3b84-47cb5cf21b00","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"3bf6ef48-906c-6954-3b84-47cb5cf21b00","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1727734053325},"e-260":{"id":"e-260","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-307"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"3bf6ef48-906c-6954-3b84-47cb5cf21b02","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"3bf6ef48-906c-6954-3b84-47cb5cf21b02","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1727734053325},"e-262":{"id":"e-262","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-17","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-309"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"3bf6ef48-906c-6954-3b84-47cb5cf21b17","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"3bf6ef48-906c-6954-3b84-47cb5cf21b17","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1727734053325},"e-274":{"id":"e-274","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-275"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"cd5dc5ca-f5d4-aeec-6107-f3c88afbc67c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"cd5dc5ca-f5d4-aeec-6107-f3c88afbc67c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1727736126886},"e-276":{"id":"e-276","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-277"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"cd5dc5ca-f5d4-aeec-6107-f3c88afbc67e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"cd5dc5ca-f5d4-aeec-6107-f3c88afbc67e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1727736126886},"e-298":{"id":"e-298","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-305"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"0f103e9a-02fc-bbae-2ea7-466330996187","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"0f103e9a-02fc-bbae-2ea7-466330996187","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1727736965141},"e-300":{"id":"e-300","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-307"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"0f103e9a-02fc-bbae-2ea7-466330996189","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"0f103e9a-02fc-bbae-2ea7-466330996189","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1727736965141},"e-308":{"id":"e-308","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-309"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"56d276ce-6ef8-b699-75b4-3571b6bf318f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"56d276ce-6ef8-b699-75b4-3571b6bf318f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1727737404364},"e-310":{"id":"e-310","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-311"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"56d276ce-6ef8-b699-75b4-3571b6bf3191","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"56d276ce-6ef8-b699-75b4-3571b6bf3191","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1727737404364}},"actionLists":{"a-8":{"id":"a-8","title":"Topbar 3 Search [Close]","actionItemGroups":[{"actionItems":[{"id":"a-8-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuad","duration":200,"target":{"selector":".topbar3_search-tablet","selectorGuids":["46f22993-c095-a3c8-9aa4-d6a267c87fcd"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-8-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".topbar3_search-tablet","selectorGuids":["46f22993-c095-a3c8-9aa4-d6a267c87fcd"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1684414258357},"a-36":{"id":"a-36","title":"Topbar 3 Search [Close] 2","actionItemGroups":[{"actionItems":[{"id":"a-36-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuad","duration":200,"target":{"selector":".topbar3_search-tablet","selectorGuids":["46f22993-c095-a3c8-9aa4-d6a267c87fcd"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-36-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".topbar3_search-tablet","selectorGuids":["46f22993-c095-a3c8-9aa4-d6a267c87fcd"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1684414258357},"a-17":{"id":"a-17","title":"Booking Add Modal [Open]","actionItemGroups":[{"actionItems":[{"id":"a-17-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".booking_add_modal_component","selectorGuids":["1c7b8a9c-e3ea-e17e-b62b-25f5683bd7d4"]},"value":"none"}},{"id":"a-17-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".booking_add_modal_content-wrapper","selectorGuids":["1c7b8a9c-e3ea-e17e-b62b-25f5683bd7d5"]},"xValue":100,"xUnit":"%","yUnit":"PX","zUnit":"PX"}},{"id":"a-17-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".booking_add_modal_background-overlay","selectorGuids":["1c7b8a9c-e3ea-e17e-b62b-25f5683bd7d9"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-17-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".booking_add_modal_component","selectorGuids":["1c7b8a9c-e3ea-e17e-b62b-25f5683bd7d4"]},"value":"flex"}},{"id":"a-17-n-5","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuad","duration":500,"target":{"selector":".booking_add_modal_content-wrapper","selectorGuids":["1c7b8a9c-e3ea-e17e-b62b-25f5683bd7d5"]},"xValue":0,"xUnit":"%","yUnit":"PX","zUnit":"PX"}},{"id":"a-17-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":500,"target":{"selector":".booking_add_modal_background-overlay","selectorGuids":["1c7b8a9c-e3ea-e17e-b62b-25f5683bd7d9"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1644220869174}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function CalendarPage({
  as: _Component = _Builtin.Block,
  titlePage = "Calendrier",
  clubName = "PlayPad Test",
  clubLogo = "https://cdn.prod.website-files.com/64ad6274d8c64f92f123999e/65da7ead8c280d989d9bd5d3_ball-logo.png",
  disconnectButtonProps,

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

  styleCalendar,
  componentCalendar,
  componentSwitch,
  componentLogoClub,
  isLoading = true,
  componentProgress,
  isNotLoading = true,
  componentSite,
  componentCourts,
  actionUpdate = {},
  nBookings = "(12)",
  nPendingBookings = "(1)",
  editable = true,
  closeDialogUpdateBooking = {},
  styleDialogEditBooking,
  isWebAppBooking = true,
  transactionUid = "--",
  bookingUid = "ROksz0ABcdeD52HG4Kcx",
  accessCode = "--",
  clientName = "--",
  clientPhone = "--",
  clientEmail = "--",
  hasTransaction = true,
  bookingType = "--",
  bookingCourt = "--",
  bookingSite = "--",
  bookingMatchDate = "--",
  bookingDuration = "--",
  bookingDescription = "--",
  bookingCreatedDate = "--",
  notEditable = true,
  paymentProvider = "--",
  refNo = "--",
  paymentDate = "--",
  walletUsedAmount = "--",
  cardUsedAmount = "--",
  totalAmount = "--",
  removable = true,
  isLoadingUpdateBooking = true,
  isNotLoadingUpdateBooking = true,
  componentProgressUpdateBooking,
  isError = true,
  isSuccess = true,
  errorMessage = "Cette plage horaire est déjà occupée !",
  successMessage = "La réservation a bien été modifiée !",
  waitMessage = "patientez svp",
  isWarning = true,
  warningMessage = "La réservation sera crée 18 fois !",
  isNotWarning = true,
  actionResetDialogUpdate,
  updateBooking,
  inputDate,
  selectStartHour,
  selectEndHour,
  selectTypeBooking,
  textFieldDescription,
  selectDuration,
  isEditing = true,
  isDifferentDatas = true,
  isDisabled = true,
  isNotDisabled = true,
  isReseting = true,
  openResetingDialog,
  styleDialogResetBooking = {},
  closeResetingDialog = {},
  isLoadingReset = true,
  isDeleting = true,
  isSuccessDeleting = true,
  deleteBooking,
  styleDialogDelete = {},
  closeDialogDelete = {},
  openDialogDelete = {},
  isErrorDeleting = true,
<<<<<<< HEAD
<<<<<<< HEAD
  messageErrorDeleting = "Une erreur est survenue !",
  showButtonsDialogDelete = true,
  closeAllDialogs,
=======
>>>>>>> bb43e94 (add dialog delete booking)
=======
  messageErrorDeleting = "Une erreur est survenue !",
  showButtonsDialogDelete = true,
  closeAllDialogs,
>>>>>>> 1bc3946 (last version to be sure)
}) {
  _interactions.useInteractions(_interactionsData);

  return (
    <_Component className="page-wrapper devlink" tag="div">
      <GlobalStyles />
      <DialogCreateBooking />
      <DialogUpdateBooking
        editable={editable}
        close={closeDialogUpdateBooking}
        styleDialogEditBooking={styleDialogEditBooking}
        transactionUid={transactionUid}
        bookingUid={bookingUid}
        accessCode={accessCode}
        clientName={clientName}
        clientPhone={clientPhone}
        clientEmail={clientEmail}
        hasTransaction={hasTransaction}
        bookingType={bookingType}
        bookingCourt={bookingCourt}
        bookingSite={bookingSite}
        bookingMatchDate={bookingMatchDate}
        bookingDuration={bookingDuration}
        bookingDescription={bookingDescription}
        bookingCreatedDate={bookingCreatedDate}
        notEditable={notEditable}
        paymentProvider={paymentProvider}
        refNo={refNo}
        paymentDate={paymentDate}
        walletUsedAmount={walletUsedAmount}
        cardUsedAmount={cardUsedAmount}
        totalAmount={totalAmount}
        removable={removable}
        isLoading={isLoadingUpdateBooking}
        isNotLoading={isNotLoadingUpdateBooking}
        componentProgressUpdateBooking={componentProgressUpdateBooking}
        isEditing={isEditing}
        componentProgress={componentProgress}
        isError={isError}
        isSuccess={isSuccess}
        errorMessage={errorMessage}
        successMessage={successMessage}
        waitMessage={waitMessage}
        isWarning={isWarning}
        warningMessage={warningMessage}
        isNotWarning={isNotWarning}
        actionReset={actionResetDialogUpdate}
        update={updateBooking}
        inputDate={inputDate}
        selectStartHour={selectStartHour}
        selectEndHour={selectEndHour}
        selectTypeBooking={selectTypeBooking}
        textFieldDescription={textFieldDescription}
        selectDuration={selectDuration}
        isDifferentDatas={isDifferentDatas}
        isDisabled={isDisabled}
        isNotDisabled={isNotDisabled}
        openResetingDialog={openResetingDialog}
        openDialogDelete={openDialogDelete}
      />
      <DialogResetBooking
        actionReset={actionResetDialogUpdate}
        styleDialogResetBooking={styleDialogResetBooking}
        close={closeResetingDialog}
        isLoading={isLoadingReset}
        componentProgress={componentProgress}
      />
      <DialogDeleteBooking
        isDeleting={isDeleting}
        isSuccessDeleting={isSuccessDeleting}
        deleteBooking={deleteBooking}
        componentProgress={componentProgress}
        styleDialogDelete={styleDialogDelete}
        close={closeDialogDelete}
        isErrorDeleting={isErrorDeleting}
      />
      <_Builtin.Block className="main-wrapper" tag="main">
        <_Builtin.Block className="page-wrapper div-block-53" tag="div">
          <_Builtin.HtmlEmbed
            className="global-styles"
            value="%3Cstyle%3E%0A%0A%2F*%20Set%20color%20style%20to%20inherit%20*%2F%0A.inherit-color%20*%20%7B%0A%20%20%20%20color%3A%20inherit%3B%0A%7D%0A%0A%2F*%20Focus%20state%20style%20for%20keyboard%20navigation%20for%20the%20focusable%20elements%20*%2F%0A*%5Btabindex%5D%3Afocus-visible%2C%0A%20%20input%5Btype%3D%22file%22%5D%3Afocus-visible%20%7B%0A%20%20%20outline%3A%200.125rem%20solid%20%234d65ff%3B%0A%20%20%20outline-offset%3A%200.125rem%3B%0A%7D%0A%0A%2F*%20Get%20rid%20of%20top%20margin%20on%20first%20element%20in%20any%20rich%20text%20element%20*%2F%0A.w-richtext%20%3E%20%3Anot(div)%3Afirst-child%2C%20.w-richtext%20%3E%20div%3Afirst-child%20%3E%20%3Afirst-child%20%7B%0A%20%20margin-top%3A%200%20!important%3B%0A%7D%0A%0A%2F*%20Get%20rid%20of%20bottom%20margin%20on%20last%20element%20in%20any%20rich%20text%20element%20*%2F%0A.w-richtext%3E%3Alast-child%2C%20.w-richtext%20ol%20li%3Alast-child%2C%20.w-richtext%20ul%20li%3Alast-child%20%7B%0A%09margin-bottom%3A%200%20!important%3B%0A%7D%0A%0A%2F*%20Prevent%20all%20click%20and%20hover%20interaction%20with%20an%20element%20*%2F%0A.pointer-events-off%20%7B%0A%09pointer-events%3A%20none%3B%0A%7D%0A%0A%2F*%20Enables%20all%20click%20and%20hover%20interaction%20with%20an%20element%20*%2F%0A.pointer-events-on%20%7B%0A%20%20pointer-events%3A%20auto%3B%0A%7D%0A%0A%2F*%20Create%20a%20class%20of%20.div-square%20which%20maintains%20a%201%3A1%20dimension%20of%20a%20div%20*%2F%0A.div-square%3A%3Aafter%20%7B%0A%09content%3A%20%22%22%3B%0A%09display%3A%20block%3B%0A%09padding-bottom%3A%20100%25%3B%0A%7D%0A%0A%2F*%20Make%20sure%20containers%20never%20lose%20their%20center%20alignment%20*%2F%0A.container-medium%2C.container-small%2C%20.container-large%20%7B%0A%09margin-right%3A%20auto%20!important%3B%0A%20%20margin-left%3A%20auto%20!important%3B%0A%7D%0A%0A%2F*%20%0AMake%20the%20following%20elements%20inherit%20typography%20styles%20from%20the%20parent%20and%20not%20have%20hardcoded%20values.%20%0AImportant%3A%20You%20will%20not%20be%20able%20to%20style%20for%20example%20%22All%20Links%22%20in%20Designer%20with%20this%20CSS%20applied.%0AUncomment%20this%20CSS%20to%20use%20it%20in%20the%20project.%20Leave%20this%20message%20for%20future%20hand-off.%0A*%2F%0A%2F*%0Aa%2C%0A.w-input%2C%0A.w-select%2C%0A.w-tab-link%2C%0A.w-nav-link%2C%0A.w-dropdown-btn%2C%0A.w-dropdown-toggle%2C%0A.w-dropdown-link%20%7B%0A%20%20color%3A%20inherit%3B%0A%20%20text-decoration%3A%20inherit%3B%0A%20%20font-size%3A%20inherit%3B%0A%7D%0A*%2F%0A%0A%2F*%20Apply%20%22...%22%20after%203%20lines%20of%20text%20*%2F%0A.text-style-3lines%20%7B%0A%09display%3A%20-webkit-box%3B%0A%09overflow%3A%20hidden%3B%0A%09-webkit-line-clamp%3A%203%3B%0A%09-webkit-box-orient%3A%20vertical%3B%0A%7D%0A%0A%2F*%20Apply%20%22...%22%20after%202%20lines%20of%20text%20*%2F%0A.text-style-2lines%20%7B%0A%09display%3A%20-webkit-box%3B%0A%09overflow%3A%20hidden%3B%0A%09-webkit-line-clamp%3A%202%3B%0A%09-webkit-box-orient%3A%20vertical%3B%0A%7D%0A%0A%2F*%20Adds%20inline%20flex%20display%20*%2F%0A.display-inlineflex%20%7B%0A%20%20display%3A%20inline-flex%3B%0A%7D%0A%0A%2F*%20These%20classes%20are%20never%20overwritten%20*%2F%0A.hide%20%7B%0A%20%20display%3A%20none%20!important%3B%0A%7D%0A%0A%40media%20screen%20and%20(max-width%3A%20991px)%20%7B%0A%20%20%20%20.hide%2C%20.hide-tablet%20%7B%0A%20%20%20%20%20%20%20%20display%3A%20none%20!important%3B%0A%20%20%20%20%7D%0A%7D%0A%20%20%40media%20screen%20and%20(max-width%3A%20767px)%20%7B%0A%20%20%20%20.hide-mobile-landscape%7B%0A%20%20%20%20%20%20display%3A%20none%20!important%3B%0A%20%20%20%20%7D%0A%7D%0A%20%20%40media%20screen%20and%20(max-width%3A%20479px)%20%7B%0A%20%20%20%20.hide-mobile%7B%0A%20%20%20%20%20%20display%3A%20none%20!important%3B%0A%20%20%20%20%7D%0A%7D%0A%20%0A.margin-0%20%7B%0A%20%20margin%3A%200rem%20!important%3B%0A%7D%0A%20%20%0A.padding-0%20%7B%0A%20%20padding%3A%200rem%20!important%3B%0A%7D%0A%0A.spacing-clean%20%7B%0Apadding%3A%200rem%20!important%3B%0Amargin%3A%200rem%20!important%3B%0A%7D%0A%0A.margin-top%20%7B%0A%20%20margin-right%3A%200rem%20!important%3B%0A%20%20margin-bottom%3A%200rem%20!important%3B%0A%20%20margin-left%3A%200rem%20!important%3B%0A%7D%0A%0A.padding-top%20%7B%0A%20%20padding-right%3A%200rem%20!important%3B%0A%20%20padding-bottom%3A%200rem%20!important%3B%0A%20%20padding-left%3A%200rem%20!important%3B%0A%7D%0A%20%20%0A.margin-right%20%7B%0A%20%20margin-top%3A%200rem%20!important%3B%0A%20%20margin-bottom%3A%200rem%20!important%3B%0A%20%20margin-left%3A%200rem%20!important%3B%0A%7D%0A%0A.padding-right%20%7B%0A%20%20padding-top%3A%200rem%20!important%3B%0A%20%20padding-bottom%3A%200rem%20!important%3B%0A%20%20padding-left%3A%200rem%20!important%3B%0A%7D%0A%0A.margin-bottom%20%7B%0A%20%20margin-top%3A%200rem%20!important%3B%0A%20%20margin-right%3A%200rem%20!important%3B%0A%20%20margin-left%3A%200rem%20!important%3B%0A%7D%0A%0A.padding-bottom%20%7B%0A%20%20padding-top%3A%200rem%20!important%3B%0A%20%20padding-right%3A%200rem%20!important%3B%0A%20%20padding-left%3A%200rem%20!important%3B%0A%7D%0A%0A.margin-left%20%7B%0A%20%20margin-top%3A%200rem%20!important%3B%0A%20%20margin-right%3A%200rem%20!important%3B%0A%20%20margin-bottom%3A%200rem%20!important%3B%0A%7D%0A%20%20%0A.padding-left%20%7B%0A%20%20padding-top%3A%200rem%20!important%3B%0A%20%20padding-right%3A%200rem%20!important%3B%0A%20%20padding-bottom%3A%200rem%20!important%3B%0A%7D%0A%20%20%0A.margin-horizontal%20%7B%0A%20%20margin-top%3A%200rem%20!important%3B%0A%20%20margin-bottom%3A%200rem%20!important%3B%0A%7D%0A%0A.padding-horizontal%20%7B%0A%20%20padding-top%3A%200rem%20!important%3B%0A%20%20padding-bottom%3A%200rem%20!important%3B%0A%7D%0A%0A.margin-vertical%20%7B%0A%20%20margin-right%3A%200rem%20!important%3B%0A%20%20margin-left%3A%200rem%20!important%3B%0A%7D%0A%20%20%0A.padding-vertical%20%7B%0A%20%20padding-right%3A%200rem%20!important%3B%0A%20%20padding-left%3A%200rem%20!important%3B%0A%7D%0A%0A%2F*%20Apply%20%22...%22%20at%20100%25%20width%20*%2F%0A.truncate-width%20%7B%20%0A%09%09width%3A%20100%25%3B%20%0A%20%20%20%20white-space%3A%20nowrap%3B%20%0A%20%20%20%20overflow%3A%20hidden%3B%20%0A%20%20%20%20text-overflow%3A%20ellipsis%3B%20%0A%7D%0A%2F*%20Removes%20native%20scrollbar%20*%2F%0A.no-scrollbar%20%7B%0A%20%20%20%20-ms-overflow-style%3A%20none%3B%0A%20%20%20%20overflow%3A%20-moz-scrollbars-none%3B%20%0A%7D%0A%0A.no-scrollbar%3A%3A-webkit-scrollbar%20%7B%0A%20%20%20%20display%3A%20none%3B%0A%7D%0A%0A%3C%2Fstyle%3E"
          />
          <_Builtin.Block className="shell3_wrapper" tag="div">
            <_Builtin.Block className="shell3_sidebar-wrapper" tag="div">
              <SidebarDevlink
                disconnectButtonProps={disconnectButtonProps}
                linkDashboard={linkDashboard}
                linkManage={linkManage}
                linkCalendar={linkCalendar}
                linkBilling={linkBilling}
                linkClub={linkClub}
                linkSettings={linkSettings}
                styleCalendar={styleCalendar}
              />
            </_Builtin.Block>
            <_Builtin.Block className="shell3_main-wrapper" tag="main">
              <_Builtin.Block
                className="topbar3_component box-shadow"
                tag="div"
              >
                <_Builtin.Block className="topbar3_container" tag="div">
                  <_Builtin.Block
                    className="top_bar-heading"
                    id="w-node-_3bf6ef48-906c-6954-3b84-47cb5cf21aed-685a452c"
                    tag="div"
                  >
                    <_Builtin.HtmlEmbed
                      className="icon-embed-xxsmall"
                      value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20x%3D%220%22%20y%3D%220%22%20viewBox%3D%220%200%2034%2034%22%20style%3D%22enable-background%3Anew%200%200%20512%20512%22%20xml%3Aspace%3D%22preserve%22%3E%3Cg%3E%3Cpath%20d%3D%22M29.6%202h-3v3c0%20.6-.5%201-1%201s-1-.4-1-1V2h-16v3c0%20.6-.5%201-1%201s-1-.4-1-1V2h-3C2.1%202%201%203.3%201%205v3.6h32V5c0-1.7-1.8-3-3.4-3zM1%2010.7V29c0%201.8%201.1%203%202.7%203h26c1.6%200%203.4-1.3%203.4-3V10.7zm8.9%2016.8H7.5c-.4%200-.8-.3-.8-.8v-2.5c0-.4.3-.8.8-.8H10c.4%200%20.8.3.8.8v2.5c-.1.5-.4.8-.9.8zm0-9H7.5c-.4%200-.8-.3-.8-.8v-2.5c0-.4.3-.8.8-.8H10c.4%200%20.8.3.8.8v2.5c-.1.5-.4.8-.9.8zm8%209h-2.5c-.4%200-.8-.3-.8-.8v-2.5c0-.4.3-.8.8-.8h2.5c.4%200%20.8.3.8.8v2.5c0%20.5-.3.8-.8.8zm0-9h-2.5c-.4%200-.8-.3-.8-.8v-2.5c0-.4.3-.8.8-.8h2.5c.4%200%20.8.3.8.8v2.5c0%20.5-.3.8-.8.8zm8%209h-2.5c-.4%200-.8-.3-.8-.8v-2.5c0-.4.3-.8.8-.8h2.5c.4%200%20.8.3.8.8v2.5c0%20.5-.3.8-.8.8zm0-9h-2.5c-.4%200-.8-.3-.8-.8v-2.5c0-.4.3-.8.8-.8h2.5c.4%200%20.8.3.8.8v2.5c0%20.5-.3.8-.8.8z%22%20fill%3D%22currentColor%22%20opacity%3D%221%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                    />
                    <_Builtin.Block className="devlink" tag="div">
                      {titlePage}
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <DevLinkNavBarSwitchTheme
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
                      data-w-id="3bf6ef48-906c-6954-3b84-47cb5cf21b00"
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
                    data-w-id="3bf6ef48-906c-6954-3b84-47cb5cf21b02"
                    tag="div"
                  />
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className="shell3_inner-wrapper devlink"
                tag="div"
              >
                <_Builtin.HtmlEmbed
                  className="shell3_inner-wrapper-height"
                  value="%3Cstyle%3E%0A%2F*%20This%20code%20adjusts%20the%20height%20of%20the%20main%20content%20to%20work%20with%20the%20topbar%20and%20fit%20within%20the%20viewport%20height%20*%2F%0A.shell3_inner-wrapper%20%7B%0A%20%20height%3A%20calc(100vh%20-%204.5rem)%3B%20%2F*%204.5rem%20reflects%20the%20height%20of%20the%20topbar%20*%2F%0A%7D%0A%3C%2Fstyle%3E"
                />
                <_Builtin.Block
                  className="section_shell3-layout devlink"
                  tag="div"
                >
                  <_Builtin.Block
                    className="padding-horizontal padding-medium"
                    tag="div"
                  >
                    <_Builtin.Block className="container-large" tag="div">
                      <_Builtin.Block
                        className="padding-vertical padding-small"
                        tag="div"
                      >
                        <_Builtin.Block
                          className="padding-bottom padding-small"
                          id="w-node-_3bf6ef48-906c-6954-3b84-47cb5cf21b09-685a452c"
                          tag="div"
                        >
                          <_Builtin.Block
                            className="card"
                            id="w-node-_3bf6ef48-906c-6954-3b84-47cb5cf21b0a-685a452c"
                            tag="div"
                            wized="calendar_card"
                            wized-cloak=""
                          >
                            <_Builtin.Block
                              className="margin-bottom margin-medium devlink"
                              tag="div"
                            >
                              <_Builtin.Block
                                className="display-inlineflex custom-flex devlink"
                                tag="div"
                              >
                                <_Builtin.Block
                                  className="button-group"
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
                                  <ButtonPrimary action={actionUpdate} />
                                  <_Builtin.Block
                                    className="button is-xsmall update all-data final error"
                                    tag="div"
                                    {...actionUpdate}
                                  >
                                    <_Builtin.Block
                                      className="text-block-13"
                                      tag="div"
                                    >
                                      {"Open booking test"}
                                    </_Builtin.Block>
                                  </_Builtin.Block>
                                </_Builtin.Block>
                                <_Builtin.Block tag="div">
                                  <_Builtin.Block
                                    className="button is-icon is-tiny green devlink"
                                    data-w-id="3bf6ef48-906c-6954-3b84-47cb5cf21b17"
                                    tag="div"
                                  >
                                    <_Builtin.Block tag="div">
                                      {"Créer une réservation"}
                                    </_Builtin.Block>
                                    <_Builtin.HtmlEmbed
                                      className="icon-1x1-small"
                                      value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20width%3D%22auto%22%20height%3D%22auto%22%20x%3D%220%22%20y%3D%220%22%20viewBox%3D%220%200%2032%2032%22%20style%3D%22enable-background%3Anew%200%200%20512%20512%22%20xml%3Aspace%3D%22preserve%22%20class%3D%22%22%3E%3Cg%3E%3Cg%20data-name%3D%22Layer%202%22%3E%3Cpath%20d%3D%22M27%204h-4V3a1%201%200%200%200-2%200v1H11V3a1%201%200%200%200-2%200v1H5a3%203%200%200%200-3%203v20a3%203%200%200%200%203%203h22a3%203%200%200%200%203-3V7a3%203%200%200%200-3-3zM5%206h22a1%201%200%200%201%201%201v3H4V7a1%201%200%200%201%201-1zm22%2022H5a1%201%200%200%201-1-1V12h24v15a1%201%200%200%201-1%201z%22%20fill%3D%22currentColor%22%20opacity%3D%221%22%20data-original%3D%22%23000000%22%20class%3D%22%22%2F%3E%3Cpath%20d%3D%22m20.35%2015.241-6.3%205.4-2.346-2.345a1%201%200%200%200-1.414%201.414l3%203a1%201%200%200%200%201.357.052l7-6a1%201%200%201%200-1.3-1.518z%22%20fill%3D%22currentColor%22%20opacity%3D%221%22%20data-original%3D%22%23000000%22%20class%3D%22%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                                    />
                                  </_Builtin.Block>
                                </_Builtin.Block>
                              </_Builtin.Block>
                            </_Builtin.Block>
                            <_Builtin.Block className="div-block-49" tag="div">
                              <_Builtin.Block
                                className="div-block-51 confirmed"
                                tag="div"
                              >
                                <_Builtin.Block
                                  className="div-block-50 club"
                                  tag="div"
                                />
                                <_Builtin.Block className="devlink" tag="div">
                                  {"Confirmés"}
                                </_Builtin.Block>
                                {isNotLoading ? (
                                  <_Builtin.Block className="devlink" tag="div">
                                    {nBookings}
                                  </_Builtin.Block>
                                ) : null}
                              </_Builtin.Block>
                              <_Builtin.Block
                                className="div-block-51 club"
                                tag="div"
                              >
                                <_Builtin.Block
                                  className="div-block-50 club"
                                  tag="div"
                                />
                                <_Builtin.Block className="devlink" tag="div">
                                  {clubName}
                                </_Builtin.Block>
                              </_Builtin.Block>
                              <_Builtin.Block
                                className="div-block-51 playpad"
                                tag="div"
                              >
                                <_Builtin.Block
                                  className="div-block-50"
                                  tag="div"
                                />
                                <_Builtin.Block className="devlink" tag="div">
                                  {"PlayPad"}
                                </_Builtin.Block>
                              </_Builtin.Block>
                              <_Builtin.Block
                                className="div-block-51 pending"
                                tag="div"
                              >
                                <_Builtin.Block
                                  className="div-block-50 pending"
                                  tag="div"
                                />
                                <_Builtin.Block className="devlink" tag="div">
                                  {"En cours"}
                                </_Builtin.Block>
                                {isNotLoading ? (
                                  <_Builtin.Block className="devlink" tag="div">
                                    {nPendingBookings}
                                  </_Builtin.Block>
                                ) : null}
                              </_Builtin.Block>
                            </_Builtin.Block>
                            {isNotLoading ? (
                              <_Builtin.Block
                                className="div-block-48"
                                tag="div"
                              >
                                <_Builtin.Block tag="div">
                                  {componentCalendar}
                                </_Builtin.Block>
                              </_Builtin.Block>
                            ) : null}
                            {isLoading ? (
                              <_Builtin.Block
                                className="div-block-52"
                                tag="div"
                              >
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
                                <_Builtin.Block
                                  className="card_loader-text devlink"
                                  tag="div"
                                >
                                  {"L'agenda est en cours de chargement ..."}
                                </_Builtin.Block>
                              </_Builtin.Block>
                            ) : null}
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className="booking_modal"
                          tag="div"
                          wized="booking_modal"
                          wized-cloak=""
                        >
                          <_Builtin.Block
                            className="booking_modal-container"
                            tag="div"
                          >
                            <_Builtin.Block className="modal_header" tag="div">
                              <_Builtin.Block
                                className="heading-style-h5"
                                tag="div"
                              >
                                {"Réservations"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                            <_Builtin.Block className="modal_content" tag="div">
                              <_Builtin.Block
                                className="details_list"
                                tag="div"
                              >
                                <_Builtin.Block
                                  className="details_row"
                                  tag="div"
                                >
                                  <_Builtin.Block
                                    className="div-block text-weight-bold"
                                    tag="div"
                                  >
                                    <_Builtin.HtmlEmbed
                                      className="icon-embed-xxsmall"
                                      value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20width%3D%22auto%22%20height%3D%22auto%22%20x%3D%220%22%20y%3D%220%22%20viewBox%3D%220%200%20512%20512.001%22%20style%3D%22enable-background%3Anew%200%200%20512%20512%22%20xml%3Aspace%3D%22preserve%22%20class%3D%22%22%3E%3Cg%3E%3Cpath%20d%3D%22M210.352%20246.633c33.882%200%2063.218-12.153%2087.195-36.13%2023.969-23.972%2036.125-53.304%2036.125-87.19%200-33.876-12.152-63.211-36.129-87.192C273.566%2012.152%20244.23%200%20210.352%200c-33.887%200-63.22%2012.152-87.192%2036.125s-36.129%2053.309-36.129%2087.188c0%2033.886%2012.156%2063.222%2036.13%2087.195%2023.98%2023.969%2053.316%2036.125%2087.19%2036.125zM144.379%2057.34c18.394-18.395%2039.973-27.336%2065.973-27.336%2025.996%200%2047.578%208.941%2065.976%2027.336%2018.395%2018.398%2027.34%2039.98%2027.34%2065.972%200%2026-8.945%2047.579-27.34%2065.977-18.398%2018.399-39.98%2027.34-65.976%2027.34-25.993%200-47.57-8.945-65.973-27.34-18.399-18.394-27.344-39.976-27.344-65.976%200-25.993%208.945-47.575%2027.344-65.973zM426.129%20393.703c-.692-9.976-2.09-20.86-4.149-32.351-2.078-11.579-4.753-22.524-7.957-32.528-3.312-10.34-7.808-20.55-13.375-30.336-5.77-10.156-12.55-19-20.16-26.277-7.957-7.613-17.699-13.734-28.965-18.2-11.226-4.44-23.668-6.69-36.976-6.69-5.227%200-10.281%202.144-20.043%208.5a2711.03%202711.03%200%200%201-20.879%2013.46c-6.707%204.274-15.793%208.278-27.016%2011.903-10.949%203.543-22.066%205.34-33.043%205.34-10.968%200-22.086-1.797-33.043-5.34-11.21-3.622-20.3-7.625-26.996-11.899-7.77-4.965-14.8-9.496-20.898-13.469-9.754-6.355-14.809-8.5-20.035-8.5-13.313%200-25.75%202.254-36.973%206.7-11.258%204.457-21.004%2010.578-28.969%2018.199-7.609%207.281-14.39%2016.12-20.156%2026.273-5.558%209.785-10.058%2019.992-13.371%2030.34-3.2%2010.004-5.875%2020.945-7.953%2032.524-2.063%2011.476-3.457%2022.363-4.149%2032.363C.343%20403.492%200%20413.668%200%20423.949c0%2026.727%208.496%2048.363%2025.25%2064.32C41.797%20504.017%2063.688%20512%2090.316%20512h246.532c26.62%200%2048.511-7.984%2065.062-23.73%2016.758-15.946%2025.254-37.59%2025.254-64.325-.004-10.316-.351-20.492-1.035-30.242zm-44.906%2072.828c-10.934%2010.406-25.45%2015.465-44.38%2015.465H90.317c-18.933%200-33.449-5.059-44.379-15.46-10.722-10.208-15.933-24.141-15.933-42.587%200-9.594.316-19.066.95-28.16.616-8.922%201.878-18.723%203.75-29.137%201.847-10.285%204.198-19.937%206.995-28.675%202.684-8.38%206.344-16.676%2010.883-24.668%204.332-7.618%209.316-14.153%2014.816-19.418%205.145-4.926%2011.63-8.957%2019.27-11.98%207.066-2.798%2015.008-4.329%2023.629-4.56%201.05.56%202.922%201.626%205.953%203.602%206.168%204.02%2013.277%208.606%2021.137%2013.625%208.86%205.649%2020.273%2010.75%2033.91%2015.152%2013.941%204.508%2028.16%206.797%2042.273%206.797%2014.114%200%2028.336-2.289%2042.27-6.793%2013.648-4.41%2025.058-9.507%2033.93-15.164%208.043-5.14%2014.953-9.593%2021.12-13.617%203.032-1.973%204.903-3.043%205.954-3.601%208.625.23%2016.566%201.761%2023.636%204.558%207.637%203.024%2014.122%207.059%2019.266%2011.98%205.5%205.262%2010.484%2011.798%2014.816%2019.423%204.543%207.988%208.208%2016.289%2010.887%2024.66%202.801%208.75%205.156%2018.398%207%2028.675%201.867%2010.434%203.133%2020.239%203.75%2029.145v.008c.637%209.058.957%2018.527.961%2028.148-.004%2018.45-5.215%2032.38-15.937%2042.582zm0%200%22%20fill%3D%22currentColor%22%20opacity%3D%221%22%20data-original%3D%22%23000000%22%20class%3D%22%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                                    />
                                    <_Builtin.Block tag="div">
                                      {"Joueur"}
                                    </_Builtin.Block>
                                  </_Builtin.Block>
                                  <_Builtin.Block tag="div">
                                    {"Nom du joueur"}
                                  </_Builtin.Block>
                                </_Builtin.Block>
                                <_Builtin.Block
                                  className="details_row"
                                  tag="div"
                                >
                                  <_Builtin.Block
                                    className="div-block text-weight-bold"
                                    tag="div"
                                  >
                                    <_Builtin.HtmlEmbed
                                      className="icon-embed-xxsmall"
                                      value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20width%3D%22auto%22%20height%3D%22auto%22%20x%3D%220%22%20y%3D%220%22%20viewBox%3D%220%200%20682.667%20682.667%22%20style%3D%22enable-background%3Anew%200%200%20512%20512%22%20xml%3Aspace%3D%22preserve%22%20class%3D%22%22%3E%3Cg%3E%3Cdefs%3E%3CclipPath%20id%3D%22a%22%20clipPathUnits%3D%22userSpaceOnUse%22%3E%3Cpath%20d%3D%22M0%20512h512V0H0Z%22%20fill%3D%22%23000000%22%20opacity%3D%221%22%20data-original%3D%22%23000000%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%3Cg%20clip-path%3D%22url(%23a)%22%20transform%3D%22matrix(1.33333%200%200%20-1.33333%200%20682.667)%22%3E%3Cpath%20d%3D%22M0%200h39.333m78.895%200h39.333M-118%200h39.333M0%20118h39.333m78.895%200h39.333M-118%20118h39.333m-137.666%2098.667h472.227M-137.439-98H177c43.572%200%2078.894%2035.322%2078.894%2078.895v274.877c0%2043.572-35.322%2078.895-78.894%2078.895h-314.439c-43.572%200-78.894-35.323-78.894-78.895V-19.105c0-43.573%2035.322-78.895%2078.894-78.895zm275.333%20373.667V374m-236.227-98.333V374%22%20style%3D%22stroke-width%3A40%3Bstroke-linecap%3Around%3Bstroke-linejoin%3Around%3Bstroke-miterlimit%3A10%3Bstroke-dasharray%3Anone%3Bstroke-opacity%3A1%22%20transform%3D%22translate(236.333%20118)%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%2240%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-miterlimit%3D%2210%22%20stroke-dasharray%3D%22none%22%20stroke-opacity%3D%22%22%20data-original%3D%22%23000000%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                                    />
                                    <_Builtin.Block tag="div">
                                      {"Date"}
                                    </_Builtin.Block>
                                  </_Builtin.Block>
                                  <_Builtin.Block tag="div">
                                    {"xx/xx/xxxx"}
                                  </_Builtin.Block>
                                </_Builtin.Block>
                                <_Builtin.Block
                                  className="details_row"
                                  tag="div"
                                >
                                  <_Builtin.Block
                                    className="div-block text-weight-bold"
                                    tag="div"
                                  >
                                    <_Builtin.HtmlEmbed
                                      className="icon-embed-xxsmall"
                                      value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20width%3D%22auto%22%20height%3D%22auto%22%20x%3D%220%22%20y%3D%220%22%20viewBox%3D%220%200%20512%20512%22%20style%3D%22enable-background%3Anew%200%200%20512%20512%22%20xml%3Aspace%3D%22preserve%22%3E%3Cg%3E%3Cpath%20d%3D%22m347.216%20301.211-71.387-53.54V138.609c0-10.966-8.864-19.83-19.83-19.83-10.966%200-19.83%208.864-19.83%2019.83v118.978c0%206.246%202.935%2012.136%207.932%2015.864l79.318%2059.489a19.713%2019.713%200%200%200%2011.878%203.966c6.048%200%2011.997-2.717%2015.884-7.952%206.585-8.746%204.8-21.179-3.965-27.743z%22%20fill%3D%22currentColor%22%20opacity%3D%221%22%20data-original%3D%22%23000000%22%2F%3E%3Cpath%20d%3D%22M256%200C114.833%200%200%20114.833%200%20256s114.833%20256%20256%20256%20256-114.833%20256-256S397.167%200%20256%200zm0%20472.341c-119.275%200-216.341-97.066-216.341-216.341S136.725%2039.659%20256%2039.659c119.295%200%20216.341%2097.066%20216.341%20216.341S375.275%20472.341%20256%20472.341z%22%20fill%3D%22currentColor%22%20opacity%3D%221%22%20data-original%3D%22%23000000%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                                    />
                                    <_Builtin.Block tag="div">
                                      {"Durée"}
                                    </_Builtin.Block>
                                  </_Builtin.Block>
                                  <_Builtin.Block tag="div">
                                    {"0h"}
                                  </_Builtin.Block>
                                </_Builtin.Block>
                                <_Builtin.Block
                                  className="details_row"
                                  tag="div"
                                >
                                  <_Builtin.Block
                                    className="div-block text-weight-bold"
                                    tag="div"
                                  >
                                    <_Builtin.HtmlEmbed
                                      className="icon-embed-xxsmall"
                                      value="%3Csvg%20width%3D%22auto%22%20height%3D%22auto%22%20viewBox%3D%220%200%2011%2013%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M0%200.464286L0%2012.5357C0%2012.6589%200.0643849%2012.7769%200.17899%2012.864C0.293596%2012.9511%200.449034%2013%200.611111%2013H10.3889C10.551%2013%2010.7064%2012.9511%2010.821%2012.864C10.9356%2012.7769%2011%2012.6589%2011%2012.5357L11%200.464286C11%200.34115%2010.9356%200.223057%2010.821%200.135986C10.7064%200.0489159%2010.551%200%2010.3889%200H0.611111C0.449034%200%200.293596%200.0489159%200.17899%200.135986C0.0643849%200.223057%200%200.34115%200%200.464286ZM1.22222%204.17857H4.88889L4.88889%208.82143H1.22222L1.22222%204.17857ZM1.22222%2012.0714L1.22222%209.75H9.77778V12.0714H1.22222ZM9.77778%208.82143H6.11111L6.11111%204.17857H9.77778V8.82143ZM9.77778%200.928572V3.25H1.22222L1.22222%200.928572H9.77778Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                                    />
                                    <_Builtin.Block tag="div">
                                      {"Court"}
                                    </_Builtin.Block>
                                  </_Builtin.Block>
                                  <_Builtin.Block tag="div">
                                    {"Terrain 1"}
                                  </_Builtin.Block>
                                </_Builtin.Block>
                                <_Builtin.Block
                                  className="details_row"
                                  tag="div"
                                >
                                  <_Builtin.Block
                                    className="div-block text-weight-bold"
                                    tag="div"
                                  >
                                    <_Builtin.HtmlEmbed
                                      className="icon-embed-xxsmall"
                                      value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20width%3D%22auto%22%20height%3D%22auto%22%20x%3D%220%22%20y%3D%220%22%20viewBox%3D%220%200%20512%20512%22%20style%3D%22enable-background%3Anew%200%200%20512%20512%22%20xml%3Aspace%3D%22preserve%22%3E%3Cg%3E%3Cpath%20d%3D%22M256%20512c-68.38%200-132.668-26.628-181.02-74.98S0%20324.38%200%20256%2026.629%20123.333%2074.98%2074.98%20187.62%200%20256%200s132.668%2026.628%20181.02%2074.98S512%20187.62%20512%20256s-26.629%20132.667-74.98%20181.02S324.38%20512%20256%20512zm0-480C132.486%2032%2032%20132.486%2032%20256s100.486%20224%20224%20224%20224-100.486%20224-224S379.514%2032%20256%2032z%22%20fill%3D%22currentColor%22%20opacity%3D%221%22%20data-original%3D%22%23000000%22%2F%3E%3Cpath%20d%3D%22M256%20240c-22.056%200-40-17.944-40-40s17.944-40%2040-40%2040%2017.944%2040%2040c0%208.836%207.163%2016%2016%2016s16-7.164%2016-16c0-34.201-23.978-62.888-56-70.186V112c0-8.836-7.163-16-16-16s-16%207.164-16%2016v17.814c-32.022%207.298-56%2035.985-56%2070.186%200%2039.701%2032.299%2072%2072%2072%2022.056%200%2040%2017.944%2040%2040s-17.944%2040-40%2040-40-17.944-40-40c0-8.836-7.163-16-16-16s-16%207.164-16%2016c0%2034.201%2023.978%2062.888%2056%2070.186V400c0%208.836%207.163%2016%2016%2016s16-7.164%2016-16v-17.814c32.022-7.298%2056-35.985%2056-70.186%200-39.701-32.299-72-72-72z%22%20fill%3D%22currentColor%22%20opacity%3D%221%22%20data-original%3D%22%23000000%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                                    />
                                    <_Builtin.Block tag="div">
                                      {"Prix"}
                                    </_Builtin.Block>
                                  </_Builtin.Block>
                                  <_Builtin.Block tag="div">
                                    {" 0 CHF"}
                                  </_Builtin.Block>
                                </_Builtin.Block>
                              </_Builtin.Block>
                              <_Builtin.Link
                                className="button"
                                button={true}
                                block=""
                                options={{
                                  href: "#",
                                }}
                              >
                                {"Modifier la réservation"}
                              </_Builtin.Link>
                            </_Builtin.Block>
                            <_Builtin.Link
                              className="modal_close_btn"
                              button={false}
                              block="inline"
                              options={{
                                href: "#",
                              }}
                            >
                              <_Builtin.HtmlEmbed
                                className="icon-embed-medium"
                                value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20aria-hidden%3D%22true%22%20role%3D%22img%22%20class%3D%22iconify%20iconify--iconoir%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20preserveAspectRatio%3D%22xMidYMid%20meet%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%221.5%22%20d%3D%22M6.758%2017.243L12.001%2012m5.243-5.243L12%2012m0%200L6.758%206.757M12.001%2012l5.243%205.243%22%2F%3E%3C%2Fsvg%3E"
                              />
                            </_Builtin.Link>
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
    </_Component>
  );
}
