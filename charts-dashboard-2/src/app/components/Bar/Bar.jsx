"use client"

import { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    BarElement,
    Title,
    LinearScale,
    CategoryScale,
    Tooltip,
    Legend,
    PointElement
} from "chart.js";

ChartJS.register(
    BarElement,
    PointElement,
    Title,
    LinearScale,
    CategoryScale,
    Tooltip,
    Legend
);

export default function BarChart() {
    const [barData, setBarData] = useState({ datasets: [] });
    const [barOptions, setBarOptions] = useState({});

    useEffect(() => {
        setBarData({
            labels: ["Product A", "Product B", "Product C"],
            datasets: [
                {
                    labels: ["Product A", "Product B", "Product C"],
                    data: [100, 150, 200],
                },
            ],
        });
        setBarOptions({
            plugins: {
                legend: {
                    position: "top"
                },
                title: {
                    display: true,
                    text: "Products"
                },
            },
            maintainAspectRatio: false,
            responsive: true,
        });
    }, []);

    return (
        <>
            <div className="bh-white m-auto h-[50vh] w-full rounded-lg border p-4 md:col-span-2 lg:h-[70vh]">
                <Bar data={barData} options={setBarOptions} />
            </div>
        </>
    );
};