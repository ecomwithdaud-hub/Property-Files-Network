import type { Metadata } from "next";
import "./globals.css";
import { LeadProvider } from "@/context/LeadContext";
import { COMPANY_INFO } from "@/lib/data";

export const metadata: Metadata = {
  metadataBase: new URL(COMPANY_INFO.websiteUrl),
  title: {
    default: `${COMPANY_INFO.name} | Lahore Real Estate Advisory & Property Investments`,
    template: `%s | ${COMPANY_INFO.name}`,
  },
  description:
    `${COMPANY_INFO.name} (${COMPANY_INFO.domain}) — 'Deals in all kinds of properties.' Premier real estate advisory and investment marketing firm in Lahore, Pakistan. Official partner of Value Group developments across DHA Phase 5, Gulberg III, Model Town, and Barki Road.`,
  keywords: [
    "Property Files Network",
    "propertyfilesnetwork.com",
    "Lahore real estate advisory",
    "DHA Lahore property consultants",
    "Gulberg commercial office space",
    "Value Group Lahore",
    "Green View Executive DHA 5",
    "Corporate Tower Gulberg",
    "Barki Road organic farmhouses",
    "Overseas Pakistani real estate investment",
    "Punjab property due diligence",
    "Pakistan property yield analysis",
  ],
  authors: [{ name: COMPANY_INFO.name, url: COMPANY_INFO.websiteUrl }],
  creator: COMPANY_INFO.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: COMPANY_INFO.websiteUrl,
    siteName: COMPANY_INFO.name,
    title: `${COMPANY_INFO.name} | Institutional Real Estate Advisory in Lahore, Pakistan`,
    description:
      "Premier property advisory firm advising high-net-worth families, institutions, and overseas Pakistanis across verified residential, commercial, and agricultural developments in Lahore.",
    images: [
      {
        url: "/images/property-files-network-logo.jpg",
        width: 800,
        height: 800,
        alt: `${COMPANY_INFO.name} - Deals in all kinds of properties`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${COMPANY_INFO.name} | Lahore Property Advisory & Investment Marketing`,
    description:
      "Official advisory and marketing partner for Value Group developments in Lahore, Pakistan.",
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
    description:
      `Premier real estate advisory & marketing company established in ${COMPANY_INFO.foundedYear} in Lahore, Pakistan.`,
    telephone: COMPANY_INFO.pakistanPhone,
    email: COMPANY_INFO.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Main Boulevard, DHA Phase 5",
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
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-white text-slate-900 antialiased selection:bg-amber-400 selection:text-slate-950">
        <LeadProvider>{children}</LeadProvider>
      </body>
    </html>
  );
}
