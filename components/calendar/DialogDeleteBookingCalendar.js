import React, { useEffect, useState } from "react";
import { DialogDeleteBooking } from "@/devlink";
import { CircularProgress } from "@mui/material";
import { getFirestoreSubData, getFirestoreSubRef } from "@/functions/manage-firestore";
import { deleteDoc, getDoc } from "firebase/firestore";
import { getOneBookingCalendar } from "@/functions/bookings";
import { getFirstAndLastHourCourt } from "@/functions/courts";
import { deleteSmartPadelBooking } from "@/functions/smartpadel";
export default function DialogDeleteBookingCalendar({ club, booking = null, isVisible = true, setIsVisible, setIsReseting, setShowDialogReset, setShowDialogBooking, setSelectedBooking }) {
    const [showDialog, setShowDialog] = useState(isVisible);
    const [isDeleting, setIsDeleting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [messageSuccess, setMessageSuccess] = useState("");
    const [isError, setIsError] = useState(false);
    const [messageError, setMessageError] = useState("");
    useEffect(() => {
        if (isVisible) {
            init();
        }
        setShowDialog(isVisible);
    }, [isVisible]);
    function init() {
        setIsDeleting(false);
        setIsSuccess(false);
        setIsError(false);
        setMessageError("");
    }
    function handleClose() {
        //alert("close delete booking");
        init();
        setIsVisible(false);
        setIsReseting(false);
    }
    const deleteBooking = async () => {
        setIsDeleting(true);
        setIsSuccess(false);
        setIsError(false);
        setMessageError("");
        if (booking) {
            const collectionName = "COURT_BOOKINGS";
            const bookingRef = await getFirestoreSubRef(club.uid, "CLUBS", booking.uid, collectionName);
            var bookingSnap = await getDoc(bookingRef);
            var bookingData = getOneBookingCalendar(bookingSnap, booking.is_pending);
            //const courtRef = await getFirestoreSubRef(clubUid, "CLUBS", booking.court_uid, "COURTS");
            const courtData = await getFirestoreSubData(club.uid, "CLUBS", booking.court_uid, "COURTS");
            //const { first_time, last_time } = getFirstAndLastHourCourt(courtData);
            //alert(`delete booking ${courtData.enabled_qr_code ? "true" : "false"}`);
            var is_error = false;
            var message = "";
            if (courtData.enabled_qr_code) {
                const response = await deleteSmartPadelBooking(club, courtData, bookingData);
                is_error = response.is_error;
                message = response.message;
            }
            if (!is_error) {
                await deleteDoc(bookingRef);
                setIsSuccess(true);
                setMessageSuccess(message);
            } else {
                setIsError(true);
                setMessageError(message);
            }
        }
        // Ajout de la fonction onClick ici
        setIsReseting(true);
        setIsDeleting(false);
    }
    const continueDelete = () => {
        setIsVisible(false);
        setShowDialogReset(false);
        setShowDialogBooking(false);
        setShowDialogBooking(false);
        setSelectedBooking(null);
        setIsReseting(false);
    }
    return (<DialogDeleteBooking
        //messageWarning={booking ? booking.uid : "Nothing"}
        isSuccessDeleting={isSuccess}
        //messageSuccess={"wesh"}
        componentProgress={<CircularProgress color="primary" size={'20px'} />}
        //messageWait={"wesh"}
        isErrorDeleting={isError}
        messageError={messageError}
        showButtons={!isError && !isSuccess && !isDeleting}
        isDeleting={isDeleting}
        textRemove={"Supprimer"}
        deleteBooking={{
            onClick: async () => {
                //alert("delete booking");
                deleteBooking();
                //setShowDialog(false);
                //setShowDialogReset(false);
                //setShowDialogReset(true);
                // Ajout de la fonction onClick ici
                //init();
            },
        }}
        textCancel={"Annuler"}
        close={{
            onClick: () => handleClose(),
        }}
        textContinue={"Continuer"}
        continueProcess={{
            onClick: async () => {
                //alert("continue delete booking");
                continueDelete();
                //setShowDialog(false);
                // Ajout de la fonction onClick ici
            },
        }}
        style={{
            style: {
                display: showDialog ? 'flex' : 'none',
            }
        }}
    />)
}