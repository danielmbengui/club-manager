import * as React from "react";
import * as Types from "./types";

declare function CalendarPage(props: {
  as?: React.ElementType;
  titlePage?: React.ReactNode;
  clubName?: React.ReactNode;
  clubLogo?: Types.Asset.Image;
  disconnectButtonProps?: Types.Devlink.RuntimeProps;
  linkDashboard?: Types.Basic.Link;
  linkManage?: Types.Basic.Link;
  linkCalendar?: Types.Basic.Link;
  linkBilling?: Types.Basic.Link;
  linkClub?: Types.Basic.Link;
  linkSettings?: Types.Basic.Link;
  styleCalendar?: Types.Devlink.RuntimeProps;
  componentCalendar?: Types.Devlink.Slot;
  componentSwitch?: Types.Devlink.Slot;
  componentLogoClub?: Types.Devlink.Slot;
  isLoading?: Types.Visibility.VisibilityConditions;
  componentProgress?: Types.Devlink.Slot;
  isNotLoading?: Types.Visibility.VisibilityConditions;
  componentSite?: Types.Devlink.Slot;
  componentCourts?: Types.Devlink.Slot;
  actionUpdate?: Types.Devlink.RuntimeProps;
  nBookings?: React.ReactNode;
  nPendingBookings?: React.ReactNode;
  editable?: Types.Visibility.VisibilityConditions;
  closeDialogUpdateBooking?: Types.Devlink.RuntimeProps;
  styleDialogEditBooking?: Types.Devlink.RuntimeProps;
  isWebAppBooking?: Types.Visibility.VisibilityConditions;
  transactionUid?: React.ReactNode;
  bookingUid?: React.ReactNode;
  accessCode?: React.ReactNode;
  clientName?: React.ReactNode;
  clientPhone?: React.ReactNode;
  clientEmail?: React.ReactNode;
  hasTransaction?: Types.Visibility.VisibilityConditions;
  bookingType?: React.ReactNode;
  bookingCourt?: React.ReactNode;
  bookingSite?: React.ReactNode;
  bookingMatchDate?: React.ReactNode;
  bookingDuration?: React.ReactNode;
  bookingDescription?: React.ReactNode;
  bookingCreatedDate?: React.ReactNode;
  notEditable?: Types.Visibility.VisibilityConditions;
  paymentProvider?: React.ReactNode;
  refNo?: React.ReactNode;
  paymentDate?: React.ReactNode;
  walletUsedAmount?: React.ReactNode;
  cardUsedAmount?: React.ReactNode;
  totalAmount?: React.ReactNode;
  removable?: Types.Visibility.VisibilityConditions;
  isLoadingUpdateBooking?: Types.Visibility.VisibilityConditions;
  isNotLoadingUpdateBooking?: Types.Visibility.VisibilityConditions;
  componentProgressUpdateBooking?: Types.Devlink.Slot;
  isError?: Types.Visibility.VisibilityConditions;
  isSuccess?: Types.Visibility.VisibilityConditions;
  errorMessage?: React.ReactNode;
  successMessage?: React.ReactNode;
  waitMessage?: React.ReactNode;
  isWarning?: Types.Visibility.VisibilityConditions;
  warningMessage?: React.ReactNode;
  isNotWarning?: Types.Visibility.VisibilityConditions;
  actionResetDialogUpdate?: Types.Devlink.RuntimeProps;
  updateBooking?: Types.Devlink.RuntimeProps;
  inputDate?: Types.Devlink.Slot;
  selectStartHour?: Types.Devlink.Slot;
  selectEndHour?: Types.Devlink.Slot;
  selectTypeBooking?: Types.Devlink.Slot;
  textFieldDescription?: Types.Devlink.Slot;
  selectDuration?: Types.Devlink.Slot;
  isEditing?: Types.Visibility.VisibilityConditions;
  isDifferentDatas?: Types.Visibility.VisibilityConditions;
  isDisabled?: Types.Visibility.VisibilityConditions;
  isNotDisabled?: Types.Visibility.VisibilityConditions;
  isReseting?: Types.Visibility.VisibilityConditions;
  openResetingDialog?: Types.Devlink.RuntimeProps;
  styleDialogResetBooking?: Types.Devlink.RuntimeProps;
  closeResetingDialog?: Types.Devlink.RuntimeProps;
  isLoadingReset?: Types.Visibility.VisibilityConditions;
  isDeleting?: Types.Visibility.VisibilityConditions;
  isSuccessDeleting?: Types.Visibility.VisibilityConditions;
  deleteBooking?: Types.Devlink.RuntimeProps;
  styleDialogDelete?: Types.Devlink.RuntimeProps;
  closeDialogDelete?: Types.Devlink.RuntimeProps;
  openDialogDelete?: Types.Devlink.RuntimeProps;
  isErrorDeleting?: Types.Visibility.VisibilityConditions;
  messageErrorDeleting?: React.ReactNode;
  showButtonsDialogDelete?: Types.Visibility.VisibilityConditions;
  closeAllDialogs?: Types.Devlink.RuntimeProps;
}): React.JSX.Element;
