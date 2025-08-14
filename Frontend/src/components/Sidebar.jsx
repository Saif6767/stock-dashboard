import React from "react";

export default function Sidebar({ companies, selected, setSelected, isOpen, toggleSidebar }) {
  return (
    <aside
      className={`bg-gray-900 text-white w-64 p-4 fixed inset-y-0 left-0 transform overflow-y-auto h-full ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } md:static md:translate-x-0 transition-transform duration-300 ease-in-out z-20`}
    >
      <h2 className="text-lg font-bold mb-4">Companies</h2>
      <ul>
        {companies.map((c) => (
          <li
            key={c.symbol}
            className={`p-2 mb-2 rounded cursor-pointer ${
              selected.symbol === c.symbol ? "bg-blue-600" : "hover:bg-gray-700"
            }`}
            onClick={() => {
              setSelected(c);
              toggleSidebar(false);
            }}
          >
            {c.name}
          </li>
        ))}
      </ul>
    </aside>
  );
}
