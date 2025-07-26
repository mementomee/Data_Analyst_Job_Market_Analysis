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

export const PayingChart = () => {
  const data = {
    labels: ['PyTorch', 'Perl', 'Kafka', 'TensorFlow', 'Cassandra', 'Scala'],
    datasets: [{
      label: 'Average Salary ($)',
      data: [125226, 124686, 123076, 120647, 118407, 115480],
      backgroundColor: [
        'hsl(45 93% 47%)',
        'hsl(45 93% 47%)', 
        'hsl(45 93% 47%)',
        'hsl(45 93% 47%)', 
        'hsl(45 93% 47%)', 
        'hsl(45 93% 47%)'
      ],
      borderRadius: 4
    }]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: 'Highest-Paying Skills in Data Analytics',
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
      }
    }
  };

  return (
    <div className="h-96 w-full">
      <Bar data={data} options={options} />
    </div>
  );
};