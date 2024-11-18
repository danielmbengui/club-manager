import * as React from "react";
import * as Types from "./types";

declare function LoginPage(props: {
  as?: React.ElementType;
  buttonConnectProps?: Types.Devlink.RuntimeProps;
  inputEmailProps?: Types.Devlink.RuntimeProps;
  inputPasswordProps?: Types.Devlink.RuntimeProps;
  errorMessage?: React.ReactNode;
  copyrightPlayPad?: React.ReactNode;
  showError?: Types.Visibility.VisibilityConditions;
  onSubmitForm?: Types.Devlink.RuntimeProps;
}): React.JSX.Element;
