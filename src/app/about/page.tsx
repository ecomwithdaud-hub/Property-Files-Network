import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BrochureModal from "@/components/BrochureModal";
import ScrollReveal from "@/components/ScrollReveal";
import { COMPANY_INFO, CRM_AGENTS } from "@/lib/data";
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
} from "lucide-react";

export const metadata: Metadata = {
  title: `About Us | ${COMPANY_INFO.name} (${COMPANY_INFO.domain}) | Lahore Real Estate Advisory`,
  description:
    `Learn about ${COMPANY_INFO.name}'s 18+ year history as a premier property advisory firm in Lahore, Pakistan. Official marketing partner of Value Group with over PKR 45B in guided real estate transactions.`,
  keywords: [
    `About ${COMPANY_INFO.name}`,
    `${COMPANY_INFO.name} Lahore`,
    "Value Group partnership",
    "DHA Lahore property consultants",
    "Gulberg commercial advisors",
    "Pakistan real estate advisory",
  ],
};

export default function AboutPage() {
  const leadership = [
    {
      name: "Chaudhry Bilal",
      role: "Head of Commercial Advisory",
      focus: "Gulberg Corporate Skyscrapers & DHA High-Rise Assets",
      experience: "16+ Years Experience",
      bio: "Leads commercial lease structuring, institutional acquisitions, and corporate tenant negotiations across central Lahore.",
    },
    {
      name: "Hassan Nawaz",
      role: "Director of Land Acquisitions",
      focus: "Barki Road Farmhouses & Generational Land Banking",
      experience: "18+ Years Experience",
      bio: "Specializes in multi-Kanal peri-urban land aggregation, revenue Intiqal verification, and eco-luxury farmhouse planning.",
    },
    {
      name: "Zainab Raza",
      role: "Lead Diaspora Advisory Consultant",
      focus: "Overseas Pakistani Investments (UK, UAE & North America)",
      experience: "12+ Years Experience",
      bio: "Advises expatriate families and overseas corporate professionals on Roshan Digital Accounts, Special PoA, and legal title repatriation.",
    },
    {
      name: "Umer Farooq",
      role: "Senior Investment Specialist",
      focus: "Turnkey Residential & Smart Living Developments",
      experience: "14+ Years Experience",
      bio: "Manages end-user residential portfolio acquisitions across DHA Phase 5, Phase 12 (EME), and Model Town Link Road.",
    },
  ];

  const milestones = [
    {
      year: "2008",
      title: `Establishment of ${COMPANY_INFO.name}`,
      desc: "Founded in Lahore with an uncompromising philosophy: 'Deals in all kinds of properties.' Built on legal due diligence and transparent advisory.",
    },
    {
      year: "2014",
      title: "Expansion into Commercial Corporate Advisory",
      desc: "Structured landmark corporate acquisitions in Gulberg and established dedicated property valuation desks.",
    },
    {
      year: "2018",
      title: "Strategic Alliance with Value Group",
      desc: "Partnered with premier developer Value Group to exclusively market and advise on landmark projects including Green View Executive DHA 5.",
    },
    {
      year: "2021",
      title: "Launch of Dedicated Overseas Advisory Desk",
      desc: "Instituted direct legal escrow and Roshan Digital Account (RDA) repatriation protocols for overseas Pakistanis.",
    },
    {
      year: "2024–2026",
      title: "Portfolio Delivery & Sustainable Land Banking",
      desc: "Completed delivery of Value Apartments on PECO Road, launched Green View Smart Homes, and expanded Barki Road organic estates.",
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
                  <span>Corporate Profile &amp; Legacy • Est. 2008</span>
                </div>
                <h1 className="text-4xl sm:text-5xl font-serif font-bold text-slate-900 leading-tight">
                  Eighteen Years of Fiduciary Property Advisory in{" "}
                  <span className="text-amber-700">Lahore, Pakistan</span>
                </h1>
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                  {COMPANY_INFO.name} is an institutional property advisory firm built on legal title scrutiny, transparent valuations, and enduring client trust. Our motto — <em className="font-serif text-slate-900">&ldquo;{COMPANY_INFO.tagline}&rdquo;</em> — encapsulates our comprehensive capability across commercial, residential, and agricultural assets.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Advisory Metrics */}
        <section className="py-12 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: "Founded in Lahore", value: "2008", note: "18+ continuous years" },
                { label: "Total Advised Volume", value: "PKR 45B+", note: "Across Punjab markets" },
                { label: "Verified Landmark Projects", value: "6 Major", note: "Value Group alliance" },
                { label: "Legal Title Clearance", value: "100%", note: "Zero unverified files" },
              ].map((stat, idx) => (
                <div key={idx} className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <div className="text-xs text-slate-500 font-medium uppercase tracking-wider">{stat.label}</div>
                  <div className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">{stat.value}</div>
                  <div className="text-xs text-amber-700 font-semibold">{stat.note}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Corporate Philosophy */}
        <section className="py-20 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 space-y-12">
            <ScrollReveal direction="up">
              <div className="max-w-3xl space-y-3">
                <div className="text-xs font-bold uppercase tracking-widest text-amber-700">
                  Our Core Pillars
                </div>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 leading-tight">
                  The Three Principles Guiding Every {COMPANY_INFO.name} Transaction
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Scale,
                  title: "Title Scrutiny Above All",
                  desc: "We never market unapproved schemes or encumbered files. Every land parcel, office suite, and apartment is verified against the official records of LDA, DHA, and the Punjab Board of Revenue.",
                },
                {
                  icon: ShieldCheck,
                  title: "Anti-Speculation Philosophy",
                  desc: "We steer clients away from bubble speculation and paper file lotteries. Our recommendations prioritize income-yielding commercial buildings, delivered apartments, and titled possession land.",
                },
                {
                  icon: Users,
                  title: "Overseas Investor Protection",
                  desc: "Non-resident Pakistanis receive end-to-end legal support, including Roshan Digital Account (RDA) transaction routing, Special Power of Attorney drafting, and embassy attestation guidance.",
                },
              ].map((p, idx) => {
                const Icon = p.icon;
                return (
                  <ScrollReveal key={idx} direction="up" delayMs={idx * 100}>
                    <div className="h-full p-8 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-sm">
                      <div className="w-12 h-12 rounded-xl bg-slate-900 text-amber-400 flex items-center justify-center">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-serif font-bold text-slate-900">{p.title}</h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{p.desc}</p>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-20 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 space-y-12">
            <ScrollReveal direction="up">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200 pb-6">
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-amber-700">
                    Senior Partners &amp; Advisory Desks
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 mt-1">
                    Meet Our Leadership
                  </h2>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md">
                  Each advisory desk is led by seasoned property specialists with deep institutional relationships in Lahore.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {leadership.map((leader, idx) => (
                <ScrollReveal key={idx} direction="up" delayMs={idx * 80}>
                  <div className="h-full p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 flex flex-col justify-between">
                    <div className="space-y-2">
                      <div className="w-12 h-12 rounded-full bg-slate-900 text-amber-400 flex items-center justify-center font-serif font-bold text-lg">
                        {leader.name.charAt(0)}
                      </div>
                      <div>
                        <h3 className="text-lg font-serif font-bold text-slate-900">{leader.name}</h3>
                        <div className="text-xs font-semibold text-amber-700">{leader.role}</div>
                      </div>
                      <div className="text-[11px] text-slate-500 font-medium">{leader.experience}</div>
                      <p className="text-xs text-slate-600 leading-relaxed pt-1">{leader.bio}</p>
                    </div>

                    <div className="pt-3 border-t border-slate-200 text-[11px] text-slate-500">
                      <strong>Focus:</strong> {leader.focus}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Milestone Timeline */}
        <section className="py-20 bg-slate-50 border-b border-slate-200">
          <div className="max-w-5xl mx-auto px-6 lg:px-10 space-y-12">
            <ScrollReveal direction="up">
              <div className="text-center space-y-3">
                <div className="text-xs font-bold uppercase tracking-widest text-amber-700">
                  Chronology of Growth
                </div>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900">
                  Key Milestones in Our Journey
                </h2>
              </div>
            </ScrollReveal>

            <div className="space-y-6">
              {milestones.map((m, idx) => (
                <ScrollReveal key={idx} direction="up" delayMs={idx * 70}>
                  <div className="p-6 rounded-xl bg-white border border-slate-200 flex flex-col sm:flex-row gap-5 items-start">
                    <div className="px-4 py-2 rounded-lg bg-slate-900 text-amber-400 font-serif font-bold text-lg shrink-0">
                      {m.year}
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-lg font-serif font-bold text-slate-900">{m.title}</h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{m.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-slate-900 text-white">
          <div className="max-w-5xl mx-auto px-6 lg:px-10 text-center space-y-6">
            <ScrollReveal direction="up">
              <div className="space-y-3">
                <h2 className="text-3xl sm:text-4xl font-serif font-bold">
                  Speak Directly With a {COMPANY_INFO.name} Senior Partner
                </h2>
                <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
                  Whether analyzing commercial lease yield projections or inspecting titled land on Barki Road, schedule an in-person or virtual consultation with our advisory desk.
                </p>
              </div>

              <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="px-6 py-3.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-all shadow-sm flex items-center gap-2"
                >
                  <span>Book Private Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={`tel:${COMPANY_INFO.pakistanPhoneRaw}`}
                  className="px-6 py-3.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs border border-slate-700 transition-all flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span>Call {COMPANY_INFO.pakistanPhone}</span>
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
