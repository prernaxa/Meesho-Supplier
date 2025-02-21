"use client";

import React from "react";

interface ConfirmLogoutModalProps {
  show: boolean;
  onCancel: () => void;
  onConfirm: () => void;
}

export default function ConfirmLogoutModal({
  show,
  onCancel,
  onConfirm,
}: ConfirmLogoutModalProps) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-80">
        <h3 className="text-xl font-bold mb-4">Confirm Logout</h3>
        <p className="mb-6">Are you sure you want to logout?</p>
        <div className="flex justify-center gap-3">
          <button
            onClick={onCancel}
            className="px-4 py-2 rounded bg-gray-600 hover:bg-gray-500 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 rounded bg-red-600 hover:bg-red-700 transition-colors"
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
}
