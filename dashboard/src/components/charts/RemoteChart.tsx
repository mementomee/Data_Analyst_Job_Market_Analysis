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

export const RemoteChart = () => {
  console.log('RemoteChart component is rendering');
  const data = {
    labels: ['Remote Work', 'On-site Work'],
    datasets: [
      {
        label: 'Average Salary ($)',
        data: [98557, 98108],
        backgroundColor: ['hsl(259 94% 51%)', 'hsl(217 91% 60%)'],
        borderRadius: 6,
        yAxisID: 'y'
      },
      {
        label: 'Number of Jobs',
        data: [747, 5662],
        backgroundColor: ['hsl(142 76% 36%)', 'hsl(142 76% 36%)'],
        borderRadius: 6,
        yAxisID: 'y1'
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: 'Remote vs On-site: Salary & Opportunities',
        font: {
          size: 16,
          weight: 'bold' as const
        }
      },
      legend: {
        position: 'top' as const
      }
    },
    scales: {
      y: {
        type: 'linear' as const,
        display: true,
        position: 'left' as const,
        min: 90000,
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
      y1: {
        type: 'linear' as const,
        display: true,
        position: 'right' as const,
        title: {
          display: true,
          text: 'Number of Jobs'
        },
        grid: {
          drawOnChartArea: false
        },
        ticks: {
          callback: function(value: any) {
            return value.toLocaleString();
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