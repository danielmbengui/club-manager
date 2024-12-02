export default function handler(req, res) {
    res.status(200).json({
      apiKey: process.env.NEXT_PUBLIC_API_FIREBASE,
      projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
      secretKey: process.env.GCP_PRIVATE_KEY ? 'Loaded' : 'Missing',
    });
  }