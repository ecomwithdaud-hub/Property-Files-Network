import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BrochureModal from "@/components/BrochureModal";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import ScrollReveal from "@/components/ScrollReveal";
import { COMPANY_INFO } from "@/lib/data";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  MessageSquare,
  HelpCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact & Advisory Desks | Ravi Estate (raviestate.com) | Lahore Offices",
  description:
    "Connect with Ravi Estate property advisors in Lahore. Visit our DHA Phase 5 and Gulberg III offices, call +92 300 4154156, or submit an inquiry for commercial, residential, and farmhouse properties.",
  keywords: [
    "Contact Ravi Estate",
    "Ravi Estate Lahore Phone",
    "DHA Phase 5 real estate office",
    "Gulberg property consultant",
    "Overseas Pakistani real estate Lahore",
  ],
};

export default function ContactPage() {
  const faqs = [
    {
      q: "Where are Ravi Estate's physical offices located?",
      a: "Our primary advisory desks are positioned in DHA Phase 5 and Gulberg III, Lahore, providing direct on-ground access to Lahore's key commercial and residential corridors.",
    },
    {
      q: "How does Ravi Estate verify property titles before acquisition?",
      a: "Our legal advisory desk independently audits the Halqa Patwari's record of rights (Fard & Intiqal), checks town planning approvals with the Lahore Development Authority (LDA), and secures official No Demand Certificates (NDC) from DHA prior to presenting assets to clients.",
    },
    {
      q: "Can Overseas Pakistanis transact without physically traveling to Lahore?",
      a: "Yes. Through our specialized Overseas Advisory Desk, we guide diaspora clients on executing Special Power of Attorney (PoA) attested by the Pakistani High Commission / Consulate, and structure payments through Roshan Digital Accounts (RDA) for full legal capital repatriation.",
    },
    {
      q: "Does Ravi Estate charge consultation fees for initial portfolio reviews?",
      a: "Initial property consultations, investment feasibility reviews, and project walkthroughs are complimentary. Professional brokerage and legal conveyance fees apply solely upon successful transaction execution.",
    },
  ];

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
                  <Phone className="w-3.5 h-3.5 text-amber-700" />
                  <span>Direct Property Consultation</span>
                </div>
                <h1 className="text-4xl sm:text-5xl font-serif font-bold text-slate-900 leading-tight">
                  Contact Our Lahore Advisory Desks
                </h1>
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                  Connect directly with senior property advisors to discuss commercial lease yields, DHA residential acquisitions, Barki Road organic farmhouses, or overseas repatriation protocols.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Contact Information Cards Strip */}
        <section className="py-12 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-amber-700 shadow-sm">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="text-xs uppercase font-bold tracking-wider text-slate-500">
                  Advisory Hotline
                </div>
                <div className="text-lg font-bold text-slate-900">
                  {COMPANY_INFO.pakistanPhone}
                </div>
                <p className="text-xs text-slate-500">Direct phone &amp; WhatsApp inquiries</p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-amber-700 shadow-sm">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="text-xs uppercase font-bold tracking-wider text-slate-500">
                  Email Desk
                </div>
                <div className="text-sm font-bold text-slate-900 truncate">
                  {COMPANY_INFO.email}
                </div>
                <p className="text-xs text-slate-500">Corporate and portfolio briefs</p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-amber-700 shadow-sm">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="text-xs uppercase font-bold tracking-wider text-slate-500">
                  Head Office Locations
                </div>
                <div className="text-sm font-bold text-slate-900">
                  DHA Phase 5 &amp; Gulberg III
                </div>
                <p className="text-xs text-slate-500">Lahore, Punjab, Pakistan</p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-amber-700 shadow-sm">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="text-xs uppercase font-bold tracking-wider text-slate-500">
                  Advisory Hours
                </div>
                <div className="text-sm font-bold text-slate-900">
                  Mon – Sat: 10AM – 7:30PM
                </div>
                <p className="text-xs text-slate-500">Pakistan Standard Time (PKT)</p>
              </div>
            </div>
          </div>
        </section>

        {/* Lead Capture Form Section */}
        <LeadCaptureForm />

        {/* Frequently Asked Questions */}
        <section className="py-20 bg-slate-50 border-b border-slate-200">
          <div className="max-w-4xl mx-auto px-6 lg:px-10 space-y-12">
            <ScrollReveal direction="up">
              <div className="text-center space-y-3">
                <div className="text-xs font-bold uppercase tracking-widest text-amber-700 flex items-center justify-center gap-1.5">
                  <HelpCircle className="w-3.5 h-3.5" />
                  <span>Frequently Asked Questions</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900">
                  Investor &amp; Advisory FAQs
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
      <BrochureModal />
    </div>
  );
}
