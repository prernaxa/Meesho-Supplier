"use client";

import React from "react";
// import { Link } from "react-router-dom"; // Import Link
import Link from "next/link";
import Sidebar from "../../../components/fragments/Sidebar";

const OrdersPage: React.FC = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-8 bg-gray-100">
        <h1 className="text-2xl font-bold mb-6">Orders</h1>

        {/* Status Tags */}
        <div className="flex gap-4 mb-6">
          <Link href="/on-hold">
            <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">On Hold</button>
          </Link>
          <Link href="/pending">
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Pending (0)</button>
          </Link>
          <Link href="/ready-to-ship">
            <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">Ready to Ship</button>
          </Link>
          <Link href="/shipped">
            <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">Shipped</button>
          </Link>
          <Link href="/cancelled">
            <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">Cancelled</button>
          </Link>
        </div>

        {/* Filters */}
        <div className="mb-6">
          <h2 className="text-sm font-semibold mb-2">Filter by:</h2>
          <div className="flex gap-4">
            <select className="px-4 py-2 bg-white border border-gray-300 rounded-lg">
              <option>SLA Status</option>
              {/* Add other options here */}
            </select>
            <input type="date" className="px-4 py-2 bg-white border border-gray-300 rounded-lg" />
            <input type="date" className="px-4 py-2 bg-white border border-gray-300 rounded-lg" />
          </div>
        </div>

        {/* Orders Table */}
        <div className="bg-white p-6 rounded-lg shadow">
          <p className="text-gray-600">No orders yet</p>
          <p className="text-gray-400 text-sm mt-2">But keep checking this section from time to time.</p>
        </div>

        {/* Additional Actions */}
        <div className="mt-6 flex justify-between items-center">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            Download Orders Data
          </button>
          <div className="flex gap-4">
            <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
              Notices (1)
            </button>
            <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
              Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrdersPage;