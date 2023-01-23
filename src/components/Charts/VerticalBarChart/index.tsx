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

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Orçado',
      data: [10,20,33,44,55,68],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Efetivado',
      data:[20,30,40,50,70,80],
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export function VerticalBarChart() {
  return <Bar options={options} data={data}/>;
}
