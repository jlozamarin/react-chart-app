import React, { useState, useEffect } from "react"; // useState, useEffect
import BarChart from "./components/BarChart"; // import BarChart component
import LineChart from "./components/LineChart"; // import LineChart component
import ScatterChart from "./components/ScatterChart"; // import ScatterChart component
import BubbleChart from "./components/BubbleChart"; // import BubbleChart component

// app components
const App = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    fetch("/data.json") // fetch data from JSON file
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to retrieve data");
        }
        return response.json();
      })
      .then((data) => {
        setChartData(data); 
      })
      .catch((error) => { // catch any errors
        console.error("Error retrieving the data:", error);
      });
  }, []); 

  if (!chartData) return <div>Loading Financial Data...</div>; // display a loading message 

  const { months, sales, profits, expenses } = chartData;

  return (
    <div>
      <h1>Dynamic Chart Dashboard</h1>
      <BarChart months={months} sales={sales} />
      <LineChart months={months} profits={profits} />
      <ScatterChart expenses={expenses} profits={profits} />
      <BubbleChart expenses={expenses} profits={profits} sales={sales} />
    </div>
  );
};
export default App;