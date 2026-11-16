import { COMPANY_INFO, PAKISTAN_PORTFOLIO } from "./data";

/**
 * Generates an official, corporate PDF 1.4 binary document containing the
 * Property Files Network Societies & Property Files Investment Dossier
 * and triggers a browser file download.
 */
export function downloadOfficialBrochurePDF() {
  const linesPage = [
    "PROPERTY FILES NETWORK  |  propertyfilesnetwork.com",
    "Tagline: Property | Investment | Files — Smart Deals, Trusted Services & Secure Investments.",
    "OFFICIAL PAKISTAN REAL ESTATE & PROPERTY FILES INVESTMENT DOSSIER",
    "==========================================================================",
    "CO-FOUNDERS: M TALHA CHEEMA & M DAUD ALI LASHARI",
    `Head Office: ${COMPANY_INFO.headOffice}`,
    `Trading Desk: ${COMPANY_INFO.pakistanPhone}  |  Advisory: ${COMPANY_INFO.secondaryPhone}`,
    `Email: ${COMPANY_INFO.email}  |  Languages: English, Urdu & Punjabi`,
    "--------------------------------------------------------------------------",
    "1. MANGLA GARRISON HOUSING (MGH PAKISTAN)",
    "   - Location: Mangla Dam Reservoir, Mirpur & Jhelum Border",
    "   - Specialty: Buying, Selling & Exchanging MGH 1 Kanal & 10 Marla Affidavit Files",
    "   - Amenities: Army Water Sports Club, Boating, Golf Club, Horse Riding & 5-Star Resort",
    "   - Indicative File / Villa Price: PKR 35 Lakh – 1.85 Crore",
    "--------------------------------------------------------------------------",
    "2. DHA LAHORE PHASE 6",
    "   - Location: Main Boulevard & Bedian Road Axis, Ring Road Nawaz Sharif Interchange",
    "   - Specialty: 10 Marla, 1 Kanal & 2 Kanal Residential Plots & CCA Commercial Plazas",
    "   - Amenities: Defence Raya 18-Hole Championship Golf Course, CCA 1 & 2 Retail",
    "   - Indicative Price: PKR 4.50 Crore – 22.00 Crore",
    "--------------------------------------------------------------------------",
    "3. DHA LAHORE PHASE 8 (BROADWAY COMMERCIAL)",
    "   - Location: Facing Allama Iqbal International Airport & Ring Road, DHA Phase 8",
    "   - Specialty: 200ft Wide Commercial Broadway, 4 & 8 Marla Commercial Plazas",
    "   - Amenities: Multinational Banking HQs, Flagship Corporate Plazas, 12.8% Rental Yield",
    "   - Indicative Commercial Price: PKR 6.50 Crore – 28.00 Crore",
    "--------------------------------------------------------------------------",
    "4. DHA LAHORE PHASE 9 PRISM",
    "   - Location: Between Ferozepur & Bedian Road, DHA Ring Road Interchange",
    "   - Specialty: 40,000+ Kanals across 16 Sectors (A to R), Balloted & Allocation Files",
    "   - Amenities: 150ft & 120ft Express Boulevards, Mega Themed Park & DHA Sports Complex",
    "   - Indicative Price: PKR 65 Lakh – 3.80 Crore",
    "--------------------------------------------------------------------------",
    "5. DHA LAHORE PHASE 10",
    "   - Location: Southern Growth Corridor along Bedian Road & Southern Ring Road",
    "   - Specialty: Allocation Files & Affidavit Files (5M, 10M, 1 Kanal & 2 Kanal)",
    "   - Amenities: Proposed 300ft Grand Highway, Smart City Infrastructure & High Multiplier",
    "   - Indicative File Price: PKR 32 Lakh – 1.35 Crore",
    "==========================================================================",
    "LEGAL COMPLIANCE & INVESTOR ASSURANCE:",
    "- 100% Genuine File Verification directly with DHA Lahore and MGH Directorates",
    "- Prompt biometric execution, legal title vetting, and zero-encumbrance guarantees",
    "- Overseas Diaspora Desk: Roshan Digital Account (RDA) & Embassy Special PoA routing",
    `Office: ${COMPANY_INFO.headOffice}`,
  ];

  // Helper to escape PDF strings
  const sanitize = (text: string) =>
    text.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");

  // PDF 1.4 Binary Generator
  let streamContent = "BT\n/F1 14 Tf\n40 765 Td\n";
  streamContent += `(${sanitize(linesPage[0])}) Tj\nET\n`;

  streamContent += "BT\n/F2 9 Tf\n40 750 Td\n";
  streamContent += `(${sanitize(linesPage[1])}) Tj\nET\n`;

  streamContent += "BT\n/F1 11 Tf\n40 735 Td\n";
  streamContent += `(${sanitize(linesPage[2])}) Tj\nET\n`;

  let y = 715;
  streamContent += "BT\n/F2 8.5 Tf\n";
  for (let i = 3; i < linesPage.length; i++) {
    streamContent += `40 ${y} Td\n(${sanitize(linesPage[i])}) Tj\n`;
    y -= 14;
    if (linesPage[i].startsWith("---") || linesPage[i].startsWith("===")) {
      y -= 2;
    }
  }
  streamContent += "ET\n";

  const streamBytes = new TextEncoder().encode(streamContent);
  const streamLength = streamBytes.length;

  const objects: string[] = [
    // 1: Catalog
    `1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n`,
    // 2: Pages
    `2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n`,
    // 3: Page
    `3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Contents 4 0 R /Resources << /Font << /F1 5 0 R /F2 6 0 R >> >> >>\nendobj\n`,
    // 4: Stream
    `4 0 obj\n<< /Length ${streamLength} >>\nstream\n${streamContent}endstream\nendobj\n`,
    // 5: Font F1 (Helvetica-Bold)
    `5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>\nendobj\n`,
    // 6: Font F2 (Helvetica)
    `6 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj\n`,
  ];

  let pdf = "%PDF-1.4\n";
  const offsets: number[] = [0];
  for (const obj of objects) {
    offsets.push(pdf.length);
    pdf += obj;
  }

  const xrefStart = pdf.length;
  pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
  for (let i = 1; i <= objects.length; i++) {
    pdf += `${String(offsets[i]).padStart(10, "0")} 00000 n \n`;
  }
  pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefStart}\n%%EOF`;

  const blob = new Blob([pdf], { type: "application/pdf" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "Property-Files-Network-Pakistan-Portfolio-Investment-Dossier.pdf";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 3000);
}

export { PAKISTAN_PORTFOLIO };
