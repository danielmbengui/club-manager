"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";

const _interactionsData = JSON.parse(
  '{"events":{"e-209":{"id":"e-209","name":"","animationType":"preset","eventTypeId":"NAVBAR_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-208"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"d20ca173-5ba7-cfa1-190a-eb8b49309f52","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"d20ca173-5ba7-cfa1-190a-eb8b49309f52","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1684915557289},"e-208":{"id":"e-208","name":"","animationType":"preset","eventTypeId":"NAVBAR_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-209"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"d20ca173-5ba7-cfa1-190a-eb8b49309f52","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"d20ca173-5ba7-cfa1-190a-eb8b49309f52","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1684915557289}},"actionLists":{"a":{"id":"a","title":"Sidebar 4 Menu [Open]","actionItemGroups":[{"actionItems":[{"id":"a-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".sidebar4_background-layer","selectorGuids":["46f22993-c095-a3c8-9aa4-d6a267c87fb0"]},"value":"none"}},{"id":"a-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".sidebar4_background-layer","selectorGuids":["46f22993-c095-a3c8-9aa4-d6a267c87fb0"]},"value":0,"unit":""}},{"id":"a-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".sidebar4_close-tablet","selectorGuids":["46f22993-c095-a3c8-9aa4-d6a267c87fae"]},"value":"none"}},{"id":"a-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".sidebar4_close-tablet","selectorGuids":["46f22993-c095-a3c8-9aa4-d6a267c87fae"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-n-5","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".sidebar4_background-layer","selectorGuids":["46f22993-c095-a3c8-9aa4-d6a267c87fb0"]},"value":"block"}},{"id":"a-n-6","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".sidebar4_close-tablet","selectorGuids":["46f22993-c095-a3c8-9aa4-d6a267c87fae"]},"value":"block"}}]},{"actionItems":[{"id":"a-n-7","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".sidebar4_background-layer","selectorGuids":["46f22993-c095-a3c8-9aa4-d6a267c87fb0"]},"value":1,"unit":""}},{"id":"a-n-8","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".sidebar4_close-tablet","selectorGuids":["46f22993-c095-a3c8-9aa4-d6a267c87fae"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1688972151501},"a-2":{"id":"a-2","title":"Sidebar 4 Menu [Close]","actionItemGroups":[{"actionItems":[{"id":"a-2-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".sidebar4_background-layer","selectorGuids":["46f22993-c095-a3c8-9aa4-d6a267c87fb0"]},"value":0,"unit":""}},{"id":"a-2-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".sidebar4_close-tablet","selectorGuids":["46f22993-c095-a3c8-9aa4-d6a267c87fae"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-2-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".sidebar4_background-layer","selectorGuids":["46f22993-c095-a3c8-9aa4-d6a267c87fb0"]},"value":"none"}},{"id":"a-2-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".sidebar4_close-tablet","selectorGuids":["46f22993-c095-a3c8-9aa4-d6a267c87fae"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1688972151501}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function SidebarDevlink({
  as: _Component = _Builtin.NavbarWrapper,
  disconnectButtonProps = {},

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

  styleDashboard = {},
  styleManage,
  styleCalendar,
  styleBilling,
  styleClub,
  styleSettings,
}) {
  _interactions.useInteractions(_interactionsData);

  return (
    <_Component
      className="sidebar4_component"
      data-w-id="d20ca173-5ba7-cfa1-190a-eb8b49309f52"
      tag="div"
      data-collapse="medium"
      data-animation="default"
      data-duration="400"
      fs-scrolldisable-element="smart-nav"
      wized="sidebar"
      config={{
        collapse: "medium",
        animation: "over-left",
        easing: "ease",
        easing2: "ease",
        duration: 400,
        docHeight: false,
        noScroll: false,
      }}
    >
      <_Builtin.Block className="sidebar4_container" tag="div">
        <_Builtin.Link
          className="sidebar4_logo-link"
          button={false}
          block="inline"
          options={{
            href: "#",
          }}
        >
          <_Builtin.Image
            className="sidebar4_logo"
            loading="lazy"
            width="121"
            height="auto"
            alt=""
            src="https://cdn.prod.website-files.com/64ad6274d8c64f92f123999e/65ecce2be2198cc5718feb67_logo%20-%20club%20manager%202.svg"
          />
        </_Builtin.Link>
        <_Builtin.NavbarMenu
          className="sidebar4_menu"
          tag="nav"
          role="navigation"
        >
          <_Builtin.Block className="sidebar4_menu-wrapper" tag="div">
            <_Builtin.Block className="sidebar4_menu-top" tag="div">
              <_Builtin.Link
                className="sidebar4_link"
                button={false}
                wized-cloak=""
                wized="dashboard_link"
                block="inline"
                options={linkDashboard}
                {...styleDashboard}
              >
                <_Builtin.Block className="sidebar4_link-wrapper" tag="div">
                  <_Builtin.HtmlEmbed
                    className="icon-embed-xxsmall text-color-brand1"
                    value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20x%3D%220%22%20y%3D%220%22%20viewBox%3D%220%200%20512%20512%22%20style%3D%22enable-background%3Anew%200%200%20512%20512%22%20xml%3Aspace%3D%22preserve%22%20class%3D%22%22%3E%3Cg%3E%3Cpath%20d%3D%22M197.332%200h-160C16.746%200%200%2016.746%200%2037.332v96c0%2020.59%2016.746%2037.336%2037.332%2037.336h160c20.59%200%2037.336-16.746%2037.336-37.336v-96C234.668%2016.746%20217.922%200%20197.332%200zM197.332%20213.332h-160C16.746%20213.332%200%20230.078%200%20250.668v224C0%20495.254%2016.746%20512%2037.332%20512h160c20.59%200%2037.336-16.746%2037.336-37.332v-224c0-20.59-16.746-37.336-37.336-37.336zM474.668%20341.332h-160c-20.59%200-37.336%2016.746-37.336%2037.336v96c0%2020.586%2016.746%2037.332%2037.336%2037.332h160C495.254%20512%20512%20495.254%20512%20474.668v-96c0-20.59-16.746-37.336-37.332-37.336zM474.668%200h-160c-20.59%200-37.336%2016.746-37.336%2037.332v224c0%2020.59%2016.746%2037.336%2037.336%2037.336h160c20.586%200%2037.332-16.746%2037.332-37.336v-224C512%2016.746%20495.254%200%20474.668%200zm0%200%22%20fill%3D%22currentColor%22%20opacity%3D%221%22%20class%3D%22%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                  />
                  <_Builtin.Block tag="div">{"Tableau de Bord"}</_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Link>
              <_Builtin.Link
                className="sidebar4_link"
                button={false}
                block="inline"
                options={linkManage}
                {...styleManage}
              >
                <_Builtin.Block className="sidebar4_link-wrapper" tag="div">
                  <_Builtin.HtmlEmbed
                    className="icon-embed-xxsmall text-color-brand1"
                    value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20x%3D%220%22%20y%3D%220%22%20viewBox%3D%220%200%2024%2024%22%20style%3D%22enable-background%3Anew%200%200%20512%20512%22%20xml%3Aspace%3D%22preserve%22%20class%3D%22%22%3E%3Cg%3E%3Cpath%20d%3D%22M17.233%2015.328a4.773%204.773%200%200%200-4.7-4.078h-1.064a4.773%204.773%200%200%200-4.7%204.078l-.51%203.566a.75.75%200%200%200%20.213.636c.2.2%201.427%201.22%205.53%201.22s5.327-1.016%205.53-1.22a.75.75%200%200%200%20.213-.636zM7.56%2011.8a5.7%205.7%200%200%200-1.78%203.39l-.37%202.56c-2.97-.02-3.87-1.1-4.02-1.32a.739.739%200%200%201-.13-.56l.22-1.24a4.093%204.093%200%200%201%206.08-2.83zM22.74%2015.87a.739.739%200%200%201-.13.56c-.15.22-1.05%201.3-4.02%201.32l-.37-2.56a5.7%205.7%200%200%200-1.78-3.39%204.093%204.093%200%200%201%206.08%202.83zM7.73%209.6a2.714%202.714%200%200%201-2.23%201.15A2.75%202.75%200%201%201%207.15%205.8%204.812%204.812%200%200%200%207%207a5.01%205.01%200%200%200%20.73%202.6zM21.25%208a2.748%202.748%200%200%201-2.75%202.75%202.714%202.714%200%200%201-2.23-1.15A5.01%205.01%200%200%200%2017%207a4.812%204.812%200%200%200-.15-1.2%202.75%202.75%200%200%201%204.4%202.2z%22%20fill%3D%22currentColor%22%20opacity%3D%221%22%20class%3D%22%22%2F%3E%3Ccircle%20cx%3D%2212%22%20cy%3D%227%22%20r%3D%223.75%22%20fill%3D%22currentColor%22%20opacity%3D%221%22%20class%3D%22%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                  />
                  <_Builtin.Block tag="div">{"Gestions"}</_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Link>
              <_Builtin.Link
                className="sidebar4_link"
                button={false}
                block="inline"
                options={linkCalendar}
                {...styleCalendar}
              >
                <_Builtin.Block className="sidebar4_link-wrapper" tag="div">
                  <_Builtin.HtmlEmbed
                    className="icon-embed-xxsmall text-color-brand1"
                    value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20x%3D%220%22%20y%3D%220%22%20viewBox%3D%220%200%2034%2034%22%20style%3D%22enable-background%3Anew%200%200%20512%20512%22%20xml%3Aspace%3D%22preserve%22%3E%3Cg%3E%3Cpath%20d%3D%22M29.6%202h-3v3c0%20.6-.5%201-1%201s-1-.4-1-1V2h-16v3c0%20.6-.5%201-1%201s-1-.4-1-1V2h-3C2.1%202%201%203.3%201%205v3.6h32V5c0-1.7-1.8-3-3.4-3zM1%2010.7V29c0%201.8%201.1%203%202.7%203h26c1.6%200%203.4-1.3%203.4-3V10.7zm8.9%2016.8H7.5c-.4%200-.8-.3-.8-.8v-2.5c0-.4.3-.8.8-.8H10c.4%200%20.8.3.8.8v2.5c-.1.5-.4.8-.9.8zm0-9H7.5c-.4%200-.8-.3-.8-.8v-2.5c0-.4.3-.8.8-.8H10c.4%200%20.8.3.8.8v2.5c-.1.5-.4.8-.9.8zm8%209h-2.5c-.4%200-.8-.3-.8-.8v-2.5c0-.4.3-.8.8-.8h2.5c.4%200%20.8.3.8.8v2.5c0%20.5-.3.8-.8.8zm0-9h-2.5c-.4%200-.8-.3-.8-.8v-2.5c0-.4.3-.8.8-.8h2.5c.4%200%20.8.3.8.8v2.5c0%20.5-.3.8-.8.8zm8%209h-2.5c-.4%200-.8-.3-.8-.8v-2.5c0-.4.3-.8.8-.8h2.5c.4%200%20.8.3.8.8v2.5c0%20.5-.3.8-.8.8zm0-9h-2.5c-.4%200-.8-.3-.8-.8v-2.5c0-.4.3-.8.8-.8h2.5c.4%200%20.8.3.8.8v2.5c0%20.5-.3.8-.8.8z%22%20fill%3D%22currentColor%22%20opacity%3D%221%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                  />
                  <_Builtin.Block tag="div">{"Agenda"}</_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Link>
              <_Builtin.Link
                className="sidebar4_link"
                button={false}
                wized-cloak=""
                wized="facturations_link"
                block="inline"
                options={linkBilling}
                {...styleBilling}
              >
                <_Builtin.Block className="sidebar4_link-wrapper" tag="div">
                  <_Builtin.HtmlEmbed
                    className="icon-embed-xxsmall text-color-brand1"
                    value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20width%3D%22auto%22%20height%3D%22auto%22%20x%3D%220%22%20y%3D%220%22%20viewBox%3D%220%200%20416.212%20416%22%20style%3D%22enable-background%3Anew%200%200%20512%20512%22%20xml%3Aspace%3D%22preserve%22%20class%3D%22%22%3E%3Cg%3E%3Cpath%20d%3D%22M234.078%20302.45H0v36.202C.027%20360.457%2016.926%20378.52%2038.684%20380c.464-.066.933-.105%201.402-.11h210.5a62.257%2062.257%200%200%201-16.508-42.273zm0%200%22%20fill%3D%22currentColor%22%20opacity%3D%221%22%20data-original%3D%22%23000000%22%20class%3D%22%22%2F%3E%3Cpath%20d%3D%22m65.566%2026.078-1.75%20256.371h180.262c5.524%200%2010%204.48%2010%2010v45.172c0%2021.766%2017.363%2040.328%2038.676%2042.274h3.41c.547.003%201.094.05%201.633.144%2022.867-.777%2041.004-19.539%2041.008-42.418V29.266a47.735%2047.735%200%200%201%209.933-29.16H91.996c-14.465-.11-26.285%2011.511-26.43%2025.972zm42.82%2042.363h94.712c5.523%200%2010%204.477%2010%2010%200%205.524-4.477%2010-10%2010h-94.711c-5.524%200-10-4.476-10-10%200-5.523%204.476-10%2010-10zm0%2071.5H285.06c5.523%200%2010%204.477%2010%2010%200%205.524-4.477%2010-10%2010H108.387c-5.524%200-10-4.476-10-10%200-5.523%204.476-10%2010-10zm0%2071.5H285.06c5.523%200%2010%204.477%2010%2010%200%205.524-4.477%2010-10%2010H108.387c-5.524%200-10-4.476-10-10%200-5.523%204.476-10%2010-10zM387.508%201.02c-15.719-.106-28.559%2012.527-28.703%2028.246V167.71h57.406V29.266C416.066%2013.546%20403.227.91%20387.508%201.02zm0%200%22%20fill%3D%22currentColor%22%20opacity%3D%221%22%20data-original%3D%22%23000000%22%20class%3D%22%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                  />
                  <_Builtin.Block tag="div">{"Facturations"}</_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Link>
              <_Builtin.Link
                className="sidebar4_link"
                button={false}
                wized-cloak=""
                wized="club_link"
                block="inline"
                options={linkClub}
                {...styleClub}
              >
                <_Builtin.Block className="sidebar4_link-wrapper" tag="div">
                  <_Builtin.HtmlEmbed
                    className="icon-embed-xxsmall text-color-brand1"
                    value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20x%3D%220%22%20y%3D%220%22%20viewBox%3D%220%200%20512%20512%22%20style%3D%22enable-background%3Anew%200%200%20512%20512%22%20xml%3Aspace%3D%22preserve%22%20class%3D%22hovered-paths%22%3E%3Cg%3E%3Cpath%20d%3D%22m498.195%20222.695-.035-.035L289.305%2013.813C280.402%204.905%20268.566%200%20255.977%200c-12.59%200-24.426%204.902-33.332%2013.809L13.898%20222.55c-.07.07-.14.144-.21.215-18.282%2018.386-18.25%2048.218.09%2066.558%208.378%208.383%2019.445%2013.238%2031.277%2013.746.48.047.965.07%201.453.07h8.324v153.7C54.832%20487.254%2079.578%20512%20110%20512h81.71c8.282%200%2015-6.715%2015-15V376.5c0-13.879%2011.29-25.168%2025.169-25.168h48.195c13.88%200%2025.168%2011.29%2025.168%2025.168V497c0%208.285%206.715%2015%2015%2015h81.711c30.422%200%2055.168-24.746%2055.168-55.16v-153.7h7.719c12.586%200%2024.422-4.902%2033.332-13.808%2018.36-18.371%2018.367-48.254.023-66.637zm0%200%22%20fill%3D%22currentColor%22%20opacity%3D%221%22%20data-original%3D%22%23000000%22%20class%3D%22hovered-path%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                  />
                  <_Builtin.Block tag="div">{"Club"}</_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Link>
              <_Builtin.Link
                className="sidebar4_link"
                button={false}
                wized-cloak=""
                wized="settings_link"
                block="inline"
                options={linkSettings}
                {...styleSettings}
              >
                <_Builtin.Block className="sidebar4_link-wrapper" tag="div">
                  <_Builtin.HtmlEmbed
                    className="icon-embed-xxsmall text-color-brand1"
                    value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20x%3D%220%22%20y%3D%220%22%20viewBox%3D%220%200%2032%2032%22%20style%3D%22enable-background%3Anew%200%200%20512%20512%22%20xml%3Aspace%3D%22preserve%22%20class%3D%22hovered-paths%22%3E%3Cg%3E%3Cpath%20d%3D%22M29.21%2011.84a3.92%203.92%200%200%201-3.09-5.3%201.84%201.84%200%200%200-.55-2.07%2014.75%2014.75%200%200%200-4.4-2.55%201.85%201.85%200%200%200-2.09.58%203.91%203.91%200%200%201-6.16%200%201.85%201.85%200%200%200-2.09-.58%2014.82%2014.82%200%200%200-4.1%202.3%201.86%201.86%200%200%200-.58%202.13%203.9%203.9%200%200%201-3.25%205.36%201.85%201.85%200%200%200-1.62%201.49A14.14%2014.14%200%200%200%201%2016a14.32%2014.32%200%200%200%20.19%202.35%201.85%201.85%200%200%200%201.63%201.55A3.9%203.9%200%200%201%206%2025.41a1.82%201.82%200%200%200%20.51%202.18%2014.86%2014.86%200%200%200%204.36%202.51%202%202%200%200%200%20.63.11%201.84%201.84%200%200%200%201.5-.78%203.87%203.87%200%200%201%203.2-1.68%203.92%203.92%200%200%201%203.14%201.58%201.84%201.84%200%200%200%202.16.61%2015%2015%200%200%200%204-2.39%201.85%201.85%200%200%200%20.54-2.11%203.9%203.9%200%200%201%203.13-5.39%201.85%201.85%200%200%200%201.57-1.52A14.5%2014.5%200%200%200%2031%2016a14.35%2014.35%200%200%200-.25-2.67%201.83%201.83%200%200%200-1.54-1.49zM21%2016a5%205%200%201%201-5-5%205%205%200%200%201%205%205z%22%20data-name%3D%22Layer%202%22%20fill%3D%22currentColor%22%20opacity%3D%221%22%20data-original%3D%22%23000000%22%20class%3D%22hovered-path%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                  />
                  <_Builtin.Block tag="div">{"Paramètres"}</_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Link>
              <_Builtin.Link
                className="sidebar4_link"
                button={false}
                wized-cloak=""
                wized="settings_link"
                block="inline"
                options={{
                  href: "#",
                }}
                {...disconnectButtonProps}
              >
                <_Builtin.Block className="sidebar4_link-wrapper" tag="div">
                  <_Builtin.HtmlEmbed
                    className="icon-embed-xxsmall text-color-brand1"
                    value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20x%3D%220%22%20y%3D%220%22%20viewBox%3D%220%200%20512%20512%22%20style%3D%22enable-background%3Anew%200%200%20512%20512%22%20xml%3Aspace%3D%22preserve%22%20class%3D%22%22%3E%3Cg%3E%3Cpath%20fill-rule%3D%22evenodd%22%20d%3D%22M252.326%20430.455v25.516c0%2020.462-10.198%2038.127-27.919%2048.357-8.526%204.922-18.042%207.668-27.908%207.673-9.875.005-19.388-2.746-27.92-7.673L55.123%20438.824c-17.723-10.232-27.919-27.892-27.919-48.357V55.838C27.204%2025.047%2052.252%200%2083.042%200h249.871c30.792%200%2055.842%2025.045%2055.842%2055.838v70.539c0%2010.119-8.216%2018.335-18.335%2018.335-10.122%200-18.331-8.215-18.331-18.335V55.838c0-10.573-8.603-19.176-19.176-19.176H113.961l110.446%2063.777c17.715%2010.23%2027.919%2027.89%2027.919%2048.347v245.003h80.587c10.572%200%2019.176-8.598%2019.176-19.172v-61.836c0-10.126%208.204-18.335%2018.331-18.335%2010.123%200%2018.335%208.211%2018.335%2018.335v61.836c0%2030.793-25.05%2055.838-55.842%2055.838zm169.883-196.897-20.191%2020.191c-7.159%207.159-7.157%2018.765%200%2025.925a18.28%2018.28%200%200%200%2012.963%205.364%2018.27%2018.27%200%200%200%2012.968-5.364l51.479-51.488c7.157-7.158%207.158-18.758%200-25.916l-51.479-51.48c-7.16-7.16-18.767-7.157-25.93-.001-7.157%207.152-7.155%2018.763%200%2025.917l20.19%2020.186h-135.26c-10.129%200-18.331%208.208-18.331%2018.336s8.203%2018.331%2018.331%2018.331h135.26z%22%20clip-rule%3D%22evenodd%22%20fill%3D%22currentColor%22%20opacity%3D%221%22%20data-original%3D%22%23000000%22%20class%3D%22%22%3E%3C%2Fpath%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                  />
                  <_Builtin.Block tag="div">{"Se déconnecter"}</_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Link>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.NavbarMenu>
        <_Builtin.NavbarButton className="sidebar4_menu-button" tag="div">
          <_Builtin.Block className="menu-icon is-left" tag="div">
            <_Builtin.Block className="menu-icon_line-top" tag="div" />
            <_Builtin.Block className="menu-icon_line-middle" tag="div">
              <_Builtin.Block
                className="menu-icon_line-middle-inner"
                tag="div"
              />
            </_Builtin.Block>
            <_Builtin.Block className="menu-icon_line-bottom" tag="div" />
          </_Builtin.Block>
        </_Builtin.NavbarButton>
      </_Builtin.Block>
    </_Component>
  );
}
