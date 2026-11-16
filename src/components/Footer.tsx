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
} from "lucide-react";
import PropertyFilesLogo from "./PropertyFilesLogo";
import SocialLinks from "./SocialLinks";
import { COMPANY_INFO, PAKISTAN_PORTFOLIO, BLOG_POSTS } from "@/lib/data";
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
                    Official Advisory &amp; Marketing Partner • Value Group
                  </span>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mt-0.5">
                    Property Files Network — &ldquo;{COMPANY_INFO.tagline}&rdquo;
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1">
                    Advising high-net-worth families, institutions, and overseas Pakistanis across Lahore since {COMPANY_INFO.foundedYear}.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <button
                  onClick={() => setIsBrochureModalOpen(true)}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm transition-all whitespace-nowrap"
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
        {/* Col 1: Brand & Socials */}
        <div className="space-y-4">
          <PropertyFilesLogo variant="dark" size="md" showTagline={true} />
          <p className="text-sm text-slate-400 leading-relaxed">
            Institutional property advisory and portfolio marketing firm specializing in verified, high-yield residential apartments, corporate office towers, smart townhouses, and organic country estates across Lahore, Pakistan.
          </p>

          <div className="pt-1 space-y-2 text-xs">
            <div className="flex items-center gap-2 text-amber-400 font-medium">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>Value Group Authorized Partner</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <Globe className="w-4 h-4 text-amber-400 shrink-0" />
              <a
                href={COMPANY_INFO.websiteUrl}
                target="_blank"
                rel="noreferrer"
                className="hover:text-amber-400 underline underline-offset-4"
              >
                {COMPANY_INFO.domain}
              </a>
            </div>
          </div>

          {/* 4 Official Social Media Channels */}
          <div className="pt-2">
            <div className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold mb-2.5">
              Official Media Channels
            </div>
            <SocialLinks variant="footer" />
          </div>
        </div>

        {/* Col 2: Pakistan Portfolio Links */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-widest text-amber-400">
            Pakistan Portfolio (Lahore)
          </h4>
          <ul className="space-y-2 text-xs text-slate-300">
            {PAKISTAN_PORTFOLIO.map((proj) => (
              <li key={proj.id}>
                <Link
                  href={`/portfolio#${proj.id}`}
                  className="hover:text-amber-400 transition-colors block"
                >
                  <strong className="text-white font-medium">
                    {proj.title}
                  </strong>{" "}
                  <span className="text-slate-400">({proj.location})</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3: Market Intelligence & Case Studies */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-widest text-amber-400">
            Research &amp; Case Studies
          </h4>
          <ul className="space-y-2.5 text-xs text-slate-300">
            {BLOG_POSTS.slice(0, 4).map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="hover:text-amber-400 transition-colors line-clamp-2"
                >
                  <span className="text-white font-medium">{post.title}</span>
                </Link>
              </li>
            ))}
            <li className="pt-1">
              <Link
                href="/blog"
                className="text-amber-400 hover:underline font-semibold inline-flex items-center gap-1"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Explore all 6 articles &rarr;</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 4: Contact & Office Hours */}
        <div className="space-y-4">
          <h4 className="text-xs font-bold uppercase tracking-widest text-amber-400">
            Direct Advisory Desks
          </h4>

          <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 space-y-1">
            <div className="text-[11px] uppercase tracking-wider text-amber-400 font-semibold">
              Pakistan Advisory Hotline
            </div>
            <a
              href={`tel:${COMPANY_INFO.pakistanPhoneRaw}`}
              className="flex items-center gap-2 text-base font-bold text-white hover:text-amber-400 transition-colors"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>{COMPANY_INFO.pakistanPhone}</span>
            </a>
            <div className="flex items-start gap-1.5 text-xs text-slate-400 pt-1">
              <MapPin className="w-3.5 h-3.5 text-slate-500 shrink-0 mt-0.5" />
              <span>{COMPANY_INFO.headOffice}</span>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700 space-y-1 text-xs">
            <div className="flex items-center gap-1.5 text-slate-300">
              <Mail className="w-3.5 h-3.5 text-amber-400" />
              <span>{COMPANY_INFO.email}</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-400 pt-1">
              <Clock className="w-3.5 h-3.5 text-slate-500" />
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
            <strong className="text-white">Property Files Network</strong> (
            {COMPANY_INFO.domain}) —{" "}
            <span className="italic text-amber-400">
              &ldquo;{COMPANY_INFO.tagline}&rdquo;
            </span>{" "}
            All rights reserved.
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/about" className="hover:text-white">About Us</Link>
            <span>•</span>
            <Link href="/portfolio" className="hover:text-white">Portfolio</Link>
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
