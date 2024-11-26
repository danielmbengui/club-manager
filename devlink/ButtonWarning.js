"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function ButtonWarning({
  as: _Component = _Builtin.Block,
  text = "Continuer",
  action,
}) {
  return (
    <_Component
      className="button is-xsmall update all-data final warning"
      tag="div"
      {...action}
    >
      <_Builtin.Block className="text-block-13" tag="div">
        {text}
      </_Builtin.Block>
    </_Component>
  );
}
