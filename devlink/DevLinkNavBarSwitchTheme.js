"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function DevLinkNavBarSwitchTheme({
  as: _Component = _Builtin.Block,
  clubLogo = "https://cdn.prod.website-files.com/64ad6274d8c64f92f123999e/65da7ead8c280d989d9bd5d3_ball-logo.png",
  clubName = "PlayPad Test",
  componentSwitch,
  componentLogoClub,
}) {
  return (
    <_Component
      className="topbar3_content-right devlink"
      id="w-node-_311d9394-2d14-8483-ffc6-fc4bc24d2486-c24d2486"
      tag="div"
      wized="topbar"
    >
      <_Builtin.Block className="topbar3_text-wrapper devlink" tag="div">
        <_Builtin.Block className="div-block-36" tag="div">
          <_Builtin.Block className="div-block-37" tag="div">
            {componentLogoClub}
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className="text-block-12"
          tag="div"
          wized="topbar_club_name"
          wized-cloak=""
        >
          {clubName}
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block className="div-block-switch-theme" tag="div">
        <_Builtin.Block className="div-block-35" tag="div">
          {componentSwitch}
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
