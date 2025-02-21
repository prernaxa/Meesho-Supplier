"use client";

import { Mail, Phone, MapPin } from "lucide-react";

export default function Support() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold mb-4">Support & Contact Us</h1>
      <p className="text-gray-400 text-center mb-6">
        Have questions? Get in touch with our support team.
      </p>

      <div className="w-full max-w-lg bg-black p-6 rounded-lg shadow-lg border border-gray-700">
        <div className="flex items-center gap-3 mb-4">
          <Phone className="text-blue-500 w-6 h-6" />
          <p className="text-lg">+91 98765 43210</p>
        </div>

        <div className="flex items-center gap-3 mb-4">
          <Mail className="text-green-500 w-6 h-6" />
          <p className="text-lg">support@drobb.in</p>
        </div>

        <div className="flex items-center gap-3">
          <MapPin className="text-red-500 w-6 h-6" />
          <p className="text-lg">Drobb HQ, Bengaluru, India</p>
        </div>
      </div>

      <p className="text-gray-500 text-sm mt-6">
        We are available from **Monday to Saturday, 9 AM - 6 PM**.
      </p>
    </div>
  );
}
