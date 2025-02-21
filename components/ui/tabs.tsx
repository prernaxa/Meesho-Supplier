"use client";

import { useRouter } from "next/navigation";
import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "@/lib/utils";

const Tabs = TabsPrimitive.Root;

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> & { value: string } // ✅ Ensure value is required
>(({ className, value, ...props }, ref) => {
  const router = useRouter(); // ✅ Initialize router inside the function

  return (
    <TabsPrimitive.Trigger
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1.5 text-sm font-medium text-gray-700 transition-all hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 disabled:pointer-events-none disabled:opacity-50 dark:text-gray-300 dark:hover:bg-gray-700 dark:focus-visible:ring-gray-400",
        className
      )}
      onClick={() => router.push(`/orders/${value}`)} // ✅ Navigate using value
      {...props}
    />
  );
});

TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

export { Tabs, TabsTrigger };
