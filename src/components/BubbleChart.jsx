import React from "react";
import ChartComponent from "./ChartComponent";

const BubbleChart = ({ expenses, profits, sales }) => {
  const data = {
    datasets: [
      {
        label: "Sales, Profits, and Expenses",
        data: expenses.map((expense, i) => ({
          x: expense,
          y: profits[i],
          r: sales[i] / 50, 
        })),
        backgroundColor: "rgba(153, 102, 255, 0.8)", // lavender color
        borderColor: "rgba(153, 102, 255, 1)",
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
            return `(${raw.x}, ${raw.y}), Size: ${raw.r}`;
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

  return <ChartComponent type="bubble" data={data} options={options} />;
};

export default BubbleChart;