import React, { useRef, useEffect } from "react"; // import React, useRef, and useEffect hooks
import { Chart, registerables } from "chart.js"; // import Chart and registerables from Chart.js

// register all necessary Chart.js components
Chart.register(...registerables);

const ChartComponent = ({ type, data, options }) => {
  const chartRef = useRef(null);
  let chartInstance = null;

  useEffect(() => {
    if (chartRef.current) {
      // destroy existing chart instance
      if (chartInstance) {
        chartInstance.destroy();
      }

      chartInstance = new Chart(chartRef.current, {
        type: type,
        data: data,
        options: options,
      });
    }

    // cleanup function
    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, [type, data, options]);

  return <canvas ref={chartRef} />;
};

export default ChartComponent;