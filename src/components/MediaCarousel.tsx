"use client";

import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Image as ImageIcon,
  Film,
} from "lucide-react";

interface MediaCarouselProps {
  images: string[];
  title: string;
  videoUrl?: string;
  onOpenModal?: (tab?: "gallery" | "video") => void;
  className?: string;
}

export default function MediaCarousel({
  images,
  title,
  videoUrl,
  onOpenModal,
  className = "",
}: MediaCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showInlineVideo, setShowInlineVideo] = useState(false);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowInlineVideo(false);
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowInlineVideo(false);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handlePlayVideo = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onOpenModal) {
      onOpenModal("video");
    } else {
      setShowInlineVideo(true);
    }
  };

  return (
    <div
      className={`relative w-full overflow-hidden rounded-xl bg-slate-900 border border-slate-200/80 group ${className}`}
    >
      {showInlineVideo && videoUrl ? (
        <div className="relative w-full aspect-[16/10] bg-black">
          <iframe
            src={`${videoUrl}?autoplay=1&rel=0`}
            title={`${title} Video Overview`}
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowInlineVideo(false);
            }}
            className="absolute top-2 right-2 px-2.5 py-1 rounded bg-slate-950/80 text-white text-xs font-semibold backdrop-blur-sm border border-slate-700 hover:bg-amber-500 hover:text-slate-950 transition-colors"
          >
            Show Photos
          </button>
        </div>
      ) : (
        <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-950">
          <img
            src={images[currentIndex] || "/images/property-files-network-logo.jpg"}
            alt={`${title} - Photo ${currentIndex + 1}`}
            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />

          {/* Top Floating Badges */}
          <div className="absolute top-3 left-3 flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-md bg-slate-950/80 backdrop-blur-sm text-white text-[11px] font-semibold border border-slate-700/80 flex items-center gap-1.5 shadow-sm">
              <ImageIcon className="w-3 h-3 text-amber-400" />
              <span>{images.length} Photos</span>
            </span>

            {videoUrl && (
              <span className="px-2.5 py-1 rounded-md bg-amber-500 text-slate-950 text-[11px] font-bold flex items-center gap-1 shadow-sm">
                <Film className="w-3 h-3" />
                <span>Video Proof</span>
              </span>
            )}
          </div>

          {/* Center Play Button Overlay for Video */}
          {videoUrl && (
            <button
              onClick={handlePlayVideo}
              className="absolute inset-0 m-auto w-12 h-12 rounded-full bg-slate-950/70 hover:bg-amber-500 hover:text-slate-950 text-white border border-white/20 backdrop-blur-sm flex items-center justify-center transition-all duration-200 shadow-xl opacity-90 hover:opacity-100 hover:scale-110"
              aria-label="Play video walkthrough"
            >
              <Play className="w-5 h-5 fill-current ml-0.5" />
            </button>
          )}

          {/* Left/Right Arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={handlePrev}
                className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-slate-950/60 hover:bg-slate-900 text-white border border-slate-700/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-slate-950/60 hover:bg-slate-900 text-white border border-slate-700/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all"
                aria-label="Next image"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </>
          )}

          {/* Slide Indicator Dots */}
          {images.length > 1 && (
            <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-2 py-1 rounded-full bg-slate-950/60 backdrop-blur-sm">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentIndex(idx);
                  }}
                  className={`w-1.5 h-1.5 rounded-full transition-all ${
                    idx === currentIndex ? "bg-amber-400 w-3" : "bg-white/50"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
