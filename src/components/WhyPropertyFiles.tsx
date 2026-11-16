"use client";

import React from "react";
import { Scale, Compass, Award, Users } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { COMPANY_INFO } from "@/lib/data";

export default function WhyPropertyFiles() {
  const pillars = [
    {
      icon: Scale,
      title: "100% Legal Title Due Diligence",
      desc: "We independently audit LDA planning NOCs, Sub-Registrar sale deeds (Baya-Nama), Arazi Record Center mutations (Intiqal), and DHA NDC clearances prior to client presentation.",
    },
    {
      icon: Award,
      title: "18+ Years Institutional Track Record",
      desc: `Founded in 2008 in Lahore, ${COMPANY_INFO.name} has guided over PKR 45 Billion in residential, commercial, and agricultural property transactions through changing market cycles.`,
    },
    {
      icon: Compass,
      title: "MGH & DHA File Trading Excellence",
      desc: "Specialized trading desk for Mangla Garrison Housing (MGH) 1 Kanal and 10 Marla affidavit files, DHA Phase 8 Broadway Commercial, Phase 9 Prism, and Phase 10 allocation files.",
    },
    {
      icon: Users,
      title: "Overseas Pakistani Desk (RDA & PoA)",
      desc: "Specialized advisory for diaspora investors across the UK, UAE, USA, and Canada ensuring compliant banking channels, foreign remittance PRCs, and legal repatriation rights.",
    },
  ];

  return (
    <section className="py-20 lg:py-24 bg-slate-50 border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 space-y-16">
        <ScrollReveal direction="up">
          <div className="max-w-3xl space-y-3">
            <div className="text-xs font-bold uppercase tracking-widest text-amber-700">
              The Property Files Network Standard
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-serif font-bold text-slate-900 leading-tight">
              Why Discerning Investors Trust{" "}
              <span className="text-amber-700">{COMPANY_INFO.name}</span>
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              We operate as fiduciary real estate advisors rather than speculative brokers. Our mandate is simple: ensure total capital safety, legal clarity, and dependable yield performance.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <ScrollReveal key={idx} direction="up" delayMs={idx * 80}>
                <div className="h-full p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all space-y-3">
                  <div className="w-11 h-11 rounded-xl bg-slate-900 text-amber-400 flex items-center justify-center shadow-sm">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-serif font-bold text-slate-900 leading-snug">
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
      </div>
    </section>
  );
}
