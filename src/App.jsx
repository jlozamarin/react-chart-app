import React, { useState, useEffect } from "react"; // useState, useEffect
import BarChart from "./components/BarChart"; // bar chart component
import LineChart from "./components/LineChart"; // line chart component
import ScatterChart from "./components/ScatterChart"; // scatter chart component
import BubbleChart from "./components/BubbleChart"; // bubble chart component
import financialData from "./data/financial_data.json"; // financial data

// app components
const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(financialData); 
  }, []);

  if (!data) return <div>Loading Financial Data...</div>; // loading message

  const { months, sales, profits, expenses } = data; 

// dynamic chart dashboard
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