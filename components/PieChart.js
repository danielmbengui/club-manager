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
          'rgba(66, 133, 244,1)',
          'rgba(66, 133, 244, 0.1)', // Couleurs correspondant aux labels
        ],
        borderColor: [
          'rgba(66, 133, 244, 1)',
          'rgba(66, 133, 244, 1)',
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
        hidden:true,
        labels: {
          generateLabels: (chart) => {
            const { datasets } = chart.data;
            const { labels } = chart.data;
            const dataset = datasets[0];
            return labels.map((label, i) => {
              const value = dataset.data[i];
              return {
                text: `${label}`, // Légende avec les valeurs
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

  return <div style={{ width: '100%', height: '170px', background:'transparent' }}> {/* Définir la taille du conteneur */}
  <Pie data={data} options={options} />
</div>;
};

export default PieChart;
