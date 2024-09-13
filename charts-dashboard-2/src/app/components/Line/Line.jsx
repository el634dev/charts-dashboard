"use client"

import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    LineElement,
    PointElement, 
    Title,
    LinearScale,
    CategoryScale,
    Tooltip,
    Legend,
} from "chart.js";

ChartJS.register(
    LineElement,
    PointElement,
    Title,
    LinearScale,
    CategoryScale,
    Tooltip,
    Legend
);

export default function LineChart() {
    const [lineData, setLineData] = useState({ datasets: [] });
    const [lineOptions, setLineOptions] = useState({});

    useEffect(() => {
        setLineData({
            labels: ["Jan", "Feb", "Mar", "Apr"],
            datasets: [
                {
                    labels: ["Jan", "Feb", "Mar", "Apr"],
                    data: [10, 20, 30, 40],
                },
            ],
        });
        setLineOptions({
            plugins: {
                title: {
                    display: true,
                    text: "Months"
                },
            },
            maintainAspectRatio: false,
            responsive: true,
        });
    }, []);

    return (
        <>
            <div className="bh-white m-auto h-[50vh] w-full rounded-lg border p-4 md:col-span-2 lg:h-[70vh]">
                <Line data={lineData} options={setLineOptions} />
            </div>
        </>
    );
};