import React from "react";
import ChartComponent from "./ChartComponent";

// scatter chart component
const ScatterChart = ({ expenses, profits }) => {
  const data = {
    datasets: [
      {
        label: "Expenses vs Profits",
        data: expenses.map((expense, i) => ({
          x: expense,
          y: profits[i],
        })),
        backgroundColor: "rgba(220, 198, 224, 0.8)", // lavender background color
        borderColor: "rgba(220, 198, 224, 1)",       // lavender border color
      },
    ],
  };
// options for scatter chart
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

  return <ChartComponent type="scatter" data={data} options={options} />;
};

export default ScatterChart;