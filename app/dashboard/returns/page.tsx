"use client";

import React, { useState } from "react";

const tabs = ["Overview", "Return Tracking", "Claim Tracking", "Courier Partner"];

const ReturnsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <div className="p-6 min-h-screen bg-gray-100">
      {/* Header */}
      <h1 className="text-2xl font-bold mb-2">Return/RTO Orders</h1>

      {/* Alert Box */}
      <div className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4 mb-4 flex justify-between items-center">
        <div>
          <strong>⚠️ Choose your courier partner for customer returns now</strong>
          <p className="text-sm">
            Starting 1st Jan 2023, your Customer Returns claims will be investigated and approved only by your courier partners.
          </p>
        </div>
        <button className="border border-purple-600 text-purple-600 px-4 py-2 rounded-md">Open Courier Partner</button>
      </div>

      {/* Tabs Navigation */}
      <div className="flex border-b mb-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 text-sm font-medium ${
              activeTab === tab ? "border-b-2 border-purple-600 text-purple-600" : "text-gray-500"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Filters & Search */}
      <div className="flex items-center justify-between mt-4">
        <div className="flex space-x-3">
          <label className="text-gray-600">Summary:</label>
          <select className="border p-2 rounded-md">
            <option value="lastMonth">Last 1 Month</option>
            <option value="last3Months">Last 3 Months</option>
          </select>
        </div>

        <input type="text" placeholder="Search by Order ID, SKU or AWB Number" className="border p-2 rounded-md w-1/3" />
      </div>

      {/* Empty State - No Data */}
      <div className="text-center mt-16">
        <div className="text-6xl mb-4">🔄</div>
        <h3 className="text-lg font-semibold text-gray-700">No data as of now.</h3>
        <p className="text-gray-500 text-sm">Please check again later.</p>
      </div>
    </div>
  );
};

export default ReturnsPage;
