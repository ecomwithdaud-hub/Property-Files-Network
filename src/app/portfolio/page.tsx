"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BrochureModal from "@/components/BrochureModal";
import ScrollReveal from "@/components/ScrollReveal";
import MediaCarousel from "@/components/MediaCarousel";
import MediaGalleryModal from "@/components/MediaGalleryModal";
import { PAKISTAN_PORTFOLIO, PortfolioProject, COMPANY_INFO } from "@/lib/data";
import { useLeads } from "@/context/LeadContext";
import {
  Building2,
  MapPin,
  CheckCircle2,
  FileDown,
  ArrowRight,
  ShieldCheck,
  Phone,
  Film,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

export default function PortfolioPage() {
  const { setPreselectedProjectForInquiry, setIsBrochureModalOpen } = useLeads();
  const [selectedFilter, setSelectedFilter] = useState<string>("All");
  const [modalProject, setModalProject] = useState<PortfolioProject | null>(null);
  const [modalTab, setModalTab] = useState<"gallery" | "video">("gallery");

  const filterCategories = [
    "All",
    "MGH Waterfront Files",
    "DHA Prime Possession",
    "DHA Commercial Broadway",
    "DHA Mega Phase Files",
    "DHA Allocation Files",
  ];

  const filteredProjects =
    selectedFilter === "All"
      ? PAKISTAN_PORTFOLIO
      : PAKISTAN_PORTFOLIO.filter((p) => p.type === selectedFilter);

  const handleInquireProject = (title: string, location: string) => {
    setPreselectedProjectForInquiry(`${title} (${location})`);
    window.location.href = "/contact";
  };

  const handleOpenMedia = (
    project: PortfolioProject,
    tab: "gallery" | "video" = "gallery"
  ) => {
    setModalProject(project);
    setModalTab(tab);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 overflow-x-hidden">
      <Navbar />

      <main className="flex-1 w-full overflow-x-hidden">
        {/* Page Hero Header */}
        <section className="bg-gradient-to-b from-slate-50 via-white to-slate-50 py-10 sm:py-14 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal direction="up">
              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
                <div className="max-w-3xl space-y-4">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-amber-50 border border-amber-200/80 text-amber-900 text-xs font-semibold uppercase tracking-widest">
                    <Building2 className="w-3.5 h-3.5 text-amber-700" />
                    <span>Verified Project Portfolio &amp; Property Files</span>
                  </div>
                  <h1 className="text-4xl sm:text-5xl font-serif font-bold text-slate-900 leading-tight">
                    Societies, Property Files &amp;{" "}
                    <span className="text-amber-700">Investment Portfolios</span>
                  </h1>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium">
                    {COMPANY_INFO.tagline}
                  </p>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed pt-0.5">
                    Explore verified MGH 1 Kanal &amp; 10 Marla affidavit files, DHA Lahore Phases 6, 7, 8 Broadway, 9 Prism &amp; 10 allocation files with authentic photography and video overviews.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3 shrink-0">
                  <button
                    onClick={() => setIsBrochureModalOpen(true)}
                    className="inline-flex items-center gap-2 px-5 py-3.5 rounded-lg bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs shadow-sm transition-all whitespace-nowrap"
                  >
                    <FileDown className="w-4 h-4" />
                    <span>Download Portfolio Dossier (PDF)</span>
                  </button>
                  <a
                    href={COMPANY_INFO.whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-sm transition-all whitespace-nowrap"
                  >
                    <Phone className="w-4 h-4 text-amber-400" />
                    <span>WhatsApp Trading Desk</span>
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Filter Bar & Projects Catalog */}
        <section className="py-16 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            {/* Filter Pills */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-5">
              <div className="flex flex-wrap gap-2">
                {filterCategories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedFilter(cat)}
                    className={`px-4 py-2 rounded-lg text-xs font-semibold border transition-all whitespace-nowrap ${
                      selectedFilter === cat
                        ? "bg-slate-900 text-white border-slate-900 shadow-sm"
                        : "bg-white text-slate-700 border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <div className="text-xs text-slate-500 font-medium">
                Showing <strong className="text-slate-900">{filteredProjects.length}</strong> verified society developments
              </div>
            </div>

            {/* Projects Grid with Media Carousel */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredProjects.map((project, idx) => (
                <ScrollReveal key={project.id} direction="up" delayMs={idx * 80}>
                  <div
                    id={project.id}
                    className="h-full rounded-2xl bg-white border border-slate-200 hover:border-amber-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group"
                  >
                    <div>
                      {/* Media Carousel Header */}
                      <div className="relative">
                        <MediaCarousel
                          images={project.images}
                          title={project.title}
                          videoUrl={project.videoUrl}
                          onOpenModal={(tab) => handleOpenMedia(project, tab)}
                        />
                        <div className="absolute top-3 right-3 z-10">
                          <span className="px-3 py-1 rounded-md bg-slate-900/90 text-amber-400 text-[11px] font-bold border border-slate-700 backdrop-blur-sm shadow-md">
                            {project.badgeText}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6 sm:p-7 space-y-5">
                        <div className="space-y-1.5">
                          <div className="flex items-center justify-between text-xs">
                            <span className="font-bold text-amber-700 uppercase tracking-wider">
                              {project.type}
                            </span>
                            <span className="px-2.5 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200 text-[11px] font-semibold">
                              {project.status}
                            </span>
                          </div>

                          <h3 className="text-2xl font-serif font-bold text-slate-900 group-hover:text-amber-700 transition-colors">
                            {project.title}
                          </h3>

                          <div className="flex items-center gap-1.5 text-xs text-slate-500 pt-0.5">
                            <MapPin className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                            <span>{project.location}</span>
                          </div>
                        </div>

                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          {project.description}
                        </p>

                        {/* Key Stats Bar */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
                          {project.keyStats.map((stat, sIdx) => (
                            <div
                              key={sIdx}
                              className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-center"
                            >
                              <span className="text-[10px] uppercase text-slate-500 block truncate">
                                {stat.label}
                              </span>
                              <span className="text-xs font-bold text-slate-900 block truncate mt-0.5">
                                {stat.value}
                              </span>
                            </div>
                          ))}
                        </div>

                        {/* Pricing & Units Info Strip */}
                        <div className="p-3.5 rounded-xl bg-slate-900 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs">
                          <div>
                            <span className="text-[10px] uppercase text-slate-400 block">
                              Indicative File / Plot Pricing
                            </span>
                            <span className="text-base font-bold text-amber-400">
                              {project.priceRange}
                            </span>
                          </div>
                          <div className="text-left sm:text-right">
                            <span className="text-[10px] uppercase text-slate-400 block">
                              Units &amp; Cuttings
                            </span>
                            <span className="text-xs font-semibold text-slate-200">
                              {project.unitsInfo}
                            </span>
                          </div>
                        </div>

                        {/* Key Amenities Tags */}
                        <div className="space-y-2">
                          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-700">
                            Key Infrastructure &amp; Amenities
                          </div>
                          <div className="flex flex-wrap gap-1.5">
                            {project.amenities.map((amenity, aIdx) => (
                              <span
                                key={aIdx}
                                className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-[11px] font-medium border border-slate-200 flex items-center gap-1"
                              >
                                <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                                <span>{amenity}</span>
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Action Bar */}
                    <div className="p-6 sm:p-7 pt-0 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-3">
                      <button
                        onClick={() => handleInquireProject(project.title, project.location)}
                        className="w-full sm:flex-1 py-3 px-4 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all shadow-sm flex items-center justify-center gap-2"
                      >
                        <span>Inquire About Current Rates</span>
                        <ArrowUpRight className="w-4 h-4 text-amber-400" />
                      </button>

                      <div className="flex items-center gap-2 w-full sm:w-auto">
                        {project.videoUrl && (
                          <button
                            onClick={() => handleOpenMedia(project, "video")}
                            className="flex-1 sm:flex-none py-3 px-3.5 rounded-lg bg-amber-50 hover:bg-amber-100 border border-amber-200 text-amber-900 text-xs font-bold flex items-center justify-center gap-1.5 transition-all"
                            title="Watch Official Video Walkthrough"
                          >
                            <Film className="w-4 h-4 text-amber-700" />
                            <span>Video Tour</span>
                          </button>
                        )}

                        <a
                          href={`https://wa.me/923234304259?text=${encodeURIComponent(
                            `Hello Property Files Network, I would like to buy/sell files in ${project.title}.`
                          )}`}
                          target="_blank"
                          rel="noreferrer"
                          className="p-3 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white transition-all shadow-sm"
                          title="Direct WhatsApp"
                        >
                          <Phone className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <BrochureModal />

      {/* Media Modal */}
      <MediaGalleryModal
        project={modalProject}
        isOpen={Boolean(modalProject)}
        onClose={() => setModalProject(null)}
        initialTab={modalTab}
      />
    </div>
  );
}
