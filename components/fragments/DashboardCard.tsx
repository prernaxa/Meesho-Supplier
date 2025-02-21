"use client";

import Link from "next/link";
import React from "react";

export interface DashboardCardProps {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
}

export default function DashboardCard({
  title,
  description,
  href,
  icon,
}: DashboardCardProps) {
  return (
    <Link href={href} className="transform hover:scale-105 transition duration-300">
      <div className="p-6 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/30 shadow-xl hover:shadow-2xl h-full flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-bold">{title}</h3>
            {icon}
          </div>
          <p className="text-gray-300">{description}</p>
        </div>
        <div className="mt-4 text-right">
          <span className="text-indigo-300 font-semibold hover:underline">
            Explore →
          </span>
        </div>
      </div>
    </Link>
  );
}
