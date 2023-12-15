"use client"

import React from 'react';
import {Bar} from 'react-chartjs-2';
import {CategoryScale, LinearScale, Chart, BarElement} from "chart.js";

Chart.register(
    CategoryScale,
    LinearScale,
    BarElement
);

const data = {
    labels: ["CARLA", "IBERAMIA", "C4I"],
    datasets: [
        {
            label: "Recaudado (/ 100.000)",
            data: [30, 28, 29],
            borderColor: ["rgb(255, 206, 86)"],
            backgroundColor: ["rgb(255, 206, 86)"]
        },
        {
            label: "Presupuestado (/ 100.000)",
            data: [30, 30, 30],
            borderColor: ["rgb(54, 162, 235)"],
            backgroundColor: ["rgb(54, 162, 235)"]
        },
        {
            label: "Asistentes",
            data: [45, 50, 30],
            borderColor: ["rgb(255, 99, 132)"],
            backgroundColor: ["rgb(255, 99, 132)"]
        }
    ]
}

const options = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
        display: true,
        position: 'top',
    },
    scales: {
        /*x: {
            type: 'category',
            position: 'bottom',
        },
        y: {
            type: 'linear',
            position: 'left',
        },*/
        xAxes: [
            {
                scaleLabel: {
                    display: true,
                    labelString: 'Eje X',
                },
            },
        ],
        yAxes: [
            {
                scaleLabel: {
                    display: true,
                    labelString: 'Eje Y',
                },
                ticks: {
                    beginAtZero: true,
                },
            },
        ],
    },
}



const DashboardComponent = () => {
    return (
        <>
            <h1 className='text-5xl mb-5 font-semibold'>Dashboard año <span className="bg-orange-500 p-1">2023</span></h1>
            <div className="bg-white border-2 h-80">
                <Bar data={data} options={options}/>
            </div>
            <div className="mt-5 columns-3">
                <div className="columns-2">
                    <p className="text-2xl">Recaudo (/ 100.000): </p>
                    <div className="h-7 w-7 bg-yellow-400"></div>
                </div>
                <div className="columns-2">
                    <p className="text-2xl">Presupuesto (/ 100.000): </p>
                    <div className="h-7 w-7 bg-blue-400"></div>
                </div>
                <div className="columns-2">
                    <p className="text-2xl">Asistentes: </p>
                    <div className="h-7 w-7 bg-red-400"></div>
                </div>
            </div>
        </>
    );
};

export default DashboardComponent;