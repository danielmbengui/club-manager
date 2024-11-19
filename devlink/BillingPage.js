"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import { GlobalStyles } from "./GlobalStyles";
import { SidebarDevlink } from "./SidebarDevlink";
import { TopBarRightContent } from "./TopBarRightContent";

const _interactionsData = JSON.parse(
  '{"events":{"e-9":{"id":"e-9","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-304"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"1bf7d8b1-45bf-7ee7-4978-3821b784e19b","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"1bf7d8b1-45bf-7ee7-4978-3821b784e19b","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1684414757890},"e-7":{"id":"e-7","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-306"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"1bf7d8b1-45bf-7ee7-4978-3821b784e19d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"1bf7d8b1-45bf-7ee7-4978-3821b784e19d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1684414757890},"e-16":{"id":"e-16","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-17"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"65edcb06e424209e95092c7e|1fc86f64-e14b-b0d7-6c3f-bb9669afcfbf","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65edcb06e424209e95092c7e|1fc86f64-e14b-b0d7-6c3f-bb9669afcfbf","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1706887097380},"e-18":{"id":"e-18","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-19"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"65edcb06e424209e95092c7e|1fc86f64-e14b-b0d7-6c3f-bb9669afcfc1","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65edcb06e424209e95092c7e|1fc86f64-e14b-b0d7-6c3f-bb9669afcfc1","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1706887097380},"e-20":{"id":"e-20","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-21"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"65edcb06e424209e95092c82|1fc86f64-e14b-b0d7-6c3f-bb9669afcfbf","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65edcb06e424209e95092c82|1fc86f64-e14b-b0d7-6c3f-bb9669afcfbf","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1708104615453},"e-22":{"id":"e-22","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-23"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"65edcb06e424209e95092c82|1fc86f64-e14b-b0d7-6c3f-bb9669afcfc1","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65edcb06e424209e95092c82|1fc86f64-e14b-b0d7-6c3f-bb9669afcfc1","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1708104615453},"e-24":{"id":"e-24","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-25"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"65edcb06e424209e95092c83|1fc86f64-e14b-b0d7-6c3f-bb9669afcfbf","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65edcb06e424209e95092c83|1fc86f64-e14b-b0d7-6c3f-bb9669afcfbf","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1708104787165},"e-26":{"id":"e-26","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-27"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"65edcb06e424209e95092c83|1fc86f64-e14b-b0d7-6c3f-bb9669afcfc1","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65edcb06e424209e95092c83|1fc86f64-e14b-b0d7-6c3f-bb9669afcfc1","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1708104787165},"e-160":{"id":"e-160","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-161"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"6650fca0bdd809151a219ff1|1fc86f64-e14b-b0d7-6c3f-bb9669afcfbf","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6650fca0bdd809151a219ff1|1fc86f64-e14b-b0d7-6c3f-bb9669afcfbf","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1716583585383},"e-162":{"id":"e-162","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-163"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"6650fca0bdd809151a219ff1|1fc86f64-e14b-b0d7-6c3f-bb9669afcfc1","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6650fca0bdd809151a219ff1|1fc86f64-e14b-b0d7-6c3f-bb9669afcfc1","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1716583585383},"e-204":{"id":"e-204","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-36","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-205"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"65edcb06e424209e95092c80|4d7cab3d-9000-1d9f-aefe-022edc3ae44f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65edcb06e424209e95092c80|4d7cab3d-9000-1d9f-aefe-022edc3ae44f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1727470895089},"e-206":{"id":"e-206","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-36","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-207"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"65edcb06e424209e95092c80|4d7cab3d-9000-1d9f-aefe-022edc3ae451","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65edcb06e424209e95092c80|4d7cab3d-9000-1d9f-aefe-022edc3ae451","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1727470895089},"e-258":{"id":"e-258","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-305"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"3bf6ef48-906c-6954-3b84-47cb5cf21b00","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"3bf6ef48-906c-6954-3b84-47cb5cf21b00","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1727734053325},"e-260":{"id":"e-260","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-307"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"3bf6ef48-906c-6954-3b84-47cb5cf21b02","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"3bf6ef48-906c-6954-3b84-47cb5cf21b02","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1727734053325},"e-274":{"id":"e-274","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-275"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"cd5dc5ca-f5d4-aeec-6107-f3c88afbc67c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"cd5dc5ca-f5d4-aeec-6107-f3c88afbc67c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1727736126886},"e-276":{"id":"e-276","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-277"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"cd5dc5ca-f5d4-aeec-6107-f3c88afbc67e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"cd5dc5ca-f5d4-aeec-6107-f3c88afbc67e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1727736126886},"e-298":{"id":"e-298","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-305"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"0f103e9a-02fc-bbae-2ea7-466330996187","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"0f103e9a-02fc-bbae-2ea7-466330996187","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1727736965141},"e-300":{"id":"e-300","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-307"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"0f103e9a-02fc-bbae-2ea7-466330996189","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"0f103e9a-02fc-bbae-2ea7-466330996189","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1727736965141},"e-308":{"id":"e-308","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-309"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"56d276ce-6ef8-b699-75b4-3571b6bf318f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"56d276ce-6ef8-b699-75b4-3571b6bf318f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1727737404364},"e-310":{"id":"e-310","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-311"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"56d276ce-6ef8-b699-75b4-3571b6bf3191","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"56d276ce-6ef8-b699-75b4-3571b6bf3191","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1727737404364}},"actionLists":{"a-8":{"id":"a-8","title":"Topbar 3 Search [Close]","actionItemGroups":[{"actionItems":[{"id":"a-8-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuad","duration":200,"target":{"selector":".topbar3_search-tablet","selectorGuids":["46f22993-c095-a3c8-9aa4-d6a267c87fcd"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-8-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".topbar3_search-tablet","selectorGuids":["46f22993-c095-a3c8-9aa4-d6a267c87fcd"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1684414258357},"a-36":{"id":"a-36","title":"Topbar 3 Search [Close] 2","actionItemGroups":[{"actionItems":[{"id":"a-36-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuad","duration":200,"target":{"selector":".topbar3_search-tablet","selectorGuids":["46f22993-c095-a3c8-9aa4-d6a267c87fcd"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-36-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".topbar3_search-tablet","selectorGuids":["46f22993-c095-a3c8-9aa4-d6a267c87fcd"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1684414258357}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function BillingPage({
  as: _Component = _Builtin.Block,
  titlePage = "Facturations",
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

  styleBilling,
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
                styleBilling={styleBilling}
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
                    id="w-node-_7b41d34f-ce51-585c-24b1-e0cb3cba80af-2ee9928c"
                    tag="div"
                  >
                    <_Builtin.HtmlEmbed
                      className="icon-embed-xxsmall"
                      value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20width%3D%22auto%22%20height%3D%22auto%22%20x%3D%220%22%20y%3D%220%22%20viewBox%3D%220%200%20416.212%20416%22%20style%3D%22enable-background%3Anew%200%200%20512%20512%22%20xml%3Aspace%3D%22preserve%22%20class%3D%22%22%3E%3Cg%3E%3Cpath%20d%3D%22M234.078%20302.45H0v36.202C.027%20360.457%2016.926%20378.52%2038.684%20380c.464-.066.933-.105%201.402-.11h210.5a62.257%2062.257%200%200%201-16.508-42.273zm0%200%22%20fill%3D%22currentColor%22%20opacity%3D%221%22%20data-original%3D%22%23000000%22%20class%3D%22%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22m65.566%2026.078-1.75%20256.371h180.262c5.524%200%2010%204.48%2010%2010v45.172c0%2021.766%2017.363%2040.328%2038.676%2042.274h3.41c.547.003%201.094.05%201.633.144%2022.867-.777%2041.004-19.539%2041.008-42.418V29.266a47.735%2047.735%200%200%201%209.933-29.16H91.996c-14.465-.11-26.285%2011.511-26.43%2025.972zm42.82%2042.363h94.712c5.523%200%2010%204.477%2010%2010%200%205.524-4.477%2010-10%2010h-94.711c-5.524%200-10-4.476-10-10%200-5.523%204.476-10%2010-10zm0%2071.5H285.06c5.523%200%2010%204.477%2010%2010%200%205.524-4.477%2010-10%2010H108.387c-5.524%200-10-4.476-10-10%200-5.523%204.476-10%2010-10zm0%2071.5H285.06c5.523%200%2010%204.477%2010%2010%200%205.524-4.477%2010-10%2010H108.387c-5.524%200-10-4.476-10-10%200-5.523%204.476-10%2010-10zM387.508%201.02c-15.719-.106-28.559%2012.527-28.703%2028.246V167.71h57.406V29.266C416.066%2013.546%20403.227.91%20387.508%201.02zm0%200%22%20fill%3D%22currentColor%22%20opacity%3D%221%22%20data-original%3D%22%23000000%22%20class%3D%22%22%3E%3C%2Fpath%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                    />
                    <_Builtin.Block tag="div">{titlePage}</_Builtin.Block>
                  </_Builtin.Block>
                  <TopBarRightContent clubName={clubName} clubLogo={clubLogo} />
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
                    <_Builtin.Block className="topbar3_close-icon" tag="div">
                      <_Builtin.HtmlEmbed
                        className="icon-embed-small"
                        value="%3Csvg%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2032%2033%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M22.8354%2022.864L22.3639%2023.3354C22.1036%2023.5957%2021.6815%2023.5957%2021.4211%2023.3354L16%2017.9142L10.5788%2023.3353C10.3185%2023.5957%209.89638%2023.5957%209.63603%2023.3353L9.16462%2022.8639C8.90427%2022.6036%208.90427%2022.1815%209.16462%2021.9211L14.5858%2016.5L9.16462%2011.0788C8.90427%2010.8185%208.90427%2010.3964%209.16462%2010.136L9.63602%209.66463C9.89637%209.40428%2010.3185%209.40428%2010.5788%209.66463L16%2015.0858L21.4211%209.66462C21.6815%209.40427%2022.1036%209.40427%2022.3639%209.66462L22.8354%2010.136C23.0957%2010.3964%2023.0957%2010.8185%2022.8354%2011.0788L17.4142%2016.5L22.8354%2021.9211C23.0957%2022.1815%2023.0957%2022.6036%2022.8354%2022.864Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                      />
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className="topbar3_search-overlay"
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
                          current="general"
                          easing="ease"
                          fadeIn={300}
                          fadeOut={100}
                        >
                          <_Builtin.TabsMenu className="tabs_menu" tag="div">
                            <_Builtin.TabsLink
                              className="tab_link"
                              data-w-tab="general"
                              block="inline"
                            >
                              <_Builtin.Block tag="div">
                                {"Facturations"}
                              </_Builtin.Block>
                            </_Builtin.TabsLink>
                          </_Builtin.TabsMenu>
                          <_Builtin.TabsContent className="card" tag="div">
                            <_Builtin.TabsPane
                              className="tab_pane"
                              tag="div"
                              data-w-tab="general"
                            >
                              <_Builtin.Block
                                className="card_component"
                                tag="div"
                              >
                                <_Builtin.Block
                                  className="component_header"
                                  tag="div"
                                >
                                  <_Builtin.Block
                                    className="heading-style-h4"
                                    tag="div"
                                  >
                                    {"Facturations"}
                                  </_Builtin.Block>
                                  <_Builtin.Block tag="div">
                                    {
                                      "Retrouvez toute les factures relatives au taux de commission appliqué"
                                    }
                                  </_Builtin.Block>
                                </_Builtin.Block>
                                <_Builtin.Block
                                  className="invoice_grid"
                                  tag="div"
                                >
                                  <_Builtin.Block
                                    className="invoice_item"
                                    tag="div"
                                  >
                                    <_Builtin.Block
                                      className="invoice_header"
                                      tag="div"
                                    >
                                      <_Builtin.HtmlEmbed
                                        className="icon-1x1-custom"
                                        value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20width%3D%22auto%22%20height%3D%22auto%22%20x%3D%220%22%20y%3D%220%22%20viewBox%3D%220%200%20512%20512%22%20style%3D%22enable-background%3Anew%200%200%20512%20512%22%20xml%3Aspace%3D%22preserve%22%20class%3D%22%22%3E%3Cg%3E%3Cpath%20d%3D%22M444.875%20109.792%20338.208%203.125c-2-2-4.708-3.125-7.542-3.125h-224C83.146%200%2064%2019.135%2064%2042.667v426.667C64%20492.865%2083.146%20512%20106.667%20512h298.667c23.52%200%2042.666-19.135%2042.666-42.667v-352c0-2.833-1.125-5.541-3.125-7.541zM341.333%2036.417l70.25%2070.25h-48.917c-11.771%200-21.333-9.573-21.333-21.333V36.417zm85.334%20432.916c0%2011.76-9.563%2021.333-21.333%2021.333H106.667c-11.771%200-21.333-9.573-21.333-21.333V42.667c0-11.76%209.563-21.333%2021.333-21.333H320v64C320%20108.865%20339.146%20128%20362.667%20128h64v341.333z%22%20fill%3D%22currentColor%22%20opacity%3D%221%22%20data-original%3D%22%23000000%22%20class%3D%22%22%2F%3E%3Cpath%20d%3D%22M373.333%20298.667H138.667A10.66%2010.66%200%200%200%20128%20309.334a10.66%2010.66%200%200%200%2010.667%2010.667h234.667a10.66%2010.66%200%200%200%2010.667-10.667%2010.662%2010.662%200%200%200-10.668-10.667zM373.333%20234.667H138.667A10.66%2010.66%200%200%200%20128%20245.334a10.66%2010.66%200%200%200%2010.667%2010.667h234.667a10.66%2010.66%200%200%200%2010.667-10.667%2010.662%2010.662%200%200%200-10.668-10.667zM373.333%20362.667H138.667A10.66%2010.66%200%200%200%20128%20373.334a10.66%2010.66%200%200%200%2010.667%2010.667h234.667a10.66%2010.66%200%200%200%2010.667-10.667%2010.662%2010.662%200%200%200-10.668-10.667zM266.667%20426.667h-128A10.66%2010.66%200%200%200%20128%20437.334a10.66%2010.66%200%200%200%2010.667%2010.667h128a10.66%2010.66%200%200%200%2010.667-10.667%2010.662%2010.662%200%200%200-10.667-10.667zM234.667%20181.333A10.66%2010.66%200%200%200%20245.334%20192h128a10.66%2010.66%200%200%200%2010.667-10.667%2010.66%2010.66%200%200%200-10.667-10.667h-128a10.662%2010.662%200%200%200-10.667%2010.667zM160%20170.667h-21.333A10.66%2010.66%200%200%200%20128%20181.334a10.66%2010.66%200%200%200%2010.667%2010.667h10.667c0%205.896%204.771%2010.667%2010.667%2010.667s10.667-4.771%2010.667-10.667v-1.965C183.056%20185.617%20192%20173.888%20192%20160c0-17.646-14.354-32-32-32-5.875%200-10.667-4.781-10.667-10.667%200-5.885%204.792-10.667%2010.667-10.667h21.333c5.896%200%2010.667-4.771%2010.667-10.667s-4.771-10.667-10.667-10.667h-10.667c0-5.896-4.771-10.667-10.667-10.667s-10.667%204.771-10.667%2010.667v1.965C136.944%2091.716%20128%20103.445%20128%20117.333c0%2017.646%2014.354%2032%2032%2032%205.875%200%2010.667%204.781%2010.667%2010.667s-4.792%2010.667-10.667%2010.667z%22%20fill%3D%22currentColor%22%20opacity%3D%221%22%20data-original%3D%22%23000000%22%20class%3D%22%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                                      />
                                      <_Builtin.Block
                                        className="heading-style-h3"
                                        tag="div"
                                      >
                                        {"Avril 2024"}
                                      </_Builtin.Block>
                                    </_Builtin.Block>
                                    <_Builtin.Block tag="div">
                                      {"Frais de transactions PlayPad"}
                                    </_Builtin.Block>
                                    <_Builtin.Link
                                      className="button is-small"
                                      button={true}
                                      block=""
                                      options={{
                                        href: "#",
                                      }}
                                    >
                                      {"Télécharger PDF"}
                                    </_Builtin.Link>
                                  </_Builtin.Block>
                                  <_Builtin.Block
                                    className="invoice_item"
                                    id="w-node-_7b41d34f-ce51-585c-24b1-e0cb3cba80e2-2ee9928c"
                                    tag="div"
                                  >
                                    <_Builtin.Block
                                      className="invoice_header"
                                      tag="div"
                                    >
                                      <_Builtin.HtmlEmbed
                                        className="icon-1x1-custom"
                                        value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20width%3D%22auto%22%20height%3D%22auto%22%20x%3D%220%22%20y%3D%220%22%20viewBox%3D%220%200%20512%20512%22%20style%3D%22enable-background%3Anew%200%200%20512%20512%22%20xml%3Aspace%3D%22preserve%22%20class%3D%22%22%3E%3Cg%3E%3Cpath%20d%3D%22M444.875%20109.792%20338.208%203.125c-2-2-4.708-3.125-7.542-3.125h-224C83.146%200%2064%2019.135%2064%2042.667v426.667C64%20492.865%2083.146%20512%20106.667%20512h298.667c23.52%200%2042.666-19.135%2042.666-42.667v-352c0-2.833-1.125-5.541-3.125-7.541zM341.333%2036.417l70.25%2070.25h-48.917c-11.771%200-21.333-9.573-21.333-21.333V36.417zm85.334%20432.916c0%2011.76-9.563%2021.333-21.333%2021.333H106.667c-11.771%200-21.333-9.573-21.333-21.333V42.667c0-11.76%209.563-21.333%2021.333-21.333H320v64C320%20108.865%20339.146%20128%20362.667%20128h64v341.333z%22%20fill%3D%22currentColor%22%20opacity%3D%221%22%20data-original%3D%22%23000000%22%20class%3D%22%22%2F%3E%3Cpath%20d%3D%22M373.333%20298.667H138.667A10.66%2010.66%200%200%200%20128%20309.334a10.66%2010.66%200%200%200%2010.667%2010.667h234.667a10.66%2010.66%200%200%200%2010.667-10.667%2010.662%2010.662%200%200%200-10.668-10.667zM373.333%20234.667H138.667A10.66%2010.66%200%200%200%20128%20245.334a10.66%2010.66%200%200%200%2010.667%2010.667h234.667a10.66%2010.66%200%200%200%2010.667-10.667%2010.662%2010.662%200%200%200-10.668-10.667zM373.333%20362.667H138.667A10.66%2010.66%200%200%200%20128%20373.334a10.66%2010.66%200%200%200%2010.667%2010.667h234.667a10.66%2010.66%200%200%200%2010.667-10.667%2010.662%2010.662%200%200%200-10.668-10.667zM266.667%20426.667h-128A10.66%2010.66%200%200%200%20128%20437.334a10.66%2010.66%200%200%200%2010.667%2010.667h128a10.66%2010.66%200%200%200%2010.667-10.667%2010.662%2010.662%200%200%200-10.667-10.667zM234.667%20181.333A10.66%2010.66%200%200%200%20245.334%20192h128a10.66%2010.66%200%200%200%2010.667-10.667%2010.66%2010.66%200%200%200-10.667-10.667h-128a10.662%2010.662%200%200%200-10.667%2010.667zM160%20170.667h-21.333A10.66%2010.66%200%200%200%20128%20181.334a10.66%2010.66%200%200%200%2010.667%2010.667h10.667c0%205.896%204.771%2010.667%2010.667%2010.667s10.667-4.771%2010.667-10.667v-1.965C183.056%20185.617%20192%20173.888%20192%20160c0-17.646-14.354-32-32-32-5.875%200-10.667-4.781-10.667-10.667%200-5.885%204.792-10.667%2010.667-10.667h21.333c5.896%200%2010.667-4.771%2010.667-10.667s-4.771-10.667-10.667-10.667h-10.667c0-5.896-4.771-10.667-10.667-10.667s-10.667%204.771-10.667%2010.667v1.965C136.944%2091.716%20128%20103.445%20128%20117.333c0%2017.646%2014.354%2032%2032%2032%205.875%200%2010.667%204.781%2010.667%2010.667s-4.792%2010.667-10.667%2010.667z%22%20fill%3D%22currentColor%22%20opacity%3D%221%22%20data-original%3D%22%23000000%22%20class%3D%22%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                                      />
                                      <_Builtin.Block
                                        className="heading-style-h3"
                                        tag="div"
                                      >
                                        {"Mai 2024"}
                                      </_Builtin.Block>
                                    </_Builtin.Block>
                                    <_Builtin.Block tag="div">
                                      {"Frais de transactions PlayPad"}
                                    </_Builtin.Block>
                                    <_Builtin.Link
                                      className="button is-small"
                                      button={true}
                                      block=""
                                      options={{
                                        href: "#",
                                      }}
                                    >
                                      {"Télécharger PDF"}
                                    </_Builtin.Link>
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
    </_Component>
  );
}
