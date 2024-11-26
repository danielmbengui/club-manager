import * as React from "react";
import * as Types from "./types";

declare function ButtonDisabled(props: {
  as?: React.ElementType;
  isWarning?: Types.Visibility.VisibilityConditions;
  text?: React.ReactNode;
}): React.JSX.Element;
