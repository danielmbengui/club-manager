"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function ButtonDisabled({
  as: _Component = _Builtin.Block,
  isWarning = true,
  text = "Enregistrer",
}) {
  return isWarning ? (
    <_Component
      className="button is-xsmall update all-data final disabled"
      tag="div"
    >
      <_Builtin.Block className="text-block-13" tag="div">
        {text}
      </_Builtin.Block>
    </_Component>
  ) : null;
}
