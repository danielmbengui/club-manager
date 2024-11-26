"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function ButtonRed({
  as: _Component = _Builtin.Block,
  text = "Annuler",
  action,
}) {
  return (
    <_Component
      className="button is-xsmall update all-data final red"
      tag="div"
      {...action}
    >
      <_Builtin.Block className="text-block-13 red" tag="div">
        {text}
      </_Builtin.Block>
    </_Component>
  );
}
