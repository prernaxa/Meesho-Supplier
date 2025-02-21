"use client";

import React from "react";
import { Gift } from "lucide-react";

export default function RewardsSection() {
  return (
    <section className="bg-gradient-to-r from-gray-800 via-purple-900 to-blue-900 text-white rounded-lg p-6 shadow-xl">
      <div className="flex items-center gap-3 mb-4">
        <Gift className="w-8 h-8 text-yellow-400" />
        <h2 className="text-2xl font-bold">Increase Orders with Free Rewards</h2>
      </div>
      <ul className="space-y-2 text-gray-300 text-lg">
        <li>• Earn free 900 Ad credits by uploading 15 catalogs within 21 days.</li>
        <li>• Get catalog upload support – Up to 7 catalogs in the first 30 days.</li>
      </ul>
    </section>
  );
}
