"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";

const _interactionsData = JSON.parse(
  '{"events":{"e-58":{"id":"e-58","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-18","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-59"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"f5042c24-a29c-1363-af4c-8423d7c4b44b","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"f5042c24-a29c-1363-af4c-8423d7c4b44b","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1644221544943},"e-60":{"id":"e-60","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-18","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-61"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"f5042c24-a29c-1363-af4c-8423d7c4b455","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"f5042c24-a29c-1363-af4c-8423d7c4b455","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1644221544943},"e-112":{"id":"e-112","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-18","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-113"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"f5042c24-a29c-1363-af4c-8423d7c4b444","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"f5042c24-a29c-1363-af4c-8423d7c4b444","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1710102737489},"e-128":{"id":"e-128","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-17","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-129"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65edcb06e424209e95092c7e|8e94016a-c7d4-0780-f5b2-294124c1a9f3","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65edcb06e424209e95092c7e|8e94016a-c7d4-0780-f5b2-294124c1a9f3","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1710344043187},"e-132":{"id":"e-132","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-18","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-133"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65edcb06e424209e95092c7e|7fda47d0-f4cf-6282-d4cf-e47070fcbbc0","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65edcb06e424209e95092c7e|7fda47d0-f4cf-6282-d4cf-e47070fcbbc0","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1715129144660},"e-202":{"id":"e-202","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-17","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-203"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65edcb06e424209e95092c82|a148da71-d234-a09b-9c07-ecab537a0512","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65edcb06e424209e95092c82|a148da71-d234-a09b-9c07-ecab537a0512","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1722643423399},"e-262":{"id":"e-262","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-17","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-309"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"3bf6ef48-906c-6954-3b84-47cb5cf21b17","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"3bf6ef48-906c-6954-3b84-47cb5cf21b17","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1727734053325},"e-278":{"id":"e-278","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-17","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-279"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"cd5dc5ca-f5d4-aeec-6107-f3c88afbc692","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"cd5dc5ca-f5d4-aeec-6107-f3c88afbc692","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1727736126886}},"actionLists":{"a-18":{"id":"a-18","title":"Booking Add Modal [Close]","actionItemGroups":[{"actionItems":[{"id":"a-18-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuad","duration":500,"target":{"selector":".booking_add_modal_content-wrapper","selectorGuids":["1c7b8a9c-e3ea-e17e-b62b-25f5683bd7d5"]},"xValue":100,"xUnit":"%","yUnit":"PX","zUnit":"PX"}},{"id":"a-18-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":500,"target":{"selector":".booking_add_modal_background-overlay","selectorGuids":["1c7b8a9c-e3ea-e17e-b62b-25f5683bd7d9"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-18-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".booking_add_modal_component","selectorGuids":["1c7b8a9c-e3ea-e17e-b62b-25f5683bd7d4"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1644220869174},"a-17":{"id":"a-17","title":"Booking Add Modal [Open]","actionItemGroups":[{"actionItems":[{"id":"a-17-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".booking_add_modal_component","selectorGuids":["1c7b8a9c-e3ea-e17e-b62b-25f5683bd7d4"]},"value":"none"}},{"id":"a-17-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".booking_add_modal_content-wrapper","selectorGuids":["1c7b8a9c-e3ea-e17e-b62b-25f5683bd7d5"]},"xValue":100,"xUnit":"%","yUnit":"PX","zUnit":"PX"}},{"id":"a-17-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".booking_add_modal_background-overlay","selectorGuids":["1c7b8a9c-e3ea-e17e-b62b-25f5683bd7d9"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-17-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".booking_add_modal_component","selectorGuids":["1c7b8a9c-e3ea-e17e-b62b-25f5683bd7d4"]},"value":"flex"}},{"id":"a-17-n-5","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuad","duration":500,"target":{"selector":".booking_add_modal_content-wrapper","selectorGuids":["1c7b8a9c-e3ea-e17e-b62b-25f5683bd7d5"]},"xValue":0,"xUnit":"%","yUnit":"PX","zUnit":"PX"}},{"id":"a-17-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":500,"target":{"selector":".booking_add_modal_background-overlay","selectorGuids":["1c7b8a9c-e3ea-e17e-b62b-25f5683bd7d9"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1644220869174}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function ModalAddBooking({ as: _Component = _Builtin.Block }) {
  _interactions.useInteractions(_interactionsData);

  return (
    <_Component className="booking_add_modal_component" tag="div">
      <_Builtin.Block className="booking_add_modal_content-wrapper" tag="div">
        <_Builtin.FormWrapper
          className="modal_form-block"
          wized="popup_form_block"
        >
          <_Builtin.FormForm
            className="modal_form"
            name="wf-form-add_booking_form"
            data-name="add_booking_form"
            method="get"
            id="wf-form-add_booking_form"
          >
            <_Builtin.Block className="modal_header" tag="div" jf="">
              <_Builtin.HtmlEmbed
                className="icon-height-large"
                value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20width%3D%22auto%22%20height%3D%22auto%22%20x%3D%220%22%20y%3D%220%22%20viewBox%3D%220%200%2032%2032%22%20style%3D%22enable-background%3Anew%200%200%20512%20512%22%20xml%3Aspace%3D%22preserve%22%20class%3D%22%22%3E%3Cg%3E%3Cg%20data-name%3D%22Layer%202%22%3E%3Cpath%20d%3D%22M27%204h-4V3a1%201%200%200%200-2%200v1H11V3a1%201%200%200%200-2%200v1H5a3%203%200%200%200-3%203v20a3%203%200%200%200%203%203h22a3%203%200%200%200%203-3V7a3%203%200%200%200-3-3zM5%206h22a1%201%200%200%201%201%201v3H4V7a1%201%200%200%201%201-1zm22%2022H5a1%201%200%200%201-1-1V12h24v15a1%201%200%200%201-1%201z%22%20fill%3D%22currentColor%22%20opacity%3D%221%22%20data-original%3D%22%23000000%22%20class%3D%22%22%2F%3E%3Cpath%20d%3D%22m20.35%2015.241-6.3%205.4-2.346-2.345a1%201%200%200%200-1.414%201.414l3%203a1%201%200%200%200%201.357.052l7-6a1%201%200%201%200-1.3-1.518z%22%20fill%3D%22currentColor%22%20opacity%3D%221%22%20data-original%3D%22%23000000%22%20class%3D%22%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
              />
              <_Builtin.Block className="modal_header-content" tag="div">
                <_Builtin.Block className="heading-style-h3" tag="div">
                  {"Créer une réservation"}
                </_Builtin.Block>
                <_Builtin.Block tag="div">
                  {"Ajoutez les informations de la nouvelle réservation"}
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className="modal_content add_booking"
              id="w-node-cbda13e9-cdeb-6642-3df9-6a480fc51495-d7c4b409"
              tag="div"
            >
              <_Builtin.Block
                className="modal_content-left"
                id="w-node-cf457fb5-b129-6df5-3a47-6580685cb150-d7c4b409"
                tag="div"
              >
                <_Builtin.Block className="modal-title" tag="div">
                  {"Informations du client"}
                </_Builtin.Block>
                <_Builtin.Block
                  className="form_flex"
                  id="w-node-b857fb49-fdc0-dca9-ac22-3a8af1f1f346-d7c4b409"
                  tag="div"
                >
                  <_Builtin.Block
                    className="form_control"
                    id="w-node-f5042c24-a29c-1363-af4c-8423d7c4b414-d7c4b409"
                    tag="div"
                  >
                    <_Builtin.Block className="form_flex" tag="div">
                      <_Builtin.Block className="form_icon" tag="div">
                        <_Builtin.HtmlEmbed
                          className="icon-embed-xxxsmall"
                          value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20width%3D%22auto%22%20height%3D%22auto%22%20x%3D%220%22%20y%3D%220%22%20viewBox%3D%220%200%20512%20512%22%20style%3D%22enable-background%3Anew%200%200%20512%20512%22%20xml%3Aspace%3D%22preserve%22%20class%3D%22%22%3E%3Cg%3E%3Cpath%20d%3D%22M437.02%2074.98C388.668%2026.63%20324.379%200%20256%200S123.332%2026.629%2074.98%2074.98C26.63%20123.332%200%20187.621%200%20256s26.629%20132.668%2074.98%20181.02C123.332%20485.37%20187.621%20512%20256%20512s132.668-26.629%20181.02-74.98C485.37%20388.668%20512%20324.379%20512%20256s-26.629-132.668-74.98-181.02zM111.105%20429.297c8.454-72.735%2070.989-128.89%20144.895-128.89%2038.96%200%2075.598%2015.179%20103.156%2042.734%2023.281%2023.285%2037.965%2053.687%2041.742%2086.152C361.641%20462.172%20311.094%20482%20256%20482s-105.637-19.824-144.895-52.703zM256%20269.507c-42.871%200-77.754-34.882-77.754-77.753C178.246%20148.879%20213.13%20114%20256%20114s77.754%2034.879%2077.754%2077.754c0%2042.871-34.883%2077.754-77.754%2077.754zm170.719%20134.427a175.9%20175.9%200%200%200-46.352-82.004c-18.437-18.438-40.25-32.27-64.039-40.938%2028.598-19.394%2047.426-52.16%2047.426-89.238C363.754%20132.34%20315.414%2084%20256%2084s-107.754%2048.34-107.754%20107.754c0%2037.098%2018.844%2069.875%2047.465%2089.266-21.887%207.976-42.14%2020.308-59.566%2036.542-25.235%2023.5-42.758%2053.465-50.883%2086.348C50.852%20364.242%2030%20312.512%2030%20256%2030%20131.383%20131.383%2030%20256%2030s226%20101.383%20226%20226c0%2056.523-20.86%20108.266-55.281%20147.934zm0%200%22%20fill%3D%22currentColor%22%20opacity%3D%221%22%20data-original%3D%22%23000000%22%20class%3D%22%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                        />
                      </_Builtin.Block>
                      <_Builtin.FormBlockLabel
                        className="form_field-label"
                        htmlFor="open_hour-3"
                      >
                        {"Nom ou Entreprise "}
                      </_Builtin.FormBlockLabel>
                    </_Builtin.Block>
                    <_Builtin.FormTextInput
                      className="form_input"
                      autoFocus={false}
                      maxLength={256}
                      name="add_name"
                      data-name="add_name"
                      type="text"
                      disabled={false}
                      required={true}
                      wized="add_name"
                      id="add_name"
                    />
                  </_Builtin.Block>
                  <_Builtin.Block className="form_control" tag="div">
                    <_Builtin.Block className="form_flex" tag="div">
                      <_Builtin.Block className="form_icon" tag="div">
                        <_Builtin.HtmlEmbed
                          className="icon-embed-xxxsmall"
                          value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20width%3D%22auto%22%20height%3D%22auto%22%20x%3D%220%22%20y%3D%220%22%20viewBox%3D%220%200%20482.6%20482.6%22%20style%3D%22enable-background%3Anew%200%200%20512%20512%22%20xml%3Aspace%3D%22preserve%22%3E%3Cg%3E%3Cpath%20d%3D%22M98.339%20320.8c47.6%2056.9%20104.9%20101.7%20170.3%20133.4%2024.9%2011.8%2058.2%2025.8%2095.3%2028.2%202.3.1%204.5.2%206.8.2%2024.9%200%2044.9-8.6%2061.2-26.3.1-.1.3-.3.4-.5%205.8-7%2012.4-13.3%2019.3-20%204.7-4.5%209.5-9.2%2014.1-14%2021.3-22.2%2021.3-50.4-.2-71.9l-60.1-60.1c-10.2-10.6-22.4-16.2-35.2-16.2-12.8%200-25.1%205.6-35.6%2016.1l-35.8%2035.8c-3.3-1.9-6.7-3.6-9.9-5.2-4-2-7.7-3.9-11-6-32.6-20.7-62.2-47.7-90.5-82.4-14.3-18.1-23.9-33.3-30.6-48.8%209.4-8.5%2018.2-17.4%2026.7-26.1%203-3.1%206.1-6.2%209.2-9.3%2010.8-10.8%2016.6-23.3%2016.6-36s-5.7-25.2-16.6-36l-29.8-29.8c-3.5-3.5-6.8-6.9-10.2-10.4-6.6-6.8-13.5-13.8-20.3-20.1-10.3-10.1-22.4-15.4-35.2-15.4-12.7%200-24.9%205.3-35.6%2015.5l-37.4%2037.4c-13.6%2013.6-21.3%2030.1-22.9%2049.2-1.9%2023.9%202.5%2049.3%2013.9%2080%2017.5%2047.5%2043.9%2091.6%2083.1%20138.7zm-72.6-216.6c1.2-13.3%206.3-24.4%2015.9-34l37.2-37.2c5.8-5.6%2012.2-8.5%2018.4-8.5%206.1%200%2012.3%202.9%2018%208.7%206.7%206.2%2013%2012.7%2019.8%2019.6%203.4%203.5%206.9%207%2010.4%2010.6l29.8%2029.8c6.2%206.2%209.4%2012.5%209.4%2018.7s-3.2%2012.5-9.4%2018.7c-3.1%203.1-6.2%206.3-9.3%209.4-9.3%209.4-18%2018.3-27.6%2026.8l-.5.5c-8.3%208.3-7%2016.2-5%2022.2.1.3.2.5.3.8%207.7%2018.5%2018.4%2036.1%2035.1%2057.1%2030%2037%2061.6%2065.7%2096.4%2087.8%204.3%202.8%208.9%205%2013.2%207.2%204%202%207.7%203.9%2011%206%20.4.2.7.4%201.1.6%203.3%201.7%206.5%202.5%209.7%202.5%208%200%2013.2-5.1%2014.9-6.8l37.4-37.4c5.8-5.8%2012.1-8.9%2018.3-8.9%207.6%200%2013.8%204.7%2017.7%208.9l60.3%2060.2c12%2012%2011.9%2025-.3%2037.7-4.2%204.5-8.6%208.8-13.3%2013.3-7%206.8-14.3%2013.8-20.9%2021.7-11.5%2012.4-25.2%2018.2-42.9%2018.2-1.7%200-3.5-.1-5.2-.2-32.8-2.1-63.3-14.9-86.2-25.8-62.2-30.1-116.8-72.8-162.1-127-37.3-44.9-62.4-86.7-79-131.5-10.3-27.5-14.2-49.6-12.6-69.7z%22%20fill%3D%22currentColor%22%20opacity%3D%221%22%20data-original%3D%22%23000000%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                        />
                      </_Builtin.Block>
                      <_Builtin.FormBlockLabel
                        className="form_field-label"
                        htmlFor="open_hour"
                      >
                        {"Téléphone"}
                      </_Builtin.FormBlockLabel>
                    </_Builtin.Block>
                    <_Builtin.FormTextInput
                      className="form_input"
                      autoFocus={false}
                      maxLength={256}
                      name="add_phone"
                      data-name="add_phone"
                      type="text"
                      disabled={false}
                      required={false}
                      wized="add_phone"
                      id="add_phone"
                    />
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className="form_control"
                  id="w-node-_40ac5afe-4c30-8c90-f6ef-12e9b4a46873-d7c4b409"
                  tag="div"
                >
                  <_Builtin.Block className="form_flex" tag="div">
                    <_Builtin.Block className="form_icon" tag="div">
                      <_Builtin.HtmlEmbed
                        className="icon-embed-xxxsmall"
                        value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20width%3D%22auto%22%20height%3D%22auto%22%20x%3D%220%22%20y%3D%220%22%20viewBox%3D%220%200%20512%20512%22%20style%3D%22enable-background%3Anew%200%200%20512%20512%22%20xml%3Aspace%3D%22preserve%22%20class%3D%22%22%3E%3Cg%3E%3Cpath%20d%3D%22M467%2076H45C20.137%2076%200%2096.262%200%20121v270c0%2024.885%2020.285%2045%2045%2045h422c24.655%200%2045-20.03%2045-45V121c0-24.694-20.057-45-45-45zm-6.302%2030L287.82%20277.967c-8.5%208.5-19.8%2013.18-31.82%2013.18s-23.32-4.681-31.848-13.208L51.302%20106h409.396zM30%20384.894V127.125L159.638%20256.08%2030%20384.894zM51.321%20406l129.587-128.763%2022.059%2021.943c14.166%2014.166%2033%2021.967%2053.033%2021.967s38.867-7.801%2053.005-21.939l22.087-21.971L460.679%20406H51.321zM482%20384.894%20352.362%20256.08%20482%20127.125v257.769z%22%20fill%3D%22currentColor%22%20opacity%3D%221%22%20data-original%3D%22%23000000%22%20class%3D%22%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                      />
                    </_Builtin.Block>
                    <_Builtin.FormBlockLabel
                      className="form_field-label"
                      htmlFor="open_hour"
                    >
                      {"Email"}
                    </_Builtin.FormBlockLabel>
                  </_Builtin.Block>
                  <_Builtin.FormTextInput
                    className="form_input"
                    autoFocus={false}
                    maxLength={256}
                    name="add_email"
                    data-name="add_email"
                    type="text"
                    disabled={false}
                    required={false}
                    wized="add_email"
                    id="add_email"
                  />
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block className="divider_vertical" tag="div" />
              <_Builtin.Block className="modal_content-right add" tag="div">
                <_Builtin.Block className="modal-title" tag="div">
                  {"Informations de réservation"}
                </_Builtin.Block>
                <_Builtin.Block
                  className="form_control"
                  id="w-node-f5042c24-a29c-1363-af4c-8423d7c4b41b-d7c4b409"
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
                      htmlFor="open_hour-3"
                    >
                      {"Court"}
                    </_Builtin.FormBlockLabel>
                  </_Builtin.Block>
                  <_Builtin.Block className="form_flex" tag="div">
                    <_Builtin.FormRadioWrapper
                      className="form_radio"
                      wized="add_radio_court_group"
                    >
                      <_Builtin.FormRadioInput
                        className="form_radio-icon"
                        type="radio"
                        name="court"
                        data-name="court"
                        required={true}
                        wized="add_radio_court_btn"
                        id="radio-2"
                        form={{
                          type: "radio-input",
                          name: "court",
                        }}
                        inputType="custom"
                        customClassName="w-form-formradioinput--inputType-custom"
                      />
                      <_Builtin.FormInlineLabel
                        className="form_radio-label"
                        wized="add_radio_text"
                      >
                        {"Nom du terrain"}
                      </_Builtin.FormInlineLabel>
                    </_Builtin.FormRadioWrapper>
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block className="form_flex" tag="div">
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
                        htmlFor="open_hour-3"
                      >
                        {"Date"}
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
                        htmlFor="open_hour-3"
                      >
                        {"Heure"}
                      </_Builtin.FormBlockLabel>
                    </_Builtin.Block>
                    <_Builtin.FormSelect
                      className="form_select"
                      name="field"
                      required={true}
                      multiple={false}
                      wized="add_booking_start"
                      id="field-5"
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
                        {"Durée"}
                      </_Builtin.FormBlockLabel>
                    </_Builtin.Block>
                    <_Builtin.FormSelect
                      className="form_select"
                      name="add_booking_start-5"
                      data-name="Add Booking Start 5"
                      required={true}
                      multiple={false}
                      wized="add_booking_end"
                      id="add_booking_start-5"
                      options={[
                        {
                          t: "temps",
                          v: "--",
                        },
                        {
                          t: "30min",
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
                        htmlFor="open_hour-2"
                      >
                        {"Type évènements"}
                      </_Builtin.FormBlockLabel>
                    </_Builtin.Block>
                    <_Builtin.FormSelect
                      className="form_select"
                      name="type"
                      data-name="type"
                      required={true}
                      multiple={false}
                      wized="add_type"
                      id="type"
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
                </_Builtin.Block>
                <_Builtin.Block
                  className="form_flex"
                  id="w-node-_11d0c344-5b7b-39e5-4ca2-f48b97b82eb3-d7c4b409"
                  tag="div"
                >
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
                        {"Methode de paiement"}
                      </_Builtin.FormBlockLabel>
                    </_Builtin.Block>
                    <_Builtin.FormSelect
                      className="form_select"
                      name="type-2"
                      data-name="Type 2"
                      required={true}
                      multiple={false}
                      wized="add_paymentmethod"
                      id="type-2"
                      options={[
                        {
                          t: "En espèce",
                          v: "Cash",
                        },
                        {
                          t: "Carte",
                          v: "Card",
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
                        {"Devise"}
                      </_Builtin.FormBlockLabel>
                    </_Builtin.Block>
                    <_Builtin.FormSelect
                      className="form_select"
                      name="type-2"
                      data-name="Type 2"
                      required={true}
                      multiple={false}
                      wized="add_currency"
                      id="type-2"
                      options={[
                        {
                          t: "Francs Suisse",
                          v: "CHF",
                        },
                        {
                          t: "Euro",
                          v: "Euro",
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
                        value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20width%3D%22auto%22%20height%3D%22auto%22%20x%3D%220%22%20y%3D%220%22%20viewBox%3D%220%200%20512%20512%22%20style%3D%22enable-background%3Anew%200%200%20512%20512%22%20xml%3Aspace%3D%22preserve%22%20class%3D%22%22%3E%3Cg%3E%3Cpath%20d%3D%22M352.459%20220c0-11.046-8.954-20-20-20h-206c-11.046%200-20%208.954-20%2020s8.954%2020%2020%2020h206c11.046%200%2020-8.954%2020-20zM126.459%20280c-11.046%200-20%208.954-20%2020s8.954%2020%2020%2020H251.57c11.046%200%2020-8.954%2020-20s-8.954-20-20-20H126.459z%22%20fill%3D%22currentColor%22%20opacity%3D%221%22%20data-original%3D%22%23000000%22%20class%3D%22%22%2F%3E%3Cpath%20d%3D%22M173.459%20472H106.57c-22.056%200-40-17.944-40-40V80c0-22.056%2017.944-40%2040-40h245.889c22.056%200%2040%2017.944%2040%2040v123c0%2011.046%208.954%2020%2020%2020s20-8.954%2020-20V80c0-44.112-35.888-80-80-80H106.57c-44.112%200-80%2035.888-80%2080v352c0%2044.112%2035.888%2080%2080%2080h66.889c11.046%200%2020-8.954%2020-20s-8.954-20-20-20z%22%20fill%3D%22currentColor%22%20opacity%3D%221%22%20data-original%3D%22%23000000%22%20class%3D%22%22%2F%3E%3Cpath%20d%3D%22M467.884%20289.572c-23.394-23.394-61.458-23.395-84.837-.016l-109.803%20109.56a20.005%2020.005%200%200%200-5.01%208.345l-23.913%2078.725a20%2020%200%200%200%2024.476%2025.087l80.725-22.361a19.993%2019.993%200%200%200%208.79-5.119l109.573-109.367c23.394-23.394%2023.394-61.458-.001-84.854zM333.776%20451.768l-40.612%2011.25%2011.885-39.129%2074.089-73.925%2028.29%2028.29-73.652%2073.514zM439.615%20346.13l-3.875%203.867-28.285-28.285%203.862-3.854c7.798-7.798%2020.486-7.798%2028.284%200%207.798%207.798%207.798%2020.486.014%2028.272zM332.459%20120h-206c-11.046%200-20%208.954-20%2020s8.954%2020%2020%2020h206c11.046%200%2020-8.954%2020-20s-8.954-20-20-20z%22%20fill%3D%22currentColor%22%20opacity%3D%221%22%20data-original%3D%22%23000000%22%20class%3D%22%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                      />
                    </_Builtin.Block>
                    <_Builtin.FormBlockLabel
                      className="form_field-label"
                      htmlFor="open_hour-3"
                    >
                      {"Note Interne"}
                    </_Builtin.FormBlockLabel>
                  </_Builtin.Block>
                  <_Builtin.FormTextarea
                    className="form_input is-text-area"
                    name="add_notes"
                    maxLength={5000}
                    data-name="add_notes"
                    required={false}
                    autoFocus={false}
                    wized="add_notes"
                    id="add_notes"
                  />
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block className="divider_horizontal" tag="div" />
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
              className="success_message"
              tag="div"
              wized="add_booking_success_message"
              wized-cloak=""
            >
              <_Builtin.HtmlEmbed
                className="icon-1x1-custom success"
                value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20width%3D%22auto%22%20height%3D%22auto%22%20x%3D%220%22%20y%3D%220%22%20viewBox%3D%220%200%20408.576%20408.576%22%20style%3D%22enable-background%3Anew%200%200%20512%20512%22%20xml%3Aspace%3D%22preserve%22%20class%3D%22%22%3E%3Cg%3E%3Cpath%20d%3D%22M204.288%200C91.648%200%200%2091.648%200%20204.288s91.648%20204.288%20204.288%20204.288%20204.288-91.648%20204.288-204.288S316.928%200%20204.288%200zm114.176%20150.528-130.56%20129.536c-7.68%207.68-19.968%208.192-28.16.512L90.624%20217.6c-8.192-7.68-8.704-20.48-1.536-28.672%207.68-8.192%2020.48-8.704%2028.672-1.024l54.784%2050.176L289.28%20121.344c8.192-8.192%2020.992-8.192%2029.184%200s8.192%2020.992%200%2029.184z%22%20fill%3D%22currentColor%22%20opacity%3D%221%22%20data-original%3D%22%23000000%22%20class%3D%22%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E"
              />
              <_Builtin.Block className="success-message_title" tag="div">
                {"la réservation a bien été enregistrée"}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className="error_message"
              tag="div"
              wized="add_booking_error_box"
              wized-cloak=""
            >
              <_Builtin.Block tag="div" wized="error_message">
                {"error_message"}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className="button-group court_form"
              id="w-node-f5042c24-a29c-1363-af4c-8423d7c4b442-d7c4b409"
              tag="div"
            >
              <_Builtin.FormButton
                className="button is-small"
                id="w-node-f5042c24-a29c-1363-af4c-8423d7c4b443-d7c4b409"
                type="submit"
                value="Enregistrer"
                data-wait="Please wait..."
                wized="add_booking_btn"
              />
              <_Builtin.FormButton
                className="button is-small is-red"
                id="w-node-f5042c24-a29c-1363-af4c-8423d7c4b444-d7c4b409"
                data-w-id="f5042c24-a29c-1363-af4c-8423d7c4b444"
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
        <_Builtin.Link
          className="booking_add_modal_close-button"
          data-w-id="f5042c24-a29c-1363-af4c-8423d7c4b44b"
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
        className="booking_add_modal_background-overlay"
        data-w-id="f5042c24-a29c-1363-af4c-8423d7c4b455"
        tag="div"
      />
    </_Component>
  );
}
