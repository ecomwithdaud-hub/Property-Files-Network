"use client";

import React, { useState } from "react";
import {
  X,
  Play,
  Image as ImageIcon,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  CheckCircle2,
  MapPin,
  Building2,
} from "lucide-react";
import { PortfolioProject } from "@/lib/data";

interface MediaGalleryModalProps {
  project: PortfolioProject | null;
  isOpen: boolean;
  onClose: () => void;
  initialTab?: "gallery" | "video";
}

export default function MediaGalleryModal({
  project,
  isOpen,
  onClose,
  initialTab = "gallery",
}: MediaGalleryModalProps) {
  const [activeTab, setActiveTab] = useState<"gallery" | "video">(initialTab);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!isOpen || !project) return null;

  const images = project.images && project.images.length > 0 ? project.images : [];
  const hasVideo = Boolean(project.videoUrl);

  const handleNext = () => {
    setActiveImageIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setActiveImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header Ribbon */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/70">
          <div className="space-y-0.5">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold uppercase tracking-widest text-amber-400">
                {project.type}
              </span>
              <span className="text-slate-600">•</span>
              <span className="text-xs text-slate-300 flex items-center gap-1">
                <MapPin className="w-3 h-3 text-amber-500" />
                {project.location}
              </span>
            </div>
            <h3 className="text-lg sm:text-xl font-serif font-bold text-white">
              {project.title}
            </h3>
          </div>

          <div className="flex items-center gap-3">
            {/* Gallery vs Video Switcher Tabs */}
            <div className="inline-flex items-center p-1 rounded-lg bg-slate-800 border border-slate-700 text-xs font-semibold">
              <button
                onClick={() => setActiveTab("gallery")}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-all ${
                  activeTab === "gallery"
                    ? "bg-amber-500 text-slate-950 shadow-sm"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                <ImageIcon className="w-3.5 h-3.5" />
                <span>Photos ({images.length})</span>
              </button>

              {hasVideo && (
                <button
                  onClick={() => setActiveTab("video")}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-all ${
                    activeTab === "video"
                      ? "bg-amber-500 text-slate-950 shadow-sm"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Video Tour</span>
                </button>
              )}
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Media Content Area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-slate-950">
          {activeTab === "gallery" ? (
            <div className="space-y-4">
              {/* Main Image Showcase */}
              <div className="relative w-full h-[360px] sm:h-[460px] rounded-xl overflow-hidden bg-slate-900 border border-slate-800 flex items-center justify-center group">
                <img
                  src={images[activeImageIndex]}
                  alt={`${project.title} - View ${activeImageIndex + 1}`}
                  className="w-full h-full object-cover object-center transition-all duration-300"
                />

                {/* Left/Right Navigation Controls */}
                {images.length > 1 && (
                  <>
                    <button
                      onClick={handlePrev}
                      className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-950/70 hover:bg-amber-500 hover:text-slate-950 text-white border border-slate-700 backdrop-blur-sm transition-all"
                      aria-label="Previous photo"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={handleNext}
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-950/70 hover:bg-amber-500 hover:text-slate-950 text-white border border-slate-700 backdrop-blur-sm transition-all"
                      aria-label="Next photo"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}

                {/* Counter Pill */}
                <div className="absolute bottom-3 right-3 px-3 py-1 rounded-md bg-slate-950/80 text-white text-xs font-semibold border border-slate-800 backdrop-blur-sm">
                  {activeImageIndex + 1} / {images.length}
                </div>
              </div>

              {/* Thumbnails Row */}
              <div className="grid grid-cols-4 gap-3">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      idx === activeImageIndex
                        ? "border-amber-400 ring-2 ring-amber-400/40 opacity-100"
                        : "border-slate-800 opacity-60 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Thumbnail ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          ) : (
            /* Video Tab */
            <div className="space-y-4">
              <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black border border-slate-800 shadow-lg">
                {project.videoUrl ? (
                  <iframe
                    src={`${project.videoUrl}?autoplay=1&rel=0`}
                    title={project.videoTitle || `${project.title} Video Tour`}
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center text-slate-400">
                    <Play className="w-12 h-12 mb-2 text-slate-600" />
                    <p className="text-sm">Video tour is currently being updated.</p>
                  </div>
                )}
              </div>
              {project.videoTitle && (
                <div className="flex items-center justify-between text-xs text-slate-400 px-1">
                  <span className="font-semibold text-slate-200">
                    {project.videoTitle}
                  </span>
                  <span>Official Verified Video Tour</span>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer Meta & Inquiry CTA */}
        <div className="px-6 py-4 bg-slate-900 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs text-slate-400">
            <span className="text-slate-300 font-semibold">{project.fileSpecialty}</span>
            {" • "}
            <span className="text-amber-400 font-bold">{project.priceRange}</span>
          </div>

          <a
            href={`https://wa.me/923234304259?text=${encodeURIComponent(
              `Hello Property Files Network, I am inquiring about verified files/plots in ${project.title}.`
            )}`}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-all flex items-center gap-2"
          >
            <span>Inquire on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
