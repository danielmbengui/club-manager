export default function handler(req, res) {
    res.status(200).json({
      apiKey: process.env.NEXT_PUBLIC_WEBSITE_LINK,
      projectId: process.env.GCP_CLIENT_EMAIL,
      secretKey: process.env.GCP_PROJECT_ID ? 'Loaded' : 'Missing',
    });
  }