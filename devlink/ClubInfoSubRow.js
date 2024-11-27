"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function ClubInfoSubRow({
  as: _Component = _Builtin.Block,
  intervalTime = "14h-17h",
  extraPriceValue = "CHF 46.00",
  standardExtraPriceList,
  hasExtraPrice = true,
}) {
  return (
    <_Component className="sub-row" tag="div">
      <_Builtin.Block className="div-block-42" tag="div">
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
      </_Builtin.Block>
      {hasExtraPrice ? (
        <_Builtin.Block className="subrow-list-price-devlink sub-sub" tag="div">
          {standardExtraPriceList}
        </_Builtin.Block>
      ) : null}
    </_Component>
  );
}
