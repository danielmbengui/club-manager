import React, { useEffect, useState } from "react";
import { DialogDeleteBooking } from "@/devlink";
import { CircularProgress } from "@mui/material";
export default function DialogDelete({ isVisible = true, setIsVisible }) {
    const [showDialog, setShowDialog] = useState(true);
    const [isDeleting, setIsDeleting] = useState(true);
    const [isSuccess, setIsSuccess] = useState(true);
    const [isError, setIsError] = useState(true);
    const [messageError, setMessageError] = useState("wesh");
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
        alert("close delete booking");
        init();
        setIsVisible(false);
    }
    return (<DialogDeleteBooking
        messageWarning={"wesh"}
        isSuccessDeleting={isSuccess}
        messageSuccess={"wesh"}
        componentProgress={<CircularProgress color="primary" size={'20px'} />}
        messageWait={"wesh"}
        isErrorDeleting={isError}
        messageError={messageError}
        showButtons={true}
        isDeleting={isDeleting}
        textRemove={"wesh"}
        deleteBooking={{
            onClick: async () => {
                alert("delete booking");
                //setShowDialog(false);
                //setShowDialogReset(false);
                //setShowDialogReset(true);
                // Ajout de la fonction onClick ici
                //init();
            },
        }}
        textCancel={"cancel"}
        close={{
            onClick: () => handleClose(),
        }}
        textContinue={"continue"}
        continueProcess={{
            onClick: async () => {
                alert("continue delete booking");
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