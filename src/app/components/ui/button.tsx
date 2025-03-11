"use client";

import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  asChild?: boolean; // Add this line to support asChild
}

export function Button({ className, variant = "primary", asChild = false, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : "button"; // Dynamically set component type

  return (
    <Comp
      className={cn(
        "px-4 py-2 rounded-lg font-medium transition-all",
        {
          "bg-blue-600 text-white hover:bg-blue-700": variant === "primary",
          "bg-gray-700 text-white hover:bg-gray-800": variant === "secondary",
          "border border-gray-500 text-gray-300 hover:bg-gray-700": variant === "outline",
        },
        className
      )}
      {...props}
    />
  );
}
