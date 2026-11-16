"use client";

import React from "react";
import Link from "next/link";
import {
  FileDown,
  ArrowRight,
  Building2,
  MapPin,
  TrendingUp,
  Phone,
  ShieldCheck,
  Award,
} from "lucide-react";
import { COMPANY_INFO, PAKISTAN_PORTFOLIO } from "@/lib/data";
import { useLeads } from "@/context/LeadContext";
import ScrollReveal from "./ScrollReveal";

export default function HeroSection() {
  const { setIsBrochureModalOpen } = useLeads();

  return (
    <section
      id="hero"
      className="relative bg-gradient-to-b from-slate-50 via-white to-slate-50 py-16 lg:py-24 border-b border-slate-200 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left 7 Columns: Corporate Introduction & Value Proposition */}
          <div className="lg:col-span-7 space-y-7">
            <ScrollReveal direction="up" delayMs={50}>
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-md bg-amber-50 border border-amber-200/80 text-amber-900 text-xs font-semibold uppercase tracking-widest">
                <Award className="w-3.5 h-3.5 text-amber-700" />
                <span>Premier Real Estate Advisory &amp; Investment Marketing • Est. {COMPANY_INFO.foundedYear}</span>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delayMs={120}>
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-serif font-bold text-slate-900 tracking-tight leading-[1.15]">
                  Strategic Real Estate Advisory Across{" "}
                  <span className="text-amber-700">Lahore</span> &amp;{" "}
                  <span className="text-slate-900 underline decoration-amber-500/60 decoration-2 underline-offset-8">
                    Punjab&apos;s Prime Corridors
                  </span>
                </h1>

                <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                  Welcome to <strong className="text-slate-900">Property Files Network</strong> (
                  <span className="text-slate-900 font-medium">
                    {COMPANY_INFO.domain}
                  </span>
                  ) —{" "}
                  <em className="font-serif text-slate-800">
                    &ldquo;{COMPANY_INFO.tagline}&rdquo;
                  </em>{" "}
                  In official marketing partnership with <strong className="text-slate-900">Value Group</strong>, we advise high-net-worth families, institutional corporations, and the overseas Pakistani diaspora across verified luxury apartments, corporate skyscrapers, smart townhouses, and organic country estates.
                </p>
              </div>
            </ScrollReveal>

            {/* Corporate Highlights Strip */}
            <ScrollReveal direction="up" delayMs={200}>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex items-start gap-3">
                  <Building2 className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-serif font-bold text-slate-900">
                      6 Lahore Landmarks
                    </div>
                    <div className="text-xs text-slate-500 mt-0.5">
                      DHA, Gulberg &amp; Model Town
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-serif font-bold text-slate-900">
                      PKR 45B+ Volume
                    </div>
                    <div className="text-xs text-slate-500 mt-0.5">
                      Advised &amp; Transacted
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-serif font-bold text-slate-900">
                      100% Title Rigor
                    </div>
                    <div className="text-xs text-slate-500 mt-0.5">
                      LDA &amp; DHA Cleared Deeds
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Primary Corporate Action Buttons */}
            <ScrollReveal direction="up" delayMs={280}>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm shadow-sm transition-all"
                >
                  <span>Explore Pakistan Portfolio</span>
                  <ArrowRight className="w-4 h-4 text-amber-400" />
                </Link>

                <button
                  onClick={() => setIsBrochureModalOpen(true)}
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-sm shadow-sm transition-all"
                >
                  <FileDown className="w-4 h-4" />
                  <span>Download Official Dossier</span>
                </button>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-lg bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 font-medium text-sm transition-all"
                >
                  <span>Book Private Consultation</span>
                </Link>
              </div>
            </ScrollReveal>

            {/* Direct Corporate Contact Strip */}
            <ScrollReveal direction="up" delayMs={350}>
              <div className="pt-5 border-t border-slate-200 flex flex-wrap items-center gap-6 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-amber-700" />
                  <span>
                    Direct Advisory Hotline:{" "}
                    <strong className="text-slate-900">
                      {COMPANY_INFO.pakistanPhone}
                    </strong>
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-slate-700" />
                  <span>
                    Offices:{" "}
                    <strong className="text-slate-900">
                      DHA Phase 5 &amp; Gulberg III, Lahore
                    </strong>
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-emerald-700 font-medium">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Value Group Official Partner</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right 5 Columns: Corporate Showcase Card */}
          <div className="lg:col-span-5">
            <ScrollReveal direction="left" delayMs={180}>
              <div className="rounded-2xl bg-white border border-slate-200 p-6 sm:p-7 shadow-xl shadow-slate-200/60 space-y-5">
                {/* Official Property Files Network Crest Banner */}
                <div className="flex items-center justify-between gap-4 pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-3.5">
                    <div className="h-14 w-14 rounded-xl overflow-hidden border border-slate-200 bg-white shadow-sm shrink-0">
                      <img
                        src="/images/property-files-network-logo.jpg"
                        alt="Property Files Network Official Crest"
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                    <div>
                      <div className="text-[11px] uppercase tracking-widest text-amber-700 font-bold">
                        Official Advisory Firm
                      </div>
                      <div className="text-lg font-serif font-bold text-slate-900">
                        Property Files Network
                      </div>
                      <div className="text-xs font-serif italic text-slate-500">
                        &ldquo;{COMPANY_INFO.tagline}&rdquo;
                      </div>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded bg-slate-100 text-slate-800 text-[11px] font-semibold border border-slate-200 whitespace-nowrap">
                    Lahore Head Office
                  </span>
                </div>

                {/* Featured Project Showcase */}
                <div className="rounded-xl overflow-hidden border border-slate-200 bg-slate-900">
                  <div className="p-5 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 text-white space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] uppercase tracking-widest text-amber-400 font-semibold">
                        Value Group Partnership
                      </span>
                      <span className="px-2.5 py-0.5 rounded text-[10px] font-semibold bg-emerald-950 border border-emerald-700/60 text-emerald-300">
                        Completed Landmark
                      </span>
                    </div>

                    <div>
                      <h3 className="text-xl font-serif font-bold text-white">
                        Green View Executive Apartments
                      </h3>
                      <div className="text-xs text-slate-300 flex items-center gap-1.5 mt-1">
                        <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span>DHA Phase 5, Ring Road Axis, Lahore</span>
                      </div>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed pt-1">
                      Vertical luxury living in the heart of DHA Phase 5. Designed with grand double-height lobbies, 24/7 dedicated generator power, and high corporate tenant occupancy.
                    </p>

                    <div className="grid grid-cols-2 gap-2 pt-2 text-xs">
                      <div className="p-2.5 rounded-lg bg-slate-800/80 border border-slate-700">
                        <span className="text-[10px] uppercase text-slate-400 block">Indicative Starting</span>
                        <span className="font-bold text-amber-400">PKR 2.85 Crore</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-slate-800/80 border border-slate-700">
                        <span className="text-[10px] uppercase text-slate-400 block">Rental Yield</span>
                        <span className="font-bold text-white">9.5% Annual</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Portfolio Selector Strip */}
                <div className="space-y-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    Featured Asset Classes
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    {PAKISTAN_PORTFOLIO.slice(1, 5).map((p) => (
                      <Link
                        key={p.id}
                        href="/portfolio"
                        className="p-2.5 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-colors block"
                      >
                        <div className="font-semibold text-slate-900 truncate">{p.title}</div>
                        <div className="text-[11px] text-slate-500 truncate">{p.location}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
