"use client"

import { useState, useEffect } from "react";
import { Radar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    BarElement,
    Title,
    LinearScale,
    CategoryScale,
    Tooltip,
    Legend,
    PointElement,
    ArcElement,
    RadialLinearScale
} from "chart.js";

ChartJS.register(
    BarElement,
    PointElement,
    ArcElement,
    Title,
    LinearScale,
    CategoryScale,
    RadialLinearScale,
    Tooltip,
    Legend
);

export default function CandleChart() {
    const [candlestickData, setCandlestickData] = useState({ datasets: [] });
    const [candlestickOption, setCandlestickOptions] = useState({});

    useEffect(() => {
        setCandlestickData({
            labels: ["Jan", "Feb", "Mar", "Apr"],
            datasets: [
                {
                    labels: ["Jan", "Feb", "Mar", "Apr"],
                    data: [10, 20, 30, 40],
                },
            ],
        });
        setCandlestickOptions({
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
                <Radar data={candlestickData} options={setCandlestickOptions} />
            </div>
        </>
    );
};