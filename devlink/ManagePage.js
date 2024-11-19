"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import { GlobalStyles } from "./GlobalStyles";
import { ModalUpdateCourt } from "./ModalUpdateCourt";
import { ModalDeleteCourt } from "./ModalDeleteCourt";
import { ModalAddBooking } from "./ModalAddBooking";
import { ModalUpdateBooking } from "./ModalUpdateBooking";
import { ModalDeleteBooking } from "./ModalDeleteBooking";
import { SidebarDevlink } from "./SidebarDevlink";
import { TopBarRightContent } from "./TopBarRightContent";

const _interactionsData = JSON.parse(
  '{"events":{"e-9":{"id":"e-9","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-304"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"1bf7d8b1-45bf-7ee7-4978-3821b784e19b","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"1bf7d8b1-45bf-7ee7-4978-3821b784e19b","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1684414757890},"e-7":{"id":"e-7","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-306"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"1bf7d8b1-45bf-7ee7-4978-3821b784e19d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"1bf7d8b1-45bf-7ee7-4978-3821b784e19d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1684414757890},"e-16":{"id":"e-16","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-17"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"65edcb06e424209e95092c7e|1fc86f64-e14b-b0d7-6c3f-bb9669afcfbf","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65edcb06e424209e95092c7e|1fc86f64-e14b-b0d7-6c3f-bb9669afcfbf","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1706887097380},"e-18":{"id":"e-18","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-19"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"65edcb06e424209e95092c7e|1fc86f64-e14b-b0d7-6c3f-bb9669afcfc1","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65edcb06e424209e95092c7e|1fc86f64-e14b-b0d7-6c3f-bb9669afcfc1","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1706887097380},"e-20":{"id":"e-20","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-21"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"65edcb06e424209e95092c82|1fc86f64-e14b-b0d7-6c3f-bb9669afcfbf","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65edcb06e424209e95092c82|1fc86f64-e14b-b0d7-6c3f-bb9669afcfbf","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1708104615453},"e-22":{"id":"e-22","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-23"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"65edcb06e424209e95092c82|1fc86f64-e14b-b0d7-6c3f-bb9669afcfc1","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65edcb06e424209e95092c82|1fc86f64-e14b-b0d7-6c3f-bb9669afcfc1","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1708104615453},"e-24":{"id":"e-24","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-25"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"65edcb06e424209e95092c83|1fc86f64-e14b-b0d7-6c3f-bb9669afcfbf","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65edcb06e424209e95092c83|1fc86f64-e14b-b0d7-6c3f-bb9669afcfbf","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1708104787165},"e-26":{"id":"e-26","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-27"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"65edcb06e424209e95092c83|1fc86f64-e14b-b0d7-6c3f-bb9669afcfc1","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65edcb06e424209e95092c83|1fc86f64-e14b-b0d7-6c3f-bb9669afcfc1","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1708104787165},"e-50":{"id":"e-50","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-16","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-51"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"817c17d6-ef76-60e8-64d0-64627c0fb270","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"817c17d6-ef76-60e8-64d0-64627c0fb270","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1644221544943},"e-52":{"id":"e-52","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-16","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-53"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"817c17d6-ef76-60e8-64d0-64627c0fb2cf","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"817c17d6-ef76-60e8-64d0-64627c0fb2cf","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1644221544943},"e-54":{"id":"e-54","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-15","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-55"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65edcb06e424209e95092c82|6e4fef5c-cbac-44e1-da0f-bf86a049bd3f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65edcb06e424209e95092c82|6e4fef5c-cbac-44e1-da0f-bf86a049bd3f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1709546795778},"e-116":{"id":"e-116","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-16","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-117"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"817c17d6-ef76-60e8-64d0-64627c0fb29e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"817c17d6-ef76-60e8-64d0-64627c0fb29e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1710102809926},"e-136":{"id":"e-136","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-16","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-137"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"d77fea50-e54a-301b-1a23-3cf16f3b22e5","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"d77fea50-e54a-301b-1a23-3cf16f3b22e5","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1715378237175},"e-160":{"id":"e-160","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-161"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"6650fca0bdd809151a219ff1|1fc86f64-e14b-b0d7-6c3f-bb9669afcfbf","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6650fca0bdd809151a219ff1|1fc86f64-e14b-b0d7-6c3f-bb9669afcfbf","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1716583585383},"e-162":{"id":"e-162","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-163"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"6650fca0bdd809151a219ff1|1fc86f64-e14b-b0d7-6c3f-bb9669afcfc1","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6650fca0bdd809151a219ff1|1fc86f64-e14b-b0d7-6c3f-bb9669afcfc1","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1716583585383},"e-174":{"id":"e-174","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-32","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-175"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65edcb06e424209e95092c83|8ed8543c-e583-c7e2-9f8c-a3fe62bcd86c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65edcb06e424209e95092c83|8ed8543c-e583-c7e2-9f8c-a3fe62bcd86c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1716687683505},"e-176":{"id":"e-176","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-15","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-177"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65edcb06e424209e95092c82|9f2f5897-befe-b122-c543-9d9f7057a7b5","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65edcb06e424209e95092c82|9f2f5897-befe-b122-c543-9d9f7057a7b5","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1716689159209},"e-188":{"id":"e-188","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-35","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-189"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65edcb06e424209e95092c82|fc5bf93f-91c6-54ec-dfd2-40ef594c1474","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65edcb06e424209e95092c82|fc5bf93f-91c6-54ec-dfd2-40ef594c1474","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1717083653513},"e-190":{"id":"e-190","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-35","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-191"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65edcb06e424209e95092c82|fc5bf93f-91c6-54ec-dfd2-40ef594c14c1","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65edcb06e424209e95092c82|fc5bf93f-91c6-54ec-dfd2-40ef594c14c1","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1717083653513},"e-192":{"id":"e-192","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-35","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-193"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65edcb06e424209e95092c82|fc5bf93f-91c6-54ec-dfd2-40ef594c14ba","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65edcb06e424209e95092c82|fc5bf93f-91c6-54ec-dfd2-40ef594c14ba","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1717083653513},"e-204":{"id":"e-204","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-36","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-205"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"65edcb06e424209e95092c80|4d7cab3d-9000-1d9f-aefe-022edc3ae44f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65edcb06e424209e95092c80|4d7cab3d-9000-1d9f-aefe-022edc3ae44f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1727470895089},"e-206":{"id":"e-206","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-36","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-207"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"65edcb06e424209e95092c80|4d7cab3d-9000-1d9f-aefe-022edc3ae451","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65edcb06e424209e95092c80|4d7cab3d-9000-1d9f-aefe-022edc3ae451","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1727470895089},"e-258":{"id":"e-258","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-305"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"3bf6ef48-906c-6954-3b84-47cb5cf21b00","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"3bf6ef48-906c-6954-3b84-47cb5cf21b00","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1727734053325},"e-260":{"id":"e-260","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-307"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"3bf6ef48-906c-6954-3b84-47cb5cf21b02","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"3bf6ef48-906c-6954-3b84-47cb5cf21b02","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1727734053325},"e-268":{"id":"e-268","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-35","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-269"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"cd5dc5ca-f5d4-aeec-6107-f3c88afbc60c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"cd5dc5ca-f5d4-aeec-6107-f3c88afbc60c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1727736126886},"e-270":{"id":"e-270","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-35","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-271"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"cd5dc5ca-f5d4-aeec-6107-f3c88afbc655","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"cd5dc5ca-f5d4-aeec-6107-f3c88afbc655","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1727736126886},"e-272":{"id":"e-272","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-35","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-273"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"cd5dc5ca-f5d4-aeec-6107-f3c88afbc65c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"cd5dc5ca-f5d4-aeec-6107-f3c88afbc65c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1727736126886},"e-274":{"id":"e-274","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-275"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"cd5dc5ca-f5d4-aeec-6107-f3c88afbc67c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"cd5dc5ca-f5d4-aeec-6107-f3c88afbc67c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1727736126886},"e-276":{"id":"e-276","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-277"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"cd5dc5ca-f5d4-aeec-6107-f3c88afbc67e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"cd5dc5ca-f5d4-aeec-6107-f3c88afbc67e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1727736126886},"e-278":{"id":"e-278","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-17","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-279"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"cd5dc5ca-f5d4-aeec-6107-f3c88afbc692","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"cd5dc5ca-f5d4-aeec-6107-f3c88afbc692","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1727736126886},"e-280":{"id":"e-280","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-19","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-281"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"cd5dc5ca-f5d4-aeec-6107-f3c88afbc6e4","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"cd5dc5ca-f5d4-aeec-6107-f3c88afbc6e4","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1727736126886},"e-282":{"id":"e-282","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-21","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-283"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"cd5dc5ca-f5d4-aeec-6107-f3c88afbc6ea","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"cd5dc5ca-f5d4-aeec-6107-f3c88afbc6ea","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1727736126886},"e-284":{"id":"e-284","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-19","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-285"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"cd5dc5ca-f5d4-aeec-6107-f3c88afbc6eb","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"cd5dc5ca-f5d4-aeec-6107-f3c88afbc6eb","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1727736126886},"e-286":{"id":"e-286","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-15","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-287"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"cd5dc5ca-f5d4-aeec-6107-f3c88afbc6f1","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"cd5dc5ca-f5d4-aeec-6107-f3c88afbc6f1","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1727736126886},"e-288":{"id":"e-288","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-11","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-289"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"cd5dc5ca-f5d4-aeec-6107-f3c88afbc718","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"cd5dc5ca-f5d4-aeec-6107-f3c88afbc718","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1727736126886},"e-290":{"id":"e-290","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-13","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-291"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"cd5dc5ca-f5d4-aeec-6107-f3c88afbc71c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"cd5dc5ca-f5d4-aeec-6107-f3c88afbc71c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1727736126886},"e-292":{"id":"e-292","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-15","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-293"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"cd5dc5ca-f5d4-aeec-6107-f3c88afbc729","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"cd5dc5ca-f5d4-aeec-6107-f3c88afbc729","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1727736126886},"e-294":{"id":"e-294","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-11","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-295"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"cd5dc5ca-f5d4-aeec-6107-f3c88afbc73c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"cd5dc5ca-f5d4-aeec-6107-f3c88afbc73c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1727736126886},"e-296":{"id":"e-296","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-13","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-297"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"cd5dc5ca-f5d4-aeec-6107-f3c88afbc740","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"cd5dc5ca-f5d4-aeec-6107-f3c88afbc740","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1727736126886},"e-298":{"id":"e-298","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-305"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"0f103e9a-02fc-bbae-2ea7-466330996187","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"0f103e9a-02fc-bbae-2ea7-466330996187","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1727736965141},"e-300":{"id":"e-300","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-307"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"0f103e9a-02fc-bbae-2ea7-466330996189","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"0f103e9a-02fc-bbae-2ea7-466330996189","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1727736965141},"e-306":{"id":"e-306","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-32","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-307"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"56d276ce-6ef8-b699-75b4-3571b6bf316c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"56d276ce-6ef8-b699-75b4-3571b6bf316c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1727737404364},"e-308":{"id":"e-308","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-309"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"56d276ce-6ef8-b699-75b4-3571b6bf318f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"56d276ce-6ef8-b699-75b4-3571b6bf318f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1727737404364},"e-310":{"id":"e-310","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-311"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"56d276ce-6ef8-b699-75b4-3571b6bf3191","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"56d276ce-6ef8-b699-75b4-3571b6bf3191","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1727737404364}},"actionLists":{"a-8":{"id":"a-8","title":"Topbar 3 Search [Close]","actionItemGroups":[{"actionItems":[{"id":"a-8-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuad","duration":200,"target":{"selector":".topbar3_search-tablet","selectorGuids":["46f22993-c095-a3c8-9aa4-d6a267c87fcd"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-8-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".topbar3_search-tablet","selectorGuids":["46f22993-c095-a3c8-9aa4-d6a267c87fcd"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1684414258357},"a-16":{"id":"a-16","title":"Court Add Modal [Close]","actionItemGroups":[{"actionItems":[{"id":"a-16-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuad","duration":500,"target":{"selector":".court_add_modal_content-wrapper","selectorGuids":["9ff96c2b-fec8-2616-95a4-c290ac491922"]},"xValue":100,"xUnit":"%","yUnit":"PX","zUnit":"PX"}},{"id":"a-16-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":500,"target":{"selector":".court_add_modal_background-overlay","selectorGuids":["9ff96c2b-fec8-2616-95a4-c290ac491926"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-16-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".court_add_modal_component","selectorGuids":["9ff96c2b-fec8-2616-95a4-c290ac491921"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1644220869174},"a-15":{"id":"a-15","title":"Court Add Modal [Open]","actionItemGroups":[{"actionItems":[{"id":"a-15-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".court_add_modal_component","selectorGuids":["9ff96c2b-fec8-2616-95a4-c290ac491921"]},"value":"none"}},{"id":"a-15-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".court_add_modal_content-wrapper","selectorGuids":["9ff96c2b-fec8-2616-95a4-c290ac491922"]},"xValue":100,"xUnit":"%","yUnit":"PX","zUnit":"PX"}},{"id":"a-15-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".court_add_modal_background-overlay","selectorGuids":["9ff96c2b-fec8-2616-95a4-c290ac491926"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-15-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".court_add_modal_component","selectorGuids":["9ff96c2b-fec8-2616-95a4-c290ac491921"]},"value":"flex"}},{"id":"a-15-n-5","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuad","duration":500,"target":{"selector":".court_add_modal_content-wrapper","selectorGuids":["9ff96c2b-fec8-2616-95a4-c290ac491922"]},"xValue":0,"xUnit":"%","yUnit":"PX","zUnit":"PX"}},{"id":"a-15-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":500,"target":{"selector":".court_add_modal_background-overlay","selectorGuids":["9ff96c2b-fec8-2616-95a4-c290ac491926"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1644220869174},"a-32":{"id":"a-32","title":"Court Add Modal [Close] 2","actionItemGroups":[{"actionItems":[{"id":"a-32-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuad","duration":500,"target":{"selector":".court_add_modal_content-wrapper","selectorGuids":["9ff96c2b-fec8-2616-95a4-c290ac491922"]},"xValue":100,"xUnit":"%","yUnit":"PX","zUnit":"PX"}},{"id":"a-32-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":500,"target":{"selector":".court_add_modal_background-overlay","selectorGuids":["9ff96c2b-fec8-2616-95a4-c290ac491926"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-32-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".court_add_modal_component","selectorGuids":["9ff96c2b-fec8-2616-95a4-c290ac491921"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1644220869174},"a-35":{"id":"a-35","title":"Court Add Modal [Close] 4","actionItemGroups":[{"actionItems":[{"id":"a-35-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuad","duration":500,"target":{"selector":".court_add_modal_content-wrapper","selectorGuids":["9ff96c2b-fec8-2616-95a4-c290ac491922"]},"xValue":100,"xUnit":"%","yUnit":"PX","zUnit":"PX"}},{"id":"a-35-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":500,"target":{"selector":".court_add_modal_background-overlay","selectorGuids":["9ff96c2b-fec8-2616-95a4-c290ac491926"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-35-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".court_add_modal_component","selectorGuids":["9ff96c2b-fec8-2616-95a4-c290ac491921"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1644220869174},"a-36":{"id":"a-36","title":"Topbar 3 Search [Close] 2","actionItemGroups":[{"actionItems":[{"id":"a-36-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuad","duration":200,"target":{"selector":".topbar3_search-tablet","selectorGuids":["46f22993-c095-a3c8-9aa4-d6a267c87fcd"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-36-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".topbar3_search-tablet","selectorGuids":["46f22993-c095-a3c8-9aa4-d6a267c87fcd"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1684414258357},"a-17":{"id":"a-17","title":"Booking Add Modal [Open]","actionItemGroups":[{"actionItems":[{"id":"a-17-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".booking_add_modal_component","selectorGuids":["1c7b8a9c-e3ea-e17e-b62b-25f5683bd7d4"]},"value":"none"}},{"id":"a-17-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".booking_add_modal_content-wrapper","selectorGuids":["1c7b8a9c-e3ea-e17e-b62b-25f5683bd7d5"]},"xValue":100,"xUnit":"%","yUnit":"PX","zUnit":"PX"}},{"id":"a-17-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".booking_add_modal_background-overlay","selectorGuids":["1c7b8a9c-e3ea-e17e-b62b-25f5683bd7d9"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-17-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".booking_add_modal_component","selectorGuids":["1c7b8a9c-e3ea-e17e-b62b-25f5683bd7d4"]},"value":"flex"}},{"id":"a-17-n-5","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuad","duration":500,"target":{"selector":".booking_add_modal_content-wrapper","selectorGuids":["1c7b8a9c-e3ea-e17e-b62b-25f5683bd7d5"]},"xValue":0,"xUnit":"%","yUnit":"PX","zUnit":"PX"}},{"id":"a-17-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":500,"target":{"selector":".booking_add_modal_background-overlay","selectorGuids":["1c7b8a9c-e3ea-e17e-b62b-25f5683bd7d9"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1644220869174},"a-19":{"id":"a-19","title":"Booking Update Modal [Open]","actionItemGroups":[{"actionItems":[{"id":"a-19-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".booking_update_modal_component","selectorGuids":["0b2a0569-e15b-8471-7127-97bbdfffcaa9"]},"value":"none"}},{"id":"a-19-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".booking_update_content-wrapper","selectorGuids":["0b2a0569-e15b-8471-7127-97bbdfffcaaa"]},"xValue":100,"xUnit":"%","yUnit":"PX","zUnit":"PX"}},{"id":"a-19-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".booking_update_background-overlay","selectorGuids":["0b2a0569-e15b-8471-7127-97bbdfffcaae"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-19-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".booking_update_modal_component","selectorGuids":["0b2a0569-e15b-8471-7127-97bbdfffcaa9"]},"value":"flex"}},{"id":"a-19-n-5","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuad","duration":500,"target":{"selector":".booking_update_content-wrapper","selectorGuids":["0b2a0569-e15b-8471-7127-97bbdfffcaaa"]},"xValue":0,"xUnit":"%","yUnit":"PX","zUnit":"PX"}},{"id":"a-19-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":500,"target":{"selector":".booking_update_background-overlay","selectorGuids":["0b2a0569-e15b-8471-7127-97bbdfffcaae"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1644220869174},"a-21":{"id":"a-21","title":"Booking Delete Modal [Open]","actionItemGroups":[{"actionItems":[{"id":"a-21-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".booking_delete_modal_component","selectorGuids":["3d7b4e23-24d1-3be6-e54a-0f0ef260dafe"]},"value":"none"}},{"id":"a-21-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":200,"target":{"selector":".booking_delete_modal_component","selectorGuids":["3d7b4e23-24d1-3be6-e54a-0f0ef260dafe"]},"value":0,"unit":""}},{"id":"a-21-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":500,"target":{"selector":".booking_delete_content-wrapper","selectorGuids":["3d7b4e23-24d1-3be6-e54a-0f0ef260daff"]},"yValue":100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]},{"actionItems":[{"id":"a-21-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".booking_delete_modal_component","selectorGuids":["3d7b4e23-24d1-3be6-e54a-0f0ef260dafe"]},"value":"flex"}},{"id":"a-21-n-5","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":200,"target":{"selector":".booking_delete_modal_component","selectorGuids":["3d7b4e23-24d1-3be6-e54a-0f0ef260dafe"]},"value":1,"unit":""}},{"id":"a-21-n-6","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":500,"target":{"selector":".booking_delete_content-wrapper","selectorGuids":["3d7b4e23-24d1-3be6-e54a-0f0ef260daff"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1644220869174},"a-11":{"id":"a-11","title":"Court Update Modal [Open]","actionItemGroups":[{"actionItems":[{"id":"a-11-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".court_update_modal_component","selectorGuids":["2d7045b7-b6a5-91fa-80ee-4e47e0becd99"]},"value":"none"}},{"id":"a-11-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".court_update_modal_content-wrapper","selectorGuids":["2d7045b7-b6a5-91fa-80ee-4e47e0becd9a"]},"xValue":100,"xUnit":"%","yUnit":"PX","zUnit":"PX"}},{"id":"a-11-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".court_update_modal_background-overlay","selectorGuids":["2d7045b7-b6a5-91fa-80ee-4e47e0becda3"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-11-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".court_update_modal_component","selectorGuids":["2d7045b7-b6a5-91fa-80ee-4e47e0becd99"]},"value":"flex"}},{"id":"a-11-n-5","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuad","duration":500,"target":{"selector":".court_update_modal_content-wrapper","selectorGuids":["2d7045b7-b6a5-91fa-80ee-4e47e0becd9a"]},"xValue":0,"xUnit":"%","yUnit":"PX","zUnit":"PX"}},{"id":"a-11-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":500,"target":{"selector":".court_update_modal_background-overlay","selectorGuids":["2d7045b7-b6a5-91fa-80ee-4e47e0becda3"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1644220869174},"a-13":{"id":"a-13","title":"Court Delete Modal [Open]","actionItemGroups":[{"actionItems":[{"id":"a-13-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".court_delete_modal_component","selectorGuids":["9d21f79a-a04d-0c2f-b9f1-59ad17e288d2"]},"value":"none"}},{"id":"a-13-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":200,"target":{"selector":".court_delete_modal_component","selectorGuids":["9d21f79a-a04d-0c2f-b9f1-59ad17e288d2"]},"value":0,"unit":""}},{"id":"a-13-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":500,"target":{"selector":".court_delete_modal_content-wrapper","selectorGuids":["9d21f79a-a04d-0c2f-b9f1-59ad17e288d3"]},"yValue":100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]},{"actionItems":[{"id":"a-13-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".court_delete_modal_component","selectorGuids":["9d21f79a-a04d-0c2f-b9f1-59ad17e288d2"]},"value":"flex"}},{"id":"a-13-n-5","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":200,"target":{"selector":".court_delete_modal_component","selectorGuids":["9d21f79a-a04d-0c2f-b9f1-59ad17e288d2"]},"value":1,"unit":""}},{"id":"a-13-n-6","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":500,"target":{"selector":".court_delete_modal_content-wrapper","selectorGuids":["9d21f79a-a04d-0c2f-b9f1-59ad17e288d3"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1644220869174}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function ManagePage({
  as: _Component = _Builtin.Block,
  titlePage = "Gestions",
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

  styleManage,
}) {
  _interactions.useInteractions(_interactionsData);

  return (
    <_Component className="page-wrapper" tag="div">
      <GlobalStyles />
      <_Builtin.Block className="main-wrapper" tag="main">
        <_Builtin.Block className="page-wrapper" tag="div">
          <_Builtin.Block className="court_add_modal_component" tag="div">
            <_Builtin.Block
              className="court_add_modal_content-wrapper"
              tag="div"
            >
              <_Builtin.Link
                className="court_add_modal_close-button"
                data-w-id="cd5dc5ca-f5d4-aeec-6107-f3c88afbc60c"
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
                    {"Ajouter un court"}
                  </_Builtin.Block>
                  <_Builtin.Block tag="div">
                    {"Ajoutez les informations du nouveau court"}
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.FormWrapper className="court_add_modal_form-block">
                <_Builtin.FormForm
                  className="court_add_modal_form"
                  name="wf-form-"
                  method="get"
                  id="wf-form-"
                >
                  <_Builtin.Block className="form_control" tag="div">
                    <_Builtin.Block className="form_flex" tag="div">
                      <_Builtin.Block className="form_icon" tag="div">
                        <_Builtin.HtmlEmbed
                          className="icon-embed-xxxsmall"
                          value="%3Csvg%20width%3D%22auto%22%20height%3D%22auto%22%20viewBox%3D%220%200%2011%2013%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M0%200.464286L0%2012.5357C0%2012.6589%200.0643849%2012.7769%200.17899%2012.864C0.293596%2012.9511%200.449034%2013%200.611111%2013H10.3889C10.551%2013%2010.7064%2012.9511%2010.821%2012.864C10.9356%2012.7769%2011%2012.6589%2011%2012.5357L11%200.464286C11%200.34115%2010.9356%200.223057%2010.821%200.135986C10.7064%200.0489159%2010.551%200%2010.3889%200H0.611111C0.449034%200%200.293596%200.0489159%200.17899%200.135986C0.0643849%200.223057%200%200.34115%200%200.464286ZM1.22222%204.17857H4.88889L4.88889%208.82143H1.22222L1.22222%204.17857ZM1.22222%2012.0714L1.22222%209.75H9.77778V12.0714H1.22222ZM9.77778%208.82143H6.11111L6.11111%204.17857H9.77778V8.82143ZM9.77778%200.928572V3.25H1.22222L1.22222%200.928572H9.77778Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                        />
                      </_Builtin.Block>
                      <_Builtin.FormBlockLabel
                        className="form_field-label"
                        htmlFor="open_hour"
                      >
                        {"Nom du court"}
                      </_Builtin.FormBlockLabel>
                    </_Builtin.Block>
                    <_Builtin.FormTextInput
                      className="form_input"
                      name="field"
                      maxLength={256}
                      disabled={false}
                      type="text"
                      required={true}
                      autoFocus={false}
                      wized="add_court_name"
                    />
                  </_Builtin.Block>
                  <_Builtin.Block
                    className="form_control"
                    id="w-node-cd5dc5ca-f5d4-aeec-6107-f3c88afbc61e-a67f4fc3"
                    tag="div"
                  >
                    <_Builtin.Block className="form_flex" tag="div">
                      <_Builtin.Block className="form_icon" tag="div">
                        <_Builtin.HtmlEmbed
                          className="icon-embed-xxxsmall"
                          value="%3Csvg%20width%3D%22auto%22%20height%3D%22auto%22%20viewBox%3D%220%200%2011%2013%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M0%200.464286L0%2012.5357C0%2012.6589%200.0643849%2012.7769%200.17899%2012.864C0.293596%2012.9511%200.449034%2013%200.611111%2013H10.3889C10.551%2013%2010.7064%2012.9511%2010.821%2012.864C10.9356%2012.7769%2011%2012.6589%2011%2012.5357L11%200.464286C11%200.34115%2010.9356%200.223057%2010.821%200.135986C10.7064%200.0489159%2010.551%200%2010.3889%200H0.611111C0.449034%200%200.293596%200.0489159%200.17899%200.135986C0.0643849%200.223057%200%200.34115%200%200.464286ZM1.22222%204.17857H4.88889L4.88889%208.82143H1.22222L1.22222%204.17857ZM1.22222%2012.0714L1.22222%209.75H9.77778V12.0714H1.22222ZM9.77778%208.82143H6.11111L6.11111%204.17857H9.77778V8.82143ZM9.77778%200.928572V3.25H1.22222L1.22222%200.928572H9.77778Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                        />
                      </_Builtin.Block>
                      <_Builtin.FormBlockLabel
                        className="form_field-label"
                        htmlFor="open_hour"
                      >
                        {"Court extérieur"}
                      </_Builtin.FormBlockLabel>
                    </_Builtin.Block>
                    <_Builtin.FormSelect
                      className="form_select"
                      name="field-24"
                      data-name="Field 24"
                      required={true}
                      multiple={false}
                      wized="add_court_isIndoor"
                      id="field-24"
                      options={[
                        {
                          t: "Extérieur",
                          v: "false",
                        },
                        {
                          t: "Intérieur",
                          v: "true",
                        },
                      ]}
                    />
                  </_Builtin.Block>
                  <_Builtin.Block className="form_flex" tag="div">
                    <_Builtin.Block className="form_control" tag="div">
                      <_Builtin.Block className="form_flex" tag="div">
                        <_Builtin.Block className="form_icon" tag="div">
                          <_Builtin.HtmlEmbed
                            className="icon-embed-xxxsmall"
                            value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20width%3D%22auto%22%20height%3D%22auto%22%20x%3D%220%22%20y%3D%220%22%20viewBox%3D%220%200%20512%20512%22%20style%3D%22enable-background%3Anew%200%200%20512%20512%22%20xml%3Aspace%3D%22preserve%22%3E%3Cg%3E%3Cpath%20d%3D%22m347.216%20301.211-71.387-53.54V138.609c0-10.966-8.864-19.83-19.83-19.83-10.966%200-19.83%208.864-19.83%2019.83v118.978c0%206.246%202.935%2012.136%207.932%2015.864l79.318%2059.489a19.713%2019.713%200%200%200%2011.878%203.966c6.048%200%2011.997-2.717%2015.884-7.952%206.585-8.746%204.8-21.179-3.965-27.743z%22%20fill%3D%22currentColor%22%20opacity%3D%221%22%20data-original%3D%22%23000000%22%2F%3E%3Cpath%20d%3D%22M256%200C114.833%200%200%20114.833%200%20256s114.833%20256%20256%20256%20256-114.833%20256-256S397.167%200%20256%200zm0%20472.341c-119.275%200-216.341-97.066-216.341-216.341S136.725%2039.659%20256%2039.659c119.295%200%20216.341%2097.066%20216.341%20216.341S375.275%20472.341%20256%20472.341z%22%20fill%3D%22currentColor%22%20opacity%3D%221%22%20data-original%3D%22%23000000%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                          />
                        </_Builtin.Block>
                        <_Builtin.FormBlockLabel
                          className="form_field-label"
                          htmlFor="open_hour"
                        >
                          {"Horaire d'ouverture"}
                        </_Builtin.FormBlockLabel>
                      </_Builtin.Block>
                      <_Builtin.FormSelect
                        className="form_select"
                        name="field-24"
                        data-name="Field 24"
                        required={true}
                        multiple={false}
                        wized="add_court_open"
                        id="field-24"
                        options={[
                          {
                            t: "ouverture",
                            v: "--",
                          },
                          {
                            t: "07h00",
                            v: "7",
                          },
                          {
                            t: "07h30",
                            v: "7.5",
                          },
                          {
                            t: "08h00",
                            v: "8",
                          },
                          {
                            t: "08h30",
                            v: "8.5",
                          },
                          {
                            t: "09h00",
                            v: "9",
                          },
                          {
                            t: "09h30",
                            v: "9.5",
                          },
                          {
                            t: "10h00",
                            v: "10",
                          },
                          {
                            t: "10h30",
                            v: "10.5",
                          },
                          {
                            t: "11h00",
                            v: "11",
                          },
                          {
                            t: "11h30",
                            v: "11.5",
                          },
                          {
                            t: "12h00",
                            v: "12",
                          },
                          {
                            t: "12h30",
                            v: "12.5",
                          },
                          {
                            t: "13h00",
                            v: "13",
                          },
                          {
                            t: "13h30",
                            v: "13.5",
                          },
                          {
                            t: "14h00",
                            v: "14",
                          },
                          {
                            t: "14h30",
                            v: "14.5",
                          },
                          {
                            t: "15h00",
                            v: "15",
                          },
                          {
                            t: "15h30",
                            v: "15.5",
                          },
                          {
                            t: "16h00",
                            v: "16",
                          },
                          {
                            t: "16h30",
                            v: "16.5",
                          },
                          {
                            t: "17h00",
                            v: "17",
                          },
                          {
                            t: "17h30",
                            v: "17.5",
                          },
                          {
                            t: "18h00",
                            v: "18",
                          },
                          {
                            t: "18h30",
                            v: "18.5",
                          },
                          {
                            t: "19h00",
                            v: "19",
                          },
                          {
                            t: "19h30",
                            v: "19.5",
                          },
                          {
                            t: "20h00",
                            v: "20",
                          },
                          {
                            t: "20h30",
                            v: "20.5",
                          },
                          {
                            t: "21h00",
                            v: "21",
                          },
                          {
                            t: "21h30",
                            v: "21.5",
                          },
                          {
                            t: "22h00",
                            v: "22",
                          },
                          {
                            t: "22h30",
                            v: "22.5",
                          },
                          {
                            t: "23h00",
                            v: "23",
                          },
                        ]}
                      />
                    </_Builtin.Block>
                    <_Builtin.Block className="form_control" tag="div">
                      <_Builtin.Block className="form_flex" tag="div">
                        <_Builtin.Block className="form_icon" tag="div">
                          <_Builtin.HtmlEmbed
                            className="icon-embed-xxxsmall"
                            value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20width%3D%22auto%22%20height%3D%22auto%22%20x%3D%220%22%20y%3D%220%22%20viewBox%3D%220%200%20512%20512%22%20style%3D%22enable-background%3Anew%200%200%20512%20512%22%20xml%3Aspace%3D%22preserve%22%3E%3Cg%3E%3Cpath%20d%3D%22m347.216%20301.211-71.387-53.54V138.609c0-10.966-8.864-19.83-19.83-19.83-10.966%200-19.83%208.864-19.83%2019.83v118.978c0%206.246%202.935%2012.136%207.932%2015.864l79.318%2059.489a19.713%2019.713%200%200%200%2011.878%203.966c6.048%200%2011.997-2.717%2015.884-7.952%206.585-8.746%204.8-21.179-3.965-27.743z%22%20fill%3D%22currentColor%22%20opacity%3D%221%22%20data-original%3D%22%23000000%22%2F%3E%3Cpath%20d%3D%22M256%200C114.833%200%200%20114.833%200%20256s114.833%20256%20256%20256%20256-114.833%20256-256S397.167%200%20256%200zm0%20472.341c-119.275%200-216.341-97.066-216.341-216.341S136.725%2039.659%20256%2039.659c119.295%200%20216.341%2097.066%20216.341%20216.341S375.275%20472.341%20256%20472.341z%22%20fill%3D%22currentColor%22%20opacity%3D%221%22%20data-original%3D%22%23000000%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                          />
                        </_Builtin.Block>
                        <_Builtin.FormBlockLabel
                          className="form_field-label"
                          htmlFor="open_hour"
                        >
                          {"Horaire de fermeture"}
                        </_Builtin.FormBlockLabel>
                      </_Builtin.Block>
                      <_Builtin.FormSelect
                        className="form_select"
                        name="field-24"
                        data-name="Field 24"
                        required={true}
                        multiple={false}
                        wized="add_court_close"
                        id="field-24"
                        options={[
                          {
                            t: "fermeture",
                            v: "--",
                          },
                          {
                            t: "07h00",
                            v: "7",
                          },
                          {
                            t: "07h30",
                            v: "7.5",
                          },
                          {
                            t: "08h00",
                            v: "8",
                          },
                          {
                            t: "08h30",
                            v: "8.5",
                          },
                          {
                            t: "09h00",
                            v: "9",
                          },
                          {
                            t: "09h30",
                            v: "9.5",
                          },
                          {
                            t: "10h00",
                            v: "10",
                          },
                          {
                            t: "10h30",
                            v: "10.5",
                          },
                          {
                            t: "11h00",
                            v: "11",
                          },
                          {
                            t: "11h30",
                            v: "11.5",
                          },
                          {
                            t: "12h00",
                            v: "12",
                          },
                          {
                            t: "12h30",
                            v: "12.5",
                          },
                          {
                            t: "13h00",
                            v: "13",
                          },
                          {
                            t: "13h30",
                            v: "13.5",
                          },
                          {
                            t: "14h00",
                            v: "14",
                          },
                          {
                            t: "14h30",
                            v: "14.5",
                          },
                          {
                            t: "15h00",
                            v: "15",
                          },
                          {
                            t: "15h30",
                            v: "15.5",
                          },
                          {
                            t: "16h00",
                            v: "16",
                          },
                          {
                            t: "16h30",
                            v: "16.5",
                          },
                          {
                            t: "17h00",
                            v: "17",
                          },
                          {
                            t: "17h30",
                            v: "17.5",
                          },
                          {
                            t: "18h00",
                            v: "18",
                          },
                          {
                            t: "18h30",
                            v: "18.5",
                          },
                          {
                            t: "19h00",
                            v: "19",
                          },
                          {
                            t: "19h30",
                            v: "19.5",
                          },
                          {
                            t: "20h00",
                            v: "20",
                          },
                          {
                            t: "20h30",
                            v: "20.5",
                          },
                          {
                            t: "21h00",
                            v: "21",
                          },
                          {
                            t: "21h30",
                            v: "21.5",
                          },
                          {
                            t: "22h00",
                            v: "22",
                          },
                          {
                            t: "22h30",
                            v: "22.5",
                          },
                          {
                            t: "23h00",
                            v: "23",
                          },
                        ]}
                      />
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className="form_control"
                    id="w-node-cd5dc5ca-f5d4-aeec-6107-f3c88afbc634-a67f4fc3"
                    tag="div"
                  >
                    <_Builtin.Block className="form_flex" tag="div">
                      <_Builtin.Block className="form_icon" tag="div">
                        <_Builtin.HtmlEmbed
                          className="icon-embed-xxxsmall"
                          value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20width%3D%22auto%22%20height%3D%22auto%22%20x%3D%220%22%20y%3D%220%22%20viewBox%3D%220%200%20512%20512%22%20style%3D%22enable-background%3Anew%200%200%20512%20512%22%20xml%3Aspace%3D%22preserve%22%3E%3Cg%3E%3Cpath%20d%3D%22m347.216%20301.211-71.387-53.54V138.609c0-10.966-8.864-19.83-19.83-19.83-10.966%200-19.83%208.864-19.83%2019.83v118.978c0%206.246%202.935%2012.136%207.932%2015.864l79.318%2059.489a19.713%2019.713%200%200%200%2011.878%203.966c6.048%200%2011.997-2.717%2015.884-7.952%206.585-8.746%204.8-21.179-3.965-27.743z%22%20fill%3D%22currentColor%22%20opacity%3D%221%22%20data-original%3D%22%23000000%22%2F%3E%3Cpath%20d%3D%22M256%200C114.833%200%200%20114.833%200%20256s114.833%20256%20256%20256%20256-114.833%20256-256S397.167%200%20256%200zm0%20472.341c-119.275%200-216.341-97.066-216.341-216.341S136.725%2039.659%20256%2039.659c119.295%200%20216.341%2097.066%20216.341%20216.341S375.275%20472.341%20256%20472.341z%22%20fill%3D%22currentColor%22%20opacity%3D%221%22%20data-original%3D%22%23000000%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                        />
                      </_Builtin.Block>
                      <_Builtin.FormBlockLabel
                        className="form_field-label"
                        htmlFor="open_hour"
                      >
                        {"Forfait associés"}
                      </_Builtin.FormBlockLabel>
                    </_Builtin.Block>
                    <_Builtin.Block className="form_flex input" tag="div">
                      <_Builtin.FormCheckboxWrapper
                        className="form_checkbox"
                        wized="add_court_price_checkbox"
                      >
                        <_Builtin.FormCheckboxInput
                          className="form_checkbox-icon"
                          type="checkbox"
                          name="checkbox-3"
                          data-name="Checkbox 3"
                          checked={false}
                          required={false}
                          wized="add_court_price_value"
                          id="checkbox-3"
                          form={{
                            type: "checkbox-input",
                            name: "Checkbox 3",
                          }}
                          inputType="default"
                        />
                        <_Builtin.FormInlineLabel
                          className="form_checkbox-label"
                          wized="add_court_price_text"
                        >
                          {"Checkbox"}
                        </_Builtin.FormInlineLabel>
                      </_Builtin.FormCheckboxWrapper>
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className="form_control"
                    id="w-node-cd5dc5ca-f5d4-aeec-6107-f3c88afbc63f-a67f4fc3"
                    tag="div"
                  >
                    <_Builtin.Block className="form_flex" tag="div">
                      <_Builtin.Block className="form_icon" tag="div">
                        <_Builtin.HtmlEmbed
                          className="icon-embed-xxxsmall"
                          value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20width%3D%22auto%22%20height%3D%22auto%22%20x%3D%220%22%20y%3D%220%22%20viewBox%3D%220%200%20512%20512%22%20style%3D%22enable-background%3Anew%200%200%20512%20512%22%20xml%3Aspace%3D%22preserve%22%3E%3Cg%3E%3Cpath%20d%3D%22m347.216%20301.211-71.387-53.54V138.609c0-10.966-8.864-19.83-19.83-19.83-10.966%200-19.83%208.864-19.83%2019.83v118.978c0%206.246%202.935%2012.136%207.932%2015.864l79.318%2059.489a19.713%2019.713%200%200%200%2011.878%203.966c6.048%200%2011.997-2.717%2015.884-7.952%206.585-8.746%204.8-21.179-3.965-27.743z%22%20fill%3D%22currentColor%22%20opacity%3D%221%22%20data-original%3D%22%23000000%22%2F%3E%3Cpath%20d%3D%22M256%200C114.833%200%200%20114.833%200%20256s114.833%20256%20256%20256%20256-114.833%20256-256S397.167%200%20256%200zm0%20472.341c-119.275%200-216.341-97.066-216.341-216.341S136.725%2039.659%20256%2039.659c119.295%200%20216.341%2097.066%20216.341%20216.341S375.275%20472.341%20256%20472.341z%22%20fill%3D%22currentColor%22%20opacity%3D%221%22%20data-original%3D%22%23000000%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                        />
                      </_Builtin.Block>
                      <_Builtin.FormBlockLabel
                        className="form_field-label"
                        htmlFor="open_hour"
                      >
                        {"Site associés"}
                      </_Builtin.FormBlockLabel>
                    </_Builtin.Block>
                    <_Builtin.Block className="form_flex input" tag="div">
                      <_Builtin.FormRadioWrapper
                        className="form_radio"
                        wized="add_radio_court_site"
                      >
                        <_Builtin.FormRadioInput
                          className="form_radio-icon"
                          type="radio"
                          name="Sites"
                          data-name="Sites"
                          required={true}
                          wized="add_radio_site_btn"
                          id="radio-2"
                          form={{
                            type: "radio-input",
                            name: "Sites",
                          }}
                          inputType="custom"
                          customClassName="w-form-formradioinput--inputType-custom"
                        />
                        <_Builtin.FormInlineLabel
                          className="form_radio-label"
                          wized="add_radio_site_texte"
                        >
                          {"Nom du sites"}
                        </_Builtin.FormInlineLabel>
                      </_Builtin.FormRadioWrapper>
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className="error_message"
                    tag="div"
                    wized="add_court_error"
                    wized-cloak=""
                  />
                  <_Builtin.Block
                    className="success_message"
                    tag="div"
                    wized="add_court_success"
                    wized-cloak=""
                  >
                    <_Builtin.HtmlEmbed
                      className="icon-1x1-small text-color-green"
                      value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20width%3D%22auto%22%20height%3D%22auto%22%20x%3D%220%22%20y%3D%220%22%20viewBox%3D%220%200%20408.576%20408.576%22%20style%3D%22enable-background%3Anew%200%200%20512%20512%22%20xml%3Aspace%3D%22preserve%22%20class%3D%22%22%3E%3Cg%3E%3Cpath%20d%3D%22M204.288%200C91.648%200%200%2091.648%200%20204.288s91.648%20204.288%20204.288%20204.288%20204.288-91.648%20204.288-204.288S316.928%200%20204.288%200zm114.176%20150.528-130.56%20129.536c-7.68%207.68-19.968%208.192-28.16.512L90.624%20217.6c-8.192-7.68-8.704-20.48-1.536-28.672%207.68-8.192%2020.48-8.704%2028.672-1.024l54.784%2050.176L289.28%20121.344c8.192-8.192%2020.992-8.192%2029.184%200s8.192%2020.992%200%2029.184z%22%20fill%3D%22currentColor%22%20opacity%3D%221%22%20data-original%3D%22%23000000%22%20class%3D%22%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                    />
                    <_Builtin.Block className="success-message_title" tag="div">
                      {"Le court à bien été ajouté !"}
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className="form_flex loader"
                    tag="div"
                    wized="add_court_loader"
                    wized-cloak=""
                  >
                    <_Builtin.NotSupported _atom="Animation" />
                    <_Builtin.Block tag="div">{"patientez svp"}</_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className="button-group court_form"
                    id="w-node-cd5dc5ca-f5d4-aeec-6107-f3c88afbc653-a67f4fc3"
                    tag="div"
                  >
                    <_Builtin.FormButton
                      className="button is-small"
                      id="w-node-cd5dc5ca-f5d4-aeec-6107-f3c88afbc654-a67f4fc3"
                      type="submit"
                      value="Enregistrer"
                      data-wait="Please wait..."
                      wized="add_court_btn"
                    />
                    <_Builtin.FormButton
                      className="button is-small is-red"
                      id="w-node-cd5dc5ca-f5d4-aeec-6107-f3c88afbc655-a67f4fc3"
                      data-w-id="cd5dc5ca-f5d4-aeec-6107-f3c88afbc655"
                      type="submit"
                      value="Annuler"
                      data-wait="Please wait..."
                      wized="cancel_btn"
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
              className="court_add_modal_background-overlay"
              data-w-id="cd5dc5ca-f5d4-aeec-6107-f3c88afbc65c"
              tag="div"
            />
          </_Builtin.Block>
          <ModalUpdateCourt />
          <ModalDeleteCourt />
          <ModalAddBooking />
          <ModalUpdateBooking />
          <ModalDeleteBooking />
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
                styleManage={styleManage}
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
                    id="w-node-cd5dc5ca-f5d4-aeec-6107-f3c88afbc669-a67f4fc3"
                    tag="div"
                  >
                    <_Builtin.HtmlEmbed
                      className="icon-embed-xsmall"
                      value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20x%3D%220%22%20y%3D%220%22%20viewBox%3D%220%200%2024%2024%22%20style%3D%22enable-background%3Anew%200%200%20512%20512%22%20xml%3Aspace%3D%22preserve%22%20class%3D%22%22%3E%3Cg%3E%3Cpath%20d%3D%22M17.233%2015.328a4.773%204.773%200%200%200-4.7-4.078h-1.064a4.773%204.773%200%200%200-4.7%204.078l-.51%203.566a.75.75%200%200%200%20.213.636c.2.2%201.427%201.22%205.53%201.22s5.327-1.016%205.53-1.22a.75.75%200%200%200%20.213-.636zM7.56%2011.8a5.7%205.7%200%200%200-1.78%203.39l-.37%202.56c-2.97-.02-3.87-1.1-4.02-1.32a.739.739%200%200%201-.13-.56l.22-1.24a4.093%204.093%200%200%201%206.08-2.83zM22.74%2015.87a.739.739%200%200%201-.13.56c-.15.22-1.05%201.3-4.02%201.32l-.37-2.56a5.7%205.7%200%200%200-1.78-3.39%204.093%204.093%200%200%201%206.08%202.83zM7.73%209.6a2.714%202.714%200%200%201-2.23%201.15A2.75%202.75%200%201%201%207.15%205.8%204.812%204.812%200%200%200%207%207a5.01%205.01%200%200%200%20.73%202.6zM21.25%208a2.748%202.748%200%200%201-2.75%202.75%202.714%202.714%200%200%201-2.23-1.15A5.01%205.01%200%200%200%2017%207a4.812%204.812%200%200%200-.15-1.2%202.75%202.75%200%200%201%204.4%202.2z%22%20fill%3D%22currentColor%22%20opacity%3D%221%22%20class%3D%22%22%2F%3E%3Ccircle%20cx%3D%2212%22%20cy%3D%227%22%20r%3D%223.75%22%20fill%3D%22currentColor%22%20opacity%3D%221%22%20class%3D%22%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E"
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
                      data-w-id="cd5dc5ca-f5d4-aeec-6107-f3c88afbc67c"
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
                    data-w-id="cd5dc5ca-f5d4-aeec-6107-f3c88afbc67e"
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
                          current="réservations"
                          easing="ease"
                          fadeIn={300}
                          fadeOut={100}
                        >
                          <_Builtin.TabsMenu className="tabs_menu" tag="div">
                            <_Builtin.TabsLink
                              className="tab_link"
                              data-w-tab="réservations"
                              block="inline"
                            >
                              <_Builtin.Block tag="div">
                                {"Réservations"}
                              </_Builtin.Block>
                            </_Builtin.TabsLink>
                            <_Builtin.TabsLink
                              className="tab_link"
                              data-w-tab="courts"
                              block="inline"
                            >
                              <_Builtin.Block tag="div">
                                {"Courts"}
                              </_Builtin.Block>
                            </_Builtin.TabsLink>
                            <_Builtin.TabsLink
                              className="tab_link site"
                              data-w-tab="site"
                              block="inline"
                            >
                              <_Builtin.Block tag="div">
                                {"Sites"}
                              </_Builtin.Block>
                            </_Builtin.TabsLink>
                          </_Builtin.TabsMenu>
                          <_Builtin.TabsContent className="card" tag="div">
                            <_Builtin.TabsPane
                              tag="div"
                              data-w-tab="réservations"
                            >
                              <_Builtin.Link
                                className="button is-icon is-tiny green"
                                data-w-id="cd5dc5ca-f5d4-aeec-6107-f3c88afbc692"
                                button={false}
                                wized="add_bookings_btn"
                                block="inline"
                                options={{
                                  href: "#",
                                }}
                              >
                                <_Builtin.Block tag="div">
                                  {"Créer réservation"}
                                </_Builtin.Block>
                                <_Builtin.HtmlEmbed
                                  className="icon-1x1-small"
                                  value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20width%3D%22auto%22%20height%3D%22auto%22%20x%3D%220%22%20y%3D%220%22%20viewBox%3D%220%200%2032%2032%22%20style%3D%22enable-background%3Anew%200%200%20512%20512%22%20xml%3Aspace%3D%22preserve%22%20class%3D%22%22%3E%3Cg%3E%3Cg%20data-name%3D%22Layer%202%22%3E%3Cpath%20d%3D%22M27%204h-4V3a1%201%200%200%200-2%200v1H11V3a1%201%200%200%200-2%200v1H5a3%203%200%200%200-3%203v20a3%203%200%200%200%203%203h22a3%203%200%200%200%203-3V7a3%203%200%200%200-3-3zM5%206h22a1%201%200%200%201%201%201v3H4V7a1%201%200%200%201%201-1zm22%2022H5a1%201%200%200%201-1-1V12h24v15a1%201%200%200%201-1%201z%22%20fill%3D%22currentColor%22%20opacity%3D%221%22%20data-original%3D%22%23000000%22%20class%3D%22%22%2F%3E%3Cpath%20d%3D%22m20.35%2015.241-6.3%205.4-2.346-2.345a1%201%200%200%200-1.414%201.414l3%203a1%201%200%200%200%201.357.052l7-6a1%201%200%201%200-1.3-1.518z%22%20fill%3D%22currentColor%22%20opacity%3D%221%22%20data-original%3D%22%23000000%22%20class%3D%22%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                                />
                              </_Builtin.Link>
                              <_Builtin.Block
                                className="card_header filter"
                                tag="div"
                              >
                                <_Builtin.Block
                                  className="card_header_left-content"
                                  tag="div"
                                >
                                  <_Builtin.Block
                                    className="text-size-small"
                                    tag="div"
                                  >
                                    {"Joueur :"}
                                  </_Builtin.Block>
                                  <_Builtin.FormWrapper
                                    className="form-block"
                                    wized="name_filter_form"
                                  >
                                    <_Builtin.FormForm
                                      className="form_reset-name"
                                      name="wf-form-filtrer-par-nom"
                                      data-name="filtrer par nom"
                                      method="get"
                                      wized="name_filter_form"
                                    >
                                      <_Builtin.FormTextInput
                                        className="form_input gestion"
                                        name="field"
                                        maxLength={256}
                                        placeholder="Nom"
                                        disabled={false}
                                        type="text"
                                        required={true}
                                        autoFocus={false}
                                        wized="filteredName"
                                      />
                                    </_Builtin.FormForm>
                                    <_Builtin.FormSuccessMessage>
                                      <_Builtin.Block tag="div">
                                        {
                                          "Thank you! Your submission has been received!"
                                        }
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
                                  <_Builtin.Link
                                    className="icon-link"
                                    button={false}
                                    wized="reset_filter"
                                    block="inline"
                                    options={{
                                      href: "#",
                                    }}
                                  >
                                    <_Builtin.HtmlEmbed
                                      className="icon-embed"
                                      value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20width%3D%22auto%22%20height%3D%22auto%22%20x%3D%220%22%20y%3D%220%22%20viewBox%3D%220%200%2024%2024%22%20style%3D%22enable-background%3Anew%200%200%20512%20512%22%20xml%3Aspace%3D%22preserve%22%20class%3D%22%22%3E%3Cg%3E%3Cpath%20d%3D%22M19.602%2012.635a.99.99%200%200%200-1.134.844%206.402%206.402%200%200%201-1.83%203.618%206.506%206.506%200%200%201-9.192%200%206.507%206.507%200%200%201%200-9.192%206.414%206.414%200%200%201%203.503-1.8%206.187%206.187%200%200%201%201.848-.055%206.414%206.414%200%200%201%202.466.828l-1.302.223a1%201%200%201%200%20.338%201.971l3.49-.596a1.002%201.002%200%200%200%20.816-1.155l-.597-3.49a1%201%200%201%200-1.97.338l.156.919a8.423%208.423%200%200%200-3.17-1.025%208.102%208.102%200%200%200-2.428.074%208.379%208.379%200%200%200-4.564%202.354c-3.313%203.314-3.313%208.705%200%2012.02a8.471%208.471%200%200%200%206.01%202.485%208.471%208.471%200%200%200%206.01-2.485%208.39%208.39%200%200%200%202.394-4.741%201%201%200%200%200-.843-1.135z%22%20fill%3D%22currentColor%22%20opacity%3D%221%22%20data-original%3D%22%23000000%22%20class%3D%22%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                                    />
                                  </_Builtin.Link>
                                </_Builtin.Block>
                                <_Builtin.Block
                                  className="card_header_left-content"
                                  tag="div"
                                >
                                  <_Builtin.Block
                                    className="text-size-small"
                                    tag="div"
                                  >
                                    {"Terrain :"}
                                  </_Builtin.Block>
                                  <_Builtin.FormWrapper
                                    className="form-block"
                                    wized="name_filter_form"
                                  >
                                    <_Builtin.FormForm
                                      className="form_reset-name"
                                      name="wf-form-filtrer-par-nom"
                                      data-name="filtrer par nom"
                                      method="get"
                                      wized="court_filter_form"
                                    >
                                      <_Builtin.FormSelect
                                        className="form_input is-select-input is-court-site"
                                        name="field"
                                        required={false}
                                        multiple={false}
                                        wized="select_court"
                                        id="select-court"
                                        options={[
                                          {
                                            t: "Terrain",
                                            v: "null",
                                          },
                                        ]}
                                      />
                                    </_Builtin.FormForm>
                                    <_Builtin.FormSuccessMessage>
                                      <_Builtin.Block tag="div">
                                        {
                                          "Thank you! Your submission has been received!"
                                        }
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
                                  <_Builtin.Link
                                    className="icon-link"
                                    button={false}
                                    wized="reset_filter"
                                    block="inline"
                                    options={{
                                      href: "#",
                                    }}
                                  >
                                    <_Builtin.HtmlEmbed
                                      className="icon-embed"
                                      value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20width%3D%22auto%22%20height%3D%22auto%22%20x%3D%220%22%20y%3D%220%22%20viewBox%3D%220%200%2024%2024%22%20style%3D%22enable-background%3Anew%200%200%20512%20512%22%20xml%3Aspace%3D%22preserve%22%20class%3D%22%22%3E%3Cg%3E%3Cpath%20d%3D%22M19.602%2012.635a.99.99%200%200%200-1.134.844%206.402%206.402%200%200%201-1.83%203.618%206.506%206.506%200%200%201-9.192%200%206.507%206.507%200%200%201%200-9.192%206.414%206.414%200%200%201%203.503-1.8%206.187%206.187%200%200%201%201.848-.055%206.414%206.414%200%200%201%202.466.828l-1.302.223a1%201%200%201%200%20.338%201.971l3.49-.596a1.002%201.002%200%200%200%20.816-1.155l-.597-3.49a1%201%200%201%200-1.97.338l.156.919a8.423%208.423%200%200%200-3.17-1.025%208.102%208.102%200%200%200-2.428.074%208.379%208.379%200%200%200-4.564%202.354c-3.313%203.314-3.313%208.705%200%2012.02a8.471%208.471%200%200%200%206.01%202.485%208.471%208.471%200%200%200%206.01-2.485%208.39%208.39%200%200%200%202.394-4.741%201%201%200%200%200-.843-1.135z%22%20fill%3D%22currentColor%22%20opacity%3D%221%22%20data-original%3D%22%23000000%22%20class%3D%22%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                                    />
                                  </_Builtin.Link>
                                </_Builtin.Block>
                                <_Builtin.Block
                                  className="card_header_left-content"
                                  tag="div"
                                >
                                  <_Builtin.Block
                                    className="text-size-small"
                                    tag="div"
                                  >
                                    {"Date :"}
                                  </_Builtin.Block>
                                  <_Builtin.FormWrapper className="form-block">
                                    <_Builtin.FormForm
                                      className="reservation_filter_form"
                                      name="wf-form-reservation-filter-date"
                                      data-name="reservation filter date"
                                      method="get"
                                      id="wf-form-reservation-filter-date"
                                    >
                                      <_Builtin.Block
                                        className="datepicker_wrap"
                                        tag="div"
                                      >
                                        <_Builtin.FormTextInput
                                          className="form_input_date gestion"
                                          name="fitler_date-2"
                                          maxLength={256}
                                          data-name="Fitler Date 2"
                                          placeholder="jj.mm.aaaa"
                                          disabled={false}
                                          type="text"
                                          required={true}
                                          autoFocus={false}
                                          data-ms-member="FIELD_ID"
                                          autoComplete="off"
                                          data-input="datepicker"
                                          wized="datepicker"
                                          id="fitler_date-2"
                                        />
                                        <_Builtin.HtmlEmbed
                                          className="icon-embed-xxsmall datepicker"
                                          value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20x%3D%220%22%20y%3D%220%22%20viewBox%3D%220%200%2034%2034%22%20style%3D%22enable-background%3Anew%200%200%20512%20512%22%20xml%3Aspace%3D%22preserve%22%3E%3Cg%3E%3Cpath%20d%3D%22M29.6%202h-3v3c0%20.6-.5%201-1%201s-1-.4-1-1V2h-16v3c0%20.6-.5%201-1%201s-1-.4-1-1V2h-3C2.1%202%201%203.3%201%205v3.6h32V5c0-1.7-1.8-3-3.4-3zM1%2010.7V29c0%201.8%201.1%203%202.7%203h26c1.6%200%203.4-1.3%203.4-3V10.7zm8.9%2016.8H7.5c-.4%200-.8-.3-.8-.8v-2.5c0-.4.3-.8.8-.8H10c.4%200%20.8.3.8.8v2.5c-.1.5-.4.8-.9.8zm0-9H7.5c-.4%200-.8-.3-.8-.8v-2.5c0-.4.3-.8.8-.8H10c.4%200%20.8.3.8.8v2.5c-.1.5-.4.8-.9.8zm8%209h-2.5c-.4%200-.8-.3-.8-.8v-2.5c0-.4.3-.8.8-.8h2.5c.4%200%20.8.3.8.8v2.5c0%20.5-.3.8-.8.8zm0-9h-2.5c-.4%200-.8-.3-.8-.8v-2.5c0-.4.3-.8.8-.8h2.5c.4%200%20.8.3.8.8v2.5c0%20.5-.3.8-.8.8zm8%209h-2.5c-.4%200-.8-.3-.8-.8v-2.5c0-.4.3-.8.8-.8h2.5c.4%200%20.8.3.8.8v2.5c0%20.5-.3.8-.8.8zm0-9h-2.5c-.4%200-.8-.3-.8-.8v-2.5c0-.4.3-.8.8-.8h2.5c.4%200%20.8.3.8.8v2.5c0%20.5-.3.8-.8.8z%22%20fill%3D%22currentColor%22%20opacity%3D%221%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                                        />
                                      </_Builtin.Block>
                                    </_Builtin.FormForm>
                                    <_Builtin.FormSuccessMessage>
                                      <_Builtin.Block tag="div">
                                        {
                                          "Thank you! Your submission has been received!"
                                        }
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
                                  <_Builtin.Link
                                    className="icon-link"
                                    button={false}
                                    wized="reset_filter"
                                    block="inline"
                                    options={{
                                      href: "#",
                                    }}
                                  >
                                    <_Builtin.HtmlEmbed
                                      className="icon-embed"
                                      value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20width%3D%22auto%22%20height%3D%22auto%22%20x%3D%220%22%20y%3D%220%22%20viewBox%3D%220%200%2024%2024%22%20style%3D%22enable-background%3Anew%200%200%20512%20512%22%20xml%3Aspace%3D%22preserve%22%20class%3D%22%22%3E%3Cg%3E%3Cpath%20d%3D%22M19.602%2012.635a.99.99%200%200%200-1.134.844%206.402%206.402%200%200%201-1.83%203.618%206.506%206.506%200%200%201-9.192%200%206.507%206.507%200%200%201%200-9.192%206.414%206.414%200%200%201%203.503-1.8%206.187%206.187%200%200%201%201.848-.055%206.414%206.414%200%200%201%202.466.828l-1.302.223a1%201%200%201%200%20.338%201.971l3.49-.596a1.002%201.002%200%200%200%20.816-1.155l-.597-3.49a1%201%200%201%200-1.97.338l.156.919a8.423%208.423%200%200%200-3.17-1.025%208.102%208.102%200%200%200-2.428.074%208.379%208.379%200%200%200-4.564%202.354c-3.313%203.314-3.313%208.705%200%2012.02a8.471%208.471%200%200%200%206.01%202.485%208.471%208.471%200%200%200%206.01-2.485%208.39%208.39%200%200%200%202.394-4.741%201%201%200%200%200-.843-1.135z%22%20fill%3D%22currentColor%22%20opacity%3D%221%22%20data-original%3D%22%23000000%22%20class%3D%22%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                                    />
                                  </_Builtin.Link>
                                </_Builtin.Block>
                              </_Builtin.Block>
                              <_Builtin.Block
                                className="booking_grid"
                                tag="div"
                                wized="grid_booking"
                                id="grid_booking"
                              />
                              <_Builtin.Block
                                className="card_line older"
                                tag="div"
                                wized="bookings_list_component"
                              >
                                <_Builtin.NotSupported _atom="DOM" />
                              </_Builtin.Block>
                              <_Builtin.Block
                                className="card_loader"
                                tag="div"
                                wized="booking_list_loader"
                              >
                                <_Builtin.NotSupported _atom="Animation" />
                                <_Builtin.Block
                                  className="card_loader-text"
                                  tag="div"
                                >
                                  {"Chargement des réservations"}
                                </_Builtin.Block>
                              </_Builtin.Block>
                              <_Builtin.Block
                                className="popup_delete_trigger"
                                data-w-id="cd5dc5ca-f5d4-aeec-6107-f3c88afbc6ea"
                                tag="div"
                                wized="update_booking_trigger"
                                id="delete_trigger"
                              />
                              <_Builtin.Block
                                className="popup_update_trigger"
                                data-w-id="cd5dc5ca-f5d4-aeec-6107-f3c88afbc6eb"
                                tag="div"
                                wized="update_booking_trigger"
                                id="update_trigger"
                              />
                            </_Builtin.TabsPane>
                            <_Builtin.TabsPane tag="div" data-w-tab="courts">
                              <_Builtin.Block className="card_header" tag="div">
                                <_Builtin.Block
                                  className="heading-style-h5"
                                  tag="div"
                                >
                                  {"Courts"}
                                </_Builtin.Block>
                                <_Builtin.Block
                                  className="card_header_left-content"
                                  tag="div"
                                >
                                  <_Builtin.Link
                                    className="button is-icon is-tiny green is-hide"
                                    data-w-id="cd5dc5ca-f5d4-aeec-6107-f3c88afbc6f1"
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
                              <_Builtin.Block className="courts_grid" tag="div">
                                <_Builtin.Block
                                  className="card_line court"
                                  tag="div"
                                  wized="court_list_item"
                                >
                                  <_Builtin.Block
                                    className="court_flex"
                                    tag="div"
                                  >
                                    <_Builtin.Block
                                      className="court_right-content"
                                      tag="div"
                                    >
                                      <_Builtin.Block
                                        className="court-name"
                                        tag="div"
                                      >
                                        <_Builtin.HtmlEmbed
                                          className="icon-1x1-small"
                                          value="%3Csvg%20width%3D%22auto%22%20height%3D%22auto%22%20viewBox%3D%220%200%2011%2013%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M0%200.464286L0%2012.5357C0%2012.6589%200.0643849%2012.7769%200.17899%2012.864C0.293596%2012.9511%200.449034%2013%200.611111%2013H10.3889C10.551%2013%2010.7064%2012.9511%2010.821%2012.864C10.9356%2012.7769%2011%2012.6589%2011%2012.5357L11%200.464286C11%200.34115%2010.9356%200.223057%2010.821%200.135986C10.7064%200.0489159%2010.551%200%2010.3889%200H0.611111C0.449034%200%200.293596%200.0489159%200.17899%200.135986C0.0643849%200.223057%200%200.34115%200%200.464286ZM1.22222%204.17857H4.88889L4.88889%208.82143H1.22222L1.22222%204.17857ZM1.22222%2012.0714L1.22222%209.75H9.77778V12.0714H1.22222ZM9.77778%208.82143H6.11111L6.11111%204.17857H9.77778V8.82143ZM9.77778%200.928572V3.25H1.22222L1.22222%200.928572H9.77778Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                                        />
                                        <_Builtin.Block
                                          tag="div"
                                          wized="court_name"
                                        >
                                          {"Nom du terrain"}
                                        </_Builtin.Block>
                                      </_Builtin.Block>
                                      <_Builtin.Block
                                        className="court-image_box"
                                        tag="div"
                                      >
                                        <_Builtin.Image
                                          className="court-image"
                                          width="568"
                                          height="auto"
                                          loading="lazy"
                                          wized="court_photo"
                                          alt=""
                                          src="https://cdn.prod.website-files.com/64ad6274d8c64f92f123999e/65da7dc0ff5fcdc97cf92bcc_img-blog-correction4.webp"
                                        />
                                      </_Builtin.Block>
                                      <_Builtin.Block
                                        className="details_list"
                                        tag="div"
                                      >
                                        <_Builtin.Block
                                          className="details_row court"
                                          tag="div"
                                        >
                                          <_Builtin.Block
                                            className="court-row-text"
                                            tag="div"
                                          >
                                            <_Builtin.HtmlEmbed
                                              className="icon-court"
                                              value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20width%3D%22auto%22%20height%3D%22auto%22%20x%3D%220%22%20y%3D%220%22%20viewBox%3D%220%200%20512%20512%22%20style%3D%22enable-background%3Anew%200%200%20512%20512%22%20xml%3Aspace%3D%22preserve%22%3E%3Cg%3E%3Cpath%20d%3D%22m347.216%20301.211-71.387-53.54V138.609c0-10.966-8.864-19.83-19.83-19.83-10.966%200-19.83%208.864-19.83%2019.83v118.978c0%206.246%202.935%2012.136%207.932%2015.864l79.318%2059.489a19.713%2019.713%200%200%200%2011.878%203.966c6.048%200%2011.997-2.717%2015.884-7.952%206.585-8.746%204.8-21.179-3.965-27.743z%22%20fill%3D%22currentColor%22%20opacity%3D%221%22%20data-original%3D%22%23000000%22%2F%3E%3Cpath%20d%3D%22M256%200C114.833%200%200%20114.833%200%20256s114.833%20256%20256%20256%20256-114.833%20256-256S397.167%200%20256%200zm0%20472.341c-119.275%200-216.341-97.066-216.341-216.341S136.725%2039.659%20256%2039.659c119.295%200%20216.341%2097.066%20216.341%20216.341S375.275%20472.341%20256%20472.341z%22%20fill%3D%22currentColor%22%20opacity%3D%221%22%20data-original%3D%22%23000000%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                                            />
                                            <_Builtin.Block tag="div">
                                              {"Horaire d'ouverture"}
                                            </_Builtin.Block>
                                          </_Builtin.Block>
                                          <_Builtin.Block
                                            tag="div"
                                            wized="court_open_hours"
                                          >
                                            {"-"}
                                          </_Builtin.Block>
                                        </_Builtin.Block>
                                        <_Builtin.Block
                                          className="details_row court"
                                          tag="div"
                                        >
                                          <_Builtin.Block
                                            className="court-row-text"
                                            tag="div"
                                          >
                                            <_Builtin.HtmlEmbed
                                              className="icon-court"
                                              value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20width%3D%22auto%22%20height%3D%22auto%22%20x%3D%220%22%20y%3D%220%22%20viewBox%3D%220%200%20512%20512%22%20style%3D%22enable-background%3Anew%200%200%20512%20512%22%20xml%3Aspace%3D%22preserve%22%3E%3Cg%3E%3Cpath%20d%3D%22m347.216%20301.211-71.387-53.54V138.609c0-10.966-8.864-19.83-19.83-19.83-10.966%200-19.83%208.864-19.83%2019.83v118.978c0%206.246%202.935%2012.136%207.932%2015.864l79.318%2059.489a19.713%2019.713%200%200%200%2011.878%203.966c6.048%200%2011.997-2.717%2015.884-7.952%206.585-8.746%204.8-21.179-3.965-27.743z%22%20fill%3D%22currentColor%22%20opacity%3D%221%22%20data-original%3D%22%23000000%22%2F%3E%3Cpath%20d%3D%22M256%200C114.833%200%200%20114.833%200%20256s114.833%20256%20256%20256%20256-114.833%20256-256S397.167%200%20256%200zm0%20472.341c-119.275%200-216.341-97.066-216.341-216.341S136.725%2039.659%20256%2039.659c119.295%200%20216.341%2097.066%20216.341%20216.341S375.275%20472.341%20256%20472.341z%22%20fill%3D%22currentColor%22%20opacity%3D%221%22%20data-original%3D%22%23000000%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                                            />
                                            <_Builtin.Block tag="div">
                                              {"Horaire de fermeture"}
                                            </_Builtin.Block>
                                          </_Builtin.Block>
                                          <_Builtin.Block
                                            tag="div"
                                            wized="court_close_hours"
                                          >
                                            {"-"}
                                          </_Builtin.Block>
                                        </_Builtin.Block>
                                        <_Builtin.Block
                                          className="details_row court"
                                          tag="div"
                                          wized="price_item_list"
                                        >
                                          <_Builtin.Block
                                            className="court-row-text"
                                            tag="div"
                                          >
                                            <_Builtin.HtmlEmbed
                                              className="icon-court"
                                              value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20width%3D%22auto%22%20height%3D%22auto%22%20x%3D%220%22%20y%3D%220%22%20viewBox%3D%220%200%20512%20512%22%20style%3D%22enable-background%3Anew%200%200%20512%20512%22%20xml%3Aspace%3D%22preserve%22%3E%3Cg%3E%3Cpath%20d%3D%22M256%20512c-68.38%200-132.668-26.628-181.02-74.98S0%20324.38%200%20256%2026.629%20123.333%2074.98%2074.98%20187.62%200%20256%200s132.668%2026.628%20181.02%2074.98S512%20187.62%20512%20256s-26.629%20132.667-74.98%20181.02S324.38%20512%20256%20512zm0-480C132.486%2032%2032%20132.486%2032%20256s100.486%20224%20224%20224%20224-100.486%20224-224S379.514%2032%20256%2032z%22%20fill%3D%22currentColor%22%20opacity%3D%221%22%20data-original%3D%22%23000000%22%2F%3E%3Cpath%20d%3D%22M256%20240c-22.056%200-40-17.944-40-40s17.944-40%2040-40%2040%2017.944%2040%2040c0%208.836%207.163%2016%2016%2016s16-7.164%2016-16c0-34.201-23.978-62.888-56-70.186V112c0-8.836-7.163-16-16-16s-16%207.164-16%2016v17.814c-32.022%207.298-56%2035.985-56%2070.186%200%2039.701%2032.299%2072%2072%2072%2022.056%200%2040%2017.944%2040%2040s-17.944%2040-40%2040-40-17.944-40-40c0-8.836-7.163-16-16-16s-16%207.164-16%2016c0%2034.201%2023.978%2062.888%2056%2070.186V400c0%208.836%207.163%2016%2016%2016s16-7.164%2016-16v-17.814c32.022-7.298%2056-35.985%2056-70.186%200-39.701-32.299-72-72-72z%22%20fill%3D%22currentColor%22%20opacity%3D%221%22%20data-original%3D%22%23000000%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                                            />
                                            <_Builtin.Block tag="div">
                                              {"Forfait "}
                                              <_Builtin.Span wized="price_hour">
                                                {"heure"}
                                              </_Builtin.Span>
                                            </_Builtin.Block>
                                          </_Builtin.Block>
                                          <_Builtin.Block
                                            tag="div"
                                            wized="price_amount"
                                          >
                                            {"-"}
                                          </_Builtin.Block>
                                        </_Builtin.Block>
                                      </_Builtin.Block>
                                      <_Builtin.Block
                                        className="icon-flex court"
                                        tag="div"
                                      >
                                        <_Builtin.Link
                                          className="button is-icon is-small is-hide"
                                          data-w-id="cd5dc5ca-f5d4-aeec-6107-f3c88afbc718"
                                          button={false}
                                          wized="update_court_popup"
                                          block="inline"
                                          options={{
                                            href: "#",
                                          }}
                                        >
                                          <_Builtin.HtmlEmbed
                                            className="icon-embed"
                                            value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20width%3D%220.75rem%22%20height%3D%220.75rem%22%20x%3D%220%22%20y%3D%220%22%20viewBox%3D%220%200%20512%20511%22%20style%3D%22enable-background%3Anew%200%200%20512%20512%22%20xml%3Aspace%3D%22preserve%22%3E%3Cg%3E%3Cpath%20d%3D%22M405.332%20256.484c-11.797%200-21.332%209.559-21.332%2021.332v170.668c0%2011.754-9.559%2021.332-21.332%2021.332H64c-11.777%200-21.332-9.578-21.332-21.332V149.816c0-11.754%209.555-21.332%2021.332-21.332h170.668c11.797%200%2021.332-9.558%2021.332-21.332%200-11.777-9.535-21.336-21.332-21.336H64c-35.285%200-64%2028.715-64%2064v298.668c0%2035.286%2028.715%2064%2064%2064h298.668c35.285%200%2064-28.714%2064-64V277.816c0-11.796-9.54-21.332-21.336-21.332zm0%200%22%20fill%3D%22currentColor%22%20opacity%3D%221%22%20data-original%3D%22%23000000%22%2F%3E%3Cpath%20d%3D%22M200.02%20237.05a10.793%2010.793%200%200%200-2.922%205.438l-15.082%2075.438c-.703%203.496.406%207.101%202.922%209.64a10.673%2010.673%200%200%200%207.554%203.114c.68%200%201.387-.063%202.09-.211l75.414-15.082c2.09-.43%203.988-1.43%205.461-2.926l168.79-168.79-75.415-75.41zM496.383%2016.102c-20.797-20.801-54.633-20.801-75.414%200l-29.524%2029.523%2075.414%2075.414%2029.524-29.527C506.453%2081.465%20512%2068.066%20512%2053.816s-5.547-27.648-15.617-37.714zm0%200%22%20fill%3D%22currentColor%22%20opacity%3D%221%22%20data-original%3D%22%23000000%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                                          />
                                          <_Builtin.Block tag="div">
                                            {"Modifier"}
                                          </_Builtin.Block>
                                        </_Builtin.Link>
                                        <_Builtin.Link
                                          className="button is-icon is-small is-red is-hide"
                                          data-w-id="cd5dc5ca-f5d4-aeec-6107-f3c88afbc71c"
                                          button={false}
                                          wized="delete_court_popup"
                                          block="inline"
                                          options={{
                                            href: "#",
                                          }}
                                        >
                                          <_Builtin.HtmlEmbed
                                            className="icon-embed"
                                            value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20width%3D%220.75rem%22%20height%3D%220.75rem%22%20x%3D%220%22%20y%3D%220%22%20viewBox%3D%220%200%20512%20511%22%20style%3D%22enable-background%3Anew%200%200%20512%20512%22%20xml%3Aspace%3D%22preserve%22%3E%3Cg%3E%3Cpath%20d%3D%22M405.332%20256.484c-11.797%200-21.332%209.559-21.332%2021.332v170.668c0%2011.754-9.559%2021.332-21.332%2021.332H64c-11.777%200-21.332-9.578-21.332-21.332V149.816c0-11.754%209.555-21.332%2021.332-21.332h170.668c11.797%200%2021.332-9.558%2021.332-21.332%200-11.777-9.535-21.336-21.332-21.336H64c-35.285%200-64%2028.715-64%2064v298.668c0%2035.286%2028.715%2064%2064%2064h298.668c35.285%200%2064-28.714%2064-64V277.816c0-11.796-9.54-21.332-21.336-21.332zm0%200%22%20fill%3D%22currentColor%22%20opacity%3D%221%22%20data-original%3D%22%23000000%22%2F%3E%3Cpath%20d%3D%22M200.02%20237.05a10.793%2010.793%200%200%200-2.922%205.438l-15.082%2075.438c-.703%203.496.406%207.101%202.922%209.64a10.673%2010.673%200%200%200%207.554%203.114c.68%200%201.387-.063%202.09-.211l75.414-15.082c2.09-.43%203.988-1.43%205.461-2.926l168.79-168.79-75.415-75.41zM496.383%2016.102c-20.797-20.801-54.633-20.801-75.414%200l-29.524%2029.523%2075.414%2075.414%2029.524-29.527C506.453%2081.465%20512%2068.066%20512%2053.816s-5.547-27.648-15.617-37.714zm0%200%22%20fill%3D%22currentColor%22%20opacity%3D%221%22%20data-original%3D%22%23000000%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                                          />
                                          <_Builtin.Block tag="div">
                                            {"Supprimer"}
                                          </_Builtin.Block>
                                        </_Builtin.Link>
                                      </_Builtin.Block>
                                    </_Builtin.Block>
                                  </_Builtin.Block>
                                </_Builtin.Block>
                              </_Builtin.Block>
                              <_Builtin.Block
                                className="card_loader"
                                tag="div"
                                wized="courts_loader"
                              >
                                <_Builtin.NotSupported _atom="Animation" />
                                <_Builtin.Block
                                  className="card_loader-text"
                                  tag="div"
                                >
                                  {"Chargement des courts"}
                                </_Builtin.Block>
                              </_Builtin.Block>
                            </_Builtin.TabsPane>
                            <_Builtin.TabsPane tag="div" data-w-tab="site">
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
                                    data-w-id="cd5dc5ca-f5d4-aeec-6107-f3c88afbc729"
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
                              <_Builtin.Block className="courts_grid" tag="div">
                                <_Builtin.Block
                                  className="card_line court"
                                  tag="div"
                                  wized="site_list_item"
                                >
                                  <_Builtin.Block
                                    className="court_flex"
                                    tag="div"
                                  >
                                    <_Builtin.Block
                                      className="court_right-content"
                                      tag="div"
                                    >
                                      <_Builtin.Block
                                        className="court-name"
                                        tag="div"
                                      >
                                        <_Builtin.HtmlEmbed
                                          className="icon-1x1-small"
                                          value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20x%3D%220%22%20y%3D%220%22%20viewBox%3D%220%200%20512%20512%22%20style%3D%22enable-background%3Anew%200%200%20512%20512%22%20xml%3Aspace%3D%22preserve%22%20class%3D%22%22%3E%3Cg%3E%3Cpath%20d%3D%22M341.476%20338.285c54.483-85.493%2047.634-74.827%2049.204-77.056C410.516%20233.251%20421%20200.322%20421%20166%20421%2074.98%20347.139%200%20256%200%20165.158%200%2091%2074.832%2091%20166c0%2034.3%2010.704%2068.091%2031.19%2096.446l48.332%2075.84C118.847%20346.227%2031%20369.892%2031%20422c0%2018.995%2012.398%2046.065%2071.462%2067.159C143.704%20503.888%20198.231%20512%20256%20512c108.025%200%20225-30.472%20225-90%200-52.117-87.744-75.757-139.524-83.715zm-194.227-92.34a15.57%2015.57%200%200%200-.517-.758C129.685%20221.735%20121%20193.941%20121%20166c0-75.018%2060.406-136%20135-136%2074.439%200%20135%2061.009%20135%20136%200%2027.986-8.521%2054.837-24.646%2077.671-1.445%201.906%206.094-9.806-110.354%20172.918L147.249%20245.945zM256%20482c-117.994%200-195-34.683-195-60%200-17.016%2039.568-44.995%20127.248-55.901l55.102%2086.463a14.998%2014.998%200%200%200%2025.298%200l55.101-86.463C411.431%20377.005%20451%20404.984%20451%20422c0%2025.102-76.313%2060-195%2060z%22%20fill%3D%22currentColor%22%20opacity%3D%221%22%20data-original%3D%22%23000000%22%20class%3D%22%22%2F%3E%3Cpath%20d%3D%22M256%2091c-41.355%200-75%2033.645-75%2075s33.645%2075%2075%2075%2075-33.645%2075-75-33.645-75-75-75zm0%20120c-24.813%200-45-20.187-45-45s20.187-45%2045-45%2045%2020.187%2045%2045-20.187%2045-45%2045z%22%20fill%3D%22currentColor%22%20opacity%3D%221%22%20data-original%3D%22%23000000%22%20class%3D%22%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                                        />
                                        <_Builtin.Block
                                          tag="div"
                                          wized="site_name"
                                        >
                                          {"Nom du site"}
                                        </_Builtin.Block>
                                      </_Builtin.Block>
                                      <_Builtin.Block
                                        className="court-image_box"
                                        tag="div"
                                      >
                                        <_Builtin.Image
                                          className="court-image"
                                          width="568"
                                          height="auto"
                                          loading="lazy"
                                          wized="site_photo"
                                          alt=""
                                          src="https://cdn.prod.website-files.com/64ad6274d8c64f92f123999e/65da7dc0ff5fcdc97cf92bcc_img-blog-correction4.webp"
                                        />
                                      </_Builtin.Block>
                                      <_Builtin.Block
                                        className="details_list"
                                        tag="div"
                                      >
                                        <_Builtin.Block
                                          className="details_row court site"
                                          tag="div"
                                        >
                                          <_Builtin.Block
                                            tag="div"
                                            wized="site_street"
                                          >
                                            {"Address"}
                                          </_Builtin.Block>
                                        </_Builtin.Block>
                                      </_Builtin.Block>
                                      <_Builtin.Block
                                        className="icon-flex court site"
                                        tag="div"
                                      >
                                        <_Builtin.Link
                                          className="button is-icon is-small"
                                          data-w-id="cd5dc5ca-f5d4-aeec-6107-f3c88afbc73c"
                                          button={false}
                                          wized="update_site_popup"
                                          block="inline"
                                          options={{
                                            href: "#",
                                          }}
                                        >
                                          <_Builtin.HtmlEmbed
                                            className="icon-embed"
                                            value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20width%3D%220.75rem%22%20height%3D%220.75rem%22%20x%3D%220%22%20y%3D%220%22%20viewBox%3D%220%200%20512%20511%22%20style%3D%22enable-background%3Anew%200%200%20512%20512%22%20xml%3Aspace%3D%22preserve%22%3E%3Cg%3E%3Cpath%20d%3D%22M405.332%20256.484c-11.797%200-21.332%209.559-21.332%2021.332v170.668c0%2011.754-9.559%2021.332-21.332%2021.332H64c-11.777%200-21.332-9.578-21.332-21.332V149.816c0-11.754%209.555-21.332%2021.332-21.332h170.668c11.797%200%2021.332-9.558%2021.332-21.332%200-11.777-9.535-21.336-21.332-21.336H64c-35.285%200-64%2028.715-64%2064v298.668c0%2035.286%2028.715%2064%2064%2064h298.668c35.285%200%2064-28.714%2064-64V277.816c0-11.796-9.54-21.332-21.336-21.332zm0%200%22%20fill%3D%22currentColor%22%20opacity%3D%221%22%20data-original%3D%22%23000000%22%2F%3E%3Cpath%20d%3D%22M200.02%20237.05a10.793%2010.793%200%200%200-2.922%205.438l-15.082%2075.438c-.703%203.496.406%207.101%202.922%209.64a10.673%2010.673%200%200%200%207.554%203.114c.68%200%201.387-.063%202.09-.211l75.414-15.082c2.09-.43%203.988-1.43%205.461-2.926l168.79-168.79-75.415-75.41zM496.383%2016.102c-20.797-20.801-54.633-20.801-75.414%200l-29.524%2029.523%2075.414%2075.414%2029.524-29.527C506.453%2081.465%20512%2068.066%20512%2053.816s-5.547-27.648-15.617-37.714zm0%200%22%20fill%3D%22currentColor%22%20opacity%3D%221%22%20data-original%3D%22%23000000%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                                          />
                                          <_Builtin.Block tag="div">
                                            {"Modifier"}
                                          </_Builtin.Block>
                                        </_Builtin.Link>
                                        <_Builtin.Link
                                          className="button is-icon is-small is-red"
                                          data-w-id="cd5dc5ca-f5d4-aeec-6107-f3c88afbc740"
                                          button={false}
                                          wized="delete_site_popup"
                                          block="inline"
                                          options={{
                                            href: "#",
                                          }}
                                        >
                                          <_Builtin.HtmlEmbed
                                            className="icon-embed"
                                            value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20width%3D%220.75rem%22%20height%3D%220.75rem%22%20x%3D%220%22%20y%3D%220%22%20viewBox%3D%220%200%20512%20511%22%20style%3D%22enable-background%3Anew%200%200%20512%20512%22%20xml%3Aspace%3D%22preserve%22%3E%3Cg%3E%3Cpath%20d%3D%22M405.332%20256.484c-11.797%200-21.332%209.559-21.332%2021.332v170.668c0%2011.754-9.559%2021.332-21.332%2021.332H64c-11.777%200-21.332-9.578-21.332-21.332V149.816c0-11.754%209.555-21.332%2021.332-21.332h170.668c11.797%200%2021.332-9.558%2021.332-21.332%200-11.777-9.535-21.336-21.332-21.336H64c-35.285%200-64%2028.715-64%2064v298.668c0%2035.286%2028.715%2064%2064%2064h298.668c35.285%200%2064-28.714%2064-64V277.816c0-11.796-9.54-21.332-21.336-21.332zm0%200%22%20fill%3D%22currentColor%22%20opacity%3D%221%22%20data-original%3D%22%23000000%22%2F%3E%3Cpath%20d%3D%22M200.02%20237.05a10.793%2010.793%200%200%200-2.922%205.438l-15.082%2075.438c-.703%203.496.406%207.101%202.922%209.64a10.673%2010.673%200%200%200%207.554%203.114c.68%200%201.387-.063%202.09-.211l75.414-15.082c2.09-.43%203.988-1.43%205.461-2.926l168.79-168.79-75.415-75.41zM496.383%2016.102c-20.797-20.801-54.633-20.801-75.414%200l-29.524%2029.523%2075.414%2075.414%2029.524-29.527C506.453%2081.465%20512%2068.066%20512%2053.816s-5.547-27.648-15.617-37.714zm0%200%22%20fill%3D%22currentColor%22%20opacity%3D%221%22%20data-original%3D%22%23000000%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                                          />
                                          <_Builtin.Block tag="div">
                                            {"Supprimer"}
                                          </_Builtin.Block>
                                        </_Builtin.Link>
                                      </_Builtin.Block>
                                    </_Builtin.Block>
                                  </_Builtin.Block>
                                </_Builtin.Block>
                              </_Builtin.Block>
                              <_Builtin.Block
                                className="card_loader"
                                tag="div"
                                wized="courts_loader"
                              >
                                <_Builtin.NotSupported _atom="Animation" />
                                <_Builtin.Block
                                  className="card_loader-text"
                                  tag="div"
                                >
                                  {"Chargement des courts"}
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
