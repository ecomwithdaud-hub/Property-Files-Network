"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, Clock, Calendar, User, TrendingUp } from "lucide-react";
import { BLOG_POSTS } from "@/lib/data";
import ScrollReveal from "./ScrollReveal";

export default function BlogPreview() {
  const featuredPosts = BLOG_POSTS.slice(0, 3);

  return (
    <section className="py-20 lg:py-24 bg-white border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 space-y-12">
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-slate-200 pb-8">
            <div className="space-y-3 max-w-3xl">
              <div className="text-xs font-bold uppercase tracking-widest text-amber-700 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Market Intelligence &amp; Investor Education</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-serif font-bold text-slate-900 leading-tight">
                Case Studies &amp; Research on{" "}
                <span className="text-amber-700">Pakistan Real Estate</span>
              </h2>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                Empirical market analyses, yield comparisons, land banking strategies, and legal due diligence guides authored by Ravi Estate senior advisors.
              </p>
            </div>

            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs shadow-sm transition-all whitespace-nowrap self-start lg:self-end"
            >
              <span>View All 6 Case Studies</span>
              <ArrowRight className="w-4 h-4 text-amber-400" />
            </Link>
          </div>
        </ScrollReveal>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredPosts.map((post, idx) => (
            <ScrollReveal key={post.slug} direction="up" delayMs={idx * 100}>
              <article className="h-full rounded-2xl bg-slate-50 border border-slate-200 hover:border-amber-400/80 hover:shadow-lg transition-all duration-300 flex flex-col justify-between overflow-hidden group">
                <div className="p-6 sm:p-7 space-y-4">
                  {/* Category & Read Time */}
                  <div className="flex items-center justify-between gap-2 text-xs">
                    <span className="px-2.5 py-1 rounded bg-amber-50 text-amber-900 font-semibold border border-amber-200/80 text-[11px]">
                      {post.category}
                    </span>
                    <span className="text-slate-500 flex items-center gap-1 text-[11px]">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>

                  {/* Title & Excerpt */}
                  <div className="space-y-2">
                    <h3 className="text-lg sm:text-xl font-serif font-bold text-slate-900 group-hover:text-amber-800 transition-colors leading-snug">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>

                  {/* Key Case Study Metric Pill */}
                  {post.metrics && post.metrics.length > 0 && (
                    <div className="p-3 rounded-xl bg-white border border-slate-200 text-xs space-y-0.5">
                      <div className="text-[10px] uppercase font-semibold text-slate-500 flex items-center gap-1">
                        <TrendingUp className="w-3 h-3 text-emerald-600" />
                        <span>Key Finding</span>
                      </div>
                      <div className="font-bold text-slate-900">
                        {post.metrics[0].label}:{" "}
                        <span className="text-amber-700">{post.metrics[0].value}</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Author & Footer Link */}
                <div className="px-6 pb-6 pt-2 border-t border-slate-200/80 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center font-bold text-[11px]">
                      {post.author.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">{post.author.name}</div>
                      <div className="text-[10px] text-slate-500">{post.publishDate}</div>
                    </div>
                  </div>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 text-slate-900 font-semibold hover:text-amber-700 group-hover:translate-x-0.5 transition-all"
                  >
                    <span>Read</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
