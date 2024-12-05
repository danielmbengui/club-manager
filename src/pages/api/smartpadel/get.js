import axios from 'axios';
import { getSmartPadelApiKey, getSmartPadelCreateUrl, getSmartPadelGetUrl } from './functions';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        res.status(405).json({ error: 'Méthode non autorisée' });
        return;
    }

    try {
        const clubUid = req.body.clubUid;
        const courtUid = req.body.courtUid;
        const provider = req.body.provider;
        const bookingUid = req.body.bookingUid;
        //const startDateStr = req.body.startDateStr;
        //const endDateStr = req.body.endDateStr;
        //const accessCode = req.body.accessCode;
        //const smartPadelUid = req.body.smartPadelUid;
        //const minBeforeDoor = req.body.minBeforeDoor;
        //const minAfterDoor = req.body.minAfterDoor;

        const API_KEY = await getSmartPadelApiKey(clubUid, courtUid, provider);
        const GET_URL = await getSmartPadelGetUrl(clubUid, courtUid, provider);
        //const startDate = new Date(startDateStr);
        //const endDate = new Date(endDateStr);

        if (!API_KEY || !GET_URL) {
            throw new Error("API_KEY ou CREATE_URL est manquant");
        }
<<<<<<< HEAD
<<<<<<< HEAD
=======
        console.log("api", API_KEY, "url", GET_URL);
>>>>>>> bb43e94 (add dialog delete booking)
=======
>>>>>>> 1bc3946 (last version to be sure)
        if (clubUid != "" && bookingUid != "") {
            const response = await axios.get(
                //`https://api.smartpadel.es/api/v1/objects/${idCourt}/bookings`,
                `${GET_URL}${bookingUid}`,
                //https://api.smartpadel.es/api/v1/objects/1/bookings
                {
                    headers: {
                        Authorization: `Bearer ${API_KEY}`,
                        "Content-Type": "application/json",
                    },
                },

            );
            //const response = apiResponse.data;
            var isError = false;
            if (response.status !== 200) {
                isError = true;
            }
            res.status(response.status).json({ is_error: isError, data: response.data });
            /*
            if (status == 200) {
                return {
                    "external_id": externalId,
                    "access_code": responseData.user.access_code,
                    "time": responseData.time,
                    "is_error": false,
                    "message": "SUCCESS",
                };
            } else {
                return {
                    "is_error": true,
                    "message": "ERROR with params",
                };
            }
            */
        }
        /*
        const smart_padel_data = {
            time: {
                from: startDate.toISOString(),
                to: endDate.toISOString(),
            },
            user: {
                access_code: accessCode,
            },
            external: {
                id: bookingUid,
            },
            transform: {
                door: {
                    time_offset: {
                        from: -((minBeforeDoor + 1) * 60),
                        to: (minAfterDoor - 1) * 60,
                    },
                    included: true,
                },
                output: {
                    time_offset: {
                        from: -((minBeforeDoor + 1) * 60),
                        to: (minAfterDoor - 1) * 60,
                    },
                    included: true,
                },
            },
        };
        const response = await axios.post(
            `${GET_URL}${smartPadelUid}/bookings`,
            smart_padel_data,
            {
                headers: {
                    Authorization: `Bearer ${API_KEY}`, // Inclure l'en-tête d'autorisation
                    'Content-Type': 'application/json',
                },
            }
        );
        var isError = false;
        if (response.status !== 200) {
            isError = true;
        }
        res.status(response.status).json({ is_error: isError, data: response.data });
        */
        //res.status(200).json({ data: req.body });
    } catch (error) {
        console.error('Erreur proxy :', error.message);
        res.status(error.response?.status || 500).json({
            error: error.response?.data || 'Erreur serveur',
        });
    }
}