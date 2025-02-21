"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { RegistrationSteps } from "@/components/registrationSteps";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function PickupAddressPage() {
  const router = useRouter();
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Pickup Address:", { address1, address2, city, state, zip });
    router.push("/register/store");
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-900 via-violet-900 to-indigo-900  p-6">
      <div className="w-full max-w-lg bg-white bg-opacity-10 backdrop-blur-md border border-white/30 rounded-2xl p-8 shadow-2xl">
        <RegistrationSteps />
        <h2 className="text-3xl font-bold text-white text-center mb-6">Pickup Address</h2>
        <form onSubmit={handleNext} className="space-y-6">
          <Input
            type="text"
            placeholder="Address Line 1"
            required
            value={address1}
            onChange={(e) => setAddress1(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <Input
            type="text"
            placeholder="Address Line 2 (Optional)"
            value={address2}
            onChange={(e) => setAddress2(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <Input
            type="text"
            placeholder="City"
            required
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <Input
            type="text"
            placeholder="State"
            required
            value={state}
            onChange={(e) => setState(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <Input
            type="text"
            placeholder="ZIP Code"
            required
            value={zip}
            onChange={(e) => setZip(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <Button
            type="submit"
           className="w-full bg-gradient-to-r from-gray-900 via-purple-900 to-blue-900 transition hover:from-gray-800 hover:via-purple-800 hover:to-blue-800 py-3 rounded-lg text-white font-bold"
          >
            Next
          </Button>
        </form>
      </div>
    </main>
  );
}
