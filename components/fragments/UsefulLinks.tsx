"use client";

import React from "react";
import Link from "next/link";
import {
  Youtube,
  DollarSign,
  Truck,
  HelpCircle,
  MessageSquare,
  Link2,
} from "lucide-react";

export default function UsefulLinks() {
  return (
    <section className="p-4 bg-white bg-opacity-10 backdrop-blur-md rounded-lg mt-6 shadow-xl">
      <div className="flex items-center gap-3 mb-4">
        <Link2 className="w-8 h-8 text-indigo-400" />
        <h2 className="text-2xl font-bold">Useful Links</h2>
      </div>
      <ul className="space-y-3 px-5">
        {/* Prepare Catalog for Drobb */}
        <li>
          <Link
            href="/catalog-guide"
            className=" gap-3 p-3 bg-gray-800 bg-opacity-70 backdrop-blur-xl rounded-xl flex items-center hover:shadow-2xl hover:bg-opacity-100 transition-shadow cursor-pointer"
          >
            <Youtube className="w-6 h-6 text-red-500" />
            <span className="text-lg">Prepare Catalog for Drobb</span>
          </Link>
        </li>
        {/* Pricing & Commission */}
        <li>
          <Link
            href="/pricing-commission"
            className=" gap-3 p-3 bg-gray-800 bg-opacity-70 backdrop-blur-xl rounded-xl flex items-center hover:shadow-2xl hover:bg-opacity-100 transition-shadow cursor-pointer"
          >
            <DollarSign className="w-6 h-6 text-green-400" />
            <span className="text-lg">Pricing & Commission</span>
          </Link>
        </li>
        {/* Delivery & Returns */}
        <li>
          <Link
            href="/delivery-returns"
            className=" gap-3 p-3 bg-gray-800 bg-opacity-70 backdrop-blur-xl rounded-xl flex items-center hover:shadow-2xl hover:bg-opacity-100 transition-shadow cursor-pointer"
          >
            <Truck className="w-6 h-6 text-yellow-400" />
            <span className="text-lg">Delivery & Returns</span>
          </Link>
        </li>
        {/* Talk to Our Experts */}
        <li>
          <Link
            href="/contact-experts"
            className=" gap-3 p-3 bg-gray-800 bg-opacity-70 backdrop-blur-xl rounded-xl flex items-center hover:shadow-2xl hover:bg-opacity-100 transition-shadow cursor-pointer"
          >
            <MessageSquare className="w-6 h-6 text-purple-400" />
            <span className="text-lg">Talk to Our Experts</span>
          </Link>
        </li>
        {/* Help */}
        <li>
          <Link
            href="/help"
            className=" gap-3 p-3 bg-gray-800 bg-opacity-70 backdrop-blur-xl rounded-xl flex items-center hover:shadow-2xl hover:bg-opacity-100 transition-shadow cursor-pointer"
          >
            <HelpCircle className="w-6 h-6 text-blue-400" />
            <span className="text-lg">Need any other help</span>
          </Link>
        </li>
      </ul>
    </section>
  );
}
