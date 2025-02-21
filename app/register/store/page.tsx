"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { RegistrationSteps } from "@/components/registrationSteps";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function StoreDetailsPage() {
  const router = useRouter();
  const [storeName, setStoreName] = useState("");
  const [storeURL, setStoreURL] = useState("");
  const [storeContact, setStoreContact] = useState("");

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Store Details:", { storeName, storeURL, storeContact });
    router.push("/register/personal");
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-900 via-violet-900 to-indigo-900  p-6">
      <div className="w-full max-w-lg bg-white bg-opacity-10 backdrop-blur-md border border-white/30 rounded-2xl p-8 shadow-2xl">
        <RegistrationSteps />
        <h2 className="text-3xl font-bold text-white text-center mb-6">Store Details</h2>
        <form onSubmit={handleNext} className="space-y-6">
          <Input
            type="text"
            placeholder="Store Name"
            required
            value={storeName}
            onChange={(e) => setStoreName(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <Input
            type="text"
            placeholder="Store URL"
            required
            value={storeURL}
            onChange={(e) => setStoreURL(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <Input
            type="text"
            placeholder="Store Contact Number"
            required
            value={storeContact}
            onChange={(e) => setStoreContact(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-gray-900 via-purple-900 to-blue-900 transition py-3 rounded-lg text-white font-bold hover:from-gray-800 hover:via-purple-800 hover:to-blue-800"
          >
            Next
          </Button>
        </form>
      </div>
    </main>
  );
}
