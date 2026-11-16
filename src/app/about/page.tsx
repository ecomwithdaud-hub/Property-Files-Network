import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BrochureModal from "@/components/BrochureModal";
import ScrollReveal from "@/components/ScrollReveal";
import {
  COMPANY_INFO,
  FOUNDERS_LEADERSHIP,
  CORE_SPECIALTIES,
  SERVED_REGIONS,
} from "@/lib/data";
import {
  ShieldCheck,
  Award,
  Users,
  Building2,
  Scale,
  MapPin,
  Phone,
  ArrowRight,
  CheckCircle2,
  Languages,
  FileCheck2,
  Mail,
} from "lucide-react";

export const metadata: Metadata = {
  title: `About Us & Leadership | ${COMPANY_INFO.name} | DHA Phase 8 Lahore`,
  description: COMPANY_INFO.bio,
  keywords: [
    `About ${COMPANY_INFO.name}`,
    "M Talha Cheema",
    "M Daud Ali Lashari",
    "MGH Affidavit Files",
    "DHA Lahore Phase 8 Broadway",
    "DHA Phase 9 Prism",
    "DHA Phase 10 Files",
    "Lahore real estate advisory",
  ],
};

export default function AboutPage() {
  const milestones = [
    {
      year: "2008",
      title: "Establishment of Property Files Network",
      desc: "Founded in Lahore with an unwavering commitment to transparent property file trading, affidavit liquidity, and investor capital protection.",
    },
    {
      year: "2015",
      title: "Expansion into DHA Lahore File Trading",
      desc: "Established dedicated desks for DHA Lahore Phases 6, 7, and 8 Broadway Commercial, managing large-scale institutional plot allocations.",
    },
    {
      year: "2019",
      title: "MGH Mangla Waterfront Trading Desk",
      desc: "Pioneered specialized buying, selling, and fast settlement of Mangla Garrison Housing (MGH) 1 Kanal and 10 Marla affidavit files.",
    },
    {
      year: "2022",
      title: "Overseas Diaspora Multilingual Advisory",
      desc: "Inaugurated dedicated diaspora channels for clients in the UK, North America, and Gulf, offering full support in English, Urdu, and Punjabi.",
    },
    {
      year: "2024–2026",
      title: "DHA Phase 9 Prism & Phase 10 Leadership",
      desc: "Leading file volume across Phase 9 Prism's 40,000+ Kanal balloted sectors and securing high-growth allocation files in DHA Phase 10.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800">
      <Navbar />

      <main className="flex-1">
        {/* Page Hero */}
        <section className="bg-gradient-to-b from-slate-50 via-white to-slate-50 py-16 lg:py-24 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <ScrollReveal direction="up">
              <div className="max-w-3xl space-y-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-amber-50 border border-amber-200/80 text-amber-900 text-xs font-semibold uppercase tracking-widest">
                  <Award className="w-3.5 h-3.5 text-amber-700" />
                  <span>Corporate Profile &amp; Leadership</span>
                </div>
                <h1 className="text-4xl sm:text-5xl font-serif font-bold text-slate-900 leading-tight">
                  About <span className="text-amber-700">Property Files Network</span>
                </h1>
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium">
                  {COMPANY_INFO.tagline}
                </p>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed pt-1">
                  {COMPANY_INFO.bio}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Corporate Metrics Strip */}
        <section className="py-12 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: "Head Office", value: "DHA Phase 8", note: "Office 98-D, Main Boulevard" },
                { label: "MGH Specialty", value: "1K & 10M", note: "Affidavit files buying & selling" },
                { label: "DHA Handling", value: "Phases 6–10", note: "Allocation & possession files" },
                { label: "Languages", value: "3 Languages", note: "English, Urdu & Punjabi" },
              ].map((stat, idx) => (
                <div key={idx} className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <div className="text-xs text-slate-500 font-medium uppercase tracking-wider">
                    {stat.label}
                  </div>
                  <div className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">
                    {stat.value}
                  </div>
                  <div className="text-xs text-amber-700 font-semibold">{stat.note}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Meet the Team / Leadership Section */}
        <section className="py-20 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 space-y-12">
            <ScrollReveal direction="up">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200 pb-6">
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-amber-700 flex items-center gap-1.5">
                    <Users className="w-4 h-4" />
                    <span>Meet the Team &amp; Founders</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 mt-1">
                    Leadership at Property Files Network
                  </h2>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md">
                  Founded and led by dedicated property file specialists and strategic wealth advisors.
                </p>
              </div>
            </ScrollReveal>

            {/* 2 Co-Founders Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {FOUNDERS_LEADERSHIP.map((leader, idx) => (
                <ScrollReveal key={idx} direction="up" delayMs={idx * 120}>
                  <div className="h-full p-8 rounded-2xl bg-white border border-slate-200 hover:border-amber-400 hover:shadow-xl transition-all space-y-5 flex flex-col justify-between group">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="w-16 h-16 rounded-2xl bg-slate-900 text-amber-400 flex items-center justify-center font-serif font-bold text-2xl shadow-md group-hover:scale-105 transition-transform">
                          {leader.name
                            .split(" ")
                            .map((n) => n[0])
                            .slice(0, 2)
                            .join("")}
                        </div>
                        <span className="px-3.5 py-1 rounded-full bg-amber-50 text-amber-900 border border-amber-200 text-xs font-bold uppercase tracking-wider">
                          {leader.role}
                        </span>
                      </div>

                      <div className="space-y-1">
                        <h3 className="text-2xl font-serif font-bold text-slate-900">
                          {leader.name}
                        </h3>
                        <div className="text-sm font-semibold text-amber-700">
                          {leader.title}
                        </div>
                        <div className="text-xs text-slate-500 font-medium">
                          {leader.experience}
                        </div>
                      </div>

                      <p className="text-sm text-slate-600 leading-relaxed pt-1">
                        {leader.bio}
                      </p>

                      <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1 text-xs">
                        <span className="text-[10px] uppercase font-bold text-slate-500 block">
                          Primary Focus Area
                        </span>
                        <span className="font-semibold text-slate-900">
                          {leader.focus}
                        </span>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                      <a
                        href={`tel:${leader.phone.replace(/[^0-9+]/g, "")}`}
                        className="inline-flex items-center gap-2 text-xs font-bold text-slate-900 hover:text-amber-700 transition-colors"
                      >
                        <Phone className="w-3.5 h-3.5 text-amber-600" />
                        <span>{leader.phone}</span>
                      </a>

                      <a
                        href={`https://wa.me/${leader.phone.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                          `Hello ${leader.name}, I am reaching out through Property Files Network for property advice.`
                        )}`}
                        target="_blank"
                        rel="noreferrer"
                        className="px-3.5 py-2 rounded-lg bg-emerald-50 text-emerald-800 hover:bg-emerald-100 border border-emerald-200 text-xs font-bold transition-colors"
                      >
                        WhatsApp Direct
                      </a>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* 3 Core Specialties Review */}
        <section className="py-20 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 space-y-12">
            <ScrollReveal direction="up">
              <div className="max-w-3xl space-y-3">
                <div className="text-xs font-bold uppercase tracking-widest text-amber-700">
                  Core Specialties
                </div>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 leading-tight">
                  The Pillars of Our Property Practice
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {CORE_SPECIALTIES.map((spec, idx) => (
                <ScrollReveal key={spec.id} direction="up" delayMs={idx * 100}>
                  <div className="h-full p-8 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 shadow-sm flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="w-12 h-12 rounded-xl bg-slate-900 text-amber-400 flex items-center justify-center">
                        <FileCheck2 className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-serif font-bold text-slate-900">
                        {spec.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {spec.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-200/80 space-y-2 text-xs">
                      {spec.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Milestone Chronology */}
        <section className="py-20 bg-slate-50 border-b border-slate-200">
          <div className="max-w-5xl mx-auto px-6 lg:px-10 space-y-12">
            <ScrollReveal direction="up">
              <div className="text-center space-y-3">
                <div className="text-xs font-bold uppercase tracking-widest text-amber-700">
                  Milestones &amp; Track Record
                </div>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900">
                  Our Evolution &amp; Growth
                </h2>
              </div>
            </ScrollReveal>

            <div className="space-y-6">
              {milestones.map((m, idx) => (
                <ScrollReveal key={idx} direction="up" delayMs={idx * 70}>
                  <div className="p-6 rounded-xl bg-white border border-slate-200 flex flex-col sm:flex-row gap-5 items-start shadow-sm">
                    <div className="px-4 py-2 rounded-lg bg-slate-900 text-amber-400 font-serif font-bold text-lg shrink-0">
                      {m.year}
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-lg font-serif font-bold text-slate-900">
                        {m.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {m.desc}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-slate-900 text-white">
          <div className="max-w-5xl mx-auto px-6 lg:px-10 text-center space-y-6">
            <ScrollReveal direction="up">
              <div className="space-y-3">
                <h2 className="text-3xl sm:text-4xl font-serif font-bold">
                  Schedule a Consultation With Our Founders
                </h2>
                <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
                  Visit our office at Office No. 98-D, Main Boulevard, DHA Phase 8, Lahore, or connect on WhatsApp for immediate file verification and market rates.
                </p>
              </div>

              <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
                <a
                  href={`https://wa.me/923234304259?text=${encodeURIComponent(
                    "Hello M Talha Cheema & M Daud Ali Lashari, I would like to schedule a consultation with Property Files Network."
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-all shadow-sm flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>WhatsApp Founders Directly</span>
                </a>
                <Link
                  href="/contact"
                  className="px-6 py-3.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs border border-slate-700 transition-all"
                >
                  <span>View All Office Details</span>
                </Link>
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
