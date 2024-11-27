"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function ButtonPrimary({
  as: _Component = _Builtin.Block,
  action,
  text = "Actualiser",
  isNotWarning = true,
}) {
  return isNotWarning ? (
    <_Component
      className="button is-xsmall update all-data final"
      tag="div"
      {...action}
    >
      <_Builtin.Block className="text-block-13" tag="div">
        {text}
      </_Builtin.Block>
    </_Component>
  ) : null;
}
