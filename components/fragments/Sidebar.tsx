"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { 
  Home, ShoppingCart, Truck, DollarSign, Package, 
  Upload, CreditCard, Box, Users, Bell, LifeBuoy 
} from "lucide-react";

export default function Sidebar() {
  const router = useRouter();
  const navItemClass = "flex items-center gap-3 p-2 rounded-md transition hover:bg-gray-800";

  return (
    <aside className="w-64 bg-black text-white min-h-screen shadow-lg flex flex-col">
      
      {/* Header */}
      <div className="p-4 border-b border-gray-700 flex justify-between items-center">
        <h2 className="text-lg font-bold">Drobb</h2>
      </div>

      {/* Notices & Support */}
      <div className="flex p-3 gap-2 border-b border-gray-700">
        <button 
          onClick={() => router.push("/dashboard/notices")} 
          className="flex-1 bg-gray-900 p-2 rounded-md text-center hover:bg-gray-800 transition"
          aria-label="Notices"
        >
          🔔 Notices
        </button>
        <button 
          onClick={() => router.push("/dashboard/support")} 
          className="flex-1 bg-gray-900 p-2 rounded-md text-center hover:bg-gray-800 transition"
          aria-label="Support"
        >
          🎧 Support
        </button>
      </div>

      {/* Navigation */}
      <nav className="p-3 space-y-2">
        <Link href="/dashboard/home" className={navItemClass}>
          <Home className="w-5 h-5" /> Home
        </Link>

        {/* Manage Business */}
        <h2 className="text-xs uppercase text-gray-400 mt-4 mb-2">Manage Business</h2>
        <Link href="/dashboard/orders" className={navItemClass}>
          <ShoppingCart className="w-5 h-5" /> Orders
        </Link>
        <Link href="/dashboard/returns" className={navItemClass}>
          <Truck className="w-5 h-5" /> Returns
        </Link>
        <Link href="/dashboard/pricing" className={navItemClass}>
          <DollarSign className="w-5 h-5" /> Pricing
        </Link>
        <Link href="/dashboard/inventory" className={navItemClass}>
          <Package className="w-5 h-5" /> Inventory
        </Link>
        <Link href="/dashboard/catalog-uploads" className={navItemClass}>
          <Upload className="w-5 h-5" /> Catalog Uploads
        </Link>
        <Link href="/dashboard/payments" className={navItemClass}>
          <CreditCard className="w-5 h-5" /> Payments
        </Link>
        <Link href="/dashboard/warehouse" className={navItemClass}>
          <Box className="w-5 h-5" /> Warehouse
        </Link>

        {/* Boost Sales */}
        <h2 className="text-xs uppercase text-gray-400 mt-4 mb-2">Boost Sales</h2>
        <Link href="/dashboard/influencer-marketing" className={navItemClass}>
          <Users className="w-5 h-5" /> Influencer Marketing
        </Link>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-gray-700 text-center text-xs text-gray-500">
        drobb
      </div>
    </aside>
  );
}
