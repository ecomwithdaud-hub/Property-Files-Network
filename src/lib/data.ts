export type PipelineStage =
  | "new"
  | "contacted"
  | "consultation"
  | "closed";

export type LeadOrigin = "Pakistan" | "Overseas Pakistani Diaspora";

export type PropertyCategory =
  | "Luxury High-Rise Apartments"
  | "Commercial Plazas & Corporate Towers"
  | "Smart Homes & Turnkey Villas"
  | "Organic Farmhouses & Agri-Estates"
  | "DHA & Master-Planned Land Banking";

export interface Lead {
  id: string;
  clientName: string;
  phone: string;
  email: string;
  originType: LeadOrigin;
  countryCity: string;
  propertyCategory: PropertyCategory;
  specificProject: string;
  preferredUnitType: string;
  budgetDisplay: string;
  estimatedValuePKR: number; // in millions PKR
  assignedAgent: string;
  stage: PipelineStage;
  priority: "High" | "VIP" | "Standard";
  notes: string[];
  createdAt: string;
  lastContacted: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  location: string;
  city: string;
  status: "Completed & Delivered" | "Ongoing Development" | "Ready for Possession";
  type: "Luxury Apartments" | "Smart Homes" | "Commercial Corporate" | "Organic Farmhouses" | "Gated Residencies";
  partnership: string;
  completionYear: string;
  unitsInfo: string;
  startingPrice: string;
  roiHighlight: string;
  description: string;
  highlights: string[];
  architecturalStyle: string;
  badgeText: string;
  amenities: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  category: "Market Analysis & Yields" | "Land Banking & Luxury" | "Overseas Advisory" | "Due Diligence & Legal" | "Urban Development" | "Investor Education";
  readTime: string;
  publishDate: string;
  author: {
    name: string;
    role: string;
  };
  metrics?: { label: string; value: string; note?: string }[];
  tags: string[];
  content: {
    sectionTitle?: string;
    paragraphs: string[];
    callout?: { title: string; text: string };
  }[];
}

export const COMPANY_INFO = {
  name: "Property Files Network",
  shortName: "Property Files Network",
  domain: "propertyfilesnetwork.com",
  websiteUrl: "https://propertyfilesnetwork.com",
  tagline: "Deals in all kinds of properties.",
  foundedYear: "2008",
  pakistanPhone: "+92 300 4154156",
  pakistanPhoneRaw: "+923004154156",
  whatsappUrl: "https://wa.me/923004154156",
  email: "advisory@propertyfilesnetwork.com",
  // Official Social Media Links
  tiktokUrl: "https://www.tiktok.com/@propertyfilesnetwork",
  instagramUrl: "https://www.instagram.com/propertyfilesnetwork/",
  facebookUrl: "https://www.facebook.com/profile.php?id=61595992805673",
  linkedinUrl: "https://www.linkedin.com/company/property-files-network",
  tiktokHandle: "@propertyfilesnetwork",
  instagramHandle: "@propertyfilesnetwork",
  facebookName: "Property Files Network",
  linkedinName: "Property Files Network",
  socialLinks: {
    tiktok: {
      url: "https://www.tiktok.com/@propertyfilesnetwork",
      handle: "@propertyfilesnetwork",
    },
    instagram: {
      url: "https://www.instagram.com/propertyfilesnetwork/",
      handle: "@propertyfilesnetwork",
    },
    facebook: {
      url: "https://www.facebook.com/profile.php?id=61595992805673",
      handle: "Property Files Network",
    },
    linkedin: {
      url: "https://www.linkedin.com/company/property-files-network",
      handle: "Property Files Network",
    },
  },
  headOffice: "Main Boulevard, DHA Phase 5 / Gulberg Advisory Desk, Lahore, Pakistan",
  officeHours: "Monday – Saturday: 10:00 AM – 7:30 PM (PKT)",
};

export const PAKISTAN_PORTFOLIO: PortfolioProject[] = [
  {
    id: "green-view-executive-dha5",
    title: "Green View Executive Apartments",
    location: "DHA Phase 5, Lahore",
    city: "Lahore",
    status: "Completed & Delivered",
    type: "Luxury Apartments",
    partnership: "Value Group × Property Files Network",
    completionYear: "Delivered • High Occupancy",
    unitsInfo: "1, 2 & 3 Bed Executive Suites",
    startingPrice: "PKR 2.85 Crore",
    roiHighlight: "9.5% Annual Rental Yield + 110% Capital Appreciation",
    description:
      "Positioned in the premier residential corridor of DHA Phase 5 Lahore, Green View Executive Apartments establishes a benchmark for vertical luxury living. Designed with high-ceiling travertine entrance lobbies, continuous power generation, and designated underground resident parking.",
    highlights: [
      "Immediate proximity to DHA Phase 5 Commercial Avenue and Lahore Ring Road",
      "Double-height executive reception lobby and resident business lounge",
      "Dedicated multi-tier basement parking with digital RFID access",
      "High tenant demand from corporate executives and multinational consultants",
      "24/7 dedicated facility management and dual redundant standby generators",
    ],
    architecturalStyle: "Contemporary Glass & Travertine Facade",
    badgeText: "DHA Phase 5 Landmark",
    amenities: [
      "Standby Power Generators",
      "RFID Parking System",
      "Rooftop Terrace Lounge",
      "High-Speed Passenger & Cargo Elevators",
      "Fire Suppression & BMS",
    ],
  },
  {
    id: "value-apartments-model-town",
    title: "Value Apartments",
    location: "PECO Road, Link Road, Model Town Lahore",
    city: "Lahore",
    status: "Completed & Delivered",
    type: "Luxury Apartments",
    partnership: "Value Group × Property Files Network",
    completionYear: "Completed • Fully Occupied",
    unitsInfo: "Studio, 1 & 2 Bed Urban Apartments",
    startingPrice: "PKR 1.65 Crore",
    roiHighlight: "100% Sold Out • Reliable Rental Income Stream",
    description:
      "Strategically located at the bustling intersection of PECO Road and Model Town Link Road, Value Apartments delivers urban convenience for professionals, young families, and passive income investors seeking prime central Lahore connectivity.",
    highlights: [
      "Direct walking access to Model Town Link Road retail and commercial hub",
      "Earthquake-resistant reinforced concrete engineering by Value Group",
      "High-speed Mitsubishi elevators with automatic rescue devices",
      "Full rental management desk operated by Property Files Network advisory team",
      "High-yield entry-level price point with established occupancy records",
    ],
    architecturalStyle: "Modern Urban Mid-Rise",
    badgeText: "Central Lahore Asset",
    amenities: [
      "Gated Entry with 24/7 Security",
      "Dedicated Sub-Meters",
      "Covered Parking Bay",
      "Maintenance on Call",
      "CCTV Surveillance",
    ],
  },
  {
    id: "value-residencies-barki",
    title: "Value Residencies",
    location: "Barki Road, Opposite DHA Phase 8 Lahore",
    city: "Lahore",
    status: "Ready for Possession",
    type: "Gated Residencies",
    partnership: "Value Group × Property Files Network",
    completionYear: "Ready / Near Possession",
    unitsInfo: "Luxury Villas & Designer Residencies",
    startingPrice: "PKR 3.40 Crore",
    roiHighlight: "Rapid DHA Phase 8 Corridor Appreciation",
    description:
      "Situated directly opposite DHA Phase 8 along the expanding Barki Road corridor, Value Residencies offers peaceful gated community living within a 6-minute drive of Allama Iqbal International Airport and the Lahore Ring Road.",
    highlights: [
      "Direct frontage opposite DHA Phase 8 main entrance boulevard",
      "Fully underground electrification, modern drainage, and paved boulevards",
      "Community clubhouse, landscaped family park, and dedicated security post",
      "High capital growth fueled by surrounding infrastructure expansions",
      "Ideal turnkey option for families relocating from congested urban centers",
    ],
    architecturalStyle: "Neoclassical & Contemporary Gated Enclave",
    badgeText: "Opposite DHA Phase 8",
    amenities: [
      "Underground Electrification",
      "Community Park & Jogging Track",
      "24/7 Gated Security",
      "Sewerage & Water Filtration",
      "Mosque & Commercial Mart",
    ],
  },
  {
    id: "green-view-smart-homes-eme",
    title: "Green View Smart Homes",
    location: "DHA Phase 12 (EME Sector), Lahore",
    city: "Lahore",
    status: "Ongoing Development",
    type: "Smart Homes",
    partnership: "Value Group × Property Files Network",
    completionYear: "Under Active Construction",
    unitsInfo: "IoT-Enabled Smart Villas & Townhouses",
    startingPrice: "PKR 2.95 Crore",
    roiHighlight: "Flexible Milestone Installments • Strong Capital Upside",
    description:
      "Introducing automated residential architecture to DHA Phase 12 (EME Sector). Green View Smart Homes combines energy-conscious building envelopes, rooftop solar compatibility, and voice/smartphone-controlled security and lighting systems.",
    highlights: [
      "Located in the quiet, secure Canal Bank corridor of DHA Phase 12 (EME)",
      "Smart-home automation for climate control, access logs, and energy monitoring",
      "Thermally insulated brickwork and double-glazed soundproof glazing",
      "Customizable milestone installment schedule tailored for working professionals",
      "Backed by Value Group's engineering warranty and structural guarantees",
    ],
    architecturalStyle: "Smart Sustainable Contemporary",
    badgeText: "Smart Living Pioneer",
    amenities: [
      "Smart Mobile App Access",
      "Solar Net-Metering Ready",
      "Biometric Door Locks",
      "Automated Lighting & AC Controls",
      "Canal Road Accessibility",
    ],
  },
  {
    id: "corporate-tower-gulberg",
    title: "Corporate Tower",
    location: "Gulberg III, Lahore",
    city: "Lahore",
    status: "Completed & Delivered",
    type: "Commercial Corporate",
    partnership: "Value Group × Property Files Network",
    completionYear: "Operational Grade-A Commercial Tower",
    unitsInfo: "Corporate Offices, Retail Showrooms & Penthouses",
    startingPrice: "PKR 4.50 Crore",
    roiHighlight: "11% Commercial Lease Yield with Corporate Tenants",
    description:
      "An established commercial high-rise situated in Lahore's central business district of Gulberg. Engineered specifically for corporate headquarters, software technology houses, financial institutions, and premium retail showrooms.",
    highlights: [
      "Prime CBD location within walking distance of Main Boulevard Gulberg",
      "Centralized HVAC infrastructure, fiber-optic backbone, and building management system",
      "Multi-level underground parking with dedicated executive valet zones",
      "Long-term lease agreements with multinational and institutional corporate tenants",
      "Full compliance with Lahore Development Authority (LDA) commercial codes",
    ],
    architecturalStyle: "Grade-A Curtain Wall Commercial Skyscraper",
    badgeText: "Gulberg CBD Commercial",
    amenities: [
      "Central HVAC & Air Handling",
      "Triple Redundant Generators",
      "Executive Boardroom Facilities",
      "Valet Underground Parking",
      "24/7 Monitored Access Control",
    ],
  },
  {
    id: "value-lahore-organic-farmhouses",
    title: "Value Lahore Organic Farmhouses",
    location: "Barki Road, Lahore",
    city: "Lahore",
    status: "Ready for Possession",
    type: "Organic Farmhouses",
    partnership: "Value Group × Property Files Network",
    completionYear: "Mature Developed Estates",
    unitsInfo: "2, 4 & 8 Kanal Bespoke Farm Estates",
    startingPrice: "PKR 6.75 Crore",
    roiHighlight: "Generational Land Banking & Private Sanctuary",
    description:
      "A countryside retreat situated on fertile Barki Road soil, just 15 minutes from DHA Phase 6 and 8. Value Lahore Organic Farmhouses combines mature fruit orchards, private equestrian grounds, and custom resort villas away from city smog.",
    highlights: [
      "Expansive 2 to 8 Kanal parcels with fertile agricultural soil and mature trees",
      "Provisions for private pools, guest courtyards, stables, and organic orchards",
      "High long-term land value appreciation driven by Barki Road development corridor",
      "Clean air sanctuary providing a peaceful weekend escape for Lahore families",
      "Secure gated boundary with private access road and dedicated caretaker staff",
    ],
    architecturalStyle: "Mediterranean & Modern Country Estate",
    badgeText: "Eco-Luxury Sanctuary",
    amenities: [
      "Dedicated Tube Wells & Sweet Water",
      "Private Plantation & Orchards",
      "Secure Gated Perimeter",
      "Wide Paved Approach Road",
      "Underground Power Supply",
    ],
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "dha-lahore-vs-gulberg-commercial-yield-analysis",
    title: "DHA Lahore vs. Gulberg Commercial: 10-Year Rental Yield & Capital Appreciation Case Study",
    subtitle: "A data-driven comparison of commercial office floors in Gulberg III versus commercial plazas in DHA Phase 5 and Phase 6.",
    excerpt:
      "When allocating PKR 50M to 200M in Lahore commercial real estate, investors frequently debate between Gulberg's vertical corporate towers and DHA's commercial plots. We analyze a decade of empirical yield data, tenant retention rates, and capital growth metrics.",
    category: "Market Analysis & Yields",
    readTime: "7 min read",
    publishDate: "November 10, 2026",
    author: {
      name: "Chaudhry Bilal",
      role: "Head of Commercial Advisory, Property Files Network",
    },
    metrics: [
      { label: "Gulberg Corporate Avg Yield", value: "10.5% – 12.0%", note: "Multi-year corporate covenants" },
      { label: "DHA Commercial Plaza Yield", value: "5.5% – 7.2%", note: "Higher capital appreciation offset" },
      { label: "10-Year Gulberg Capital Gain", value: "+210%", note: "Driven by high-rise zoning" },
      { label: "10-Year DHA Capital Gain", value: "+265%", note: "Driven by scarcity of commercial land" },
    ],
    tags: ["Commercial Real Estate", "DHA Lahore", "Gulberg", "Rental Yields", "Case Study"],
    content: [
      {
        sectionTitle: "Executive Summary: The Dual Engine of Lahore Commercial Real Estate",
        paragraphs: [
          "For high-net-worth individuals and corporate treasury funds in Pakistan, commercial real estate in Lahore has historically represented the premier defense against currency depreciation and inflation. However, the investment profiles of Gulberg III and Defence Housing Authority (DHA) could not be more divergent.",
          "While Gulberg delivers immediate, institutional cash flows via high-density Grade-A corporate towers, DHA Lahore generates substantial long-term wealth through land scarcity and prestigious end-user positioning.",
        ],
        callout: {
          title: "The Golden Rule of Lahore Commercial Yields",
          text: "Never judge commercial real estate on square-footage price alone. Lease covenants, tenant creditworthiness, and dedicated building maintenance dictate whether your actual net yield is 11% or reduced to 4% by vacant downtime.",
        },
      },
      {
        sectionTitle: "Case Study 1: The Corporate Floor in Gulberg III",
        paragraphs: [
          "In 2017, an institutional family office advised by Property Files Network acquired an entire 4,200 sq. ft. office floor in a newly commissioned corporate tower on Gulberg III for PKR 48 Million. By securing a 5-year lease with a regional software engineering consultancy at PKR 110/sq. ft. with an escalating 10% annual increment clause, the investor realized an initial gross yield of 11.5%.",
          "By 2026, the capitalized asset value had climbed to PKR 112 Million, while the monthly rental income had expanded to over PKR 920,000, illustrating how vertical density in Gulberg compounds both income and capital reserves simultaneously.",
        ],
      },
      {
        sectionTitle: "Case Study 2: The 4-Marla Commercial Plaza in DHA Phase 5",
        paragraphs: [
          "In comparison, a parallel acquisition of a 4-marla ground+2 commercial plaza in DHA Phase 5 for PKR 52 Million in late 2016 achieved a lower initial cash rental yield of 6.2% when leased to local retail apparel and dining businesses.",
          "Yet, when evaluating total return over the 10-year holding period, DHA Phase 5 experienced exceptional capital appreciation, with recent comparable transactions closing near PKR 145 Million. The conclusion? Investors prioritizing quarterly dividend cash flow should anchor in Gulberg, whereas those pursuing multi-generational capital preservation should favor DHA.",
        ],
      },
      {
        sectionTitle: "Strategic Recommendations for Prospective Investors",
        paragraphs: [
          "1. Inspect LDA vs DHA Building By-Laws: High-rise regulations in Gulberg permit superior Floor Area Ratios (FAR), allowing developers to build vertical parking and high-efficiency floorplates.",
          "2. Scrutinize Parking Ratios: Grade-A corporate tenants require at least 1 parking bay per 500 sq. ft. Commercial buildings lacking dedicated basement valet arrangements consistently suffer from extended tenant vacancy.",
          "3. Plan Around Tax Implications: Ensure advance tax deductions under Section 7E and rental income withholding certificates are modeled prior to executing commercial sale deeds.",
        ],
      },
    ],
  },
  {
    slug: "barki-road-organic-farmhouses-land-banking-lahore",
    title: "The Rise of Barki Road: How Organic Farmhouses Became Lahore's Premier Generational Land Bank",
    subtitle: "Why discerning families are transitioning from dense urban sectors to 2-to-8 Kanal agricultural estates opposite DHA Phase 8.",
    excerpt:
      "As urban Lahore expands eastwards toward the BRB Canal, Barki Road has transformed into a prestigious corridor for luxury eco-estates and long-term land banking. We analyze soil fertility, infrastructure milestones, and capital trajectory.",
    category: "Land Banking & Luxury",
    readTime: "6 min read",
    publishDate: "November 04, 2026",
    author: {
      name: "Hassan Nawaz",
      role: "Director of Land Acquisitions, Property Files Network",
    },
    metrics: [
      { label: "Barki Road 5-Year Land Value Growth", value: "+145%", note: "Post DHA Phase 8 expansion" },
      { label: "Typical Parcel Size", value: "2 – 8 Kanals", note: "Permits private villas & orchards" },
      { label: "Distance to DHA Phase 6 & 8", value: "10 – 15 Mins", note: "Direct dual-carriageway access" },
      { label: "Water Quality Index", value: "Sub-surface Sweet", note: "Optimal for organic agriculture" },
    ],
    tags: ["Farmhouses", "Barki Road", "Land Banking", "Lahore Real Estate", "Generational Wealth"],
    content: [
      {
        sectionTitle: "The Urban Shift: From Concrete Density to Open Sky Living",
        paragraphs: [
          "Over the past seven years, Lahore's seasonal winter smog and urban densification have shifted consumer psychology among high-net-worth families. Where previous generations invested exclusively in 1-Kanal or 2-Kanal houses within inner city sectors, today's prominent business families prioritize breathable, secluded, multi-Kanal country estates.",
          "Barki Road stands distinct because it is not an isolated rural territory; it sits directly across from DHA Phase 8 and connects effortlessly to Allama Iqbal International Airport within 12 minutes.",
        ],
        callout: {
          title: "Dual-Utility Land Assets",
          text: "An organic farmhouse on Barki Road serves as both an immediate lifestyle sanctuary for family weekend gatherings and a massive strategic land bank positioned squarely in Lahore's future expansion corridor.",
        },
      },
      {
        sectionTitle: "Value Lahore Organic Farmhouses: A Case Study in Land Banking",
        paragraphs: [
          "Developed under the Value Group and advised by Property Files Network, the Value Lahore Organic Farmhouses enclave exemplifies this philosophy. Buyers acquire cleared, fertile land parcels of 2, 4, or 8 Kanals complete with sweet-water tube well access, secure boundary perimeters, and paved access roads.",
          "Early adopters who purchased land here at PKR 1.8 Crore per Kanal in 2019 have witnessed parcels surpass PKR 3.8 Crore per Kanal in 2026, driven by the widening of Barki Road and the delivery of surrounding residential infrastructure.",
        ],
      },
      {
        sectionTitle: "Legal Due Diligence Specific to Punjab Farmhouse Land",
        paragraphs: [
          "Purchasing agricultural or semi-urban land requires meticulous attention beyond standard residential transfer files. The Property Files Network legal advisory desk verifies: (1) Intiqal (mutation) records in the local Revenue Patwarkhana, (2) Aks Shajra to confirm exact boundary demarcation, and (3) Non-encumbrance certificates ensuring no agricultural bank loans or court stays exist on the Khasra numbers.",
        ],
      },
    ],
  },
  {
    slug: "overseas-pakistani-real-estate-investment-playbook",
    title: "The Overseas Pakistani Investor's Playbook: Secure Repatriation, Power of Attorney & RDA Protocols",
    subtitle: "A practical legal and banking blueprint for non-resident Pakistanis investing in Lahore properties from the UK, UAE, USA, and Canada.",
    excerpt:
      "Navigating property acquisition in Pakistan from abroad demands airtight legal mechanisms. This guide demystifies Special Power of Attorney attestation, State Bank repatriation protocols, Roshan Digital Accounts, and developer verification.",
    category: "Overseas Advisory",
    readTime: "8 min read",
    publishDate: "October 28, 2026",
    author: {
      name: "Zainab Raza",
      role: "Lead Diaspora Advisory Consultant, Property Files Network",
    },
    metrics: [
      { label: "Annual Overseas Remittances into Real Estate", value: "$3.8B+", note: "National diaspora estimate" },
      { label: "RDA Repatriation Clearance Time", value: "3 – 5 Days", note: "Via State Bank authorized channels" },
      { label: "Dispute Mitigation with Direct Registry", value: "99.4%", note: "When utilizing licensed legal escrow" },
    ],
    tags: ["Overseas Pakistanis", "Legal Advisory", "Roshan Digital Account", "Power of Attorney", "FBR Taxes"],
    content: [
      {
        sectionTitle: "The Diaspora Dilemma: Ambition vs. Vulnerability",
        paragraphs: [
          "For millions of expatriate Pakistanis working across London, Dubai, Toronto, and North America, real estate back home is more than an asset class—it represents an emotional anchor and a primary retirement objective. However, informal transactions, reliance on unqualified relatives, and opaque developer marketing have created apprehension.",
          "The modern Pakistani real estate ecosystem has matured. With State Bank of Pakistan reforms, the Roshan Digital Account (RDA) framework, and professional advisory networks like Property Files Network, investing from abroad can be as transparent and legally secure as buying property in Manchester or Dallas.",
        ],
      },
      {
        sectionTitle: "Step 1: Banking Channels & Fund Repatriation Protections",
        paragraphs: [
          "Always route property funds through designated Roshan Digital Accounts or direct banking channels tagged with proper purpose codes (e.g., Real Estate Purchase). Maintaining foreign exchange encashment certificates (PRCs) is vital. Should you choose to liquidate the asset in future years, State Bank regulations permit full capital and profit repatriation when original inward remittances were documented through banking channels.",
        ],
        callout: {
          title: "Avoid Cash or Unofficial Hundi/Hawala Channels",
          text: "Failing to document transactions through recognized commercial banking channels leaves you vulnerable to FBR audits under Section 111 and completely eliminates legal rights to repatriate proceeds abroad.",
        },
      },
      {
        sectionTitle: "Step 2: Executing Special Power of Attorney (PoA) Correctly",
        paragraphs: [
          "If you cannot physically travel to Lahore to execute the transfer deed before the Sub-Registrar or the DHA Transfer Officer, execute a specific 'Special Power of Attorney' (never a General Power of Attorney).",
          "The PoA must identify the exact Khasra, Plot, or Unit Number, be notarized, attested by the Pakistani High Commission / Consulate in your host country, and subsequently registered at the Ministry of Foreign Affairs (MOFA) in Pakistan before the District Collector registers it.",
        ],
      },
    ],
  },
  {
    slug: "file-vs-possession-plots-lahore-risk-management",
    title: "File vs. Possession: De-Risking Land Acquisitions in DHA Phase 12 (EME) & Master-Planned Enclaves",
    subtitle: "The stark reality between speculative ballot files and on-ground demarcated land in Lahore's expanding residential grid.",
    excerpt:
      "Thousands of investors have watched capital remain frozen in speculative unballoted files. We examine the math, time-value of money, and legal ownership difference between paper allocation files and ready-to-build possession land.",
    category: "Due Diligence & Legal",
    readTime: "7 min read",
    publishDate: "October 18, 2026",
    author: {
      name: "Umer Farooq",
      role: "Senior Investment Specialist, Property Files Network",
    },
    metrics: [
      { label: "Unballoted File Realization Time", value: "4 – 8 Years", note: "Subject to land acquisition pacing" },
      { label: "Possession Land Immediate Rental Potential", value: "Ready", note: "Allows immediate construction" },
      { label: "Risk Premium Difference", value: "35% – 50%", note: "File discount vs possession price" },
    ],
    tags: ["Land Files", "Possession Plots", "DHA Phase 12", "Risk Management", "Lahore Real Estate"],
    content: [
      {
        sectionTitle: "The Anatomy of a Real Estate 'File' in Pakistan",
        paragraphs: [
          "A real estate file in Pakistan is not a title deed; it is a contractual right to participate in a future ballot for an unspecified piece of land. While speculative investors made fortunes on files between 2002 and 2014, the post-2018 regulatory landscape has shifted the balance decisively toward on-ground demarcated possession plots.",
          "When developers face protracted litigation, land acquisition bottlenecks, or patwari dispute stays, unballoted file holders absorb the brunt of the delay with zero cash flow.",
        ],
      },
      {
        sectionTitle: "A Tale of Two Investors: 2019 to 2026",
        paragraphs: [
          "Consider Investor A, who allocated PKR 15 Million in 2019 into speculative unballoted files in an unacquired extension phase. By 2026, development delays and pending land acquisition left the file trading at PKR 19 Million—a negative real return after accounting for inflation and currency devaluation.",
          "Conversely, Investor B deployed PKR 18 Million in an on-ground possession plot in DHA Phase 12 (EME Sector). Over the identical period, Investor B constructed a smart rental townhouse (e.g., Green View Smart Homes model) which now yields PKR 140,000 monthly in steady rent and holds an asset valuation exceeding PKR 42 Million.",
        ],
        callout: {
          title: "The Property Files Network Due Diligence Filter",
          text: "We advise our clients never to commit more than 20% of their property portfolio to unballoted files. Always prioritize infrastructure-backed possession assets where title registration is finalized immediately.",
        },
      },
    ],
  },
  {
    slug: "vertical-living-revolution-model-town-peco-road",
    title: "The Vertical Living Revolution: Why Model Town Link Road & PECO Road Outperform Suburban Sprawl",
    subtitle: "Examining the cultural and economic migration from 1-Kanal standalone houses to high-spec vertical urban apartments.",
    excerpt:
      "Rising land prices, electricity tariffs, and commute times have ignited a vertical living revolution in central Lahore. Discover why developments on PECO Road and Model Town Link Road yield superior occupancy and minimal maintenance overhead.",
    category: "Urban Development",
    readTime: "6 min read",
    publishDate: "October 05, 2026",
    author: {
      name: "Chaudhry Bilal",
      role: "Head of Commercial Advisory, Property Files Network",
    },
    metrics: [
      { label: "Maintenance Cost Reduction", value: "55% – 65%", note: "Compared to standalone 1-Kanal villas" },
      { label: "Occupancy Rate on PECO Link Road", value: "96.8%", note: "Corporate and professional demand" },
      { label: "Commute Time to Gulberg CBD", value: "10 Mins", note: "Via Metrobus & signal-free corridors" },
    ],
    tags: ["Vertical Living", "Model Town", "PECO Road", "Apartments Lahore", "Urban Planning"],
    content: [
      {
        sectionTitle: "The End of Suburban Sprawl Unsustainability",
        paragraphs: [
          "For decades, the standard Lahore aspiration was a standalone 1-Kanal house in a peripheral suburban development. However, rapid increases in municipal utility tariffs, security guard overheads, water filtration maintenance, and lengthy daily commutes have made standalone suburban ownership financially and logistically draining for modern nuclear families.",
          "Central Lahore nodes—specifically PECO Road, Model Town Link Road, and Gulberg—offer established schools, tertiary hospitals, shopping avenues, and signal-free arterial connectivity that outer suburbs cannot replicate for decades.",
        ],
      },
      {
        sectionTitle: "Value Apartments: A Model in Urban Efficiency",
        paragraphs: [
          "The successful sell-out and delivery of Value Apartments on PECO Road demonstrated an overwhelming appetite for smart 1 and 2-bedroom executive residences. By centralizing security, standby generator power, garbage disposal, and elevator maintenance under a single professional management fee, residents cut their operational living costs by more than 50% compared to a conventional home.",
          "For landlords, these units produce uninterrupted rental yields, with vacant turnaround times averaging under 14 days due to the proximity of Model Town's commercial boulevard.",
        ],
      },
    ],
  },
  {
    slug: "complete-legal-due-diligence-checklist-punjab",
    title: "The 7-Step Property Due Diligence Checklist for Punjab: LDA, DHA, and Registry Verifications",
    subtitle: "A comprehensive regulatory manual ensuring every property transaction in Lahore is backed by indisputable legal title.",
    excerpt:
      "Avoid costly title disputes, unapproved society traps, and patwari manipulations. Our senior legal advisory desk outlines the seven non-negotiable verification steps required before handing over any token advance in Punjab.",
    category: "Investor Education",
    readTime: "8 min read",
    publishDate: "September 24, 2026",
    author: {
      name: "Hassan Nawaz",
      role: "Director of Land Acquisitions, Property Files Network",
    },
    metrics: [
      { label: "Annual Property Disputes in Punjab Courts", value: "100,000+", note: "Primarily stemming from informal verifications" },
      { label: "Property Files Network Title Clearance Standard", value: "100%", note: "Independent verification protocol" },
      { label: "Mandatory Document Checks", value: "7 Core Steps", note: "Covering LDA, DHA, Revenue & FBR" },
    ],
    tags: ["Legal Checklist", "LDA Approved", "DHA Verification", "Property Fraud Prevention", "Punjab Revenue"],
    content: [
      {
        sectionTitle: "Introduction: Why Title Verification Precedes Price Negotiation",
        paragraphs: [
          "In real estate, an attractive price tag on an encumbered title is not a bargain—it is a lawsuit waiting to happen. The Pakistani property market features multiple governing authorities (e.g., Lahore Development Authority, Defence Housing Authority, Cantonment Boards, and District Revenue Councils), each with distinct transfer protocols.",
          "Before executing any agreement or transferring token money, ensure the following seven verification pillars are fulfilled.",
        ],
      },
      {
        sectionTitle: "The 7 Non-Negotiable Verification Steps",
        paragraphs: [
          "1. Society NOC & Master Plan Approval: Verify the housing scheme on the official LDA or Punjab Housing and Town Planning Agency (PHATA) portals. Ensure the specific block has approved planning permissions.",
          "2. Aks Shajra & Khasra Demarcation: Request the official revenue map from the Halqa Patwari and field Kanungo to confirm that the plot physically sits within the acquired land bank.",
          "3. DHA Verification Slip (NDC): In DHA transactions, obtain an official No Demand Certificate (NDC) verifying all development charges, transfer fees, and utility arrears are fully settled.",
          "4. Fard Malkiat & Bar-Aks Inspection: In revenue land transactions, pull a fresh computerized Fard from the Arazi Record Center (ARC) to confirm genuine ownership without mortgage liens.",
          "5. Seller Identity Confirmation: Cross-check the biometric CNIC of the legal owner with NADRA verification. Never transact with an unauthorized proxy without attested legal documentation.",
          "6. FBR Active Taxpayer Status (ATL): Confirm the filer status of both buyer and seller under Sections 236K and 236C to avoid unexpected 200% non-filer tax penalties.",
          "7. Registered Sale Deed (Baya-Nama): Ensure the deed is officially registered before the Sub-Registrar and properly mutated (Intiqal) in the revenue books.",
        ],
        callout: {
          title: "Property Files Network Legal Guarantee",
          text: "Every property represented in the Property Files Network portfolio undergoes rigorous multi-layer verification by our dedicated real estate attorneys before it is introduced to our investors.",
        },
      },
    ],
  },
];

export const INITIAL_CRM_LEADS: Lead[] = [
  {
    id: "LD-1041",
    clientName: "Dr. Kamran Siddiqui",
    phone: "+44 7700 900412",
    email: "k.siddiqui@nhs-consultants.uk",
    originType: "Overseas Pakistani Diaspora",
    countryCity: "London, United Kingdom",
    propertyCategory: "Luxury High-Rise Apartments",
    specificProject: "Green View Executive Apartments (DHA Phase 5, Lahore)",
    preferredUnitType: "3-Bed Executive Penthouse",
    budgetDisplay: "PKR 5.50 Crore",
    estimatedValuePKR: 55,
    assignedAgent: "Chaudhry Bilal (Head of Commercial Advisory)",
    stage: "consultation",
    priority: "VIP",
    notes: [
      "Overseas doctor based in London investing via Roshan Digital Account (RDA).",
      "Scheduled Zoom portfolio consultation this Thursday 5:00 PM PKT.",
      "Interested in long-term corporate rental management in DHA Phase 5.",
    ],
    createdAt: "2026-11-12",
    lastContacted: "2 hours ago",
  },
  {
    id: "LD-1042",
    clientName: "Mian Fakhar-ud-Din",
    phone: "+92 300 8441122",
    email: "fakhar@lahoretextiles.pk",
    originType: "Pakistan",
    countryCity: "DHA Phase 5, Lahore, Pakistan",
    propertyCategory: "Organic Farmhouses & Agri-Estates",
    specificProject: "Value Lahore Organic Farmhouses (Barki Road)",
    preferredUnitType: "4 Kanal Organic Farm Estate",
    budgetDisplay: "PKR 8.50 Crore",
    estimatedValuePKR: 85,
    assignedAgent: "Hassan Nawaz (Director of Land Acquisitions)",
    stage: "contacted",
    priority: "VIP",
    notes: [
      "Previous investor in corporate commercial assets.",
      "Looking for a 4-Kanal weekend retreat on Barki Road opposite DHA Phase 8.",
      "Site inspection arranged for Saturday morning.",
    ],
    createdAt: "2026-11-10",
    lastContacted: "Yesterday",
  },
  {
    id: "LD-1043",
    clientName: "Engr. Waqas Mehmood",
    phone: "+971 50 491 8823",
    email: "waqas.m@emirateseng.ae",
    originType: "Overseas Pakistani Diaspora",
    countryCity: "Dubai, UAE",
    propertyCategory: "Smart Homes & Turnkey Villas",
    specificProject: "Green View Smart Homes (DHA Phase 12 EME)",
    preferredUnitType: "Turnkey Smart Villa (10 Marla)",
    budgetDisplay: "PKR 3.40 Crore",
    estimatedValuePKR: 34,
    assignedAgent: "Umer Farooq (Senior Investment Specialist)",
    stage: "closed",
    priority: "High",
    notes: [
      "Token and 30% down payment completed via authorized banking channels.",
      "Unit allocation confirmed in DHA Phase 12 EME Canal Bank sector.",
      "Construction milestone updates to be shared bi-monthly.",
    ],
    createdAt: "2026-10-25",
    lastContacted: "3 days ago",
  },
  {
    id: "LD-1044",
    clientName: "Salman Ghani Group",
    phone: "+92 300 4119988",
    email: "acquisitions@ghanicorp.pk",
    originType: "Pakistan",
    countryCity: "Model Town, Lahore, Pakistan",
    propertyCategory: "Commercial Plazas & Corporate Towers",
    specificProject: "Corporate Tower (Gulberg, Lahore)",
    preferredUnitType: "Full Commercial Floor (4,200 Sq. Ft.)",
    budgetDisplay: "PKR 11.50 Crore",
    estimatedValuePKR: 115,
    assignedAgent: "Chaudhry Bilal (Head of Commercial Advisory)",
    stage: "closed",
    priority: "VIP",
    notes: [
      "Registered sale deed executed for 7th Floor Corporate Suite in Gulberg III.",
      "Leased to regional IT company on 5-year covenant at 11% gross yield.",
    ],
    createdAt: "2026-10-14",
    lastContacted: "1 week ago",
  },
  {
    id: "LD-1045",
    clientName: "Mrs. Ayesha Humayun",
    phone: "+92 321 4990011",
    email: "ayesha.h@gulbergventures.com",
    originType: "Pakistan",
    countryCity: "Gulberg III, Lahore, Pakistan",
    propertyCategory: "Luxury High-Rise Apartments",
    specificProject: "Value Apartments (PECO Road, Link Road, Model Town)",
    preferredUnitType: "2-Bed Luxury Corner Apartment",
    budgetDisplay: "PKR 2.20 Crore",
    estimatedValuePKR: 22,
    assignedAgent: "Zainab Raza (Lead Diaspora Advisory Consultant)",
    stage: "consultation",
    priority: "Standard",
    notes: [
      "In-person consultation scheduled at Property Files Network DHA Phase 5 office for Friday 4:00 PM.",
      "Seeking dependable rental income stream in central Lahore.",
    ],
    createdAt: "2026-11-13",
    lastContacted: "5 hours ago",
  },
  {
    id: "LD-1046",
    clientName: "Haji Abdul Rehman Qureshi",
    phone: "+1 647 555 0198",
    email: "arqureshi@torontodiaspora.ca",
    originType: "Overseas Pakistani Diaspora",
    countryCity: "Toronto, Canada",
    propertyCategory: "Organic Farmhouses & Agri-Estates",
    specificProject: "Value Lahore Organic Farmhouses (Barki Road)",
    preferredUnitType: "8 Kanal Master Estate",
    budgetDisplay: "PKR 14.50 Crore",
    estimatedValuePKR: 145,
    assignedAgent: "Hassan Nawaz (Director of Land Acquisitions)",
    stage: "contacted",
    priority: "VIP",
    notes: [
      "Read Property Files Network Barki Road case study online.",
      "Reviewing Special Power of Attorney (PoA) requirements for land registration in Lahore.",
    ],
    createdAt: "2026-11-14",
    lastContacted: "Yesterday",
  },
  {
    id: "LD-1047",
    clientName: "Usman & Brothers Associates",
    phone: "+92 333 4227766",
    email: "usman.associates@gmail.com",
    originType: "Pakistan",
    countryCity: "DHA Phase 6, Lahore, Pakistan",
    propertyCategory: "DHA & Master-Planned Land Banking",
    specificProject: "Value Residencies (Barki Road, Opp. DHA Phase 8)",
    preferredUnitType: "2x Designer Residential Plots",
    budgetDisplay: "PKR 4.10 Crore",
    estimatedValuePKR: 41,
    assignedAgent: "Umer Farooq (Senior Investment Specialist)",
    stage: "new",
    priority: "Standard",
    notes: [
      "Inbound inquiry submitted via propertyfilesnetwork.com website portal.",
      "Requested site visit opposite DHA Phase 8 Barki Road.",
    ],
    createdAt: "2026-11-15",
    lastContacted: "30 mins ago",
  },
  {
    id: "LD-1048",
    clientName: "Tariq Malik & Family",
    phone: "+1 713 555 0842",
    email: "tariq.malik@houstonenergy.com",
    originType: "Overseas Pakistani Diaspora",
    countryCity: "Houston, Texas, USA",
    propertyCategory: "Luxury High-Rise Apartments",
    specificProject: "Green View Executive Apartments (DHA Phase 5, Lahore)",
    preferredUnitType: "2-Bed Executive Suite",
    budgetDisplay: "PKR 3.20 Crore",
    estimatedValuePKR: 32,
    assignedAgent: "Zainab Raza (Lead Diaspora Advisory Consultant)",
    stage: "new",
    priority: "High",
    notes: [
      "Interested in acquiring turnkey apartment for annual trips to Pakistan.",
      "Wants details on standby electricity backup and DHA security.",
    ],
    createdAt: "2026-11-16",
    lastContacted: "Just now",
  },
];

export const CRM_AGENTS = [
  "Chaudhry Bilal (Head of Commercial Advisory)",
  "Hassan Nawaz (Director of Land Acquisitions)",
  "Zainab Raza (Lead Diaspora Advisory Consultant)",
  "Umer Farooq (Senior Investment Specialist)",
];

export const PIPELINE_COLUMNS: {
  id: PipelineStage;
  title: string;
  subtitle: string;
  accentColor: string;
  badgeBg: string;
}[] = [
  {
    id: "new",
    title: "New Inquiries",
    subtitle: "Inbound web & advisory inquiries",
    accentColor: "border-slate-400",
    badgeBg: "bg-slate-100 text-slate-800 border-slate-300",
  },
  {
    id: "contacted",
    title: "Qualified & Profiled",
    subtitle: "Budget & legal suitability confirmed",
    accentColor: "border-amber-500",
    badgeBg: "bg-amber-50 text-amber-900 border-amber-300",
  },
  {
    id: "consultation",
    title: "Consultation / Site Visit",
    subtitle: "In-office briefing or on-ground visit",
    accentColor: "border-blue-500",
    badgeBg: "bg-blue-50 text-blue-900 border-blue-300",
  },
  {
    id: "closed",
    title: "Deal Closed / Executed",
    subtitle: "Token, deed registered & unit allocated",
    accentColor: "border-emerald-600",
    badgeBg: "bg-emerald-50 text-emerald-900 border-emerald-300",
  },
];
