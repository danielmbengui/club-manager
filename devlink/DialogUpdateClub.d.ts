import * as React from "react";
import * as Types from "./types";

declare function DialogUpdateClub(props: {
  as?: React.ElementType;
  textfieldClubName?: Types.Devlink.Slot;
  textfieldClubPhone?: Types.Devlink.Slot;
  textfieldClubMail?: Types.Devlink.Slot;
  textfieldClubWebsite?: Types.Devlink.Slot;
  isEditing?: Types.Visibility.VisibilityConditions;
  isLoading?: Types.Visibility.VisibilityConditions;
  isSuccess?: Types.Visibility.VisibilityConditions;
  isError?: Types.Visibility.VisibilityConditions;
  textfieldClubAddress?: Types.Devlink.Slot;
}): React.JSX.Element;
