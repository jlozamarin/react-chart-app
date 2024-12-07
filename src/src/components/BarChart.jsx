import React from "react";
import ChartComponent from "./ChartComponent";

// bar chart component
const BarChart = ({ months, sales }) => {
  const data = {
    labels: months,
    datasets: [
      {
        label: "Monthly Sales",
        data: sales,
        backgroundColor: "rgba(220, 198, 224, 0.8)", // lavender background color
        borderColor: "rgba(220, 198, 224, 1)",       // lavender border
        borderWidth: 1,
      },
    ],
  };
// options for bar chart
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
    },
  };

  return <ChartComponent type="bar" data={data} options={options} />; 
};

export default BarChart; // export BarChart component