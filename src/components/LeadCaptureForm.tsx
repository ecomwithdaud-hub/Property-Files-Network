"use client";

import React, { useEffect, useState } from "react";
import {
  Send,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  ShieldCheck,
  Building2,
  Calendar,
} from "lucide-react";
import {
  COMPANY_INFO,
  CRM_AGENTS,
  Lead,
  LeadOrigin,
  PAKISTAN_PORTFOLIO,
  PropertyCategory,
} from "@/lib/data";
import { useLeads } from "@/context/LeadContext";
import ScrollReveal from "./ScrollReveal";

interface LeadCaptureFormProps {
  onSwitchToCRM?: () => void;
}

export default function LeadCaptureForm({
  onSwitchToCRM,
}: LeadCaptureFormProps) {
  const {
    addLead,
    preselectedProjectForInquiry,
    setPreselectedProjectForInquiry,
  } = useLeads();

  const [clientName, setClientName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [originType, setOriginType] = useState<LeadOrigin>("Pakistan");
  const [countryCity, setCountryCity] = useState("Lahore, Pakistan");
  const [propertyCategory, setPropertyCategory] = useState<PropertyCategory>(
    "Luxury High-Rise Apartments"
  );
  const [specificProject, setSpecificProject] = useState(
    "Green View Executive Apartments (DHA Phase 5, Lahore)"
  );
  const [preferredUnitType, setPreferredUnitType] = useState(
    "2-Bed Executive Suite"
  );
  const [budgetTier, setBudgetTier] = useState(
    "PKR 2.85 Crore – 4.50 Crore"
  );
  const [notes, setNotes] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submittedLead, setSubmittedLead] = useState<Lead | null>(null);

  useEffect(() => {
    if (preselectedProjectForInquiry) {
      setSpecificProject(preselectedProjectForInquiry);
      if (preselectedProjectForInquiry.includes("Corporate")) {
        setPropertyCategory("Commercial Plazas & Corporate Towers");
      } else if (preselectedProjectForInquiry.includes("Farmhouse")) {
        setPropertyCategory("Organic Farmhouses & Agri-Estates");
      } else if (preselectedProjectForInquiry.includes("Smart")) {
        setPropertyCategory("Smart Homes & Turnkey Villas");
      } else {
        setPropertyCategory("Luxury High-Rise Apartments");
      }
    }
  }, [preselectedProjectForInquiry]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName.trim() || !phone.trim()) return;

    setSubmitting(true);

    let estimatedValuePKR = 45;
    if (budgetTier.includes("8.50") || budgetTier.includes("12+")) {
      estimatedValuePKR = 95;
    } else if (budgetTier.includes("5.00") || budgetTier.includes("6.75")) {
      estimatedValuePKR = 60;
    } else if (budgetTier.includes("1.65") || budgetTier.includes("2.85")) {
      estimatedValuePKR = 30;
    }

    const assignedAgent = CRM_AGENTS[0];

    const created = await addLead({
      clientName: clientName.trim(),
      phone: phone.trim(),
      email: email.trim() || "advisory.client@raviestate.com",
      originType,
      countryCity: countryCity.trim() || "Lahore, Pakistan",
      propertyCategory,
      specificProject,
      preferredUnitType,
      budgetDisplay: budgetTier,
      estimatedValuePKR,
      assignedAgent,
      stage: "new",
      priority: estimatedValuePKR >= 70 ? "VIP" : "High",
      notes: [
        notes.trim()
          ? `Investor Inquiry Note: "${notes.trim()}"`
          : `Website advisory inquiry for ${specificProject} (${preferredUnitType}).`,
      ],
    });

    setSubmitting(false);
    setSubmittedLead(created);
    setPreselectedProjectForInquiry(null);
  };

  const resetForm = () => {
    setSubmittedLead(null);
    setClientName("");
    setPhone("");
    setEmail("");
    setNotes("");
  };

  return (
    <section
      id="lead-inquiry"
      className="py-20 lg:py-24 bg-white border-b border-slate-200 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left 5 Columns: Corporate Advisory Details */}
          <div className="lg:col-span-5">
            <ScrollReveal direction="up" delayMs={80}>
              <div className="space-y-6">
                <div className="text-xs font-bold uppercase tracking-widest text-amber-700">
                  Investor Relations &amp; Advisory Desk
                </div>

                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 leading-tight">
                  Schedule a Private Consultation or{" "}
                  <span className="text-amber-700">Project Briefing</span>
                </h2>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Whether you are an overseas Pakistani planning your next acquisition or a domestic business family exploring high-yield commercial floors or organic farmhouses in Lahore, our senior partners are at your service.
                </p>

                {/* Direct Contact Cards */}
                <div className="space-y-3.5 pt-2">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-4">
                    <div className="w-11 h-11 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-amber-700 shrink-0 shadow-sm">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                        Direct Phone &amp; WhatsApp Hotline
                      </div>
                      <div className="text-lg font-bold text-slate-900">
                        {COMPANY_INFO.pakistanPhone}
                      </div>
                      <div className="text-xs text-slate-500">
                        Monday – Saturday • 10:00 AM – 7:30 PM PKT
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-4">
                    <div className="w-11 h-11 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-800 shrink-0 shadow-sm">
                      <MapPin className="w-5 h-5 text-amber-700" />
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                        Head Office Locations
                      </div>
                      <div className="text-sm font-bold text-slate-900">
                        DHA Phase 5 &amp; Gulberg III
                      </div>
                      <div className="text-xs text-slate-500">
                        Lahore, Punjab, Pakistan
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-4">
                    <div className="w-11 h-11 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-800 shrink-0 shadow-sm">
                      <Mail className="w-5 h-5 text-amber-700" />
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                        Email Advisory Desk
                      </div>
                      <div className="text-sm font-bold text-slate-900">
                        {COMPANY_INFO.email}
                      </div>
                      <div className="text-xs text-slate-500">
                        Confidential corporate &amp; family office inquiries
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/80 text-xs text-slate-700 flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900">
                      Strict Client Confidentiality:
                    </strong>{" "}
                    All financial, corporate, and personal property inquiries are managed strictly under attorney-client privilege guidelines.
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right 7 Columns: Corporate Inquiry Form */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="left" delayMs={150}>
              <div className="rounded-2xl bg-slate-50 border border-slate-200 p-6 sm:p-8 lg:p-10 shadow-sm">
                {submittedLead ? (
                  <div className="py-6 space-y-6 text-center">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-700 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-9 h-9" />
                    </div>

                    <div className="space-y-2">
                      <span className="px-3 py-1 rounded bg-white border border-slate-200 text-slate-700 text-xs font-bold uppercase tracking-widest">
                        Inquiry Registered • Reference #{submittedLead.id}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">
                        Thank You, {submittedLead.clientName}
                      </h3>
                      <p className="text-sm text-slate-600 max-w-lg mx-auto">
                        Your inquiry regarding{" "}
                        <strong className="text-slate-900">
                          {submittedLead.specificProject}
                        </strong>{" "}
                        has been logged into our advisory system. A senior partner will contact you shortly.
                      </p>
                    </div>

                    <div className="p-5 rounded-xl bg-white border border-slate-200 text-left grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                      <div>
                        <span className="text-slate-500 block">Phone / WhatsApp:</span>
                        <span className="text-slate-900 font-bold">{submittedLead.phone}</span>
                      </div>
                      <div>
                        <span className="text-slate-500 block">Investor Origin:</span>
                        <span className="text-slate-900 font-bold">
                          {submittedLead.originType} ({submittedLead.countryCity})
                        </span>
                      </div>
                      <div>
                        <span className="text-slate-500 block">Target Asset Class:</span>
                        <span className="text-amber-800 font-bold">
                          {submittedLead.propertyCategory}
                        </span>
                      </div>
                      <div>
                        <span className="text-slate-500 block">Indicative Budget:</span>
                        <span className="text-slate-900 font-bold">{submittedLead.budgetDisplay}</span>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                      {onSwitchToCRM && (
                        <button
                          onClick={onSwitchToCRM}
                          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs transition-all"
                        >
                          <span>View Inquiry in CRM Pipeline</span>
                        </button>
                      )}
                      <button
                        onClick={resetForm}
                        className="w-full sm:w-auto px-5 py-3.5 rounded-lg bg-white hover:bg-slate-100 border border-slate-300 text-slate-800 text-xs font-semibold transition-all"
                      >
                        Submit Another Inquiry
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="border-b border-slate-200 pb-4">
                      <h3 className="text-xl font-serif font-bold text-slate-900">
                        Property Advisory Inquiry Form
                      </h3>
                      <p className="text-xs text-slate-600 mt-1">
                        Please indicate your property preferences to receive tailored floor plans, feasibility analyses, and title verification reports.
                      </p>
                    </div>

                    {/* Property Category Selection */}
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-2">
                        1. Target Asset Class *
                      </label>
                      <select
                        value={propertyCategory}
                        onChange={(e) => {
                          const cat = e.target.value as PropertyCategory;
                          setPropertyCategory(cat);
                          if (cat === "Luxury High-Rise Apartments") {
                            setSpecificProject("Green View Executive Apartments (DHA Phase 5, Lahore)");
                            setPreferredUnitType("2-Bed Executive Suite");
                            setBudgetTier("PKR 2.85 Crore – 4.50 Crore");
                          } else if (cat === "Commercial Plazas & Corporate Towers") {
                            setSpecificProject("Corporate Tower (Gulberg III, Lahore)");
                            setPreferredUnitType("Commercial Corporate Floor");
                            setBudgetTier("PKR 4.50 Crore – 12+ Crore");
                          } else if (cat === "Organic Farmhouses & Agri-Estates") {
                            setSpecificProject("Value Lahore Organic Farmhouses (Barki Road)");
                            setPreferredUnitType("4 Kanal Organic Farm Parcel");
                            setBudgetTier("PKR 6.75 Crore – 14+ Crore");
                          } else if (cat === "Smart Homes & Turnkey Villas") {
                            setSpecificProject("Green View Smart Homes (DHA Phase 12 EME)");
                            setPreferredUnitType("Turnkey Smart Townhouse");
                            setBudgetTier("PKR 2.95 Crore – 4.50 Crore");
                          } else {
                            setSpecificProject("Value Residencies (Barki Road, Opp. DHA Phase 8)");
                            setPreferredUnitType("Gated Residential Plot");
                            setBudgetTier("PKR 3.40 Crore – 6.00 Crore");
                          }
                        }}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-slate-900"
                      >
                        <option value="Luxury High-Rise Apartments">Luxury High-Rise Apartments (DHA Phase 5 & Model Town)</option>
                        <option value="Commercial Plazas & Corporate Towers">Commercial Plazas & Corporate Towers (Gulberg CBD)</option>
                        <option value="Smart Homes & Turnkey Villas">Smart Homes & Turnkey Villas (DHA Phase 12 EME)</option>
                        <option value="Organic Farmhouses & Agri-Estates">Organic Farmhouses & Agri-Estates (Barki Road)</option>
                        <option value="DHA & Master-Planned Land Banking">DHA & Master-Planned Land Banking (Barki Road Opp. DHA 8)</option>
                      </select>
                    </div>

                    {/* Name & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                          Full Name / Company Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={clientName}
                          onChange={(e) => setClientName(e.target.value)}
                          placeholder="e.g. Mian Tariq / Usman Textile Group"
                          className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-900"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                          Phone / WhatsApp Number *
                        </label>
                        <input
                          type="text"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+92 300 ... or international format"
                          className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-900"
                        />
                      </div>
                    </div>

                    {/* Origin & Location */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                          Investor Profile *
                        </label>
                        <select
                          value={originType}
                          onChange={(e) => setOriginType(e.target.value as LeadOrigin)}
                          className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-slate-900"
                        >
                          <option value="Pakistan">Pakistan Domestic Resident / Corporate</option>
                          <option value="Overseas Pakistani Diaspora">Overseas Pakistani (UK / UAE / North America)</option>
                        </select>
                      </div>

                      <div>
                        <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                          Current City &amp; Country
                        </label>
                        <input
                          type="text"
                          value={countryCity}
                          onChange={(e) => setCountryCity(e.target.value)}
                          placeholder="e.g. Lahore, Karachi, London, Dubai"
                          className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-900"
                        />
                      </div>
                    </div>

                    {/* Project & Budget */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                          Preferred Project
                        </label>
                        <select
                          value={specificProject}
                          onChange={(e) => setSpecificProject(e.target.value)}
                          className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-slate-900"
                        >
                          {PAKISTAN_PORTFOLIO.map((p) => (
                            <option key={p.id} value={`${p.title} (${p.location})`}>
                              {p.title} ({p.location})
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                          Indicative Budget Range
                        </label>
                        <select
                          value={budgetTier}
                          onChange={(e) => setBudgetTier(e.target.value)}
                          className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-slate-900"
                        >
                          <option value="PKR 1.65 Crore – 2.85 Crore">PKR 1.65 Cr – 2.85 Cr (Urban Apartments)</option>
                          <option value="PKR 2.85 Crore – 4.50 Crore">PKR 2.85 Cr – 4.50 Cr (DHA Apartments / Smart Homes)</option>
                          <option value="PKR 4.50 Crore – 8.00 Crore">PKR 4.50 Cr – 8.00 Cr (Commercial / Farmhouses)</option>
                          <option value="PKR 8.00 Crore – 15+ Crore">PKR 8.00 Cr – 15+ Cr (Corporate Tower Floor / Estates)</option>
                        </select>
                      </div>
                    </div>

                    {/* Email & Configuration */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                          Email Address
                        </label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="client@domain.com"
                          className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-900"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                          Preferred Unit / Parcel Size
                        </label>
                        <input
                          type="text"
                          value={preferredUnitType}
                          onChange={(e) => setPreferredUnitType(e.target.value)}
                          placeholder="e.g. 2-Bed Luxury, 4 Kanal Farmhouse"
                          className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-900"
                        />
                      </div>
                    </div>

                    {/* Notes */}
                    <div>
                      <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                        Specific Questions or Consultation Notes
                      </label>
                      <textarea
                        rows={2}
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder="Please share any specific requirements, RDA banking questions, or preferred consultation dates..."
                        className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-900"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full py-3.5 px-6 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm shadow-sm transition-all flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4 text-amber-400" />
                      <span>
                        {submitting
                          ? "Submitting to Advisory Desk..."
                          : "Submit Property Advisory Inquiry"}
                      </span>
                    </button>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
