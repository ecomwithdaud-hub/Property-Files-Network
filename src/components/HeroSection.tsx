"use client";

import React, { useState } from "react";
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
  Play,
  Maximize2,
  Sparkles,
} from "lucide-react";
import { COMPANY_INFO, FOUNDERS_LEADERSHIP, PAKISTAN_PORTFOLIO, PortfolioProject } from "@/lib/data";
import { useLeads } from "@/context/LeadContext";
import MediaGalleryModal from "./MediaGalleryModal";
import InteractiveTiltCard from "./InteractiveTiltCard";

const PROPERTY_TOURS = [
  {
    id: "mgh-tour",
    title: "Mangla Garrison Housing Waterfront",
    subtitle: "Lakefront Villas & 1 Kanal / 10 Marla Files",
    type: "Waterfront Estate Tour",
    videoEmbedUrl: "https://www.youtube.com/embed/HM8qOdgxNow",
    previewImage:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    badge: "MGH Lakefront",
    rate: "From PKR 35 Lakh",
    projectRef: PAKISTAN_PORTFOLIO[0],
  },
  {
    id: "dha-phase9-tour",
    title: "DHA Lahore Phase 9 Prism Mega Tour",
    subtitle: "40,000+ Kanals Across 16 Sectors (A to R)",
    type: "Mega Phase Walkthrough",
    videoEmbedUrl: "https://www.youtube.com/embed/HcGZbuln3bE",
    previewImage:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
    badge: "Phase 9 Prism",
    rate: "From PKR 65 Lakh",
    projectRef: PAKISTAN_PORTFOLIO[3],
  },
  {
    id: "dha-broadway-tour",
    title: "DHA Phase 8 Broadway Commercial",
    subtitle: "200ft Main Boulevard & Commercial Plazas",
    type: "Commercial Investment Tour",
    videoEmbedUrl: "https://www.youtube.com/embed/2AER-4NtE9c",
    previewImage:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    badge: "Phase 8 Broadway",
    rate: "Up to 12.8% Yield",
    projectRef: PAKISTAN_PORTFOLIO[2],
  },
];

export default function HeroSection() {
  const { setIsBrochureModalOpen } = useLeads();
  const [activeTourIndex, setActiveTourIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalProject, setModalProject] = useState<PortfolioProject | null>(null);

  const activeTour = PROPERTY_TOURS[activeTourIndex];

  const handleOpenTourModal = (project: PortfolioProject) => {
    setModalProject(project);
    setIsModalOpen(true);
  };

  return (
    <section
      id="about"
      className="relative min-h-[640px] lg:min-h-[720px] bg-slate-950 text-white overflow-hidden flex items-center border-b border-slate-800"
    >
      {/* 1. Cinematic Background Video & Luxury Estate Backdrop */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* HTML5 Seamless Aerial Property Tour Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=80"
          className="w-full h-full object-cover object-center opacity-30 scale-105 transform motion-safe:transition-transform duration-1000"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-a-luxury-modern-house-and-pool-42845-large.mp4"
            type="video/mp4"
          />
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-modern-luxury-house-exterior-with-swimming-pool-42846-large.mp4"
            type="video/mp4"
          />
        </video>

        {/* 3D Moving Architectural Grid Lines */}
        <div className="absolute inset-0 bg-architectural-grid-dark animate-grid-flow opacity-60 pointer-events-none" />

        {/* Multilayered 3D Atmospheric Gradients for High Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/70" />
        <div className="absolute inset-0 bg-radial-at-c from-amber-500/10 via-transparent to-slate-950/80 mix-blend-screen" />
      </div>

      {/* 2. Floating 3D Geometric Accents & Ambient Orbs */}
      <div className="absolute top-10 left-1/4 w-80 h-80 rounded-full bg-amber-500/10 filter blur-3xl pointer-events-none animate-float-orb-1" />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-blue-500/10 filter blur-3xl pointer-events-none animate-float-orb-2" />

      {/* 3. Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left 7 Columns: Core Identity, Tagline, Bio & Leadership */}
          <div className="lg:col-span-7 space-y-6">
            {/* 3D Floating Pill with Sheen */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-400/30 text-amber-300 text-[11px] font-bold uppercase tracking-wider backdrop-blur-md shadow-xs animate-float-subtle sheen-glow">
              <Award className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>Smart Deals • Trusted Services • Secure Investments</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-serif font-bold text-white tracking-tight leading-[1.15]">
                Property | Investment | Files —{" "}
                <span className="text-amber-400 drop-shadow-sm">Your Future</span> Starts Here!
              </h1>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl font-normal">
                {COMPANY_INFO.bio}
              </p>
            </div>

            {/* 3D Floating Leadership Glass Card */}
            <InteractiveTiltCard maxTilt={3}>
              <div className="glass-3d-dark rounded-2xl p-4 sm:p-5 border border-white/10 shadow-2xl space-y-3 backdrop-blur-xl">
                <div className="flex items-center justify-between">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5" />
                    <span>Executive Leadership &amp; Co-Founders</span>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 text-[10px] font-medium border border-slate-700">
                    DHA Phase 8 Lahore
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {FOUNDERS_LEADERSHIP.map((leader) => (
                    <div
                      key={leader.name}
                      className="p-3 rounded-xl bg-slate-900/80 border border-white/5 hover:border-amber-400/40 hover:bg-slate-900 transition-all flex flex-col justify-between group"
                    >
                      <div>
                        <div className="font-serif font-bold text-white text-sm group-hover:text-amber-300 transition-colors">
                          {leader.name}
                        </div>
                        <div className="text-[11px] font-medium text-amber-300/90 mt-0.5">
                          {leader.role} • {leader.focus}
                        </div>
                      </div>
                      <a
                        href={`tel:${leader.phone.replace(/\s+/g, "")}`}
                        className="mt-2 text-xs font-semibold text-slate-200 hover:text-amber-300 flex items-center gap-1.5"
                      >
                        <Phone className="w-3 h-3 text-amber-400" />
                        <span>{leader.phone}</span>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </InteractiveTiltCard>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm shadow-md hover:shadow-amber-500/30 transition-all sheen-glow"
              >
                <Phone className="w-4 h-4" />
                <span>WhatsApp Trading Desk</span>
              </a>

              <a
                href={`tel:${COMPANY_INFO.pakistanPhoneRaw}`}
                className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-3 rounded-lg bg-slate-900/90 hover:bg-slate-800 text-white font-semibold text-xs sm:text-sm border border-slate-700 backdrop-blur-sm transition-all hover:scale-[1.02]"
              >
                <span>Call {COMPANY_INFO.pakistanPhone}</span>
              </a>

              <button
                onClick={() => setIsBrochureModalOpen(true)}
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-white/10 hover:bg-white/15 text-slate-200 border border-white/20 font-medium text-xs sm:text-sm backdrop-blur-sm transition-all hover:scale-[1.02]"
              >
                <FileDown className="w-4 h-4 text-amber-400" />
                <span>Download Dossier</span>
              </button>
            </div>

            {/* Address & Multilingual Strip */}
            <div className="pt-2 border-t border-slate-800/80 flex flex-wrap items-center gap-4 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span className="text-slate-200 font-medium">
                  {COMPANY_INFO.headOffice}
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span className="text-slate-300">
                  Languages: English • Urdu • Punjabi
                </span>
              </div>
            </div>
          </div>

          {/* Right 5 Columns: 3D Floating Interactive Walkthrough Showcase */}
          <div className="lg:col-span-5">
            <InteractiveTiltCard maxTilt={5}>
              <div className="glass-3d-dark rounded-2xl p-4 sm:p-5 border border-white/15 shadow-2xl relative space-y-4">
                {/* Showcase Card Header */}
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-lg overflow-hidden border border-amber-400/40 bg-slate-900 shrink-0 shadow-sm">
                      <img
                        src="/images/property-files-network-logo.jpg"
                        alt="Property Files Network Crest"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase font-bold tracking-wider text-amber-400">
                        Live Property &amp; Villa Tour
                      </div>
                      <div className="text-sm font-serif font-bold text-white">
                        3D Video Walkthrough
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-red-950/80 border border-red-500/40 text-[10px] font-bold text-red-400 shadow-2xs">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    <span>ON-GROUND</span>
                  </div>
                </div>

                {/* Video Walkthrough Screen */}
                <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-slate-900 border border-white/15 group">
                  <img
                    src={activeTour.previewImage}
                    alt={activeTour.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

                  {/* Tour Badge */}
                  <div className="absolute top-2.5 left-2.5">
                    <span className="px-2.5 py-1 rounded-md bg-slate-950/90 text-amber-300 text-[10px] font-bold uppercase tracking-wider border border-slate-700 backdrop-blur-md shadow-sm">
                      {activeTour.badge}
                    </span>
                  </div>

                  {/* Play Full Tour Button with Ripple Effect */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button
                      onClick={() => handleOpenTourModal(activeTour.projectRef)}
                      className="w-14 h-14 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-950 flex items-center justify-center shadow-2xl transition-all transform hover:scale-110 active:scale-95 group/btn"
                      title="Watch Verified Video Tour"
                    >
                      <Play className="w-6 h-6 fill-current ml-0.5 text-slate-950" />
                    </button>
                  </div>

                  {/* Bottom Video Title & Overlay Info */}
                  <div className="absolute bottom-2.5 left-3 right-3 flex items-end justify-between gap-2">
                    <div className="space-y-0.5">
                      <div className="text-[11px] font-semibold text-amber-400 uppercase tracking-wide">
                        {activeTour.type}
                      </div>
                      <div className="text-sm font-serif font-bold text-white leading-tight">
                        {activeTour.title}
                      </div>
                    </div>
                    <button
                      onClick={() => handleOpenTourModal(activeTour.projectRef)}
                      className="px-2.5 py-1 rounded bg-slate-900/90 text-white text-[11px] font-semibold flex items-center gap-1 border border-white/20 hover:bg-slate-800 transition-colors shrink-0"
                    >
                      <Maximize2 className="w-3 h-3 text-amber-400" />
                      <span>Open Tour</span>
                    </button>
                  </div>
                </div>

                {/* 3 Tour Selector Tabs */}
                <div className="space-y-1.5">
                  <div className="text-[10px] uppercase font-bold tracking-wider text-slate-400">
                    Select Society Walkthrough:
                  </div>
                  <div className="grid grid-cols-3 gap-1.5 text-xs">
                    {PROPERTY_TOURS.map((tour, idx) => (
                      <button
                        key={tour.id}
                        onClick={() => setActiveTourIndex(idx)}
                        className={`p-2 rounded-lg text-left transition-all ${
                          activeTourIndex === idx
                            ? "bg-amber-500 text-slate-950 font-bold shadow-xs scale-[1.02]"
                            : "bg-slate-900/80 text-slate-300 hover:bg-slate-800 border border-white/5"
                        }`}
                      >
                        <div className="truncate text-[11px]">{tour.badge}</div>
                        <div
                          className={`text-[10px] truncate ${
                            activeTourIndex === idx ? "text-slate-900" : "text-amber-400"
                          }`}
                        >
                          {tour.rate}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Direct WhatsApp Rate Inquiry */}
                <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs">
                  <div>
                    <span className="text-[10px] text-slate-400 block uppercase">
                      Inquire On-Ground Rates
                    </span>
                    <span className="font-semibold text-white truncate text-xs">
                      {activeTour.title}
                    </span>
                  </div>
                  <a
                    href={`https://wa.me/923234304259?text=${encodeURIComponent(
                      `Hello Property Files Network, I watched the ${activeTour.title} video tour on your website and would like to inquire about current file rates and availability.`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors shrink-0 flex items-center gap-1 shadow-sm"
                  >
                    <Phone className="w-3 h-3" />
                    <span>Inquire</span>
                  </a>
                </div>
              </div>
            </InteractiveTiltCard>
          </div>
        </div>
      </div>

      {/* Fullscreen Video Tour Lightbox */}
      {modalProject && (
        <MediaGalleryModal
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setModalProject(null);
          }}
          project={modalProject}
          initialTab="video"
        />
      )}
    </section>
  );
}
