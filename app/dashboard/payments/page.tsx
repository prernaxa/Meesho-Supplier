import Sidebar from "../../../components/fragments/Sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, HelpCircle, LineChart, BarChart, TrendingDown } from "lucide-react";

export default function PaymentsPage() {
  return (
    <div className="flex">
    
      <Sidebar />

    
      <div className="p-6 space-y-6 flex-1 ml-64">
        
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold">Payments</h1>
          <button className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-md">
            <Download size={16} /> Download
          </button>
        </div>


        <div className="grid grid-cols-2 gap-6">
          <Card>
            <CardHeader className="flex justify-between">
              <CardTitle>Payments to Date</CardTitle>
              <HelpCircle size={16} className="text-gray-400" />
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">₹0</p>
              <p className="text-gray-500">Last Payment: ₹0</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex justify-between">
              <CardTitle>Total Outstanding Payment</CardTitle>
              <HelpCircle size={16} className="text-gray-400" />
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">₹0</p>
              <p className="text-gray-500">Next Payment: ₹0</p>
            </CardContent>
          </Card>
        </div>

        
        <Card>
          <CardHeader>
            <CardTitle>Payments over time</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center h-60">
            <TrendingDown size={48} className="text-gray-400" />
            <p className="text-gray-500 font-medium mt-4">No Trend to Show</p>
            <p className="text-gray-400 text-sm text-center">
              There is no sufficient data to show the results in the selected timeframe.
            </p>
          </CardContent>
        </Card>

    
        <div className="grid grid-cols-3 gap-6">
          <Card>
            <CardHeader className="flex justify-between">
              <CardTitle>Compensation & Recoveries</CardTitle>
              <a href="#" className="text-purple-600 text-sm">View Details</a>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500">No data to show</p>
              <div className="flex justify-between text-sm mt-2">
                <span>Compensations</span>
                <span>₹0</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Recoveries</span>
                <span>₹0</span>
              </div>
              <div className="flex justify-between font-semibold mt-2">
                <span>Total</span>
                <span>₹0</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex justify-between">
              <CardTitle>Ads Cost</CardTitle>
              <a href="#" className="text-purple-600 text-sm">View Details</a>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <BarChart size={20} className="text-gray-500" />
                <p className="text-gray-500">You have not spent on Ads in the last 30 days</p>
              </div>
              <div className="mt-4 bg-yellow-100 p-4 rounded-md text-center">
                <p className="font-semibold">Boost order growth using Ads</p>
                <p className="text-sm text-gray-600">
                  More than 2 Lac sellers have run Ads to grow their business.{" "}
                  <a href="#" className="text-purple-600 font-medium">Try Ads</a>
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Other Links</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-sm">
                <p className="text-gray-600">Referral Payments</p>
                <p className="text-gray-400">No referral payments to show.</p>
              </div>
              <div className="mt-4 text-sm">
                <p className="text-gray-600">Have a query?</p>
                <a href="#" className="text-purple-600">
                  Raise a ticket for your payment-related matters
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
