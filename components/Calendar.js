import React, { useEffect, useState, useRef } from "react";
import FullCalendar from "@fullcalendar/react";
import resourceTimeGridPlugin from "@fullcalendar/resource-timegrid";
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from "@fullcalendar/interaction";
import { Stack } from "@mui/material";
import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import { getFirstAndLastDayOfDay, getFirstAndLastDayOfMonth, getFirstAndLastDayOfYear, parseDoubleToHourInterval } from "@/functions";
import { firestore } from "@/firebase";
import { getBookingListCalendar, getOneBookingCalendar, getTypeBookingJson } from "@/functions/bookings";
import { formatDateToInputDate, getFirstAndLastDayOfWeek, getWeek, removeMinutesToDate } from "@/functions/manage-time";
import { LastPage } from "@mui/icons-material";
//import listPlugin from "@fullcalendar/list";
import * as _interactions from "@/devlink/interactions";
import { getOneTransactionCalendar } from "@/functions/transactions";
import { getFirestoreSubData } from "@/functions/manage-firestore";
import { createArrayDurationCourt, getDurationsCourt, getFirstAndLastDurationCourt, getFirstAndLastHourCourt } from "@/functions/courts";
const _interactionsData = JSON.parse(
    '{"events":{"e-9":{"id":"e-9","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-304"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"1bf7d8b1-45bf-7ee7-4978-3821b784e19b","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"1bf7d8b1-45bf-7ee7-4978-3821b784e19b","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1684414757890},"e-7":{"id":"e-7","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-306"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"1bf7d8b1-45bf-7ee7-4978-3821b784e19d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"1bf7d8b1-45bf-7ee7-4978-3821b784e19d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1684414757890},"e-16":{"id":"e-16","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-17"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"65edcb06e424209e95092c7e|1fc86f64-e14b-b0d7-6c3f-bb9669afcfbf","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65edcb06e424209e95092c7e|1fc86f64-e14b-b0d7-6c3f-bb9669afcfbf","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1706887097380},"e-18":{"id":"e-18","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-19"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"65edcb06e424209e95092c7e|1fc86f64-e14b-b0d7-6c3f-bb9669afcfc1","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65edcb06e424209e95092c7e|1fc86f64-e14b-b0d7-6c3f-bb9669afcfc1","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1706887097380},"e-20":{"id":"e-20","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-21"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"65edcb06e424209e95092c82|1fc86f64-e14b-b0d7-6c3f-bb9669afcfbf","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65edcb06e424209e95092c82|1fc86f64-e14b-b0d7-6c3f-bb9669afcfbf","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1708104615453},"e-22":{"id":"e-22","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-23"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"65edcb06e424209e95092c82|1fc86f64-e14b-b0d7-6c3f-bb9669afcfc1","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65edcb06e424209e95092c82|1fc86f64-e14b-b0d7-6c3f-bb9669afcfc1","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1708104615453},"e-24":{"id":"e-24","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-25"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"65edcb06e424209e95092c83|1fc86f64-e14b-b0d7-6c3f-bb9669afcfbf","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65edcb06e424209e95092c83|1fc86f64-e14b-b0d7-6c3f-bb9669afcfbf","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1708104787165},"e-26":{"id":"e-26","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-27"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"65edcb06e424209e95092c83|1fc86f64-e14b-b0d7-6c3f-bb9669afcfc1","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65edcb06e424209e95092c83|1fc86f64-e14b-b0d7-6c3f-bb9669afcfc1","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1708104787165},"e-160":{"id":"e-160","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-161"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"6650fca0bdd809151a219ff1|1fc86f64-e14b-b0d7-6c3f-bb9669afcfbf","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6650fca0bdd809151a219ff1|1fc86f64-e14b-b0d7-6c3f-bb9669afcfbf","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1716583585383},"e-162":{"id":"e-162","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-163"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"6650fca0bdd809151a219ff1|1fc86f64-e14b-b0d7-6c3f-bb9669afcfc1","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6650fca0bdd809151a219ff1|1fc86f64-e14b-b0d7-6c3f-bb9669afcfc1","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1716583585383},"e-204":{"id":"e-204","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-36","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-205"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"65edcb06e424209e95092c80|4d7cab3d-9000-1d9f-aefe-022edc3ae44f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65edcb06e424209e95092c80|4d7cab3d-9000-1d9f-aefe-022edc3ae44f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1727470895089},"e-206":{"id":"e-206","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-36","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-207"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"65edcb06e424209e95092c80|4d7cab3d-9000-1d9f-aefe-022edc3ae451","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65edcb06e424209e95092c80|4d7cab3d-9000-1d9f-aefe-022edc3ae451","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1727470895089},"e-258":{"id":"e-258","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-305"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"3bf6ef48-906c-6954-3b84-47cb5cf21b00","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"3bf6ef48-906c-6954-3b84-47cb5cf21b00","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1727734053325},"e-260":{"id":"e-260","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-307"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"3bf6ef48-906c-6954-3b84-47cb5cf21b02","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"3bf6ef48-906c-6954-3b84-47cb5cf21b02","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1727734053325},"e-262":{"id":"e-262","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-17","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-309"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"3bf6ef48-906c-6954-3b84-47cb5cf21b17","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"3bf6ef48-906c-6954-3b84-47cb5cf21b17","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1727734053325},"e-274":{"id":"e-274","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-275"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"cd5dc5ca-f5d4-aeec-6107-f3c88afbc67c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"cd5dc5ca-f5d4-aeec-6107-f3c88afbc67c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1727736126886},"e-276":{"id":"e-276","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-277"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"cd5dc5ca-f5d4-aeec-6107-f3c88afbc67e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"cd5dc5ca-f5d4-aeec-6107-f3c88afbc67e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1727736126886},"e-298":{"id":"e-298","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-305"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"0f103e9a-02fc-bbae-2ea7-466330996187","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"0f103e9a-02fc-bbae-2ea7-466330996187","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1727736965141},"e-300":{"id":"e-300","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-307"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"0f103e9a-02fc-bbae-2ea7-466330996189","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"0f103e9a-02fc-bbae-2ea7-466330996189","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1727736965141},"e-308":{"id":"e-308","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-309"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"56d276ce-6ef8-b699-75b4-3571b6bf318f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"56d276ce-6ef8-b699-75b4-3571b6bf318f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1727737404364},"e-310":{"id":"e-310","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-311"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"56d276ce-6ef8-b699-75b4-3571b6bf3191","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"56d276ce-6ef8-b699-75b4-3571b6bf3191","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1727737404364},"e-350":{"id":"e-350","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-19","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-351"}},"mediaQueries":["main","medium","small","tiny"],"target":{"appliesTo":"ELEMENT","styleBlockIds":[],"id":"9cea2767-876c-b553-f465-a182996e0ad3"},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1732995590771}},"actionLists":{"a-8":{"id":"a-8","title":"Topbar 3 Search [Close]","actionItemGroups":[{"actionItems":[{"id":"a-8-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuad","duration":200,"target":{"selector":".topbar3_search-tablet","selectorGuids":["46f22993-c095-a3c8-9aa4-d6a267c87fcd"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-8-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".topbar3_search-tablet","selectorGuids":["46f22993-c095-a3c8-9aa4-d6a267c87fcd"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1684414258357},"a-36":{"id":"a-36","title":"Topbar 3 Search [Close] 2","actionItemGroups":[{"actionItems":[{"id":"a-36-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuad","duration":200,"target":{"selector":".topbar3_search-tablet","selectorGuids":["46f22993-c095-a3c8-9aa4-d6a267c87fcd"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-36-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".topbar3_search-tablet","selectorGuids":["46f22993-c095-a3c8-9aa4-d6a267c87fcd"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1684414258357},"a-17":{"id":"a-17","title":"Booking Add Modal [Open]","actionItemGroups":[{"actionItems":[{"id":"a-17-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".booking_add_modal_component","selectorGuids":["1c7b8a9c-e3ea-e17e-b62b-25f5683bd7d4"]},"value":"none"}},{"id":"a-17-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".booking_add_modal_content-wrapper","selectorGuids":["1c7b8a9c-e3ea-e17e-b62b-25f5683bd7d5"]},"xValue":100,"xUnit":"%","yUnit":"PX","zUnit":"PX"}},{"id":"a-17-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".booking_add_modal_background-overlay","selectorGuids":["1c7b8a9c-e3ea-e17e-b62b-25f5683bd7d9"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-17-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".booking_add_modal_component","selectorGuids":["1c7b8a9c-e3ea-e17e-b62b-25f5683bd7d4"]},"value":"flex"}},{"id":"a-17-n-5","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuad","duration":500,"target":{"selector":".booking_add_modal_content-wrapper","selectorGuids":["1c7b8a9c-e3ea-e17e-b62b-25f5683bd7d5"]},"xValue":0,"xUnit":"%","yUnit":"PX","zUnit":"PX"}},{"id":"a-17-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":500,"target":{"selector":".booking_add_modal_background-overlay","selectorGuids":["1c7b8a9c-e3ea-e17e-b62b-25f5683bd7d9"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1644220869174},"a-19":{"id":"a-19","title":"Booking Update Modal [Open]","actionItemGroups":[{"actionItems":[{"id":"a-19-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".booking_update_modal_component","selectorGuids":["0b2a0569-e15b-8471-7127-97bbdfffcaa9"]},"value":"none"}},{"id":"a-19-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".booking_update_content-wrapper","selectorGuids":["0b2a0569-e15b-8471-7127-97bbdfffcaaa"]},"xValue":100,"xUnit":"%","yUnit":"PX","zUnit":"PX"}},{"id":"a-19-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".booking_update_background-overlay","selectorGuids":["0b2a0569-e15b-8471-7127-97bbdfffcaae"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-19-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".booking_update_modal_component","selectorGuids":["0b2a0569-e15b-8471-7127-97bbdfffcaa9"]},"value":"flex"}},{"id":"a-19-n-5","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuad","duration":500,"target":{"selector":".booking_update_content-wrapper","selectorGuids":["0b2a0569-e15b-8471-7127-97bbdfffcaaa"]},"xValue":0,"xUnit":"%","yUnit":"PX","zUnit":"PX"}},{"id":"a-19-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":500,"target":{"selector":".booking_update_background-overlay","selectorGuids":["0b2a0569-e15b-8471-7127-97bbdfffcaae"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1644220869174}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
  );

const Calendar = ({ isReseting, setIsReseting, setSelectedDuration,setShowDialogReset,setSelectedType, setSelectedDate, setSelectedDescription,clubUid, setIsLoading, siteUid = 0, courtUid = 0, setCountBookings, setCountPendingBookings, setShowDialogBooking, setAvailableHours,setSelectedHour,setSelectedBooking, setSelectedTransaction }) => {
    _interactions.useInteractions(_interactionsData);
    const calendarRef = useRef(null);
    //const today = new Date();
    const today = new Date();
    const [firstDay, setFirstDay] = useState(getFirstAndLastDayOfDay(today.getDate(), today.getMonth(), today.getFullYear()).firstDay);
    const [lastDay, setLastDay] = useState(getFirstAndLastDayOfDay(today.getDate(), today.getMonth(), today.getFullYear()).lastDay);
    const [week, setWeek] = useState(0);
    const [day, setDay] = useState(today.getDate());
    const [month, setMonth] = useState(today.getMonth() + 1);
    const [year, setYear] = useState(today.getFullYear());
    const [events, setEvents] = useState([]);
    const [resources, setResources] = useState([]);
    const [isResourceView, setIsResourceView] = useState(true);
    const [initialView, setInitialView] = useState("resourceTimeGridDay");
    const [rightToolbar, setRightToolbar] = useState("resourceTimeGridDay,resourceTimeGridWeek");
    const [slotMinTime, setSlotMinTime] = useState("06:00:00");
    const [slotMaxTime, setSlotMaxTime] = useState("24:00:00");
    // Recalculer les valeurs dynamiquement


    function getQueryBookingStats(clubRef, site, court, firstDay, lastDay, pending = false) {
        //const clubRef = doc(firestore, "CLUBS", club.uid);
        const collectionStr = pending ? "COURT_PENDING_BOOKINGS" : "COURT_BOOKINGS";
        let queryBookingStats;
        if (court != 0) {
            const courtRef = doc(collection(clubRef, "COURTS"), court);
            //var { firstDay, lastDay } = {};
            queryBookingStats = query(collection(clubRef, collectionStr),
                //where("site_ref", "==", siteRef),
                where("court_ref", "==", courtRef),
                where("match_start_date", ">=", firstDay),
                where("match_start_date", "<=", lastDay),
            );
        } else if (site != 0) {
            const siteRef = doc(collection(clubRef, "SITES"), site);
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
                    where("match_start_date", ">=", firstDay),
                    where("match_start_date", "<=", lastDay),
                );
            }
        } else {
            queryBookingStats = query(collection(clubRef, collectionStr),
                //where("site_ref", "==", siteRef),
                //where("court_ref", "==", courtRef),
                where("match_start_date", ">=", firstDay),
                where("match_start_date", "<=", lastDay),
            );
        }
        return queryBookingStats;
    }
    async function init(site = 0, court = 0, firstDay, lastDay) {
        const clubRef = doc(firestore, "CLUBS", clubUid);
        var queryCourt = query(collection(clubRef, "COURTS"),
            //where("site_uid", "==", site),
            // where("match_start_date", ">=", firstDay),
            // where("match_start_date", "<=", lastDay),
        );
        if (court != 0) {
            queryCourt = query(collection(clubRef, "COURTS"),
                where("uid", "==", courtUid),
                // where("match_start_date", ">=", firstDay),
                // where("match_start_date", "<=", lastDay),
            );
        } else if (site != 0) {
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
            newCourts.push({ id: court.name_or_number, title: court.name_or_number, className: "terrain-orange" });
        }
        newCourts = newCourts.sort((a, b) => { return a.title.localeCompare(b.title) });
        setResources(newCourts);
        console.log("courts", newCourts);
        const pendingQueryBooking = getQueryBookingStats(clubRef, site, court, firstDay, lastDay, true);
        const pendingQuerySnapshotBooking = await getDocs(pendingQueryBooking);
        const pendingCalendarBooking = await getBookingListCalendar(pendingQuerySnapshotBooking, true);
        const queryBooking = getQueryBookingStats(clubRef, site, court, firstDay, lastDay, false);
        const querySnapshotBooking = await getDocs(queryBooking);
        const calendarBooking = await getBookingListCalendar(querySnapshotBooking, false);
        const newBookings = [];
        var countBookings = 0;
        var countPendingBookings = 0;
        for (let booking of calendarBooking.concat(pendingCalendarBooking)) {
            //const court = snapshotCourt.data();
            //console.log("court", booking);
            if (booking.is_pending) {
                countPendingBookings++;
            } else {
                countBookings++;
            }
            newBookings.push({
                id: booking.uid,
                resourceId: booking.court_name,
                title: booking.name,
                start: booking.match_start_date,
                end: booking.match_finished_date,
                backgroundColor: booking.is_pending ? "var(--warning-devlink)" /*: booking.is_from_app ? "var(--playpad-primary)"*/ : "", // Changer la couleur de fond
                //borderColor: "darkgreen", // Couleur de bordure
                //textColor: theme.palette.text.primary, // Couleur du texte
                //borderLeft: "3px solid red",
            });
        }
        setEvents(newBookings);
        setCountBookings(countBookings);
        setCountPendingBookings(countPendingBookings);
        console.log("bookings", newBookings);
    }
    useEffect(() => {
        if (isReseting) {
            setEvents([]);
            setIsLoading(true);
            //firstDay = getFirstAndLastDayOfDay(day, month - 1, year).firstDay;
            //          lastDay = getFirstAndLastDayOfDay(day, month - 1, year).lastDay;
            init(siteUid, courtUid, firstDay, lastDay);
            const isResource = courtUid === 0;
            console.log("isResourceView recalculé :", isResource);
            console.log("courtUid :", courtUid, "resources.length :", resources.length);

            setRightToolbar(
                isResource
                    ? "resourceTimeGridDay,resourceTimeGridWeek"
                    : "resourceTimeGridDay,resourceTimeGridWeek,dayGridMonth,year"
            );
            setIsResourceView(isResource);
            setInitialView(isResource ? "resourceTimeGridDay" : "timeGridDay");
            //console.log("day change", week)
            setIsLoading(false);
            setIsReseting(false);
        }
    }, [isReseting])
    useEffect(() => {
        setIsLoading(true);
        //firstDay = getFirstAndLastDayOfDay(day, month - 1, year).firstDay;
        //          lastDay = getFirstAndLastDayOfDay(day, month - 1, year).lastDay;
        init(siteUid, courtUid, firstDay, lastDay);
        const isResource = courtUid === 0;
        console.log("isResourceView recalculé :", isResource);
        console.log("courtUid :", courtUid, "resources.length :", resources.length);

        setRightToolbar(
            isResource
                ? "resourceTimeGridDay,resourceTimeGridWeek"
                : "resourceTimeGridDay,resourceTimeGridWeek,dayGridMonth,year"
        );
        setIsResourceView(isResource);
        //setInitialView("resourceTimeGridDay");
        //console.log("day change", week)
        setIsLoading(false);
    }, [firstDay, lastDay, day, week, month, year]);
    useEffect(() => {
        setIsLoading(true);
        init(siteUid, courtUid, firstDay, lastDay);
        //console.log("site change", siteUid, "court change", courtUid);
        const isResource = courtUid === 0;
        console.log("isResourceView recalculé :", isResource);
        console.log("courtUid :", courtUid, "resources.length :", resources.length);

        setRightToolbar(
            isResource
                ? "resourceTimeGridDay,resourceTimeGridWeek"
                : "resourceTimeGridDay,resourceTimeGridWeek,dayGridMonth,year"
        );
        if (isResource) {
            //goToDate(new Date());
            setIsResourceView(isResource);
            setInitialView("resourceTimeGridDay");
            //simulateDatesSet("resourceTimeGridDay");

        }

        //setInitialView("resourceTimeGridDay");
        setIsLoading(false);
    }, [siteUid, courtUid]);

    const handleRefresh = () => {
        setIsLoading(true);
        setEvents([]);
        init(siteUid, courtUid, firstDay, lastDay);
        const isResource = courtUid === 0;
        console.log("isResourceView recalculé :", isResource);
        console.log("courtUid :", courtUid, "resources.length :", resources.length);

        setRightToolbar(
            isResource
                ? "resourceTimeGridDay,resourceTimeGridWeek"
                : "resourceTimeGridDay,resourceTimeGridWeek,dayGridMonth,year"
        );
        setIsResourceView(isResource);
        //setInitialView(isResource ? "resourceTimeGridDay" : "timeGridDay");
        //setInitialView("resourceTimeGridDay");
        console.log("site change", siteUid);
        setIsLoading(false);
    };

    const renderEventContent = (eventInfo) => {
        const { title, start, end } = eventInfo.event;
        const calculateDuration = (start, end) => {
            const startDate = new Date(start);
            const endDate = new Date(end);
            const diff = (endDate - startDate) / (1000 * 60);
            const hours = Math.floor(diff / 60);
            const minutes = diff % 60;
            return diff / 60;
        };
        const duration = calculateDuration(start, end);

        return (
            <div onClick={()=>{
                handleEventClick(eventInfo);
            }} style={{ textAlign: 'start' }}>
                <div>{title}</div>
                <div style={{ fontWeight: "bold" }}>{`${new Date(start).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                })} - ${new Date(end).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                })}`}</div>
                <div>{parseDoubleToHourInterval(duration)}</div>
            </div>
        );
    };

    const handleEventClick = (clickInfo) => {
        // Récupérer les informations sur l'événement cliqué
        setShowDialogReset(false);
        async function init() {
            setShowDialogBooking(true);
            setIsLoading(true);
            const { id } = clickInfo.event;
            const clubRef = doc(firestore, "CLUBS", clubUid);
            var bookingRef = doc((collection(clubRef, "COURT_PENDING_BOOKINGS")), id);
            var bookingSnap = await getDoc(bookingRef);
            const isPending = bookingSnap.exists();
            if(!isPending) {
                bookingRef = doc((collection(clubRef, "COURT_BOOKINGS")), id);
                bookingSnap = await getDoc(bookingRef);
            }
           

            //const bookingData = bookingSnap.data();
            const bookingData = getOneBookingCalendar(bookingSnap, isPending);
            setSelectedBooking(bookingData);
            const courtData = await getFirestoreSubData(clubUid, "CLUBS", bookingData.court_uid, "COURTS");
            const hours = createArrayDurationCourt(courtData);
            const startHour = bookingData.match_start_date_D.getHours() + (bookingData.match_start_date_D.getMinutes()>0 ? bookingData.match_start_date_D.getMinutes / 60 : 0);
            const endHour = bookingData.match_finished_date_D.getHours() + (bookingData.match_finished_date_D.getMinutes()>0 ? bookingData.match_finished_date_D.getMinutes / 60 : 0);
            setAvailableHours(hours);
            setSelectedDate(formatDateToInputDate(bookingData.match_start_date_D));
            setSelectedHour(startHour);
            setSelectedDuration(bookingData.duration_DO);
            setSelectedType(getTypeBookingJson(bookingData.type).value);
            setSelectedDescription(bookingData.description != "--" ? bookingData.description : "");
            //const {first_time, last_time} = getFirstAndLastHourCourt(courtData);
            //const {first_duration, last_duration} = getFirstAndLastDurationCourt(courtData);
            //
            //console.log("AAAAAAA court", courtData.name_or_number, "shedule", first_time, last_time, first_duration, last_duration);
            console.log("AAAAAAA court", courtData.name_or_number, "Why", getDurationsCourt(courtData));
            if(bookingData.transaction_uid != "") {
                const transactionCollection = isPending ? "COURT_PENDING_TRANSACTIONS" : "COURT_TRANSACTIONS";
                var transactionRef = doc((collection(clubRef, transactionCollection)), bookingData.transaction_uid);
                var transactionSnap = await getDoc(transactionRef);
                const transactionData = getOneTransactionCalendar(transactionSnap, isPending);
                console.log("TRAAAAAAA", transactionData);
                setSelectedTransaction(transactionData);
            }
            setIsLoading(false);
            
            //
            //console.log("WEEEEEEEEEEESH", bookingData)
        }
        init();
        /*
        alert('clik')
        // Par exemple, afficher un message ou lancer une action personnalisée
        
        alert(`Vous avez cliqué sur l'événement : 
- ID : ${id}
- Titre : ${title}
- Début : ${new Date(start).toLocaleString()}
- Fin : ${new Date(end).toLocaleString()}`);
*/

            
    };

    const handleDatesSet = (info) => {
        // Récupérez les nouvelles dates de la vue
        const startDate = new Date(info.startStr); // Début de la période visible (format ISO)
        const endDate = removeMinutesToDate(new Date(info.endStr), 1); // Fin de la période visible (format ISO)
        const currentView = info.view.type; // Vue actuelle (ex : 'resourceTimeGridDay')
        var { firstDay, lastDay } = {};
        //var lastDay = getFirstAndLastDayOfDay(day, month - 1, year).lastDay;
        if (currentView == "resourceTimeGridDay" || currentView == "timeGridDay") {
            setDay(startDate.getDate());
            //setWeek(0);
            //setMonth(0);
            //setYear(0);
            firstDay = getFirstAndLastDayOfDay(startDate.getDate(), startDate.getMonth(), startDate.getFullYear()).firstDay;
            lastDay = getFirstAndLastDayOfDay(endDate.getDate(), endDate.getMonth(), endDate.getFullYear()).lastDay;
            setInitialView(currentView);
        } else if (currentView == "resourceTimeGridWeek" || currentView == "timeGridWeek") {
            //setDay(0);
            setWeek(getWeek(startDate));
            //setMonth(0);
            //setYear(0);
            firstDay = getFirstAndLastDayOfWeek(year, getWeek(startDate)).firstDay;
            lastDay = getFirstAndLastDayOfWeek(year, getWeek(endDate)).lastDay;
            setInitialView(currentView);
        } else if (currentView == "dayGridMonth") {
            setDay(0);
            setWeek(0);
            setMonth(startDate.getMonth() + 1);
            setYear(0);
            firstDay = getFirstAndLastDayOfMonth(startDate.getMonth(), startDate.getFullYear()).firstDay;
            lastDay = getFirstAndLastDayOfMonth(endDate.getMonth(), endDate.getFullYear()).lastDay;
            setInitialView("resourceTimeGridDay");
        } else if (currentView == "year") {
            setDay(0);
            setWeek(0);
            setMonth(0);
            setYear(startDate.getFullYear());
            //setYear(0);
            firstDay = getFirstAndLastDayOfYear(startDate.getFullYear()).firstDay;
            lastDay = getFirstAndLastDayOfYear(endDate.getFullYear()).lastDay;
            setInitialView("resourceTimeGridDay");
        } else {
            setDay(startDate.getDate());
            setWeek(0);
            setMonth(0);
            setYear(0);
            firstDay = getFirstAndLastDayOfDay(startDate.getDate(), month - 1, year).firstDay;
            lastDay = getFirstAndLastDayOfDay(endDate.getDate(), month - 1, year).lastDay;
            //setWeek(0);
            setInitialView(currentView);
        }

        //setMonth(startDate.getMonth() + 1);
        //setYear(startDate.getFullYear());
        setFirstDay(firstDay);
        setLastDay(lastDay);
        console.log(`Nouvelle période : ${new Date(startDate)} - ${endDate}`);
        console.log(`Vue actuelle : ${currentView}`);

        // Vous pouvez ici recharger les événements pour cette période
        // Exemple : fetchEvents(startDate, endDate);
    };

    return (
        <div style={{ margin: "20px" }}>
            <FullCalendar
                ref={calendarRef}
                plugins={[resourceTimeGridPlugin, interactionPlugin, dayGridPlugin]}
                //initialView="resourceTimeGridDay"
                initialView={initialView}
                initialDate={today.toISOString()} // S'assurer que la période inclut vos événements
                firstDay={1} // Commence la semaine le lundi
                slotMinTime={slotMinTime}
                slotMaxTime={slotMaxTime}
                slotLabelContent={(info) => {
                    if (info.text === "all-day") {
                        return "Toute la journée"; // Remplace "all-day"
                    }
                    return info.text; // Conserve les autres labels
                }}
                //scrollTime="09:00:00" // Scroll automatique à 9h
                locale="fr"
                editable={true}
                selectable={true}
                resources={isResourceView ? resources : null}
                //resourceDidMount={handleResourceMount} // Appliquer les styles au montage des ressources
                events={events}
                views={{
                    year: {
                        type: "dayGrid", // Utilisation de la grille pour afficher l'année
                        //type: "dayGrid", // Utilisation de la grille pour afficher l'année
                        duration: { years: 1 }, // Plage de temps : 1 an
                        buttonText: "Année", // Texte du bouton
                    },
                }}
                headerToolbar={{
                    left: "prev,next today refreshButton",
                    center: `title`,
                    right: rightToolbar,
                    //right: "timeGridDay,timeGridWeek,dayGridMonth,year",
                }}
                titleFormat={{
                    year: "numeric", // Année complète (ex : 2024)
                    month: "long",   // Mois en lettres (ex : novembre)
                    day: "numeric",  // Jour (ex : 28)
                    weekday: "short", // Nom du jour (ex : jeudi)
                }}
                buttonText={{
                    today: "Aujourd'hui",  // Change le texte du bouton "today"
                    day: "Jour",           // Change le texte du bouton "day"
                    week: "Semaine",       // Change le texte du bouton "week"
                    month: "Mois",         // Si utilisé, change "month"
                    resourceTimeGridDay: "Jour",
                    resourceTimeGridWeek: "Semaine",
                    dayGridMonth: "Mois",
                    year: "Année", // Texte du bouton année
                }}
                customButtons={{
                    refreshButton: {
                        text: "Actualiser",
                        click: handleRefresh,
                        classNames: ['fc-refresh-button'], // Classe CSS personnalisée
                    },
                }}
                datesSet={handleDatesSet} // Appelé à chaque changement de période
                eventContent={renderEventContent} // Customisation des événements
                eventClick={handleEventClick} // Gestion du clic sur un événement
                height="auto"
            />
        </div>
    );
};

export default Calendar;
