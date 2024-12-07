import React, { useState, useEffect } from "react"; // import useState and useEffect hooks
import BarChart from "./components/BarChart"; // import the BarChart component
import LineChart from "./components/LineChart"; // import the LineChart component
import ScatterChart from "./components/ScatterChart"; // import the ScatterChart component
import BubbleChart from "./components/BubbleChart"; // import the BubbleChart component
import "./App.css"; // import the CSS file

// app component
const App = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to retrieve financial data"); // throw an error if response is not ok
        }
        return response.json();
      })
      .then((data) => {
        setChartData(data);
      })
      .catch((error) => {
        console.error("Error retrieving financial data:", error); // log the error message
      });
  }, []);

  if (!chartData) return <div>Loading Financial Data...</div>; // display loading message if chartData is null

  const { months, sales, profits, expenses } = chartData;

  // display dashboard with charts
  return (
    <div>
      <h1>Dynamic Chart Dashboard</h1> 

      <div className="chart-container"> 
        <h2>Monthly Sales</h2>
        <BarChart months={months} sales={sales} />
      </div>

      <div className="chart-container"> 
        <h2>Monthly Profits</h2>
        <LineChart months={months} profits={profits} />
      </div>

      <div className="chart-container"> 
        <h2>Expenses vs Profits</h2>
        <ScatterChart expenses={expenses} profits={profits} />
      </div>

      <div className="chart-container">
        <h2>Combined Metrics: Sales, Profits, Expenses</h2>
        <BubbleChart expenses={expenses} profits={profits} sales={sales} />
      </div>
    </div>
  );
};

export default App; // export App component