"use client";

import React from "react";

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      <div className="absolute top-[-100px] left-[-100px] w-72 h-72 bg-purple-700 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute top-1/2 right-[-100px] w-72 h-72 bg-blue-700 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-[-100px] left-1/2 w-72 h-72 bg-pink-700 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
    </div>
  );
}
