import React, { useState, useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const BarChart = () => {
  const chartRef = useRef(null);
  const [value, setValue] = useState([]);

  

  useEffect(() => {
    const xValues = ["Week 1", "Week 2", "Week 3", "Week 4"];
    const latitude = [];
    const longitude = [];

    value.forEach((item) => {
      latitude.push(item.latitude); // Convert latitude to a number
      longitude.push(item.longitude); // Convert longitude to a number
    });

    console.log("Latitude:", latitude);
    console.log("Longitude:", longitude);

    const datasets = [
      {
        label: "Guest",
        backgroundColor: "#98D89E",
        data: latitude,
      },
      {
        label: "User",
        backgroundColor: "#EE8484",
        data: longitude,
      },
    ];

    if (chartRef.current) {
      chartRef.current.destroy();
    }

    const myChartBar = document.getElementById("myChartBar").getContext("2d");

    chartRef.current = new Chart(myChartBar, {
      type: "bar",
      data: {
        labels: xValues,
        datasets: datasets,
      },
      options: {
        legend: {
          display: false,
          position: "top",
        },
      },
    });
  }, [value]); // Dependency on 'value', so the effect updates when 'value' changes

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await fetch(
        "https://api.openbrewerydb.org/v1/breweries?by_dist=38.8977,77.0365&per_page=3",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setValue(data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <canvas
        id="myChartBar"
        style={{ height: "100px", marginTop: "20px" }}
      ></canvas>
    </div>
  );
};

export default BarChart;
