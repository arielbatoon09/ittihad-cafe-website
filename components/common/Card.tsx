import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div className={`border border-gray-800 p-6 rounded-lg hover:border-yellow-400 transition ${className}`}>
      {children}
    </div>
  );
}