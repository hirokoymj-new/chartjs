import React from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May"],
  datasets: [
    {
      label: "2020 (M)",
      data: [3, 2, 2, 1, 5],
      borderColor: ["rgba(255, 99, 132, 1)"],
      backgroundColor: ["rgba(255, 99, 132, 0.2)"],
      fill: true,
      tension: 0.4,
    },
    {
      label: "2019(M)",
      data: [1, 3, 2, 2, 3],
      borderColor: ["rgba(54, 162, 235, 1)"],
      backgroundColor: ["rgba(54, 162, 235, 0.2)"],
      fill: true,
      tension: 0.4,
    },
  ],
};

const options = {
  interaction: {
    mode: "index",
    intersect: false,
  },
  plugins: {
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
  scales: {
    y: {
      min: 0,
      max: 6,
      ticks: {
        stepSize: 1,
      },
    },
  },
};

export const LineChart = () => {
  return <Line data={data} options={options} />;
};
