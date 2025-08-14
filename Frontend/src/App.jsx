import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import TopBar from "./components/TopBar";
import ChartPanel from "./components/ChartPanel";
import MetricCard from "./components/MetricCard";
import useStockData from "./hooks/useStockData";

export default function App() {
  const { companies, selected, setSelected, stock } = useStockData();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar
        companies={companies}
        selected={selected}
        setSelected={setSelected}
        isOpen={sidebarOpen}
        toggleSidebar={setSidebarOpen}
      />

      <div className="flex flex-col flex-1">
        <TopBar selected={selected} toggleSidebar={setSidebarOpen} />

        <main className="p-4 space-y-4 overflow-y-auto">
          <ChartPanel stock={stock} selected={selected} />

          {stock && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <MetricCard title="52 Week High" value={stock.metrics.high52} />
              <MetricCard title="52 Week Low" value={stock.metrics.low52} />
              <MetricCard title="Avg Volume" value={stock.metrics.avgVolume} />
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
