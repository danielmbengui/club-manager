"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import { GlobalStyles } from "./GlobalStyles";
import { SidebarDevlink } from "./SidebarDevlink";
import { DevLinkNavBarSwitchTheme } from "./DevLinkNavBarSwitchTheme";
import { ButtonPrimary } from "./ButtonPrimary";
import { DialogUpdateClub } from "./DialogUpdateClub";

const _interactionsData = JSON.parse(
  '{"events":{"e-9":{"id":"e-9","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-304"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"1bf7d8b1-45bf-7ee7-4978-3821b784e19b","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"1bf7d8b1-45bf-7ee7-4978-3821b784e19b","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1684414757890},"e-7":{"id":"e-7","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-306"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"1bf7d8b1-45bf-7ee7-4978-3821b784e19d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"1bf7d8b1-45bf-7ee7-4978-3821b784e19d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1684414757890},"e-16":{"id":"e-16","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-17"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"65edcb06e424209e95092c7e|1fc86f64-e14b-b0d7-6c3f-bb9669afcfbf","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65edcb06e424209e95092c7e|1fc86f64-e14b-b0d7-6c3f-bb9669afcfbf","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1706887097380},"e-18":{"id":"e-18","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-19"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"65edcb06e424209e95092c7e|1fc86f64-e14b-b0d7-6c3f-bb9669afcfc1","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65edcb06e424209e95092c7e|1fc86f64-e14b-b0d7-6c3f-bb9669afcfc1","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1706887097380},"e-20":{"id":"e-20","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-21"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"65edcb06e424209e95092c82|1fc86f64-e14b-b0d7-6c3f-bb9669afcfbf","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65edcb06e424209e95092c82|1fc86f64-e14b-b0d7-6c3f-bb9669afcfbf","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1708104615453},"e-22":{"id":"e-22","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-23"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"65edcb06e424209e95092c82|1fc86f64-e14b-b0d7-6c3f-bb9669afcfc1","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65edcb06e424209e95092c82|1fc86f64-e14b-b0d7-6c3f-bb9669afcfc1","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1708104615453},"e-24":{"id":"e-24","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-25"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"65edcb06e424209e95092c83|1fc86f64-e14b-b0d7-6c3f-bb9669afcfbf","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65edcb06e424209e95092c83|1fc86f64-e14b-b0d7-6c3f-bb9669afcfbf","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1708104787165},"e-26":{"id":"e-26","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-27"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"65edcb06e424209e95092c83|1fc86f64-e14b-b0d7-6c3f-bb9669afcfc1","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65edcb06e424209e95092c83|1fc86f64-e14b-b0d7-6c3f-bb9669afcfc1","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1708104787165},"e-160":{"id":"e-160","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-161"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"6650fca0bdd809151a219ff1|1fc86f64-e14b-b0d7-6c3f-bb9669afcfbf","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6650fca0bdd809151a219ff1|1fc86f64-e14b-b0d7-6c3f-bb9669afcfbf","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1716583585383},"e-162":{"id":"e-162","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-163"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"6650fca0bdd809151a219ff1|1fc86f64-e14b-b0d7-6c3f-bb9669afcfc1","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6650fca0bdd809151a219ff1|1fc86f64-e14b-b0d7-6c3f-bb9669afcfc1","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1716583585383},"e-204":{"id":"e-204","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-36","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-205"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"65edcb06e424209e95092c80|4d7cab3d-9000-1d9f-aefe-022edc3ae44f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65edcb06e424209e95092c80|4d7cab3d-9000-1d9f-aefe-022edc3ae44f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1727470895089},"e-206":{"id":"e-206","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-36","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-207"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"65edcb06e424209e95092c80|4d7cab3d-9000-1d9f-aefe-022edc3ae451","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65edcb06e424209e95092c80|4d7cab3d-9000-1d9f-aefe-022edc3ae451","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1727470895089},"e-258":{"id":"e-258","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-305"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"3bf6ef48-906c-6954-3b84-47cb5cf21b00","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"3bf6ef48-906c-6954-3b84-47cb5cf21b00","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1727734053325},"e-260":{"id":"e-260","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-307"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"3bf6ef48-906c-6954-3b84-47cb5cf21b02","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"3bf6ef48-906c-6954-3b84-47cb5cf21b02","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1727734053325},"e-274":{"id":"e-274","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-275"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"cd5dc5ca-f5d4-aeec-6107-f3c88afbc67c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"cd5dc5ca-f5d4-aeec-6107-f3c88afbc67c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1727736126886},"e-276":{"id":"e-276","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-277"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"cd5dc5ca-f5d4-aeec-6107-f3c88afbc67e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"cd5dc5ca-f5d4-aeec-6107-f3c88afbc67e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1727736126886},"e-298":{"id":"e-298","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-305"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"0f103e9a-02fc-bbae-2ea7-466330996187","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"0f103e9a-02fc-bbae-2ea7-466330996187","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1727736965141},"e-300":{"id":"e-300","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-307"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"0f103e9a-02fc-bbae-2ea7-466330996189","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"0f103e9a-02fc-bbae-2ea7-466330996189","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1727736965141},"e-308":{"id":"e-308","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-309"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"56d276ce-6ef8-b699-75b4-3571b6bf318f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"56d276ce-6ef8-b699-75b4-3571b6bf318f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1727737404364},"e-310":{"id":"e-310","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-311"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"56d276ce-6ef8-b699-75b4-3571b6bf3191","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"56d276ce-6ef8-b699-75b4-3571b6bf3191","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1727737404364},"e-330":{"id":"e-330","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-15","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-331"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"1d79fb3d-b5bf-56f9-e330-87bfac0d3ca8","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"1d79fb3d-b5bf-56f9-e330-87bfac0d3ca8","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1732745899410},"e-336":{"id":"e-336","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-15","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-337"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"66fb2c3610e83aab5b8821eb|52247f3d-6017-5e88-79e4-b513a8b52d8f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"66fb2c3610e83aab5b8821eb|52247f3d-6017-5e88-79e4-b513a8b52d8f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1732745961348},"e-348":{"id":"e-348","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-29","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-349"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"f42e5cda-eed9-f905-f06b-5b7ab230bf02","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"f42e5cda-eed9-f905-f06b-5b7ab230bf02","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1732804780818}},"actionLists":{"a-8":{"id":"a-8","title":"Topbar 3 Search [Close]","actionItemGroups":[{"actionItems":[{"id":"a-8-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuad","duration":200,"target":{"selector":".topbar3_search-tablet","selectorGuids":["46f22993-c095-a3c8-9aa4-d6a267c87fcd"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-8-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".topbar3_search-tablet","selectorGuids":["46f22993-c095-a3c8-9aa4-d6a267c87fcd"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1684414258357},"a-36":{"id":"a-36","title":"Topbar 3 Search [Close] 2","actionItemGroups":[{"actionItems":[{"id":"a-36-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuad","duration":200,"target":{"selector":".topbar3_search-tablet","selectorGuids":["46f22993-c095-a3c8-9aa4-d6a267c87fcd"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-36-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".topbar3_search-tablet","selectorGuids":["46f22993-c095-a3c8-9aa4-d6a267c87fcd"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1684414258357},"a-15":{"id":"a-15","title":"Court Add Modal [Open]","actionItemGroups":[{"actionItems":[{"id":"a-15-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".court_add_modal_component","selectorGuids":["9ff96c2b-fec8-2616-95a4-c290ac491921"]},"value":"none"}},{"id":"a-15-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".court_add_modal_content-wrapper","selectorGuids":["9ff96c2b-fec8-2616-95a4-c290ac491922"]},"xValue":100,"xUnit":"%","yUnit":"PX","zUnit":"PX"}},{"id":"a-15-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".court_add_modal_background-overlay","selectorGuids":["9ff96c2b-fec8-2616-95a4-c290ac491926"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-15-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".court_add_modal_component","selectorGuids":["9ff96c2b-fec8-2616-95a4-c290ac491921"]},"value":"flex"}},{"id":"a-15-n-5","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuad","duration":500,"target":{"selector":".court_add_modal_content-wrapper","selectorGuids":["9ff96c2b-fec8-2616-95a4-c290ac491922"]},"xValue":0,"xUnit":"%","yUnit":"PX","zUnit":"PX"}},{"id":"a-15-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":500,"target":{"selector":".court_add_modal_background-overlay","selectorGuids":["9ff96c2b-fec8-2616-95a4-c290ac491926"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1644220869174},"a-29":{"id":"a-29","title":"Club Update Modal [Open]","actionItemGroups":[{"actionItems":[{"id":"a-29-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".club_update_modal_component","selectorGuids":["7474e86f-569e-f48d-4970-2e90c743377c"]},"value":"none"}},{"id":"a-29-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".club_update_modal_content-wrapper","selectorGuids":["0ed80bed-00f2-1354-4a84-10aa6d690dfe"]},"xValue":100,"xUnit":"%","yUnit":"PX","zUnit":"PX"}},{"id":"a-29-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".club_update_modal_background-overlay","selectorGuids":["7e689950-943f-a480-a97a-aa2b580f3c77"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-29-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".club_update_modal_component","selectorGuids":["7474e86f-569e-f48d-4970-2e90c743377c"]},"value":"flex"}},{"id":"a-29-n-5","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuad","duration":500,"target":{"selector":".club_update_modal_content-wrapper","selectorGuids":["0ed80bed-00f2-1354-4a84-10aa6d690dfe"]},"xValue":0,"xUnit":"%","yUnit":"PX","zUnit":"PX"}},{"id":"a-29-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":500,"target":{"selector":".club_update_modal_background-overlay","selectorGuids":["7e689950-943f-a480-a97a-aa2b580f3c77"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1644220869174}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function ClubPage({
  as: _Component = _Builtin.Block,
  titlePage = "Club",
  clubName = "PlayPad Test",
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

  styleClub,
  street = (
    <>
      {"Rue ...."}
      <br />
    </>
  ),
  street1 = (
    <>
      {"Rue ...."}
      <br />
    </>
  ),
  hasStreet1 = true,
  zipCode = (
    <>
      {"Code Postal"}
      <br />
    </>
  ),
  city = (
    <>
      {"ville"}
      <br />
    </>
  ),
  country = "pays",
  email = "info@airpad.ch",
  phone = "phone",
  website = "https://www.airpad.ch",
  componentSwitch,
  componentLogoClub,
  standardPriceList,
  weekPriceList,
  specialPriceList,
  standardOpeningList,
  weekOpeningList,
  specialOpeningList,
  componentSites,
  componentCourts,
  textfieldClubName,
  textfieldClubPhone,
  textfieldClubMail,
  textfieldClubWebsite,
  isEditing = true,
  isLoading = true,
  isSuccess = true,
  isError = true,
  textfieldClubAddress,
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
                linkManage={linkManage}
                linkCalendar={linkCalendar}
                linkBilling={linkBilling}
                linkClub={linkClub}
                linkSettings={linkSettings}
                styleClub={styleClub}
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
                    id="w-node-_0f103e9a-02fc-bbae-2ea7-466330996174-82900087"
                    tag="div"
                  >
                    <_Builtin.HtmlEmbed
                      className="icon-embed-xxsmall devlink"
                      value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20x%3D%220%22%20y%3D%220%22%20viewBox%3D%220%200%20512%20512%22%20style%3D%22enable-background%3Anew%200%200%20512%20512%22%20xml%3Aspace%3D%22preserve%22%20class%3D%22hovered-paths%22%3E%3Cg%3E%3Cpath%20d%3D%22m498.195%20222.695-.035-.035L289.305%2013.813C280.402%204.905%20268.566%200%20255.977%200c-12.59%200-24.426%204.902-33.332%2013.809L13.898%20222.55c-.07.07-.14.144-.21.215-18.282%2018.386-18.25%2048.218.09%2066.558%208.378%208.383%2019.445%2013.238%2031.277%2013.746.48.047.965.07%201.453.07h8.324v153.7C54.832%20487.254%2079.578%20512%20110%20512h81.71c8.282%200%2015-6.715%2015-15V376.5c0-13.879%2011.29-25.168%2025.169-25.168h48.195c13.88%200%2025.168%2011.29%2025.168%2025.168V497c0%208.285%206.715%2015%2015%2015h81.711c30.422%200%2055.168-24.746%2055.168-55.16v-153.7h7.719c12.586%200%2024.422-4.902%2033.332-13.808%2018.36-18.371%2018.367-48.254.023-66.637zm0%200%22%20fill%3D%22currentColor%22%20opacity%3D%221%22%20data-original%3D%22%23000000%22%20class%3D%22hovered-path%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E"
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
                      data-w-id="0f103e9a-02fc-bbae-2ea7-466330996187"
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
                    data-w-id="0f103e9a-02fc-bbae-2ea7-466330996189"
                    tag="div"
                  />
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block className="shell3_inner-wrapper" tag="div">
                <_Builtin.HtmlEmbed
                  className="shell3_inner-wrapper-height"
                  value="%3Cstyle%3E%0A%2F*%20This%20code%20adjusts%20the%20height%20of%20the%20main%20content%20to%20work%20with%20the%20topbar%20and%20fit%20within%20the%20viewport%20height%20*%2F%0A.shell3_inner-wrapper%20%7B%0A%20%20height%3A%20calc(100vh%20-%204.5rem)%3B%20%2F*%204.5rem%20reflects%20the%20height%20of%20the%20topbar%20*%2F%0A%7D%0A%3C%2Fstyle%3E"
                />
                <_Builtin.Block className="section_shell3-layout" tag="div">
                  <_Builtin.Block
                    className="padding-horizontal padding-medium"
                    tag="div"
                  >
                    <_Builtin.Block className="container-large" tag="div">
                      <_Builtin.Block
                        className="padding-vertical padding-small"
                        tag="div"
                      >
                        <_Builtin.TabsWrapper
                          className="tabs"
                          current="informations"
                          easing="ease"
                          fadeIn={300}
                          fadeOut={100}
                        >
                          <_Builtin.TabsMenu className="tabs_menu" tag="div">
                            <_Builtin.TabsLink
                              className="tab_link devlink"
                              data-w-tab="informations"
                              block="inline"
                            >
                              <_Builtin.Block tag="div">
                                {"Informations du club"}
                              </_Builtin.Block>
                            </_Builtin.TabsLink>
                            <_Builtin.TabsLink
                              className="tab_link devlink"
                              data-w-tab="Sites"
                              block="inline"
                            >
                              <_Builtin.Block tag="div">
                                {"Sites"}
                              </_Builtin.Block>
                            </_Builtin.TabsLink>
                            <_Builtin.TabsLink
                              className="tab_link devlink"
                              data-w-tab="Terrains"
                              block="inline"
                            >
                              <_Builtin.Block tag="div">
                                {"Terrains"}
                              </_Builtin.Block>
                            </_Builtin.TabsLink>
                            <_Builtin.TabsLink
                              className="tab_link devlink"
                              data-w-tab="Tarifs"
                              block="inline"
                            >
                              <_Builtin.Block tag="div">
                                {"Tarifs"}
                              </_Builtin.Block>
                            </_Builtin.TabsLink>
                            <_Builtin.TabsLink
                              className="tab_link devlink"
                              data-w-tab="Horaires"
                              block="inline"
                            >
                              <_Builtin.Block tag="div">
                                {"Horaires"}
                              </_Builtin.Block>
                            </_Builtin.TabsLink>
                          </_Builtin.TabsMenu>
                          <_Builtin.TabsContent tag="div">
                            <_Builtin.TabsPane
                              tag="div"
                              data-w-tab="informations"
                            >
                              <_Builtin.Block className="card" tag="div">
                                <_Builtin.Block
                                  className="card_component"
                                  tag="div"
                                >
                                  <_Builtin.Block
                                    className="clubinfo_component"
                                    tag="div"
                                  >
                                    <_Builtin.Block
                                      className="clubinfo_right"
                                      tag="div"
                                    >
                                      <_Builtin.Block
                                        className="clubinfo_row title"
                                        tag="div"
                                      >
                                        <_Builtin.Block
                                          className="settings_label-title"
                                          tag="div"
                                        >
                                          {"Médias"}
                                        </_Builtin.Block>
                                      </_Builtin.Block>
                                      <_Builtin.Block
                                        className="clubinfo_row"
                                        tag="div"
                                      >
                                        <_Builtin.Block
                                          className="settings_label"
                                          tag="div"
                                        >
                                          {"Logo :"}
                                        </_Builtin.Block>
                                        <_Builtin.Image
                                          className="settings_profil_img"
                                          width="auto"
                                          height="auto"
                                          loading="lazy"
                                          wized="settings_photo"
                                          alt=""
                                          src="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg"
                                        />
                                      </_Builtin.Block>
                                      <_Builtin.Block
                                        className="clubinfo_row"
                                        tag="div"
                                      >
                                        <_Builtin.Block
                                          className="settings_label"
                                          tag="div"
                                        >
                                          {"Image principal :"}
                                        </_Builtin.Block>
                                        <_Builtin.Image
                                          className="settings_backgroundcard"
                                          width="auto"
                                          height="auto"
                                          loading="lazy"
                                          wized="settings_bg_img"
                                          alt=""
                                          src="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg"
                                        />
                                      </_Builtin.Block>
                                    </_Builtin.Block>
                                    <_Builtin.Block
                                      className="clubinfo_left"
                                      tag="div"
                                    >
                                      <_Builtin.Block
                                        className="clubinfo_row title"
                                        tag="div"
                                      >
                                        <_Builtin.Block
                                          className="settings_label-title devlink"
                                          tag="div"
                                        >
                                          {"Informations du Club"}
                                        </_Builtin.Block>
                                        <_Builtin.Block
                                          data-w-id="f42e5cda-eed9-f905-f06b-5b7ab230bf02"
                                          tag="div"
                                        >
                                          <ButtonPrimary text="Modifier informations" />
                                        </_Builtin.Block>
                                      </_Builtin.Block>
                                      <_Builtin.Block
                                        className="clubinfo_row"
                                        tag="div"
                                      >
                                        <_Builtin.Block
                                          className="settings_label devlink"
                                          tag="div"
                                        >
                                          {"Logo du club :"}
                                        </_Builtin.Block>
                                        <_Builtin.Block
                                          className="div-block-36"
                                          tag="div"
                                        >
                                          <_Builtin.Block
                                            className="div-block-37"
                                            tag="div"
                                          >
                                            {componentLogoClub}
                                          </_Builtin.Block>
                                        </_Builtin.Block>
                                      </_Builtin.Block>
                                      <_Builtin.Block
                                        className="clubinfo_row"
                                        tag="div"
                                      >
                                        <_Builtin.Block
                                          className="settings_label devlink"
                                          tag="div"
                                        >
                                          {"Nom du club :"}
                                        </_Builtin.Block>
                                        <_Builtin.Block
                                          className="devlink"
                                          tag="div"
                                          wized="settings_name"
                                        >
                                          {clubName}
                                        </_Builtin.Block>
                                      </_Builtin.Block>
                                      <_Builtin.Block
                                        className="clubinfo_row"
                                        tag="div"
                                      >
                                        <_Builtin.Block
                                          className="settings_label devlink"
                                          tag="div"
                                        >
                                          {"Adresse du club :"}
                                        </_Builtin.Block>
                                        <_Builtin.Block
                                          className="settings_address-block"
                                          tag="div"
                                        >
                                          <_Builtin.Block
                                            className="devlink"
                                            tag="div"
                                            wized="settings_street"
                                          >
                                            {street}
                                          </_Builtin.Block>
                                          {hasStreet1 ? (
                                            <_Builtin.Block
                                              className="devlink"
                                              tag="div"
                                              wized="settings_street"
                                            >
                                              {street1}
                                            </_Builtin.Block>
                                          ) : null}
                                          <_Builtin.Block
                                            className="div-block-38"
                                            tag="div"
                                          >
                                            <_Builtin.Block
                                              className="devlink"
                                              tag="div"
                                              wized="settings_zipcode"
                                            >
                                              {zipCode}
                                            </_Builtin.Block>
                                            <_Builtin.Block
                                              className="devlink"
                                              tag="div"
                                              wized="settings_city"
                                            >
                                              {city}
                                            </_Builtin.Block>
                                          </_Builtin.Block>
                                          <_Builtin.Block
                                            className="devlink"
                                            tag="div"
                                            wized="settings_city"
                                          >
                                            {country}
                                          </_Builtin.Block>
                                        </_Builtin.Block>
                                      </_Builtin.Block>
                                      <_Builtin.Block
                                        className="clubinfo_row"
                                        tag="div"
                                      >
                                        <_Builtin.Block
                                          className="settings_label devlink"
                                          tag="div"
                                        >
                                          {"Contact du club :"}
                                        </_Builtin.Block>
                                        <_Builtin.Block
                                          className="clubinfo_contact-block"
                                          tag="div"
                                        >
                                          <_Builtin.Block
                                            className="settings_text devlink"
                                            tag="div"
                                            wized="settings_email"
                                          >
                                            {email}
                                          </_Builtin.Block>
                                          <_Builtin.Block
                                            className="settings_text devlink"
                                            tag="div"
                                            wized="settings_phone"
                                          >
                                            {phone}
                                          </_Builtin.Block>
                                        </_Builtin.Block>
                                      </_Builtin.Block>
                                      <_Builtin.Block
                                        className="clubinfo_row"
                                        tag="div"
                                      >
                                        <_Builtin.Block
                                          className="settings_label devlink"
                                          tag="div"
                                        >
                                          {"Website :"}
                                        </_Builtin.Block>
                                        <_Builtin.Block
                                          className="link devlink"
                                          tag="div"
                                          wized="settings_website"
                                        >
                                          {website}
                                        </_Builtin.Block>
                                      </_Builtin.Block>
                                    </_Builtin.Block>
                                  </_Builtin.Block>
                                </_Builtin.Block>
                              </_Builtin.Block>
                            </_Builtin.TabsPane>
                            <_Builtin.TabsPane tag="div" data-w-tab="Sites">
                              <_Builtin.Block className="card_header" tag="div">
                                <_Builtin.Block
                                  className="heading-style-h5"
                                  tag="div"
                                >
                                  {"Sites"}
                                </_Builtin.Block>
                                <_Builtin.Block
                                  className="card_header_left-content"
                                  tag="div"
                                >
                                  <_Builtin.Link
                                    className="button is-icon is-tiny green site"
                                    data-w-id="1d79fb3d-b5bf-56f9-e330-87bfac0d3ca8"
                                    button={false}
                                    block="inline"
                                    options={{
                                      href: "#",
                                    }}
                                  >
                                    <_Builtin.Block tag="div">
                                      {"Ajouter un site"}
                                    </_Builtin.Block>
                                    <_Builtin.HtmlEmbed
                                      className="icon-embed-xxxsmall"
                                      value="%3Csvg%20width%3D%22auto%22%20height%3D%22auto%22%20viewBox%3D%220%200%2011%2013%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M0%200.464286L0%2012.5357C0%2012.6589%200.0643849%2012.7769%200.17899%2012.864C0.293596%2012.9511%200.449034%2013%200.611111%2013H10.3889C10.551%2013%2010.7064%2012.9511%2010.821%2012.864C10.9356%2012.7769%2011%2012.6589%2011%2012.5357L11%200.464286C11%200.34115%2010.9356%200.223057%2010.821%200.135986C10.7064%200.0489159%2010.551%200%2010.3889%200H0.611111C0.449034%200%200.293596%200.0489159%200.17899%200.135986C0.0643849%200.223057%200%200.34115%200%200.464286ZM1.22222%204.17857H4.88889L4.88889%208.82143H1.22222L1.22222%204.17857ZM1.22222%2012.0714L1.22222%209.75H9.77778V12.0714H1.22222ZM9.77778%208.82143H6.11111L6.11111%204.17857H9.77778V8.82143ZM9.77778%200.928572V3.25H1.22222L1.22222%200.928572H9.77778Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                                    />
                                  </_Builtin.Link>
                                </_Builtin.Block>
                              </_Builtin.Block>
                              <_Builtin.Block
                                className="courts_grid devlink"
                                tag="div"
                              >
                                <_Builtin.Block
                                  className="block-sites"
                                  id="w-node-c9ef8c45-656a-cd57-b4e4-0963468e8d2e-82900087"
                                  tag="div"
                                >
                                  {componentSites}
                                </_Builtin.Block>
                              </_Builtin.Block>
                            </_Builtin.TabsPane>
                            <_Builtin.TabsPane tag="div" data-w-tab="Terrains">
                              <_Builtin.Block className="card_header" tag="div">
                                <_Builtin.Block
                                  className="heading-style-h5"
                                  tag="div"
                                >
                                  {"Terrains"}
                                </_Builtin.Block>
                                <_Builtin.Block
                                  className="card_header_left-content"
                                  tag="div"
                                >
                                  <_Builtin.Link
                                    className="button is-icon is-tiny green is-hide"
                                    data-w-id="52247f3d-6017-5e88-79e4-b513a8b52d8f"
                                    button={false}
                                    block="inline"
                                    options={{
                                      href: "#",
                                    }}
                                  >
                                    <_Builtin.Block tag="div">
                                      {"Ajouter un terrain"}
                                    </_Builtin.Block>
                                    <_Builtin.HtmlEmbed
                                      className="icon-embed-xxxsmall"
                                      value="%3Csvg%20width%3D%22auto%22%20height%3D%22auto%22%20viewBox%3D%220%200%2011%2013%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M0%200.464286L0%2012.5357C0%2012.6589%200.0643849%2012.7769%200.17899%2012.864C0.293596%2012.9511%200.449034%2013%200.611111%2013H10.3889C10.551%2013%2010.7064%2012.9511%2010.821%2012.864C10.9356%2012.7769%2011%2012.6589%2011%2012.5357L11%200.464286C11%200.34115%2010.9356%200.223057%2010.821%200.135986C10.7064%200.0489159%2010.551%200%2010.3889%200H0.611111C0.449034%200%200.293596%200.0489159%200.17899%200.135986C0.0643849%200.223057%200%200.34115%200%200.464286ZM1.22222%204.17857H4.88889L4.88889%208.82143H1.22222L1.22222%204.17857ZM1.22222%2012.0714L1.22222%209.75H9.77778V12.0714H1.22222ZM9.77778%208.82143H6.11111L6.11111%204.17857H9.77778V8.82143ZM9.77778%200.928572V3.25H1.22222L1.22222%200.928572H9.77778Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                                    />
                                  </_Builtin.Link>
                                </_Builtin.Block>
                              </_Builtin.Block>
                              <_Builtin.Block
                                className="courts_grid devlink"
                                tag="div"
                              >
                                <_Builtin.Block
                                  className="block-sites"
                                  id="w-node-ebcba32c-50fd-6c1c-4c46-bd6656345350-82900087"
                                  tag="div"
                                >
                                  {componentCourts}
                                </_Builtin.Block>
                              </_Builtin.Block>
                            </_Builtin.TabsPane>
                            <_Builtin.TabsPane tag="div" data-w-tab="Tarifs">
                              <_Builtin.Block className="card" tag="div">
                                <_Builtin.Block
                                  className="clubinfo_component price"
                                  tag="div"
                                >
                                  <_Builtin.Block
                                    className="clubinfo_left"
                                    tag="div"
                                  >
                                    <_Builtin.Block
                                      className="clubinfo_row title"
                                      tag="div"
                                    >
                                      <_Builtin.Block
                                        className="settings_label-title devlink"
                                        tag="div"
                                      >
                                        {"Tarifs standard"}
                                      </_Builtin.Block>
                                      <ButtonPrimary text="Modifier" />
                                    </_Builtin.Block>
                                    <_Builtin.Block
                                      className="div-block-club-price"
                                      tag="div"
                                    >
                                      {standardPriceList}
                                    </_Builtin.Block>
                                  </_Builtin.Block>
                                </_Builtin.Block>
                                <_Builtin.Block
                                  className="clubinfo_component price"
                                  tag="div"
                                >
                                  <_Builtin.Block
                                    className="clubinfo_left"
                                    tag="div"
                                  >
                                    <_Builtin.Block
                                      className="clubinfo_row title"
                                      tag="div"
                                    >
                                      <_Builtin.Block
                                        className="settings_label-title devlink"
                                        tag="div"
                                      >
                                        {"Tarifs semaine"}
                                      </_Builtin.Block>
                                      <ButtonPrimary text="Modifier" />
                                    </_Builtin.Block>
                                    <_Builtin.Block
                                      className="div-block-club-price"
                                      tag="div"
                                    >
                                      {weekPriceList}
                                    </_Builtin.Block>
                                  </_Builtin.Block>
                                </_Builtin.Block>
                                <_Builtin.Block
                                  className="clubinfo_component price"
                                  tag="div"
                                >
                                  <_Builtin.Block
                                    className="clubinfo_left"
                                    tag="div"
                                  >
                                    <_Builtin.Block
                                      className="clubinfo_row title"
                                      tag="div"
                                    >
                                      <_Builtin.Block
                                        className="settings_label-title devlink"
                                        tag="div"
                                      >
                                        {"Tarifs spéciaux"}
                                      </_Builtin.Block>
                                      <ButtonPrimary text="Modifier" />
                                    </_Builtin.Block>
                                    <_Builtin.Block
                                      className="div-block-club-price"
                                      tag="div"
                                    >
                                      {specialPriceList}
                                    </_Builtin.Block>
                                  </_Builtin.Block>
                                </_Builtin.Block>
                              </_Builtin.Block>
                            </_Builtin.TabsPane>
                            <_Builtin.TabsPane tag="div" data-w-tab="Horaires">
                              <_Builtin.Block className="card" tag="div">
                                <_Builtin.Block
                                  className="clubinfo_component price"
                                  tag="div"
                                >
                                  <_Builtin.Block
                                    className="clubinfo_left"
                                    tag="div"
                                  >
                                    <_Builtin.Block
                                      className="clubinfo_row title"
                                      tag="div"
                                    >
                                      <_Builtin.Block
                                        className="settings_label-title devlink"
                                        tag="div"
                                      >
                                        {"Horaires standard"}
                                      </_Builtin.Block>
                                      <ButtonPrimary text="Modifier" />
                                    </_Builtin.Block>
                                    <_Builtin.Block
                                      className="div-block-club-price"
                                      tag="div"
                                    >
                                      {standardOpeningList}
                                    </_Builtin.Block>
                                  </_Builtin.Block>
                                </_Builtin.Block>
                                <_Builtin.Block
                                  className="clubinfo_component price"
                                  tag="div"
                                >
                                  <_Builtin.Block
                                    className="clubinfo_left"
                                    tag="div"
                                  >
                                    <_Builtin.Block
                                      className="clubinfo_row title"
                                      tag="div"
                                    >
                                      <_Builtin.Block
                                        className="settings_label-title devlink"
                                        tag="div"
                                      >
                                        {"Horaires semaine"}
                                      </_Builtin.Block>
                                      <ButtonPrimary text="Modifier" />
                                    </_Builtin.Block>
                                    <_Builtin.Block
                                      className="div-block-club-price"
                                      tag="div"
                                    >
                                      {weekOpeningList}
                                    </_Builtin.Block>
                                  </_Builtin.Block>
                                </_Builtin.Block>
                                <_Builtin.Block
                                  className="clubinfo_component price"
                                  tag="div"
                                >
                                  <_Builtin.Block
                                    className="clubinfo_left"
                                    tag="div"
                                  >
                                    <_Builtin.Block
                                      className="clubinfo_row title"
                                      tag="div"
                                    >
                                      <_Builtin.Block
                                        className="settings_label-title devlink"
                                        tag="div"
                                      >
                                        {"Horaires spéciaux"}
                                      </_Builtin.Block>
                                      <ButtonPrimary text="Modifier" />
                                    </_Builtin.Block>
                                    <_Builtin.Block
                                      className="div-block-club-price"
                                      tag="div"
                                    >
                                      {specialOpeningList}
                                    </_Builtin.Block>
                                  </_Builtin.Block>
                                </_Builtin.Block>
                              </_Builtin.Block>
                            </_Builtin.TabsPane>
                          </_Builtin.TabsContent>
                        </_Builtin.TabsWrapper>
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <DialogUpdateClub
        textfieldClubName={textfieldClubName}
        textfieldClubPhone={textfieldClubPhone}
        textfieldClubMail={textfieldClubMail}
        textfieldClubWebsite={textfieldClubWebsite}
        isEditing={isEditing}
        isLoading={isLoading}
        isSuccess={isSuccess}
        isError={isError}
        textfieldClubAddress={textfieldClubAddress}
      />
    </_Component>
  );
}
