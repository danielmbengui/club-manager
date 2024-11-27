import * as React from "react";
import * as Types from "./types";

declare function ClubInfoSubRow(props: {
  as?: React.ElementType;
  intervalTime?: React.ReactNode;
  extraPriceValue?: React.ReactNode;
  standardExtraPriceList?: Types.Devlink.Slot;
  hasExtraPrice?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
