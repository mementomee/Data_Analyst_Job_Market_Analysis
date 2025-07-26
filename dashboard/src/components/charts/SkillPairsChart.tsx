import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const SkillPairsChart = () => {
  const data = {
    labels: ['SQL + Python', 'SQL + Tableau', 'SQL + Excel', 'SQL + Power BI', 'Python + R', 'Python + Tableau'],
    datasets: [{
      label: 'Number of Jobs (thousands)',
      data: [44.63, 34.43, 34.25, 26.42, 25.59, 23.23],
      backgroundColor: 'hsl(239 84% 67%)',
      borderRadius: 4
    }]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: 'Most Popular Skill Combinations',
        font: {
          size: 16,
          weight: 'bold' as const
        }
      }
    },
    scales: {
      y: {
        title: {
          display: true,
          text: 'Jobs (thousands)'
        },
        ticks: {
          callback: function(value: any) {
            return value + 'K';
          }
        }
      },
      x: {
        ticks: {
          maxRotation: 45
        }
      }
    }
  };

  return (
    <div className="h-96 w-full">
      <Bar data={data} options={options} />
    </div>
  );
};