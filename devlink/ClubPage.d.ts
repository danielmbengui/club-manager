import * as React from "react";
import * as Types from "./types";

declare function ClubPage(props: {
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
  styleClub?: Types.Devlink.RuntimeProps;
}): React.JSX.Element;
