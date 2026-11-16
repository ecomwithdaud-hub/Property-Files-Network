"use client";

import React from "react";
import Link from "next/link";
import {
  Phone,
  MapPin,
  FileDown,
  LayoutDashboard,
  Mail,
  Languages,
} from "lucide-react";
import PropertyFilesLogo from "./PropertyFilesLogo";
import SocialLinks from "./SocialLinks";
import { COMPANY_INFO, FOUNDERS_LEADERSHIP } from "@/lib/data";
import { useLeads } from "@/context/LeadContext";

interface FooterProps {
  onSwitchToCRM?: () => void;
}

export default function Footer({ onSwitchToCRM }: FooterProps) {
  const { setIsBrochureModalOpen } = useLeads();

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      {/* Top Footer Callout Ribbon */}
      <div className="border-b border-slate-800/80 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400">
                Property • Investment • Files
              </span>
              <h3 className="text-lg sm:text-xl font-serif font-bold text-white">
                Property Files Network
              </h3>
              <p className="text-xs text-slate-400">
                {COMPANY_INFO.tagline}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2.5">
              <button
                onClick={() => setIsBrochureModalOpen(true)}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-colors"
              >
                <FileDown className="w-3.5 h-3.5" />
                <span>Download Dossier</span>
              </button>

              {onSwitchToCRM ? (
                <button
                  onClick={onSwitchToCRM}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs border border-slate-700 transition-colors"
                >
                  <LayoutDashboard className="w-3.5 h-3.5 text-amber-400" />
                  <span>CRM Desk</span>
                </button>
              ) : (
                <Link
                  href="/crm"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs border border-slate-700 transition-colors"
                >
                  <LayoutDashboard className="w-3.5 h-3.5 text-amber-400" />
                  <span>CRM Desk</span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main 4-Column Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-xs">
        {/* Col 1: Bio & Founders */}
        <div className="space-y-3">
          <PropertyFilesLogo variant="dark" size="sm" showTagline={false} />
          <p className="text-slate-400 leading-relaxed text-xs">
            {COMPANY_INFO.bio}
          </p>
          <div className="pt-2 border-t border-slate-800 space-y-1">
            <span className="text-[11px] font-bold text-slate-300 block">
              Founders:
            </span>
            <div className="text-slate-400">
              {FOUNDERS_LEADERSHIP.map((f) => (
                <div key={f.name} className="leading-snug">
                  <span className="font-semibold text-amber-400">{f.name}</span> ({f.role})
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Col 2: Core Specialties */}
        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block">
            Core Specialties
          </span>
          <ul className="space-y-1.5 text-slate-400">
            <li>
              <Link href="#portfolio" className="hover:text-white transition-colors">
                MGH 1 Kanal &amp; 10 Marla Affidavit Files
              </Link>
            </li>
            <li>
              <Link href="#portfolio" className="hover:text-white transition-colors">
                DHA Lahore Phase 6 Possession
              </Link>
            </li>
            <li>
              <Link href="#portfolio" className="hover:text-white transition-colors">
                DHA Phase 8 Broadway Commercial
              </Link>
            </li>
            <li>
              <Link href="#portfolio" className="hover:text-white transition-colors">
                DHA Phase 9 Prism (16 Sectors)
              </Link>
            </li>
            <li>
              <Link href="#portfolio" className="hover:text-white transition-colors">
                DHA Phase 10 Allocation Files
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 3: Regions Covered */}
        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block">
            Regions We Serve
          </span>
          <div className="space-y-1 text-slate-400">
            <div>
              <strong className="text-slate-300">Punjab:</strong> Lahore, Rawalpindi, Jhelum, Dina, Kharian
            </div>
            <div>
              <strong className="text-slate-300">Islamabad:</strong> Capital Territory Desk
            </div>
            <div>
              <strong className="text-slate-300">Sindh:</strong> Karachi
            </div>
            <div>
              <strong className="text-slate-300">Azad Kashmir:</strong> Mirpur
            </div>
          </div>
          <div className="pt-2 text-[11px] text-slate-500">
            Languages: English • Urdu • Punjabi
          </div>
        </div>

        {/* Col 4: Contact & Socials */}
        <div className="space-y-2.5">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block">
            Head Office &amp; Inquiries
          </span>

          <div className="space-y-1.5 text-slate-400">
            <div className="flex items-start gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
              <span>{COMPANY_INFO.headOffice}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <a href={`tel:${COMPANY_INFO.pakistanPhoneRaw}`} className="hover:text-white">
                {COMPANY_INFO.pakistanPhone}
              </a>
            </div>
            <div className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <a href={`tel:${COMPANY_INFO.secondaryPhoneRaw}`} className="hover:text-white">
                {COMPANY_INFO.secondaryPhone}
              </a>
            </div>
            <div className="flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white">
                {COMPANY_INFO.email}
              </a>
            </div>
          </div>

          <div className="pt-2 border-t border-slate-800">
            <SocialLinks variant="footer" />
          </div>
        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="border-t border-slate-900 bg-slate-950 py-3 text-[11px] text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div>
            &copy; {new Date().getFullYear()} Property Files Network. All rights reserved.
          </div>
          <div>
            Office No. 98-D, Main Boulevard, DHA Phase 8, Lahore, Pakistan
          </div>
        </div>
      </div>
    </footer>
  );
}
