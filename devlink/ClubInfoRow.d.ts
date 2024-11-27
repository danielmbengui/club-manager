import * as React from "react";
import * as Types from "./types";

declare function ClubInfoRow(props: {
  as?: React.ElementType;
  timeName?: React.ReactNode;
  priceValue?: React.ReactNode;
  intervalTime?: React.ReactNode;
  extraPriceValue?: React.ReactNode;
  standardExtraPriceList?: Types.Devlink.Slot;
  hasExtraPrice?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
