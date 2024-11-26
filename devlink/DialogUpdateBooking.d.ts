import * as React from "react";
import * as Types from "./types";

declare function DialogUpdateBooking(props: {
  as?: React.ElementType;
  editable?: Types.Visibility.VisibilityConditions;
  isWebAppBooking?: Types.Visibility.VisibilityConditions;
  styleDialogEditBooking?: Types.Devlink.RuntimeProps;
  close?: Types.Devlink.RuntimeProps;
  bookingUid?: React.ReactNode;
  transactionUid?: React.ReactNode;
  accessCode?: React.ReactNode;
  notEditable?: Types.Visibility.VisibilityConditions;
  clientName?: React.ReactNode;
  clientPhone?: React.ReactNode;
  clientEmail?: React.ReactNode;
  bookingType?: React.ReactNode;
  bookingCourt?: React.ReactNode;
  bookingSite?: React.ReactNode;
  bookingMatchDate?: React.ReactNode;
  bookingDuration?: React.ReactNode;
  bookingDescription?: React.ReactNode;
  bookingCreatedDate?: React.ReactNode;
  hasTransaction?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
