"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import { Button } from "@/components/ui/button"; // ✅ Import Button
import { Input } from "@/components/ui/input";
import toast from "react-hot-toast";

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Login successful");
    setTimeout(() => {
      router.push("/dashboard");
    }, 1000);
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-black text-white p-4">
      {/* ✅ "drobb." Centered at the Top */}
      <div className="absolute top-12 text-white text-3xl font-bold" style={{ fontFamily: "'Bauer Bodoni Condensed', serif" }}>
        drobb.
      </div>

      {/* ✅ Login Box (Rectangle, No Rounded Corners) */}
      <div className="w-[400px] bg-white text-black p-8 shadow-xl border border-gray-300">
        <div className="mb-6 text-center">
          <h2 className="text-xl font-bold text-black">Login to your Supplier Panel</h2>
          <p className="mt-2 text-sm text-gray-600">
            Enter your credentials to access your store dashboard.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <Input
              type="text"
              placeholder="Email Id"
              required
              className="w-full px-4 py-3 border border-gray-300 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              required
              className="w-full px-4 py-3 border border-gray-300 text-black placeholder-gray-500 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500"
            >
              {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
            </button>
          </div>
          <div className="flex justify-end">
            <Link href="/forgot-password" className="text-sm text-blue-500 hover:underline">
              Forgot password?
            </Link>
          </div>
          {/* ✅ White Button with Black Text */}
          <Button
            type="submit"
            className="w-full bg-gray-300 text-black font-bold py-3 border border-gray-400 hover:bg-gray-400 transition"
          >
            Login
          </Button>
        </form>
      </div>

      {/* ✅ "New to Drobb? Create supplier account" Moved Outside the Box */}
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-400">
          New to Drobb Supplier?{" "}
          <Link href="/register" className="text-blue-500 hover:underline font-medium">
            Create your supplier account
          </Link>
        </p>
      </div>
    </div>
  );
}
