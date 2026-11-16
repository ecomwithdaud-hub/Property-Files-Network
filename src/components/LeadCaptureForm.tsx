"use client";

import React, { useState, useEffect } from "react";
import {
  Send,
  CheckCircle2,
  Phone,
  ShieldCheck,
  Building2,
  Clock,
  Sparkles,
  ArrowRight,
  Layers,
  FileCheck2,
} from "lucide-react";
import {
  COMPANY_INFO,
  CRM_AGENTS,
  Lead,
  LeadOrigin,
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
    "MGH Affidavit Files"
  );
  const [specificProject, setSpecificProject] = useState(
    "Mangla Garrison Housing (MGH Pakistan)"
  );
  const [preferredUnitType, setPreferredUnitType] = useState(
    "1 Kanal MGH Affidavit File"
  );
  const [budgetTier, setBudgetTier] = useState("PKR 65 Lakh – 95 Lakh");
  const [notes, setNotes] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submittedLead, setSubmittedLead] = useState<Lead | null>(null);

  useEffect(() => {
    if (preselectedProjectForInquiry) {
      setSpecificProject(preselectedProjectForInquiry);
      if (preselectedProjectForInquiry.includes("Mangla") || preselectedProjectForInquiry.includes("MGH")) {
        setPropertyCategory("MGH Affidavit Files");
        setPreferredUnitType("1 Kanal MGH Affidavit File");
        setBudgetTier("PKR 65 Lakh – 95 Lakh");
      } else if (preselectedProjectForInquiry.includes("Broadway")) {
        setPropertyCategory("Commercial Broadway Plazas");
        setPreferredUnitType("4 Marla Commercial Broadway");
        setBudgetTier("PKR 6.50 Crore – 12.00 Crore");
      } else if (preselectedProjectForInquiry.includes("Phase 9")) {
        setPropertyCategory("DHA Lahore Property Files");
        setPreferredUnitType("1 Kanal Balloted File");
        setBudgetTier("PKR 2.20 Crore – 3.80 Crore");
      } else if (preselectedProjectForInquiry.includes("Phase 10")) {
        setPropertyCategory("DHA Lahore Property Files");
        setPreferredUnitType("1 Kanal Allocation File");
        setBudgetTier("PKR 95 Lakh – 1.35 Crore");
      } else {
        setPropertyCategory("DHA Lahore Property Files");
      }
    }
  }, [preselectedProjectForInquiry]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName.trim() || !phone.trim()) return;

    setSubmitting(true);

    let estimatedValuePKR = 45;
    if (budgetTier.includes("18") || budgetTier.includes("24") || budgetTier.includes("28")) {
      estimatedValuePKR = 180;
    } else if (budgetTier.includes("6.50") || budgetTier.includes("12")) {
      estimatedValuePKR = 90;
    } else if (budgetTier.includes("2.20") || budgetTier.includes("3.80")) {
      estimatedValuePKR = 30;
    } else if (budgetTier.includes("65 Lakh") || budgetTier.includes("95 Lakh")) {
      estimatedValuePKR = 8;
    }

    const assignedAgent = CRM_AGENTS[0];

    const created = await addLead({
      clientName: clientName.trim(),
      phone: phone.trim(),
      email: email.trim() || "propertyfilesnetwork@gmail.com",
      originType,
      countryCity: countryCity.trim() || "Lahore, Pakistan",
      propertyCategory,
      specificProject,
      preferredUnitType,
      budgetDisplay: budgetTier,
      estimatedValuePKR,
      assignedAgent,
      stage: "new",
      priority:
        estimatedValuePKR >= 60 || originType === "Overseas Pakistani Diaspora"
          ? "VIP"
          : "High",
      notes: [
        notes.trim() ||
          `Inbound inquiry for ${specificProject} submitted via website portal.`,
      ],
    });

    setSubmittedLead(created);
    setSubmitting(false);
  };

  const resetForm = () => {
    setSubmittedLead(null);
    setClientName("");
    setPhone("");
    setEmail("");
    setNotes("");
    setPreselectedProjectForInquiry(null);
  };

  return (
    <section
      id="lead-inquiry"
      className="py-20 lg:py-24 bg-white border-b border-slate-200 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14">
          {/* Left 5 Columns: Corporate Commitment & Advisory Credentials */}
          <div className="lg:col-span-5 space-y-7">
            <ScrollReveal direction="up">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-widest">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-700" />
                  <span>Verified Deals &amp; Trading Desk</span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-serif font-bold text-slate-900 leading-tight">
                  Consult With Our Co-Founders &amp; Advisors
                </h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Whether buying, selling, or exchanging MGH 1 Kanal &amp; 10 Marla affidavit files or transacting in DHA Lahore Phases 6, 7, 8 Broadway, 9 Prism &amp; 10, submit your requirements below for rapid response and verified rates.
                </p>
              </div>
            </ScrollReveal>

            {/* Direct Phone & WhatsApp Hotline */}
            <ScrollReveal direction="up" delayMs={100}>
              <div className="p-6 rounded-2xl bg-slate-900 text-white space-y-4 shadow-lg">
                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                    Direct Trading Desk Hotlines
                  </span>
                  <div className="text-lg font-serif font-bold">
                    DHA Phase 8 Lahore Head Office
                  </div>
                </div>

                <div className="space-y-2 pt-1 border-t border-slate-800 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">M Talha Cheema (Trading):</span>
                    <a
                      href={`tel:${COMPANY_INFO.pakistanPhoneRaw}`}
                      className="font-bold text-amber-400 hover:underline"
                    >
                      {COMPANY_INFO.pakistanPhone}
                    </a>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">M Daud Ali Lashari (Advisory):</span>
                    <a
                      href={`tel:${COMPANY_INFO.secondaryPhoneRaw}`}
                      className="font-bold text-amber-400 hover:underline"
                    >
                      {COMPANY_INFO.secondaryPhone}
                    </a>
                  </div>
                  <div className="flex items-center justify-between pt-1">
                    <span className="text-slate-400">Official Email:</span>
                    <span className="text-slate-200">{COMPANY_INFO.email}</span>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-2">
                  <a
                    href={`https://wa.me/923234304259?text=${encodeURIComponent(
                      "Hello Property Files Network, I would like to consult on property files and current rates."
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-2.5 px-3 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs text-center transition-all flex items-center justify-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>WhatsApp Trading Desk</span>
                  </a>
                </div>
              </div>
            </ScrollReveal>

            {/* Core Guarantees */}
            <ScrollReveal direction="up" delayMs={180}>
              <div className="space-y-3 pt-2 text-xs">
                {[
                  "100% genuine affidavit & file verification directly with governing directorates",
                  "Immediate market liquidity with prompt settlement for sellers",
                  "Multilingual advisory team fluent in English, Urdu, and Punjabi",
                  "Dedicated overseas diaspora desk assisting UK, North American & Gulf investors",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Right 7 Columns: Interactive Lead Booking Form */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="left" delayMs={100}>
              <div className="p-6 sm:p-9 rounded-2xl bg-slate-50 border border-slate-200 shadow-xl shadow-slate-100/70">
                {submittedLead ? (
                  <div className="text-center py-8 space-y-5 animate-in fade-in zoom-in-95 duration-300">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 border border-emerald-300 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>

                    <div className="space-y-2">
                      <span className="text-xs uppercase font-bold tracking-widest text-emerald-700">
                        Inquiry Successfully Logged
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">
                        Thank You, {submittedLead.clientName}
                      </h3>
                      <p className="text-sm text-slate-600 max-w-lg mx-auto">
                        Your inquiry regarding{" "}
                        <strong className="text-slate-900">
                          {submittedLead.specificProject}
                        </strong>{" "}
                        has been received. Co-Founders M Talha Cheema or M Daud Ali Lashari will connect with you shortly.
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
                        <span className="text-slate-500 block">Category:</span>
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
                        Property Files &amp; Advisory Inquiry Form
                      </h3>
                      <p className="text-xs text-slate-600 mt-1">
                        Select your preferred society and file size to receive verified current market rates and inventory updates.
                      </p>
                    </div>

                    {/* Property Category Selection */}
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-2">
                        1. Target File / Asset Class *
                      </label>
                      <select
                        value={propertyCategory}
                        onChange={(e) => {
                          const cat = e.target.value as PropertyCategory;
                          setPropertyCategory(cat);
                          if (cat === "MGH Affidavit Files") {
                            setSpecificProject("Mangla Garrison Housing (MGH Pakistan)");
                            setPreferredUnitType("1 Kanal MGH Affidavit File");
                            setBudgetTier("PKR 65 Lakh – 95 Lakh");
                          } else if (cat === "Commercial Broadway Plazas") {
                            setSpecificProject("DHA Lahore Phase 8 (Broadway Commercial)");
                            setPreferredUnitType("4 Marla Commercial Broadway");
                            setBudgetTier("PKR 6.50 Crore – 12.00 Crore");
                          } else if (cat === "DHA Lahore Property Files") {
                            setSpecificProject("DHA Lahore Phase 9 Prism");
                            setPreferredUnitType("1 Kanal Balloted Plot File");
                            setBudgetTier("PKR 2.20 Crore – 3.80 Crore");
                          } else {
                            setSpecificProject("DHA Lahore Phase 6");
                            setPreferredUnitType("1 Kanal Ready Plot");
                            setBudgetTier("PKR 4.50 Crore – 7.50 Crore");
                          }
                        }}
                        className="w-full px-4 py-3 rounded-lg bg-white border border-slate-300 text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
                      >
                        <option value="MGH Affidavit Files">
                          MGH Affidavit Files (Mangla Garrison 1 Kanal &amp; 10 Marla)
                        </option>
                        <option value="DHA Lahore Property Files">
                          DHA Lahore Property Files (Phases 6, 7, 8, 9 &amp; 10)
                        </option>
                        <option value="Commercial Broadway Plazas">
                          Commercial Broadway Plazas (DHA Phase 8 Commercial 4 &amp; 8 Marla)
                        </option>
                        <option value="Real Estate Investment Advising">
                          Real Estate Investment Advising (High-Yield Portfolio)
                        </option>
                        <option value="Luxury High-Rise & Waterfront Villas">
                          Luxury High-Rise &amp; Waterfront Lake Villas
                        </option>
                      </select>
                    </div>

                    {/* Specific Project / Society */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-2">
                          2. Society / Phase *
                        </label>
                        <select
                          value={specificProject}
                          onChange={(e) => setSpecificProject(e.target.value)}
                          className="w-full px-4 py-3 rounded-lg bg-white border border-slate-300 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
                        >
                          <option value="Mangla Garrison Housing (MGH Pakistan)">
                            Mangla Garrison Housing (MGH Pakistan)
                          </option>
                          <option value="DHA Lahore Phase 6">
                            DHA Lahore Phase 6 (Raya Golf / CCA)
                          </option>
                          <option value="DHA Lahore Phase 8 (Broadway Commercial)">
                            DHA Phase 8 (Broadway Commercial)
                          </option>
                          <option value="DHA Lahore Phase 9 Prism">
                            DHA Phase 9 Prism (40,000+ Kanals)
                          </option>
                          <option value="DHA Lahore Phase 10">
                            DHA Phase 10 (Allocation Files)
                          </option>
                        </select>
                      </div>

                      <div>
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-2">
                          3. File Cutting / Plot Size *
                        </label>
                        <input
                          type="text"
                          value={preferredUnitType}
                          onChange={(e) => setPreferredUnitType(e.target.value)}
                          placeholder="e.g. 10 Marla File, 1 Kanal Affidavit"
                          className="w-full px-4 py-3 rounded-lg bg-white border border-slate-300 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
                        />
                      </div>
                    </div>

                    {/* Origin & Location */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-2">
                          4. Investor Origin *
                        </label>
                        <div className="grid grid-cols-2 gap-2">
                          <button
                            type="button"
                            onClick={() => {
                              setOriginType("Pakistan");
                              setCountryCity("Lahore, Pakistan");
                            }}
                            className={`py-2.5 px-3 rounded-lg text-xs font-semibold border transition-all ${
                              originType === "Pakistan"
                                ? "bg-slate-900 text-white border-slate-900 shadow-sm"
                                : "bg-white text-slate-700 border-slate-300 hover:bg-slate-100"
                            }`}
                          >
                            Pakistan Resident
                          </button>
                          <button
                            type="button"
                            onClick={() => {
                              setOriginType("Overseas Pakistani Diaspora");
                              setCountryCity("London, UK (Roots in Mirpur)");
                            }}
                            className={`py-2.5 px-3 rounded-lg text-xs font-semibold border transition-all ${
                              originType === "Overseas Pakistani Diaspora"
                                ? "bg-slate-900 text-white border-slate-900 shadow-sm"
                                : "bg-white text-slate-700 border-slate-300 hover:bg-slate-100"
                            }`}
                          >
                            Overseas Pakistani
                          </button>
                        </div>
                      </div>

                      <div>
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-2">
                          City / Country of Residence
                        </label>
                        <input
                          type="text"
                          value={countryCity}
                          onChange={(e) => setCountryCity(e.target.value)}
                          placeholder="e.g. Lahore, Jhelum, Mirpur, London, Dubai"
                          className="w-full px-4 py-3 rounded-lg bg-white border border-slate-300 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
                        />
                      </div>
                    </div>

                    {/* Client Name & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={clientName}
                          onChange={(e) => setClientName(e.target.value)}
                          placeholder="e.g. Malik Zeeshan"
                          className="w-full px-4 py-3 rounded-lg bg-white border border-slate-300 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-2">
                          Phone / WhatsApp *
                        </label>
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+92 300 0000000 or international"
                          className="w-full px-4 py-3 rounded-lg bg-white border border-slate-300 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
                        />
                      </div>
                    </div>

                    {/* Email & Budget */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-2">
                          Email Address (Optional)
                        </label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="name@example.com"
                          className="w-full px-4 py-3 rounded-lg bg-white border border-slate-300 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-2">
                          Indicative Budget Tier
                        </label>
                        <select
                          value={budgetTier}
                          onChange={(e) => setBudgetTier(e.target.value)}
                          className="w-full px-4 py-3 rounded-lg bg-white border border-slate-300 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
                        >
                          <option value="PKR 35 Lakh – 65 Lakh">PKR 35 Lakh – 65 Lakh</option>
                          <option value="PKR 65 Lakh – 95 Lakh">PKR 65 Lakh – 95 Lakh</option>
                          <option value="PKR 95 Lakh – 1.85 Crore">PKR 95 Lakh – 1.85 Crore</option>
                          <option value="PKR 2.20 Crore – 4.50 Crore">PKR 2.20 Crore – 4.50 Crore</option>
                          <option value="PKR 6.50 Crore – 14+ Crore">PKR 6.50 Crore – 14+ Crore</option>
                          <option value="PKR 18+ Crore (Commercial Broadway)">PKR 18+ Crore (Commercial Broadway)</option>
                        </select>
                      </div>
                    </div>

                    {/* Notes */}
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-2">
                        Specific Requirements / Inquiries
                      </label>
                      <textarea
                        rows={3}
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder="Specify if you are looking to buy, sell, or exchange files (e.g. MGH 10 Marla file sell, DHA 9 Prism plot allocation)."
                        className="w-full px-4 py-3 rounded-lg bg-white border border-slate-300 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 disabled:opacity-60"
                    >
                      {submitting ? (
                        <span>Processing Inquiry...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4 text-amber-400" />
                          <span>Submit Inquiry to Co-Founders Desk</span>
                        </>
                      )}
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
