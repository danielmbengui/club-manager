import * as React from "react";
import * as Types from "./types";

declare function DialogUpdateSettings(props: {
  as?: React.ElementType;
  componentProgress?: Types.Devlink.Slot;
  isLoading?: Types.Visibility.VisibilityConditions;
  componentHoursLimitDays?: Types.Devlink.Slot;
  componentMinutesLimitDays?: Types.Devlink.Slot;
  componentLimitDays?: Types.Devlink.Slot;
  componentLimitHoursBeforeBooking?: Types.Devlink.Slot;
  componentLimitMinutesBeforeBooking?: Types.Devlink.Slot;
  componentLimitMinutesBeforeCancel?: Types.Devlink.Slot;
  componentLimitHoursBeforeCancel?: Types.Devlink.Slot;
  componentLimitActivesBookings?: Types.Devlink.Slot;
  componentLimitDaysBeforeCancel?: Types.Devlink.Slot;
  isError?: Types.Visibility.VisibilityConditions;
  isSuccess?: Types.Visibility.VisibilityConditions;
  isEditing?: Types.Visibility.VisibilityConditions;
  actionCancel?: Types.Devlink.RuntimeProps;
  actionEdit?: Types.Devlink.RuntimeProps;
  isWarning?: Types.Visibility.VisibilityConditions;
  isNotWarning?: Types.Visibility.VisibilityConditions;
  text?: React.ReactNode;
  warningText?: React.ReactNode;
}): React.JSX.Element;
