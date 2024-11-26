import * as React from "react";
import * as Types from "./types";

declare function ClubPage(props: {
  as?: React.ElementType;
  titlePage?: React.ReactNode;
  clubName?: React.ReactNode;
  disconnectButtonProps?: Types.Devlink.RuntimeProps;
  linkDashboard?: Types.Basic.Link;
  linkManage?: Types.Basic.Link;
  linkCalendar?: Types.Basic.Link;
  linkBilling?: Types.Basic.Link;
  linkClub?: Types.Basic.Link;
  linkSettings?: Types.Basic.Link;
  styleClub?: Types.Devlink.RuntimeProps;
  street?: React.ReactNode;
  street1?: React.ReactNode;
  hasStreet1?: Types.Visibility.VisibilityConditions;
  zipCode?: React.ReactNode;
  city?: React.ReactNode;
  country?: React.ReactNode;
  email?: React.ReactNode;
  phone?: React.ReactNode;
  website?: React.ReactNode;
  componentSwitch?: Types.Devlink.Slot;
  componentLogoClub?: Types.Devlink.Slot;
}): React.JSX.Element;
