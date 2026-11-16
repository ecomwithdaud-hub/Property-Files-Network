"use client";

import React from "react";

interface PropertyFilesLogoProps {
  variant?: "dark" | "light" | "compact";
  showTagline?: boolean;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function PropertyFilesLogo({
  variant = "light",
  showTagline = true,
  className = "",
  size = "md",
}: PropertyFilesLogoProps) {
  const isDark = variant === "dark";

  const imageSizes = {
    sm: "w-8 h-8 sm:w-9 sm:h-9",
    md: "w-9 h-9 sm:w-11 sm:h-11",
    lg: "w-12 h-12 sm:w-14 sm:h-14",
  };

  const titleSizes = {
    sm: "text-sm sm:text-base",
    md: "text-base sm:text-lg lg:text-xl",
    lg: "text-xl sm:text-2xl",
  };

  return (
    <div className={`inline-flex items-center gap-2 sm:gap-3 select-none shrink-0 ${className}`}>
      {/* Official Property Files Network Logo Badge */}
      <div
        className={`relative ${imageSizes[size]} rounded-lg sm:rounded-xl overflow-hidden border shadow-sm transition-transform duration-200 group-hover:scale-105 shrink-0 ${
          isDark
            ? "border-amber-400/30 bg-slate-900 shadow-slate-950/50"
            : "border-slate-200 bg-white shadow-slate-200/60"
        }`}
      >
        <img
          src="/images/property-files-network-logo.jpg"
          alt="Property Files Network Official Logo"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Brand Title & Tagline */}
      <div className="flex flex-col justify-center min-w-0">
        <div className="flex items-center gap-1 leading-tight">
          <span
            className={`font-serif font-bold tracking-tight whitespace-nowrap ${titleSizes[size]} ${
              isDark ? "text-white" : "text-slate-900"
            }`}
          >
            Property Files{" "}
            <span className="text-amber-600 font-extrabold">Network</span>
          </span>
        </div>
        {showTagline && (
          <span
            className={`hidden md:block font-serif italic text-xs leading-none mt-1 whitespace-nowrap ${
              isDark ? "text-slate-400" : "text-slate-500"
            }`}
          >
            Smart Deals • Trusted Services • Secure Investments
          </span>
        )}
      </div>
    </div>
  );
}
