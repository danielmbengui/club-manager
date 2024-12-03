import axios from 'axios';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Méthode non autorisée' });
    return;
  }

  try {
    // Récupérer les données et l'URL de la requête
    const { url, data } = req.body;

    if (!url || !data) {
      res.status(400).json({ error: 'URL ou données manquantes' });
      return;
    }

    // Faire la requête vers l'API externe
    const response = await axios.post("https://api.smartpadel.es/api/v1/objects/1/bookings", data, {
      headers: {
        Authorization: "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGhvcml0aWVzIjpbXSwiYWNjb3VudCI6ImFkMTI0NzI0LWYxZmUtNDViNC05NTg1LTAwMDAwMDAwMDAwMSIsImlhdCI6MTcyMDY4NTkyOH0.KzJNB6HVIMN-Mmq9pnWQN04sJOCjsnm1TJ1o9ZYV68GGHequTzpl-fsqD-6KnpnUP7pYdpCiZ-aN7f6UxD87KA",
        'Content-Type': 'application/json',
      },
    });

    // Retourner la réponse au client
    res.status(response.status).json(response.data);
  } catch (error) {
    console.error('Erreur proxy :', error.message);
    res.status(error.response?.status || 500).json({
      error: error.response?.data || 'Erreur serveur',
    });
  }
}
