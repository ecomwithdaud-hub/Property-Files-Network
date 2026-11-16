"use client";

import React from "react";
import Image from "next/image";

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
    sm: "w-9 h-9",
    md: "w-11 h-11 sm:w-12 sm:h-12",
    lg: "w-14 h-14 sm:w-16 sm:h-16",
  };

  const titleSizes = {
    sm: "text-base",
    md: "text-lg sm:text-xl",
    lg: "text-2xl sm:text-3xl",
  };

  return (
    <div className={`inline-flex items-center gap-3 select-none shrink-0 ${className}`}>
      {/* Official Property Files Network Logo Badge */}
      <div
        className={`relative ${imageSizes[size]} rounded-xl overflow-hidden border shadow-sm transition-transform duration-200 group-hover:scale-105 shrink-0 ${
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
      <div className="flex flex-col justify-center whitespace-nowrap">
        <div className="flex items-center gap-1.5 leading-none">
          <span
            className={`font-serif font-bold tracking-tight ${titleSizes[size]} ${
              isDark ? "text-white" : "text-slate-900"
            }`}
          >
            Property Files{" "}
            <span className="text-amber-600 font-extrabold">Network</span>
          </span>
        </div>
        {showTagline && (
          <span
            className={`font-serif italic leading-snug mt-1 ${
              size === "sm" ? "text-[11px]" : "text-xs sm:text-[13px]"
            } ${isDark ? "text-slate-300" : "text-slate-600"}`}
          >
            Deals in all kinds of properties.
          </span>
        )}
      </div>
    </div>
  );
}
