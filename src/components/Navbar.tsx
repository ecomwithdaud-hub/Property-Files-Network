"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Phone,
  Globe,
  LayoutDashboard,
  Building2,
  Menu,
  X,
  FileDown,
  Mail,
  MapPin,
  Languages,
} from "lucide-react";
import PropertyFilesLogo from "./PropertyFilesLogo";
import SocialLinks from "./SocialLinks";
import { COMPANY_INFO } from "@/lib/data";
import { useLeads } from "@/context/LeadContext";

interface NavbarProps {
  activeModule?: "public" | "crm";
  setActiveModule?: (mod: "public" | "crm") => void;
}

export default function Navbar({ activeModule = "public", setActiveModule }: NavbarProps) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { leads, setIsBrochureModalOpen } = useLeads();
  const newLeadsCount = leads.filter((l) => l.stage === "new").length;

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/portfolio", label: "Societies & Files" },
    { href: "/blog", label: "Market Intelligence & Blog" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-slate-200 shadow-sm">
      {/* Top Corporate Ribbon */}
      <div className="bg-slate-900 text-slate-200 text-xs">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-2 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-3 sm:gap-5">
            <a
              href={`tel:${COMPANY_INFO.pakistanPhoneRaw}`}
              className="flex items-center gap-1.5 hover:text-amber-300 transition-colors whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span className="text-slate-400">Trading Desk:</span>
              <span className="font-semibold text-white">
                {COMPANY_INFO.pakistanPhone}
              </span>
            </a>

            <span className="hidden sm:inline text-slate-700">|</span>

            <a
              href={`tel:${COMPANY_INFO.secondaryPhoneRaw}`}
              className="hidden md:flex items-center gap-1.5 hover:text-amber-300 transition-colors whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span className="text-slate-400">Advisory:</span>
              <span className="font-semibold text-white">
                {COMPANY_INFO.secondaryPhone}
              </span>
            </a>

            <span className="hidden lg:inline text-slate-700">|</span>

            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="hidden lg:flex items-center gap-1.5 hover:text-amber-300 transition-colors whitespace-nowrap"
            >
              <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span className="text-slate-300">{COMPANY_INFO.email}</span>
            </a>

            <span className="hidden xl:inline text-slate-700">|</span>

            <div className="hidden xl:flex items-center gap-1.5 text-slate-400">
              <Languages className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>Languages: English • Urdu • Punjabi</span>
            </div>
          </div>

          {/* Social Channels: TikTok, Instagram, Facebook, LinkedIn */}
          <div className="flex items-center ml-auto whitespace-nowrap">
            <SocialLinks variant="navbar" showLabels={true} />
          </div>
        </div>
      </div>

      {/* Main Corporate Navigation Bar */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-3.5 lg:py-4 flex items-center justify-between gap-6">
        <Link href="/" className="cursor-pointer shrink-0">
          <PropertyFilesLogo variant="light" size="md" showTagline={true} />
        </Link>

        {/* Center Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-7 text-sm font-medium text-slate-700 whitespace-nowrap">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname?.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`py-1 transition-all ${
                  isActive
                    ? "text-slate-950 font-bold underline underline-offset-8 decoration-amber-600 decoration-2"
                    : "hover:text-slate-950 hover:underline underline-offset-8 decoration-slate-300"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Action Buttons */}
        <div className="hidden lg:flex items-center gap-3 shrink-0 whitespace-nowrap">
          <button
            onClick={() => setIsBrochureModalOpen(true)}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 transition-colors whitespace-nowrap"
          >
            <FileDown className="w-4 h-4 text-amber-700 shrink-0" />
            <span>Official Dossier</span>
          </button>

          {/* Clean Module Toggle Pill */}
          <div className="inline-flex items-center bg-slate-100 p-1 rounded-lg border border-slate-200">
            {setActiveModule ? (
              <>
                <button
                  onClick={() => setActiveModule("public")}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-md text-xs font-semibold transition-all whitespace-nowrap ${
                    activeModule === "public"
                      ? "bg-slate-900 text-white shadow-sm"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <Building2 className="w-3.5 h-3.5 shrink-0" />
                  <span>Website</span>
                </button>
                <button
                  onClick={() => setActiveModule("crm")}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-md text-xs font-semibold transition-all whitespace-nowrap ${
                    activeModule === "crm"
                      ? "bg-slate-900 text-white shadow-sm"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <LayoutDashboard className="w-3.5 h-3.5 shrink-0" />
                  <span>CRM Portal</span>
                  <span
                    className={`ml-1 px-1.5 py-0.5 rounded text-[10px] font-bold ${
                      activeModule === "crm"
                        ? "bg-amber-400 text-slate-950"
                        : "bg-slate-200 text-slate-700"
                    }`}
                  >
                    {newLeadsCount}
                  </span>
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/"
                  className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-md text-xs font-semibold transition-all whitespace-nowrap ${
                    pathname !== "/crm"
                      ? "bg-slate-900 text-white shadow-sm"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <Building2 className="w-3.5 h-3.5 shrink-0" />
                  <span>Website</span>
                </Link>
                <Link
                  href="/crm"
                  className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-md text-xs font-semibold transition-all whitespace-nowrap ${
                    pathname === "/crm"
                      ? "bg-slate-900 text-white shadow-sm"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <LayoutDashboard className="w-3.5 h-3.5 shrink-0" />
                  <span>CRM Portal</span>
                  <span className="ml-1 px-1.5 py-0.5 rounded text-[10px] font-bold bg-slate-200 text-slate-700">
                    {newLeadsCount}
                  </span>
                </Link>
              </>
            )}
          </div>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="xl:hidden p-2.5 rounded-lg bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-950"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-t border-slate-200 px-6 py-5 space-y-4 shadow-lg">
          <div className="grid grid-cols-2 gap-2 bg-slate-100 p-1.5 rounded-lg border border-slate-200">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 py-2.5 rounded-md text-xs font-semibold bg-slate-900 text-white"
            >
              <Building2 className="w-4 h-4" />
              Corporate Website
            </Link>
            <Link
              href="/crm"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 py-2.5 rounded-md text-xs font-semibold text-slate-700 hover:bg-slate-200"
            >
              <LayoutDashboard className="w-4 h-4" />
              CRM Portal ({leads.length})
            </Link>
          </div>

          <div className="flex flex-col space-y-1 text-sm font-medium text-slate-700">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg hover:bg-slate-50 text-slate-900"
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setIsBrochureModalOpen(true);
              }}
              className="w-full mt-2 py-3 px-4 rounded-lg bg-slate-900 text-white font-semibold flex items-center justify-center gap-2 text-xs"
            >
              <FileDown className="w-4 h-4 text-amber-400" />
              Download Official Portfolio Dossier
            </button>
          </div>

          {/* Direct Phone Buttons in Mobile Drawer */}
          <div className="pt-3 border-t border-slate-200 space-y-2 text-xs">
            <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
              Direct Contact &amp; Languages
            </div>
            <div className="flex flex-col gap-1.5">
              <a
                href={`tel:${COMPANY_INFO.pakistanPhoneRaw}`}
                className="flex items-center gap-2 font-bold text-slate-900"
              >
                <Phone className="w-3.5 h-3.5 text-amber-600" />
                <span>Trading: {COMPANY_INFO.pakistanPhone}</span>
              </a>
              <a
                href={`tel:${COMPANY_INFO.secondaryPhoneRaw}`}
                className="flex items-center gap-2 font-semibold text-slate-700"
              >
                <Phone className="w-3.5 h-3.5 text-amber-600" />
                <span>Advisory: {COMPANY_INFO.secondaryPhone}</span>
              </a>
              <div className="text-[11px] text-slate-500 pt-0.5">
                Fluent in English, Urdu &amp; Punjabi
              </div>
            </div>
          </div>

          {/* Mobile Socials */}
          <div className="pt-3 border-t border-slate-200 flex items-center justify-center">
            <SocialLinks variant="navbar" />
          </div>
        </div>
      )}
    </header>
  );
}
