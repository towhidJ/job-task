import { Box, Container } from "@mui/material";
import {
    BarElement,
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LinearScale,
    PointElement,
    Title,
    Tooltip,
} from "chart.js";
import React from "react";
import ReactApexChart from "react-apexcharts";
import { data } from "../../demo-data/chart-data";
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const config = {
    indexAxis: "y",
    elements: {
        bar: {
            borderWidth: 2,
        },
    },
    responsive: true,
    plugins: {
        legend: {
            position: "right",
        },
        title: {
            display: true,
            text: "Achivement",
        },
    },
};
const labels = ["January", "February", "March"];

const Achivement = () => {
    return (
        <Container maxWidth="lg">
            <Box sx={{}}>
                {/* <Bar options={config} data={data} /> */}
                <ReactApexChart
                    options={data.options}
                    series={data.series}
                    type="bar"
                    height={430}
                />
            </Box>
        </Container>
    );
};

export default Achivement;
