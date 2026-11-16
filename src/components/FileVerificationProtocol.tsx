"use client";

import React from "react";
import {
  ShieldCheck,
  Fingerprint,
  FileCheck,
  Building,
  CheckCircle2,
  Lock,
  ArrowRight,
  Phone,
} from "lucide-react";
import { COMPANY_INFO } from "@/lib/data";
import InteractiveTiltCard from "./InteractiveTiltCard";

const VERIFICATION_STEPS = [
  {
    step: "01",
    title: "Biometric Directorate Verification",
    subtitle: "DHA Lahore & MGH Direct Authentication",
    description:
      "Every file or affidavit is cross-checked directly with official DHA and MGH directorate databases to verify genuine ownership, clear demarcation, and zero encumbrances or duplicate issues.",
    icon: Fingerprint,
    features: [
      "Official directorate ledger verification",
      "Guaranteed genuine biometric records",
      "Zero litigation or duplicate allotment risk",
    ],
    badge: "Directorate Verified",
  },
  {
    step: "02",
    title: "NDC & Tax Ledger Clearance",
    subtitle: "No Demand Certificate & Tax Compliance",
    description:
      "Complete due diligence on outstanding dues, development charges, and FBR transfer tax ledgers. Ensuring clean title transfer with zero hidden liabilities for buyers or sellers.",
    icon: FileCheck,
    features: [
      "Full No Demand Certificate (NDC) clearance",
      "Verified FBR withholding tax status",
      "Accurate legal documentation handover",
    ],
    badge: "100% Clean Ledger",
  },
  {
    step: "03",
    title: "Secure Head Office Settlement",
    subtitle: "Office 98-D, DHA Phase 8 Lahore",
    description:
      "Safe transaction closing and biometric execution at our corporate office in DHA Phase 8 Lahore. Dedicated support for overseas diaspora via embassy-attested Power of Attorney (PoA).",
    icon: Building,
    features: [
      "In-person biometric signing & settlement",
      "Embassy-attested PoA for overseas diaspora",
      "Immediate liquidity & prompt payout for sellers",
    ],
    badge: "Guaranteed Settlement",
  },
];

export default function FileVerificationProtocol() {
  return (
    <section className="relative py-10 sm:py-14 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white border-b border-slate-800 overflow-hidden">
      {/* 3D Flow Subtle Background Accents */}
      <div className="absolute inset-0 bg-architectural-grid-dark opacity-35 pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 w-80 h-80 rounded-full bg-amber-500/5 filter blur-3xl pointer-events-none animate-float-orb-1" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-800 pb-5">
          <div className="space-y-1.5 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 text-[11px] font-bold uppercase tracking-wider shadow-2xs sheen-glow">
              <Lock className="w-3.5 h-3.5 text-emerald-400" />
              <span>Investor Security &amp; Legal Trust</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white leading-tight">
              3-Step File Verification &amp;{" "}
              <span className="text-amber-400">Legal Safety Protocol</span>
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm">
              How Property Files Network protects local and overseas investors with guaranteed biometric verification, clean ledgers, and safe in-office settlement.
            </p>
          </div>

          <div className="p-3 rounded-xl glass-3d-dark border border-white/10 text-xs shrink-0 shadow-md">
            <span className="text-[10px] uppercase font-bold text-amber-400 block tracking-wider">
              Legal Commitment
            </span>
            <span className="font-semibold text-white">
              Zero-Risk File Guarantee
            </span>
          </div>
        </div>

        {/* 3 Steps in 3D Perspective Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 perspective-1000">
          {VERIFICATION_STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <InteractiveTiltCard key={step.step} maxTilt={4} className="h-full">
                <div className="h-full card-3d preserve-3d glass-3d-dark p-5 sm:p-6 rounded-2xl border border-white/10 hover:border-amber-400/50 hover:shadow-2xl transition-all flex flex-col justify-between group space-y-4">
                  <div className="space-y-3.5">
                    <div className="flex items-center justify-between">
                      <div className="w-11 h-11 rounded-xl bg-slate-900 border border-white/10 text-amber-400 flex items-center justify-center shadow-md group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all duration-300">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-2xl font-serif font-bold text-slate-700 group-hover:text-amber-500/40 transition-colors">
                        {step.step}
                      </span>
                    </div>

                    <div>
                      <span className="px-2 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-[10px] font-bold text-emerald-400 uppercase tracking-wider inline-block mb-1.5">
                        {step.badge}
                      </span>
                      <h3 className="text-lg font-serif font-bold text-white group-hover:text-amber-300 transition-colors">
                        {step.title}
                      </h3>
                      <div className="text-xs text-amber-400/90 font-medium mt-0.5">
                        {step.subtitle}
                      </div>
                    </div>

                    <p className="text-xs text-slate-400 leading-relaxed">
                      {step.description}
                    </p>

                    <div className="pt-2.5 space-y-1.5 border-t border-slate-800">
                      {step.features.map((feat, fIdx) => (
                        <div
                          key={fIdx}
                          className="flex items-start gap-2 text-xs text-slate-300"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
                    <span className="text-slate-400 text-[11px]">
                      Verified by Co-Founders
                    </span>
                    <a
                      href={`https://wa.me/923234304259?text=${encodeURIComponent(
                        `Hello Property Files Network, I would like to verify an affidavit or property file under your 3-step legal protocol.`
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-amber-400 hover:text-amber-300 font-semibold flex items-center gap-1 group-hover:translate-x-0.5 transition-all text-xs"
                    >
                      <span>Verify File</span>
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </InteractiveTiltCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
