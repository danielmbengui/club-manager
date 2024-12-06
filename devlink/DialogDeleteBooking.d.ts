import * as React from "react";
import * as Types from "./types";

declare function DialogDeleteBooking(props: {
  as?: React.ElementType;
  componentProgress?: Types.Devlink.Slot;
  isDeleting?: Types.Visibility.VisibilityConditions;
  isSuccessDeleting?: Types.Visibility.VisibilityConditions;
  deleteBooking?: Types.Devlink.RuntimeProps;
  close?: Types.Devlink.RuntimeProps;
  isErrorDeleting?: Types.Visibility.VisibilityConditions;
  messageError?: React.ReactNode;
  showButtons?: Types.Visibility.VisibilityConditions;
  messageWarning?: React.ReactNode;
  messageSuccess?: React.ReactNode;
  messageWait?: React.ReactNode;
  textRemove?: React.ReactNode;
  textCancel?: React.ReactNode;
  textContinue?: React.ReactNode;
  continueProcess?: Types.Devlink.RuntimeProps;
  style?: Types.Devlink.RuntimeProps;
}): React.JSX.Element;
