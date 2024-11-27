"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function ClubInfoRow({
  as: _Component = _Builtin.Block,
  timeName = "1h",
  priceValue = "CHF 52.00",
  intervalTime = "14h-17h",
  extraPriceValue = "CHF 46.00",
  standardExtraPriceList,
}) {
  return (
    <_Component
      className="clubinfo_row devlink"
      tag="div"
      wized="pricing_list_item"
      wized-cloak=""
    >
      <_Builtin.Block className="div-block-41" tag="div">
        <_Builtin.Block
          className="settings_label devlink"
          tag="div"
          wized="price_name"
        >
          {timeName}
        </_Builtin.Block>
        <_Builtin.Block className="devlink" tag="div" wized="price_value">
          {priceValue}
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block className="subrow-list-price-devlink" tag="div">
        {standardExtraPriceList}
      </_Builtin.Block>
    </_Component>
  );
}
