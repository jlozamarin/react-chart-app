import React from "react";
import ChartComponent from "./ChartComponent";

// line chart component
const LineChart = ({ months, profits }) => {
  const data = {
    labels: months,
    datasets: [
      {
        label: "Monthly Profits",
        data: profits,
        borderColor: "rgba(220, 198, 224, 0.8)",    // lavender border color
        backgroundColor: "rgba(220, 198, 224, 0.3)", // lavender fill color
        fill: true,
        tension: 0.4, // smooth line
      },
    ],
  };
// options for line chart
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
    },
  };

  return <ChartComponent type="line" data={data} options={options} />;
};

export default LineChart;