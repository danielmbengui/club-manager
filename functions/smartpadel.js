import { LINK_API_QR_PROVIDER, LINK_API_SMART_PADEL_CREATE_BOOKING, LINK_API_SMART_PADEL_DELETE_BOOKING, LINK_API_SMART_PADEL_GET_BOOKING } from "@/constants";
import axios from "axios";

export const getSmartPadelApiKey = async (clubUid, courtUid, provider) => {
    try {
        const response = await axios.get(LINK_API_QR_PROVIDER, {
            params: {
                provider,
                courtUid,
                clubUid,
                //provider:'smartpadel',
                //courtUid:'1z75sPYrBFrAFrkAZH5K',
                //clubUid:'VLSJINHIeATv4nVi7O4Y',

            }, // Paramètres GET
        });
        return response.data.apiKey;
    } catch (err) {
        console.error('Erreur lors de l\'appel de l\'API :', err);
        return null;
    }
};
export const getSmartPadelCreateUrl = async (clubUid, courtUid, provider) => {
    try {
        const response = await axios.get(LINK_API_QR_PROVIDER, {
            params: {
                provider,
                courtUid,
                clubUid,
                //provider:'smartpadel',
                //courtUid:'1z75sPYrBFrAFrkAZH5K',
                //clubUid:'VLSJINHIeATv4nVi7O4Y',

            }, // Paramètres GET
        });
        return response.data.createUrl;
    } catch (err) {
        console.error('Erreur lors de l\'appel de l\'API :', err);
        return null;
    }
};

export const createSmartPadelBooking = async (clubData, courtData, bookingData) => {
    try {
        const { match_start_date_D, match_finished_date_D } = bookingData;
        const response = await axios.post(
            LINK_API_SMART_PADEL_CREATE_BOOKING, // URL complète
            {
                bookingUid: bookingData.uid,
                clubUid: clubData.uid,
                courtUid: courtData.uid,
                provider: clubData.qr_code_provider,
                startDateStr: match_start_date_D.toISOString(),
                endDateStr: match_finished_date_D.toISOString(),
                accessCode: bookingData.access_code,
                smartPadelUid: courtData.smart_padel_id,
                minBeforeDoor: courtData.min_before_door,
                minAfterDoor: courtData.min_after_door,
            }
            /*
            */
            //smart_padel_data, // Données JSON dans le corps
            /*
            {
                headers: {
                    Authorization: `Bearer ${API_KEY}`,
                    "Content-Type": "application/json",
                },
            }
            */
        );
        const status = response.status;
        if (status === 200) {
            return {
                is_error: false,
                message: "Réservation crée avec succès !"
            };
        } else {
            return {
                is_error: true,
                message: "Le booking n'a pas été crée chez Smart Padel !"
            };
        }
    } catch (error) {
        return {
            is_error: true,
            message: "Erreur réseau ou interne ! Veuillez réssayer plus tard !"
        };;
    }
};
export const getSmartPadelBooking = async (clubData, courtData, bookingData) => {
    try {
        const response = await axios.post(
            LINK_API_SMART_PADEL_GET_BOOKING, // URL complète
            {
                bookingUid: bookingData.uid,
                clubUid: clubData.uid,
                courtUid: courtData.uid,
                provider: clubData.qr_code_provider,
            }
        );
        const status = response.status;
        if (status === 200) {
            return "OK";
        } else {
            return "ERROR";
        }
    } catch (error) {
        return "ERROR";
    }
};
export const deleteSmartPadelBooking = async (clubData, courtData, bookingData) => {
    try {
        const response = await axios.post(
            LINK_API_SMART_PADEL_DELETE_BOOKING, // URL complète
            {
                bookingUid: bookingData.uid,
                clubUid: clubData.uid,
                courtUid: courtData.uid,
                provider: clubData.qr_code_provider,
            }
        );
        const status = response.status;
        if (status === 200) {
            return {
                is_error: false,
                message: "Réservation supprimée avec succès !"
            };
        } else {
            return {
                is_error: true,
                message: "Ce booking n'existe pas chez Smart Padel !"
            };
        }
    } catch (error) {
        console.error("Erreur réseau ou interne :", error.message);
        return {
            is_error: true,
            message: "Erreur réseau ou interne ! Veuillez réssayer plus tard !"
        };;
    }
};
