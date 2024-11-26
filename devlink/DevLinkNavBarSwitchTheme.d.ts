import * as React from "react";
import * as Types from "./types";

declare function DevLinkNavBarSwitchTheme(props: {
  as?: React.ElementType;
  clubLogo?: Types.Asset.Image;
  clubName?: React.ReactNode;
  componentSwitch?: Types.Devlink.Slot;
  componentLogoClub?: Types.Devlink.Slot;
}): React.JSX.Element;
