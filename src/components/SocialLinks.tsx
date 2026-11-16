"use client";

import React from "react";
import { Instagram, Facebook, Linkedin } from "lucide-react";
import { COMPANY_INFO } from "@/lib/data";

interface SocialLinksProps {
  variant?: "dark" | "light" | "footer" | "navbar";
  className?: string;
  showLabels?: boolean;
}

export function TikTokIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.47 6.27 6.27 0 0 0 1.96-4.46V8.65a8.28 8.28 0 0 0 5.17 1.8V7.02a4.92 4.92 0 0 1-1.36-.33Z" />
    </svg>
  );
}

export default function SocialLinks({
  variant = "navbar",
  className = "",
  showLabels = false,
}: SocialLinksProps) {
  const socials = [
    {
      name: "TikTok",
      label: COMPANY_INFO.socialLinks.tiktok.handle,
      url: COMPANY_INFO.socialLinks.tiktok.url,
      icon: (cls: string) => <TikTokIcon className={cls} />,
    },
    {
      name: "Instagram",
      label: COMPANY_INFO.socialLinks.instagram.handle,
      url: COMPANY_INFO.socialLinks.instagram.url,
      icon: (cls: string) => <Instagram className={cls} />,
    },
    {
      name: "Facebook",
      label: COMPANY_INFO.socialLinks.facebook.handle,
      url: COMPANY_INFO.socialLinks.facebook.url,
      icon: (cls: string) => <Facebook className={cls} />,
    },
    {
      name: "LinkedIn",
      label: COMPANY_INFO.socialLinks.linkedin.handle,
      url: COMPANY_INFO.socialLinks.linkedin.url,
      icon: (cls: string) => <Linkedin className={cls} />,
    },
  ];

  if (variant === "footer") {
    return (
      <div className={`flex flex-wrap gap-2 ${className}`}>
        {socials.map((s) => (
          <a
            key={s.name}
            href={s.url}
            target="_blank"
            rel="noreferrer"
            aria-label={`Property Files Network on ${s.name}`}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 hover:text-amber-300 border border-slate-700 text-xs font-medium text-slate-200 transition-all group"
          >
            {s.icon("w-3.5 h-3.5 text-amber-400 group-hover:scale-110 transition-transform shrink-0")}
            <span>{s.name}</span>
          </a>
        ))}
      </div>
    );
  }

  // Compact ribbon variant: never wraps, clean icons
  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 shrink-0 ${className}`}>
      {socials.map((s) => (
        <a
          key={s.name}
          href={s.url}
          target="_blank"
          rel="noreferrer"
          aria-label={`Property Files Network on ${s.name}`}
          className="p-1 rounded text-slate-300 hover:text-amber-300 hover:bg-slate-800/60 transition-colors flex items-center gap-1 group"
        >
          {s.icon("w-3.5 h-3.5 text-amber-400 group-hover:scale-110 transition-transform shrink-0")}
          {showLabels && <span className="hidden xl:inline text-[11px] font-medium">{s.name}</span>}
        </a>
      ))}
    </div>
  );
}
