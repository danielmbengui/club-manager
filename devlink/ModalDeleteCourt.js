"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";

const _interactionsData = JSON.parse(
  '{"events":{"e-40":{"id":"e-40","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-14","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-41"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"0347dff0-287c-d01b-9d1a-da95d2ec7dd1","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"0347dff0-287c-d01b-9d1a-da95d2ec7dd1","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1644221440202},"e-42":{"id":"e-42","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-14","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-43"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"0347dff0-287c-d01b-9d1a-da95d2ec7dd4","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"0347dff0-287c-d01b-9d1a-da95d2ec7dd4","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1644221398431},"e-44":{"id":"e-44","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-13","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-45"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65edcb06e424209e95092c82|d276af4c-10ff-37ce-bcdb-1e2a524226f7","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65edcb06e424209e95092c82|d276af4c-10ff-37ce-bcdb-1e2a524226f7","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1709544845532},"e-46":{"id":"e-46","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-14","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-47"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"0347dff0-287c-d01b-9d1a-da95d2ec7dcb","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"0347dff0-287c-d01b-9d1a-da95d2ec7dcb","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1709545958662},"e-158":{"id":"e-158","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-13","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-159"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65edcb06e424209e95092c82|133b93e3-93ef-f6ee-cb14-b9ca4539a0b1","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65edcb06e424209e95092c82|133b93e3-93ef-f6ee-cb14-b9ca4539a0b1","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1715649739089},"e-180":{"id":"e-180","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-13","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-181"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65edcb06e424209e95092c82|9f2f5897-befe-b122-c543-9d9f7057a7e0","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65edcb06e424209e95092c82|9f2f5897-befe-b122-c543-9d9f7057a7e0","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1716689159209}},"actionLists":{"a-14":{"id":"a-14","title":"Court Delete Modal [Close]","actionItemGroups":[{"actionItems":[{"id":"a-14-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":200,"target":{"selector":".court_delete_modal_component","selectorGuids":["9d21f79a-a04d-0c2f-b9f1-59ad17e288d2"]},"value":0,"unit":""}},{"id":"a-14-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"SIBLINGS","selector":".court_delete_modal_content-wrapper","selectorGuids":["9d21f79a-a04d-0c2f-b9f1-59ad17e288d3"]},"yValue":100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]},{"actionItems":[{"id":"a-14-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".court_delete_modal_component","selectorGuids":["9d21f79a-a04d-0c2f-b9f1-59ad17e288d2"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1644220869174},"a-13":{"id":"a-13","title":"Court Delete Modal [Open]","actionItemGroups":[{"actionItems":[{"id":"a-13-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".court_delete_modal_component","selectorGuids":["9d21f79a-a04d-0c2f-b9f1-59ad17e288d2"]},"value":"none"}},{"id":"a-13-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":200,"target":{"selector":".court_delete_modal_component","selectorGuids":["9d21f79a-a04d-0c2f-b9f1-59ad17e288d2"]},"value":0,"unit":""}},{"id":"a-13-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":500,"target":{"selector":".court_delete_modal_content-wrapper","selectorGuids":["9d21f79a-a04d-0c2f-b9f1-59ad17e288d3"]},"yValue":100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]},{"actionItems":[{"id":"a-13-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".court_delete_modal_component","selectorGuids":["9d21f79a-a04d-0c2f-b9f1-59ad17e288d2"]},"value":"flex"}},{"id":"a-13-n-5","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":200,"target":{"selector":".court_delete_modal_component","selectorGuids":["9d21f79a-a04d-0c2f-b9f1-59ad17e288d2"]},"value":1,"unit":""}},{"id":"a-13-n-6","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":500,"target":{"selector":".court_delete_modal_content-wrapper","selectorGuids":["9d21f79a-a04d-0c2f-b9f1-59ad17e288d3"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1644220869174}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function ModalDeleteCourt({ as: _Component = _Builtin.Block }) {
  _interactions.useInteractions(_interactionsData);

  return (
    <_Component className="court_delete_modal_component" tag="div">
      <_Builtin.Block className="court_delete_modal_content-wrapper" tag="div">
        <_Builtin.Block className="delete_modal_header" tag="div">
          <_Builtin.HtmlEmbed
            className="icon-1x1-medium"
            value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20width%3D%22auto%22%20height%3D%22auto%22%20x%3D%220%22%20y%3D%220%22%20viewBox%3D%220%200%2064%2064%22%20style%3D%22enable-background%3Anew%200%200%20512%20512%22%20xml%3Aspace%3D%22preserve%22%20class%3D%22%22%3E%3Cg%3E%3Cpath%20fill%3D%22%23ffc048%22%20d%3D%22M32%203.4A28.59%2028.59%200%200%200%203.4%2032%2028.59%2028.59%200%200%200%2032%2060.6%2028.59%2028.59%200%200%200%2060.6%2032%2028.59%2028.59%200%200%200%2032%203.4zm0%2049.2a4.32%204.32%200%201%201%204.31-4.31A4.32%204.32%200%200%201%2032%2052.6zM37.23%2017%2035.6%2039a.6.6%200%200%201-.6.56h-6a.6.6%200%200%201-.6-.56l-1.63-22a5.24%205.24%200%201%201%2010.46%200z%22%20data-name%3D%22Layer%2035%22%20opacity%3D%221%22%20data-original%3D%22%23ffc048%22%20class%3D%22%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E"
          />
          <_Builtin.Block className="modal_header_title" tag="div">
            {
              "Attention une fois supprimé le court ne peut plus être récupéré !"
            }
          </_Builtin.Block>
          <_Builtin.Block
            className="success_message"
            tag="div"
            wized="court_delete_success"
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
            wized="court_delete_loader"
            wized-cloak=""
          >
            <_Builtin.NotSupported _atom="Animation" />
            <_Builtin.Block tag="div">{"patientez svp"}</_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className="error_message"
            tag="div"
            wized="delete_court_error_box"
            wized-cloak=""
          >
            <_Builtin.Block tag="div" wized="error_message">
              {"error_message"}
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block className="button-group is-center" tag="div">
          <_Builtin.Link
            className="button is-small"
            button={true}
            wized="court_delete_btn"
            block=""
            options={{
              href: "#",
            }}
          >
            {"Supprimer Court"}
          </_Builtin.Link>
          <_Builtin.Link
            className="button is-small is-red"
            data-w-id="0347dff0-287c-d01b-9d1a-da95d2ec7dcb"
            button={true}
            block=""
            options={{
              href: "#",
            }}
          >
            {"Annuler"}
          </_Builtin.Link>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Link
        className="court_delete_modal_close-button"
        data-w-id="0347dff0-287c-d01b-9d1a-da95d2ec7dd1"
        button={false}
        block="inline"
        options={{
          href: "#",
        }}
      >
        <_Builtin.HtmlEmbed
          className="icon-embed-small hide-mobile-landscape"
          value="%3Csvg%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2032%2032%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M24.056%2023.5004L23.5004%2024.056C23.1935%2024.3628%2022.696%2024.3628%2022.3892%2024.056L16%2017.6668L9.61078%2024.056C9.30394%2024.3628%208.80645%2024.3628%208.49961%2024.056L7.94403%2023.5004C7.63719%2023.1936%207.63719%2022.6961%207.94403%2022.3892L14.3332%2016L7.94403%209.61081C7.63719%209.30397%207.63719%208.80648%207.94403%208.49964L8.49961%207.94406C8.80645%207.63721%209.30394%207.63721%209.61078%207.94406L16%2014.3333L22.3892%207.94404C22.6961%207.6372%2023.1935%207.6372%2023.5004%207.94404L24.056%208.49963C24.3628%208.80647%2024.3628%209.30395%2024.056%209.61079L17.6667%2016L24.056%2022.3892C24.3628%2022.6961%2024.3628%2023.1936%2024.056%2023.5004Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
        />
        <_Builtin.Image
          className="show-mobile-landscape"
          loading="lazy"
          width="auto"
          height="auto"
          alt=""
          src="https://cdn.prod.website-files.com/64ad6274d8c64f92f123999e/65e59514710bba7047bd50df_icon_close-modal.svg"
        />
      </_Builtin.Link>
      <_Builtin.Block
        className="court_delete_modal_background-overlay"
        data-w-id="0347dff0-287c-d01b-9d1a-da95d2ec7dd4"
        tag="div"
      />
    </_Component>
  );
}
