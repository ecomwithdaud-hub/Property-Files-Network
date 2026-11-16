"use client";

import React, { useState } from "react";
import {
  X,
  FileDown,
  MapPin,
  CheckCircle2,
  Building2,
  Phone,
  ShieldCheck,
} from "lucide-react";
import {
  COMPANY_INFO,
  PAKISTAN_PORTFOLIO,
} from "@/lib/data";
import { downloadOfficialBrochurePDF } from "@/lib/brochureGenerator";
import { useLeads } from "@/context/LeadContext";

export default function BrochureModal() {
  const { isBrochureModalOpen, setIsBrochureModalOpen } = useLeads();
  const [activeTab, setActiveTab] = useState<
    "overview" | "projects" | "legal"
  >("overview");
  const [downloaded, setDownloaded] = useState(false);

  if (!isBrochureModalOpen) return null;

  const handleDownload = () => {
    downloadOfficialBrochurePDF();
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 4000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/75 backdrop-blur-sm p-3 sm:p-6 overflow-y-auto">
      <div className="relative max-w-4xl w-full rounded-2xl bg-white border border-slate-200 shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Modal Header */}
        <div className="p-5 sm:p-6 bg-slate-900 text-white border-b border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="h-12 w-12 rounded-lg bg-white p-1 border border-slate-200 shrink-0">
              <img
                src="/images/ravi-estate-logo.png"
                alt="Ravi Estate"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-widest text-amber-400 block">
                Official Investment Dossier • Value Group Partnership
              </span>
              <h3 className="text-lg sm:text-xl font-serif font-bold text-white">
                Ravi Estate Pakistan Real Estate Portfolio
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
            { id: "overview", label: "1. Advisory Overview & Methodology" },
            { id: "projects", label: "2. Landmark Lahore Portfolio (6 Projects)" },
            { id: "legal", label: "3. Legal Due Diligence & RDA Repatriation" },
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
                  Ravi Estate × Value Group
                </span>
                <h4 className="text-2xl font-serif font-bold text-slate-900">
                  Institutional Real Estate Advisory in Lahore Since 2008
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Ravi Estate is an established property advisory and portfolio marketing firm specializing in verified, high-yield domestic real estate. Through our strategic partnership with Value Group, we provide domestic and overseas Pakistani investors with vetted residential apartments, commercial corporate high-rises, smart townhouses, and organic farmhouses.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <div className="text-xs text-slate-500 font-medium">Delivered &amp; Ongoing</div>
                  <div className="text-2xl font-serif font-bold text-slate-900">6 Key Landmarks</div>
                  <div className="text-xs text-slate-600">Across DHA, Gulberg, Model Town &amp; Barki Road</div>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <div className="text-xs text-slate-500 font-medium">Legal Verification</div>
                  <div className="text-2xl font-serif font-bold text-emerald-700">100% Title Checked</div>
                  <div className="text-xs text-slate-600">LDA, DHA &amp; Punjab Revenue compliance</div>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <div className="text-xs text-slate-500 font-medium">Diaspora Services</div>
                  <div className="text-2xl font-serif font-bold text-amber-600">RDA &amp; PoA Ready</div>
                  <div className="text-xs text-slate-600">Full banking repatriation assistance</div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "projects" && (
            <div className="space-y-4">
              <p className="text-sm text-slate-600">
                Explore the verified developments in the Ravi Estate &amp; Value Group portfolio:
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
                      <span className="text-slate-500 font-normal">{proj.unitsInfo}</span>
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
                  Investor Protection &amp; Legal Framework
                </h4>
                <p className="text-sm text-slate-600">
                  Every acquisition guided by Ravi Estate adheres to stringent legal verifications:
                </p>
              </div>

              <div className="space-y-2.5">
                {[
                  {
                    title: "1. Registry & Mutation (Intiqal) Verification",
                    desc: "Direct verification with the Arazi Record Center (ARC) and Sub-Registrar to ensure unencumbered title deeds.",
                  },
                  {
                    title: "2. DHA Verification Slip (NDC)",
                    desc: "Official clearance verifying all development charges, transfer fees, and utility dues are fully cleared.",
                  },
                  {
                    title: "3. Roshan Digital Account (RDA) Repatriation",
                    desc: "Structuring inward foreign exchange remittances with State Bank purpose codes ensuring 100% legal capital and profit repatriation rights.",
                  },
                  {
                    title: "4. Special Power of Attorney (PoA) Attestation",
                    desc: "Guidance on embassy attestation and MOFA registration for overseas clients who cannot travel physically to Lahore.",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-slate-900">{item.title}</div>
                      <div className="text-xs text-slate-600 mt-0.5">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <Phone className="w-3.5 h-3.5 text-amber-600" />
            <span className="text-slate-900 font-semibold">
              Pakistan Advisory Hotline: {COMPANY_INFO.pakistanPhone}
            </span>
          </div>
          <div className="flex items-center gap-2 text-emerald-700 font-semibold">
            <ShieldCheck className="w-4 h-4" />
            <span>Verified Portfolio • Ravi Estate ({COMPANY_INFO.domain})</span>
          </div>
        </div>
      </div>
    </div>
  );
}
