"use client";

import React from "react";
import Link from "next/link";
import {
  MapPin,
  Globe2,
  Phone,
  Languages,
  CheckCircle2,
  Building,
  ArrowRight,
} from "lucide-react";
import { SERVED_REGIONS, COMPANY_INFO } from "@/lib/data";
import ScrollReveal from "./ScrollReveal";

export default function WhoWeServeLocations() {
  return (
    <section className="py-20 lg:py-24 bg-slate-900 text-white border-b border-slate-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 space-y-16">
        <ScrollReveal direction="up">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-slate-800 pb-8">
            <div className="space-y-3 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-widest">
                <Globe2 className="w-3.5 h-3.5" />
                <span>Geographic Coverage &amp; Client Reach</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-serif font-bold text-white leading-tight">
                Regions We Serve Across{" "}
                <span className="text-amber-400">Pakistan &amp; Overseas Diaspora</span>
              </h2>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                From our corporate headquarters in DHA Phase 8 Lahore, we guide buyers, sellers, and diaspora investors across prime economic hubs and waterfront growth corridors.
              </p>
            </div>

            {/* Multilingual Support Pill */}
            <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 space-y-1.5 shrink-0">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400">
                <Languages className="w-4 h-4" />
                <span>Multilingual Advisory</span>
              </div>
              <div className="text-sm font-semibold text-white">
                Fluent in: {COMPANY_INFO.languages.join(" • ")}
              </div>
              <p className="text-[11px] text-slate-400">
                Seamless consultation for local and overseas families.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* 4 Regional Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVED_REGIONS.map((region, idx) => (
            <ScrollReveal key={region.province} direction="up" delayMs={idx * 80}>
              <div className="h-full p-6 rounded-2xl bg-slate-950/70 border border-slate-800 hover:border-amber-400/50 hover:shadow-lg transition-all flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
                      {region.province}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  </div>

                  <h3 className="text-xl font-serif font-bold text-white">
                    {region.province}
                  </h3>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {region.cities.map((city) => (
                      <span
                        key={city}
                        className="px-2.5 py-1 rounded-md bg-slate-800 border border-slate-700 text-xs font-medium text-slate-200"
                      >
                        {city}
                      </span>
                    ))}
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed pt-2 border-t border-slate-800">
                    {region.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
                  <span className="text-slate-400">Active Desks</span>
                  <a
                    href={COMPANY_INFO.whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-amber-400 hover:underline font-semibold flex items-center gap-1"
                  >
                    <span>Connect</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Head Office Banner Strip */}
        <ScrollReveal direction="up" delayMs={150}>
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-slate-800 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 shadow-xl">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-bold shrink-0">
                <Building className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <div className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  Head Office Location
                </div>
                <h4 className="text-lg sm:text-xl font-serif font-bold text-white">
                  {COMPANY_INFO.headOffice}
                </h4>
                <p className="text-xs text-slate-400">
                  Direct walk-in property file verification, token settlement, and biometric transfers.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href={`tel:${COMPANY_INFO.pakistanPhoneRaw}`}
                className="px-4 py-3 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-all flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>{COMPANY_INFO.pakistanPhone}</span>
              </a>
              <a
                href={`tel:${COMPANY_INFO.secondaryPhoneRaw}`}
                className="px-4 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs border border-slate-700 transition-all flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>{COMPANY_INFO.secondaryPhone}</span>
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
