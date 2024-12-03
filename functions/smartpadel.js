import { LINK_API_QR_PROVIDER } from "@/constants";
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
        const API_KEY = await getSmartPadelApiKey(clubUid, courtUid, provider);
        const CREATE_URL = await getSmartPadelCreateUrl(clubUid, courtUid, provider);
        const bookingId = "DAAAN_TEST";
        const startDate = new Date(2024, 11, 31, 20, 0);
        const endDate = new Date(2024, 11, 31, 22, 0);
        const accessCode = "1220";
        const smartPadelId = "1";

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
        /*
        const response = await axios.post(
            `${CREATE_URL}${smartPadelId}/bookings`, // URL complète
            smart_padel_data, // Données JSON dans le corps
            {
                headers: {
                    Authorization: `Bearer ${API_KEY}`,
                    "Content-Type": "application/json",
                },
            }
        );
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
