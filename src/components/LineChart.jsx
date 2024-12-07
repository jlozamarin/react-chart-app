import React from "react";
import ChartComponent from "./ChartComponent";

const LineChart = ({ months, profits }) => {
  const data = {
    labels: months,
    datasets: [
      {
        label: "Monthly Profits",
        data: profits,
        borderColor: "rgba(75, 192, 192, 0.8)", // teal
        backgroundColor: "rgba(75, 192, 192, 0.2)", 
        tension: 0.4, 
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
      tooltip: {
        enabled: true, //tooltips
      },
    },
    scales: {
      x: {
        ticks: {
          font: {
            size: 12,
          },
        },
      },
      y: {
        ticks: {
          font: {
            size: 12,
          },
        },
      },
    },
  };

  return <ChartComponent type="line" data={data} options={options} />;
};

export default LineChart;