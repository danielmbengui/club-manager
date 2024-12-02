import * as React from "react";
import * as Types from "./types";

declare function DialogResetBooking(props: {
  as?: React.ElementType;
  actionReset?: Types.Devlink.RuntimeProps;
  styleDialogResetBooking?: Types.Devlink.RuntimeProps;
  close?: Types.Devlink.RuntimeProps;
  isLoading?: Types.Visibility.VisibilityConditions;
  componentProgress?: Types.Devlink.Slot;
}): React.JSX.Element;
