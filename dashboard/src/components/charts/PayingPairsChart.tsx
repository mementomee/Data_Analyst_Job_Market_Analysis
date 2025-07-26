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

export const PayingPairsChart = () => {
  const data = {
    labels: ['Go + MATLAB', 'Scala + Oracle', 'Python + Atlassian', 'SQL Server + Kafka', 'MongoDB + Hadoop', 'Databricks + Redshift'],
    datasets: [{
      label: 'Average Salary ($)',
      data: [159335, 157500, 155468, 154500, 154220, 150603],
      backgroundColor: 'hsl(25 95% 53%)',
      borderRadius: 4
    }]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: 'Ultra-Premium Skill Combinations ($150K+)',
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
          text: 'Average Salary ($)'
        },
        ticks: {
          callback: function(value: any) {
            return '$' + value.toLocaleString();
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