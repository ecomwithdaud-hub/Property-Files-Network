"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BrochureModal from "@/components/BrochureModal";
import ScrollReveal from "@/components/ScrollReveal";
import { BLOG_POSTS, BlogPost } from "@/lib/data";
import {
  BookOpen,
  Search,
  Clock,
  ArrowRight,
  TrendingUp,
  Tag,
  ShieldCheck,
  Mail,
  CheckCircle2,
} from "lucide-react";

export default function BlogIndexPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const categories = [
    "All",
    "Market Analysis & Yields",
    "Land Banking & Luxury",
    "Overseas Advisory",
    "Due Diligence & Legal",
    "Urban Development",
    "Investor Education",
  ];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    if (selectedCategory !== "All" && post.category !== selectedCategory) {
      return false;
    }
    if (searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase();
      return (
        post.title.toLowerCase().includes(q) ||
        post.subtitle.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.tags.some((t) => t.toLowerCase().includes(q))
      );
    }
    return true;
  });

  const featuredPost = BLOG_POSTS[0];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    setNewsletterSubscribed(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800">
      <Navbar />

      <main className="flex-1">
        {/* Page Hero Header */}
        <section className="bg-gradient-to-b from-slate-50 via-white to-slate-50 py-16 lg:py-24 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <ScrollReveal direction="up">
              <div className="max-w-3xl space-y-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-amber-50 border border-amber-200/80 text-amber-900 text-xs font-semibold uppercase tracking-widest">
                  <BookOpen className="w-3.5 h-3.5 text-amber-700" />
                  <span>Market Intelligence &amp; Investor Education</span>
                </div>
                <h1 className="text-4xl sm:text-5xl font-serif font-bold text-slate-900 leading-tight">
                  Case Studies &amp; Research on{" "}
                  <span className="text-amber-700">Pakistan Real Estate</span>
                </h1>
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                  Real data, empirical yield comparisons, land banking insights, and regulatory checklists authored by Ravi Estate senior partners to educate the public and protect investor capital.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Featured Case Study Spotlight */}
        <section className="py-12 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <ScrollReveal direction="up">
              <div className="rounded-2xl bg-slate-900 text-white p-8 sm:p-10 border border-slate-800 overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8 space-y-4">
                  <div className="flex flex-wrap items-center gap-3 text-xs">
                    <span className="px-3 py-1 rounded bg-amber-500/20 text-amber-400 border border-amber-500/30 font-semibold uppercase tracking-wider text-[11px]">
                      Featured Case Study
                    </span>
                    <span className="text-slate-400 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {featuredPost.readTime}
                    </span>
                    <span className="text-slate-400">•</span>
                    <span className="text-slate-400">{featuredPost.publishDate}</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white hover:text-amber-300 transition-colors">
                    <Link href={`/blog/${featuredPost.slug}`}>
                      {featuredPost.title}
                    </Link>
                  </h2>

                  <p className="text-sm text-slate-300 leading-relaxed max-w-2xl">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex items-center gap-3 text-xs text-slate-400 pt-2">
                    <span className="font-semibold text-white">By {featuredPost.author.name}</span>
                    <span>•</span>
                    <span>{featuredPost.author.role}</span>
                  </div>
                </div>

                <div className="lg:col-span-4 bg-slate-800/80 p-6 rounded-xl border border-slate-700 space-y-4">
                  <div className="text-xs uppercase font-bold tracking-wider text-amber-400 flex items-center gap-1.5">
                    <TrendingUp className="w-4 h-4" />
                    <span>Case Study Highlights</span>
                  </div>
                  {featuredPost.metrics?.slice(0, 3).map((m, i) => (
                    <div key={i} className="border-b border-slate-700/80 pb-2.5 last:border-b-0 space-y-0.5 text-xs">
                      <div className="text-slate-400">{m.label}</div>
                      <div className="text-base font-serif font-bold text-white flex items-center justify-between">
                        <span>{m.value}</span>
                        {m.note && <span className="text-[10px] font-normal text-amber-400">{m.note}</span>}
                      </div>
                    </div>
                  ))}
                  <Link
                    href={`/blog/${featuredPost.slug}`}
                    className="w-full py-2.5 px-4 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 transition-all block text-center"
                  >
                    <span>Read Complete Analysis</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Search, Categories & Articles Grid */}
        <section className="py-16 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 space-y-10">
            {/* Search and Category Filters */}
            <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 border-b border-slate-200 pb-6">
              <div className="relative max-w-md w-full">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search articles by keyword, law, or location..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-white border border-slate-300 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-900 shadow-sm"
                />
              </div>

              <div className="flex flex-wrap gap-1.5">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all whitespace-nowrap ${
                      selectedCategory === cat
                        ? "bg-slate-900 text-white shadow-sm"
                        : "bg-white text-slate-700 border border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, idx) => (
                <ScrollReveal key={post.slug} direction="up" delayMs={(idx % 3) * 100}>
                  <article className="h-full rounded-2xl bg-white border border-slate-200 hover:border-amber-400 hover:shadow-lg transition-all duration-300 flex flex-col justify-between overflow-hidden group">
                    <div className="p-6 sm:p-7 space-y-4">
                      <div className="flex items-center justify-between gap-2 text-xs">
                        <span className="px-2.5 py-1 rounded bg-amber-50 text-amber-900 font-semibold border border-amber-200/80 text-[11px]">
                          {post.category}
                        </span>
                        <span className="text-slate-500 flex items-center gap-1 text-[11px]">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </span>
                      </div>

                      <div className="space-y-2">
                        <h3 className="text-xl font-serif font-bold text-slate-900 group-hover:text-amber-800 transition-colors leading-snug">
                          <Link href={`/blog/${post.slug}`}>
                            {post.title}
                          </Link>
                        </h3>
                        <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                          {post.excerpt}
                        </p>
                      </div>

                      {/* Case Study Metrics */}
                      {post.metrics && post.metrics.length > 0 && (
                        <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 text-xs space-y-1">
                          <div className="text-[10px] uppercase font-bold text-slate-500 flex items-center gap-1">
                            <TrendingUp className="w-3 h-3 text-emerald-600" />
                            <span>Empirical Metric</span>
                          </div>
                          <div className="font-bold text-slate-900">
                            {post.metrics[0].label}:{" "}
                            <span className="text-amber-800">{post.metrics[0].value}</span>
                          </div>
                        </div>
                      )}

                      {/* Tag Pills */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {post.tags.slice(0, 3).map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2 py-0.5 rounded text-[10px] bg-slate-100 text-slate-600 border border-slate-200"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="px-6 pb-6 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
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

        {/* Newsletter Subscription Banner */}
        <section className="py-16 bg-white border-b border-slate-200">
          <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center space-y-6">
            <ScrollReveal direction="up">
              <div className="w-12 h-12 rounded-full bg-amber-50 text-amber-800 border border-amber-200 flex items-center justify-center mx-auto">
                <Mail className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">
                  Subscribe to Ravi Estate Quarterly Market Intelligence
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
                  Receive verified transaction reports, LDA regulatory updates, commercial yield indices, and land banking analysis directly in your inbox. No spam, ever.
                </p>
              </div>

              {newsletterSubscribed ? (
                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold flex items-center justify-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Thank you. You have been added to our quarterly investor intelligence list.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto pt-2">
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter your institutional or personal email"
                    className="flex-1 px-4 py-3 rounded-lg bg-slate-50 border border-slate-300 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-900 shadow-sm"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs transition-all shadow-sm"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </ScrollReveal>
          </div>
        </section>
      </main>

      <Footer />
      <BrochureModal />
    </div>
  );
}
