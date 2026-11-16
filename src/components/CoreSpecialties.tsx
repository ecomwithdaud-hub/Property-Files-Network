"use client";

import React from "react";
import Link from "next/link";
import {
  FileCheck2,
  Building2,
  TrendingUp,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Phone,
} from "lucide-react";
import { CORE_SPECIALTIES, COMPANY_INFO } from "@/lib/data";

export default function CoreSpecialties() {
  const icons = [FileCheck2, Building2, TrendingUp];

  return (
    <section id="services" className="py-10 sm:py-14 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="max-w-3xl space-y-2">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-amber-50 border border-amber-200 text-amber-800 text-[11px] font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-700" />
            <span>What We Do • Core Specialties</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 leading-tight">
            Our Three Core Pillars of{" "}
            <span className="text-amber-700">Property Advisory</span>
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            Specializing in verified property file trading, affidavit liquidity, and high-yield strategic real estate advisory.
          </p>
        </div>

        {/* 3 Core Pillars Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {CORE_SPECIALTIES.map((item, idx) => {
            const Icon = icons[idx] || ShieldCheck;
            return (
              <div
                key={item.id}
                className="p-5 sm:p-6 rounded-xl bg-slate-50 border border-slate-200 hover:border-amber-400 hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-lg bg-slate-900 text-amber-400 flex items-center justify-center shadow-xs">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full bg-white border border-slate-200 text-[10px] font-bold text-amber-700 uppercase tracking-wider">
                      {item.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-serif font-bold text-slate-900">
                      {item.title}
                    </h3>
                    <div className="text-xs font-semibold text-amber-700">
                      {item.subtitle}
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="pt-2 space-y-1.5 border-t border-slate-200/80">
                    {item.features.map((feat, fIdx) => (
                      <div
                        key={fIdx}
                        className="flex items-start gap-2 text-xs text-slate-700"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200 flex items-center justify-between mt-4">
                  <Link
                    href="#portfolio"
                    className="text-xs font-bold text-slate-900 group-hover:text-amber-700 flex items-center gap-1 transition-colors"
                  >
                    <span>View Societes</span>
                    <ArrowRight className="w-3.5 h-3.5 text-amber-600" />
                  </Link>

                  <a
                    href={`https://wa.me/923234304259?text=${encodeURIComponent(
                      `Hello Property Files Network, I would like to consult on ${item.title}.`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1.5 rounded-md bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition-colors"
                    title="Direct WhatsApp"
                  >
                    <Phone className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
