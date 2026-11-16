"use client";

import React from "react";
import Link from "next/link";
import {
  Phone,
  Globe,
  MapPin,
  FileDown,
  ShieldCheck,
  LayoutDashboard,
  Mail,
  Clock,
  BookOpen,
  Languages,
} from "lucide-react";
import PropertyFilesLogo from "./PropertyFilesLogo";
import SocialLinks from "./SocialLinks";
import {
  COMPANY_INFO,
  PAKISTAN_PORTFOLIO,
  BLOG_POSTS,
  SERVED_REGIONS,
} from "@/lib/data";
import { useLeads } from "@/context/LeadContext";
import ScrollReveal from "./ScrollReveal";

interface FooterProps {
  onSwitchToCRM?: () => void;
}

export default function Footer({ onSwitchToCRM }: FooterProps) {
  const { setIsBrochureModalOpen } = useLeads();

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      {/* Top Corporate Callout Banner */}
      <div className="border-b border-slate-800 bg-slate-950/60">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10">
          <ScrollReveal direction="up">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 rounded-xl overflow-hidden border border-amber-400/30 bg-slate-900 shadow-md shrink-0">
                  <img
                    src="/images/property-files-network-logo.jpg"
                    alt="Property Files Network Official Logo"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
                    Trusted Real Estate Advisory &amp; File Trading
                  </span>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mt-0.5">
                    Property Files Network
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl font-medium">
                    {COMPANY_INFO.tagline}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <button
                  onClick={() => setIsBrochureModalOpen(true)}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm transition-all whitespace-nowrap shadow-sm"
                >
                  <FileDown className="w-4 h-4" />
                  <span>Download Portfolio Dossier</span>
                </button>
                {onSwitchToCRM ? (
                  <button
                    onClick={onSwitchToCRM}
                    className="inline-flex items-center gap-2 px-4 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-semibold text-sm transition-all whitespace-nowrap"
                  >
                    <LayoutDashboard className="w-4 h-4 text-amber-400" />
                    <span>CRM Portal</span>
                  </button>
                ) : (
                  <Link
                    href="/crm"
                    className="inline-flex items-center gap-2 px-4 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-semibold text-sm transition-all whitespace-nowrap"
                  >
                    <LayoutDashboard className="w-4 h-4 text-amber-400" />
                    <span>CRM Portal</span>
                  </Link>
                )}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Main 4-Column Corporate Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Col 1: Brand, Bio & Socials */}
        <div className="space-y-4">
          <PropertyFilesLogo variant="dark" size="md" showTagline={false} />
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            {COMPANY_INFO.bio}
          </p>

          <div className="pt-1 space-y-2 text-xs">
            <div className="flex items-center gap-2 text-amber-400 font-medium">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>MGH &amp; DHA Property Files Specialists</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <Languages className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Languages: {COMPANY_INFO.languages.join(" • ")}</span>
            </div>
          </div>

          {/* Official Social Media Channels */}
          <div className="pt-2">
            <div className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold mb-2.5">
              Official Media Channels
            </div>
            <SocialLinks variant="footer" />
          </div>
        </div>

        {/* Col 2: Featured Societies & Files */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-widest text-amber-400">
            Societies &amp; Files
          </h4>
          <ul className="space-y-2.5 text-xs text-slate-300">
            {PAKISTAN_PORTFOLIO.map((proj) => (
              <li key={proj.id}>
                <Link
                  href={`/portfolio#${proj.id}`}
                  className="hover:text-amber-400 transition-colors block"
                >
                  <strong className="text-white font-medium">
                    {proj.title}
                  </strong>
                  <div className="text-slate-400 text-[11px] mt-0.5">
                    {proj.fileSpecialty}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3: Geographic Coverage */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-widest text-amber-400">
            Regions We Serve
          </h4>
          <div className="space-y-2.5 text-xs text-slate-300">
            {SERVED_REGIONS.map((region) => (
              <div key={region.province} className="space-y-1">
                <div className="text-white font-semibold text-xs">
                  {region.province}
                </div>
                <div className="text-slate-400 text-[11px]">
                  {region.cities.join(", ")}
                </div>
              </div>
            ))}
            <div className="pt-2">
              <Link
                href="/about"
                className="text-amber-400 hover:underline font-semibold inline-flex items-center gap-1 text-xs"
              >
                <span>Meet Founders M Talha Cheema &amp; M Daud Ali Lashari &rarr;</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Col 4: Contact & Office Hours */}
        <div className="space-y-4">
          <h4 className="text-xs font-bold uppercase tracking-widest text-amber-400">
            Direct Contact &amp; Desks
          </h4>

          {/* Address Card */}
          <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 space-y-1.5 text-xs">
            <div className="text-[11px] uppercase tracking-wider text-amber-400 font-semibold flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" />
              <span>Head Office Address</span>
            </div>
            <div className="text-sm font-semibold text-white leading-snug">
              {COMPANY_INFO.headOffice}
            </div>
          </div>

          {/* Dual Phone Hotline */}
          <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 space-y-2 text-xs">
            <div className="text-[11px] uppercase tracking-wider text-amber-400 font-semibold">
              Phone &amp; WhatsApp Hotlines
            </div>
            <div className="space-y-1.5">
              <a
                href={`tel:${COMPANY_INFO.pakistanPhoneRaw}`}
                className="flex items-center gap-2 text-sm font-bold text-white hover:text-amber-400 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>{COMPANY_INFO.pakistanPhone}</span>
              </a>
              <a
                href={`tel:${COMPANY_INFO.secondaryPhoneRaw}`}
                className="flex items-center gap-2 text-sm font-bold text-white hover:text-amber-400 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>{COMPANY_INFO.secondaryPhone}</span>
              </a>
            </div>
          </div>

          {/* Email & Hours */}
          <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700 space-y-1.5 text-xs">
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="flex items-center gap-2 text-slate-300 hover:text-amber-300 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span className="truncate">{COMPANY_INFO.email}</span>
            </a>
            <div className="flex items-center gap-2 text-slate-400 pt-0.5">
              <Clock className="w-3.5 h-3.5 text-slate-500 shrink-0" />
              <span>{COMPANY_INFO.officeHours}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-slate-800 bg-slate-950 py-5">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()}{" "}
            <strong className="text-white">Property Files Network</strong> —{" "}
            <span className="italic text-amber-400">
              &ldquo;{COMPANY_INFO.tagline}&rdquo;
            </span>{" "}
            All rights reserved.
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/about" className="hover:text-white">About Us</Link>
            <span>•</span>
            <Link href="/portfolio" className="hover:text-white">Societies &amp; Files</Link>
            <span>•</span>
            <Link href="/blog" className="hover:text-white">Blog &amp; Case Studies</Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-white">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
