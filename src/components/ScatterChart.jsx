import React from "react";
import ChartComponent from "./ChartComponent";

const ScatterChart = ({ expenses, profits }) => {
  const data = {
    datasets: [
      {
        label: "Expenses vs Profits",
        data: expenses.map((expense, i) => ({
          x: expense,
          y: profits[i],
        })),
        backgroundColor: "rgba(255, 99, 132, 0.8)", // red
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
        enabled: true,
        callbacks: {
          label: function (context) {
            const { raw } = context;
            return `(${raw.x}, ${raw.y})`;
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Expenses",
        },
      },
      y: {
        title: {
          display: true,
          text: "Profits",
        },
      },
    },
  };

  return <ChartComponent type="scatter" data={data} options={options} />;
};

export default ScatterChart;