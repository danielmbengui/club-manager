"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import { ButtonPrimary } from "./ButtonPrimary";
import { ButtonRed } from "./ButtonRed";

const _interactionsData = JSON.parse(
  '{"events":{"e-76":{"id":"e-76","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-22","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-77"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"aaa88191-2102-bc1f-5100-c3e0e045da7e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"aaa88191-2102-bc1f-5100-c3e0e045da7e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1644221440202},"e-78":{"id":"e-78","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-22","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-79"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"aaa88191-2102-bc1f-5100-c3e0e045da81","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"aaa88191-2102-bc1f-5100-c3e0e045da81","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1644221398431},"e-106":{"id":"e-106","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-22","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-107"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"aaa88191-2102-bc1f-5100-c3e0e045da78","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"aaa88191-2102-bc1f-5100-c3e0e045da78","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1710086318191},"e-130":{"id":"e-130","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-21","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-131"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65edcb06e424209e95092c7e|bb500555-078b-9094-370b-01d42d8498b9","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65edcb06e424209e95092c7e|bb500555-078b-9094-370b-01d42d8498b9","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1710352316760},"e-152":{"id":"e-152","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-21","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-153"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65edcb06e424209e95092c82|4503afd5-d327-2436-e4ec-39b1a16445cb","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65edcb06e424209e95092c82|4503afd5-d327-2436-e4ec-39b1a16445cb","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1715436215866},"e-184":{"id":"e-184","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-21","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-185"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65edcb06e424209e95092c82|af982242-be64-80d1-9641-19df54136d1b","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65edcb06e424209e95092c82|af982242-be64-80d1-9641-19df54136d1b","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1716946680052},"e-194":{"id":"e-194","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-21","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-195"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65edcb06e424209e95092c82|42ae4c78-2a15-44e4-026d-1d6882ac6f05","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65edcb06e424209e95092c82|42ae4c78-2a15-44e4-026d-1d6882ac6f05","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1717107898821},"e-196":{"id":"e-196","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-21","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-197"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65edcb06e424209e95092c82|446ecb18-241d-51fe-0a07-8c6973ca5fa4","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65edcb06e424209e95092c82|446ecb18-241d-51fe-0a07-8c6973ca5fa4","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1717187708281},"e-198":{"id":"e-198","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-21","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-199"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"a6458d3f-5373-0f53-4721-e5387dc08f6d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"a6458d3f-5373-0f53-4721-e5387dc08f6d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1717189926185},"e-282":{"id":"e-282","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-21","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-283"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"cd5dc5ca-f5d4-aeec-6107-f3c88afbc6ea","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"cd5dc5ca-f5d4-aeec-6107-f3c88afbc6ea","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1727736126886},"e-320":{"id":"e-320","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-47","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-321"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"d9cf1a34-cc1b-8ef7-ccee-e251e1888211","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"d9cf1a34-cc1b-8ef7-ccee-e251e1888211","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1732407789898}},"actionLists":{"a-22":{"id":"a-22","title":"Booking Delete Modal [Close]","actionItemGroups":[{"actionItems":[{"id":"a-22-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":200,"target":{"selector":".booking_delete_modal_component","selectorGuids":["3d7b4e23-24d1-3be6-e54a-0f0ef260dafe"]},"value":0,"unit":""}},{"id":"a-22-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"SIBLINGS","selector":".booking_delete_content-wrapper","selectorGuids":["3d7b4e23-24d1-3be6-e54a-0f0ef260daff"]},"yValue":100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]},{"actionItems":[{"id":"a-22-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".booking_delete_modal_component","selectorGuids":["3d7b4e23-24d1-3be6-e54a-0f0ef260dafe"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1644220869174},"a-21":{"id":"a-21","title":"Booking Delete Modal [Open]","actionItemGroups":[{"actionItems":[{"id":"a-21-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".booking_delete_modal_component","selectorGuids":["3d7b4e23-24d1-3be6-e54a-0f0ef260dafe"]},"value":"none"}},{"id":"a-21-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":200,"target":{"selector":".booking_delete_modal_component","selectorGuids":["3d7b4e23-24d1-3be6-e54a-0f0ef260dafe"]},"value":0,"unit":""}},{"id":"a-21-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":500,"target":{"selector":".booking_delete_content-wrapper","selectorGuids":["3d7b4e23-24d1-3be6-e54a-0f0ef260daff"]},"yValue":100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]},{"actionItems":[{"id":"a-21-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".booking_delete_modal_component","selectorGuids":["3d7b4e23-24d1-3be6-e54a-0f0ef260dafe"]},"value":"flex"}},{"id":"a-21-n-5","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":200,"target":{"selector":".booking_delete_modal_component","selectorGuids":["3d7b4e23-24d1-3be6-e54a-0f0ef260dafe"]},"value":1,"unit":""}},{"id":"a-21-n-6","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":500,"target":{"selector":".booking_delete_content-wrapper","selectorGuids":["3d7b4e23-24d1-3be6-e54a-0f0ef260daff"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1644220869174},"a-47":{"id":"a-47","title":"Booking Delete Modal [Open] 3","actionItemGroups":[{"actionItems":[{"id":"a-47-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".booking_delete_modal_component","selectorGuids":["3d7b4e23-24d1-3be6-e54a-0f0ef260dafe"]},"value":"none"}},{"id":"a-47-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":200,"target":{"selector":".booking_delete_modal_component","selectorGuids":["3d7b4e23-24d1-3be6-e54a-0f0ef260dafe"]},"value":0,"unit":""}},{"id":"a-47-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":500,"target":{"selector":".booking_delete_content-wrapper","selectorGuids":["3d7b4e23-24d1-3be6-e54a-0f0ef260daff"]},"yValue":100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]},{"actionItems":[{"id":"a-47-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".booking_delete_modal_component","selectorGuids":["3d7b4e23-24d1-3be6-e54a-0f0ef260dafe"]},"value":"flex"}},{"id":"a-47-n-5","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":200,"target":{"selector":".booking_delete_modal_component","selectorGuids":["3d7b4e23-24d1-3be6-e54a-0f0ef260dafe"]},"value":1,"unit":""}},{"id":"a-47-n-6","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":500,"target":{"selector":".booking_delete_content-wrapper","selectorGuids":["3d7b4e23-24d1-3be6-e54a-0f0ef260daff"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1644220869174}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function DialogDeleteBooking({
  as: _Component = _Builtin.Block,
  componentProgress,
  isDeleting = true,
  isSuccessDeleting = true,
  deleteBooking,
  styleDialogDelete = {},
  close = {},
  isErrorDeleting = true,
}) {
  _interactions.useInteractions(_interactionsData);

  return (
    <_Component
      className="booking_delete_modal_component devlink delete"
      tag="div"
      {...styleDialogDelete}
    >
      <_Builtin.Block className="booking_delete_content-wrapper" tag="div">
        <_Builtin.Block
          className="delete_block"
          tag="div"
          wized="popup_form_block"
        >
          <_Builtin.Block
            className="delete_modal_header"
            tag="div"
            wized="form_delete"
          >
            <_Builtin.HtmlEmbed
              className="icon-1x1-medium"
              value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20width%3D%22auto%22%20height%3D%22auto%22%20x%3D%220%22%20y%3D%220%22%20viewBox%3D%220%200%2064%2064%22%20style%3D%22enable-background%3Anew%200%200%20512%20512%22%20xml%3Aspace%3D%22preserve%22%20class%3D%22%22%3E%3Cg%3E%3Cpath%20fill%3D%22%23ffc048%22%20d%3D%22M32%203.4A28.59%2028.59%200%200%200%203.4%2032%2028.59%2028.59%200%200%200%2032%2060.6%2028.59%2028.59%200%200%200%2060.6%2032%2028.59%2028.59%200%200%200%2032%203.4zm0%2049.2a4.32%204.32%200%201%201%204.31-4.31A4.32%204.32%200%200%201%2032%2052.6zM37.23%2017%2035.6%2039a.6.6%200%200%201-.6.56h-6a.6.6%200%200%201-.6-.56l-1.63-22a5.24%205.24%200%201%201%2010.46%200z%22%20data-name%3D%22Layer%2035%22%20opacity%3D%221%22%20data-original%3D%22%23ffc048%22%20class%3D%22%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E"
            />
            <_Builtin.Block className="modal_header_title" tag="div">
              {
                "Attention une fois supprimée, la réservation ne peut plus être récupérée !"
              }
            </_Builtin.Block>
            {isSuccessDeleting ? (
              <_Builtin.Block
                className="success_message"
                tag="div"
                wized="delete_booking_success_messagee"
                wized-cloak=""
              >
                <_Builtin.HtmlEmbed
                  className="icon-1x1-custom success"
                  value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20width%3D%22auto%22%20height%3D%22auto%22%20x%3D%220%22%20y%3D%220%22%20viewBox%3D%220%200%20408.576%20408.576%22%20style%3D%22enable-background%3Anew%200%200%20512%20512%22%20xml%3Aspace%3D%22preserve%22%20class%3D%22%22%3E%3Cg%3E%3Cpath%20d%3D%22M204.288%200C91.648%200%200%2091.648%200%20204.288s91.648%20204.288%20204.288%20204.288%20204.288-91.648%20204.288-204.288S316.928%200%20204.288%200zm114.176%20150.528-130.56%20129.536c-7.68%207.68-19.968%208.192-28.16.512L90.624%20217.6c-8.192-7.68-8.704-20.48-1.536-28.672%207.68-8.192%2020.48-8.704%2028.672-1.024l54.784%2050.176L289.28%20121.344c8.192-8.192%2020.992-8.192%2029.184%200s8.192%2020.992%200%2029.184z%22%20fill%3D%22currentColor%22%20opacity%3D%221%22%20data-original%3D%22%23000000%22%20class%3D%22%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                />
                <_Builtin.Block className="success-message_title" tag="div">
                  {"la réservation a bien été supprimée ! "}
                </_Builtin.Block>
              </_Builtin.Block>
            ) : null}
            {isDeleting ? (
              <_Builtin.Block
                className="form_flex loader"
                tag="div"
                wized="form_loader"
                wized-cloak=""
              >
                <_Builtin.Block className="div-block-5" tag="div">
                  <_Builtin.Block className="block-progress small" tag="div">
                    {componentProgress}
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block tag="div">{"patientez svp"}</_Builtin.Block>
              </_Builtin.Block>
            ) : null}
            {isErrorDeleting ? (
              <_Builtin.Block
                className="error_message"
                tag="div"
                wized="delete_booking_error_box"
                wized-cloak=""
              >
                <_Builtin.Block tag="div" wized="error_message">
                  {"Une erreur est survenue !"}
                </_Builtin.Block>
              </_Builtin.Block>
            ) : null}
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className="booking_delete_close-button"
          tag="div"
          {...close}
        >
          <_Builtin.HtmlEmbed
            className="icon-embed-small hide-mobile-landscape"
            value="%3Csvg%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2032%2032%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M24.056%2023.5004L23.5004%2024.056C23.1935%2024.3628%2022.696%2024.3628%2022.3892%2024.056L16%2017.6668L9.61078%2024.056C9.30394%2024.3628%208.80645%2024.3628%208.49961%2024.056L7.94403%2023.5004C7.63719%2023.1936%207.63719%2022.6961%207.94403%2022.3892L14.3332%2016L7.94403%209.61081C7.63719%209.30397%207.63719%208.80648%207.94403%208.49964L8.49961%207.94406C8.80645%207.63721%209.30394%207.63721%209.61078%207.94406L16%2014.3333L22.3892%207.94404C22.6961%207.6372%2023.1935%207.6372%2023.5004%207.94404L24.056%208.49963C24.3628%208.80647%2024.3628%209.30395%2024.056%209.61079L17.6667%2016L24.056%2022.3892C24.3628%2022.6961%2024.3628%2023.1936%2024.056%2023.5004Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
          />
          <_Builtin.Image
            className="show-mobile-landscape"
            width="auto"
            height="auto"
            loading="lazy"
            alt=""
            src="https://cdn.prod.website-files.com/64ad6274d8c64f92f123999e/65e59514710bba7047bd50df_icon_close-modal.svg"
          />
        </_Builtin.Block>
        <_Builtin.Block
          className="button-group court_form"
          id="w-node-_6db60f1d-1c7b-db5d-af58-a6db923d26d0-69c11cab"
          tag="div"
        >
          <ButtonPrimary
            action={deleteBooking}
            text="Supprimer"
            isNotWarning={true}
          />
          <ButtonRed action={close} text="Annuler" />
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className="booking_delete_background-overlay devlink"
        tag="div"
      />
    </_Component>
  );
}
