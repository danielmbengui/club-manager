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

