"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { RegistrationSteps } from "@/components/registrationSteps";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function PersonalDetailsPage() {
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Personal Details:", { firstName, lastName, email, contactNumber });
    router.push("/register/success");
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-900 via-violet-900 to-indigo-900  p-6">
      <div className="w-full max-w-lg bg-white bg-opacity-10 backdrop-blur-md border border-white/30 rounded-2xl p-8 shadow-2xl">
        <RegistrationSteps />
        <h2 className="text-3xl font-bold text-white text-center mb-6">Personal Details</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Input
              type="text"
              placeholder="First Name"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <Input
              type="text"
              placeholder="Last Name"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
          <Input
            type="email"
            placeholder="Email Address"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <Input
            type="tel"
            placeholder="Contact Number"
            required
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <Input
            type="text"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-gray-900 via-purple-900 to-blue-900 transition py-3 rounded-lg text-white font-bold hover:from-gray-800 hover:via-purple-800 hover:to-blue-800"
          >
            Submit
          </Button>
        </form>
      </div>
    </main>
  );
}
