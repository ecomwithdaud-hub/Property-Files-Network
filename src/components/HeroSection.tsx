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
  FileCheck2,
  Film,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import { COMPANY_INFO, PAKISTAN_PORTFOLIO } from "@/lib/data";
import { useLeads } from "@/context/LeadContext";
import ScrollReveal from "./ScrollReveal";

export default function HeroSection() {
  const { setIsBrochureModalOpen } = useLeads();
  const featuredMGH = PAKISTAN_PORTFOLIO[0]; // MGH Pakistan
  const featuredDHA = PAKISTAN_PORTFOLIO[2]; // DHA Phase 8 Broadway

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
                <span>Smart Deals, Trusted Services &amp; Secure Investments</span>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delayMs={120}>
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-serif font-bold text-slate-900 tracking-tight leading-[1.15]">
                  Property | Investment | Files —{" "}
                  <span className="text-amber-700">Your Future</span> Starts Here!
                </h1>

                <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                  {COMPANY_INFO.bio}
                </p>
              </div>
            </ScrollReveal>

            {/* 3 Core Specialty Pills */}
            <ScrollReveal direction="up" delayMs={180}>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-1">
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex items-start gap-3 hover:border-amber-400 transition-colors">
                  <FileCheck2 className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-serif font-bold text-slate-900">
                      MGH Affidavit Files
                    </div>
                    <div className="text-xs text-slate-500 mt-0.5">
                      1 Kanal &amp; 10 Marla Files
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex items-start gap-3 hover:border-amber-400 transition-colors">
                  <Building2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-serif font-bold text-slate-900">
                      DHA Property Files
                    </div>
                    <div className="text-xs text-slate-500 mt-0.5">
                      Phases 6, 7, 8, 9 &amp; 10
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex items-start gap-3 hover:border-amber-400 transition-colors">
                  <TrendingUp className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-serif font-bold text-slate-900">
                      Investment Advising
                    </div>
                    <div className="text-xs text-slate-500 mt-0.5">
                      Strategic Wealth Advisory
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Primary Corporate Action Buttons */}
            <ScrollReveal direction="up" delayMs={260}>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm shadow-sm transition-all"
                >
                  <span>Explore Society Files</span>
                  <ArrowRight className="w-4 h-4 text-amber-400" />
                </Link>

                <a
                  href={`https://wa.me/923234304259?text=${encodeURIComponent(
                    "Hello Property Files Network, I would like to consult on MGH affidavit files and DHA Lahore property files."
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-sm shadow-sm transition-all"
                >
                  <Phone className="w-4 h-4" />
                  <span>WhatsApp Trading Desk</span>
                </a>

                <button
                  onClick={() => setIsBrochureModalOpen(true)}
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-lg bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 font-medium text-sm transition-all"
                >
                  <FileDown className="w-4 h-4 text-amber-700" />
                  <span>Download Dossier (PDF)</span>
                </button>
              </div>
            </ScrollReveal>

            {/* Direct Corporate Contact Strip with Both Phones */}
            <ScrollReveal direction="up" delayMs={340}>
              <div className="pt-5 border-t border-slate-200 flex flex-wrap items-center gap-6 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-amber-700" />
                  <span>
                    Primary:{" "}
                    <a
                      href={`tel:${COMPANY_INFO.pakistanPhoneRaw}`}
                      className="font-bold text-slate-900 hover:text-amber-700"
                    >
                      {COMPANY_INFO.pakistanPhone}
                    </a>
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-amber-700" />
                  <span>
                    Secondary:{" "}
                    <a
                      href={`tel:${COMPANY_INFO.secondaryPhoneRaw}`}
                      className="font-bold text-slate-900 hover:text-amber-700"
                    >
                      {COMPANY_INFO.secondaryPhone}
                    </a>
                  </span>
                </div>

                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-slate-700" />
                  <span>
                    Head Office:{" "}
                    <strong className="text-slate-900">
                      DHA Phase 8, Lahore
                    </strong>
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right 5 Columns: Corporate Showcase Card with Media Spotlight */}
          <div className="lg:col-span-5">
            <ScrollReveal direction="left" delayMs={180}>
              <div className="rounded-2xl bg-white border border-slate-200 p-6 sm:p-7 shadow-xl shadow-slate-200/60 space-y-5">
                {/* Official Crest Header */}
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
                        Trusted Real Estate Advisory
                      </div>
                      <div className="text-lg font-serif font-bold text-slate-900">
                        Property Files Network
                      </div>
                      <div className="text-xs text-slate-500 font-medium">
                        Smart Deals • Trusted Services
                      </div>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded bg-slate-100 text-slate-800 text-[11px] font-semibold border border-slate-200 whitespace-nowrap">
                    DHA Phase 8
                  </span>
                </div>

                {/* Featured Project Showcase: Mangla Garrison Housing */}
                <div className="rounded-xl overflow-hidden border border-slate-200 bg-slate-900">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={featuredMGH.images[0]}
                      alt={featuredMGH.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-md bg-amber-500 text-slate-950 text-[10px] font-bold uppercase tracking-wider">
                        Featured Waterfront
                      </span>
                    </div>
                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <div className="text-xs text-amber-400 font-semibold uppercase tracking-wider">
                        MGH Pakistan
                      </div>
                      <h4 className="text-lg font-serif font-bold text-white">
                        {featuredMGH.title}
                      </h4>
                      <p className="text-[11px] text-slate-300 line-clamp-1 mt-0.5">
                        Waterfront luxury villas, 1 Kanal &amp; 10 Marla affidavit files.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 bg-slate-900 text-white space-y-3">
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="p-2.5 rounded-lg bg-slate-800/80 border border-slate-700">
                        <span className="text-[10px] uppercase text-slate-400 block">
                          Affidavit Files
                        </span>
                        <span className="font-bold text-amber-400">10 Marla &amp; 1 Kanal</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-slate-800/80 border border-slate-700">
                        <span className="text-[10px] uppercase text-slate-400 block">
                          Entry Starting
                        </span>
                        <span className="font-bold text-white">PKR 35 Lakh</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 pt-1">
                      <Link
                        href="/portfolio#mgh-pakistan-mangla-garrison"
                        className="flex-1 py-2.5 px-3 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold text-center transition-all"
                      >
                        View Society Details &amp; Video
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Quick DHA Phase Selector Strip */}
                <div className="space-y-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    DHA Lahore Phases
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    {PAKISTAN_PORTFOLIO.slice(1, 5).map((p) => (
                      <Link
                        key={p.id}
                        href={`/portfolio#${p.id}`}
                        className="p-2.5 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-colors block"
                      >
                        <div className="font-semibold text-slate-900 truncate">
                          {p.title}
                        </div>
                        <div className="text-[11px] text-slate-500 truncate">
                          {p.fileSpecialty}
                        </div>
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
