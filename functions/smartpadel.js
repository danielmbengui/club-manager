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

export const createSmartPadelBooking = async (clubUid, courtUid, provider) => {
    try {
<<<<<<< HEAD
        const API_KEY = await getSmartPadelApiKey(clubUid, courtUid, provider);
        const CREATE_URL = await getSmartPadelCreateUrl(clubUid, courtUid, provider);
        const bookingId = "DAAAN_TEST";
        const startDate = new Date(2024, 11, 31, 20, 0);
        const endDate = new Date(2024, 11, 31, 22, 0);
        const accessCode = "1220";
        const smartPadelId = "1";
=======
        const { match_start_date, match_finished_date } = bookingData;
>>>>>>> bb43e94 (add dialog delete booking)

        if (!API_KEY || !CREATE_URL) {
            throw new Error("API_KEY ou CREATE_URL est manquant");
        }

        const smart_padel_data = {
            time: {
                from: startDate.toISOString(),
                to: endDate.toISOString(),
            },
            user: {
                access_code: accessCode,
            },
            external: {
                id: bookingId,
            },
            transform: {
                door: {
                    time_offset: {
                        from: -600,
                        to: 240,
                    },
                    included: true,
                },
                output: {
                    time_offset: {
                        from: -600,
                        to: 240,
                    },
                    included: true,
                },
            },
        };

        console.log("Données à envoyer :", smart_padel_data);

        // Appeler l'API avec Axios
<<<<<<< HEAD
        /*
        const response = await axios.post(
            `${CREATE_URL}${smartPadelId}/bookings`, // URL complète
            smart_padel_data, // Données JSON dans le corps
=======

        const response = await axios.post(
            LINK_API_SMART_PADEL_CREATE_BOOKING, // URL complète
            {
                bookingUid: bookingData.uid,
                clubUid: clubData.uid,
                courtUid: courtData.uid,
                provider: clubData.qr_code_provider,
                startDateStr: match_start_date.toISOString(),
                endDateStr: match_finished_date.toISOString(),
                accessCode: bookingData.access_code,
                smartPadelUid: courtData.smart_padel_id,
                minBeforeDoor: courtData.min_before_door,
                minAfterDoor: courtData.min_after_door,
            }
            /*
            */
            //smart_padel_data, // Données JSON dans le corps
            /*
>>>>>>> bb43e94 (add dialog delete booking)
            {
                headers: {
                    Authorization: `Bearer ${API_KEY}`,
                    "Content-Type": "application/json",
                },
            }
        );
<<<<<<< HEAD
        */
        const response = await axios.post(
            '/api/proxy',
            {
                url: `${CREATE_URL}${smartPadelId}/bookings`,
                data: smart_padel_data,
            },
            {
                headers: {
                    Authorization: `Bearer ${"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGhvcml0aWVzIjpbXSwiYWNjb3VudCI6ImFkMTI0NzI0LWYxZmUtNDViNC05NTg1LTAwMDAwMDAwMDAwMSIsImlhdCI6MTcyMDY4NTkyOH0.KzJNB6HVIMN-Mmq9pnWQN04sJOCjsnm1TJ1o9ZYV68GGHequTzpl-fsqD-6KnpnUP7pYdpCiZ-aN7f6UxD87KA"}`, // Inclure l'en-tête d'autorisation
                    'Content-Type': 'application/json',
                },
            }
        );
=======


>>>>>>> bb43e94 (add dialog delete booking)
        console.log('Réponse de l’API :', response.data);
        const status = response.status;

        if (status === 200) {
            console.log("Réservation créée avec succès !");
            return {
                external_id: bookingId,
                access_code: accessCode,
                is_error: false,
                message: "SUCCESS",
            };
        } else {
            console.error("Erreur lors de la réservation :", response.data);
            return {
                is_error: true,
                message: "Erreur inattendue",
            };
        }
    } catch (error) {
        console.error("Erreur réseau ou interne :", error.message);
        return {
            is_error: true,
            message: error.message || "Erreur réseau",
        };
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
        console.log('Réponse de l’API :', response.data);
        const status = response.status;
        if (status === 200) {
            console.log("Réservation récupérée avec succès !");
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
        console.log('Réponse de l’API :', response.data);
        const status = response.status;
        if (status === 200) {
            console.log("Réservation supprimée avec succès !");
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
