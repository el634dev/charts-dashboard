"use client"

import { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";
import {
    Chart as ChartJS,
    BarElement,
    Title,
    LinearScale,
    CategoryScale,
    Tooltip,
    Legend,
    PointElement,
    ArcElement
} from "chart.js";

ChartJS.register(
    BarElement,
    PointElement,
    ArcElement,
    Title,
    LinearScale,
    CategoryScale,
    Tooltip,
    Legend
);

export default function PieChart() {
    const [pieData, setPieData] = useState({ datasets: [] });
    const [pieOptions, setPieOptions] = useState({});

    useEffect(() => {
        setPieData({
            labels: ["Red", "Blue", "Yellow"],
            datasets: [
                {
                    labels: ["Red", "Blue", "Yellow"],
                    data: [300, 50, 100],
                },
            ],
        });
        setPieOptions({
            plugins: {
                title: {
                    display: true,
                    text: "Colors"
                },
            },
            maintainAspectRatio: false,
            responsive: true,
        });
    }, []);

    return (
        <>
            <div className="bh-white m-auto h-[50vh] w-full rounded-lg border p-4 md:col-span-2 lg:h-[70vh]">
                <Pie data={pieData} options={setPieOptions} />
            </div>
        </>
    );
};