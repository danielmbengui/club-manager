"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function ButtonPrimaryWithIcon({ as: _Component = _Builtin.Link }) {
  return (
    <_Component
      className="button is-icon is-tiny devlink"
      button={false}
      wized="court_button"
      block="inline"
      options={{
        href: "#",
      }}
    >
      <_Builtin.Block tag="div" wized="court_name">
        {"Terrain"}
      </_Builtin.Block>
      <_Builtin.HtmlEmbed
        className="icon-1x1-small _90-rotate"
        value="%3Csvg%20width%3D%22auto%22%20height%3D%22auto%22%20viewBox%3D%220%200%2011%2013%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M0%200.464286L0%2012.5357C0%2012.6589%200.0643849%2012.7769%200.17899%2012.864C0.293596%2012.9511%200.449034%2013%200.611111%2013H10.3889C10.551%2013%2010.7064%2012.9511%2010.821%2012.864C10.9356%2012.7769%2011%2012.6589%2011%2012.5357L11%200.464286C11%200.34115%2010.9356%200.223057%2010.821%200.135986C10.7064%200.0489159%2010.551%200%2010.3889%200H0.611111C0.449034%200%200.293596%200.0489159%200.17899%200.135986C0.0643849%200.223057%200%200.34115%200%200.464286ZM1.22222%204.17857H4.88889L4.88889%208.82143H1.22222L1.22222%204.17857ZM1.22222%2012.0714L1.22222%209.75H9.77778V12.0714H1.22222ZM9.77778%208.82143H6.11111L6.11111%204.17857H9.77778V8.82143ZM9.77778%200.928572V3.25H1.22222L1.22222%200.928572H9.77778Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
      />
    </_Component>
  );
}
