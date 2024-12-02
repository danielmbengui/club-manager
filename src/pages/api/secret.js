import { SecretManagerServiceClient } from '@google-cloud/secret-manager';
require('dotenv').config();

const client = new SecretManagerServiceClient({
  credentials: {
    private_key: process.env.GCP_PRIVATE_KEY.replace(/\\n/g, '\n'),
    client_email:process.env.GCP_CLIENT_EMAIL,
  },
  projectId: process.env.GCP_PROJECT_ID,
});