import React from 'react';
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';
ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController
);

const labels = ['January', 'February', 'March', 'April', 'May', 'June'];

export const data = {
  labels,
  datasets: [
    {
      type: 'line' as const,
      label: 'Transferências',
      borderColor: 'rgb(255, 99, 132)',
      borderWidth: 2,
      fill: false,
      data: [10,20,15,30,45,5],
    },
    {
      type: 'bar' as const,
      label: 'Saídas',
      backgroundColor: 'rgb(75, 192, 192)',
      data: [50,60,70,80,90,100],
      borderColor: 'white',
      borderWidth: 2,
    },
    {
      type: 'bar' as const,
      label: 'Entradas',
      backgroundColor: 'rgb(53, 162, 235)',
      data: [20,30,40,50,60,70],
    },
  ],
};

export function MultitypeChartApp() {
  return <Chart type='bar' data={data} />;
}
