"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import { GlobalStyles } from "./GlobalStyles";
import { SidebarDevlink } from "./SidebarDevlink";
import { TopBarRightContent } from "./TopBarRightContent";

const _interactionsData = JSON.parse(
  '{"events":{"e-9":{"id":"e-9","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-304"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"1bf7d8b1-45bf-7ee7-4978-3821b784e19b","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"1bf7d8b1-45bf-7ee7-4978-3821b784e19b","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1684414757890},"e-7":{"id":"e-7","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-306"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"1bf7d8b1-45bf-7ee7-4978-3821b784e19d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"1bf7d8b1-45bf-7ee7-4978-3821b784e19d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1684414757890},"e-16":{"id":"e-16","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-17"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"65edcb06e424209e95092c7e|1fc86f64-e14b-b0d7-6c3f-bb9669afcfbf","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65edcb06e424209e95092c7e|1fc86f64-e14b-b0d7-6c3f-bb9669afcfbf","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1706887097380},"e-18":{"id":"e-18","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-19"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"65edcb06e424209e95092c7e|1fc86f64-e14b-b0d7-6c3f-bb9669afcfc1","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65edcb06e424209e95092c7e|1fc86f64-e14b-b0d7-6c3f-bb9669afcfc1","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1706887097380},"e-20":{"id":"e-20","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-21"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"65edcb06e424209e95092c82|1fc86f64-e14b-b0d7-6c3f-bb9669afcfbf","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65edcb06e424209e95092c82|1fc86f64-e14b-b0d7-6c3f-bb9669afcfbf","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1708104615453},"e-22":{"id":"e-22","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-23"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"65edcb06e424209e95092c82|1fc86f64-e14b-b0d7-6c3f-bb9669afcfc1","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65edcb06e424209e95092c82|1fc86f64-e14b-b0d7-6c3f-bb9669afcfc1","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1708104615453},"e-24":{"id":"e-24","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-25"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"65edcb06e424209e95092c83|1fc86f64-e14b-b0d7-6c3f-bb9669afcfbf","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65edcb06e424209e95092c83|1fc86f64-e14b-b0d7-6c3f-bb9669afcfbf","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1708104787165},"e-26":{"id":"e-26","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-27"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"65edcb06e424209e95092c83|1fc86f64-e14b-b0d7-6c3f-bb9669afcfc1","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65edcb06e424209e95092c83|1fc86f64-e14b-b0d7-6c3f-bb9669afcfc1","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1708104787165},"e-134":{"id":"e-134","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-30","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-135"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"d77fea50-e54a-301b-1a23-3cf16f3b22ad","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"d77fea50-e54a-301b-1a23-3cf16f3b22ad","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1715378237175},"e-160":{"id":"e-160","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-161"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"6650fca0bdd809151a219ff1|1fc86f64-e14b-b0d7-6c3f-bb9669afcfbf","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6650fca0bdd809151a219ff1|1fc86f64-e14b-b0d7-6c3f-bb9669afcfbf","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1716583585383},"e-162":{"id":"e-162","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-163"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"6650fca0bdd809151a219ff1|1fc86f64-e14b-b0d7-6c3f-bb9669afcfc1","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6650fca0bdd809151a219ff1|1fc86f64-e14b-b0d7-6c3f-bb9669afcfc1","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1716583585383},"e-168":{"id":"e-168","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-29","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-169"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65edcb06e424209e95092c83|3b7adc20-1a01-e267-6813-49216a0e2e3c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65edcb06e424209e95092c83|3b7adc20-1a01-e267-6813-49216a0e2e3c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1716638928125},"e-172":{"id":"e-172","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-31","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-173"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65edcb06e424209e95092c83|8ed8543c-e583-c7e2-9f8c-a3fe62bcd832","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65edcb06e424209e95092c83|8ed8543c-e583-c7e2-9f8c-a3fe62bcd832","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1716687683505},"e-182":{"id":"e-182","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-29","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-183"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6650fca0bdd809151a219ff1|57451b7d-367c-b1b3-5997-ef00ff92ecba","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6650fca0bdd809151a219ff1|57451b7d-367c-b1b3-5997-ef00ff92ecba","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1716762746915},"e-204":{"id":"e-204","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-36","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-205"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"65edcb06e424209e95092c80|4d7cab3d-9000-1d9f-aefe-022edc3ae44f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65edcb06e424209e95092c80|4d7cab3d-9000-1d9f-aefe-022edc3ae44f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1727470895089},"e-206":{"id":"e-206","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-36","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-207"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"65edcb06e424209e95092c80|4d7cab3d-9000-1d9f-aefe-022edc3ae451","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65edcb06e424209e95092c80|4d7cab3d-9000-1d9f-aefe-022edc3ae451","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1727470895089},"e-258":{"id":"e-258","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-305"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"3bf6ef48-906c-6954-3b84-47cb5cf21b00","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"3bf6ef48-906c-6954-3b84-47cb5cf21b00","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1727734053325},"e-260":{"id":"e-260","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-307"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"3bf6ef48-906c-6954-3b84-47cb5cf21b02","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"3bf6ef48-906c-6954-3b84-47cb5cf21b02","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1727734053325},"e-274":{"id":"e-274","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-275"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"cd5dc5ca-f5d4-aeec-6107-f3c88afbc67c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"cd5dc5ca-f5d4-aeec-6107-f3c88afbc67c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1727736126886},"e-276":{"id":"e-276","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-277"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"cd5dc5ca-f5d4-aeec-6107-f3c88afbc67e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"cd5dc5ca-f5d4-aeec-6107-f3c88afbc67e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1727736126886},"e-298":{"id":"e-298","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-305"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"0f103e9a-02fc-bbae-2ea7-466330996187","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"0f103e9a-02fc-bbae-2ea7-466330996187","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1727736965141},"e-300":{"id":"e-300","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-307"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"0f103e9a-02fc-bbae-2ea7-466330996189","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"0f103e9a-02fc-bbae-2ea7-466330996189","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1727736965141},"e-302":{"id":"e-302","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-29","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-309"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"0f103e9a-02fc-bbae-2ea7-4663309961ad","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"0f103e9a-02fc-bbae-2ea7-4663309961ad","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1727736965141},"e-304":{"id":"e-304","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-31","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-305"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"56d276ce-6ef8-b699-75b4-3571b6bf3139","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"56d276ce-6ef8-b699-75b4-3571b6bf3139","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1727737404364},"e-306":{"id":"e-306","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-32","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-307"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"56d276ce-6ef8-b699-75b4-3571b6bf316c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"56d276ce-6ef8-b699-75b4-3571b6bf316c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1727737404364},"e-308":{"id":"e-308","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-309"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"56d276ce-6ef8-b699-75b4-3571b6bf318f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"56d276ce-6ef8-b699-75b4-3571b6bf318f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1727737404364},"e-310":{"id":"e-310","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-311"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"56d276ce-6ef8-b699-75b4-3571b6bf3191","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"56d276ce-6ef8-b699-75b4-3571b6bf3191","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1727737404364},"e-312":{"id":"e-312","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-29","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-313"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"56d276ce-6ef8-b699-75b4-3571b6bf31ab","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"56d276ce-6ef8-b699-75b4-3571b6bf31ab","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1727737404364}},"actionLists":{"a-8":{"id":"a-8","title":"Topbar 3 Search [Close]","actionItemGroups":[{"actionItems":[{"id":"a-8-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuad","duration":200,"target":{"selector":".topbar3_search-tablet","selectorGuids":["46f22993-c095-a3c8-9aa4-d6a267c87fcd"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-8-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".topbar3_search-tablet","selectorGuids":["46f22993-c095-a3c8-9aa4-d6a267c87fcd"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1684414258357},"a-30":{"id":"a-30","title":"Club Update Modal [Close]","actionItemGroups":[{"actionItems":[{"id":"a-30-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuad","duration":500,"target":{"selector":".club_update_modal_content-wrapper","selectorGuids":["0ed80bed-00f2-1354-4a84-10aa6d690dfe"]},"xValue":100,"xUnit":"%","yUnit":"PX","zUnit":"PX"}},{"id":"a-30-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":500,"target":{"selector":".club_update_modal_background-overlay","selectorGuids":["7e689950-943f-a480-a97a-aa2b580f3c77"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-30-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".club_update_modal_component","selectorGuids":["7474e86f-569e-f48d-4970-2e90c743377c"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1644220869174},"a-29":{"id":"a-29","title":"Club Update Modal [Open]","actionItemGroups":[{"actionItems":[{"id":"a-29-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".club_update_modal_component","selectorGuids":["7474e86f-569e-f48d-4970-2e90c743377c"]},"value":"none"}},{"id":"a-29-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".club_update_modal_content-wrapper","selectorGuids":["0ed80bed-00f2-1354-4a84-10aa6d690dfe"]},"xValue":100,"xUnit":"%","yUnit":"PX","zUnit":"PX"}},{"id":"a-29-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".club_update_modal_background-overlay","selectorGuids":["7e689950-943f-a480-a97a-aa2b580f3c77"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-29-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".club_update_modal_component","selectorGuids":["7474e86f-569e-f48d-4970-2e90c743377c"]},"value":"flex"}},{"id":"a-29-n-5","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuad","duration":500,"target":{"selector":".club_update_modal_content-wrapper","selectorGuids":["0ed80bed-00f2-1354-4a84-10aa6d690dfe"]},"xValue":0,"xUnit":"%","yUnit":"PX","zUnit":"PX"}},{"id":"a-29-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":500,"target":{"selector":".club_update_modal_background-overlay","selectorGuids":["7e689950-943f-a480-a97a-aa2b580f3c77"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1644220869174},"a-31":{"id":"a-31","title":"Club Update Modal [Close] 2","actionItemGroups":[{"actionItems":[{"id":"a-31-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuad","duration":500,"target":{"selector":".club_update_modal_content-wrapper","selectorGuids":["0ed80bed-00f2-1354-4a84-10aa6d690dfe"]},"xValue":100,"xUnit":"%","yUnit":"PX","zUnit":"PX"}},{"id":"a-31-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":500,"target":{"selector":".club_update_modal_background-overlay","selectorGuids":["7e689950-943f-a480-a97a-aa2b580f3c77"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-31-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".club_update_modal_component","selectorGuids":["7474e86f-569e-f48d-4970-2e90c743377c"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1644220869174},"a-36":{"id":"a-36","title":"Topbar 3 Search [Close] 2","actionItemGroups":[{"actionItems":[{"id":"a-36-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuad","duration":200,"target":{"selector":".topbar3_search-tablet","selectorGuids":["46f22993-c095-a3c8-9aa4-d6a267c87fcd"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-36-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".topbar3_search-tablet","selectorGuids":["46f22993-c095-a3c8-9aa4-d6a267c87fcd"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1684414258357},"a-32":{"id":"a-32","title":"Court Add Modal [Close] 2","actionItemGroups":[{"actionItems":[{"id":"a-32-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuad","duration":500,"target":{"selector":".court_add_modal_content-wrapper","selectorGuids":["9ff96c2b-fec8-2616-95a4-c290ac491922"]},"xValue":100,"xUnit":"%","yUnit":"PX","zUnit":"PX"}},{"id":"a-32-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":500,"target":{"selector":".court_add_modal_background-overlay","selectorGuids":["9ff96c2b-fec8-2616-95a4-c290ac491926"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-32-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".court_add_modal_component","selectorGuids":["9ff96c2b-fec8-2616-95a4-c290ac491921"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1644220869174}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function SettingsPage({
  as: _Component = _Builtin.Block,
  titlePage = "Paramètres",
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

  styleSettings,
  limitDaysBookings = "Nombre",
  limitHoursBeforeBooking = "Nombre",
  limitHoursBeforeCancel = "Nombre",
  limitActivesBookings = (
    <>
      {"Nombre"}
      <br />
    </>
  ),
  inputLimitDaysBookingsProps,
  loader,
}) {
  _interactions.useInteractions(_interactionsData);

  return (
    <_Component className="page-wrapper" tag="div">
      <GlobalStyles />
      <_Builtin.Block className="main-wrapper" tag="main">
        <_Builtin.Block className="club_update_modal_component" tag="div">
          <_Builtin.Block
            className="club_update_modal_content-wrapper"
            tag="div"
          >
            <_Builtin.Link
              className="club_update_modal_close-button"
              data-w-id="56d276ce-6ef8-b699-75b4-3571b6bf3139"
              button={false}
              block="inline"
              options={{
                href: "#",
              }}
            >
              <_Builtin.HtmlEmbed
                className="icon-embed-small"
                value="%3Csvg%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2032%2032%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M24.056%2023.5004L23.5004%2024.056C23.1935%2024.3628%2022.696%2024.3628%2022.3892%2024.056L16%2017.6668L9.61078%2024.056C9.30394%2024.3628%208.80645%2024.3628%208.49961%2024.056L7.94403%2023.5004C7.63719%2023.1936%207.63719%2022.6961%207.94403%2022.3892L14.3332%2016L7.94403%209.61081C7.63719%209.30397%207.63719%208.80648%207.94403%208.49964L8.49961%207.94406C8.80645%207.63721%209.30394%207.63721%209.61078%207.94406L16%2014.3333L22.3892%207.94404C22.6961%207.6372%2023.1935%207.6372%2023.5004%207.94404L24.056%208.49963C24.3628%208.80647%2024.3628%209.30395%2024.056%209.61079L17.6667%2016L24.056%2022.3892C24.3628%2022.6961%2024.3628%2023.1936%2024.056%2023.5004Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
              />
            </_Builtin.Link>
            <_Builtin.Block className="modal_header" tag="div">
              <_Builtin.HtmlEmbed
                className="icon-height-large"
                value="%3Csvg%20width%3D%22auto%22%20height%3D%22auto%22%20viewBox%3D%220%200%2011%2013%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M0%200.464286L0%2012.5357C0%2012.6589%200.0643849%2012.7769%200.17899%2012.864C0.293596%2012.9511%200.449034%2013%200.611111%2013H10.3889C10.551%2013%2010.7064%2012.9511%2010.821%2012.864C10.9356%2012.7769%2011%2012.6589%2011%2012.5357L11%200.464286C11%200.34115%2010.9356%200.223057%2010.821%200.135986C10.7064%200.0489159%2010.551%200%2010.3889%200H0.611111C0.449034%200%200.293596%200.0489159%200.17899%200.135986C0.0643849%200.223057%200%200.34115%200%200.464286ZM1.22222%204.17857H4.88889L4.88889%208.82143H1.22222L1.22222%204.17857ZM1.22222%2012.0714L1.22222%209.75H9.77778V12.0714H1.22222ZM9.77778%208.82143H6.11111L6.11111%204.17857H9.77778V8.82143ZM9.77778%200.928572V3.25H1.22222L1.22222%200.928572H9.77778Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
              />
              <_Builtin.Block className="modal_header-content" tag="div">
                <_Builtin.Block className="heading-style-h3" tag="div">
                  {"Paramètres de réservations"}
                </_Builtin.Block>
                <_Builtin.Block tag="div">
                  {"Changez les règles de vos réservations "}
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.FormWrapper className="club_info_modal_form-block">
              <_Builtin.FormForm
                className="club_update_modal_form"
                name="wf-form-Contact-Modal-3-Form"
                data-name="Contact Modal 3 Form"
                method="get"
                id="wf-form-Contact-Modal-3-Form"
              >
                <_Builtin.Block
                  className="form_layout"
                  id="w-node-_56d276ce-6ef8-b699-75b4-3571b6bf3144-04d3a1e5"
                  tag="div"
                >
                  <_Builtin.Block
                    className="form_layout-left"
                    id="w-node-_56d276ce-6ef8-b699-75b4-3571b6bf3145-04d3a1e5"
                    tag="div"
                  >
                    <_Builtin.Block
                      className="form_flex club"
                      id="w-node-_56d276ce-6ef8-b699-75b4-3571b6bf3146-04d3a1e5"
                      tag="div"
                    >
                      <_Builtin.FormBlockLabel
                        className="form_field-label club"
                        htmlFor="field-14"
                      >
                        {"Nombre limite de jours avant une réservations :"}
                      </_Builtin.FormBlockLabel>
                      <_Builtin.FormTextInput
                        className="form_input club"
                        name="field-14"
                        maxLength={256}
                        data-name="Field 14"
                        disabled={false}
                        type="number"
                        required={true}
                        autoFocus={false}
                        wized="update_limitDayBeforeBooking"
                        id="field-14"
                        {...inputLimitDaysBookingsProps}
                      />
                    </_Builtin.Block>
                    <_Builtin.Block
                      className="form_flex club"
                      id="w-node-_56d276ce-6ef8-b699-75b4-3571b6bf314a-04d3a1e5"
                      tag="div"
                    >
                      <_Builtin.FormBlockLabel
                        className="form_field-label club"
                        htmlFor="field-14"
                      >
                        {"Temps minimal avant une réservation :"}
                      </_Builtin.FormBlockLabel>
                      <_Builtin.FormTextInput
                        className="form_input club"
                        name="field-13"
                        maxLength={256}
                        data-name="Field 13"
                        disabled={false}
                        type="number"
                        required={true}
                        autoFocus={false}
                        wized="update_limitHourBeforeBooking"
                        id="field-13"
                      />
                    </_Builtin.Block>
                    <_Builtin.Block
                      className="form_flex club"
                      id="w-node-_56d276ce-6ef8-b699-75b4-3571b6bf314e-04d3a1e5"
                      tag="div"
                    >
                      <_Builtin.FormBlockLabel
                        className="form_field-label club"
                        htmlFor="field-13"
                      >
                        {"Temps minimal avant une annulation de réservations :"}
                      </_Builtin.FormBlockLabel>
                      <_Builtin.FormTextInput
                        className="form_input club"
                        name="field-13"
                        maxLength={256}
                        data-name="Field 13"
                        disabled={false}
                        type="number"
                        required={true}
                        autoFocus={false}
                        wized="update_limitHourBeforeCancel"
                        id="field-13"
                      />
                    </_Builtin.Block>
                    <_Builtin.Block
                      className="form_flex club"
                      id="w-node-_56d276ce-6ef8-b699-75b4-3571b6bf3152-04d3a1e5"
                      tag="div"
                    >
                      <_Builtin.FormBlockLabel
                        className="form_field-label club"
                        htmlFor="field-14"
                      >
                        {"Nombre réservations active par joueur :"}
                      </_Builtin.FormBlockLabel>
                      <_Builtin.FormTextInput
                        className="form_input club"
                        name="field-13"
                        maxLength={256}
                        data-name="Field 13"
                        disabled={false}
                        type="number"
                        required={true}
                        autoFocus={false}
                        wized="update_limitActiveBooking"
                        id="field-13"
                      />
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className="form_layout-right"
                    id="w-node-_56d276ce-6ef8-b699-75b4-3571b6bf3156-04d3a1e5"
                    tag="div"
                  >
                    <_Builtin.Block
                      className="form_flex club"
                      id="w-node-_56d276ce-6ef8-b699-75b4-3571b6bf3157-04d3a1e5"
                      tag="div"
                    >
                      <_Builtin.FormBlockLabel
                        className="form_field-label club"
                        htmlFor="court_name"
                      >
                        {"Logo :"}
                      </_Builtin.FormBlockLabel>
                      <_Builtin.NotSupported _atom="DOM" />
                    </_Builtin.Block>
                    <_Builtin.Block
                      className="form_flex club"
                      id="w-node-_56d276ce-6ef8-b699-75b4-3571b6bf315b-04d3a1e5"
                      tag="div"
                    >
                      <_Builtin.FormBlockLabel
                        className="form_field-label club"
                        htmlFor="court_name"
                      >
                        {"Image de fonds :"}
                      </_Builtin.FormBlockLabel>
                      <_Builtin.NotSupported _atom="DOM" />
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className="error_message"
                  tag="div"
                  wized="params_error_box"
                  wized-cloak=""
                >
                  <_Builtin.Block tag="div" wized="error_message">
                    {"error_message"}
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className="success_message club"
                  tag="div"
                  wized="params_success_message"
                  wized-cloak=""
                >
                  <_Builtin.HtmlEmbed
                    className="icon-1x1-small text-color-green"
                    value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20width%3D%22auto%22%20height%3D%22auto%22%20x%3D%220%22%20y%3D%220%22%20viewBox%3D%220%200%20408.576%20408.576%22%20style%3D%22enable-background%3Anew%200%200%20512%20512%22%20xml%3Aspace%3D%22preserve%22%20class%3D%22%22%3E%3Cg%3E%3Cpath%20d%3D%22M204.288%200C91.648%200%200%2091.648%200%20204.288s91.648%20204.288%20204.288%20204.288%20204.288-91.648%20204.288-204.288S316.928%200%20204.288%200zm114.176%20150.528-130.56%20129.536c-7.68%207.68-19.968%208.192-28.16.512L90.624%20217.6c-8.192-7.68-8.704-20.48-1.536-28.672%207.68-8.192%2020.48-8.704%2028.672-1.024l54.784%2050.176L289.28%20121.344c8.192-8.192%2020.992-8.192%2029.184%200s8.192%2020.992%200%2029.184z%22%20fill%3D%22currentColor%22%20opacity%3D%221%22%20data-original%3D%22%23000000%22%20class%3D%22%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                  />
                  <_Builtin.Block className="success-message_title" tag="div">
                    {"Les informations ont bien été changé !"}
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className="form_flex loader"
                  tag="div"
                  wized="params_loader"
                  wized-cloak=""
                >
                  <_Builtin.NotSupported _atom="Animation" />
                  <_Builtin.Block tag="div">{"patientez svp"}</_Builtin.Block>
                  <_Builtin.Block tag="div">{loader}</_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className="button-group court_form"
                  id="w-node-_56d276ce-6ef8-b699-75b4-3571b6bf316a-04d3a1e5"
                  tag="div"
                >
                  <_Builtin.FormButton
                    className="button is-small"
                    id="w-node-_56d276ce-6ef8-b699-75b4-3571b6bf316b-04d3a1e5"
                    type="submit"
                    value="Enregistrer"
                    data-wait="Please wait..."
                    wized="update_params"
                  />
                  <_Builtin.FormButton
                    className="button is-small is-red"
                    id="w-node-_56d276ce-6ef8-b699-75b4-3571b6bf316c-04d3a1e5"
                    data-w-id="56d276ce-6ef8-b699-75b4-3571b6bf316c"
                    type="submit"
                    value="Annuler"
                    data-wait="Please wait..."
                  />
                </_Builtin.Block>
              </_Builtin.FormForm>
              <_Builtin.FormSuccessMessage className="success-message">
                <_Builtin.Block className="success-text" tag="div">
                  {"Thank you! Your submission has been received!"}
                </_Builtin.Block>
              </_Builtin.FormSuccessMessage>
              <_Builtin.FormErrorMessage className="error-message">
                <_Builtin.Block className="error-text" tag="div">
                  {"Oops! Something went wrong while submitting the form."}
                </_Builtin.Block>
              </_Builtin.FormErrorMessage>
            </_Builtin.FormWrapper>
          </_Builtin.Block>
          <_Builtin.Block
            className="club_update_modal_background-overlay"
            tag="div"
          />
        </_Builtin.Block>
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
                styleSettings={styleSettings}
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
                    id="w-node-_56d276ce-6ef8-b699-75b4-3571b6bf317c-04d3a1e5"
                    tag="div"
                  >
                    <_Builtin.HtmlEmbed
                      className="icon-embed-xxsmall"
                      value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20x%3D%220%22%20y%3D%220%22%20viewBox%3D%220%200%2032%2032%22%20style%3D%22enable-background%3Anew%200%200%20512%20512%22%20xml%3Aspace%3D%22preserve%22%20class%3D%22hovered-paths%22%3E%3Cg%3E%3Cpath%20d%3D%22M29.21%2011.84a3.92%203.92%200%200%201-3.09-5.3%201.84%201.84%200%200%200-.55-2.07%2014.75%2014.75%200%200%200-4.4-2.55%201.85%201.85%200%200%200-2.09.58%203.91%203.91%200%200%201-6.16%200%201.85%201.85%200%200%200-2.09-.58%2014.82%2014.82%200%200%200-4.1%202.3%201.86%201.86%200%200%200-.58%202.13%203.9%203.9%200%200%201-3.25%205.36%201.85%201.85%200%200%200-1.62%201.49A14.14%2014.14%200%200%200%201%2016a14.32%2014.32%200%200%200%20.19%202.35%201.85%201.85%200%200%200%201.63%201.55A3.9%203.9%200%200%201%206%2025.41a1.82%201.82%200%200%200%20.51%202.18%2014.86%2014.86%200%200%200%204.36%202.51%202%202%200%200%200%20.63.11%201.84%201.84%200%200%200%201.5-.78%203.87%203.87%200%200%201%203.2-1.68%203.92%203.92%200%200%201%203.14%201.58%201.84%201.84%200%200%200%202.16.61%2015%2015%200%200%200%204-2.39%201.85%201.85%200%200%200%20.54-2.11%203.9%203.9%200%200%201%203.13-5.39%201.85%201.85%200%200%200%201.57-1.52A14.5%2014.5%200%200%200%2031%2016a14.35%2014.35%200%200%200-.25-2.67%201.83%201.83%200%200%200-1.54-1.49zM21%2016a5%205%200%201%201-5-5%205%205%200%200%201%205%205z%22%20data-name%3D%22Layer%202%22%20fill%3D%22currentColor%22%20opacity%3D%221%22%20data-original%3D%22%23000000%22%20class%3D%22hovered-path%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E"
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
                    <_Builtin.Block
                      className="topbar3_close-icon"
                      data-w-id="56d276ce-6ef8-b699-75b4-3571b6bf318f"
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
                    data-w-id="56d276ce-6ef8-b699-75b4-3571b6bf3191"
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
                        <_Builtin.Block className="card" tag="div">
                          <_Builtin.Block className="card_component" tag="div">
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
                                    className="settings_label-title"
                                    tag="div"
                                  >
                                    {"Paramètres de réservations"}
                                  </_Builtin.Block>
                                  <_Builtin.Link
                                    className="button is-small"
                                    data-w-id="56d276ce-6ef8-b699-75b4-3571b6bf31ab"
                                    button={true}
                                    block=""
                                    options={{
                                      href: "#",
                                    }}
                                  >
                                    {"Modifier les paramètres"}
                                  </_Builtin.Link>
                                </_Builtin.Block>
                                <_Builtin.Block
                                  className="clubinfo_row"
                                  tag="div"
                                >
                                  <_Builtin.Block tag="div">
                                    <_Builtin.Block
                                      className="settings_label"
                                      tag="div"
                                    >
                                      {
                                        "Nombre limite de jours avant une réservation "
                                      }
                                    </_Builtin.Block>
                                    <_Builtin.Block
                                      className="settings_sub-text"
                                      tag="div"
                                    >
                                      {
                                        "Combien de jours maximum avant son match. l'utilisateur peut réserver."
                                      }
                                      <br />
                                      {
                                        "EXEMPLE : c'est fixé à 20 -> si on est le 3 du mois, le calendrier ira jusqu'au 23."
                                      }
                                      <br />
                                      {
                                        "EXEMPLE 2 : c'est fixé à 30 -> si on est le 3 du mois, le calendrier ira jusqu'au 2 du mois suivant."
                                      }
                                      <br />
                                    </_Builtin.Block>
                                  </_Builtin.Block>
                                  <_Builtin.Block
                                    className="text-size-large"
                                    tag="div"
                                    wized="limitDayBeforeBooking"
                                  >
                                    {limitDaysBookings}
                                  </_Builtin.Block>
                                </_Builtin.Block>
                                <_Builtin.Block
                                  className="clubinfo_row"
                                  tag="div"
                                >
                                  <_Builtin.Block tag="div">
                                    <_Builtin.Block
                                      className="settings_label"
                                      tag="div"
                                    >
                                      {"Temps minimum avant une réservation"}
                                    </_Builtin.Block>
                                    <_Builtin.Block
                                      className="settings_sub-text"
                                      tag="div"
                                    >
                                      {
                                        "Combien de temps minimum avant son match. l'utilisateur peut réserver."
                                      }
                                      <br />
                                      {
                                        "EXEMPLE : c'est fixé à 0.5 = 30 minutes -> s'il est 15h, il ne pourra réserver des plages horaires qu'à partir de 15h30"
                                      }
                                      <br />
                                      {
                                        "EXEMPLE : c'est fixé à 1.5 = 1h30 minutes -> s'il est 15h, il ne pourra réserver des plages horaires qu'à partir de 16h30"
                                      }
                                      <br />
                                      {"1 =1 heure / 2 =2 heures etc. "}
                                      <br />
                                    </_Builtin.Block>
                                  </_Builtin.Block>
                                  <_Builtin.Block
                                    className="text-size-large"
                                    tag="div"
                                    wized="limitHourBeforeBooking"
                                  >
                                    {limitHoursBeforeBooking}
                                  </_Builtin.Block>
                                </_Builtin.Block>
                                <_Builtin.Block
                                  className="clubinfo_row"
                                  tag="div"
                                >
                                  <_Builtin.Block tag="div">
                                    <_Builtin.Block
                                      className="settings_label"
                                      tag="div"
                                    >
                                      {
                                        "Temps minimum avant une annulation de réservation"
                                      }
                                    </_Builtin.Block>
                                    <_Builtin.Block
                                      className="settings_sub-text"
                                      tag="div"
                                    >
                                      {
                                        "Combien de temps le joueur dispose avant le match pour annuler et être remboursé via son wallet."
                                      }
                                      <br />
                                      {
                                        "EXEMPLE : c'est fixé à 3 = 3 heures -> s'il est 15h et que son match est à 19h, il sera remboursé"
                                      }
                                      <br />
                                      {
                                        "EXEMPLE : c'est fixé à 3 = 3 heures -> s'il est 18h et que son match est à 19h, il ne sera pas remboursé"
                                      }
                                      <br />
                                    </_Builtin.Block>
                                  </_Builtin.Block>
                                  <_Builtin.Block
                                    className="text-size-large"
                                    tag="div"
                                    wized="limitHourBeforeCancel"
                                  >
                                    {limitHoursBeforeCancel}
                                  </_Builtin.Block>
                                </_Builtin.Block>
                                <_Builtin.Block
                                  className="clubinfo_row"
                                  tag="div"
                                >
                                  <_Builtin.Block tag="div">
                                    <_Builtin.Block
                                      className="settings_label"
                                      tag="div"
                                    >
                                      {
                                        "Nombre de réservations actives en cours par un joueur "
                                      }
                                    </_Builtin.Block>
                                    <_Builtin.Block
                                      className="settings_sub-text"
                                      tag="div"
                                    >
                                      {
                                        "Combien de réservations actives un joueur peut avoir dans le club. (Attention à trouver un équilibre avec le nombre limite"
                                      }
                                      <br />
                                      {"de jours avant une réservation)"}
                                      <br />
                                      {"EXEMPLE : c'est fixé à 2"}
                                      <br />
                                      {
                                        "-> il aura seulement la possibilité de réserver 2 matchs à venir/en cours au maximum (visibles sur la page matchs ouverts)"
                                      }
                                      <br />
                                      {
                                        "-> il aura un message d'erreur quand il voudra en créer un nouveau dans ce club s'il a atteint le maximum fixé"
                                      }
                                      <br />
                                      {
                                        "-> une fois que le match du joueur s'est déroulé, il aura de nouveau la possibilité de créer un nouveau match supplémentaire "
                                      }
                                      <br />
                                    </_Builtin.Block>
                                  </_Builtin.Block>
                                  <_Builtin.Block
                                    className="text-size-large"
                                    tag="div"
                                    wized="limitActiveBookings"
                                  >
                                    {limitActivesBookings}
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
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
