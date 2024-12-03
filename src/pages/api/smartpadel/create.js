import axios from 'axios';
const LINK_API_QR_PROVIDER = `${process.env.NEXT_PUBLIC_WEBSITE_LINK}/api/keys/qr_provider`;

const getSmartPadelApiKey = async (clubUid, courtUid, provider) => {
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
const getSmartPadelCreateUrl = async (clubUid, courtUid, provider) => {
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

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        res.status(405).json({ error: 'Méthode non autorisée' });
        return;
    }

    try {
        // Récupérer les données et l'URL de la requête
        //const clubUid = "VLSJINHIeATv4nVi7O4Y";
        const clubUid = req.body.clubUid;
        const courtUid = req.body.courtUid;
        const provider = req.body.provider;
        const bookingUid = req.body.bookingUid;
        const startDateStr = req.body.startDateStr;
        const endDateStr = req.body.endDateStr;
        const accessCode = req.body.accessCode;
        const smartPadelUid = req.body.smartPadelUid;
        const minBeforeDoor = req.body.minBeforeDoor;
        const minAfterDoor = req.body.minAfterDoor;

        const API_KEY = await getSmartPadelApiKey(clubUid, courtUid, provider);
        const CREATE_URL = await getSmartPadelCreateUrl(clubUid, courtUid, provider);
        const startDate = new Date(startDateStr);
        const endDate = new Date(endDateStr);

        if (!API_KEY || !CREATE_URL) {
            throw new Error("API_KEY ou CREATE_URL est manquant");
        }
        console.log(API_KEY, "url", CREATE_URL);
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
            `${CREATE_URL}${smartPadelUid}/bookings`,
            smart_padel_data,
            {
                headers: {
                    Authorization: `Bearer ${API_KEY}`, // Inclure l'en-tête d'autorisation
                    'Content-Type': 'application/json',
                },
            }
        );
        res.status(response.status).json(response.data);
        res.status(200).json(req.body);
    } catch (error) {
        console.error('Erreur proxy :', error.message);
        res.status(error.response?.status || 500).json({
            error: error.response?.data || 'Erreur serveur',
        });
    }
}
