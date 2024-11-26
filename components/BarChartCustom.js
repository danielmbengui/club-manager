import React from 'react';
import { Chart, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { BLACK, WHITE } from '@/colors';
import { useTheme } from '@mui/material';
import { useThemeMode } from '@/contexts/ThemeProvider';
import { getRandomRGBA } from '@/functions';

// Enregistre les composants nécessaires
Chart.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const BarChartCustom = ({ playpadRate, clubRate, title, labels, values, backgrounds, borders }) => {
  //const { theme } = useTheme(); // Obtenez le thème actuel
  const { theme } = useThemeMode();
  const { primary, primaryShadowChart, text,border } = theme.palette;
  const initBackgrounds = [primaryShadowChart.main];
  const initBorders = [primary.main];
  for (let i = 1; i < values.length; i++) {
    const colors = getRandomRGBA(0.1);
    initBackgrounds.push(colors[1]);
    initBorders.push(colors[0]);
  }
  const data = {
    labels: labels, // Labels pour les barres
    datasets: [
      {
        label: "Sites",
        backgroundColor: 'red',
        //labels: ['Acacias', 'AIRLOOP'], // Labels pour les barres
        data: values, // Données pour chaque barre
        backgroundColor: initBackgrounds,
        borderColor: initBorders,
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
        hidden: false,
        display: false,
        labels: {
          color: text.primary
        },
      },
      tooltip: {
        enabled: true,
        callbacks: {
          label: function (context) {
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
          text: title, // Légende pour l'axe X
          color: text.primary
        },
        grid: {
          color: border.main, // Couleur des lignes de la grille sur l'axe X
        },
        ticks: {
          color: text.primary
        },
      },
      y: {
        title: {
          display: true,
          text: 'Nombre de matchs', // Légende pour l'axe Y,
          color: text.primary
        },
        grid: {
          color: border.main, // Couleur des lignes de la grille sur l'axe X
        },
        ticks: {
          color: text.primary
        },
        min: 0,
        max: Math.max(...values) > 0 ? Math.round(Math.max(...values) * 1.1) : 10,
        beginAtZero: true, // Commence à 0
      },
    },
  };

  return (
    <div style={{ width: '100%', height: '200px', background: 'transparent' }}> {/* Taille personnalisée */}
      <Bar style={{ width: '100%' }} data={data} options={options} />
    </div>
  );
};

export default BarChartCustom;
