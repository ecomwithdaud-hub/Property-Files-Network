"use client";

import React, { useState } from "react";
import {
  MapPin,
  CheckCircle2,
  ArrowUpRight,
  Building2,
  ShieldCheck,
  Film,
  Image as ImageIcon,
  Phone,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import { PAKISTAN_PORTFOLIO, PortfolioProject, COMPANY_INFO } from "@/lib/data";
import { useLeads } from "@/context/LeadContext";
import ScrollReveal from "./ScrollReveal";
import MediaCarousel from "./MediaCarousel";
import MediaGalleryModal from "./MediaGalleryModal";

export default function PakistanPortfolio() {
  const { setPreselectedProjectForInquiry } = useLeads();
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

  const handleInquireProject = (projectTitle: string, location: string) => {
    setPreselectedProjectForInquiry(`${projectTitle} (${location})`);
    const el = document.getElementById("lead-inquiry");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleOpenMedia = (
    project: PortfolioProject,
    tab: "gallery" | "video" = "gallery"
  ) => {
    setModalProject(project);
    setModalTab(tab);
  };

  return (
    <section
      id="portfolio"
      className="py-20 lg:py-24 bg-slate-50 border-b border-slate-200 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 space-y-12">
        {/* Corporate Section Header */}
        <ScrollReveal direction="up">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-slate-200 pb-8">
            <div className="space-y-3 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-widest">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-700" />
                <span>Verified Society Portfolio • Direct Trading Desk</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-serif font-bold text-slate-900 leading-tight">
                Featured Societies &amp;{" "}
                <span className="text-amber-700">Property Files Portfolio</span>
              </h2>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                Explore our vetted portfolio across Mangla Garrison Housing (MGH) waterfront files and premier DHA Lahore sectors (Phases 6, 8 Broadway, 9 Prism &amp; 10), complete with real-world photography, location metrics, and official video walkthroughs.
              </p>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2">
              {filterCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedFilter(cat)}
                  className={`px-3.5 py-2 rounded-lg text-xs font-semibold border transition-all whitespace-nowrap ${
                    selectedFilter === cat
                      ? "bg-slate-900 text-white border-slate-900 shadow-sm"
                      : "bg-white text-slate-700 border-slate-200 hover:border-slate-300"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Portfolio Cards Grid with Real Media & Video Overviews */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <ScrollReveal
              key={project.id}
              direction="up"
              delayMs={(index % 2) * 120}
            >
              <div
                id={project.id}
                className="h-full rounded-2xl bg-white border border-slate-200 hover:border-amber-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group"
              >
                <div>
                  {/* Rich Media Carousel with Interactive Video & Photos */}
                  <div className="relative">
                    <MediaCarousel
                      images={project.images}
                      title={project.title}
                      videoUrl={project.videoUrl}
                      onOpenModal={(tab) => handleOpenMedia(project, tab)}
                    />

                    {/* Quick Badge */}
                    <div className="absolute top-3 right-3 z-10">
                      <span className="px-3 py-1 rounded-md bg-slate-900/90 text-amber-400 text-[11px] font-bold border border-slate-700 backdrop-blur-sm shadow-md">
                        {project.badgeText}
                      </span>
                    </div>
                  </div>

                  {/* Card Body */}
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
                        Signature Infrastructure
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

                {/* Card Action Footer */}
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
                        `Hello Property Files Network, I am interested in buying/selling files in ${project.title}. Please share current rates.`
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                      className="p-3 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white transition-all shadow-sm"
                      title="Direct WhatsApp Consultation"
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

      {/* Media Gallery / Video Walkthrough Modal */}
      <MediaGalleryModal
        project={modalProject}
        isOpen={Boolean(modalProject)}
        onClose={() => setModalProject(null)}
        initialTab={modalTab}
      />
    </section>
  );
}
