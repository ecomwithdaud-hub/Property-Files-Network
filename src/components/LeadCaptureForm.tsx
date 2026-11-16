"use client";

import React, { useState, useEffect } from "react";
import {
  Send,
  CheckCircle2,
  Phone,
  ShieldCheck,
  Building2,
  ArrowRight,
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
  const [propertyCategory, setPropertyCategory] = useState<PropertyCategory>(
    "MGH Affidavit Files"
  );
  const [specificProject, setSpecificProject] = useState(
    "Mangla Garrison Housing (MGH Pakistan)"
  );
  const [notes, setNotes] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submittedLead, setSubmittedLead] = useState<Lead | null>(null);

  useEffect(() => {
    if (preselectedProjectForInquiry) {
      setSpecificProject(preselectedProjectForInquiry);
      if (preselectedProjectForInquiry.includes("Mangla") || preselectedProjectForInquiry.includes("MGH")) {
        setPropertyCategory("MGH Affidavit Files");
      } else if (preselectedProjectForInquiry.includes("Broadway")) {
        setPropertyCategory("Commercial Broadway Plazas");
      } else {
        setPropertyCategory("DHA Lahore Property Files");
      }
    }
  }, [preselectedProjectForInquiry]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName.trim() || !phone.trim()) return;

    setSubmitting(true);

    const created = await addLead({
      clientName: clientName.trim(),
      phone: phone.trim(),
      email: email.trim() || "unspecified@client.com",
      originType: "Pakistan",
      countryCity: "Lahore, Pakistan",
      propertyCategory,
      specificProject,
      preferredUnitType: propertyCategory,
      budgetDisplay: "Market Rate Consultation",
      estimatedValuePKR: 25,
      assignedAgent: CRM_AGENTS[0],
      stage: "new",
      priority: "Standard",
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
      className="py-10 sm:py-14 bg-white border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Left 5 Columns: Corporate Contact & Desk Info */}
          <div className="lg:col-span-5 space-y-5">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-amber-50 border border-amber-200 text-amber-800 text-[11px] font-bold uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-700" />
                <span>Contact Information</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 leading-tight">
                Connect Directly With{" "}
                <span className="text-amber-700">Our Trading Desk</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Whether buying, selling, or exchanging MGH 1 Kanal &amp; 10 Marla affidavit files or transacting in DHA Lahore Phases 6, 7, 8 Broadway, 9 Prism &amp; 10, submit your inquiry below for instant verified rates.
              </p>
            </div>

            {/* Direct Contact Card */}
            <div className="p-4 sm:p-5 rounded-xl bg-slate-900 text-white space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Head Office &amp; Hotlines
              </div>

              <div className="space-y-2 text-xs border-t border-slate-800 pt-2">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Trading Desk:</span>
                  <a
                    href={`tel:${COMPANY_INFO.pakistanPhoneRaw}`}
                    className="font-bold text-white hover:text-amber-400"
                  >
                    {COMPANY_INFO.pakistanPhone}
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Advisory:</span>
                  <a
                    href={`tel:${COMPANY_INFO.secondaryPhoneRaw}`}
                    className="font-bold text-white hover:text-amber-400"
                  >
                    {COMPANY_INFO.secondaryPhone}
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Email:</span>
                  <span className="text-slate-200">{COMPANY_INFO.email}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Address:</span>
                  <span className="text-slate-200 text-right">
                    98-D Main Blvd, DHA Phase 8, Lahore
                  </span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={`https://wa.me/923234304259?text=${encodeURIComponent(
                    "Hello Property Files Network, I would like to consult on property files and current rates."
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2.5 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs text-center flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>WhatsApp Trading Desk</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right 7 Columns: Compact Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-5 sm:p-7 rounded-xl bg-slate-50 border border-slate-200">
              {submittedLead ? (
                <div className="text-center py-6 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 border border-emerald-300 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>

                  <div className="space-y-1">
                    <span className="text-xs uppercase font-bold tracking-wider text-emerald-700">
                      Inquiry Received
                    </span>
                    <h3 className="text-xl font-serif font-bold text-slate-900">
                      Thank You, {submittedLead.clientName}
                    </h3>
                    <p className="text-xs text-slate-600 max-w-md mx-auto">
                      Our Co-Founders have logged your inquiry for {submittedLead.specificProject} and will reach you at {submittedLead.phone} shortly.
                    </p>
                  </div>

                  <button
                    onClick={resetForm}
                    className="px-4 py-2 rounded-lg bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="border-b border-slate-200 pb-3">
                    <h3 className="text-base font-serif font-bold text-slate-900">
                      Quick Inquiry &amp; File Rate Request
                    </h3>
                    <p className="text-xs text-slate-500">
                      Fill out this 30-second form to receive official rates &amp; verification details.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-700">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={clientName}
                        onChange={(e) => setClientName(e.target.value)}
                        placeholder="e.g. Tariq Mehmood"
                        className="w-full px-3 py-2 rounded-lg bg-white border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-amber-600"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-700">
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. +92 300 1234567"
                        className="w-full px-3 py-2 rounded-lg bg-white border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-amber-600"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-700">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@example.com"
                        className="w-full px-3 py-2 rounded-lg bg-white border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-amber-600"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-700">
                        Society of Interest
                      </label>
                      <select
                        value={specificProject}
                        onChange={(e) => setSpecificProject(e.target.value)}
                        className="w-full px-3 py-2 rounded-lg bg-white border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-amber-600"
                      >
                        <option value="Mangla Garrison Housing (MGH Pakistan)">
                          MGH Mangla (1 Kanal / 10 Marla Waterfront)
                        </option>
                        <option value="DHA Lahore Phase 6">
                          DHA Lahore Phase 6 (Raya &amp; Possession)
                        </option>
                        <option value="DHA Lahore Phase 8 Broadway">
                          DHA Lahore Phase 8 Broadway Commercial
                        </option>
                        <option value="DHA Lahore Phase 9 Prism">
                          DHA Lahore Phase 9 Prism (16 Sectors)
                        </option>
                        <option value="DHA Lahore Phase 10">
                          DHA Lahore Phase 10 (Allocation Files)
                        </option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-700">
                      Message / Requirement (Optional)
                    </label>
                    <textarea
                      rows={2}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="e.g. Inquiring about 1 Kanal MGH affidavit file purchase or exchange."
                      className="w-full px-3 py-2 rounded-lg bg-white border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-amber-600 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-2.5 px-4 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors disabled:opacity-50"
                  >
                    <Send className="w-3.5 h-3.5 text-amber-400" />
                    <span>
                      {submitting ? "Transmitting..." : "Submit Inquiry to Advisory Desk"}
                    </span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
