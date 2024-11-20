import React from 'react';
import { Chart, LineElement, PointElement, LinearScale, Title, Tooltip, Legend, CategoryScale, Filler } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { formatCurrency } from '@/functions';

// Enregistre les composants nécessaires
Chart.register(LineElement, PointElement, LinearScale, Title, Tooltip, Legend, CategoryScale, Filler);

const LineChart = ({ playpadData, clubData, labels, values, revenuesTotal }) => {
    const data = {
        labels, // Les étiquettes correspondant aux points sur l'axe X
        datasets: [
            /*
            {
                label: `PlayPad CHF 1'300 Revenues Total`,
                data: [50, 60, 70, 80, 90], // Données pour PlayPad
                borderColor: 'rgba(0, 128, 0, 1)', // Couleur de la ligne
                backgroundColor: 'rgba(0, 128, 0, 0.2)', // Couleur de remplissage
                pointBorderColor: 'rgba(0, 128, 0, 1)', // Couleur des points
                pointBackgroundColor: 'rgba(0, 128, 0, 0.2)',
                fill: true, // Activer le remplissage
                tension: 0.4, // Lissage des courbes
                pointStyle: 'circle',
            },
            */
            {
                label: `Revenues : ${formatCurrency(revenuesTotal)}`,
                data: values, // Données pour Club
                borderColor: 'rgba(66, 133, 244, 1)', // Couleur de la ligne
                backgroundColor: 'rgba(66, 133, 244, 0.2)', // Couleur de remplissage
                pointBorderColor: 'rgba(66, 133, 244, 1)',
                pointBackgroundColor: 'rgba(66, 133, 244, 0.1)',
                pointBorderWidth:2,
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
                hidden:false
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
                            label += formatCurrency(context.parsed.y);
                        }
                        return label;
                    }
                }
                
            },
            filler: {
                propagate: true
            }
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Heure, Jour, Mois', // Nom de l'axe X
                    //values: values
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'Revenus (CHF)', // Nom de l'axe Y
                },
                ticks: {
                    // Include a dollar sign in the ticks
                    callback: function(value, index, ticks) {
                        return formatCurrency(value);
                    }
                },
                min: 0,
                max: Math.max(...values) > 0 ? Math.round(Math.max(...values) * 1.1) : 100, // Ajustez selon vos besoins
            },
        },
    };

    return (
        <div style={{ width: '100%', height: '450px', }}>
            <Line style={{ width: '100%' }} data={data} options={options} />
        </div>
    );
};

export default LineChart;
