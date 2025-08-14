import React from "react";

export default function TopBar({ selected, toggleSidebar }) {
  return (
    <div className="flex items-center justify-between bg-white p-4 shadow-md sticky top-0 z-10">
      <button
        className="md:hidden text-2xl"
        onClick={() => toggleSidebar(true)}
      >
        ☰
      </button>
      <h1 className="text-lg md:text-xl font-bold truncate">{selected?.name}</h1>
      <div className="w-8 h-8 bg-gray-300 rounded-full flex-shrink-0"></div>
    </div>
  );
}
