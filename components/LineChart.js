import React from 'react';
import { Chart, LineElement, PointElement, LinearScale, Title, Tooltip, Legend, CategoryScale } from 'chart.js';
import { Line } from 'react-chartjs-2';

// Enregistre les composants nécessaires
Chart.register(LineElement, PointElement, LinearScale, Title, Tooltip, Legend, CategoryScale);

const LineChart = ({ playpadData, clubData, labels }) => {
  const data = {
    labels:['Jan', 'Feb', 'Mar', 'Apr', 'May'], // Les étiquettes correspondant aux points sur l'axe X (ex : ['Jan', 'Feb', ...])
    datasets: [
      {
        label: `PlayPad CHF 1'300 Revenues Total`,
        data: [50, 60, 70, 80, 90], // Données pour PlayPad
        borderColor: 'green',
        backgroundColor: 'rgba(0, 128, 0, 0.2)',
        fill: false,
        tension: 0.4, // Lissage des courbes
        pointStyle: 'circle',
      },
      {
        label: `Club CHF 43'300 Revenues Total`,
        data: [40, 55, 65, 85, 95], // Données pour Club
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        fill: false,
        tension: 0.4, // Lissage des courbes
        pointStyle: 'circle',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Permet de personnaliser la taille via CSS
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Heure, Jour, Mois', // Nom de l'axe X
        },
      },
      y: {
        title: {
          display: true,
          text: 'Revenus (CHF)', // Nom de l'axe Y
        },
        min: 0,
        max: 190, // Ajustez selon vos besoins
      },
    },
  };

  return (
    <div style={{ width: '100%', height: '400px' }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
