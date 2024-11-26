import * as React from "react";
import * as Types from "./types";

declare function ButtonPrimary(props: {
  as?: React.ElementType;
  action?: Types.Devlink.RuntimeProps;
  text?: React.ReactNode;
  isNotWarning?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
