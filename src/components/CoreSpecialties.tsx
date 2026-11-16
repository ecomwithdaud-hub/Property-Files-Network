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
import ScrollReveal from "./ScrollReveal";

export default function CoreSpecialties() {
  const icons = [FileCheck2, Building2, TrendingUp];

  return (
    <section className="py-20 lg:py-24 bg-white border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 space-y-16">
        <ScrollReveal direction="up">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-widest">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-700" />
              <span>Core Specialties &amp; Trading Pillars</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-serif font-bold text-slate-900 leading-tight">
              What We Do at{" "}
              <span className="text-amber-700">Property Files Network</span>
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              We specialize in secure property file trading, affidavit liquidity, and institutional investment advisory. Our mission is to deliver smart deals, trusted services, and secure investments.
            </p>
          </div>
        </ScrollReveal>

        {/* 3 Core Pillars Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CORE_SPECIALTIES.map((item, idx) => {
            const Icon = icons[idx] || ShieldCheck;
            return (
              <ScrollReveal key={item.id} direction="up" delayMs={idx * 100}>
                <div className="h-full p-8 rounded-2xl bg-slate-50 border border-slate-200 hover:border-amber-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-slate-900 text-amber-400 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="px-3 py-1 rounded-full bg-white border border-slate-200 text-[11px] font-bold text-amber-700 uppercase tracking-wider">
                        {item.badge}
                      </span>
                    </div>

                    <div className="space-y-1">
                      <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-900">
                        {item.title}
                      </h3>
                      <div className="text-xs font-bold text-amber-700 uppercase tracking-wide">
                        {item.subtitle}
                      </div>
                    </div>

                    <p className="text-sm text-slate-600 leading-relaxed">
                      {item.description}
                    </p>

                    <div className="pt-2 space-y-2 border-t border-slate-200/80">
                      {item.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-slate-200 flex items-center justify-between mt-6">
                    <Link
                      href="/portfolio"
                      className="text-xs font-bold text-slate-900 group-hover:text-amber-700 flex items-center gap-1.5 transition-colors"
                    >
                      <span>Explore Available Files</span>
                      <ArrowRight className="w-3.5 h-3.5 text-amber-600" />
                    </Link>

                    <a
                      href={`https://wa.me/923234304259?text=${encodeURIComponent(
                        `Hello Property Files Network, I would like to inquire about ${item.title}.`
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition-colors"
                      title="Direct WhatsApp"
                    >
                      <Phone className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
