import * as React from "react";
import * as Types from "./types";

declare function SidebarDevlink(props: {
  as?: React.ElementType;
  disconnectButtonProps?: Types.Devlink.RuntimeProps;
  linkDashboard?: Types.Basic.Link;
  linkManage?: Types.Basic.Link;
  linkCalendar?: Types.Basic.Link;
  linkBilling?: Types.Basic.Link;
  linkClub?: Types.Basic.Link;
  linkSettings?: Types.Basic.Link;
  styleDashboard?: Types.Devlink.RuntimeProps;
  styleManage?: Types.Devlink.RuntimeProps;
  styleCalendar?: Types.Devlink.RuntimeProps;
  styleBilling?: Types.Devlink.RuntimeProps;
  styleClub?: Types.Devlink.RuntimeProps;
  styleSettings?: Types.Devlink.RuntimeProps;
}): React.JSX.Element;
