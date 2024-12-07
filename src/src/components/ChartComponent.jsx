import React, { useEffect, useRef } from "react"; // useEffect, useRef
import Chart from "chart.js/auto";

// manage chart lifecycle
const ChartComponent = ({ type, data, options }) => {
    const chartRef = useRef(null); 
    const chartInstance = useRef(null); 
  
    useEffect(() => { 
      if (chartInstance.current) {
        chartInstance.current.destroy(); 
      }
  
      // reusable chart component
      const ctx = chartRef.current.getContext("2d");
      chartInstance.current = new Chart(ctx, {
        type,
        data,
        options,
      });
  
      return () => { // cleanup
        if (chartInstance.current) {
          chartInstance.current.destroy(); 
        }
      };
    }, [type, data, options]); 
  
    return <canvas ref={chartRef}></canvas>; 
  };
  
  export default ChartComponent;
