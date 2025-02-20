import React, { useEffect, useRef, useState } from "react";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

function ConsumptionChart({ heading, apiUrl, id }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const barChartRef = useRef(null);
  const pieChartRef = useRef(null);
  const lineChartRef = useRef(null);
  const chartInstances = useRef({});

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      createCharts();
    }
  }, [data]);

  // Fetch Data
  const fetchData = async () => {
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) throw new Error("Failed to fetch data");

      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  // Create & Update Charts
  const createCharts = () => {
    const chartTypes = [
      { ref: pieChartRef, type: "pie" },
      { ref: lineChartRef, type: "line" },
      { ref: barChartRef, type: "bar" },
    ];

    chartTypes.forEach(({ ref, type }) => {
      if (!ref.current) return;
      if (chartInstances.current[type]) {
        chartInstances.current[type].destroy();
      }
      
      const ctx = ref.current.getContext("2d");
      chartInstances.current[type] = new Chart(ctx, {
        type,
        data: {
          labels: data.map((item) => item.month),
          datasets: [
            {
              label: heading,
              data: data.map((item) => item.total),
              backgroundColor: ["#ff6384", "#36a2eb", "#ffce56", "#4bc0c0", "#9966ff", "#ff9f40"],
              borderColor: ["#ff6384", "#36a2eb", "#ffce56", "#4bc0c0", "#9966ff", "#ff9f40"],
              borderWidth: 2,
              fill: type === "line",
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: true } },
          animation: { duration: 1000, easing: "easeInOutQuart" },
        },
      });
    });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl mx-auto">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">{heading}</h2>

      {loading ? (
        <p className="text-gray-600 text-center">Loading data...</p>
      ) : data.length === 0 ? (
        <p className="text-red-500 text-center">No data available for {heading}.</p>
      ) : (
        <>
          <div className="relative w-full h-64 mb-6">
            <canvas ref={pieChartRef} className="w-full h-full"></canvas>
          </div>
          {/* <div className="relative w-full h-64 mb-6">
            <canvas ref={lineChartRef} className="w-full h-full"></canvas>
          </div> */}
          {/* <div className="relative w-full h-96">
            <canvas ref={barChartRef} className="w-full h-full"></canvas>
          </div> */}
        </>
      )}
    </div>
  );
}

export default ConsumptionChart;
