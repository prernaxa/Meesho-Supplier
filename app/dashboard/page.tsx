"use client";

import React, { useState, useEffect } from "react";
import AnimatedBackground from "../../components/fragments/AnimatedBackground";
import Footer from "../../components/fragments/Footer";
import Sidebar from "../../components/fragments/Sidebar";
import CatalogUpload from "../../components/fragments/CatalogUpload";
import UsefulLinks from "../../components/fragments/UsefulLinks";
import DashboardBanner from "../../components/fragments/DashboardBanner";
import BookTraining from "../../components/fragments/BookTraining";

export default function DashboardPage() {
  // State to determine if the device width is less than 500px.
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to check the current window width.
    const checkWidth = () => {
      setIsMobile(window.innerWidth < 500);
    };

    // Check on mount.
    checkWidth();

    // Update state when window is resized.
    window.addEventListener("resize", checkWidth);

    // Cleanup the event listener on unmount.
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  return (
    <>
      <div
        className={`relative bg-black text-white overflow-hidden flex ${
          isMobile ? "filter blur-md h-[100vh]" : "min-h-screen"
        }`}
      >
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex-1 flex flex-col ml-64">
          {/* Animated Background */}
          <AnimatedBackground />

          <main className="container mx-auto px-6 pt-4 pb-16 relative z-10">
            <DashboardBanner />
            <CatalogUpload />
            <BookTraining />
            <UsefulLinks />
          </main>

          {/* Footer */}
          <Footer />
        </div>
      </div>

      {/* Modal overlay for devices with width less than 500px */}
      {isMobile && (
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="bg-white text-black p-6 rounded-lg shadow-lg mx-4 text-center">
            <h2 className="text-xl font-bold mb-4">Access Restricted :</h2>
            <p className="text-sm">
              Sorry, this dashboard can only be accessed on a desktop or laptop.
            </p>
          </div>
        </div>
      )}
    </>
  );
}