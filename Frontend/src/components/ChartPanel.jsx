import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function ChartPanel({ stock, selected }) {
  if (!stock) return <div>Loading chart...</div>;

  // हर segment के लिए color decide करना (up = green, down = red)
  const segmentColors = stock.prices.map((price, index) => {
    if (index === 0) return "gray"; // पहला point neutral
    return price >= stock.prices[index - 1] ? "green" : "red";
  });

  const chartData = {
    labels: stock.dates,
    datasets: [
      {
        label: `${selected.name} Price (INR)`,
        data: stock.prices,
        borderColor: segmentColors,
        backgroundColor: "rgba(0,0,0,0)",
        tension: 0.2,
        segment: {
          borderColor: ctx => segmentColors[ctx.p1DataIndex],
        },
      },
    ],
  };

  return (
    <div className="bg-white p-4 rounded shadow-md w-full min-w-0">
      {/* Height: mobile 250px, md 400px, lg 500px */}
      <div className="relative w-full h-[250px] md:h-[400px] lg:h-[500px]">
        <Line
          data={chartData}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: { position: "top" },
              title: { display: true, text: `${selected.name} Stock Price` },
            },
          }}
        />
      </div>
    </div>
  );
}
