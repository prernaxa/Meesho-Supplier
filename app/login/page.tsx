"use client";

import { LoginForm } from "@/components/loginForm";

export default function LoginPage() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden flex items-center justify-center p-4">
      {/* Decorative Animated Background Blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-100px] left-[-100px] w-72 h-72 bg-black-700 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-1/2 right-[-100px] w-72 h-72 bg-black-700 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-100px] left-1/2 w-72 h-72 bg-black-700 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      {/* Login Form */}
      <div className="relative z-10 w-full max-w-md bg-black rounded-lg p-8 shadow-lg text-black">
        <LoginForm />
      </div>
    </div>
  );
}
