import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const DoughnutChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const yValue = [14, 55, 31];
    const barColors = ["#EE8484", "#98D89E", "#F6DC7D"];

    if (chartRef.current) {
      chartRef.current.destroy(); // Destroy the previous chart if it exists
    }

    const myChart = document.getElementById("myChart").getContext("2d");

    chartRef.current = new Chart(myChart, {
      type: "doughnut",
      data: {
        datasets: [
          {
            backgroundColor: barColors,
            data: yValue,
          },
        ],
        options: {
          legend: {
            display: false,
          },
        },
      },
    });
  }, []); // Empty dependency array to run this effect once

  return (
    <div>
      <canvas
        id="myChart"
      ></canvas>
    </div>
  );
};

export default DoughnutChart;
