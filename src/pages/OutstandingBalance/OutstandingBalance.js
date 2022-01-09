import { Box } from "@mui/material";
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import React from "react";
import ReactApexChart from "react-apexcharts";

ChartJS.register(ArcElement, Tooltip, Legend);
export const data = {
    series: [223, 132, 121],
    options: {
        chart: {
            width: 260,
            type: "donut",
            dropShadow: {
                enabled: true,
                color: "#111",
                top: -1,
                left: 3,
                blur: 3,
                opacity: 0.2,
            },
        },
        fill: { colors: ["#008E97", "#DA9100", "#FB564E"] },
        colors: ["#008E97", "#DA9100", "#FB564E"],
        stroke: {
            width: 0,
        },
        plotOptions: {
            pie: {
                donut: {
                    labels: {
                        show: true,
                        total: {
                            showAlways: true,
                            show: true,
                        },
                    },
                },
            },
        },
        labels: ["Aed", "Aed", "Aed"],
        dataLabels: {
            dropShadow: {
                blur: 3,
                opacity: 0.8,
            },
        },

        states: {
            hover: {
                filter: "none",
            },
        },

        title: {
            text: "Out Stranding Balance",
        },
        responsive: [
            {
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200,
                    },
                    legend: {
                        position: "bottom",
                    },
                },
            },
        ],
    },
};
const plugins = [
    {
        beforeDraw: function (chart) {
            var width = chart.width,
                height = chart.height,
                ctx = chart.ctx;
            ctx.restore();
            var fontSize = (height / 260).toFixed(2);
            ctx.font = fontSize + "em sans-serif";
            ctx.textBaseline = "top";
            var text = `AED 2423`,
                textX = Math.round((width - ctx.measureText(text).width) / 2),
                textY = height / 2;
            ctx.fillText(text, textX, textY);
            ctx.save();
        },
    },
];
const OutstandingBalance = () => {
    return (
        <Box sx={{ width: 300 }}>
            <ReactApexChart
                options={data.options}
                series={data.series}
                type="donut"
            />
        </Box>
    );
};

export default OutstandingBalance;
