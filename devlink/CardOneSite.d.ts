import * as React from "react";
import * as Types from "./types";

declare function CardOneSite(props: {
  as?: React.ElementType;
  siteName?: React.ReactNode;
  imageSite?: Types.Asset.Image;
  addressSite?: React.ReactNode;
  nCourts?: React.ReactNode;
}): React.JSX.Element;
