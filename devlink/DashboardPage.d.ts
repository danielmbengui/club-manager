import * as React from "react";
import * as Types from "./types";

declare function DashboardPage(props: {
  as?: React.ElementType;
  titlePage?: React.ReactNode;
  clubName?: React.ReactNode;
  clubLogo?: Types.Asset.Image;
  disconnectButtonProps?: Types.Devlink.RuntimeProps;
  styleDashboard?: Types.Devlink.RuntimeProps;
  linkDashboard?: Types.Basic.Link;
  linkManage?: Types.Basic.Link;
  linkCalendar?: Types.Basic.Link;
  linkBilling?: Types.Basic.Link;
  linkClub?: Types.Basic.Link;
  linkSettings?: Types.Basic.Link;
  loader?: Types.Devlink.Slot;
  componentMonth?: Types.Devlink.Slot;
  componentYear?: Types.Devlink.Slot;
  nBookingsPlayPad?: React.ReactNode;
  nBookingsTotal?: React.ReactNode;
  revenuesTotal?: React.ReactNode;
  rateBookingPlayPad?: React.ReactNode;
  componentProgress?: Types.Devlink.Slot;
  isLoading?: Types.Visibility.VisibilityConditions;
  isNotLoading?: Types.Visibility.VisibilityConditions;
  nBookingslub?: React.ReactNode;
  revenuesClub?: React.ReactNode;
  revenuesPlayPad?: React.ReactNode;
  componentSite?: Types.Devlink.Slot;
  componentCourts?: Types.Devlink.Slot;
  revenuesTotalSite?: React.ReactNode;
  revenuesTotalCourt?: React.ReactNode;
  componentChartRateBooking?: Types.Devlink.Slot;
  componentChartRateHour?: Types.Devlink.Slot;
  componentChartRateTotal?: Types.Devlink.Slot;
  componentDays?: Types.Devlink.Slot;
  componentChartRevenues?: Types.Devlink.Slot;
  componentCardStats?: Types.Devlink.Slot;
  componentChartCountBySite?: Types.Devlink.Slot;
  componentChartCountCourt?: Types.Devlink.Slot;
  componentChartCountByCourt?: Types.Devlink.Slot;
}): React.JSX.Element;
