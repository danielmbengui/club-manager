"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";

const _interactionsData = JSON.parse(
  '{"events":{"e-4":{"id":"e-4","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-6","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-10"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"c0acb421-8b3f-022e-f137-3e1ddebb0729","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"c0acb421-8b3f-022e-f137-3e1ddebb0729","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1693317437390},"e-10":{"id":"e-10","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-7","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"c0acb421-8b3f-022e-f137-3e1ddebb0729","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"c0acb421-8b3f-022e-f137-3e1ddebb0729","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1693317437390}},"actionLists":{"a-6":{"id":"a-6","title":"Topbar 3 Dropdown [Open]","actionItemGroups":[{"actionItems":[{"id":"a-6-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".topbar3_dropdown-list","selectorGuids":["46f22993-c095-a3c8-9aa4-d6a267c87fc0"]},"yValue":3,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-6-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".topbar3_dropdown-list","selectorGuids":["46f22993-c095-a3c8-9aa4-d6a267c87fc0"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-6-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".topbar3_dropdown-list","selectorGuids":["46f22993-c095-a3c8-9aa4-d6a267c87fc0"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-6-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".topbar3_dropdown-list","selectorGuids":["46f22993-c095-a3c8-9aa4-d6a267c87fc0"]},"value":1,"unit":""}},{"id":"a-6-n-5","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".dropdown-chevron","selectorGuids":["46f22993-c095-a3c8-9aa4-d6a267c87fcb"]},"zValue":180,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1626241970095},"a-7":{"id":"a-7","title":"Topbar 3 Dropdown [Close]","actionItemGroups":[{"actionItems":[{"id":"a-7-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".topbar3_dropdown-list","selectorGuids":["46f22993-c095-a3c8-9aa4-d6a267c87fc0"]},"value":0,"unit":""}},{"id":"a-7-n-2","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".dropdown-chevron","selectorGuids":["46f22993-c095-a3c8-9aa4-d6a267c87fcb"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]},{"actionItems":[{"id":"a-7-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".topbar3_dropdown-list","selectorGuids":["46f22993-c095-a3c8-9aa4-d6a267c87fc0"]},"yValue":4,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626241970095}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function TopBarRightContent({
  as: _Component = _Builtin.Block,
  clubName = "Club Name",
  clubLogo = "https://cdn.prod.website-files.com/64ad6274d8c64f92f123999e/65da7ead8c280d989d9bd5d3_ball-logo.png",
}) {
  _interactions.useInteractions(_interactionsData);

  return (
    <_Component
      className="topbar3_content-right"
      id="w-node-c0acb421-8b3f-022e-f137-3e1ddebb0728-debb0728"
      tag="div"
      wized="topbar"
    >
      <_Builtin.DropdownWrapper
        className="topbar3_menu-dropdown"
        data-w-id="c0acb421-8b3f-022e-f137-3e1ddebb0729"
        tag="div"
        delay="200"
        hover={false}
      >
        <_Builtin.DropdownToggle className="topbar3_dropdown-account" tag="div">
          <_Builtin.Block className="topbar3_text-wrapper" tag="div">
            <_Builtin.Image
              className="topbar3_avatar-image"
              loading="lazy"
              width="auto"
              height="auto"
              wized="topbar_photo"
              wized-cloak=""
              alt=""
              src={clubLogo}
            />
            <_Builtin.Block tag="div" wized="topbar_club_name" wized-cloak="">
              {clubName}
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.DropdownToggle>
        <_Builtin.DropdownList className="topbar3_dropdown-list" tag="nav">
          <_Builtin.Link
            className="topbar3_dropdown-link"
            button={false}
            block="inline"
            options={{
              href: "#",
            }}
          >
            <_Builtin.HtmlEmbed
              className="icon-embed-xxsmall text-color-brand1"
              value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20x%3D%220%22%20y%3D%220%22%20viewBox%3D%220%200%20512%20512%22%20style%3D%22enable-background%3Anew%200%200%20512%20512%22%20xml%3Aspace%3D%22preserve%22%20class%3D%22hovered-paths%22%3E%3Cg%3E%3Cpath%20d%3D%22m498.195%20222.695-.035-.035L289.305%2013.813C280.402%204.905%20268.566%200%20255.977%200c-12.59%200-24.426%204.902-33.332%2013.809L13.898%20222.55c-.07.07-.14.144-.21.215-18.282%2018.386-18.25%2048.218.09%2066.558%208.378%208.383%2019.445%2013.238%2031.277%2013.746.48.047.965.07%201.453.07h8.324v153.7C54.832%20487.254%2079.578%20512%20110%20512h81.71c8.282%200%2015-6.715%2015-15V376.5c0-13.879%2011.29-25.168%2025.169-25.168h48.195c13.88%200%2025.168%2011.29%2025.168%2025.168V497c0%208.285%206.715%2015%2015%2015h81.711c30.422%200%2055.168-24.746%2055.168-55.16v-153.7h7.719c12.586%200%2024.422-4.902%2033.332-13.808%2018.36-18.371%2018.367-48.254.023-66.637zm0%200%22%20fill%3D%22currentColor%22%20opacity%3D%221%22%20data-original%3D%22%23000000%22%20class%3D%22hovered-path%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E"
            />
            <_Builtin.Block tag="div">
              {"Profil Club"}
              <br />
            </_Builtin.Block>
          </_Builtin.Link>
          <_Builtin.Block className="topbar3_dropdown-divider" tag="div" />
        </_Builtin.DropdownList>
      </_Builtin.DropdownWrapper>
      <_Builtin.Block className="toggle-wrapper" tag="div" tr-color-toggle="">
        <_Builtin.Block className="toggle-inner" tag="div" />
      </_Builtin.Block>
    </_Component>
  );
}
