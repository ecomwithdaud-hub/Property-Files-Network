import { COMPANY_INFO, PAKISTAN_PORTFOLIO } from "./data";

/**
 * Generates an official, corporate PDF 1.4 binary document containing the
 * Ravi Estate & Value Group Pakistan Portfolio Investment Dossier
 * and triggers a browser file download.
 */
export function downloadOfficialBrochurePDF() {
  const linesPage = [
    "RAVI ESTATE  |  raviestate.com  |  Deals in all kinds of properties.",
    "OFFICIAL PAKISTAN REAL ESTATE INVESTMENT DOSSIER",
    "==========================================================================",
    "DEVELOPMENT PARTNER: VALUE GROUP  |  ADVISORY DESK: RAVI ESTATE",
    "Head Office: Main Boulevard, DHA Phase 5 / Gulberg Advisory Desk, Lahore",
    "Direct Phone & WhatsApp: +92 300 4154156  |  Email: advisory@raviestate.com",
    "--------------------------------------------------------------------------",
    "1. GREEN VIEW EXECUTIVE APARTMENTS (DHA Phase 5, Lahore)",
    "   - Location: Prime DHA Phase 5 adjacent to Lahore Ring Road",
    "   - Offering: 1, 2 & 3 Bed Luxury Suites with travertine double-height lobby",
    "   - Track Record: 9.5% Net Rental Yield + 110% Capital Appreciation",
    "   - Price Range: Starting from PKR 2.85 Crore",
    "--------------------------------------------------------------------------",
    "2. VALUE APARTMENTS (PECO Road, Link Road, Model Town Lahore)",
    "   - Location: Nexus of Model Town Link Road & PECO Road commercial retail hub",
    "   - Offering: Studio, 1 & 2 Bed Urban Serviced Apartments",
    "   - Track Record: 100% Sold Out & Delivered with High Occupancy",
    "   - Price Range: Starting from PKR 1.65 Crore",
    "--------------------------------------------------------------------------",
    "3. VALUE RESIDENCIES (Barki Road, Opposite DHA Phase 8 Lahore)",
    "   - Location: Direct frontage opposite DHA Phase 8 main boulevard",
    "   - Offering: Designer villas & gated residential plots",
    "   - Track Record: 5 minutes to Allama Iqbal International Airport",
    "   - Price Range: Starting from PKR 3.40 Crore",
    "--------------------------------------------------------------------------",
    "4. GREEN VIEW SMART HOMES (DHA Phase 12 EME Sector, Lahore)",
    "   - Location: Secure Canal Bank corridor in DHA Phase 12 (EME)",
    "   - Offering: Turnkey IoT-enabled smart villas & townhouses",
    "   - Features: Solar net-metering provision & smart app automation",
    "   - Price Range: Starting from PKR 2.95 Crore with construction milestones",
    "--------------------------------------------------------------------------",
    "5. CORPORATE TOWER (Gulberg III, Lahore)",
    "   - Location: Central Business District of Gulberg near Main Boulevard",
    "   - Offering: Grade-A Corporate Offices, retail showrooms & penthouses",
    "   - Track Record: 11% Commercial lease yield with institutional tenants",
    "   - Price Range: Starting from PKR 4.50 Crore",
    "--------------------------------------------------------------------------",
    "6. VALUE LAHORE ORGANIC FARMHOUSES (Barki Road, Lahore)",
    "   - Location: Fertile country estates 15 mins from DHA Phase 6 & Phase 8",
    "   - Offering: 2, 4 & 8 Kanal bespoke organic farm parcels with sweet water",
    "   - Track Record: Generational land banking & private pollution-free retreat",
    "   - Price Range: Starting from PKR 6.75 Crore",
    "==========================================================================",
    "LEGAL DUE DILIGENCE & REPATRIATION GUARANTEE:",
    "  * 100% Title Verification before Sub-Registrar, LDA, and DHA authorities",
    "  * Full support for Overseas Pakistanis via Roshan Digital Account (RDA)",
    "  * Special Power of Attorney (PoA) attestation and legal escrow management",
    "==========================================================================",
    `Pakistan Advisory: ${COMPANY_INFO.pakistanPhone}  |  Web: ${COMPANY_INFO.domain}`,
    `Instagram: ${COMPANY_INFO.instagramHandle}  |  Facebook: ${COMPANY_INFO.facebookName}`,
  ];

  const escapePdfText = (str: string) =>
    str.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");

  let streamContent = "BT\n/F1 10.5 Tf\n14.5 TL\n42 795 Td\n";
  linesPage.forEach((line, idx) => {
    if (idx === 0 || idx === 1 || idx === 3) {
      streamContent += `/F2 11.5 Tf\n(${escapePdfText(line)}) Tj\nT*\n/F1 9.2 Tf\n`;
    } else {
      streamContent += `(${escapePdfText(line)}) Tj\nT*\n`;
    }
  });
  streamContent += "ET";

  const objects: string[] = [];
  objects.push("1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n");
  objects.push("2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n");
  objects.push(
    "3 0 obj\n<< /Type /Page /Parent 2 0 R /Resources << /Font << /F1 4 0 R /F2 5 0 R >> >> /MediaBox [0 0 595 842] /Contents 6 0 R >>\nendobj\n"
  );
  objects.push(
    "4 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj\n"
  );
  objects.push(
    "5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>\nendobj\n"
  );
  objects.push(
    `6 0 obj\n<< /Length ${streamContent.length} >>\nstream\n${streamContent}\nendstream\nendobj\n`
  );

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
  a.download = "Ravi-Estate-Pakistan-Portfolio-Investment-Dossier.pdf";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 3000);
}

export { PAKISTAN_PORTFOLIO };
