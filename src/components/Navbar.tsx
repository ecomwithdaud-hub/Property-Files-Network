"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Phone,
  LayoutDashboard,
  Building2,
  Menu,
  X,
  FileDown,
  Mail,
  MapPin,
  ArrowRight,
} from "lucide-react";
import PropertyFilesLogo from "./PropertyFilesLogo";
import SocialLinks from "./SocialLinks";
import { COMPANY_INFO } from "@/lib/data";
import { useLeads } from "@/context/LeadContext";

interface NavbarProps {
  activeModule?: "public" | "crm";
  setActiveModule?: (mod: "public" | "crm") => void;
}

export default function Navbar({
  activeModule = "public",
  setActiveModule,
}: NavbarProps) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { leads, setIsBrochureModalOpen } = useLeads();
  const newLeadsCount = leads.filter((l) => l.stage === "new").length;

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "Who We Are" },
    { href: "/portfolio", label: "What We Do & Portfolio" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-slate-200 shadow-sm">
      {/* 1. Top Corporate Ribbon (Strictly single-line, no wrapping, responsive padding) */}
      <div className="bg-slate-950 text-slate-200 text-xs border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-9 flex items-center justify-between gap-3 overflow-hidden">
          {/* Left: Primary Contact Info */}
          <div className="flex items-center gap-2 sm:gap-4 shrink-0 min-w-0">
            <a
              href={`tel:${COMPANY_INFO.pakistanPhoneRaw}`}
              className="flex items-center gap-1.5 text-white hover:text-amber-300 font-semibold transition-colors shrink-0 text-xs"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span className="hidden sm:inline text-slate-400 font-normal">Desk:</span>
              <span>{COMPANY_INFO.pakistanPhone}</span>
            </a>

            <span className="hidden md:inline text-slate-700">|</span>

            <a
              href={`tel:${COMPANY_INFO.secondaryPhoneRaw}`}
              className="hidden md:flex items-center gap-1.5 text-slate-300 hover:text-amber-300 transition-colors shrink-0 text-xs"
            >
              <span className="text-slate-400">Advisory:</span>
              <span className="font-semibold text-white">{COMPANY_INFO.secondaryPhone}</span>
            </a>

            <span className="hidden lg:inline text-slate-700">|</span>

            <span className="hidden lg:flex items-center gap-1 text-slate-400 text-xs truncate">
              <MapPin className="w-3 h-3 text-amber-400 shrink-0" />
              <span className="truncate">DHA Phase 8, Lahore</span>
            </span>
          </div>

          {/* Right: Social Media Handles & Desk WhatsApp */}
          <div className="flex items-center gap-3 shrink-0 ml-auto">
            <SocialLinks variant="navbar" />
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <Link href="/" className="cursor-pointer shrink-0 flex items-center">
          <PropertyFilesLogo variant="light" size="md" showTagline={true} />
        </Link>

        {/* Center Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-semibold text-slate-700">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname?.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`py-1.5 transition-colors ${
                  isActive
                    ? "text-slate-950 font-bold border-b-2 border-amber-600"
                    : "text-slate-600 hover:text-slate-950"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Action Controls */}
        <div className="hidden sm:flex items-center gap-2.5 lg:gap-3 shrink-0">
          {/* Dossier Download Button */}
          <button
            onClick={() => setIsBrochureModalOpen(true)}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300 transition-colors"
          >
            <FileDown className="w-3.5 h-3.5 text-amber-700 shrink-0" />
            <span className="hidden md:inline">Download</span> Dossier
          </button>

          {/* Portal Switcher (Website vs CRM) */}
          <div className="inline-flex items-center bg-slate-100 p-1 rounded-lg border border-slate-200">
            {setActiveModule ? (
              <>
                <button
                  onClick={() => setActiveModule("public")}
                  className={`inline-flex items-center gap-1 px-2.5 py-1.5 rounded-md text-xs font-semibold transition-all ${
                    activeModule === "public"
                      ? "bg-slate-900 text-white shadow-xs"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <Building2 className="w-3 h-3 shrink-0" />
                  <span>Site</span>
                </button>
                <button
                  onClick={() => setActiveModule("crm")}
                  className={`inline-flex items-center gap-1 px-2.5 py-1.5 rounded-md text-xs font-semibold transition-all ${
                    activeModule === "crm"
                      ? "bg-slate-900 text-white shadow-xs"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <LayoutDashboard className="w-3 h-3 shrink-0" />
                  <span>CRM</span>
                  {newLeadsCount > 0 && (
                    <span className="ml-1 px-1.5 py-0.2 rounded-full text-[10px] bg-amber-500 text-slate-950 font-bold">
                      {newLeadsCount}
                    </span>
                  )}
                </button>
              </>
            ) : (
              <Link
                href="/crm"
                className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-md text-xs font-semibold text-slate-700 hover:text-slate-900"
              >
                <LayoutDashboard className="w-3 h-3 shrink-0" />
                <span>CRM</span>
              </Link>
            )}
          </div>
        </div>

        {/* Mobile Navigation Toggle Button */}
        <div className="flex lg:hidden items-center gap-2">
          {setActiveModule && (
            <button
              onClick={() =>
                setActiveModule(activeModule === "public" ? "crm" : "public")
              }
              className="px-2.5 py-1.5 rounded-md text-[11px] font-bold bg-amber-500 text-slate-950 border border-amber-400"
            >
              {activeModule === "public" ? "CRM" : "Site"}
            </button>
          )}

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300 transition-colors focus:outline-none"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-slate-900" />
            ) : (
              <Menu className="w-5 h-5 text-slate-900" />
            )}
          </button>
        </div>
      </div>

      {/* 3. Mobile Dropdown Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white shadow-xl px-4 py-5 space-y-4">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname?.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors flex items-center justify-between ${
                    isActive
                      ? "bg-slate-900 text-white"
                      : "text-slate-800 hover:bg-slate-100"
                  }`}
                >
                  <span>{link.label}</span>
                  <ArrowRight className="w-4 h-4 opacity-70" />
                </Link>
              );
            })}
          </nav>

          {/* Quick Direct Actions in Mobile Menu */}
          <div className="pt-3 border-t border-slate-200 grid grid-cols-2 gap-2">
            <a
              href={`tel:${COMPANY_INFO.pakistanPhoneRaw}`}
              className="py-2.5 px-3 rounded-lg bg-slate-900 text-white text-xs font-bold text-center flex items-center justify-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>Call Hotline</span>
            </a>
            <a
              href={`https://wa.me/923234304259?text=${encodeURIComponent(
                "Hello Property Files Network, I would like to consult on MGH affidavit files and DHA Lahore property files."
              )}`}
              target="_blank"
              rel="noreferrer"
              className="py-2.5 px-3 rounded-lg bg-amber-500 text-slate-950 text-xs font-bold text-center flex items-center justify-center gap-1.5"
            >
              <span>WhatsApp Desk</span>
            </a>
          </div>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              setIsBrochureModalOpen(true);
            }}
            className="w-full py-2.5 px-3 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300 text-xs font-semibold flex items-center justify-center gap-2"
          >
            <FileDown className="w-4 h-4 text-amber-700" />
            <span>Download Official Dossier (PDF)</span>
          </button>
        </div>
      )}
    </header>
  );
}
