"use client";

import { Check, Store, Truck, Building2, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const steps = [
  { title: "Tax Details", icon: Building2, href: "/register" },
  { title: "Pickup Address", icon: Truck, href: "/register/address" },
  { title: "Store Details", icon: Store, href: "/register/store" },
  { title: "Personal Details", icon: User, href: "/register/personal" },
];

export function RegistrationSteps() {
  const pathname = usePathname();

  return (
    <div className="flex justify-between items-center mb-10">
      {steps.map((step) => {
        const currentIndex = steps.findIndex((s) => s.href === pathname);
        const isActive = pathname === step.href;
        const isCompleted = currentIndex > steps.findIndex((s) => s.href === step.href);
        return (
          <Link
            key={step.href}
            href={step.href}
            className={`flex flex-col items-center gap-2 text-sm font-semibold 
              ${isActive ? "text-yellow-500" : isCompleted ? "text-green-500" : "text-gray-400"}`}
          >
            <div
              className={`w-12 h-12 rounded-full flex items-center justify-center border-2 
              ${
                isActive
                  ? "border-yellow-500 bg-indigo-400/20"
                  : isCompleted
                  ? "border-green-500 bg-green-500/20"
                  : "border-gray-400 bg-gray-400/10"
              }`}
            >
              {isCompleted ? <Check className="w-6 h-6" /> : <step.icon className="w-6 h-6" />}
            </div>
            <span>{step.title}</span>
          </Link>
        );
      })}
    </div>
  );
}
