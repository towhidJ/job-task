import { Grid } from "@mui/material";
import React from "react";
import ReactApexChart from "react-apexcharts";
import { dataA, donatData } from "../../demo-data/chart-data";

const AgeningStatement = () => {
    return (
        <Grid
            container
            spacing={2}
            sx={{ alignItems: "center", justifyContent: "center" }}
        >
            <Grid item xs={12} md={4}>
                <ReactApexChart
                    options={dataA.options}
                    series={dataA.series}
                    type="bar"
                    height={430}
                />
            </Grid>
            <Grid item xs={12} md={4}>
                <h1>Partial Delivery Report</h1>
                <div>
                    <h1>Shipped</h1>
                    <h2>72% (123)</h2>
                </div>
                <div>
                    <h1>Balance</h1>
                    <h2>28% (13)</h2>
                </div>
            </Grid>
            <Grid item xs={12} md={4}>
                <ReactApexChart
                    options={donatData.options}
                    series={donatData.series}
                    type="donut"
                />
            </Grid>
        </Grid>
    );
};

export default AgeningStatement;
