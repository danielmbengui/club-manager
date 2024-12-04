import * as React from "react";
import * as Types from "./types";

declare function DialogDeleteBooking(props: {
  as?: React.ElementType;
  componentProgress?: Types.Devlink.Slot;
  isDeleting?: Types.Visibility.VisibilityConditions;
  isSuccessDeleting?: Types.Visibility.VisibilityConditions;
  deleteBooking?: Types.Devlink.RuntimeProps;
<<<<<<< HEAD
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
  closeBooking?: Types.Devlink.RuntimeProps;
  continueProcess?: Types.Devlink.RuntimeProps;
  style?: Types.Devlink.RuntimeProps;
=======
  styleDialogDelete?: Types.Devlink.RuntimeProps;
  close?: Types.Devlink.RuntimeProps;
  isErrorDeleting?: Types.Visibility.VisibilityConditions;
>>>>>>> bb43e94 (add dialog delete booking)
}): React.JSX.Element;
