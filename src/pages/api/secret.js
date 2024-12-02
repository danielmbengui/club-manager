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
    const secretName = 'VLSJINHIeATv4nVi7O4Y'; // Remplacez par votre nom de secret
    const version = '27';
    const name = `projects/${"839974397439"}/secrets/${secretName}/versions/${version}`;
    
    const [accessResponse] = await client.accessSecretVersion({ name });
    const secretValue = accessResponse.payload.data.toString('utf8');
    const values = JSON.parse(secretValue);
    const clubUid = values.clubUid;
    res.status(200).json({ clubUid: clubUid});
  } catch (error) {
    console.error('Erreur lors de la récupération du secret :', error);
    res.status(500).json({ error: 'Erreur lors de la récupération du secret' });
  }
}
