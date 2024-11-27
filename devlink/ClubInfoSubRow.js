"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function ClubInfoSubRow({
  as: _Component = _Builtin.Block,
  timeName = "1h",
  priceValue = "CHF 52.00",
  intervalTime = "14h-17h",
  extraPriceValue = "CHF 46.00",
}) {
  return (
    <_Component className="sub-row" tag="div">
      <_Builtin.Block
        className="settings_label devlink sub"
        tag="div"
        wized="price_name"
      >
        {intervalTime}
      </_Builtin.Block>
      <_Builtin.Block className="devlink sub" tag="div" wized="price_value">
        {extraPriceValue}
      </_Builtin.Block>
    </_Component>
  );
}
