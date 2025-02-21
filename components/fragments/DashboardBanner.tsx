"use client";

import React from "react";
import RewardsSection from "./RewardsSection";

export default function DashboardBanner() {
  return (
    <section className="mb-12">
      <div className="bg-black bg-opacity-40 backdrop-blur-md rounded-2xl p-8 shadow-2xl">
        <h2 className="text-4xl font-extrabold mb-2">Welcome Back, Seller!</h2>
        <div className="py-5">
        <RewardsSection/>
        </div>
      </div>
    </section>
  );
}
