import * as React from "react";
import * as Types from "./types";

declare function SettingsPage(props: {
  as?: React.ElementType;
  titlePage?: React.ReactNode;
  clubName?: React.ReactNode;
  clubLogo?: Types.Asset.Image;
  disconnectButtonProps?: Types.Devlink.RuntimeProps;
  linkDashboard?: Types.Basic.Link;
  linkManage?: Types.Basic.Link;
  linkCalendar?: Types.Basic.Link;
  linkBilling?: Types.Basic.Link;
  linkClub?: Types.Basic.Link;
  linkSettings?: Types.Basic.Link;
  styleSettings?: Types.Devlink.RuntimeProps;
  limitDaysBookings?: React.ReactNode;
  limitHoursBeforeBooking?: React.ReactNode;
  limitHoursBeforeCancel?: React.ReactNode;
  limitActivesBookings?: React.ReactNode;
  inputLimitDaysBookingsProps?: Types.Devlink.RuntimeProps;
  loader?: Types.Devlink.Slot;
}): React.JSX.Element;
