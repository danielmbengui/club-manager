import { LINK_API_QR_PROVIDER, LINK_API_SMART_PADEL_CREATE_BOOKING } from "@/constants";
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
        const {match_start_date, match_finished_date} = bookingData;

        //console.log("Données à envoyer :", smart_padel_data);

        // Appeler l'API avec Axios
        
        const response = await axios.post(
            LINK_API_SMART_PADEL_CREATE_BOOKING, // URL complète
            {
                bookingUid:bookingData.uid,
                clubUid:clubData.uid,
                courtUid:courtData.uid,
                provider:clubData.qr_code_provider,
                startDateStr:match_start_date.toISOString(),
                endDateStr:match_finished_date.toISOString(),
                accessCode:bookingData.access_code,
                smartPadelUid:courtData.smart_padel_id,
                minBeforeDoor:courtData.min_before_door,
                minAfterDoor:courtData.min_after_door,
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
        
        
        console.log('Réponse de l’API :', response.data);
        const status = response.status;

        if (status === 200) {
            console.log("Réservation créée avec succès !");
            return "OK";
        } else {
            console.error("Erreur lors de la réservation :", response.data);
            return "ERROR";
        }
    } catch (error) {
        console.error("Erreur réseau ou interne :", error.message);
        return "ERROR";
    }
};
