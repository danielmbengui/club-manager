// components/PieChart.js
import React from 'react';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { formatPercentage } from '@/functions';

// Enregistre les composants nécessaires
Chart.register(ArcElement, Tooltip, Legend);

const PieChart = ({ playpadRate, clubRate }) => {
  const data = {
    labels: ['PlayPad', 'Club'], // Supprimé 'Total'
    datasets: [
      {
        label: 'Taux',
        data: [playpadRate, clubRate], // Supprimé la donnée pour 'Total'
        backgroundColor: [
          'green',
          'rgba(54, 162, 235, 0.6)', // Couleurs correspondant aux labels
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Permet de personnaliser la taille via CSS
    plugins: {
      legend: {
        position: 'top',
        labels: {
          generateLabels: (chart) => {
            const { datasets } = chart.data;
            const { labels } = chart.data;
            const dataset = datasets[0];
            return labels.map((label, i) => {
              const value = dataset.data[i];
              return {
                text: `${label}: ${formatPercentage(value)}`, // Légende avec les valeurs
                fillStyle: dataset.backgroundColor[i],
                strokeStyle: dataset.borderColor[i],
                lineWidth: dataset.borderWidth,
              };
            });
          },
        },
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  return <div style={{ width: '350px', height: '350px' }}> {/* Définir la taille du conteneur */}
  <Pie data={data} options={options} />
</div>;
};

export default PieChart;
