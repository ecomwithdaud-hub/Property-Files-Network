"use client";

import React from "react";
import Link from "next/link";
import {
  FileDown,
  ArrowRight,
  Phone,
  ShieldCheck,
  Award,
  Building2,
  TrendingUp,
  FileCheck2,
  MapPin,
  Users,
} from "lucide-react";
import { COMPANY_INFO, FOUNDERS_LEADERSHIP } from "@/lib/data";
import { useLeads } from "@/context/LeadContext";

export default function HeroSection() {
  const { setIsBrochureModalOpen } = useLeads();

  return (
    <section
      id="about"
      className="relative bg-gradient-to-b from-slate-50 via-white to-slate-50 py-8 sm:py-12 lg:py-14 border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Main Grid: Left Value Proposition & Right Corporate Dossier Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left 7 Columns: Who We Are & Tagline */}
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-amber-50 border border-amber-200 text-amber-900 text-[11px] font-bold uppercase tracking-wider">
              <Award className="w-3.5 h-3.5 text-amber-700 shrink-0" />
              <span>Smart Deals • Trusted Services • Secure Investments</span>
            </div>

            <div className="space-y-3">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-slate-900 tracking-tight leading-tight">
                Property | Investment | Files —{" "}
                <span className="text-amber-700">Your Future</span> Starts Here!
              </h1>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                {COMPANY_INFO.bio}
              </p>
            </div>

            {/* Leadership Bar: M Talha Cheema & M Daud Ali Lashari */}
            <div className="p-3.5 sm:p-4 rounded-xl bg-white border border-slate-200 shadow-xs space-y-2">
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-amber-700" />
                <span>Executive Leadership &amp; Founders</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {FOUNDERS_LEADERSHIP.map((leader) => (
                  <div
                    key={leader.name}
                    className="p-2.5 rounded-lg bg-slate-50 border border-slate-200/80 flex flex-col justify-between"
                  >
                    <div>
                      <div className="font-serif font-bold text-slate-900 text-sm">
                        {leader.name}
                      </div>
                      <div className="text-[11px] font-medium text-amber-700">
                        {leader.role} • {leader.focus}
                      </div>
                    </div>
                    <a
                      href={`tel:${leader.phone.replace(/\s+/g, "")}`}
                      className="mt-1.5 font-semibold text-slate-700 hover:text-amber-700 flex items-center gap-1"
                    >
                      <Phone className="w-3 h-3 text-amber-600" />
                      <span>{leader.phone}</span>
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Call & WhatsApp Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-lg bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs sm:text-sm shadow-xs transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>WhatsApp Trading Desk</span>
              </a>

              <a
                href={`tel:${COMPANY_INFO.pakistanPhoneRaw}`}
                className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs sm:text-sm shadow-xs transition-colors"
              >
                <span>Call {COMPANY_INFO.pakistanPhone}</span>
              </a>

              <button
                onClick={() => setIsBrochureModalOpen(true)}
                className="inline-flex items-center justify-center gap-2 px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 font-medium text-xs sm:text-sm transition-colors"
              >
                <FileDown className="w-4 h-4 text-amber-700" />
                <span>Download Dossier</span>
              </button>
            </div>

            {/* Verified Address & Contact Bar */}
            <div className="pt-3 border-t border-slate-200 flex flex-wrap items-center gap-4 text-xs text-slate-600">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                <span className="font-medium text-slate-800">
                  {COMPANY_INFO.headOffice}
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span className="text-slate-600">
                  Languages: English • Urdu • Punjabi
                </span>
              </div>
            </div>
          </div>

          {/* Right 5 Columns: Corporate Identity Showcase Card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-white border border-slate-200 p-5 sm:p-6 shadow-md space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl overflow-hidden border border-slate-200 shadow-xs shrink-0">
                    <img
                      src="/images/property-files-network-logo.jpg"
                      alt="Property Files Network Official Crest"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold tracking-wider text-amber-700">
                      Real Estate Advisory
                    </div>
                    <div className="font-serif font-bold text-slate-900 text-base">
                      Property Files Network
                    </div>
                    <div className="text-[11px] text-slate-500">
                      DHA Phase 8, Lahore
                    </div>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded bg-slate-100 text-slate-800 text-[10px] font-bold border border-slate-200">
                  Verified Desk
                </span>
              </div>

              {/* 3 Core Highlights List */}
              <div className="space-y-2 text-xs">
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200/80 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FileCheck2 className="w-4 h-4 text-amber-700 shrink-0" />
                    <div>
                      <div className="font-bold text-slate-900">
                        MGH Affidavit Files
                      </div>
                      <div className="text-[11px] text-slate-500">
                        1 Kanal &amp; 10 Marla Mangla Lakefront
                      </div>
                    </div>
                  </div>
                  <Link
                    href="#portfolio"
                    className="text-[11px] font-bold text-amber-700 hover:underline"
                  >
                    View
                  </Link>
                </div>

                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200/80 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-emerald-700 shrink-0" />
                    <div>
                      <div className="font-bold text-slate-900">
                        DHA Property Files
                      </div>
                      <div className="text-[11px] text-slate-500">
                        Phases 6, 7, 8 Broadway, 9 Prism &amp; 10
                      </div>
                    </div>
                  </div>
                  <Link
                    href="#portfolio"
                    className="text-[11px] font-bold text-amber-700 hover:underline"
                  >
                    View
                  </Link>
                </div>

                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200/80 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-amber-700 shrink-0" />
                    <div>
                      <div className="font-bold text-slate-900">
                        Strategic Investment Advising
                      </div>
                      <div className="text-[11px] text-slate-500">
                        High-yield wealth &amp; diaspora portfolios
                      </div>
                    </div>
                  </div>
                  <Link
                    href="#lead-inquiry"
                    className="text-[11px] font-bold text-amber-700 hover:underline"
                  >
                    Inquire
                  </Link>
                </div>
              </div>

              {/* Direct WhatsApp Callout */}
              <div className="p-3 rounded-xl bg-slate-900 text-white flex items-center justify-between">
                <div>
                  <div className="text-xs font-semibold text-amber-400">
                    Direct Advisory Consultation
                  </div>
                  <div className="text-[11px] text-slate-300">
                    M Talha Cheema &amp; M Daud Ali Lashari
                  </div>
                </div>
                <a
                  href={COMPANY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-colors shrink-0"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
