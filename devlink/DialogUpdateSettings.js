"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import { ButtonWarning } from "./ButtonWarning";
import { ButtonDisabled } from "./ButtonDisabled";
import { ButtonPrimary } from "./ButtonPrimary";
import { ButtonRed } from "./ButtonRed";

const _interactionsData = JSON.parse(
  '{"events":{"e-134":{"id":"e-134","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-30","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-135"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"d77fea50-e54a-301b-1a23-3cf16f3b22ad","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"d77fea50-e54a-301b-1a23-3cf16f3b22ad","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1715378237175},"e-168":{"id":"e-168","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-29","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-169"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65edcb06e424209e95092c83|3b7adc20-1a01-e267-6813-49216a0e2e3c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65edcb06e424209e95092c83|3b7adc20-1a01-e267-6813-49216a0e2e3c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1716638928125},"e-172":{"id":"e-172","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-31","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-173"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65edcb06e424209e95092c83|8ed8543c-e583-c7e2-9f8c-a3fe62bcd832","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65edcb06e424209e95092c83|8ed8543c-e583-c7e2-9f8c-a3fe62bcd832","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1716687683505},"e-182":{"id":"e-182","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-29","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-183"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6650fca0bdd809151a219ff1|57451b7d-367c-b1b3-5997-ef00ff92ecba","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6650fca0bdd809151a219ff1|57451b7d-367c-b1b3-5997-ef00ff92ecba","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1716762746915},"e-322":{"id":"e-322","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-29","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-323"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"5d061961-b07b-0520-41bd-b798fe6bde0b","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"5d061961-b07b-0520-41bd-b798fe6bde0b","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1732567772369},"e-324":{"id":"e-324","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-31","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-325"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"de7f9134-64df-4b95-498a-18e7fa5ba0f4","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"de7f9134-64df-4b95-498a-18e7fa5ba0f4","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1732568064855},"e-328":{"id":"e-328","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-31","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-329"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"de7f9134-64df-4b95-498a-18e7fa5ba12e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"de7f9134-64df-4b95-498a-18e7fa5ba12e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1732569558626}},"actionLists":{"a-30":{"id":"a-30","title":"Club Update Modal [Close]","actionItemGroups":[{"actionItems":[{"id":"a-30-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuad","duration":500,"target":{"selector":".club_update_modal_content-wrapper","selectorGuids":["0ed80bed-00f2-1354-4a84-10aa6d690dfe"]},"xValue":100,"xUnit":"%","yUnit":"PX","zUnit":"PX"}},{"id":"a-30-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":500,"target":{"selector":".club_update_modal_background-overlay","selectorGuids":["7e689950-943f-a480-a97a-aa2b580f3c77"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-30-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".club_update_modal_component","selectorGuids":["7474e86f-569e-f48d-4970-2e90c743377c"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1644220869174},"a-29":{"id":"a-29","title":"Club Update Modal [Open]","actionItemGroups":[{"actionItems":[{"id":"a-29-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".club_update_modal_component","selectorGuids":["7474e86f-569e-f48d-4970-2e90c743377c"]},"value":"none"}},{"id":"a-29-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".club_update_modal_content-wrapper","selectorGuids":["0ed80bed-00f2-1354-4a84-10aa6d690dfe"]},"xValue":100,"xUnit":"%","yUnit":"PX","zUnit":"PX"}},{"id":"a-29-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".club_update_modal_background-overlay","selectorGuids":["7e689950-943f-a480-a97a-aa2b580f3c77"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-29-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".club_update_modal_component","selectorGuids":["7474e86f-569e-f48d-4970-2e90c743377c"]},"value":"flex"}},{"id":"a-29-n-5","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuad","duration":500,"target":{"selector":".club_update_modal_content-wrapper","selectorGuids":["0ed80bed-00f2-1354-4a84-10aa6d690dfe"]},"xValue":0,"xUnit":"%","yUnit":"PX","zUnit":"PX"}},{"id":"a-29-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":500,"target":{"selector":".club_update_modal_background-overlay","selectorGuids":["7e689950-943f-a480-a97a-aa2b580f3c77"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1644220869174},"a-31":{"id":"a-31","title":"Club Update Modal [Close] 2","actionItemGroups":[{"actionItems":[{"id":"a-31-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuad","duration":500,"target":{"selector":".club_update_modal_content-wrapper","selectorGuids":["0ed80bed-00f2-1354-4a84-10aa6d690dfe"]},"xValue":100,"xUnit":"%","yUnit":"PX","zUnit":"PX"}},{"id":"a-31-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":500,"target":{"selector":".club_update_modal_background-overlay","selectorGuids":["7e689950-943f-a480-a97a-aa2b580f3c77"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-31-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".club_update_modal_component","selectorGuids":["7474e86f-569e-f48d-4970-2e90c743377c"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1644220869174}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function DialogUpdateSettings({
  as: _Component = _Builtin.Block,
  componentProgress,
  isLoading = true,
  componentHoursLimitDays,
  componentMinutesLimitDays,
  componentLimitDays,
  componentLimitHoursBeforeBooking,
  componentLimitMinutesBeforeBooking,
  componentLimitMinutesBeforeCancel,
  componentLimitHoursBeforeCancel,
  componentLimitActivesBookings,
  componentLimitDaysBeforeCancel,
  isError = true,
  isSuccess = true,
  isEditing = true,
  actionCancel,
  actionEdit,
  isWarning = true,
  isNotWarning = true,
  text = "Enregistrer",
  warningText = "Le temps minimum avant une réservation est à 0 !",
}) {
  _interactions.useInteractions(_interactionsData);

  return (
    <_Component className="club_update_modal_component" tag="div">
      <_Builtin.Block
        className="club_update_modal_content-wrapper devlink"
        tag="div"
      >
        <_Builtin.Block className="modal_header" tag="div">
          <_Builtin.HtmlEmbed
            className="icon-height-large devlink"
            value="%3Csvg%20width%3D%22auto%22%20height%3D%22auto%22%20viewBox%3D%220%200%2011%2013%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M0%200.464286L0%2012.5357C0%2012.6589%200.0643849%2012.7769%200.17899%2012.864C0.293596%2012.9511%200.449034%2013%200.611111%2013H10.3889C10.551%2013%2010.7064%2012.9511%2010.821%2012.864C10.9356%2012.7769%2011%2012.6589%2011%2012.5357L11%200.464286C11%200.34115%2010.9356%200.223057%2010.821%200.135986C10.7064%200.0489159%2010.551%200%2010.3889%200H0.611111C0.449034%200%200.293596%200.0489159%200.17899%200.135986C0.0643849%200.223057%200%200.34115%200%200.464286ZM1.22222%204.17857H4.88889L4.88889%208.82143H1.22222L1.22222%204.17857ZM1.22222%2012.0714L1.22222%209.75H9.77778V12.0714H1.22222ZM9.77778%208.82143H6.11111L6.11111%204.17857H9.77778V8.82143ZM9.77778%200.928572V3.25H1.22222L1.22222%200.928572H9.77778Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
          />
          <_Builtin.Block className="modal_header-content" tag="div">
            <_Builtin.Block className="heading-style-h3 devlink" tag="div">
              {"Paramètres de réservations"}
            </_Builtin.Block>
            <_Builtin.Block className="devlink" tag="div">
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
              id="w-node-de7f9134-64df-4b95-498a-18e7fa5ba0ff-fa5ba0f2"
              tag="div"
            >
              <_Builtin.Block
                className="form_layout-left"
                id="w-node-de7f9134-64df-4b95-498a-18e7fa5ba100-fa5ba0f2"
                tag="div"
              >
                <_Builtin.Block
                  className="form_flex club"
                  id="w-node-de7f9134-64df-4b95-498a-18e7fa5ba101-fa5ba0f2"
                  tag="div"
                >
                  <_Builtin.FormBlockLabel
                    className="form_field-label club"
                    htmlFor="field-14"
                  >
                    {"Nombre de jours disponibles pour réserver :"}
                  </_Builtin.FormBlockLabel>
                  <_Builtin.Block className="header-flex" tag="div">
                    <_Builtin.Block
                      className="form_dashboard devlink site"
                      tag="div"
                    >
                      <_Builtin.Block tag="div">
                        {componentLimitDays}
                      </_Builtin.Block>
                    </_Builtin.Block>
                    <_Builtin.Block className="subheader devlink" tag="div">
                      {"Jours"}
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className="form_flex club"
                  id="w-node-de7f9134-64df-4b95-498a-18e7fa5ba105-fa5ba0f2"
                  tag="div"
                >
                  <_Builtin.FormBlockLabel
                    className="form_field-label club"
                    htmlFor="field-15"
                  >
                    {"Temps minimum avant une réservation :"}
                  </_Builtin.FormBlockLabel>
                  <_Builtin.Block className="div-block-22" tag="div">
                    <_Builtin.Block className="header-flex" tag="div">
                      <_Builtin.Block
                        className="form_dashboard devlink site"
                        tag="div"
                      >
                        <_Builtin.Block tag="div">
                          {componentLimitHoursBeforeBooking}
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block className="subheader devlink" tag="div">
                        {"Heures"}
                      </_Builtin.Block>
                    </_Builtin.Block>
                    <_Builtin.Block className="header-flex" tag="div">
                      <_Builtin.Block
                        className="form_dashboard devlink site"
                        tag="div"
                      >
                        <_Builtin.Block tag="div">
                          {componentLimitMinutesBeforeBooking}
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block className="subheader devlink" tag="div">
                        {"Minutes"}
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className="form_flex club"
                  id="w-node-de7f9134-64df-4b95-498a-18e7fa5ba109-fa5ba0f2"
                  tag="div"
                >
                  <_Builtin.FormBlockLabel
                    className="form_field-label club"
                    htmlFor="field-13"
                  >
                    {"Temps minimum avant une annulation de réservation :"}
                  </_Builtin.FormBlockLabel>
                  <_Builtin.Block className="div-block-22" tag="div">
                    <_Builtin.Block className="header-flex" tag="div">
                      <_Builtin.Block
                        className="form_dashboard devlink site"
                        tag="div"
                      >
                        <_Builtin.Block tag="div">
                          {componentLimitDaysBeforeCancel}
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block className="subheader devlink" tag="div">
                        {"Jours"}
                      </_Builtin.Block>
                    </_Builtin.Block>
                    <_Builtin.Block className="header-flex" tag="div">
                      <_Builtin.Block
                        className="form_dashboard devlink site"
                        tag="div"
                      >
                        <_Builtin.Block tag="div">
                          {componentLimitHoursBeforeCancel}
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block className="subheader devlink" tag="div">
                        {"Heures"}
                      </_Builtin.Block>
                    </_Builtin.Block>
                    <_Builtin.Block className="header-flex" tag="div">
                      <_Builtin.Block
                        className="form_dashboard devlink site"
                        tag="div"
                      >
                        <_Builtin.Block tag="div">
                          {componentLimitMinutesBeforeCancel}
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block className="subheader devlink" tag="div">
                        {"Minutes"}
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className="form_flex club"
                  id="w-node-de7f9134-64df-4b95-498a-18e7fa5ba10d-fa5ba0f2"
                  tag="div"
                >
                  <_Builtin.FormBlockLabel
                    className="form_field-label club"
                    htmlFor="field-13"
                  >
                    {"Nombre de réservations actives en cours par un joueur :"}
                  </_Builtin.FormBlockLabel>
                  <_Builtin.Block className="header-flex" tag="div">
                    <_Builtin.Block
                      className="form_dashboard devlink site"
                      tag="div"
                    >
                      <_Builtin.Block tag="div">
                        {componentLimitActivesBookings}
                      </_Builtin.Block>
                    </_Builtin.Block>
                    <_Builtin.Block className="subheader devlink" tag="div">
                      {"Réservations"}
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className="form_layout-right"
                id="w-node-de7f9134-64df-4b95-498a-18e7fa5ba111-fa5ba0f2"
                tag="div"
              >
                <_Builtin.Block
                  className="form_flex club"
                  id="w-node-de7f9134-64df-4b95-498a-18e7fa5ba112-fa5ba0f2"
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
                  id="w-node-de7f9134-64df-4b95-498a-18e7fa5ba116-fa5ba0f2"
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
            {isWarning ? (
              <_Builtin.Block
                className="error_message warning devlink"
                tag="div"
                wized="params_error_box"
                wized-cloak=""
              >
                <_Builtin.Block className="div-block-39" tag="div">
                  <_Builtin.Block
                    className="text-block-15 warning"
                    tag="div"
                    wized="error_message"
                  >
                    {warningText}
                  </_Builtin.Block>
                </_Builtin.Block>
                <ButtonWarning
                  action={actionEdit}
                  text="Continuer quand même"
                />
              </_Builtin.Block>
            ) : null}
            {isError ? (
              <_Builtin.Block
                className="error_message"
                id="w-node-_48bf0bba-fc6c-87dd-209f-c3d143bc2ba3-fa5ba0f2"
                tag="div"
                wized="params_error_box"
                wized-cloak=""
              >
                <_Builtin.Block tag="div" wized="error_message">
                  {"error_message"}
                </_Builtin.Block>
              </_Builtin.Block>
            ) : null}
            {isSuccess ? (
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
                  {"Les informations ont bien été modifiées !"}
                </_Builtin.Block>
              </_Builtin.Block>
            ) : null}
            {isLoading ? (
              <_Builtin.Block
                className="form_flex loader"
                tag="div"
                wized="params_loader"
                wized-cloak=""
              >
                <_Builtin.Block tag="div">{"patientez svp"}</_Builtin.Block>
                <_Builtin.Block className="div-block-5" tag="div">
                  <_Builtin.Block className="block-progress small" tag="div">
                    {componentProgress}
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
            ) : null}
            {isEditing ? (
              <_Builtin.Block
                className="button-group court_form"
                id="w-node-de7f9134-64df-4b95-498a-18e7fa5ba125-fa5ba0f2"
                tag="div"
              >
                <ButtonDisabled isWarning={isWarning} text={text} />
                <ButtonPrimary
                  action={actionEdit}
                  isNotWarning={isNotWarning}
                />
                <ButtonRed action={actionCancel} text="Réinitialiser" />
              </_Builtin.Block>
            ) : null}
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
        <_Builtin.Block
          className="club_update_modal_close-button"
          data-w-id="de7f9134-64df-4b95-498a-18e7fa5ba0f4"
          tag="div"
        >
          <_Builtin.HtmlEmbed
            className="icon-embed-small devlink"
            value="%3Csvg%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2032%2032%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M24.056%2023.5004L23.5004%2024.056C23.1935%2024.3628%2022.696%2024.3628%2022.3892%2024.056L16%2017.6668L9.61078%2024.056C9.30394%2024.3628%208.80645%2024.3628%208.49961%2024.056L7.94403%2023.5004C7.63719%2023.1936%207.63719%2022.6961%207.94403%2022.3892L14.3332%2016L7.94403%209.61081C7.63719%209.30397%207.63719%208.80648%207.94403%208.49964L8.49961%207.94406C8.80645%207.63721%209.30394%207.63721%209.61078%207.94406L16%2014.3333L22.3892%207.94404C22.6961%207.6372%2023.1935%207.6372%2023.5004%207.94404L24.056%208.49963C24.3628%208.80647%2024.3628%209.30395%2024.056%209.61079L17.6667%2016L24.056%2022.3892C24.3628%2022.6961%2024.3628%2023.1936%2024.056%2023.5004Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
          />
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className="club_update_modal_background-overlay"
        data-w-id="de7f9134-64df-4b95-498a-18e7fa5ba12e"
        tag="div"
      />
    </_Component>
  );
}
