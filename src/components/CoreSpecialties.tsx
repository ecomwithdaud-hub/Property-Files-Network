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
  Sparkles,
} from "lucide-react";
import { CORE_SPECIALTIES, COMPANY_INFO } from "@/lib/data";

export default function CoreSpecialties() {
  const icons = [FileCheck2, Building2, TrendingUp];

  return (
    <section id="services" className="py-10 sm:py-14 bg-gradient-to-b from-white via-slate-50 to-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="max-w-3xl space-y-2">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-[11px] font-bold uppercase tracking-wider shadow-2xs">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-700" />
            <span>3D Advisory Pillars • What We Do</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 leading-tight">
            Our Three Core Pillars of{" "}
            <span className="text-amber-700">Property Advisory</span>
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            Specializing in verified property file trading, affidavit liquidity, and high-yield strategic real estate advisory.
          </p>
        </div>

        {/* 3 Core Pillars Cards in 3D Perspective Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 perspective-1000">
          {CORE_SPECIALTIES.map((item, idx) => {
            const Icon = icons[idx] || ShieldCheck;
            return (
              <div
                key={item.id}
                className="card-3d preserve-3d glass-3d-light p-5 sm:p-6 rounded-2xl border border-slate-200/90 hover:border-amber-400 hover:shadow-xl transition-all flex flex-col justify-between group"
              >
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-xl bg-slate-950 text-amber-400 flex items-center justify-center shadow-md group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-white border border-slate-200 text-[10px] font-bold text-amber-700 uppercase tracking-wider shadow-2xs">
                      {item.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-serif font-bold text-slate-900 group-hover:text-amber-800 transition-colors">
                      {item.title}
                    </h3>
                    <div className="text-xs font-semibold text-amber-700 mt-0.5">
                      {item.subtitle}
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="pt-2.5 space-y-1.5 border-t border-slate-200/80">
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
                    <span>View Societies</span>
                    <ArrowRight className="w-3.5 h-3.5 text-amber-600 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <a
                    href={`https://wa.me/923234304259?text=${encodeURIComponent(
                      `Hello Property Files Network, I would like to consult on ${item.title}.`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 hover:scale-105 transition-all shadow-2xs"
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
