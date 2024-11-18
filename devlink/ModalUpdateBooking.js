"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";

const _interactionsData = JSON.parse(
  '{"events":{"e-68":{"id":"e-68","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-20","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-69"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"77faf228-e04f-79d9-da58-8db6d16cf175","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"77faf228-e04f-79d9-da58-8db6d16cf175","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1644221544943},"e-70":{"id":"e-70","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-20","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-71"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"77faf228-e04f-79d9-da58-8db6d16cf177","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"77faf228-e04f-79d9-da58-8db6d16cf177","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1644221544943},"e-110":{"id":"e-110","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-20","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-111"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"77faf228-e04f-79d9-da58-8db6d16cf166","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"77faf228-e04f-79d9-da58-8db6d16cf166","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1710102654521},"e-124":{"id":"e-124","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-19","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-125"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65edcb06e424209e95092c7e|7c360113-3065-7219-0373-b7a3bfe31e1d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65edcb06e424209e95092c7e|7c360113-3065-7219-0373-b7a3bfe31e1d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1710284559778},"e-154":{"id":"e-154","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-19","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-155"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65edcb06e424209e95092c82|59f8e04e-b19a-ea9e-0253-46c742915d51","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65edcb06e424209e95092c82|59f8e04e-b19a-ea9e-0253-46c742915d51","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1715436404011},"e-198":{"id":"e-198","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-21","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-199"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"a6458d3f-5373-0f53-4721-e5387dc08f6d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"a6458d3f-5373-0f53-4721-e5387dc08f6d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1717189926185},"e-200":{"id":"e-200","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-19","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-201"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65edcb06e424209e95092c82|d53aaa95-5909-993a-22d6-3ea91cc1c5a5","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65edcb06e424209e95092c82|d53aaa95-5909-993a-22d6-3ea91cc1c5a5","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1722638676859},"e-264":{"id":"e-264","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-19","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-305"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"3bf6ef48-906c-6954-3b84-47cb5cf21b1c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"3bf6ef48-906c-6954-3b84-47cb5cf21b1c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1727734053325},"e-280":{"id":"e-280","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-19","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-281"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"cd5dc5ca-f5d4-aeec-6107-f3c88afbc6e4","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"cd5dc5ca-f5d4-aeec-6107-f3c88afbc6e4","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1727736126886},"e-284":{"id":"e-284","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-19","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-285"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"cd5dc5ca-f5d4-aeec-6107-f3c88afbc6eb","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"cd5dc5ca-f5d4-aeec-6107-f3c88afbc6eb","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1727736126886}},"actionLists":{"a-20":{"id":"a-20","title":"Booking Update Modal [Close]","actionItemGroups":[{"actionItems":[{"id":"a-20-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuad","duration":500,"target":{"selector":".booking_update_content-wrapper","selectorGuids":["0b2a0569-e15b-8471-7127-97bbdfffcaaa"]},"xValue":100,"xUnit":"%","yUnit":"PX","zUnit":"PX"}},{"id":"a-20-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":500,"target":{"selector":".booking_update_background-overlay","selectorGuids":["0b2a0569-e15b-8471-7127-97bbdfffcaae"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-20-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".booking_update_modal_component","selectorGuids":["0b2a0569-e15b-8471-7127-97bbdfffcaa9"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1644220869174},"a-19":{"id":"a-19","title":"Booking Update Modal [Open]","actionItemGroups":[{"actionItems":[{"id":"a-19-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".booking_update_modal_component","selectorGuids":["0b2a0569-e15b-8471-7127-97bbdfffcaa9"]},"value":"none"}},{"id":"a-19-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".booking_update_content-wrapper","selectorGuids":["0b2a0569-e15b-8471-7127-97bbdfffcaaa"]},"xValue":100,"xUnit":"%","yUnit":"PX","zUnit":"PX"}},{"id":"a-19-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".booking_update_background-overlay","selectorGuids":["0b2a0569-e15b-8471-7127-97bbdfffcaae"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-19-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".booking_update_modal_component","selectorGuids":["0b2a0569-e15b-8471-7127-97bbdfffcaa9"]},"value":"flex"}},{"id":"a-19-n-5","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuad","duration":500,"target":{"selector":".booking_update_content-wrapper","selectorGuids":["0b2a0569-e15b-8471-7127-97bbdfffcaaa"]},"xValue":0,"xUnit":"%","yUnit":"PX","zUnit":"PX"}},{"id":"a-19-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":500,"target":{"selector":".booking_update_background-overlay","selectorGuids":["0b2a0569-e15b-8471-7127-97bbdfffcaae"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1644220869174},"a-21":{"id":"a-21","title":"Booking Delete Modal [Open]","actionItemGroups":[{"actionItems":[{"id":"a-21-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".booking_delete_modal_component","selectorGuids":["3d7b4e23-24d1-3be6-e54a-0f0ef260dafe"]},"value":"none"}},{"id":"a-21-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":200,"target":{"selector":".booking_delete_modal_component","selectorGuids":["3d7b4e23-24d1-3be6-e54a-0f0ef260dafe"]},"value":0,"unit":""}},{"id":"a-21-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":500,"target":{"selector":".booking_delete_content-wrapper","selectorGuids":["3d7b4e23-24d1-3be6-e54a-0f0ef260daff"]},"yValue":100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]},{"actionItems":[{"id":"a-21-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".booking_delete_modal_component","selectorGuids":["3d7b4e23-24d1-3be6-e54a-0f0ef260dafe"]},"value":"flex"}},{"id":"a-21-n-5","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":200,"target":{"selector":".booking_delete_modal_component","selectorGuids":["3d7b4e23-24d1-3be6-e54a-0f0ef260dafe"]},"value":1,"unit":""}},{"id":"a-21-n-6","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":500,"target":{"selector":".booking_delete_content-wrapper","selectorGuids":["3d7b4e23-24d1-3be6-e54a-0f0ef260daff"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1644220869174}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function ModalUpdateBooking({ as: _Component = _Builtin.Block }) {
  _interactions.useInteractions(_interactionsData);

  return (
    <_Component className="booking_update_modal_component" tag="div">
      <_Builtin.Block className="booking_update_content-wrapper" tag="div">
        <_Builtin.Block className="div-block-3" tag="div">
          <_Builtin.Block className="modal_header" tag="div">
            <_Builtin.Block className="custom-flex" tag="div">
              <_Builtin.HtmlEmbed
                className="icon-height-large"
                value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20width%3D%22auto%22%20height%3D%22auto%22%20x%3D%220%22%20y%3D%220%22%20viewBox%3D%220%200%2032%2032%22%20style%3D%22enable-background%3Anew%200%200%20512%20512%22%20xml%3Aspace%3D%22preserve%22%20class%3D%22%22%3E%3Cg%3E%3Cg%20data-name%3D%22Layer%202%22%3E%3Cpath%20d%3D%22M27%204h-4V3a1%201%200%200%200-2%200v1H11V3a1%201%200%200%200-2%200v1H5a3%203%200%200%200-3%203v20a3%203%200%200%200%203%203h22a3%203%200%200%200%203-3V7a3%203%200%200%200-3-3zM5%206h22a1%201%200%200%201%201%201v3H4V7a1%201%200%200%201%201-1zm22%2022H5a1%201%200%200%201-1-1V12h24v15a1%201%200%200%201-1%201z%22%20fill%3D%22currentColor%22%20opacity%3D%221%22%20data-original%3D%22%23000000%22%20class%3D%22%22%2F%3E%3Cpath%20d%3D%22m20.35%2015.241-6.3%205.4-2.346-2.345a1%201%200%200%200-1.414%201.414l3%203a1%201%200%200%200%201.357.052l7-6a1%201%200%201%200-1.3-1.518z%22%20fill%3D%22currentColor%22%20opacity%3D%221%22%20data-original%3D%22%23000000%22%20class%3D%22%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
              />
              <_Builtin.Block className="modal_header-content" tag="div">
                <_Builtin.Block className="heading-style-h3" tag="div">
                  {"Modifier réservation"}
                </_Builtin.Block>
                <_Builtin.Block tag="div">
                  {"Modifiez les informations d'une réservation"}
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Link
            className="button is-icon is-small is-red is-delete"
            data-w-id="a6458d3f-5373-0f53-4721-e5387dc08f6d"
            button={false}
            wized="delete_buttons"
            block="inline"
            options={{
              href: "#",
            }}
          >
            <_Builtin.HtmlEmbed
              className="icon-1x1-small"
              value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20width%3D%22auto%22%20height%3D%22auto%22%20x%3D%220%22%20y%3D%220%22%20viewBox%3D%220%200%2024%2024%22%20style%3D%22enable-background%3Anew%200%200%20512%20512%22%20xml%3Aspace%3D%22preserve%22%3E%3Cg%3E%3Cpath%20d%3D%22M19%207a1%201%200%200%200-1%201v11.191A1.92%201.92%200%200%201%2015.99%2021H8.01A1.92%201.92%200%200%201%206%2019.191V8a1%201%200%200%200-2%200v11.191A3.918%203.918%200%200%200%208.01%2023h7.98A3.918%203.918%200%200%200%2020%2019.191V8a1%201%200%200%200-1-1ZM20%204h-4V2a1%201%200%200%200-1-1H9a1%201%200%200%200-1%201v2H4a1%201%200%200%200%200%202h16a1%201%200%200%200%200-2ZM10%204V3h4v1Z%22%20fill%3D%22currentColor%22%20opacity%3D%221%22%20data-original%3D%22%23000000%22%2F%3E%3Cpath%20d%3D%22M11%2017v-7a1%201%200%200%200-2%200v7a1%201%200%200%200%202%200ZM15%2017v-7a1%201%200%200%200-2%200v7a1%201%200%200%200%202%200Z%22%20fill%3D%22currentColor%22%20opacity%3D%221%22%20data-original%3D%22%23000000%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E"
            />
          </_Builtin.Link>
        </_Builtin.Block>
        <_Builtin.Block className="modal_content" tag="div">
          <_Builtin.Block
            className="modal_content-right"
            tag="div"
            wized="update_buttons"
          >
            <_Builtin.FormWrapper
              className="modal_form-block"
              wized="popup_form_block"
            >
              <_Builtin.FormForm
                className="modal_form"
                name="wf-form-update_booking_form"
                data-name="update_booking_form"
                method="get"
                id="wf-form-update_booking_form"
              >
                <_Builtin.Block
                  className="form_flex"
                  id="w-node-_06ec3029-4d08-18ba-f220-a4816c60c72a-d16cf12b"
                  tag="div"
                >
                  <_Builtin.Block className="form_control" tag="div">
                    <_Builtin.Block className="form_flex" tag="div">
                      <_Builtin.Block className="form_icon" tag="div">
                        <_Builtin.HtmlEmbed
                          className="icon-embed-xxxsmall"
                          value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20x%3D%220%22%20y%3D%220%22%20viewBox%3D%220%200%2034%2034%22%20style%3D%22enable-background%3Anew%200%200%20512%20512%22%20xml%3Aspace%3D%22preserve%22%3E%3Cg%3E%3Cpath%20d%3D%22M29.6%202h-3v3c0%20.6-.5%201-1%201s-1-.4-1-1V2h-16v3c0%20.6-.5%201-1%201s-1-.4-1-1V2h-3C2.1%202%201%203.3%201%205v3.6h32V5c0-1.7-1.8-3-3.4-3zM1%2010.7V29c0%201.8%201.1%203%202.7%203h26c1.6%200%203.4-1.3%203.4-3V10.7zm8.9%2016.8H7.5c-.4%200-.8-.3-.8-.8v-2.5c0-.4.3-.8.8-.8H10c.4%200%20.8.3.8.8v2.5c-.1.5-.4.8-.9.8zm0-9H7.5c-.4%200-.8-.3-.8-.8v-2.5c0-.4.3-.8.8-.8H10c.4%200%20.8.3.8.8v2.5c-.1.5-.4.8-.9.8zm8%209h-2.5c-.4%200-.8-.3-.8-.8v-2.5c0-.4.3-.8.8-.8h2.5c.4%200%20.8.3.8.8v2.5c0%20.5-.3.8-.8.8zm0-9h-2.5c-.4%200-.8-.3-.8-.8v-2.5c0-.4.3-.8.8-.8h2.5c.4%200%20.8.3.8.8v2.5c0%20.5-.3.8-.8.8zm8%209h-2.5c-.4%200-.8-.3-.8-.8v-2.5c0-.4.3-.8.8-.8h2.5c.4%200%20.8.3.8.8v2.5c0%20.5-.3.8-.8.8zm0-9h-2.5c-.4%200-.8-.3-.8-.8v-2.5c0-.4.3-.8.8-.8h2.5c.4%200%20.8.3.8.8v2.5c0%20.5-.3.8-.8.8z%22%20fill%3D%22currentColor%22%20opacity%3D%221%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                        />
                      </_Builtin.Block>
                      <_Builtin.FormBlockLabel
                        className="form_field-label"
                        htmlFor="open_hour"
                      >
                        {"Date et heure"}
                      </_Builtin.FormBlockLabel>
                    </_Builtin.Block>
                    <_Builtin.NotSupported _atom="DOM" />
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
                        {"Heure de début"}
                      </_Builtin.FormBlockLabel>
                    </_Builtin.Block>
                    <_Builtin.FormSelect
                      className="form_select"
                      name="add_booking_start-6"
                      data-name="Add Booking Start 6"
                      required={true}
                      multiple={false}
                      wized="update_booking_hour"
                      id="add_booking_start-6"
                      options={[
                        {
                          t: "heure",
                          v: "--",
                        },
                        {
                          t: "06h30",
                          v: "6.5",
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
                        {
                          t: "23h30",
                          v: "23.5",
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
                        {"Durée du match"}
                      </_Builtin.FormBlockLabel>
                    </_Builtin.Block>
                    <_Builtin.FormSelect
                      className="form_select"
                      name="add_booking_start-5"
                      data-name="Add Booking Start 5"
                      required={true}
                      multiple={false}
                      wized="update_booking_time"
                      id="add_booking_start-5"
                      options={[
                        {
                          t: "temps",
                          v: "--",
                        },
                        {
                          t: "30 min",
                          v: "0.5",
                        },
                        {
                          t: "1h00",
                          v: "1",
                        },
                        {
                          t: "1h30",
                          v: "1.5",
                        },
                        {
                          t: "2h",
                          v: "2",
                        },
                        {
                          t: "2h30",
                          v: "2.5",
                        },
                        {
                          t: "3h00",
                          v: "3",
                        },
                        {
                          t: "3h30",
                          v: "3.5",
                        },
                        {
                          t: "4h00",
                          v: "4",
                        },
                        {
                          t: "4h30",
                          v: "4.5",
                        },
                        {
                          t: "5h00",
                          v: "5",
                        },
                        {
                          t: "5h30",
                          v: "5.5",
                        },
                        {
                          t: "6h00",
                          v: "6",
                        },
                      ]}
                    />
                  </_Builtin.Block>
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
                      {"Type évènements"}
                    </_Builtin.FormBlockLabel>
                  </_Builtin.Block>
                  <_Builtin.FormSelect
                    className="form_select"
                    name="field"
                    required={false}
                    multiple={false}
                    wized="update_type"
                    id="field-6"
                    options={[
                      {
                        t: "Leçons",
                        v: "Lesson",
                      },
                      {
                        t: "Entrainement",
                        v: "Training",
                      },
                      {
                        t: "Tournoi",
                        v: "Tournament",
                      },
                    ]}
                  />
                </_Builtin.Block>
                <_Builtin.Block className="form_control" tag="div">
                  <_Builtin.Block className="form_flex" tag="div">
                    <_Builtin.Block className="form_icon" tag="div">
                      <_Builtin.HtmlEmbed
                        className="icon-embed-xxxsmall"
                        value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20width%3D%22auto%22%20height%3D%22auto%22%20x%3D%220%22%20y%3D%220%22%20viewBox%3D%220%200%20512%20512%22%20style%3D%22enable-background%3Anew%200%200%20512%20512%22%20xml%3Aspace%3D%22preserve%22%20class%3D%22%22%3E%3Cg%3E%3Cpath%20d%3D%22M352.459%20220c0-11.046-8.954-20-20-20h-206c-11.046%200-20%208.954-20%2020s8.954%2020%2020%2020h206c11.046%200%2020-8.954%2020-20zM126.459%20280c-11.046%200-20%208.954-20%2020s8.954%2020%2020%2020H251.57c11.046%200%2020-8.954%2020-20s-8.954-20-20-20H126.459z%22%20fill%3D%22currentColor%22%20opacity%3D%221%22%20data-original%3D%22%23000000%22%20class%3D%22%22%2F%3E%3Cpath%20d%3D%22M173.459%20472H106.57c-22.056%200-40-17.944-40-40V80c0-22.056%2017.944-40%2040-40h245.889c22.056%200%2040%2017.944%2040%2040v123c0%2011.046%208.954%2020%2020%2020s20-8.954%2020-20V80c0-44.112-35.888-80-80-80H106.57c-44.112%200-80%2035.888-80%2080v352c0%2044.112%2035.888%2080%2080%2080h66.889c11.046%200%2020-8.954%2020-20s-8.954-20-20-20z%22%20fill%3D%22currentColor%22%20opacity%3D%221%22%20data-original%3D%22%23000000%22%20class%3D%22%22%2F%3E%3Cpath%20d%3D%22M467.884%20289.572c-23.394-23.394-61.458-23.395-84.837-.016l-109.803%20109.56a20.005%2020.005%200%200%200-5.01%208.345l-23.913%2078.725a20%2020%200%200%200%2024.476%2025.087l80.725-22.361a19.993%2019.993%200%200%200%208.79-5.119l109.573-109.367c23.394-23.394%2023.394-61.458-.001-84.854zM333.776%20451.768l-40.612%2011.25%2011.885-39.129%2074.089-73.925%2028.29%2028.29-73.652%2073.514zM439.615%20346.13l-3.875%203.867-28.285-28.285%203.862-3.854c7.798-7.798%2020.486-7.798%2028.284%200%207.798%207.798%207.798%2020.486.014%2028.272zM332.459%20120h-206c-11.046%200-20%208.954-20%2020s8.954%2020%2020%2020h206c11.046%200%2020-8.954%2020-20s-8.954-20-20-20z%22%20fill%3D%22currentColor%22%20opacity%3D%221%22%20data-original%3D%22%23000000%22%20class%3D%22%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                      />
                    </_Builtin.Block>
                    <_Builtin.FormBlockLabel
                      className="form_field-label"
                      htmlFor="open_hour-3"
                    >
                      {"Commentaire interne"}
                    </_Builtin.FormBlockLabel>
                  </_Builtin.Block>
                  <_Builtin.FormTextarea
                    className="form_input is-text-area"
                    name="comment-2"
                    maxLength={5000}
                    data-name="Comment 2"
                    required={false}
                    autoFocus={false}
                    wized="update_notes"
                    id="comment-2"
                  />
                </_Builtin.Block>
                <_Builtin.Block
                  className="success_message"
                  tag="div"
                  wized="update_booking_success_message"
                  wized-cloak=""
                >
                  <_Builtin.HtmlEmbed
                    className="icon-1x1-custom success"
                    value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20width%3D%22auto%22%20height%3D%22auto%22%20x%3D%220%22%20y%3D%220%22%20viewBox%3D%220%200%20408.576%20408.576%22%20style%3D%22enable-background%3Anew%200%200%20512%20512%22%20xml%3Aspace%3D%22preserve%22%20class%3D%22%22%3E%3Cg%3E%3Cpath%20d%3D%22M204.288%200C91.648%200%200%2091.648%200%20204.288s91.648%20204.288%20204.288%20204.288%20204.288-91.648%20204.288-204.288S316.928%200%20204.288%200zm114.176%20150.528-130.56%20129.536c-7.68%207.68-19.968%208.192-28.16.512L90.624%20217.6c-8.192-7.68-8.704-20.48-1.536-28.672%207.68-8.192%2020.48-8.704%2028.672-1.024l54.784%2050.176L289.28%20121.344c8.192-8.192%2020.992-8.192%2029.184%200s8.192%2020.992%200%2029.184z%22%20fill%3D%22currentColor%22%20opacity%3D%221%22%20data-original%3D%22%23000000%22%20class%3D%22%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                  />
                  <_Builtin.Block className="success-message_title" tag="div">
                    {"La réservation a bien été modifiée !"}
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className="form_flex loader"
                  tag="div"
                  wized="form_loader"
                  wized-cloak=""
                >
                  <_Builtin.NotSupported _atom="Animation" />
                  <_Builtin.Block tag="div">{"patientez svp"}</_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className="error_message"
                  tag="div"
                  wized="update_booking_error_box"
                  wized-cloak=""
                >
                  <_Builtin.Block tag="div" wized="error_message">
                    {"error_message"}
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className="button-group court_form"
                  id="w-node-_77faf228-e04f-79d9-da58-8db6d16cf164-d16cf12b"
                  tag="div"
                  wized="update_buttons"
                >
                  <_Builtin.FormButton
                    className="button is-small"
                    id="w-node-_77faf228-e04f-79d9-da58-8db6d16cf165-d16cf12b"
                    type="submit"
                    value="Enregistrer"
                    data-wait="Please wait..."
                    wized="update_booking_btn"
                  />
                  <_Builtin.FormButton
                    className="button is-small is-red"
                    id="w-node-_77faf228-e04f-79d9-da58-8db6d16cf166-d16cf12b"
                    data-w-id="77faf228-e04f-79d9-da58-8db6d16cf166"
                    type="submit"
                    value="Annuler"
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
          <_Builtin.Block className="modal_content-left" tag="div">
            <_Builtin.Block
              className="info-card"
              id="w-node-_3fbaad08-7a55-e8dc-6a5d-7dbc2027bbc2-d16cf12b"
              tag="div"
            >
              <_Builtin.Block className="info-card_header" tag="div">
                <_Builtin.Block className="header_title" tag="div">
                  {"Informations réservations"}
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block className="info-card-row" tag="div">
                <_Builtin.Block className="card-row-title" tag="div">
                  {"UID :"}
                </_Builtin.Block>
                <_Builtin.Block
                  className="update_form-info"
                  tag="div"
                  wized="current_uid"
                >
                  {"--"}
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block className="info-card-row" tag="div">
                <_Builtin.Block className="card-row-title" tag="div">
                  {"Transaction UID :"}
                </_Builtin.Block>
                <_Builtin.Block
                  className="update_form-info"
                  tag="div"
                  wized="current_transaction_uid"
                >
                  {"--"}
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block className="info-card-row" tag="div">
                <_Builtin.Block className="card-row-title" tag="div">
                  {"Code d'accès :"}
                </_Builtin.Block>
                <_Builtin.Block
                  className="update_form-info"
                  tag="div"
                  wized="current_access_code"
                >
                  {"--"}
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block className="info-card-row" tag="div">
                <_Builtin.Block className="card-row-title" tag="div">
                  {"Nom du Client :"}
                </_Builtin.Block>
                <_Builtin.Block
                  className="update_form-info"
                  tag="div"
                  wized="current_name"
                >
                  {"--"}
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block className="info-card-row" tag="div">
                <_Builtin.Block className="card-row-title" tag="div">
                  {"Téléphone :"}
                </_Builtin.Block>
                <_Builtin.Block
                  className="update_form-info"
                  tag="div"
                  wized="current_phone"
                >
                  {"--"}
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block className="info-card-row" tag="div">
                <_Builtin.Block className="card-row-title" tag="div">
                  {"Email :"}
                </_Builtin.Block>
                <_Builtin.Block
                  className="update_form-info"
                  tag="div"
                  wized="current_email"
                >
                  {"--"}
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block className="info-card-row" tag="div">
                <_Builtin.Block className="card-row-title" tag="div">
                  {"Type :"}
                </_Builtin.Block>
                <_Builtin.Block
                  className="update_form-info"
                  tag="div"
                  wized="current_type"
                >
                  {"--"}
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block className="info-card-row" tag="div">
                <_Builtin.Block className="card-row-title" tag="div">
                  {"Court :"}
                </_Builtin.Block>
                <_Builtin.Block
                  className="update_form-info"
                  tag="div"
                  wized="current_court"
                >
                  {"--"}
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block className="info-card-row" tag="div">
                <_Builtin.Block className="card-row-title" tag="div">
                  {"Date/Heure :"}
                </_Builtin.Block>
                <_Builtin.Block
                  className="update_form-info"
                  tag="div"
                  wized="current_date"
                >
                  {"--"}
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block className="info-card-row" tag="div">
                <_Builtin.Block className="card-row-title" tag="div">
                  {"Temps de Jeu :"}
                </_Builtin.Block>
                <_Builtin.Block
                  className="update_form-info"
                  tag="div"
                  wized="current_time"
                >
                  {"--"}
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block className="info-card-row" tag="div">
                <_Builtin.Block className="card-row-title" tag="div">
                  {"Commentaire interne :"}
                </_Builtin.Block>
                <_Builtin.Block
                  className="update_form-info"
                  tag="div"
                  wized="current_notes"
                >
                  {"--"}
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Link
          className="booking_update_close-button"
          data-w-id="77faf228-e04f-79d9-da58-8db6d16cf175"
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
      </_Builtin.Block>
      <_Builtin.Block
        className="booking_update_background-overlay"
        data-w-id="77faf228-e04f-79d9-da58-8db6d16cf177"
        tag="div"
      />
    </_Component>
  );
}
