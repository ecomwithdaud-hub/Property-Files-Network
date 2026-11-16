"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BrochureModal from "@/components/BrochureModal";
import ScrollReveal from "@/components/ScrollReveal";
import { PAKISTAN_PORTFOLIO, PortfolioProject, COMPANY_INFO } from "@/lib/data";
import { useLeads } from "@/context/LeadContext";
import {
  Building2,
  MapPin,
  CheckCircle2,
  FileDown,
  ArrowRight,
  ShieldCheck,
  Layers,
  Phone,
} from "lucide-react";

export default function PortfolioPage() {
  const { setPreselectedProjectForInquiry, setIsBrochureModalOpen } = useLeads();
  const [selectedFilter, setSelectedFilter] = useState<string>("All");
  const [activeModalProject, setActiveModalProject] = useState<PortfolioProject | null>(null);

  const filterCategories = [
    "All",
    "Completed & Delivered",
    "Ready for Possession",
    "Ongoing Development",
  ];

  const filteredProjects =
    selectedFilter === "All"
      ? PAKISTAN_PORTFOLIO
      : PAKISTAN_PORTFOLIO.filter((p) => p.status === selectedFilter);

  const handleInquireProject = (title: string, location: string) => {
    setPreselectedProjectForInquiry(`${title} (${location})`);
    setActiveModalProject(null);
    window.location.href = "/contact";
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800">
      <Navbar />

      <main className="flex-1">
        {/* Page Hero Header */}
        <section className="bg-gradient-to-b from-slate-50 via-white to-slate-50 py-16 lg:py-24 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <ScrollReveal direction="up">
              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
                <div className="max-w-3xl space-y-4">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-amber-50 border border-amber-200/80 text-amber-900 text-xs font-semibold uppercase tracking-widest">
                    <Building2 className="w-3.5 h-3.5 text-amber-700" />
                    <span>Official Pakistan Portfolio • Value Group Alliance</span>
                  </div>
                  <h1 className="text-4xl sm:text-5xl font-serif font-bold text-slate-900 leading-tight">
                    Landmark Developments in{" "}
                    <span className="text-amber-700">Lahore, Pakistan</span>
                  </h1>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                    Explore our curated portfolio of completed and ongoing residential towers, commercial corporate office buildings, smart villas, and organic country farmhouses.
                  </p>
                </div>

                <button
                  onClick={() => setIsBrochureModalOpen(true)}
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-lg bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs shadow-sm transition-all whitespace-nowrap self-start lg:self-end"
                >
                  <FileDown className="w-4 h-4" />
                  <span>Download Portfolio PDF</span>
                </button>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Filter Bar & Projects Catalog */}
        <section className="py-16 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 space-y-10">
            {/* Filter Pills */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-5">
              <div className="flex flex-wrap gap-2">
                {filterCategories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedFilter(cat)}
                    className={`px-4 py-2 rounded-lg text-xs font-semibold border transition-all ${
                      selectedFilter === cat
                        ? "bg-slate-900 text-white border-slate-900 shadow-sm"
                        : "bg-white text-slate-700 border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
              <div className="text-xs text-slate-500">
                Showing <strong>{filteredProjects.length}</strong> developments
              </div>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <ScrollReveal
                  key={project.id}
                  direction="up"
                  delayMs={(index % 3) * 100}
                >
                  <div
                    id={project.id}
                    className="h-full rounded-2xl bg-white border border-slate-200 hover:border-amber-400 hover:shadow-lg transition-all duration-300 flex flex-col justify-between overflow-hidden group"
                  >
                    <div>
                      {/* Card Header */}
                      <div className="p-6 bg-slate-900 text-white border-b border-slate-200 space-y-3">
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-[11px] font-semibold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                            <Building2 className="w-3.5 h-3.5" />
                            <span>{project.type}</span>
                          </span>
                          <span
                            className={`px-2.5 py-0.5 rounded text-[11px] font-semibold border ${
                              project.status === "Completed & Delivered"
                                ? "bg-emerald-950/80 text-emerald-300 border-emerald-700/50"
                                : project.status === "Ready for Possession"
                                ? "bg-sky-950/80 text-sky-300 border-sky-700/50"
                                : "bg-amber-950/80 text-amber-300 border-amber-700/50"
                            }`}
                          >
                            {project.status}
                          </span>
                        </div>

                        <div>
                          <h3 className="text-xl font-serif font-bold text-white group-hover:text-amber-300 transition-colors">
                            {project.title}
                          </h3>
                          <div className="flex items-center gap-1.5 text-xs text-slate-300 mt-1.5">
                            <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                            <span>{project.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Card Content */}
                      <div className="p-6 space-y-5">
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {project.description}
                        </p>

                        <div className="grid grid-cols-2 gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 text-xs">
                          <div>
                            <span className="text-[10px] uppercase tracking-wider text-slate-500 block">
                              Configuration
                            </span>
                            <span className="font-bold text-slate-900 mt-0.5 block truncate">
                              {project.unitsInfo}
                            </span>
                          </div>
                          <div>
                            <span className="text-[10px] uppercase tracking-wider text-slate-500 block">
                              Indicative Pricing
                            </span>
                            <span className="font-bold text-amber-700 mt-0.5 block">
                              {project.startingPrice}
                            </span>
                          </div>
                        </div>

                        {/* Amenities Pills */}
                        <div className="space-y-1.5">
                          <span className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold block">
                            Key Amenities
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {project.amenities.slice(0, 3).map((am, i) => (
                              <span
                                key={i}
                                className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[11px] border border-slate-200"
                              >
                                {am}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Highlights */}
                        <ul className="space-y-2 text-xs text-slate-700 pt-1">
                          {project.highlights.slice(0, 3).map((hl, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                              <span>{hl}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="px-6 pb-6 pt-2 flex items-center gap-3 border-t border-slate-100">
                      <button
                        onClick={() => handleInquireProject(project.title, project.location)}
                        className="flex-1 py-2.5 px-4 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs flex items-center justify-center gap-1.5 transition-all"
                      >
                        <span>Inquire About Availability</span>
                        <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
                      </button>
                      <button
                        onClick={() => setActiveModalProject(project)}
                        className="py-2.5 px-4 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 text-xs font-semibold transition-all"
                      >
                        Specs
                      </button>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Project Detail Modal */}
        {activeModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 backdrop-blur-sm p-4 overflow-y-auto">
            <div className="max-w-xl w-full rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 shadow-2xl space-y-5 my-auto max-h-[90vh] overflow-y-auto">
              <div className="flex items-start justify-between gap-4 border-b border-slate-200 pb-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-amber-700">
                    {activeModalProject.partnership}
                  </span>
                  <h3 className="text-2xl font-serif font-bold text-slate-900 mt-1">
                    {activeModalProject.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-slate-600 mt-1">
                    <MapPin className="w-3.5 h-3.5 text-amber-600" />
                    <span>{activeModalProject.location}</span>
                  </div>
                </div>
                <button
                  onClick={() => setActiveModalProject(null)}
                  className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 text-xs font-bold"
                >
                  Close ✕
                </button>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                {activeModalProject.description}
              </p>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-500">Project Status:</span>
                  <span className="text-slate-900 font-bold">
                    {activeModalProject.status}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Architectural Profile:</span>
                  <span className="text-slate-900 font-medium">
                    {activeModalProject.architecturalStyle}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Investment Highlight:</span>
                  <span className="text-amber-800 font-semibold">
                    {activeModalProject.roiHighlight}
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-amber-600" />
                  <span>Key Project Amenities</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {activeModalProject.amenities.map((am, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-md bg-slate-100 text-slate-800 text-xs border border-slate-200 font-medium"
                    >
                      {am}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-2 pt-1">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
                  <span>Development Highlights</span>
                </div>
                {activeModalProject.highlights.map((h, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2 text-xs text-slate-700"
                  >
                    <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex gap-3">
                <button
                  onClick={() =>
                    handleInquireProject(
                      activeModalProject.title,
                      activeModalProject.location
                    )
                  }
                  className="flex-1 py-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs"
                >
                  Request Floor Plans &amp; Availability
                </button>
                <button
                  onClick={() => setActiveModalProject(null)}
                  className="px-5 py-3 rounded-lg bg-slate-100 text-slate-700 text-xs font-semibold"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Advisory Booking Banner */}
        <section className="py-16 bg-white border-b border-slate-200">
          <div className="max-w-5xl mx-auto px-6 lg:px-10 text-center space-y-6">
            <ScrollReveal direction="up">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">
                Interested in Private Site Tours or Feasibility Briefs?
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
                Our property advisors arrange on-ground site visits in DHA Phase 5, Gulberg III, and Barki Road with verified documentation.
              </p>
              <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="px-6 py-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold"
                >
                  Book Private Site Visit
                </Link>
                <a
                  href={`tel:${COMPANY_INFO.pakistanPhoneRaw}`}
                  className="px-6 py-3 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 text-xs font-semibold"
                >
                  Call {COMPANY_INFO.pakistanPhone}
                </a>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <Footer />
      <BrochureModal />
    </div>
  );
}
