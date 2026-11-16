import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import ScrollReveal from "@/components/ScrollReveal";
import { COMPANY_INFO, FOUNDERS_LEADERSHIP } from "@/lib/data";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  ShieldCheck,
  HelpCircle,
  Languages,
} from "lucide-react";

export const metadata: Metadata = {
  title: `Contact & Office Details | ${COMPANY_INFO.name} | DHA Phase 8 Lahore`,
  description:
    `Connect with ${COMPANY_INFO.name} at ${COMPANY_INFO.headOffice}. Call/WhatsApp ${COMPANY_INFO.pakistanPhone} or ${COMPANY_INFO.secondaryPhone} for MGH affidavit files and DHA Lahore property files.`,
  keywords: [
    `Contact ${COMPANY_INFO.name}`,
    "DHA Phase 8 Lahore office",
    "MGH Affidavit Files Phone",
    "DHA Lahore property consultants",
    "M Talha Cheema",
    "M Daud Ali Lashari",
  ],
};

export default function ContactPage() {
  const faqs = [
    {
      q: `Where is Property Files Network's physical office located?`,
      a: `Our corporate head office is located at ${COMPANY_INFO.headOffice}. We are situated right on the main commercial corridor of DHA Phase 8, offering convenient access for in-person file verification, biometric transfers, and investor consultations.`,
    },
    {
      q: `How do you handle MGH (Mangla Garrison Housing) 1 Kanal and 10 Marla affidavit files?`,
      a: "We actively buy, sell, and exchange verified MGH 1 Kanal and 10 Marla affidavit files. Every file is authenticated directly with the project directorate before any payment is exchanged, ensuring immediate liquidity and guaranteed legal title.",
    },
    {
      q: `Which DHA Lahore phases do you handle property files for?`,
      a: "We specialize in property files across DHA Lahore Phases 6, 7, 8 (including Broadway Commercial, Sector Y & Park View), Phase 9 Prism (40,000+ Kanal balloted sectors), and Phase 10 allocation files.",
    },
    {
      q: `Which regional cities and provinces do you serve?`,
      a: "We actively serve clients across Punjab (Lahore, Rawalpindi, Jhelum, Dina, Kharian), the Capital Territory (Islamabad), Sindh (Karachi), and Azad Kashmir (Mirpur), alongside the overseas diaspora in the UK, Europe, and North America.",
    },
    {
      q: `Can overseas Pakistanis complete transactions remotely?`,
      a: "Yes. Through our specialized overseas desk, we guide expatriates on executing embassy-attested Special Power of Attorney (PoA) and structuring compliant fund transfers via Roshan Digital Accounts (RDA) for full legal capital and profit repatriation.",
    },
    {
      q: `Which languages are your property advisors fluent in?`,
      a: "Our team provides comprehensive property consultation in English, Urdu, and Punjabi, ensuring crystal-clear understanding and comfort for local and expatriate families.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 overflow-x-hidden">
      <Navbar />

      <main className="flex-1 w-full overflow-x-hidden">
        {/* Page Hero Header */}
        <section className="bg-gradient-to-b from-slate-50 via-white to-slate-50 py-10 sm:py-14 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal direction="up">
              <div className="max-w-3xl space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-50 border border-amber-200 text-amber-900 text-xs font-semibold uppercase tracking-widest">
                  <Phone className="w-3.5 h-3.5 text-amber-700" />
                  <span>Direct Property Consultation &amp; Trading Desk</span>
                </div>
                <h1 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 leading-tight">
                  Contact Our DHA Phase 8 Lahore Desks
                </h1>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
                  {COMPANY_INFO.tagline}
                </p>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
                  Connect with Co-Founders M Talha Cheema and M Daud Ali Lashari for verified MGH affidavit files, DHA Lahore property files, and strategic real estate investment advisory.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Contact Information Cards Strip */}
        <section className="py-12 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Card 1: Primary Hotline */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2.5">
                <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-amber-700 shadow-sm">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="text-xs uppercase font-bold tracking-wider text-slate-500">
                  Trading Hotline
                </div>
                <a
                  href={`tel:${COMPANY_INFO.pakistanPhoneRaw}`}
                  className="text-lg font-bold text-slate-900 hover:text-amber-700 block transition-colors"
                >
                  {COMPANY_INFO.pakistanPhone}
                </a>
                <p className="text-xs text-slate-500">M Talha Cheema • File Trading Desk</p>
                <a
                  href={`https://wa.me/923234304259?text=${encodeURIComponent(
                    "Hello M Talha Cheema, I would like to inquire about property files."
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:underline pt-1"
                >
                  <span>Chat on WhatsApp &rarr;</span>
                </a>
              </div>

              {/* Card 2: Secondary Hotline */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2.5">
                <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-amber-700 shadow-sm">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="text-xs uppercase font-bold tracking-wider text-slate-500">
                  Advisory Hotline
                </div>
                <a
                  href={`tel:${COMPANY_INFO.secondaryPhoneRaw}`}
                  className="text-lg font-bold text-slate-900 hover:text-amber-700 block transition-colors"
                >
                  {COMPANY_INFO.secondaryPhone}
                </a>
                <p className="text-xs text-slate-500">M Daud Ali Lashari • Investment Desk</p>
                <a
                  href={`https://wa.me/923204154156?text=${encodeURIComponent(
                    "Hello M Daud Ali Lashari, I would like to inquire about real estate investments."
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:underline pt-1"
                >
                  <span>Chat on WhatsApp &rarr;</span>
                </a>
              </div>

              {/* Card 3: Head Office */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2.5">
                <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-amber-700 shadow-sm">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="text-xs uppercase font-bold tracking-wider text-slate-500">
                  Head Office Location
                </div>
                <div className="text-sm font-bold text-slate-900 leading-snug">
                  {COMPANY_INFO.headOffice}
                </div>
                <p className="text-xs text-slate-500">In-person biometric &amp; file verification</p>
              </div>

              {/* Card 4: Email & Languages */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2.5">
                <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-amber-700 shadow-sm">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="text-xs uppercase font-bold tracking-wider text-slate-500">
                  Official Email &amp; Languages
                </div>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="text-xs font-bold text-slate-900 hover:text-amber-700 block truncate transition-colors"
                >
                  {COMPANY_INFO.email}
                </a>
                <div className="flex items-center gap-1.5 text-xs text-slate-600 pt-1">
                  <Languages className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                  <span>English • Urdu • Punjabi</span>
                </div>
                <p className="text-[11px] text-slate-400">
                  {COMPANY_INFO.officeHours}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Lead Capture Form Section */}
        <LeadCaptureForm />

        {/* Frequently Asked Questions */}
        <section className="py-20 bg-slate-50 border-b border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <ScrollReveal direction="up">
              <div className="text-center space-y-3">
                <div className="text-xs font-bold uppercase tracking-widest text-amber-700 flex items-center justify-center gap-1.5">
                  <HelpCircle className="w-3.5 h-3.5" />
                  <span>Frequently Asked Questions</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900">
                  Property Files Network FAQs
                </h2>
              </div>
            </ScrollReveal>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <ScrollReveal key={idx} direction="up" delayMs={idx * 60}>
                  <div className="p-6 rounded-xl bg-white border border-slate-200 space-y-2 shadow-sm">
                    <h3 className="text-base font-serif font-bold text-slate-900">
                      {faq.q}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
