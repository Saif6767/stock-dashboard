import React from "react";

export default function MetricCard({ title, value }) {
  return (
    <div className="bg-white p-4 rounded shadow-md text-center">
      <h3 className="text-xs md:text-sm font-medium text-gray-500">{title}</h3>
      <p className="text-lg md:text-2xl font-bold">{value}</p>
    </div>
  );
}
