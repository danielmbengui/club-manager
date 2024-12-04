import * as React from "react";
import * as Types from "./types";

declare function DialogDeleteBooking(props: {
  as?: React.ElementType;
  componentProgress?: Types.Devlink.Slot;
  isDeleting?: Types.Visibility.VisibilityConditions;
  isSuccessDeleting?: Types.Visibility.VisibilityConditions;
  deleteBooking?: Types.Devlink.RuntimeProps;
  styleDialogDelete?: Types.Devlink.RuntimeProps;
  close?: Types.Devlink.RuntimeProps;
  isErrorDeleting?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
