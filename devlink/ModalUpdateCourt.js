"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";

const _interactionsData = JSON.parse(
  '{"events":{"e-30":{"id":"e-30","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-12","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-31"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"3065d314-3bc6-0157-fb9e-8b7ac079c3dd","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"3065d314-3bc6-0157-fb9e-8b7ac079c3dd","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1644221544943},"e-32":{"id":"e-32","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-12","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-33"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"3065d314-3bc6-0157-fb9e-8b7ac079c3e3","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"3065d314-3bc6-0157-fb9e-8b7ac079c3e3","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1644221544943},"e-36":{"id":"e-36","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-11","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-37"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65edcb06e424209e95092c82|d276af4c-10ff-37ce-bcdb-1e2a524226f5","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65edcb06e424209e95092c82|d276af4c-10ff-37ce-bcdb-1e2a524226f5","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1709517007979},"e-114":{"id":"e-114","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-12","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-115"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"3065d314-3bc6-0157-fb9e-8b7ac079c3d6","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"3065d314-3bc6-0157-fb9e-8b7ac079c3d6","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1710102771081},"e-178":{"id":"e-178","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-11","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-179"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65edcb06e424209e95092c82|9f2f5897-befe-b122-c543-9d9f7057a7dc","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65edcb06e424209e95092c82|9f2f5897-befe-b122-c543-9d9f7057a7dc","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1716689159209},"e-288":{"id":"e-288","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-11","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-289"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"cd5dc5ca-f5d4-aeec-6107-f3c88afbc718","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"cd5dc5ca-f5d4-aeec-6107-f3c88afbc718","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1727736126886},"e-294":{"id":"e-294","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-11","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-295"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"cd5dc5ca-f5d4-aeec-6107-f3c88afbc73c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"cd5dc5ca-f5d4-aeec-6107-f3c88afbc73c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1727736126886},"e-338":{"id":"e-338","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-11","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-339"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"66fb2c3610e83aab5b8821eb|52247f3d-6017-5e88-79e4-b513a8b52db6","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1732745961348}},"actionLists":{"a-12":{"id":"a-12","title":"Court Update Modal [Close]","actionItemGroups":[{"actionItems":[{"id":"a-12-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuad","duration":500,"target":{"selector":".court_update_modal_content-wrapper","selectorGuids":["2d7045b7-b6a5-91fa-80ee-4e47e0becd9a"]},"xValue":100,"xUnit":"%","yUnit":"PX","zUnit":"PX"}},{"id":"a-12-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":500,"target":{"selector":".court_update_modal_background-overlay","selectorGuids":["2d7045b7-b6a5-91fa-80ee-4e47e0becda3"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-12-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".court_update_modal_component","selectorGuids":["2d7045b7-b6a5-91fa-80ee-4e47e0becd99"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1644220869174},"a-11":{"id":"a-11","title":"Court Update Modal [Open]","actionItemGroups":[{"actionItems":[{"id":"a-11-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".court_update_modal_component","selectorGuids":["2d7045b7-b6a5-91fa-80ee-4e47e0becd99"]},"value":"none"}},{"id":"a-11-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".court_update_modal_content-wrapper","selectorGuids":["2d7045b7-b6a5-91fa-80ee-4e47e0becd9a"]},"xValue":100,"xUnit":"%","yUnit":"PX","zUnit":"PX"}},{"id":"a-11-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".court_update_modal_background-overlay","selectorGuids":["2d7045b7-b6a5-91fa-80ee-4e47e0becda3"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-11-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".court_update_modal_component","selectorGuids":["2d7045b7-b6a5-91fa-80ee-4e47e0becd99"]},"value":"flex"}},{"id":"a-11-n-5","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuad","duration":500,"target":{"selector":".court_update_modal_content-wrapper","selectorGuids":["2d7045b7-b6a5-91fa-80ee-4e47e0becd9a"]},"xValue":0,"xUnit":"%","yUnit":"PX","zUnit":"PX"}},{"id":"a-11-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":500,"target":{"selector":".court_update_modal_background-overlay","selectorGuids":["2d7045b7-b6a5-91fa-80ee-4e47e0becda3"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1644220869174}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function ModalUpdateCourt({ as: _Component = _Builtin.Block }) {
  _interactions.useInteractions(_interactionsData);

  return (
    <_Component
      className="court_update_modal_component"
      tag="div"
      wized-cloak=""
    >
      <_Builtin.Block className="court_update_modal_content-wrapper" tag="div">
        <_Builtin.Block className="modal_header" tag="div">
          <_Builtin.HtmlEmbed
            className="icon-height-large"
            value="%3Csvg%20width%3D%22auto%22%20height%3D%22auto%22%20viewBox%3D%220%200%2011%2013%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M0%200.464286L0%2012.5357C0%2012.6589%200.0643849%2012.7769%200.17899%2012.864C0.293596%2012.9511%200.449034%2013%200.611111%2013H10.3889C10.551%2013%2010.7064%2012.9511%2010.821%2012.864C10.9356%2012.7769%2011%2012.6589%2011%2012.5357L11%200.464286C11%200.34115%2010.9356%200.223057%2010.821%200.135986C10.7064%200.0489159%2010.551%200%2010.3889%200H0.611111C0.449034%200%200.293596%200.0489159%200.17899%200.135986C0.0643849%200.223057%200%200.34115%200%200.464286ZM1.22222%204.17857H4.88889L4.88889%208.82143H1.22222L1.22222%204.17857ZM1.22222%2012.0714L1.22222%209.75H9.77778V12.0714H1.22222ZM9.77778%208.82143H6.11111L6.11111%204.17857H9.77778V8.82143ZM9.77778%200.928572V3.25H1.22222L1.22222%200.928572H9.77778Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
          />
          <_Builtin.Block className="modal_header-content" tag="div">
            <_Builtin.Block className="heading-style-h3" tag="div">
              {"Modifier le court"}
            </_Builtin.Block>
            <_Builtin.Block tag="div">
              {"Modifiez les informations du court"}
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.FormWrapper className="court_update_modal_form-block">
          <_Builtin.FormForm
            className="court_update_modal_form"
            name="wf-form-court-update-form"
            data-name="court update form"
            method="get"
            wized="court_form"
            id="wf-form-court-update-form"
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
                required={false}
                autoFocus={false}
                wized="update_court_name"
              />
            </_Builtin.Block>
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
                  {"Court extérieur"}
                </_Builtin.FormBlockLabel>
              </_Builtin.Block>
              <_Builtin.FormSelect
                className="form_select"
                name="field"
                required={false}
                multiple={false}
                wized="update_court_isIndoor"
                id="field-20"
                options={[
                  {
                    t: "--",
                    v: "--",
                  },
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
              <_Builtin.Block className="form_control" tag="div" />
            </_Builtin.Block>
            <_Builtin.Block
              className="form_flex"
              id="w-node-_0d8692bd-7ed9-c930-c5d3-b5cc9c358402-c079c39d"
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
                    {"Horaire d'ouverture"}
                  </_Builtin.FormBlockLabel>
                </_Builtin.Block>
                <_Builtin.FormSelect
                  className="form_select"
                  name="field"
                  required={false}
                  multiple={false}
                  wized="update_court_open"
                  id="field-18"
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
                  name="field"
                  required={false}
                  multiple={false}
                  wized="update_court_close"
                  id="field-19"
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
              className="form_control updateprice"
              id="w-node-_9efaf7d5-751e-151f-dc97-e518985f074e-c079c39d"
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
              <_Builtin.Block className="form_flex input updateprice" tag="div">
                <_Builtin.Block tag="div">
                  {"1h de temps de heure"}
                </_Builtin.Block>
                <_Builtin.Block className="chf" tag="div">
                  <_Builtin.Block tag="div">{"-"}</_Builtin.Block>
                  <_Builtin.Block className="input-text" tag="div">
                    <_Builtin.FormTextInput
                      className="form_input chf"
                      name="field"
                      maxLength={256}
                      placeholder="0"
                      disabled={false}
                      type="number"
                      required={false}
                      autoFocus={false}
                      wized="update_court_1h_price"
                      id="field-21"
                    />
                    <_Builtin.Block tag="div">{"CHF"}</_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block className="form_flex input updateprice" tag="div">
                <_Builtin.Block tag="div">
                  {"1h30 de temps de heure"}
                </_Builtin.Block>
                <_Builtin.Block className="chf" tag="div">
                  <_Builtin.Block tag="div">{"-"}</_Builtin.Block>
                  <_Builtin.Block className="input-text" tag="div">
                    <_Builtin.FormTextInput
                      className="form_input chf"
                      name="field"
                      maxLength={256}
                      placeholder="0"
                      disabled={false}
                      type="number"
                      required={false}
                      autoFocus={false}
                      wized="update_court_1h30_price"
                      id="field-22"
                    />
                    <_Builtin.Block tag="div">{"CHF"}</_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block className="form_flex input" tag="div">
                <_Builtin.Block tag="div">
                  {"2h de temps de heure"}
                </_Builtin.Block>
                <_Builtin.Block className="chf" tag="div">
                  <_Builtin.Block tag="div">{"-"}</_Builtin.Block>
                  <_Builtin.Block className="input-text" tag="div">
                    <_Builtin.FormTextInput
                      className="form_input chf"
                      name="field"
                      maxLength={256}
                      placeholder="0"
                      disabled={false}
                      type="number"
                      required={false}
                      autoFocus={false}
                      wized="update_court_2h_price"
                      id="field-23"
                    />
                    <_Builtin.Block tag="div">{"CHF"}</_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className="form_control"
              id="w-node-bb5d7750-e0f5-5f6f-4dd1-f63de397dbf5-c079c39d"
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
                    name="checkbox-2"
                    data-name="Checkbox 2"
                    checked={false}
                    required={false}
                    wized="add_court_price_value"
                    id="checkbox-2"
                    form={{
                      type: "checkbox-input",
                      name: "Checkbox 2",
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
              className="success_message"
              tag="div"
              wized="update_court_success"
              wized-cloak=""
            >
              <_Builtin.HtmlEmbed
                className="icon-1x1-small text-color-green"
                value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20width%3D%22auto%22%20height%3D%22auto%22%20x%3D%220%22%20y%3D%220%22%20viewBox%3D%220%200%20408.576%20408.576%22%20style%3D%22enable-background%3Anew%200%200%20512%20512%22%20xml%3Aspace%3D%22preserve%22%20class%3D%22%22%3E%3Cg%3E%3Cpath%20d%3D%22M204.288%200C91.648%200%200%2091.648%200%20204.288s91.648%20204.288%20204.288%20204.288%20204.288-91.648%20204.288-204.288S316.928%200%20204.288%200zm114.176%20150.528-130.56%20129.536c-7.68%207.68-19.968%208.192-28.16.512L90.624%20217.6c-8.192-7.68-8.704-20.48-1.536-28.672%207.68-8.192%2020.48-8.704%2028.672-1.024l54.784%2050.176L289.28%20121.344c8.192-8.192%2020.992-8.192%2029.184%200s8.192%2020.992%200%2029.184z%22%20fill%3D%22currentColor%22%20opacity%3D%221%22%20data-original%3D%22%23000000%22%20class%3D%22%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E"
              />
              <_Builtin.Block className="success-message_title" tag="div">
                {"Vos modifications ont bien été enregistré ! "}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className="form_flex loader"
              tag="div"
              wized="update_court_loader"
              wized-cloak=""
            >
              <_Builtin.NotSupported _atom="Animation" />
              <_Builtin.Block tag="div">{"patientez svp"}</_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className="error_message"
              tag="div"
              wized="update_court_error"
              wized-cloak=""
            />
            <_Builtin.Block
              className="button-group court_form"
              id="w-node-_3065d314-3bc6-0157-fb9e-8b7ac079c3d4-c079c39d"
              tag="div"
            >
              <_Builtin.FormButton
                className="button is-small"
                id="w-node-_3065d314-3bc6-0157-fb9e-8b7ac079c3d5-c079c39d"
                type="submit"
                value="Enregistrer"
                data-wait="Please wait..."
                wized="update_court_btn"
              />
              <_Builtin.FormButton
                className="button is-small is-red"
                id="w-node-_3065d314-3bc6-0157-fb9e-8b7ac079c3d6-c079c39d"
                data-w-id="3065d314-3bc6-0157-fb9e-8b7ac079c3d6"
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
          className="court_update_modal_close-button"
          data-w-id="3065d314-3bc6-0157-fb9e-8b7ac079c3dd"
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
        className="court_update_modal_background-overlay"
        data-w-id="3065d314-3bc6-0157-fb9e-8b7ac079c3e3"
        tag="div"
      />
    </_Component>
  );
}
