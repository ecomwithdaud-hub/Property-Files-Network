"use client";

import React, { useState } from "react";
import {
  X,
  FileDown,
  Building2,
  CheckCircle2,
  Phone,
  ShieldCheck,
  Scale,
  Compass,
  MapPin,
  Languages,
} from "lucide-react";
import { useLeads } from "@/context/LeadContext";
import { COMPANY_INFO, PAKISTAN_PORTFOLIO, FOUNDERS_LEADERSHIP } from "@/lib/data";
import { downloadOfficialBrochurePDF } from "@/lib/brochureGenerator";

export default function BrochureModal() {
  const { isBrochureModalOpen, setIsBrochureModalOpen } = useLeads();
  const [downloaded, setDownloaded] = useState(false);
  const [activeTab, setActiveTab] = useState<"overview" | "projects" | "legal">(
    "overview"
  );

  if (!isBrochureModalOpen) return null;

  const handleDownload = () => {
    downloadOfficialBrochurePDF();
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 4000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200 flex flex-col max-h-[90vh]">
        {/* Modal Corporate Header */}
        <div className="px-6 sm:px-8 py-5 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3.5">
            <div className="h-12 w-12 rounded-xl overflow-hidden border border-slate-200 bg-white shadow-sm shrink-0">
              <img
                src="/images/property-files-network-logo.jpg"
                alt="Property Files Network"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-widest text-amber-400 block">
                Official Investment Dossier • Property Files Network
              </span>
              <h3 className="text-lg sm:text-xl font-serif font-bold text-white">
                Societies &amp; Property Files Portfolio
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-sm transition-all"
            >
              <FileDown className="w-4 h-4" />
              <span>
                {downloaded ? "PDF Saved!" : "Download Official PDF"}
              </span>
            </button>
            <button
              onClick={() => setIsBrochureModalOpen(false)}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white"
              aria-label="Close Brochure"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Brochure Tabs */}
        <div className="px-6 py-3 bg-slate-50 border-b border-slate-200 flex flex-wrap gap-2">
          {[
            { id: "overview", label: "1. Advisory Overview & Leadership" },
            { id: "projects", label: "2. Societies & File Portfolio (5 Key Projects)" },
            { id: "legal", label: "3. Legal Due Diligence & Remote Diaspora Settlement" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() =>
                setActiveTab(
                  tab.id as "overview" | "projects" | "legal"
                )
              }
              className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition-all ${
                activeTab === tab.id
                  ? "bg-slate-900 text-white shadow-sm"
                  : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Scrollable Brochure Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1 bg-white text-slate-800">
          {activeTab === "overview" && (
            <div className="space-y-5">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-amber-600">
                  Property Files Network
                </span>
                <h4 className="text-2xl font-serif font-bold text-slate-900">
                  {COMPANY_INFO.tagline}
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {COMPANY_INFO.bio}
                </p>
              </div>

              {/* Leadership Strip */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  Co-Founders &amp; Key Contacts
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {FOUNDERS_LEADERSHIP.map((founder) => (
                    <div key={founder.name} className="space-y-1">
                      <div className="text-sm font-bold text-slate-900">
                        {founder.name} ({founder.role})
                      </div>
                      <div className="text-xs text-amber-700 font-medium">
                        {founder.title}
                      </div>
                      <div className="text-xs text-slate-600 font-semibold">
                        Phone/WhatsApp: {founder.phone}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <div className="text-xs text-slate-500 font-medium">Head Office</div>
                  <div className="text-base font-serif font-bold text-slate-900">DHA Phase 8</div>
                  <div className="text-xs text-slate-600">Office No. 98-D, Main Boulevard</div>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <div className="text-xs text-slate-500 font-medium">MGH Trading</div>
                  <div className="text-base font-serif font-bold text-emerald-700">1K &amp; 10M Files</div>
                  <div className="text-xs text-slate-600">Mangla Garrison Housing Affidavits</div>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <div className="text-xs text-slate-500 font-medium">DHA Handling</div>
                  <div className="text-base font-serif font-bold text-amber-600">Phases 6 to 10</div>
                  <div className="text-xs text-slate-600">Broadway, Prism &amp; Allocation files</div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "projects" && (
            <div className="space-y-4">
              <p className="text-sm text-slate-600">
                Explore the verified developments in the Property Files Network portfolio:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {PAKISTAN_PORTFOLIO.map((proj) => (
                  <div
                    key={proj.id}
                    className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2 hover:border-slate-300 transition-colors"
                  >
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-amber-600 flex items-center gap-1">
                        <Building2 className="w-3.5 h-3.5" />
                        {proj.type}
                      </span>
                      <span className="px-2 py-0.5 rounded bg-white text-slate-700 border border-slate-200 font-medium text-[11px]">
                        {proj.status}
                      </span>
                    </div>
                    <div className="text-base font-serif font-bold text-slate-900">
                      {proj.title}
                    </div>
                    <div className="flex items-center gap-1 text-xs text-slate-600">
                      <MapPin className="w-3 h-3 text-amber-600 shrink-0" />
                      <span>{proj.location}</span>
                    </div>
                    <div className="text-xs font-semibold text-slate-900 pt-1 border-t border-slate-200/80 flex items-center justify-between">
                      <span>Starting: {proj.startingPrice}</span>
                      <span className="text-slate-500 font-normal">{proj.fileSpecialty}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "legal" && (
            <div className="space-y-4">
              <div className="space-y-1">
                <h4 className="text-xl font-serif font-bold text-slate-900">
                  Investor Protection &amp; File Verification Framework
                </h4>
                <p className="text-sm text-slate-600">
                  Every acquisition guided by Property Files Network adheres to stringent legal verifications:
                </p>
              </div>

              <div className="space-y-2.5">
                {[
                  {
                    title: "1. Direct Directorate Verification",
                    desc: "Official checking with the Defence Housing Authority (DHA) and Mangla Garrison Housing (MGH) project directorates to ensure genuine allocation.",
                  },
                  {
                    title: "2. DHA Verification Slip & NDC",
                    desc: "Official clearance verifying that all development surcharges, transfer fees, and utility arrears are fully cleared prior to payment.",
                  },
                  {
                    title: "3. Biometric NADRA & CNIC Validation",
                    desc: "NADRA biometric verification of the legal owner to eliminate risks of unauthorized proxy transfers.",
                  },
                  {
                    title: "4. Overseas Diaspora Remote Escrow (RDA & Special PoA)",
                    desc: "Structured settlement through Roshan Digital Accounts with Pakistani Embassy / Consulate attested Power of Attorney.",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-lg bg-slate-50 border border-slate-200 space-y-1"
                  >
                    <div className="text-sm font-serif font-bold text-slate-900 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{item.title}</span>
                    </div>
                    <p className="text-xs text-slate-600 pl-6 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Callout */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <Phone className="w-3.5 h-3.5 text-amber-600" />
            <span className="text-slate-900 font-semibold">
              Advisory Hotlines: {COMPANY_INFO.pakistanPhone} • {COMPANY_INFO.secondaryPhone}
            </span>
          </div>
          <div className="flex items-center gap-2 text-emerald-700 font-semibold">
            <ShieldCheck className="w-4 h-4" />
            <span>Head Office: {COMPANY_INFO.headOffice}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
