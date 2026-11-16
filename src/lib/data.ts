export type PipelineStage =
  | "new"
  | "contacted"
  | "consultation"
  | "closed";

export type LeadOrigin =
  | "Pakistan"
  | "Overseas Pakistani Diaspora";

export type PropertyCategory =
  | "MGH Affidavit Files"
  | "DHA Lahore Property Files"
  | "Real Estate Investment Advising"
  | "Commercial Broadway Plazas"
  | "Luxury High-Rise & Waterfront Villas";

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
  subtitle: string;
  location: string;
  city: string;
  region: string;
  status: string;
  type: string;
  fileSpecialty: string;
  partnership: string;
  completionYear: string;
  unitsInfo: string;
  startingPrice: string;
  priceRange: string;
  roiHighlight: string;
  description: string;
  highlights: string[];
  architecturalStyle: string;
  badgeText: string;
  amenities: string[];
  images: string[];
  videoUrl?: string; // YouTube embed URL
  videoTitle?: string;
  keyStats: { label: string; value: string }[];
}

export interface BlogPost {
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  category:
    | "Market Analysis & Yields"
    | "Land Banking & Luxury"
    | "Overseas Advisory"
    | "Due Diligence & Legal"
    | "Urban Development"
    | "Investor Education";
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
  tagline:
    "Property | Investment | Files — Smart Deals, Trusted Services & Secure Investments. Your Future Starts Here!",
  bio:
    "Property Files Network is a trusted real estate advisory specializing in secure investments, property management, and file trading. We provide smart, reliable deals tailored to help you secure your financial future through high-yield real estate assets.",
  foundedYear: "2008",
  // Primary & Secondary Phone / WhatsApp
  pakistanPhone: "+92 323 4304259",
  pakistanPhoneRaw: "+923234304259",
  secondaryPhone: "+92 320 4154156",
  secondaryPhoneRaw: "+923204154156",
  whatsappUrl: "https://wa.me/923234304259",
  whatsappSecondaryUrl: "https://wa.me/923204154156",
  email: "propertyfilesnetwork@gmail.com",
  headOffice: "Office No. 98-D, Main Boulevard, DHA Phase 8, Lahore, Pakistan",
  officeHours: "Monday – Saturday: 10:00 AM – 7:30 PM (PKT)",
  languages: ["English", "Urdu", "Punjabi"],
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
};

export const FOUNDERS_LEADERSHIP = [
  {
    name: "M Talha Cheema",
    role: "Co-Founder",
    title: "Head of File Trading & Land Acquisitions",
    focus: "MGH Affidavit Files & DHA Lahore Market Liquidity",
    experience: "14+ Years Experience",
    bio: "Pioneering transparent property file trading, affidavit verification, and quick-settlement exchanges. Expert in MGH Mangla 1 Kanal and 10 Marla files and DHA Lahore Phases 6, 7, 8, 9 & 10 file transfers.",
    phone: "+92 323 4304259",
  },
  {
    name: "M Daud Ali Lashari",
    role: "Co-Founder",
    title: "Director of Strategic Advisory & Wealth Management",
    focus: "High-Yield Commercial Assets & Diaspora Portfolio Structuring",
    experience: "15+ Years Experience",
    bio: "Specializes in structuring smart, secure real estate investments across DHA Phase 8 Broadway Commercial, Phase 9 Prism expansion, and institutional file portfolios for clients in Pakistan and abroad.",
    phone: "+92 320 4154156",
  },
];

export const CORE_SPECIALTIES = [
  {
    id: "mgh-affidavit-files",
    title: "MGH Affidavit Files",
    subtitle: "1 Kanal & 10 Marla Files",
    description:
      "Specialized buying, selling, and exchanging of Mangla Garrison Housing (MGH) 1 Kanal and 10 Marla affidavit files with verified legal transfers and fast settlement.",
    badge: "Core Specialty",
    features: [
      "1 Kanal & 10 Marla Affidavit Files",
      "Direct verification with MGH project directorate",
      "Immediate liquidity & prompt cash settlement",
      "Prime waterfront resort lifestyle asset",
    ],
  },
  {
    id: "dha-lahore-files",
    title: "DHA Lahore Property Files",
    subtitle: "Phases 6, 7, 8, 9 & 10",
    description:
      "Expert handling of property files across DHA Lahore Phases 6, 7, 8, 9, and 10, ensuring genuine allocation, verified NDC status, and swift execution.",
    badge: "Market Leader",
    features: [
      "Phase 6, 7 & 8 Prime files & Commercial Broadway",
      "Phase 9 Prism mega-phase allocation & balloted files",
      "Phase 10 high-growth future expansion files",
      "Biometric DHA transfer assistance & title vetting",
    ],
  },
  {
    id: "investment-advisory",
    title: "Real Estate Investment Advising",
    subtitle: "Secure & High-Yield Strategies",
    description:
      "Strategic guidance for secure and profitable property investments tailored for maximum capital appreciation and dependable rental yields.",
    badge: "Fiduciary Guidance",
    features: [
      "Empirical financial modeling & yield benchmarking",
      "Overseas Pakistani desk (RDA & Special PoA assistance)",
      "Strict zero-speculation title due diligence",
      "Commercial lease structuring & tenant management",
    ],
  },
];

export const SERVED_REGIONS = [
  {
    province: "Punjab",
    cities: ["Lahore", "Rawalpindi", "Jhelum", "Dina", "Kharian"],
    description: "Core on-ground operations covering central and northern Punjab's premier growth corridors.",
  },
  {
    province: "Capital Territory",
    cities: ["Islamabad"],
    description: "Institutional clients, corporate diaspora investors, and federal jurisdiction portfolios.",
  },
  {
    province: "Sindh",
    cities: ["Karachi"],
    description: "Strategic partnerships and investor syndicates seeking high-yield Punjab and MGH property files.",
  },
  {
    province: "Azad Kashmir",
    cities: ["Mirpur"],
    description: "Dedicated waterfront desk connecting overseas diaspora from the UK and Europe with MGH Mangla assets.",
  },
];

export const PAKISTAN_PORTFOLIO: PortfolioProject[] = [
  {
    id: "mgh-pakistan-mangla-garrison",
    title: "Mangla Garrison Housing (MGH Pakistan)",
    subtitle: "Waterfront Luxury Living & MGH 1 Kanal & 10 Marla Affidavit Files",
    location: "Mangla Dam Reservoir, Mirpur & Jhelum Border",
    city: "Mangla / Mirpur / Jhelum",
    region: "Azad Kashmir & Northern Punjab",
    status: "Active File Trading & Possession",
    type: "MGH Waterfront Files",
    fileSpecialty: "1 Kanal & 10 Marla Affidavit Files",
    partnership: "Official Trading Desk • Property Files Network",
    completionYear: "Active Possession & Waterfront Resort Development",
    unitsInfo: "1 Kanal & 10 Marla Affidavit Files, Luxury Waterfront Villas",
    startingPrice: "PKR 35 Lakh",
    priceRange: "PKR 35 Lakh – 1.85 Crore",
    roiHighlight: "14.5% Annual Capital Appreciation • High Overseas Diaspora Demand",
    description:
      "Mangla Garrison Housing (MGH Pakistan) is Asia's premier freshwater waterfront resort community, nestled along the breathtaking shores of the Mangla Dam reservoir near Mirpur and Jhelum. Property Files Network provides premier market liquidity, specializing in buying, selling, and exchanging verified MGH 1 Kanal and 10 Marla affidavit files, lakefront plots, and luxury turnkey villas.",
    highlights: [
      "Prime waterfront positioning along the panoramic Mangla Dam reservoir",
      "Official Army Water Sports Club featuring boating, jet skiing, parasailing, and rafting",
      "Prestigious Mangla Golf Club, equestrian riding academy, and polo pits",
      "Five-star international standard lakefront resort hotel and dining promenade",
      "Gated community with 24/7 round-the-clock security and surveillance",
      "Rapid connectivity to Mirpur, Dina, Jhelum, and the GT Road / Motorway axis",
    ],
    architecturalStyle: "Mediterranean Tuscan Lakefront Architecture",
    badgeText: "MGH Affidavit Files Specialist",
    amenities: [
      "Freshwater Lakefront Promenade",
      "Army Water Sports & Boating Club",
      "Mangla Golf Club & Green Fairways",
      "Horse Riding Academy & Polo Grounds",
      "Five-Star Resort & Hospitality",
      "24/7 Gated Security & Smart Utilities",
    ],
    images: [
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    ],
    videoUrl: "https://www.youtube.com/embed/HM8qOdgxNow",
    videoTitle: "Mangla Garrison Housing Official Project Walkthrough",
    keyStats: [
      { label: "File Options", value: "10 Marla & 1 Kanal" },
      { label: "Waterfront Access", value: "Mangla Dam Shore" },
      { label: "Key Amenity", value: "Water Sports & Golf" },
      { label: "Trading Desk", value: "Direct Affidavit Settlement" },
    ],
  },
  {
    id: "dha-lahore-phase-6",
    title: "DHA Lahore Phase 6",
    subtitle: "Prime Living, Defence Raya Golf Club & Elite Commercial Avenues",
    location: "Main Boulevard & Bedian Road Axis, Ring Road Nawaz Sharif Interchange, Lahore",
    city: "Lahore",
    region: "Punjab",
    status: "Prime Possession Delivered",
    type: "DHA Prime Possession",
    fileSpecialty: "10 Marla, 1 Kanal & 2 Kanal Residential & CCA Commercial",
    partnership: "DHA Authorized Advisory • Property Files Network",
    completionYear: "Fully Delivered & High Occupancy",
    unitsInfo: "1 Kanal & 2 Kanal Ready Plots, CCA 1 & 2 Commercial Plazas",
    startingPrice: "PKR 4.50 Crore",
    priceRange: "PKR 4.50 Crore – 22.00 Crore",
    roiHighlight: "11.2% Steady Rental Yield + Consistent Capital Value",
    description:
      "DHA Lahore Phase 6 represents the gold standard of upscale urban living and commercial prestige in Lahore. Home to the world-class Defence Raya Golf & Country Club, wide 150-foot boulevards, and booming commercial hubs (CCA 1 and CCA 2), Phase 6 offers unparalleled infrastructure, high corporate occupancy, and instant access via the Lahore Ring Road.",
    highlights: [
      "18-Hole International Championship Golf Course (Defence Raya Golf & Country Club)",
      "Vibrant commercial centers (CCA 1 & CCA 2) with corporate banks, cafes, and retail",
      "Proximity to Dolmen Mall DHA and premier international educational institutions",
      "Seamless integration with Lahore Ring Road via Nawaz Sharif Interchange and Bedian Road",
      "Underground utilities, state-of-the-art drainage, and dedicated DHA security squads",
      "High possession and rapid construction of modern designer mansions",
    ],
    architecturalStyle: "Ultra-Modern Contemporary Residences & Glass Facade Plazas",
    badgeText: "High-Yield Possession Landmark",
    amenities: [
      "Defence Raya 18-Hole Golf Course",
      "CCA 1 & CCA 2 Commercial Plazas",
      "Dolmen Mall DHA Proximity",
      "150ft Wide Central Expressways",
      "Underground Electrification",
      "24/7 DHA Armed Patrols",
    ],
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1200&q=80",
    ],
    videoUrl: "https://www.youtube.com/embed/jimpBWcIUUY",
    videoTitle: "DHA Lahore Phase 6 Infrastructure & Commercial Guide",
    keyStats: [
      { label: "Possession Status", value: "100% Ready to Build" },
      { label: "Golf Feature", value: "Defence Raya 18-Hole" },
      { label: "Commercial Hub", value: "CCA 1 & CCA 2" },
      { label: "Ring Road Transit", value: "2 Minutes" },
    ],
  },
  {
    id: "dha-lahore-phase-8-broadway",
    title: "DHA Lahore Phase 8 (Broadway Commercial)",
    subtitle: "Lahore's Financial High-Street & Corporate Commercial Epicenter",
    location: "Facing Allama Iqbal International Airport & Ring Road, DHA Phase 8, Lahore",
    city: "Lahore",
    region: "Punjab",
    status: "Prime Possession & Active File Trading",
    type: "DHA Commercial Broadway",
    fileSpecialty: "4 & 8 Marla Commercial Broadway, Sector Y & Park View Files",
    partnership: "DHA Authorized Advisory • Property Files Network",
    completionYear: "Delivered Commercial Strip & Ongoing Plaza Construction",
    unitsInfo: "4 Marla & 8 Marla Commercial Broadway, 1 Kanal Residential Plots",
    startingPrice: "PKR 6.50 Crore",
    priceRange: "PKR 6.50 Crore – 28.00 Crore",
    roiHighlight: "12.8% Commercial Rental Yield • Top Corporate Tenant Demand",
    description:
      "DHA Phase 8 Broadway Commercial is Lahore's most coveted commercial boulevard, directly opposite the Allama Iqbal International Airport. Spanning a monumental 200-foot-wide commercial artery, Broadway hosts flagship corporate headquarters, financial banking institutions, and premium commercial plazas. Supported by Sector Y, Sector Z, and Park View residential enclaves.",
    highlights: [
      "Direct frontage on the 200ft wide Commercial Broadway boulevard",
      "Strategically situated adjacent to Allama Iqbal International Airport and Lahore Ring Road",
      "Prime 4 Marla and 8 Marla commercial plots approved for multi-storey corporate towers",
      "High capital gains and unparalleled rental yields backed by blue-chip corporate tenants",
      "Underground modern power cabling, extensive parking aprons, and civic service hubs",
      "Surrounded by elite residential sectors: Sector Y, Sector Z, Park View, and Ex-Air Avenue",
    ],
    architecturalStyle: "Commercial High-Rise Glass Curtain Architecture",
    badgeText: "Premier Corporate Boulevard",
    amenities: [
      "200ft Commercial Broadway Boulevard",
      "Airport & Ring Road Frontage",
      "Multinational Corporate Banking Hubs",
      "Dedicated Multi-Level Parking",
      "Underground Infrastructure",
      "High-Density Commercial Approvals",
    ],
    images: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1519999482648-25049ddd37b1?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1200&q=80",
    ],
    videoUrl: "https://www.youtube.com/embed/2AER-4NtE9c",
    videoTitle: "DHA Lahore Phase 8 Broadway Commercial Investment Guide",
    keyStats: [
      { label: "Commercial Artery", value: "200-Foot Boulevard" },
      { label: "Airport Distance", value: "3 Minutes Direct" },
      { label: "Plot Dimensions", value: "4 & 8 Marla Commercial" },
      { label: "Rental Yield", value: "Up to 12.8% Annual" },
    ],
  },
  {
    id: "dha-lahore-phase-9-prism",
    title: "DHA Lahore Phase 9 Prism",
    subtitle: "DHA's Largest Mega Phase — 40,000+ Kanals Across 16 Sectors (A to R)",
    location: "Connected via Ring Road Phase 9 Interchange, between Ferozepur & Bedian Road, Lahore",
    city: "Lahore",
    region: "Punjab",
    status: "Balloted & Fast-Track Development",
    type: "DHA Mega Phase Files",
    fileSpecialty: "5 Marla, 10 Marla, 1 Kanal & 2 Kanal Files and Possession Plots",
    partnership: "DHA Authorized Advisory • Property Files Network",
    completionYear: "Possession Handover in Multiple Sectors & Ongoing Works",
    unitsInfo: "5 Marla, 10 Marla, 1 Kanal & 2 Kanal Plots and Allocation Files",
    startingPrice: "PKR 65 Lakh",
    priceRange: "PKR 65 Lakh – 3.80 Crore",
    roiHighlight: "Massive Capital Appreciation on Balloted Files and Upcoming Possessions",
    description:
      "DHA Phase 9 Prism is the largest master-planned real estate development ever undertaken by DHA Lahore, sprawling across an immense 40,000+ Kanals across 16 sectors (A through R). Located strategically between Bedian Road and Ferozepur Road with dedicated Ring Road interchanges, Phase 9 Prism is the primary vehicle for high-volume file trading and rapid capital growth.",
    highlights: [
      "Immense scale: 40,000+ Kanals divided into 16 sectors with planned civic commercial centers",
      "Grand central expressways measuring 150ft and 120ft wide connecting all major sectors",
      "Dedicated mega theme park, civic shopping centers, and DHA golf course facilities",
      "Direct transit access via Lahore Ring Road Interchange Phase 9 and Bedian Road corridor",
      "Rapidly progressing possession openings in multiple sectors with active house construction",
      "High liquidity in 5 Marla, 10 Marla, and 1 Kanal residential and commercial files",
    ],
    architecturalStyle: "Master-Planned Modern Suburbia & Civic Center Hubs",
    badgeText: "Mega Expansion Opportunity",
    amenities: [
      "40,000+ Kanal Master Plan",
      "Dedicated Ring Road Interchange",
      "150ft & 120ft Main Boulevards",
      "Mega Civic & Commercial Centers",
      "Themed Amusement Park & Green Belts",
      "DHA Sports & Golf Complex",
    ],
    images: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590674899484-d5640e854abe?auto=format&fit=crop&w=1200&q=80",
    ],
    videoUrl: "https://www.youtube.com/embed/HcGZbuln3bE",
    videoTitle: "DHA Phase 9 Prism Complete Sector Tour & Possession Briefing",
    keyStats: [
      { label: "Total Land Area", value: "40,000+ Kanals" },
      { label: "Sector Breakdown", value: "16 Sectors (A to R)" },
      { label: "Main Boulevards", value: "150ft & 120ft Wide" },
      { label: "File Categories", value: "5M, 10M, 1K & Commercial" },
    ],
  },
  {
    id: "dha-lahore-phase-10",
    title: "DHA Lahore Phase 10",
    subtitle: "High-Growth Future Land Banking & Allocation Files Trading",
    location: "Southern Growth Corridor, Bedian Road & Southern Ring Road Extension, Lahore",
    city: "Lahore",
    region: "Punjab",
    status: "Future Allocation Phase",
    type: "DHA Allocation Files",
    fileSpecialty: "Phase 10 Allocation Files & Affidavit Files",
    partnership: "DHA Authorized Advisory • Property Files Network",
    completionYear: "Land Demarcation & Allocation File Phase",
    unitsInfo: "5 Marla, 10 Marla, 1 Kanal & 2 Kanal Allocation Files",
    startingPrice: "PKR 32 Lakh",
    priceRange: "PKR 32 Lakh – 1.35 Crore",
    roiHighlight: "Top Speculative Investment Multiplier • Projected 150%+ Balloting ROI",
    description:
      "DHA Phase 10 is the frontier of Lahore's smart real estate growth. Envisioned as a futuristic smart-city phase with a proposed 300-foot-wide central expressway, Phase 10 offers investors the lowest entry cost with the highest potential multiplier on allocation files. Property Files Network handles verified genuine file transactions with complete biometric and legal assurance.",
    highlights: [
      "DHA Lahore's flagship future expansion offering exponential upside potential",
      "Proposed 300-foot-wide central arterial expressway and smart infrastructure planning",
      "Lowest entry barrier for genuine DHA files with maximum leverage on balloting milestones",
      "Located strategically near the Bedian Road corridor and southern Ring Road axis",
      "Strict verification protocol guaranteeing unencumbered allocation files and affidavits",
      "Ideal choice for generational land banking and institutional file portfolio allocation",
    ],
    architecturalStyle: "Futuristic Smart City Master Planning",
    badgeText: "High Multiplier Investment",
    amenities: [
      "Proposed 300ft Grand Expressway",
      "Smart City Master Planning",
      "Integrated Healthcare City Cluster",
      "Educational & University Enclaves",
      "Expansive Green Buffer Corridors",
      "Secure DHA Verification & Transfers",
    ],
    images: [
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1477959858617-67f30bc75b82?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1524813686514-a57563d77d61?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    ],
    videoUrl: "https://www.youtube.com/embed/MATnx78kreU",
    videoTitle: "DHA Lahore Phase 10 File Rates & Future Potential Analysis",
    keyStats: [
      { label: "Master Plan", value: "Smart City Infrastructure" },
      { label: "Main Arterial", value: "Proposed 300-Foot Road" },
      { label: "File Types", value: "Allocation & Affidavit" },
      { label: "Investment Horizon", value: "High-Yield 2–4 Years" },
    ],
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "mgh-affidavit-files-investment-guide",
    title: "MGH Affidavit Files: Why Mangla Garrison Housing is the #1 Waterfront Asset in Pakistan",
    subtitle: "A Comprehensive Guide to Buying, Selling, and Exchanging 1 Kanal and 10 Marla Files",
    excerpt:
      "An in-depth analysis of Mangla Garrison Housing (MGH) affidavit file trading, waterfront valuation trends, water sports amenities, and how overseas Pakistanis in Mirpur, Jhelum, and the UK can secure verified lakefront plots.",
    category: "Land Banking & Luxury",
    readTime: "7 min read",
    publishDate: "November 14, 2026",
    author: {
      name: "M Talha Cheema",
      role: "Co-Founder & Head of File Trading, Property Files Network",
    },
    metrics: [
      { label: "10 Marla File Base", value: "PKR 35 Lakh", note: "Verified affidavit entry" },
      { label: "Waterfront Appreciation", value: "14.5% YoY", note: "High diaspora demand" },
      { label: "Distance from Mirpur", value: "15 Minutes", note: "Direct lake access" },
    ],
    tags: ["MGH Pakistan", "Mangla Garrison Housing", "Affidavit Files", "Waterfront Living", "Mirpur Real Estate"],
    content: [
      {
        sectionTitle: "The Surge in Waterfront Living in Northern Pakistan",
        paragraphs: [
          "Waterfront residential projects have historically yielded some of the highest real estate premiums globally. In Pakistan, Mangla Garrison Housing (MGH) has established itself as the preeminent lakefront resort community, strategically situated along the serene waters of the Mangla Dam reservoir, directly bordering Mirpur and Jhelum.",
          "Unlike standard land development, MGH integrates luxury hospitality, an Army Water Sports Club, private boating, an equestrian academy, and a championship golf course. For investors, the primary entry point has been through MGH 1 Kanal and 10 Marla affidavit files.",
        ],
      },
      {
        sectionTitle: "Understanding MGH 1 Kanal & 10 Marla Affidavit Files",
        paragraphs: [
          "An affidavit file in MGH represents an authenticated, unencumbered land allocation that can be transferred or exchanged smoothly. Property Files Network specializes in the immediate purchase, sale, and exchange of these files, providing guaranteed market liquidity to buyers and sellers alike.",
          "Key advantages of MGH affidavit files include verified legal status directly with the project directorate, high demand among overseas Pakistanis residing in the UK, Europe, and the Middle East, and substantial capital appreciation as on-ground infrastructure progresses.",
        ],
        callout: {
          title: "Advisory Tip from M Talha Cheema",
          text: "Always ensure your MGH affidavit file is authenticated through direct project records before final financial settlement. Property Files Network provides biometric verification and immediate file settlement.",
        },
      },
    ],
  },
  {
    slug: "dha-lahore-phase-9-prism-vs-phase-10-comparison",
    title: "DHA Phase 9 Prism vs. Phase 10: Where Should You Allocate Capital in 2026?",
    subtitle: "A Deep-Dive Financial and Possession Analysis of DHA Lahore's Mega Expansion Zones",
    excerpt:
      "Comparing DHA Phase 9 Prism's 40,000+ Kanal balloted sectors with Phase 10's future smart-city allocation files. Learn which phase offers the best balance of safety, timeline, and ROI.",
    category: "Market Analysis & Yields",
    readTime: "9 min read",
    publishDate: "November 08, 2026",
    author: {
      name: "M Daud Ali Lashari",
      role: "Co-Founder & Director of Investment Strategy, Property Files Network",
    },
    metrics: [
      { label: "Phase 9 Prism Size", value: "40,000+ Kanals", note: "16 Sectors (A to R)" },
      { label: "Phase 10 Projected Growth", value: "150%+", note: "On balloting completion" },
      { label: "DHA Verification Standard", value: "100%", note: "Zero unverified transfers" },
    ],
    tags: ["DHA Phase 9 Prism", "DHA Phase 10", "File Trading", "Lahore Real Estate", "Investment Strategy"],
    content: [
      {
        sectionTitle: "The Evolution of DHA Lahore's Expansion Corridors",
        paragraphs: [
          "DHA Lahore remains the bedrock of institutional real estate investment in Pakistan. While earlier phases (Phases 1 through 6) have largely transitioned to end-user luxury living with mature price points, the investment energy of Lahore is firmly centered on two mega zones: Phase 9 Prism and Phase 10.",
          "Phase 9 Prism, covering over 40,000 Kanals, is already witnessing on-ground possession handovers in multiple sectors, while Phase 10 represents the future smart-city frontier with low file entry rates.",
        ],
      },
      {
        sectionTitle: "Strategic Asset Allocation: Balloted Plots vs. Allocation Files",
        paragraphs: [
          "Investors looking for 1 to 2-year possession and immediate construction viability should prioritize DHA Phase 9 Prism sectors (such as Sector A, C, Q, and R), which benefit from 150ft central expressways and dedicated Ring Road interchanges.",
          "Conversely, investors targeting maximum capital multiplier over a 3 to 5-year horizon will find exceptional leverage in DHA Phase 10 allocation files (5 Marla, 10 Marla, and 1 Kanal). Historical data from Phase 9 Prism demonstrates that early file holders achieved over 200% returns upon balloting and development roadmapping.",
        ],
        callout: {
          title: "Strategic Insight by M Daud Ali Lashari",
          text: "Portfolio diversification is key: allocating 60% of capital to near-possession Phase 9 Prism plots and 40% to Phase 10 allocation files delivers both liquidity and exponential capital growth.",
        },
      },
    ],
  },
  {
    slug: "dha-phase-8-broadway-commercial-yield-breakdown",
    title: "DHA Phase 8 Broadway Commercial: The Definitive Rental Yield and Capital Growth Analysis",
    subtitle: "Why 4 & 8 Marla Commercial Plazas are Dominating Lahore's Corporate Landscape",
    excerpt:
      "A granular examination of DHA Phase 8 Broadway's 200-foot corridor, multinational corporate leases, banking headquarters, and why it outperforms traditional commercial districts.",
    category: "Market Analysis & Yields",
    readTime: "8 min read",
    publishDate: "October 30, 2026",
    author: {
      name: "M Daud Ali Lashari",
      role: "Co-Founder & Director of Investment Strategy, Property Files Network",
    },
    metrics: [
      { label: "Broadway Boulevard Width", value: "200 Feet", note: "Direct Airport connectivity" },
      { label: "Commercial Yield Range", value: "11.5% – 13.2%", note: "Blue-chip corporate leases" },
      { label: "Capital Appreciation", value: "85% in 3 Years", note: "Plaza construction surge" },
    ],
    tags: ["DHA Phase 8", "Broadway Commercial", "Rental Yield", "Commercial Plazas", "Airport Corridor"],
    content: [
      {
        sectionTitle: "The 200-Foot Commercial Powerhouse",
        paragraphs: [
          "Commercial Broadway in DHA Phase 8 has cemented its status as the financial Wall Street of modern Lahore. Facing Allama Iqbal International Airport and flanked by the Lahore Ring Road, Broadway was master-planned with wide parking aprons, multi-level plaza height approvals, and state-of-the-art underground utilities.",
          "Multinational corporate brands, software export firms, private banking headquarters, and medical centers have established landmark addresses here, driving rental yields well above 11% annually.",
        ],
      },
      {
        sectionTitle: "Structuring Commercial Plazas for Passive Income",
        paragraphs: [
          "Investors purchasing 4 Marla or 8 Marla commercial plots in Broadway benefit from strong tenant covenants. A typical 4 Marla commercial building (Basement + Ground + 4 Floors) generates stable dollar-pegged cash flow with 10% annual rent escalations.",
          "Property Files Network provides end-to-end commercial advisory, from initial plot acquisition and DHA architectural approval to corporate tenant leasing.",
        ],
      },
    ],
  },
  {
    slug: "overseas-pakistani-real-estate-investment-playbook",
    title: "The Overseas Pakistani Investor's Playbook: Secure Repatriation, Power of Attorney & RDA",
    subtitle: "A Step-by-Step Legal Roadmap for Diaspora Investors in Mirpur, the UK, UAE, and North America",
    excerpt:
      "How to safely acquire MGH affidavit files and DHA property files remotely using Roshan Digital Accounts, Special PoA, and embassy attestations without physical travel.",
    category: "Overseas Advisory",
    readTime: "10 min read",
    publishDate: "October 22, 2026",
    author: {
      name: "M Talha Cheema",
      role: "Co-Founder & Head of File Trading, Property Files Network",
    },
    metrics: [
      { label: "Diaspora Transactions Completed", value: "PKR 12B+", note: "Across UK, UAE, US & Canada" },
      { label: "Repatriation Compliance", value: "100%", note: "State Bank of Pakistan RDA rules" },
      { label: "Remote Settlement Time", value: "48–72 Hours", note: "Digital biometric routing" },
    ],
    tags: ["Overseas Pakistanis", "Roshan Digital Account", "Power of Attorney", "DHA Transfer", "Legal Due Diligence"],
    content: [
      {
        sectionTitle: "Bridging the Distance: Safe Property Acquisitions",
        paragraphs: [
          "For overseas Pakistanis living in the United Kingdom, United States, Canada, the Middle East, and especially the Mirpuri diaspora in Europe, investing in homeland real estate has traditionally been plagued by communication gaps, unverified middle-men, and legal hurdles.",
          "Property Files Network was created to provide a completely transparent, institutional bridge. By utilizing Roshan Digital Accounts (RDA), funds are routed through formal banking channels, guaranteeing 100% legal capital and profit repatriation under State Bank of Pakistan regulations.",
        ],
      },
      {
        sectionTitle: "Special Power of Attorney (PoA) Protocols",
        paragraphs: [
          "When acquiring or transferring DHA Lahore property files or MGH affidavit files, overseas buyers do not need to fly to Pakistan. We guide clients step-by-step through drafting a legally binding Special Power of Attorney, obtaining attestation at the nearest Pakistani Embassy or High Commission, and completing registration before the Sub-Registrar.",
        ],
      },
    ],
  },
  {
    slug: "dha-lahore-phase-6-living-and-investment-standards",
    title: "DHA Lahore Phase 6: Inside the Golden Standard of Upscale Residential & Golf Living",
    subtitle: "Analyzing Defence Raya, 150ft Boulevards, and Commercial Expansion",
    excerpt:
      "Why DHA Phase 6 commands the highest residential prestige in Lahore, featuring Defence Raya's 18-hole golf championship course, Dolmen Mall, and high-density commercial vitality.",
    category: "Urban Development",
    readTime: "8 min read",
    publishDate: "October 15, 2026",
    author: {
      name: "M Daud Ali Lashari",
      role: "Co-Founder & Director of Investment Strategy, Property Files Network",
    },
    metrics: [
      { label: "Golf Course Size", value: "18 Holes", note: "Defence Raya Country Club" },
      { label: "Occupancy Rate", value: "92%+", note: "Delivered executive community" },
      { label: "Ring Road Interchange", value: "Nawaz Sharif Interchange", note: "Instant access" },
    ],
    tags: ["DHA Phase 6", "Defence Raya", "Golf Living", "Lahore Mansions", "Urban Planning"],
    content: [
      {
        sectionTitle: "The Prestige Corridor of Lahore",
        paragraphs: [
          "DHA Phase 6 is universally recognized as the most developed, prestigious, and aesthetically cohesive residential phase in Lahore. Featuring 1 Kanal and 2 Kanal luxury villas, meticulously planned sector parks, and the iconic Defence Raya Golf & Country Club, it caters to high-net-worth business families and corporate executives.",
        ],
      },
      {
        sectionTitle: "Commercial Dynamics: CCA 1 and CCA 2",
        paragraphs: [
          "Beyond luxury housing, Phase 6's commercial sectors (CCA 1 and CCA 2) have evolved into primary shopping, dining, and professional office destinations, making properties in Phase 6 an enduring store of generational wealth.",
        ],
      },
    ],
  },
  {
    slug: "seven-step-property-file-verification-guide",
    title: "The 7-Step Property File Verification Guide: Protecting Capital Against Informal Pitfalls",
    subtitle: "A Mandatory Checklist for MGH Affidavit Files, DHA Allocation Files, and Revenue Records",
    excerpt:
      "Essential verification protocols for property file trading in Pakistan: biometric CNIC validation, NDC clearance, sub-registrar registration, and official authority authentication.",
    category: "Due Diligence & Legal",
    readTime: "9 min read",
    publishDate: "October 05, 2026",
    author: {
      name: "M Talha Cheema",
      role: "Co-Founder & Head of File Trading, Property Files Network",
    },
    metrics: [
      { label: "Property Files Network Title Clearance", value: "100%", note: "Zero unverified files" },
      { label: "Mandatory Checks", value: "7 Core Steps", note: "Covering DHA, MGH, Revenue & FBR" },
      { label: "Legal Guarantee", value: "Full Settlement", note: "Biometric authentication" },
    ],
    tags: ["Due Diligence", "DHA Verification", "MGH Affidavit", "File Fraud Prevention", "Legal Checklist"],
    content: [
      {
        sectionTitle: "Why Due Diligence Must Precede Any Payment",
        paragraphs: [
          "In real estate file trading, an attractive price tag on an unverified file is the fastest route to financial loss. In Pakistan, property files range from official DHA allocation slips to MGH affidavit certificates and district revenue mutations.",
          "Before handing over token money or signing transfer documentation, every buyer must execute a comprehensive 7-step due diligence checklist.",
        ],
      },
      {
        sectionTitle: "The 7 Non-Negotiable Due Diligence Steps",
        paragraphs: [
          "1. Direct Directorate Verification: Check the file directly on the official records of DHA Lahore or the MGH project directorate.",
          "2. Biometric NADRA CNIC Validation: Cross-verify the original owner's identity using NADRA biometrics.",
          "3. NDC / Clearance Slip: Confirm that all development charges, transfer surcharges, and utility arrears are settled.",
          "4. Original Allocation / Affidavit Inspection: Never transact on photocopies; inspect the original security-watermarked document.",
          "5. FBR Filer Compliance: Calculate withholding taxes (Sections 236K and 236C) to avoid unexpected non-filer penalties.",
          "6. Authorized Agency Escrow: Transact exclusively through registered, reputable corporate advisories like Property Files Network.",
          "7. Immediate Transfer Execution: Ensure the formal transfer appointment is booked and completed promptly.",
        ],
        callout: {
          title: "The Property Files Network Guarantee",
          text: "Every property file traded through Property Files Network is verified directly with the governing authority before presentation. We ensure 100% legal safety and immediate transfer.",
        },
      },
    ],
  },
];

export const CRM_AGENTS = [
  "M Talha Cheema (Co-Founder)",
  "M Daud Ali Lashari (Co-Founder)",
  "Senior Investment Advisor",
  "DHA Property Files Specialist",
];

export const INITIAL_CRM_LEADS: Lead[] = [
  {
    id: "LD-1041",
    clientName: "Dr. Kamran Siddiqui",
    phone: "+44 7700 900412",
    email: "k.siddiqui@nhs-consultants.uk",
    originType: "Overseas Pakistani Diaspora",
    countryCity: "London, United Kingdom (Roots in Mirpur)",
    propertyCategory: "MGH Affidavit Files",
    specificProject: "Mangla Garrison Housing (MGH Pakistan)",
    preferredUnitType: "1 Kanal MGH Affidavit File",
    budgetDisplay: "PKR 65 Lakh – 95 Lakh",
    estimatedValuePKR: 85,
    assignedAgent: "M Talha Cheema (Co-Founder)",
    stage: "consultation",
    priority: "VIP",
    notes: [
      "Overseas physician based in London with family roots in Mirpur.",
      "Seeking two 1 Kanal MGH affidavit files for lakefront luxury villa construction.",
      "Routing transaction via Roshan Digital Account (RDA) with Special PoA guidance.",
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
    countryCity: "Lahore, Pakistan",
    propertyCategory: "Commercial Broadway Plazas",
    specificProject: "DHA Lahore Phase 8 (Broadway Commercial)",
    preferredUnitType: "8 Marla Commercial Broadway Plot",
    budgetDisplay: "PKR 18.00 Crore – 24.00 Crore",
    estimatedValuePKR: 210,
    assignedAgent: "M Daud Ali Lashari (Co-Founder)",
    stage: "contacted",
    priority: "VIP",
    notes: [
      "Textile industrialist looking for an 8 Marla commercial plot on main Broadway Phase 8.",
      "Planning a multi-storey corporate plaza for multinational bank leasing.",
      "Meeting scheduled at Office No. 98-D, Main Boulevard, DHA Phase 8 on Saturday.",
    ],
    createdAt: "2026-11-10",
    lastContacted: "Yesterday",
  },
  {
    id: "LD-1043",
    clientName: "Chaudhry Nadeem Akhtar",
    phone: "+92 321 5567890",
    email: "nadeem@jhelumholdings.pk",
    originType: "Pakistan",
    countryCity: "Jhelum & Dina, Punjab",
    propertyCategory: "MGH Affidavit Files",
    specificProject: "Mangla Garrison Housing (MGH Pakistan)",
    preferredUnitType: "10 Marla MGH Affidavit File (Cash Settlement)",
    budgetDisplay: "PKR 35 Lakh – 50 Lakh",
    estimatedValuePKR: 45,
    assignedAgent: "M Talha Cheema (Co-Founder)",
    stage: "new",
    priority: "High",
    notes: [
      "Local businessman from Jhelum looking to exchange two 10 Marla MGH affidavit files.",
      "Requested immediate valuation and fast cash settlement.",
    ],
    createdAt: "2026-11-15",
    lastContacted: "Just now",
  },
  {
    id: "LD-1044",
    clientName: "Engr. Waqas Mehmood",
    phone: "+971 50 491 8823",
    email: "waqas.m@emirateseng.ae",
    originType: "Overseas Pakistani Diaspora",
    countryCity: "Dubai, UAE",
    propertyCategory: "DHA Lahore Property Files",
    specificProject: "DHA Lahore Phase 9 Prism",
    preferredUnitType: "1 Kanal Balloted Plot File",
    budgetDisplay: "PKR 2.50 Crore – 3.20 Crore",
    estimatedValuePKR: 28,
    assignedAgent: "M Daud Ali Lashari (Co-Founder)",
    stage: "closed",
    priority: "High",
    notes: [
      "Dubai resident closed 1 Kanal plot in Phase 9 Prism Sector C.",
      "Biometric DHA transfer verified through Embassy attested PoA.",
      "Client satisfied; planning to explore Phase 10 allocation files next quarter.",
    ],
    createdAt: "2026-11-04",
    lastContacted: "3 days ago",
  },
  {
    id: "LD-1045",
    clientName: "Sardar Taimur Khan",
    phone: "+92 333 5123456",
    email: "taimur.khan@islamabadgroup.pk",
    originType: "Pakistan",
    countryCity: "Islamabad, Capital Territory",
    propertyCategory: "DHA Lahore Property Files",
    specificProject: "DHA Lahore Phase 10",
    preferredUnitType: "1 Kanal Allocation Files (Bulk 5 Files)",
    budgetDisplay: "PKR 5.00 Crore – 6.50 Crore",
    estimatedValuePKR: 60,
    assignedAgent: "M Talha Cheema (Co-Founder)",
    stage: "contacted",
    priority: "VIP",
    notes: [
      "Institutional investor from Islamabad seeking 5 allocation files in DHA Phase 10.",
      "Targeting 3-year holding horizon for maximum balloting return.",
    ],
    createdAt: "2026-11-14",
    lastContacted: "4 hours ago",
  },
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

