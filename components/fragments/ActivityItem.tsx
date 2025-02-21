"use client";

import React from "react";

export interface ActivityItemProps {
  title: string;
  time: string;
  description: string;
}

export default function ActivityItem({
  title,
  time,
  description,
}: ActivityItemProps) {
  return (
    <div className="p-4 bg-white bg-opacity-10 backdrop-blur-md rounded-lg shadow-md">
      <div className="flex items-center justify-between mb-2">
        <h4 className="text-xl font-bold">{title}</h4>
        <span className="text-sm text-gray-400">{time}</span>
      </div>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}
