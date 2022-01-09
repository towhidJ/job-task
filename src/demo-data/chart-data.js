export const data = {
    series: [
        {
            name: "data-1",
            data: [18000, 26000, 21000],
        },
        {
            name: "data-2",
            data: [12000, 20000, 16000],
        },
    ],
    options: {
        chart: {
            type: "bar",
            height: 430,
        },
        title: {
            text: "Quarterly Perfomance",
        },
        fill: { colors: ["#008E97", "#DA9100"] },
        colors: ["#008E97", "#DA9100"],
        plotOptions: {
            bar: {
                horizontal: true,
                dataLabels: {
                    position: "top",
                },
                fill: {
                    colors: ["red", "#E91E63"],
                },
            },
        },
        dataLabels: {
            enabled: true,
            offsetX: -6,
            style: {
                fontSize: "12px",
                colors: ["#fff"],
            },
        },
        stroke: {
            show: true,
            width: 1,
            colors: ["#fff"],
        },
        tooltip: {
            shared: true,
            intersect: false,
        },
        xaxis: {
            categories: ["JAN", "FEB", "MAR"],
        },
    },
};

export const dataA = {
    series: [
        {
            data: [1000, 2000, 3000, 4000],
        },
        {
            data: [3000, 4000, 3000, 5000],
        },
        {
            data: [6000, 6500, 7000, 8000],
        },
    ],
    options: {
        chart: {
            type: "bar",
            height: 230,
        },
        fill: { colors: ["#008E97", "#DA9100", "#FB564E"] },
        colors: ["#008E97", "#DA9100", "#FB564E"],
        plotOptions: {
            bar: {
                horizontal: false,
                dataLabels: {
                    position: "top",
                },
            },
        },
        labels: ["Q1", "Q2", "Q3", "Q4"],
        dataLabels: {
            enabled: true,
            offsetX: -6,
            style: {
                fontSize: "10px",
                colors: ["#005549"],
            },
        },
        stroke: {
            show: true,
            width: 1,
            colors: ["#fff"],
        },
        tooltip: {
            shared: true,
            intersect: false,
        },
        xaxis: {
            categories: ["JAN", "FEB", "MAR"],
        },
        title: {
            text: "Ageing Statement",
        },
    },
};

export const donatData = {
    series: [3950, 2654],
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
        fill: { colors: ["#008E97", "#DA9100"] },
        colors: ["#008E97", "#DA9100"],
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
        labels: ["General", "Midea"],
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
            text: "Quantity By Brand",
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
