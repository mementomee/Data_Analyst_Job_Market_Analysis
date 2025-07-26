import React from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend, Title);

export const SkillsChart = () => {
  const data = {
    labels: ['SQL', 'Excel', 'Python', 'Tableau', 'Power BI', 'R'],
    datasets: [{
      data: [47.12, 34.10, 29.16, 23.68, 20.08, 15.30],
      backgroundColor: [
        'hsl(217 91% 60%)',
        'hsl(142 76% 36%)', 
        'hsl(259 94% 51%)',
        'hsl(25 95% 53%)', 
        'hsl(0 84% 60%)', 
        'hsl(220 9% 46%)'
      ],
      borderWidth: 3,
      borderColor: 'hsl(0 0% 100%)'
    }]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: 'Market Demand by Skill (% of Jobs)',
        font: {
          size: 16,
          weight: 'bold' as const
        }
      },
      legend: {
        position: 'right' as const
      },
      tooltip: {
        callbacks: {
          label: function(context: any) {
            return context.label + ': ' + context.parsed + '% of jobs';
          }
        }
      }
    }
  };

  return (
    <div className="h-96 w-full">
      <Doughnut data={data} options={options} />
    </div>
  );
};