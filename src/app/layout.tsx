import type { Metadata } from "next";
import "./globals.css";
import { LeadProvider } from "@/context/LeadContext";
import { COMPANY_INFO } from "@/lib/data";
import DualFounderWhatsAppSpeedDial from "@/components/DualFounderWhatsAppSpeedDial";

export const metadata: Metadata = {
  metadataBase: new URL(COMPANY_INFO.websiteUrl),
  title: {
    default: `${COMPANY_INFO.name} | Property • Investment • Files`,
    template: `%s | ${COMPANY_INFO.name}`,
  },
  description: `${COMPANY_INFO.bio} ${COMPANY_INFO.tagline}`,
  keywords: [
    "Property Files Network",
    "propertyfilesnetwork.com",
    "MGH Affidavit Files",
    "Mangla Garrison Housing Pakistan",
    "DHA Lahore Property Files",
    "DHA Lahore Phase 6",
    "DHA Lahore Phase 8 Broadway Commercial",
    "DHA Lahore Phase 9 Prism",
    "DHA Lahore Phase 10 Allocation Files",
    "M Talha Cheema",
    "M Daud Ali Lashari",
    "Lahore real estate advisory",
    "Mirpur Azad Kashmir real estate",
    "Overseas Pakistani real estate investment",
  ],
  authors: [{ name: COMPANY_INFO.name, url: COMPANY_INFO.websiteUrl }],
  creator: COMPANY_INFO.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: COMPANY_INFO.websiteUrl,
    siteName: COMPANY_INFO.name,
    title: `${COMPANY_INFO.name} | Smart Deals, Trusted Services & Secure Investments`,
    description: COMPANY_INFO.bio,
    images: [
      {
        url: "/images/property-files-network-logo.jpg",
        width: 800,
        height: 800,
        alt: `${COMPANY_INFO.name} - ${COMPANY_INFO.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${COMPANY_INFO.name} | Property | Investment | Files`,
    description: COMPANY_INFO.bio,
    images: ["/images/property-files-network-logo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: COMPANY_INFO.name,
    url: COMPANY_INFO.websiteUrl,
    logo: `${COMPANY_INFO.websiteUrl}/images/property-files-network-logo.jpg`,
    image: `${COMPANY_INFO.websiteUrl}/images/property-files-network-logo.jpg`,
    description: COMPANY_INFO.bio,
    telephone: COMPANY_INFO.pakistanPhone,
    email: COMPANY_INFO.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Office No. 98-D, Main Boulevard, DHA Phase 8",
      addressLocality: "Lahore",
      addressRegion: "Punjab",
      postalCode: "54792",
      addressCountry: "PK",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "10:00",
        closes: "19:30",
      },
    ],
    sameAs: [
      COMPANY_INFO.socialLinks.tiktok.url,
      COMPANY_INFO.socialLinks.instagram.url,
      COMPANY_INFO.socialLinks.facebook.url,
      COMPANY_INFO.socialLinks.linkedin.url,
    ],
  };

  return (
    <html lang="en" className="overflow-x-hidden">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-white text-slate-900 antialiased selection:bg-amber-400 selection:text-slate-950 overflow-x-hidden w-full min-h-screen">
        <LeadProvider>
          {children}
          <DualFounderWhatsAppSpeedDial />
        </LeadProvider>
      </body>
    </html>
  );
}
