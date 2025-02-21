import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div className={`bg-white shadow rounded-md p-6 ${className}`}>
      {children}
    </div>
  );
};

export const CardHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="mb-4">{children}</div>;
};

export const CardTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <h2 className="text-2xl font-bold">{children}</h2>;
};

export const CardDescription: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <p className="text-sm text-gray-600">{children}</p>;
};

export const CardContent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div>{children}</div>;
};
