"use client";

import React from "react";
import {
  ExternalLink,
  Play,
  TrendingUp,
  Video,
  Sparkles,
} from "lucide-react";
import { COMPANY_INFO } from "@/lib/data";
import { TikTokIcon } from "./SocialLinks";
import { Instagram, Facebook, Linkedin } from "lucide-react";

interface SocialPost {
  id: string;
  platform: "tiktok" | "instagram" | "facebook" | "linkedin";
  title: string;
  caption: string;
  thumbnail: string;
  url: string;
  date: string;
  tag: string;
  metrics: { views?: string; likes?: string; comments?: string };
}

const SOCIAL_POSTS: SocialPost[] = [
  {
    id: "sp-1",
    platform: "tiktok",
    title: "MGH Mangla 1 Kanal Waterfront Files — Market Rates & Biometric Transfer",
    caption:
      "On-ground briefing at Mangla Garrison Housing. Current trading rates for 1 Kanal and 10 Marla affidavit files, water sports access, and transparent transfer protocols.",
    thumbnail:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    url: COMPANY_INFO.socialLinks.tiktok.url,
    date: "Latest Video",
    tag: "MGH Waterfront",
    metrics: { views: "14.2K", likes: "1.2K" },
  },
  {
    id: "sp-2",
    platform: "instagram",
    title: "DHA Lahore Phase 9 Prism — Sector J & K Ground Reality & Roads",
    caption:
      "Driving through the 150ft main boulevard of DHA Phase 9 Prism. Checking ongoing possession progress, civic centers, and 1 Kanal file movement.",
    thumbnail:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80",
    url: COMPANY_INFO.socialLinks.instagram.url,
    date: "Reel Update",
    tag: "DHA Phase 9 Prism",
    metrics: { views: "18.6K", likes: "2.1K" },
  },
  {
    id: "sp-3",
    platform: "facebook",
    title: "DHA Phase 8 Broadway — Commercial 4 & 8 Marla Plazas Rental Yields",
    caption:
      "Why Broadway Commercial on the 200ft boulevard offers up to 12% annual rental return. Complete breakdown for commercial investors.",
    thumbnail:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    url: COMPANY_INFO.socialLinks.facebook.url,
    date: "Live Analysis",
    tag: "Commercial Broadway",
    metrics: { views: "9.8K", likes: "840" },
  },
  {
    id: "sp-4",
    platform: "linkedin",
    title: "DHA Phase 10 Allocation Files — 300ft Expressway & Land Banking",
    caption:
      "Institutional file investment breakdown: Assessing allocation files vs affidavit files for long-term capital multiplication ahead of balloting.",
    thumbnail:
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=800&q=80",
    url: COMPANY_INFO.socialLinks.linkedin.url,
    date: "Advisory Paper",
    tag: "DHA Phase 10",
    metrics: { views: "6.4K", likes: "510" },
  },
];

export default function SocialMediaFeed() {
  return (
    <section id="social-channels" className="py-10 sm:py-14 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 pb-5">
          <div className="space-y-1.5 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-[11px] font-bold uppercase tracking-wider shadow-2xs">
              <Video className="w-3.5 h-3.5 text-amber-700" />
              <span>3D Social Hub • Live Reels &amp; Feeds</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 leading-tight">
              Live Updates from Our{" "}
              <span className="text-amber-700">Official Social Channels</span>
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              Watch on-ground video reels, rate updates, and society reviews directly from our official channels.
            </p>
          </div>

          {/* Social Quick-Follow Badges */}
          <div className="flex flex-wrap items-center gap-2">
            <a
              href={COMPANY_INFO.socialLinks.tiktok.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold shadow-xs hover:scale-105 transition-all"
            >
              <TikTokIcon className="w-3.5 h-3.5 text-amber-400" />
              <span>TikTok</span>
            </a>
            <a
              href={COMPANY_INFO.socialLinks.instagram.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-pink-600 hover:bg-pink-700 text-white text-xs font-semibold shadow-xs hover:scale-105 transition-all"
            >
              <Instagram className="w-3.5 h-3.5" />
              <span>Instagram</span>
            </a>
            <a
              href={COMPANY_INFO.socialLinks.facebook.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-xs hover:scale-105 transition-all"
            >
              <Facebook className="w-3.5 h-3.5" />
              <span>Facebook</span>
            </a>
            <a
              href={COMPANY_INFO.socialLinks.linkedin.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-700 hover:bg-sky-800 text-white text-xs font-semibold shadow-xs hover:scale-105 transition-all"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        {/* 4 Social Content Cards in 3D Perspective Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 perspective-1000">
          {SOCIAL_POSTS.map((post) => (
            <a
              key={post.id}
              href={post.url}
              target="_blank"
              rel="noreferrer"
              className="card-3d preserve-3d group rounded-2xl overflow-hidden bg-slate-50 border border-slate-200/90 hover:border-amber-400 hover:shadow-xl transition-all flex flex-col justify-between"
            >
              {/* Media Thumbnail */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                <img
                  src={post.thumbnail}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                {/* Platform Badge */}
                <div className="absolute top-2.5 left-2.5">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-slate-950/90 text-white border border-slate-700 backdrop-blur-md flex items-center gap-1 shadow-sm">
                    {post.platform === "tiktok" && <TikTokIcon className="w-3 h-3 text-amber-400" />}
                    {post.platform === "instagram" && <Instagram className="w-3 h-3 text-pink-400" />}
                    {post.platform === "facebook" && <Facebook className="w-3 h-3 text-blue-400" />}
                    {post.platform === "linkedin" && <Linkedin className="w-3 h-3 text-sky-400" />}
                    <span>{post.platform}</span>
                  </span>
                </div>

                {/* Play Button Icon with 3D Float */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-11 h-11 rounded-full bg-slate-950/80 border border-white/30 text-white flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all duration-300">
                    <Play className="w-4 h-4 fill-current ml-0.5" />
                  </div>
                </div>

                <div className="absolute bottom-2 left-2.5 right-2.5 flex items-center justify-between text-[11px] text-slate-300">
                  <span className="text-amber-300 font-semibold">{post.tag}</span>
                  <span>{post.metrics.views} views</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-4 space-y-2 flex-1 flex flex-col justify-between">
                <div className="space-y-1">
                  <h3 className="text-sm font-serif font-bold text-slate-900 group-hover:text-amber-800 transition-colors line-clamp-2 leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {post.caption}
                  </p>
                </div>

                <div className="pt-2.5 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-500">
                  <span>{post.date}</span>
                  <span className="text-amber-700 font-semibold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                    <span>Watch</span>
                    <ExternalLink className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
