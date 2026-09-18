"use client";

import React from "react";
import { Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

export const CALENDLY_URL = "https://calendly.com/thecohr-info/30min";

export interface BookCallButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "primary" | "secondary" | "outline" | "white" | "ghost";
  size?: "xs" | "sm" | "md" | "lg";
  fullWidth?: boolean;
  showIcon?: boolean;
  label?: string;
}

export function BookCallButton({
  className,
  variant = "secondary",
  size = "md",
  fullWidth = false,
  showIcon = true,
  label = "Book a Call",
  href = CALENDLY_URL,
  target = "_blank",
  rel = "noopener noreferrer",
  children,
  ...props
}: BookCallButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-bold rounded-xl transition-all duration-200 cursor-pointer select-none shrink-0 group active:scale-[0.98]";

  const sizeStyles = {
    xs: "px-3 py-1.5 text-xs gap-1.5",
    sm: "px-4 py-2 text-xs sm:text-sm gap-2 rounded-lg",
    md: "px-6 py-3 text-sm sm:text-base gap-2 rounded-xl",
    lg: "px-7 py-3.5 sm:py-4 text-base sm:text-lg gap-2.5 rounded-2xl shadow-md hover:shadow-lg",
  };

  const variantStyles = {
    primary:
      "bg-[#1E90FF] hover:bg-[#187BCD] text-white shadow-md shadow-blue-500/20 hover:shadow-blue-500/30",
    secondary:
      "bg-blue-50 hover:bg-blue-100 text-[#1E90FF] border border-blue-200/80 hover:border-blue-300",
    outline:
      "border-2 border-[#1E90FF] bg-transparent text-[#1E90FF] hover:bg-blue-50/80",
    white:
      "bg-white hover:bg-slate-50 text-[#1E90FF] border border-blue-200 shadow-sm hover:shadow",
    ghost:
      "bg-transparent hover:bg-blue-50/60 text-[#1E90FF]",
  };

  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={cn(
        baseStyles,
        sizeStyles[size],
        variantStyles[variant],
        fullWidth && "w-full",
        className
      )}
      {...props}
    >
      {showIcon && (
        <Calendar className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-current group-hover:scale-110 transition-transform shrink-0" />
      )}
      <span>{children || label}</span>
    </a>
  );
}
