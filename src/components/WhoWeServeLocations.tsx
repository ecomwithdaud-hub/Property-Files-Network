"use client";

import React from "react";
import {
  MapPin,
  Globe2,
  Phone,
  Languages,
  ArrowRight,
  ShieldCheck,
  Compass,
} from "lucide-react";
import { SERVED_REGIONS, COMPANY_INFO } from "@/lib/data";

export default function WhoWeServeLocations() {
  return (
    <section id="locations" className="relative py-10 sm:py-14 bg-slate-950 text-white border-b border-slate-800 overflow-hidden">
      {/* 3D Atmospheric Glow Orbs */}
      <div className="absolute top-0 right-1/4 w-80 h-80 rounded-full bg-amber-500/5 filter blur-3xl pointer-events-none animate-float-3d" />
      <div className="absolute bottom-0 left-10 w-96 h-96 rounded-full bg-blue-500/5 filter blur-3xl pointer-events-none animate-float-delayed" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-800 pb-5">
          <div className="space-y-1.5 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[11px] font-bold uppercase tracking-wider backdrop-blur-md shadow-2xs">
              <Globe2 className="w-3.5 h-3.5" />
              <span>3D Geographic Reach • Who We Serve</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white leading-tight">
              Regions Covered Across{" "}
              <span className="text-amber-400">Pakistan &amp; Diaspora</span>
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm">
              Headquartered at DHA Phase 8 Lahore, handling files and verified property transactions across designated hubs.
            </p>
          </div>

          {/* Multilingual Support 3D Pill */}
          <div className="glass-3d-dark p-3 rounded-xl border border-white/10 text-xs shrink-0 shadow-lg animate-float-subtle">
            <div className="flex items-center gap-1.5 text-amber-400 font-semibold text-[11px] uppercase tracking-wider">
              <Languages className="w-3.5 h-3.5" />
              <span>Multilingual Consultation</span>
            </div>
            <div className="text-slate-200 font-medium mt-0.5">
              {COMPANY_INFO.languages.join(" • ")}
            </div>
          </div>
        </div>

        {/* 4 Regions in 3D Perspective Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 perspective-1000">
          {SERVED_REGIONS.map((region) => (
            <div
              key={region.province}
              className="card-3d preserve-3d glass-3d-dark p-4 sm:p-5 rounded-2xl border border-white/10 hover:border-amber-400/50 hover:shadow-2xl transition-all flex flex-col justify-between space-y-3.5 group"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400">
                    {region.province}
                  </span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-sm shadow-emerald-400/50" />
                </div>

                <div className="flex flex-wrap gap-1">
                  {region.cities.map((city) => (
                    <span
                      key={city}
                      className="px-2 py-0.5 rounded-md bg-slate-900 border border-slate-700/80 text-[11px] font-medium text-slate-200 group-hover:border-amber-400/30 transition-colors"
                    >
                      {city}
                    </span>
                  ))}
                </div>

                <p className="text-xs text-slate-400 leading-relaxed pt-2 border-t border-slate-800">
                  {region.description}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs">
                <span className="text-slate-400">Trading Desk</span>
                <a
                  href={`https://wa.me/923234304259?text=${encodeURIComponent(
                    `Hello Property Files Network, I would like to consult on properties in ${region.province}.`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-amber-400 hover:text-amber-300 font-semibold flex items-center gap-1 group-hover:translate-x-0.5 transition-all"
                >
                  <span>WhatsApp</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
