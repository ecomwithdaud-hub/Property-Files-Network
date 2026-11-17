"use client";

import React, { useState, useEffect, useRef } from "react";
import { MessageSquare, X, Phone, ShieldCheck, ArrowRight, Sparkles } from "lucide-react";
import { COMPANY_INFO, FOUNDERS_LEADERSHIP } from "@/lib/data";

export default function DualFounderWhatsAppSpeedDial() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div
      ref={containerRef}
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[9998] select-none"
    >
      {/* 3D Floating Popup Card when Opened */}
      {isOpen && (
        <div className="mb-3 w-[300px] sm:w-[330px] rounded-2xl glass-3d-dark border border-white/20 shadow-2xl p-4 space-y-3.5 animate-in fade-in slide-in-from-bottom-5 duration-300">
          {/* Card Header */}
          <div className="flex items-center justify-between pb-2.5 border-b border-white/10">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg overflow-hidden border border-amber-400/40 bg-slate-900 shrink-0">
                <img
                  src="/images/property-files-network-logo.jpg"
                  alt="Property Files Network Crest"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="text-[10px] uppercase font-bold tracking-wider text-amber-400">
                  Direct Founder Desk
                </div>
                <div className="text-xs font-serif font-bold text-white">
                  Property Files Network
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/80 transition-colors"
              aria-label="Close WhatsApp Desk"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-1">
            <span className="text-[11px] font-semibold text-slate-200 block">
              Who would you like to speak with?
            </span>
            <p className="text-[10px] text-slate-400">
              Direct WhatsApp chat with our executive Co-Founders:
            </p>
          </div>

          {/* Founder 1: M Talha Cheema */}
          <a
            href={`https://wa.me/923234304259?text=${encodeURIComponent(
              "Hello M Talha Cheema, I would like to consult on MGH affidavit files and DHA Lahore property file trading."
            )}`}
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-xl bg-slate-900/90 border border-white/10 hover:border-emerald-500/60 hover:bg-slate-900 transition-all flex items-center justify-between group shadow-sm block"
          >
            <div className="space-y-0.5">
              <div className="text-xs font-serif font-bold text-white group-hover:text-emerald-300 transition-colors flex items-center gap-1.5">
                <span>M Talha Cheema</span>
                <span className="text-[10px] px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  Co-Founder
                </span>
              </div>
              <div className="text-[10px] text-slate-400">
                File Trading &amp; MGH / DHA Affidavit Liquidity
              </div>
              <div className="text-[10px] text-emerald-400 font-semibold pt-0.5">
                +92 323 4304259
              </div>
            </div>

            <div className="w-8 h-8 rounded-full bg-emerald-600/90 text-white flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-emerald-500 transition-transform">
              <Phone className="w-3.5 h-3.5" />
            </div>
          </a>

          {/* Founder 2: M Daud Ali Lashari */}
          <a
            href={`https://wa.me/923204154156?text=${encodeURIComponent(
              "Hello M Daud Ali Lashari, I would like to consult on high-yield commercial assets and property portfolio structuring."
            )}`}
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-xl bg-slate-900/90 border border-white/10 hover:border-emerald-500/60 hover:bg-slate-900 transition-all flex items-center justify-between group shadow-sm block"
          >
            <div className="space-y-0.5">
              <div className="text-xs font-serif font-bold text-white group-hover:text-emerald-300 transition-colors flex items-center gap-1.5">
                <span>M Daud Ali Lashari</span>
                <span className="text-[10px] px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  Co-Founder
                </span>
              </div>
              <div className="text-[10px] text-slate-400">
                Strategic Advisory &amp; Broadway Commercial Plazas
              </div>
              <div className="text-[10px] text-emerald-400 font-semibold pt-0.5">
                +92 320 4154156
              </div>
            </div>

            <div className="w-8 h-8 rounded-full bg-emerald-600/90 text-white flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-emerald-500 transition-transform">
              <Phone className="w-3.5 h-3.5" />
            </div>
          </a>

          {/* Office Address Strip */}
          <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[10px] text-slate-400">
            <span>DHA Phase 8 Lahore Head Office</span>
            <span className="text-emerald-400 font-semibold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Online
            </span>
          </div>
        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open WhatsApp Trading Desk"
        className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold text-xs shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 border border-emerald-400/40"
      >
        {/* Pulsing Aura */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500 opacity-40 blur-sm animate-pulse pointer-events-none" />

        <div className="relative w-5 h-5 flex items-center justify-center shrink-0">
          {isOpen ? (
            <X className="w-5 h-5 text-white" />
          ) : (
            <MessageSquare className="w-5 h-5 text-white fill-current" />
          )}
        </div>

        <div className="relative flex flex-col items-start leading-none">
          <span className="text-[11px] font-bold tracking-tight">
            WhatsApp Desk
          </span>
          <span className="text-[9px] text-emerald-100 font-normal">
            Chat with Founders
          </span>
        </div>
      </button>
    </div>
  );
}
