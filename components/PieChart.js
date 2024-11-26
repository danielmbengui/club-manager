import React from 'react';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { formatPercentage } from '@/functions';
import { BLACK, PRIMARY_CHARTS_RGB, PRIMARY_CHARTS_RGBA_1, WHITE } from '@/colors';
import { useThemeMode } from '@/contexts/ThemeProvider';

// Enregistre les composants nécessaires
Chart.register(ArcElement, Tooltip, Legend);

const PieChart = ({ playpadRate, clubRate, clubName }) => {
  //const { theme } = useTheme();
  const { theme } = useThemeMode();
  const {primary, primaryShadowChart, text} = theme.palette;
  console.log("THEME", theme)
  const data = {
    labels: ['PlayPad', clubName],
    datasets: [
      {
        label: 'Taux',
        data: [playpadRate, clubRate],
        backgroundColor: [
          primary.main,
          primaryShadowChart.main,
        ],
        borderColor: [
          primary.main,
          primary.main,
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        enabled: true,
        position: 'top',
        display: true,
        labels: {
          
          generateLabels: (chart) => {
            const { datasets } = chart.data;
            const { labels } = chart.data;
            const dataset = datasets[0];
            return labels.map((label, i) => {
              const value = dataset.data[i];
              return {
                text: `${label} : ${formatPercentage(value)}`,
                fillStyle: dataset.backgroundColor[i],
                strokeStyle: dataset.borderColor[i],
                lineWidth: dataset.borderWidth,
               fontColor:text.primary
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

  return (
    <div style={{ width: '100%', height: '170px' }}>
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;
