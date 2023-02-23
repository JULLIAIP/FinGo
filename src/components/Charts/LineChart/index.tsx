import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';


const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
    labels,
    
    datasets: [
        {
            label: 'Saídas',
            data: [50, 20, 70, 40, 30, 20],
            borderColor: 'red',

        },
        
        {
            label: 'Entradas',
            data: [10, 50, 30, 20, 40, 70],
            borderColor: 'green',

        },
    ],
};

export function LineChart(options: any) {
    return <Line options={options} data={data} />;
}
