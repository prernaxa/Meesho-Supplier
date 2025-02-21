"use client";
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Sidebar from "../../../../components/fragments/Sidebar";

export default function ReadyToShipPage() {
  const router = useRouter();
  const pathname = usePathname();
  const [searchTerm, setSearchTerm] = useState("");
  const readyToShipOrders = []; 

  const tabs = ["on-hold", "pending", "ready-to-ship", "shipped", "cancelled"];
  const activeTab = pathname.split("/").pop() || "pending";

  const handleTabClick = (tab: string) => {
    router.replace(`/dashboard/orders/${tab}`);
    router.refresh();
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col w-full p-6 ml-64">
        <h2 className="text-2xl font-semibold">Orders</h2>

        
        <div className="flex items-center bg-gray-100 p-4 rounded-md mb-4 shadow-sm">
          <span className="text-sm text-gray-700">
            🚀 As per Meesho packaging policy, all sellers must use Transparent Barcoded Packaging for their products.
          </span>
          <div className="ml-auto flex space-x-2">
            <Button variant="outline" className="border-gray-400 text-gray-700 px-3 py-1 text-xs">
              Buy Barcoded Packets
            </Button>
            <Button className="bg-purple-600 text-white px-3 py-1 text-xs">Scan Barcoded Packets</Button>
          </div>
        </div>

        
        <div className="flex border-b mb-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabClick(tab)}
              className={`px-4 py-2 text-sm ${
                activeTab === tab ? "font-bold text-black border-b-2 border-purple-600" : "text-gray-500"
              }`}
            >
              {tab.replace("-", " ")} (0)
            </button>
          ))}
        </div>

    
        {readyToShipOrders.length === 0 ? (
          <Card className="p-8 flex flex-col items-center text-center bg-gray-50">
            <p className="text-lg font-medium text-gray-700">No {activeTab} orders yet</p>
            <p className="text-sm text-gray-500">Keep checking this section from time to time.</p>
          </Card>
        ) : (
          <div>/* Render orders here */</div>
        )}
      </div>
    </div>
  );
}
