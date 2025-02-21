"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { toast } from "react-hot-toast";
import { Video } from "lucide-react";

export default function BookTraining() {
  const [open, setOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [selectedDate, setSelectedDate] = useState("Today");
  const [selectedTime, setSelectedTime] = useState("11:00 AM - 12:00 PM");

  const handleSave = () => {
    setOpen(false);
    toast.success("Training booked successfully");
  };

  return (
    <div className="p-4 bg-white bg-opacity-10 backdrop-blur-md rounded-lg mt-6 shadow-xl">
      {/* Horizontal Flex-Row Layout */}
      <div className="flex flex-row items-center justify-center gap-6">
        {/* Meeting Icon */}
        <Video className="w-16 h-16 text-blue-400" />
        {/* Title & Description */}
        <div className="flex flex-col items-start">
          <h2 className="text-2xl font-bold text-gray-100">
            Join Free Live Training
          </h2>
          <p className="text-gray-300">
            Learn how to boost your business with our free live training sessions.
          </p>
        </div>
        {/* Book Training Button */}
        <Button
          className="bg-yellow-700 hover:bg-yellow-900 text-white"
          onClick={() => setOpen(true)}
        >
          Book Training Now
        </Button>
      </div>

      {/* Modal for Booking Training Slot */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="flex items-center justify-center bg-gradient-to-r from-gray-900 to-blue-900">
          <div className="bg-gradient-to-r from-gray-900 to-blue-900 bg-opacity-70 backdrop-blur-xl rounded-xl p-6 shadow-2xl max-w-md w-full">
            <DialogHeader>
              <div className="flex items-center justify-center gap-2 mb-4">
                <Video className="w-8 h-8 text-blue-400" />
                <DialogTitle className="text-xl font-bold text-gray-100">
                  Book Training Slot
                </DialogTitle>
              </div>
            </DialogHeader>
            <div className="space-y-4">
              {/* Training Language */}
              <div>
                <p className="text-sm font-semibold text-gray-200">
                  Select Training Language
                </p>
                <div className="flex gap-2 mt-2 justify-center">
                  {["English", "Hindi"].map((lang) => (
                    <Button
                      key={lang}
                      className={
                        selectedLanguage === lang
                          ? "bg-yellow-800 text-white"
                          : "bg-white bg-opacity-20 text-white border border-blue-600"
                      }
                      onClick={() => setSelectedLanguage(lang)}
                    >
                      {lang}
                    </Button>
                  ))}
                </div>
              </div>
              {/* Training Date */}
              <div>
                <p className="text-sm font-semibold text-gray-200">
                  Select Date
                </p>
                <div className="flex gap-2 mt-2 justify-center">
                  {["Today", "Tomorrow", "14 Feb 2025", "15 Feb 2025"].map((date) => (
                    <Button
                      key={date}
                      className={
                        selectedDate === date
                          ? "bg-yellow-800 text-white"
                          : "bg-white bg-opacity-20 text-white border border-blue-600"
                      }
                      onClick={() => setSelectedDate(date)}
                    >
                      {date}
                    </Button>
                  ))}
                </div>
              </div>
              {/* Training Time Slot */}
              <div>
                <p className="text-sm font-semibold text-gray-200">
                  Select Time Slot
                </p>
                <div className="flex gap-2 mt-2 justify-center">
                  {["11:00 AM - 12:00 PM", "2:00 PM - 3:00 PM"].map((time) => (
                    <Button
                      key={time}
                      className={
                        selectedTime === time
                          ? "bg-yellow-800 text-white"
                          : "bg-white bg-opacity-20 text-white border border-blue-600"
                      }
                      onClick={() => setSelectedTime(time)}
                    >
                      {time}
                    </Button>
                  ))}
                </div>
              </div>
              <Button
                className="w-full bg-yellow-700 hover:bg-yellow-900 text-white"
                onClick={handleSave}
              >
                Save Slot
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
