import { SecretManagerServiceClient } from '@google-cloud/secret-manager';
require('dotenv').config();
const client = new SecretManagerServiceClient({
  credentials: {
    private_key: process.env.GCP_PRIVATE_KEY.replace(/\\n/g, '\n'),
    client_email:process.env.GCP_CLIENT_EMAIL,
  },
  projectId: process.env.GCP_PROJECT_ID,
});

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.status(405).json({ error: 'Méthode non autorisée' });
    return;
  }

  try {
    const clubUid = req.query.clubUid;
    const courtUid = req.query.courtUid;
    const provider = req.query.provider;
    
    const secretName = clubUid; // Remplacez par votre nom de secret
    const version = 'latest';
    const name = `projects/${process.env.SECRET_MANAGER_PROJECT_ID}/secrets/${secretName}/versions/${version}`;
    
    const [accessResponse] = await client.accessSecretVersion({ name });
    const secretValue = accessResponse.payload.data.toString('utf8');
    const values = JSON.parse(secretValue);
    const {clubName,qr_code_provider_list,payment_provider_list} = values;
    //const qr_code_provider_list = credentials.data.qr_code_provider_list;
      const result = qr_code_provider_list.find(item => item.name === provider);
      const apiKeys = result.apiKeys;
      const createUrl = result.createUrl;
      const getUrl = result.getUrl;
      const deleteUrl = result.deleteUrl;
      const apiKey = apiKeys.find((item) => courtUid in item);
    res.status(200).json({apiKey:apiKey[courtUid], createUrl, getUrl, deleteUrl});
  } catch (error) {
    console.error('Erreur lors de la récupération du secret :', error);
    res.status(500).json({ error: 'Erreur lors de la récupération du secret' });
  }
}
