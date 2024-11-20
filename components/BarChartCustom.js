import React from 'react';
import { Chart, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

// Enregistre les composants nécessaires
Chart.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const BarChartCustom = ({ playpadRate, clubRate }) => {
  const data = {
    labels: ['Acacias', 'AIRLOOP'], // Labels pour les barres
    datasets: [
      {
        label: "Sites",
        backgroundColor:'red',
        //labels: ['Acacias', 'AIRLOOP'], // Labels pour les barres
        data: [12, 18], // Données pour chaque barre
        backgroundColor: [
          'rgba(66, 133, 244, 0.5)', // Couleur pour PlayPad
          'rgba(244, 180, 0, 0.5)', // Couleur pour Club
        ],
        borderColor: [
          'rgba(66, 133, 244, 1)', // Bordure pour PlayPad
          'rgba(244, 180, 0, 1)', // Bordure pour Club
        ],
        borderWidth: 1, // Largeur de la bordure
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Permet de personnaliser la taille via CSS
    plugins: {
      legend: {
        position: 'top',
        hidden:false,
        display:false
      },
      tooltip: {
        enabled: true,
        callbacks: {
            label: function(context) {
                let label = '';

                if (label) {
                    //label += ': ';
                }
                if (context.parsed.y !== null) {
                    label += context.parsed.y;
                }
                return label;
            }
        }
        
    },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Site,courts', // Légende pour l'axe X
        },
      },
      y: {
        title: {
          display: true,
          text: 'Taux (%)', // Légende pour l'axe Y
        },
        min:0,
        max:25,
        beginAtZero: true, // Commence à 0
      },
    },
  };

  return (
    <div style={{ width: '100%', height: '200px', background:'transparent' }}> {/* Taille personnalisée */}
      <Bar style={{ width: '100%' }} data={data} options={options} />
    </div>
  );
};

export default BarChartCustom;
