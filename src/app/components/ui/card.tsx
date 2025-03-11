"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface CardProps {
  title: string;
  description?: string;
  children?: ReactNode;
  className?: string;
}

export function Card({ title, description, children, className }: CardProps) {
  return (
    <div className={cn("bg-gray-800 p-6 rounded-2xl shadow-md", className)}>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      {description && <p className="text-gray-400 mt-2">{description}</p>}
      {children && <div className="mt-4">{children}</div>}
    </div>
  );
}
