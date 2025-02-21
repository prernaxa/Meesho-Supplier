"use client";

import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black bg-opacity-60 backdrop-blur-md py-4">
      <div className="container mx-auto text-center text-gray-300 text-sm space-y-2">
        <p>&copy; {new Date().getFullYear()} Drobb. All rights reserved.</p>
        <div className="space-x-4">
          <Link
            href="/terms"
            className="hover:text-indigo-300 transition-colors"
          >
            Terms of Service
          </Link>
          <Link
            href="/privacy"
            className="hover:text-indigo-300 transition-colors"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
