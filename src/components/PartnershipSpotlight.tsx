"use client";

import React from "react";
import Link from "next/link";
import {
  Building2,
  ShieldCheck,
  TrendingUp,
  MapPin,
  ArrowRight,
  FileDown,
  CheckCircle2,
} from "lucide-react";
import { COMPANY_INFO, PAKISTAN_PORTFOLIO } from "@/lib/data";
import { useLeads } from "@/context/LeadContext";
import ScrollReveal from "./ScrollReveal";

export default function PartnershipSpotlight() {
  const { setIsBrochureModalOpen, setPreselectedProjectForInquiry } = useLeads();

  const handleInquireProject = (title: string, location: string) => {
    setPreselectedProjectForInquiry(`${title} (${location})`);
    const el = document.getElementById("lead-inquiry");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 lg:py-24 bg-white border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 space-y-16">
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-slate-200 pb-8">
            <div className="space-y-3 max-w-3xl">
              <div className="text-xs font-bold uppercase tracking-widest text-amber-600">
                Strategic Development Alliance • Proven Local Track Record
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-serif font-bold text-slate-900 leading-tight">
                Value Group × Property Files Network{" "}
                <span className="text-amber-600">Development Partnership</span>
              </h2>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                A collaborative synergy delivering institutional-grade residential towers, Grade-A corporate skyscrapers, smart master-planned communities, and organic agricultural estates across Lahore&apos;s highest-demand corridors.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                onClick={() => setIsBrochureModalOpen(true)}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs shadow-sm transition-all whitespace-nowrap"
              >
                <FileDown className="w-4 h-4" />
                <span>Download Portfolio Dossier (PDF)</span>
              </button>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-900 border border-slate-300 font-semibold text-xs transition-all whitespace-nowrap"
              >
                <span>View All 6 Developments</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </ScrollReveal>

        {/* 4 Pillars of the Partnership */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Building2,
              title: "Delivered Landmarks",
              subtitle: "Green View & Value Series",
              desc: "From DHA Phase 5 to PECO Road and Gulberg, delivering turnkey residential and commercial high-rises on schedule.",
            },
            {
              icon: TrendingUp,
              title: "Verified Commercial Yields",
              subtitle: "9.5% – 12% Annual Returns",
              desc: "Backed by institutional corporate lease covenants with multinational IT firms, banks, and retail brands.",
            },
            {
              icon: ShieldCheck,
              title: "100% Legal Title Rigor",
              subtitle: "LDA, DHA & Revenue Cleared",
              desc: "Every plot, office floor, and apartment passes thorough mutation (Intiqal) and unencumbered registry checks.",
            },
            {
              icon: MapPin,
              title: "Prime Growth Corridors",
              subtitle: "Lahore's Golden Ring",
              desc: "Strategic holdings centered on the Lahore Ring Road, Barki Road expansion axis, and Gulberg CBD.",
            },
          ].map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <ScrollReveal key={idx} direction="up" delayMs={idx * 80}>
                <div className="h-full p-6 rounded-xl bg-slate-50 border border-slate-200 hover:border-amber-400 hover:shadow-sm transition-all space-y-2.5">
                  <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-amber-600 shadow-sm">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-amber-700 pt-1">
                    {pillar.subtitle}
                  </div>
                  <h3 className="text-lg font-serif font-bold text-slate-900">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Showcase Banner: Flagship Lahore Delivery Highlights */}
        <ScrollReveal direction="up" delayMs={120}>
          <div className="rounded-2xl bg-slate-900 text-white overflow-hidden border border-slate-800 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Left Column: Visual Showcase */}
              <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between bg-slate-950/60 border-b lg:border-b-0 lg:border-r border-slate-800 space-y-8">
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider">
                    <span>Flagship Delivery Spotlight</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                    Green View Executive Apartments
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    A completed architectural landmark in DHA Phase 5 Lahore featuring double-height travertine reception lobbies, 24/7 dual redundant standby power generation, and high-demand corporate executive rentals.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Location:</span>
                    <span className="text-white font-semibold">DHA Phase 5, Ring Road Axis, Lahore</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Offering:</span>
                    <span className="text-amber-400 font-semibold">1, 2 &amp; 3 Bed Executive Suites</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Status:</span>
                    <span className="text-emerald-400 font-semibold">Completed &amp; Fully Delivered</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Starting Price:</span>
                    <span className="text-white font-bold">PKR 2.85 Crore</span>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => handleInquireProject("Green View Executive Apartments", "DHA Phase 5, Lahore")}
                    className="flex-1 py-3 px-5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 transition-all"
                  >
                    <span>Inquire About Availability</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <Link
                    href="/portfolio#green-view-executive-dha5"
                    className="py-3 px-4 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold text-center border border-slate-700 transition-all"
                  >
                    Project Details
                  </Link>
                </div>
              </div>

              {/* Right Column: Key Portfolio Assets Overview */}
              <div className="lg:col-span-7 p-8 sm:p-10 space-y-6">
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-amber-400">
                    Comprehensive Portfolio Reach
                  </div>
                  <h4 className="text-xl sm:text-2xl font-serif font-bold text-white mt-1">
                    Diversified Real Estate Classes Across Lahore
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1">
                    Every development under the Value Group &amp; Property Files Network portfolio targets specific investor profiles:
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {PAKISTAN_PORTFOLIO.slice(1, 5).map((project) => (
                    <div
                      key={project.id}
                      className="p-4 rounded-xl bg-slate-800/70 border border-slate-700/80 space-y-2 hover:border-amber-400/50 transition-colors"
                    >
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-amber-400 font-bold text-[11px] uppercase tracking-wider">
                          {project.type}
                        </span>
                        <span className="text-slate-400 text-[10px]">
                          {project.status}
                        </span>
                      </div>
                      <div className="text-sm font-serif font-bold text-white">
                        {project.title}
                      </div>
                      <div className="text-xs text-slate-400 flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-amber-500 shrink-0" />
                        <span className="truncate">{project.location}</span>
                      </div>
                      <div className="pt-1 text-xs text-amber-300 font-semibold border-t border-slate-700/50">
                        {project.startingPrice} • {project.unitsInfo}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-slate-300 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">Direct Developer Pricing:</strong>{" "}
                    As the official marketing partner for Value Group developments, Property Files Network offers investors direct allocation, transparent pricing, and zero hidden transfer surcharges.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
