"use client";

import React, { useState } from "react";
import { TrendingUp, ArrowUpRight, ShieldCheck, Flame, Phone } from "lucide-react";
import { COMPANY_INFO } from "@/lib/data";

interface RateItem {
  id: string;
  society: string;
  category: string;
  rateRange: string;
  change: string;
  isPositive: boolean;
  status: string;
}

const LIVE_RATES: RateItem[] = [
  {
    id: "r1",
    society: "MGH Mangla",
    category: "1 Kanal Waterfront Affidavit",
    rateRange: "PKR 68 – 78 Lakh",
    change: "+4.2%",
    isPositive: true,
    status: "High Demand",
  },
  {
    id: "r2",
    society: "DHA Phase 9 Prism",
    category: "1 Kanal Balloted File",
    rateRange: "PKR 2.45 – 2.95 Crore",
    change: "+6.5%",
    isPositive: true,
    status: "Active Trading",
  },
  {
    id: "r3",
    society: "DHA Phase 10",
    category: "1 Kanal Allocation File",
    rateRange: "PKR 38 – 45 Lakh",
    change: "+8.1%",
    isPositive: true,
    status: "Top Multiplier",
  },
  {
    id: "r4",
    society: "MGH Mangla",
    category: "10 Marla Lakefront File",
    rateRange: "PKR 36 – 44 Lakh",
    change: "+3.4%",
    isPositive: true,
    status: "Liquid",
  },
  {
    id: "r5",
    society: "DHA Phase 8 Broadway",
    category: "4 Marla Commercial Plaza Plot",
    rateRange: "PKR 7.80 – 9.60 Crore",
    change: "+5.0%",
    isPositive: true,
    status: "12% Rental Yield",
  },
  {
    id: "r6",
    society: "DHA Phase 6",
    category: "1 Kanal Prime Possession Plot",
    rateRange: "PKR 4.20 – 6.80 Crore",
    change: "+2.8%",
    isPositive: true,
    status: "Ready Possession",
  },
  {
    id: "r7",
    society: "DHA Phase 9 Prism",
    category: "10 Marla Balloted File",
    rateRange: "PKR 1.40 – 1.75 Crore",
    change: "+4.9%",
    isPositive: true,
    status: "Fast Turnover",
  },
];

export default function DailyFileRatesTicker() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div className="relative bg-slate-950 text-white border-y border-slate-800 overflow-hidden z-20 shadow-md">
      {/* 3D Flow Subtle Background Accent */}
      <div className="absolute inset-0 bg-architectural-grid-dark opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
        {/* Left Indicator Pill */}
        <div className="flex items-center gap-2.5 shrink-0 z-10">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-950/90 border border-emerald-500/40 text-[10px] font-bold text-emerald-400 uppercase tracking-wider shadow-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Live Market Rates</span>
          </div>

          <span className="text-[11px] text-slate-400 hidden sm:inline">
            Verified Today • DHA &amp; MGH Trading
          </span>
        </div>

        {/* Scrolling Ticker Strip */}
        <div
          className="flex-1 overflow-hidden relative w-full"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className={`flex items-center gap-4 sm:gap-6 whitespace-nowrap will-change-transform ${
              isPaused ? "" : "animate-marquee"
            }`}
            style={{
              animation: isPaused ? "none" : "marquee 32s linear infinite",
            }}
          >
            {/* Duplicated array to create a seamless infinite loop */}
            {[...LIVE_RATES, ...LIVE_RATES].map((item, idx) => (
              <a
                key={`${item.id}-${idx}`}
                href={`https://wa.me/923234304259?text=${encodeURIComponent(
                  `Hello Property Files Network, I would like to verify today's bid/ask rate for ${item.society} - ${item.category} (${item.rateRange}).`
                )}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-slate-900/90 hover:bg-slate-800 border border-white/5 hover:border-amber-400/40 transition-all text-xs group shrink-0"
              >
                <span className="font-bold text-amber-400 font-serif">
                  {item.society}
                </span>
                <span className="text-slate-300 text-[11px]">
                  {item.category}:
                </span>
                <span className="font-semibold text-white">
                  {item.rateRange}
                </span>
                <span className="inline-flex items-center text-[10px] font-bold text-emerald-400">
                  <ArrowUpRight className="w-3 h-3" />
                  {item.change}
                </span>
                <span className="px-1.5 py-0.2 rounded bg-slate-800 text-[10px] text-slate-400 group-hover:text-amber-300">
                  {item.status}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Right CTA */}
        <div className="hidden lg:flex items-center gap-2 shrink-0 z-10 pl-3 border-l border-slate-800 text-xs">
          <a
            href={COMPANY_INFO.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="text-amber-400 hover:text-amber-300 font-semibold flex items-center gap-1 transition-colors text-xs whitespace-nowrap"
          >
            <Phone className="w-3 h-3" />
            <span>Instant Rate Inquiry</span>
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
