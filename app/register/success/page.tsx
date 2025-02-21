"use client";

import Link from "next/link";

export default function RegistrationSuccessPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-900 via-violet-900 to-indigo-900  p-6">
      <div className="w-full max-w-xl bg-white bg-opacity-80 backdrop-blur-sm border border-gray-200 rounded-3xl p-10 shadow-2xl text-center relative overflow-hidden">
        <div className="relative z-10">
          <div className="text-6xl md:text-9xl mb-6">✅</div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Registration Successful!</h1>
          <p className="text-xl text-gray-700 mb-8">
            Hurray! Thank you for choosing Drobb. Your supplier account has been created successfully.
          </p>
          <Link
            href="/dashboard"
            className="w-full bg-gradient-to-r from-gray-900 via-purple-900 to-blue-900 font-bold hover:from-gray-800 hover:via-purple-800 hover:to-blue-800 inline-block bg-indigo-600 text-white hover:bg-indigo-700 transition-colors py-3 px-8 rounded-full text-xl md:text-2xl"
          >
            Go to Dashboard
          </Link>
        </div>
      </div>
    </main>
  );
}
