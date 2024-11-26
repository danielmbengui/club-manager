"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function ButtonSecondary({
  as: _Component = _Builtin.Block,
  action,
  text = "Infos",
}) {
  return (
    <_Component
      className="button is-xsmall update all-data final secondary"
      tag="div"
      {...action}
    >
      <_Builtin.Block tag="div">{text}</_Builtin.Block>
    </_Component>
  );
}
