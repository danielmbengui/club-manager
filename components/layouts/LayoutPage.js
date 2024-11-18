"use client";
import React from "react";
import * as _Builtin from "@/devlink/_Builtin";
import { NavigationComponent } from "@/components/navigation/NavigationComponent";
import { MenuComponent } from "@/components/navigation/MenuComponent";

export function LayoutPage({ as: _Component = _Builtin.Block, title, component }) {
  return (
    <_Component className="page-wrapper gallery-page" tag="div">
      <_Builtin.Block className="main-wrapper-buy-page" tag="div">
        <_Builtin.Block className="container gallery" tag="div">
          <NavigationComponent />
          <_Builtin.Block className="main-wrapper" tag="div">
            <MenuComponent title={title} />
            {
                component
            }
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}

