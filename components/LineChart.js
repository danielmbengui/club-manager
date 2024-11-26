import React from 'react';
import {
  Chart,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { formatCurrency } from '@/functions';
import { BLACK, WHITE } from '@/colors';
import { useThemeMode } from '@/contexts/ThemeProvider';


// Enregistre les composants nécessaires
Chart.register(LineElement, PointElement, LinearScale, Title, Tooltip, Legend, CategoryScale, Filler);

const LineChart = ({ playpadData, clubData, labels, values, revenuesTotal, title = 'Heure, Jour, Mois' }) => {
  //const { theme } = useTheme(); // Obtenez le thème actuel
  const { theme } = useThemeMode();
  const {primary, primaryShadowChart, text,border} = theme.palette;

  const data = {
    labels, // Les étiquettes correspondant aux points sur l'axe X
    datasets: [
      {
        label: `Revenues : ${formatCurrency(revenuesTotal)}`,
        data: values, // Données
        borderColor: primary.main, // Couleur de la ligne
        backgroundColor: primaryShadowChart.main, // Couleur de remplissage
        pointBorderColor: primary.main,
        pointBackgroundColor: primaryShadowChart.main,
        pointBorderWidth: 2,
        fill: true, // Activer le remplissage
        tension: 0.5, // Lissage des courbes
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
        labels: {
          color: text.primary
        },
      },
      tooltip: {
        enabled: true,
        callbacks: {
          label: function (context) {
            let label = '';
            if (context.parsed.y !== null) {
              label += formatCurrency(context.parsed.y);
            }
            return label;
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          color: border.main, // Couleur des lignes de la grille sur l'axe X
        },
        title: {
          display: true,
          text: title, // Nom de l'axe X
          color: text.primary
        },
        ticks: {
          color: text.primary
        },
      },
      y: {
        grid: {
          color: border.main, // Couleur des lignes de la grille sur l'axe X
        },
        title: {
          display: true,
          text: 'Revenus (CHF)', // Nom de l'axe Y
          color: text.primary
        },
        ticks: {
          color: text.primary,
          callback: function (value) {
            return formatCurrency(value); // Formate les ticks comme des devises
          },
        },
        min: 0,
        max: Math.max(...values) > 0 ? Math.round(Math.max(...values) * 1.1) : 100, // Ajustez selon vos besoins
      },
    },
  };

  return (
    <div style={{ width: '100%', height: '450px' }}>
      <Line style={{ width: '100%' }} data={data} options={options} />
    </div>
  );
};

export default LineChart;
