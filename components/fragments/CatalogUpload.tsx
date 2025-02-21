"use client";

import React, { useRef, useState } from "react";
import { UploadCloud, FileText } from "lucide-react";
import { toast } from "react-hot-toast";

interface CatalogCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  buttonLabel: string;
  multiple: boolean;
}

const CatalogCard: React.FC<CatalogCardProps> = ({
  icon: Icon,
  title,
  description,
  buttonLabel,
  multiple,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [files, setFiles] = useState<File[]>([]);

  const handleButtonClick = () => {
    inputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files;
    if (selected) {
      if (multiple) {
        setFiles(Array.from(selected));
      } else {
        setFiles([selected[0]]);
      }
    }
  };

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const sendFiles = () => {
    toast.success("Sent successfully");
    setFiles([]);
  };

  return (
    <div className="bg-gray-800 p-6 bg-opacity-70 backdrop-blur-xl rounded-xl flex flex-col items-center justify-center hover:shadow-2xl hover:bg-opacity-100 transition-shadow cursor-pointer">
      <Icon className={`w-12 h-12 mb-2 ${multiple ? "text-green-400" : "text-blue-400"}`} />
      <h3 className="text-xl font-semibold mb-1 text-gray-100">{title}</h3>
      <p className="text-gray-300 mb-3 text-center">{description}</p>
      {files.length === 0 ? (
        <button
          onClick={handleButtonClick}
          className={`px-4 py-2 ${multiple ? "bg-green-500 hover:bg-green-600" : "bg-blue-500 hover:bg-blue-600"} rounded-full text-white font-bold`}
        >
          {buttonLabel}
        </button>
      ) : (
        <div className="w-full">
          <ul className="space-y-2">
            {files.map((file, index) => (
              <li key={index} className="flex items-center justify-between bg-gray-700 rounded p-2">
                <span className="text-gray-200 text-sm break-all">{file.name}</span>
                <button onClick={() => removeFile(index)} className="text-red-500 font-bold text-xl">
                  ×
                </button>
              </li>
            ))}
          </ul>
          <button
            onClick={sendFiles}
            className="mt-2 w-full px-4 py-2 bg-green-500 hover:bg-green-600 rounded-full text-white font-bold"
          >
            Send
          </button>
        </div>
      )}
      {/* Hidden file input */}
      <input type="file" ref={inputRef} onChange={handleFileChange} className="hidden" multiple={multiple} />
    </div>
  );
};

export default function CatalogUpload() {
  return (
    <section className="p-4 bg-white bg-opacity-10 backdrop-blur-md rounded-lg mt-6 shadow-xl">
      <h2 className="text-2xl font-bold mb-4 text-gray-100">Upload Your Catalog</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-10 py-3">
        <CatalogCard
          icon={UploadCloud}
          title="Upload Single Catalog"
          description="Add one catalog at a time without Excel."
          buttonLabel="Add Single"
          multiple={false}
        />
        <CatalogCard
          icon={FileText}
          title="Upload Bulk Catalog"
          description="Upload multiple catalogs using an Excel sheet."
          buttonLabel="Add in Bulk"
          multiple={true}
        />
      </div>
    </section>
  );
}
