# Ravi Estate (`raviestate.com`)

> **"Deals in all kinds of properties."**

Full-stack **Next.js (App Router)** and **Tailwind CSS** web application for **Ravi Estate**, a premier real estate advisory and investment marketing firm founded in 2008 in Lahore, Pakistan.

## Architecture & Features

### 1. Multi-Page Corporate Portal
- **Home (`/`)**: Corporate Hero, Value Group Partnership Spotlight, Landmark Pakistan Portfolio, The Ravi Estate Standard (Pillars), Latest Market Intelligence / Blog preview, and Private Advisory Booking Form.
- **About Us (`/about`)**: 18+ years history, leadership & advisory desks (Chaudhry Bilal, Hassan Nawaz, Zainab Raza, Umer Farooq), corporate ethics, and milestone chronology (2008–2026).
- **Pakistan Portfolio (`/portfolio`)**: Full catalog of verified Lahore developments with Value Group:
  - *Green View Executive Apartments* (DHA Phase 5, Lahore)
  - *Value Apartments* (PECO Road, Link Road, Model Town Lahore)
  - *Value Residencies* (Barki Road, Opposite DHA Phase 8 Lahore)
  - *Green View Smart Homes* (DHA Phase 12 EME)
  - *Corporate Tower* (Gulberg III, Lahore)
  - *Value Lahore Organic Farmhouses* (Barki Road, Lahore)
- **Market Intelligence & Blog (`/blog` & `/blog/[slug]`)**: 6 in-depth empirical case studies, financial yield models, and legal manuals on Pakistan real estate:
  1. *DHA Lahore vs. Gulberg Commercial: 10-Year Rental Yield & Capital Appreciation Case Study*
  2. *The Rise of Barki Road: How Organic Farmhouses Became Lahore's Premier Generational Land Bank*
  3. *The Overseas Pakistani Investor's Playbook: Secure Repatriation, Power of Attorney & RDA Protocols*
  4. *File vs. Possession: De-Risking Land Acquisitions in DHA Phase 12 (EME) & Master-Planned Enclaves*
  5. *The Vertical Living Revolution: Why Model Town Link Road & PECO Road Outperform Suburban Sprawl*
  6. *The 7-Step Property Due Diligence Checklist for Punjab: LDA, DHA, and Registry Verifications*
- **Contact (`/contact`)**: Lahore offices (DHA Phase 5 & Gulberg III), hotline (+92 300 4154156), WhatsApp direct, email desk, and Investor FAQs.
- **Official Dossier Generator**: Client-side binary PDF generator for the official Pakistan Portfolio Investment Dossier.

### 2. Internal CRM Pipeline Dashboard (`/crm`)
- Role-based lead tracking for sales managers and desk leads.
- Live KPI analytics header (Total Inbound Inquiries, Conversion Rate, Overseas Diaspora Leads, Total Pipeline Value in PKR Crores).
- Interactive 4-stage Kanban pipeline (*New Inquiries*, *Qualified & Profiled*, *Consultation / Site Visit*, *Deal Closed / Executed*) with drag-and-drop, quick stage advance, and lead notes history.

### 3. SEO & Speed Optimization
- Dynamic `sitemap.ts` and `robots.ts`.
- OpenGraph & Twitter Card metadata across all routes.
- Schema.org JSON-LD structured data (`RealEstateAgent`, `Organization`, `BlogPosting`).
- Lightweight `IntersectionObserver` scroll animations (`ScrollReveal`).

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.
