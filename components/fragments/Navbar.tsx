"use client";

import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-black bg-opacity-60 backdrop-blur-md shadow-lg fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-3xl font-bold text-indigo-400">Drobb</span>
        </div>
        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6">
          <Link
            href="/dashboard"
            className="text-lg text-gray-200 hover:text-indigo-300 transition-colors"
          >
            Dashboard
          </Link>
          <Link
            href="/dashboard/catalog"
            className="text-lg text-gray-200 hover:text-indigo-300 transition-colors"
          >
            Catalog
          </Link>
          <Link
            href="/dashboard/orders"
            className="text-lg text-gray-200 hover:text-indigo-300 transition-colors"
          >
            Orders
          </Link>
          <Link
            href="/dashboard/analytics"
            className="text-lg text-gray-200 hover:text-indigo-300 transition-colors"
          >
            Analytics
          </Link>
          <Link
            href="/dashboard/promotions"
            className="text-lg text-gray-200 hover:text-indigo-300 transition-colors"
          >
            Promotions
          </Link>
          <Link
            href="/dashboard/inventory"
            className="text-lg text-gray-200 hover:text-indigo-300 transition-colors"
          >
            Inventory
          </Link>
          <Link
            href="/dashboard/support"
            className="text-lg text-gray-200 hover:text-indigo-300 transition-colors"
          >
            Support
          </Link>
        </nav>
        {/* Right Section */}
        <div className="flex items-center gap-6">
          <Link
            href="/dashboard/settings"
            className="text-lg text-gray-200 hover:text-indigo-300 transition-colors"
          >
            Settings
          </Link>
          <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold">
            S
          </div>
        </div>
      </div>
    </header>
  );
}
