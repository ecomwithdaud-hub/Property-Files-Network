"use client";

import React, { useState } from "react";
import {
  MapPin,
  ShieldCheck,
  Phone,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { PAKISTAN_PORTFOLIO, PortfolioProject, COMPANY_INFO } from "@/lib/data";
import { useLeads } from "@/context/LeadContext";
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
      className="py-10 sm:py-14 bg-slate-50 border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 border-b border-slate-200 pb-5">
          <div className="space-y-1.5 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-amber-50 border border-amber-200 text-amber-800 text-[11px] font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-700" />
              <span>Past Experience &amp; Verified Societies</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 leading-tight">
              Featured Societies &amp;{" "}
              <span className="text-amber-700">Property Files Portfolio</span>
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              Authentic on-ground records across Mangla Garrison Housing (MGH) waterfront files and prime DHA Lahore Phases 6, 8, 9 &amp; 10.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {filterCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedFilter(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all whitespace-nowrap ${
                  selectedFilter === cat
                    ? "bg-slate-900 text-white border-slate-900 shadow-xs"
                    : "bg-white text-slate-700 border-slate-200 hover:border-slate-300"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              id={project.id}
              className="rounded-xl bg-white border border-slate-200 hover:border-amber-400 hover:shadow-md transition-all flex flex-col justify-between overflow-hidden group"
            >
              <div>
                {/* Media Carousel */}
                <div className="relative">
                  <MediaCarousel
                    images={project.images}
                    title={project.title}
                    videoUrl={project.videoUrl}
                    onOpenModal={(tab) => handleOpenMedia(project, tab)}
                  />

                  {/* Badge */}
                  <div className="absolute top-2.5 right-2.5 z-10">
                    <span className="px-2.5 py-0.5 rounded bg-slate-900/90 text-amber-400 text-[10px] font-bold border border-slate-700 backdrop-blur-xs">
                      {project.badgeText}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-4 sm:p-5 space-y-4">
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-amber-700 uppercase tracking-wider text-[11px]">
                        {project.type}
                      </span>
                      <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200 text-[10px] font-semibold">
                        {project.status}
                      </span>
                    </div>

                    <h3 className="text-xl font-serif font-bold text-slate-900 group-hover:text-amber-700 transition-colors">
                      {project.title}
                    </h3>

                    <div className="flex items-center gap-1 text-xs text-slate-500">
                      <MapPin className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                      <span className="truncate">{project.location}</span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key Stats Bar */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 pt-1">
                    {project.keyStats.map((stat, sIdx) => (
                      <div
                        key={sIdx}
                        className="p-2 rounded bg-slate-50 border border-slate-200 text-center"
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

                  {/* Price Banner */}
                  <div className="p-3 rounded-lg bg-slate-900 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1 text-xs">
                    <div>
                      <span className="text-[10px] uppercase text-slate-400 block">
                        Estimated Rates / File Range
                      </span>
                      <span className="text-sm font-bold text-amber-400">
                        {project.priceRange}
                      </span>
                    </div>
                    <span className="text-[11px] text-slate-300">
                      {project.fileSpecialty}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-4 sm:p-5 pt-0 border-t border-slate-100 flex items-center justify-between gap-3 mt-2">
                <a
                  href={`https://wa.me/923234304259?text=${encodeURIComponent(
                    `Hello Property Files Network, I would like to inquire about ${project.title} (${project.location}).`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>WhatsApp Inquiry</span>
                </a>

                <button
                  onClick={() =>
                    handleInquireProject(project.title, project.location)
                  }
                  className="inline-flex items-center justify-center gap-1 py-2.5 px-4 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold border border-slate-300 transition-colors"
                >
                  <span>Quick Form</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-600" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Modal for Photos and Video Walkthroughs */}
      {modalProject && (
        <MediaGalleryModal
          isOpen={!!modalProject}
          onClose={() => setModalProject(null)}
          project={modalProject}
          initialTab={modalTab}
        />
      )}
    </section>
  );
}
