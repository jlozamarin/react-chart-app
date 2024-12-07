import React from "react";
import ChartComponent from "./ChartComponent";

// bubble chart component
const BubbleChart = ({ expenses, profits, sales }) => {
  const data = {
    datasets: [
      {
        label: "Sales, Profits, and Expenses",
        data: expenses.map((expense, i) => ({
          x: expense,
          y: profits[i],
          r: sales[i] / 50, // scale bubble size
        })),
        backgroundColor: "rgba(220, 198, 224, 0.8)", // lavender background color
        borderColor: "rgba(220, 198, 224, 1)",       // lavender border color
      },
    ],
  };
// options for bubble chart
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
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