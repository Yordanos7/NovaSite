export type Product = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  badge?: string;
  features: string[];
  scope: string;
  techStack: string[];
  ctaLink: string;
};

export const products: Product[] = [
  {
    slug: "digital-equb",
    name: "Digital Equb Platform",
    tagline: "Automated traditional savings, member draws & secure contribution management",
    description:
      "A complete digital system transforming traditional Ethiopian Equb. Members join pools, track payment cycles, receive lottery draw notifications, and make instant payments via Telebirr or CBE Birr. Organizers gain transparent accounting and automated ledger audits.",
    badge: "Most Popular in Ethiopia",
    features: [
      "Member verification & multi-tier pool configuration",
      "Automated draw algorithm with verifiable fairness",
      "Telebirr, Chapa & CBE Birr contribution collection",
      "Automated SMS/Telegram notifications for rounds and winners",
      "Organizer dashboard with real-time financial reconciliation",
    ],
    scope: "Mobile App (iOS & Android) + Web Admin Portal + Automated Payment Reconciliation",
    techStack: ["React Native", "Next.js", "Node.js", "PostgreSQL", "Telebirr API", "Chapa"],
    ctaLink: "/contact?product=digital-equb",
  },
  {
    slug: "ride-hailing",
    name: "Ride-Hailing & Dispatch Platform",
    tagline: "Full-scale transport ecosystem with passenger app, driver app & fleet dispatch",
    description:
      "End-to-end taxi and logistics software tailored for the Ethiopian transport ecosystem. Includes real-time GPS routing, localized tariff configurations (peak hours, distance, waiting), offline call-center integration, and multi-wallet driver payouts.",
    badge: "Enterprise Ready",
    features: [
      "Dedicated Passenger app with live driver tracking & fare estimates",
      "Driver app with turn-by-turn navigation & daily earnings reports",
      "Call-center dispatcher console for phone booking assistance",
      "Dynamic fare pricing, promo codes, and corporate fleet accounts",
      "In-app payments via Telebirr, cash, or credit balance",
    ],
    scope: "Passenger App + Driver App + Dispatcher Web Console + Super Admin Backend",
    techStack: ["Flutter / React Native", "Go / Node.js", "Redis", "PostgreSQL", "Google Maps API", "WebSockets"],
    ctaLink: "/contact?product=ride-hailing",
  },
  {
    slug: "telebirr-chapa-ecommerce",
    name: "E-Commerce & Local Payment Engine",
    tagline: "High-conversion online stores with seamless Telebirr, Chapa & CBE Birr checkout",
    description:
      "Modern e-commerce platform and marketplace tailored for Ethiopian consumer behavior. Solves local checkout friction with one-click Telebirr USSD/QR payments and Chapa gateway, alongside inventory tracking, delivery agent dispatch, and seller dashboards.",
    badge: "High Conversion",
    features: [
      "Direct Telebirr and Chapa API checkout with automatic payment confirmation",
      "Addis Ababa address & sub-city delivery fee calculator",
      "Multi-vendor seller marketplace or single-brand flagship storefront",
      "Automated receipt generation & SMS order status updates",
      "Inventory alerts and POS sync for brick-and-mortar stores",
    ],
    scope: "Customer Storefront + Mobile App + Merchant Dashboard + Delivery Driver App",
    techStack: ["Next.js 16", "Tailwind CSS", "Express / tRPC", "PostgreSQL", "Telebirr Gateway", "Chapa"],
    ctaLink: "/contact?product=ecommerce",
  },
  {
    slug: "sacco-cooperative-portal",
    name: "Cooperative & SACCO Banking Platform",
    tagline: "Enterprise member portal, savings, loans & dividend calculations for Ethiopian unions",
    description:
      "Enterprise management and member self-service platform engineered for Savings and Credit Cooperative Unions (SACCOs) across Ethiopia. Streamlines member share tracking, automated loan amortization schedules, dividend payouts, and regulatory reporting.",
    badge: "Soser Union Proven",
    features: [
      "Multi-branch SACCO member registries and digital account ledgers",
      "Automated loan application, underwriting & repayment schedules",
      "Dividend computation and share capital accounting",
      "Direct Telebirr and CBE mobile savings collection integrations",
      "Audit-ready financial statements conforming to Ethiopian cooperative guidelines",
    ],
    scope: "Union HQ Portal + Branch Officer Console + Member Mobile/Web Access",
    techStack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Telebirr API", "CBE Birr"],
    ctaLink: "/contact?product=sacco-portal",
  },
  {
    slug: "hospital-management",
    name: "Ethiora HMS — Hospital & Clinic Suite",
    tagline: "EMR, outpatient queue, diagnostic lab & pharmacy management automation",
    description:
      "Clinical workflow automation built around medical governance, patient records privacy, and rapid doctor workflows. Manages reception triage, electronic medical records (EMR), laboratory test orders, and in-house pharmacy dispensing.",
    badge: "Clinical Standard",
    features: [
      "Patient registration, biometric/card identification & queue management",
      "Doctor EMR consultation console with prescription history",
      "Laboratory test orders, result verification & digital report printing",
      "Pharmacy stock tracking, batch expiration alerts & cash/insurance billing",
      "Comprehensive daily revenue and departmental financial audits",
    ],
    scope: "Hospital Intranet / Cloud Suite + Reception POS + Doctor & Lab Terminals",
    techStack: ["React", "Node.js", "PostgreSQL", "HL7 FHIR", "Redis", "Tailwind CSS"],
    ctaLink: "/contact?product=hospital-management",
  },
  {
    slug: "enterprise-erp",
    name: "Ethiora ERP & Enterprise Suite",
    tagline: "Connected accounting, inventory, HR payroll & Ethiopian tax compliance",
    description:
      "Enterprise Resource Planning platform tailored for Ethiopian manufacturing, import/export, and distribution companies. Integrates inventory control, sales orders, warehouse transfers, employee payroll (with local tax brackets), and financial ledgers.",
    badge: "Flagship ERP",
    features: [
      "Inventory management across multiple warehouses and retail branches",
      "Sales orders, purchase requisitions, and vendor payment tracking",
      "Ethiopian payroll engine with income tax, pension & provident fund calculations",
      "ERCA/tax-compliant invoicing and financial audit trail",
      "Executive analytics dashboard with cash-flow forecasting",
    ],
    scope: "Custom Tailored Enterprise Suite + Mobile Manager App",
    techStack: ["TypeScript", "Next.js", "PostgreSQL", "tRPC", "Prisma", "Redis"],
    ctaLink: "/contact?product=business-erp",
  },
  {
    slug: "restaurant-os-qr-menu",
    name: "Alyah Restaurant OS & Digital QR Menu",
    tagline: "End-to-end restaurant operating system with QR ordering, Kitchen Display (KDS) & Cloud POS",
    description:
      "Ethiopia's leading digital restaurant management suite. Unifies interactive table QR digital menus, waiter terminals, kitchen order routing (KDS), cloud Point-of-Sale (POS), inventory depletion tracking, and automated Telebirr & CBE Birr customer checkout.",
    badge: "Hospitality Flagship",
    features: [
      "Table QR code generation with instant contactless mobile ordering",
      "Interactive digital menu with dish customizations, photos & bilingual tags",
      "Live Kitchen Display System (KDS) & waiter call/dispatch hub",
      "Cloud POS with automated table billing & split-bill support",
      "Direct Telebirr QR, CBE Birr & cash daily shift reconciliation",
      "Inventory batch alerts, recipe costing & multi-branch analytics",
    ],
    scope: "Guest QR Web App + Waiter Mobile Terminal + Kitchen KDS Terminal + Cloud Manager Portal",
    techStack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "Telebirr API"],
    ctaLink: "/contact?product=restaurant-os",
  },
];

export type Service = {
  slug: string;
  name: string;
  summary: string;
  included: string[];
  audience: string;
  engagement: string;
};

export const services: Service[] = [
  {
    slug: "mobile-app-development",
    name: "Mobile App Development",
    summary:
      "High-performance iOS and Android applications built natively and with cross-platform frameworks. Optimized for low-bandwidth environments and intuitive for Ethiopian users.",
    included: [
      "User journey mapping & interactive UX prototypes",
      "Cross-platform Flutter & React Native engineering",
      "Offline-first sync for intermittent connectivity",
      "Integration with Telebirr, CBE Birr & SMS OTP verification",
      "Play Store & App Store publishing and compliance",
    ],
    audience:
      "Startups and enterprises launching on-demand services, customer loyalty apps, fintech wallets, or field-agent mobile tools.",
    engagement:
      "6–14 weeks, delivered in 2-week agile sprints with testable APKs and iOS TestFlight builds provided each cycle.",
  },
  {
    slug: "custom-software-erp",
    name: "Custom Software & ERP Systems",
    summary:
      "Purpose-built enterprise platforms, operational software, and centralized databases designed around your exact workflows rather than forced off-the-shelf constraints.",
    included: [
      "Detailed business process modeling and system architecture",
      "Role-based access control, approval hierarchies & audit logs",
      "Multi-branch inventory, sales, accounting and HR modules",
      "Data migration from legacy systems or Excel spreadsheets",
      "Comprehensive staff training, runbooks and dedicated SLA",
    ],
    audience:
      "Organizations replacing fragmented spreadsheets, paper registers, or rigid software with a system built for their specific operations.",
    engagement:
      "8–20 weeks, beginning with a 2-week architectural assessment and delivered incrementally.",
  },
  {
    slug: "payment-system-integration",
    name: "Payment & API System Integrations",
    summary:
      "Direct engineering integrations with Telebirr, Chapa, CBE Birr, Awash Bank, SMS gateways, and government/INSA standard APIs.",
    included: [
      "Telebirr H5, Web & QR payment integration",
      "Chapa payment gateway checkout & webhook reconciliation",
      "Automated escrow and split-payment disbursement",
      "Ethio Telecom bulk SMS OTP & notification gateways",
      "Bank webhook listeners with automated retry and refund protection",
    ],
    audience:
      "Companies that need to accept digital payments reliably in Ethiopian Birr or international cards without drop-offs.",
    engagement:
      "2–6 weeks, complete with sandbox testing, live merchant verification, and automated settlement reconciliation.",
  },
  {
    slug: "ai-applied-intelligence",
    name: "AI & Applied Intelligence",
    summary:
      "Practical machine learning and language models tailored for Ethiopian languages, customer support automation, and document extraction.",
    included: [
      "Amharic & English multilingual AI assistants and chatbots",
      "OCR document extraction for IDs, invoices, and receipts",
      "Automated customer ticket triage and sentiment analysis",
      "Private data retrieval (RAG) over company policies and manuals",
      "Cost, latency, and accuracy quality monitoring",
    ],
    audience:
      "Businesses seeking to automate high-volume customer inquiries, document processing, or repetitive back-office approvals.",
    engagement:
      "4–8 weeks, beginning with a proof-of-concept against your own data with measurable accuracy gates.",
  },
  {
    slug: "web-portal-development",
    name: "Web Platforms & Portals",
    summary:
      "Lightning-fast, search-engine-optimized websites and web portals that convert visitors and provide effortless digital services.",
    included: [
      "Next.js full-stack architecture with instant page loads",
      "Tailwind CSS responsive design for all screen sizes",
      "Interactive customer dashboards and client portals",
      "Technical SEO, accessibility compliance, and analytics tracking",
      "High-security cloud hosting and automated continuous deployment",
    ],
    audience:
      "Companies wanting a premier digital presence that builds trust and provides self-service capabilities to customers.",
    engagement:
      "4–10 weeks from initial design concepts to high-availability production launch.",
  },
  {
    slug: "technical-consulting",
    name: "Technical Consulting & Audits",
    summary:
      "Senior architecture reviews, technology feasibility assessments, security audits, and engineering team mentorship.",
    included: [
      "Architecture, database, and codebase scalability reviews",
      "Security audit and INSA compliance guidance",
      "Cloud infrastructure optimization (cost reduction & high availability)",
      "Vendor evaluation and build-versus-buy analysis",
      "Embedded pairing and mentoring for in-house developer teams",
    ],
    audience:
      "CEOs, CTOs, and founders navigating critical platform upgrades, replatforming decisions, or tech hiring.",
    engagement:
      "From 2-week fixed architecture audits to ongoing advisory retainers.",
  },
];

export type CaseStudy = {
  slug: string;
  client: string;
  industry: string;
  serviceSlugs: string[];
  timeline: string;
  headline: string;
  result: string;
  image: string;
  certificateImage?: string;
  liveUrl?: string;
  challenge: string[];
  approach: string[];
  metrics: { value: string; label: string }[];
  stack: string[];
  quote?: { text: string; name: string; role: string };
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "soser-union",
    client: "Soser Saving & Credit Cooperative Union LTD",
    industry: "Banking & Cooperative Fintech",
    serviceSlugs: ["custom-software-erp", "payment-system-integration"],
    timeline: "2023–2024",
    headline: "Modern digital banking portal and cooperative management platform for Soser Union",
    result: "Unified multi-branch digital portal and member services",
    image: "/projects/soserunion/dashboard.webp",
    certificateImage: "/projects/soserunion/certificate.webp",
    liveUrl: "https://soserunoin.com",
    challenge: [
      "Soser Cooperative Societies Saving and Credit Union faced manual ledger bookkeeping, paper loan applications, and delays in managing savings across regional branch cooperatives.",
      "The union required a secure, role-isolated web platform allowing members and branch officers to view digital accounts, track loan repayments, and streamline financial operations.",
    ],
    approach: [
      "Engineered an enterprise portal and financial analytics dashboard using Next.js, TypeScript, PostgreSQL, and Prisma with role-based security.",
      "Integrated member identification, digital loan tracking, and real-time ledger accounting with Telebirr and CBE payment notifications.",
      "Delivered responsive mobile-ready web interfaces with localized language support and transparent ledger verification.",
    ],
    metrics: [
      { value: "100%", label: "digitized union member portal" },
      { value: "Multi-Branch", label: "cooperative federation connected" },
      { value: "0", label: "reconciliation discrepancies recorded" },
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL", "Better Auth"],
    quote: {
      text: "Ethiora Technology delivered an enterprise-grade digital portal that elevated Soser Union into a modern, transparent financial cooperative.",
      name: "Leadership Board",
      role: "Soser Saving & Credit Cooperative Union LTD",
    },
  },
  {
    slug: "alyah-restaurant-os",
    client: "Alyah Restaurant OS & QR Menu",
    industry: "Hospitality & Restaurant Tech",
    serviceSlugs: ["custom-software-erp", "payment-system-integration", "web-portal-development"],
    timeline: "2024–2025",
    headline: "Smart QR digital menu, kitchen display system (KDS) & cloud POS for Ethiopian restaurants and lounges",
    result: "120k+ orders handled across 200+ restaurants with automated Telebirr & CBE checkout",
    image: "/projects/restaurant-os/hero.webp",
    liveUrl: "https://menu.alyaherp.com/landing",
    challenge: [
      "Restaurants, cafes, and lounges in Addis Ababa suffered from slow paper menu ordering, delayed table billing, lost handwritten kitchen tickets, and payment reconciliation bottlenecks during peak dining hours.",
      "Hospitality operators needed an integrated digital ordering and POS platform tailored to local guest behavior, supporting bilingual menus (Amharic & English), waiter coordination, and instant Telebirr QR checkout.",
    ],
    approach: [
      "Engineered an all-in-one restaurant operating platform (Alyah Restaurant OS) featuring interactive guest QR digital menus with direct table ordering and localized Ethiopian cuisine support.",
      "Integrated real-time Kitchen Display Systems (KDS) and waiter handheld terminals for immediate order routing, eliminating lost tickets and cutting wait times by 40%.",
      "Built multi-wallet checkout connecting Telebirr QR, CBE Birr, and cash with automated shift-close financial reconciliation and centralized multi-branch inventory control.",
    ],
    metrics: [
      { value: "120k+", label: "orders processed seamlessly" },
      { value: "200+", label: "active restaurants & cafes" },
      { value: "40%", label: "faster table turnaround" },
    ],
    stack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "Telebirr Gateway", "CBE Birr"],
    quote: {
      text: "Alyah Restaurant OS streamlined our entire floor and kitchen workflow. Guests scan and order in seconds, orders hit the kitchen instantly, and billing with Telebirr is effortless.",
      name: "Managing Director",
      role: "Bole Lounge & Fine Dining, Addis Ababa",
    },
  },
  {
    slug: "ethiora-hms",
    client: "Ethiora HMS — Clinical Hospital Suite",
    industry: "Healthcare & Clinical Systems",
    serviceSlugs: ["custom-software-erp", "web-portal-development"],
    timeline: "2024–2025",
    headline: "Automating clinical workflows, inpatient/outpatient EMR, and pharmacy inventory across Ethiopian clinics",
    result: "Deployed across clinical practices with zero data loss during power outages",
    image: "/logos/ethiora-emblem.jpg",
    challenge: [
      "Clinics and hospitals in Ethiopia frequently face paper record bottlenecks, lost patient charts, and pharmacy stock expiration without early FEFO warnings.",
      "Most imported healthcare software fails during local internet outages and lacks integration with Ethiopian pharmacy inventory workflows.",
    ],
    approach: [
      "Engineered an offline-first clinical platform (Ethiora HMS) with localized SQLite sync that functions seamlessly offline and syncs with cloud servers upon reconnection.",
      "Built role-isolated modules for Reception Triage, Doctor EMR Consultations, Nurse Vital Signs, Laboratory Orders, and FEFO Pharmacy Dispensing.",
      "Implemented automated drug batch expiry notifications and daily departmental financial reconciliation.",
    ],
    metrics: [
      { value: "0 min", label: "downtime during internet interruptions" },
      { value: "100%", label: "automated drug expiration tracking" },
      { value: "6 Roles", label: "unified into one clinical workflow" },
    ],
    stack: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "SQLite", "Prisma"],
    quote: {
      text: "Ethiora HMS transformed our clinic. Doctors pull up medical histories in seconds, and our pharmacy never dispenses expired medications.",
      name: "Clinical Operations Lead",
      role: "Specialty Healthcare Center, Addis Ababa",
    },
  },
  {
    slug: "digital-equb-engine",
    client: "Ethiora Digital Equb Engine",
    industry: "Fintech & Community Savings",
    serviceSlugs: ["mobile-app-development", "payment-system-integration"],
    timeline: "2024–2025",
    headline: "Digitizing traditional rotating savings circles with automated Telebirr collection and fair lotteries",
    result: "Eliminated cash handling risks and organizer default disputes",
    image: "/logos/ethiora-emblem.jpg",
    challenge: [
      "Traditional Equbs in Ethiopia depend on physical cash collection, paper ledgers, and manual lotteries prone to disputes and defaults.",
      "Organizers in merchant associations and diaspora communities struggled with collecting contributions on time and tracking payouts transparently.",
    ],
    approach: [
      "Built a secure digital Equb engine with automated round scheduling, guarantor verification, and provably fair draw algorithms.",
      "Integrated direct mobile wallet deductions via Telebirr and Chapa with automated SMS notification triggers to members.",
      "Provided an organizer dashboard with real-time audit logs and automated payout disbursement receipts.",
    ],
    metrics: [
      { value: "100%", label: "automated contribution tracking" },
      { value: "Provably Fair", label: "cryptographic lottery draws" },
      { value: "0", label: "reconciliation discrepancies" },
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Telebirr API", "Chapa Gateway", "PostgreSQL"],
    quote: {
      text: "The digital Equb platform brings modern financial transparency to our traditional community savings while keeping the exact cultural trust we value.",
      name: "Community Coordinator",
      role: "Merchant Savings Circle, Addis Ababa",
    },
  },
  {
    slug: "wholesale-distribution-erp",
    client: "Ethiora Wholesale & Distribution ERP",
    industry: "Wholesale, Trade & Distribution",
    serviceSlugs: ["custom-software-erp", "web-portal-development"],
    timeline: "2024–2025",
    headline: "Multi-warehouse inventory synchronization and rapid POS order booking for Ethiopian distributors",
    result: "Eliminated stock count discrepancies across Merkato and depot warehouses",
    image: "/logos/ethiora-emblem.jpg",
    challenge: [
      "Wholesale traders and importers in Addis Ababa faced severe stock discrepancies between central depots (Kality, Akaki) and retail branches in Merkato.",
      "Manual receipt writing caused long customer queues and delayed sales reconciliation at end-of-day.",
    ],
    approach: [
      "Implemented a real-time multi-depot inventory tracking system with barcode scanning and instant inter-warehouse stock transfers.",
      "Integrated fast Point-of-Sale (POS) order entry supporting dual cash and Telebirr QR payments.",
      "Added sales representative mobile order booking with offline catalog browsing and automatic sync.",
    ],
    metrics: [
      { value: "Real-Time", label: "multi-depot inventory visibility" },
      { value: "3×", label: "faster counter checkout speed" },
      { value: "100%", label: "automated daily cash/Telebirr reconciliation" },
    ],
    stack: ["Next.js", "TypeScript", "tRPC", "Prisma", "PostgreSQL", "Tailwind CSS"],
    quote: {
      text: "We now know our exact inventory counts across all our warehouses in real-time, and counter sales settle instantly via Telebirr.",
      name: "General Manager",
      role: "FMCG Distribution Depot, Addis Ababa",
    },
  },
];

export const industries = [
  {
    name: "Healthcare & Clinical Systems",
    icon: "🏥",
    badge: "Ethiora HMS Flagship",
    note: "Comprehensive clinical workflow automation engineered for Ethiopian private clinics, referral hospitals, and diagnostic centers. Unifies patient registration, doctor diagnosis consoles, nurse triage, FEFO pharmacy inventory, and digital laboratory test reports with offline-first synchronization during local network downtime.",
    capabilities: [
      "Outpatient & Inpatient EMR",
      "Doctor consultation & digital prescriptions",
      "FEFO pharmacy stock & batch expiration alerts",
      "Lab order tracking & automated test result delivery",
      "Local offline database with automated cloud sync",
    ],
    detail: "Specialty Clinics, Referral Hospitals & Diagnostic Labs across Addis Ababa & Regional Cities",
  },
  {
    name: "Cooperative Unions & SACCO Fintech",
    icon: "🏦",
    badge: "Enterprise Soser Union",
    note: "Enterprise digital cooperative platforms connecting union headquarters with primary Savings and Credit Cooperative (SACCO) societies. Digitizes member share capital, voluntary/compulsory savings, loan underwriting, dividend distribution, and automated ledger reconciliation with native Telebirr and CBE payment gateways.",
    capabilities: [
      "Multi-branch SACCO federation management",
      "Member share capital & savings tracking",
      "Automated loan amortization & repayment scheduling",
      "Native Telebirr, CBE Birr & Chapa payment APIs",
      "Audit-ready regulatory ledgers & member statements",
    ],
    detail: "Soser Saving & Credit Cooperative Union Ltd. and Regional SACCO Federations",
  },
  {
    name: "Digital Equb & Community Finance",
    icon: "🪙",
    badge: "Traditional Savings Digitized",
    note: "Modernizing Ethiopia's time-tested rotating savings and credit associations (ዲጂታል ዕቁብ). Automates round schedules, transparent member contribution collections via mobile wallets, provably fair automated draws, and guarantor validation—eliminating physical cash handling risks and default disputes.",
    capabilities: [
      "Automated lottery rotation & transparent draw algorithms",
      "Daily, weekly, and monthly payment tracking",
      "Direct Telebirr & Chapa automated mobile deductions",
      "Guarantor verification & digital identity logging",
      "SMS alerts & automated bank disbursement records",
    ],
    detail: "Merchant Associations, Diaspora Equb Circles & Corporate Community Savings",
  },
  {
    name: "Wholesale, Import/Export & Distribution",
    icon: "📦",
    badge: "Trade & Inventory ERP",
    note: "Real-time inventory and sales order automation for Ethiopian wholesale distributors, FMCG suppliers, and industrial importers. Solves multi-depot stock sync across Addis Ababa trade centers (Merkato, Kality, Bole depots), tracks product batch numbers, and supports dual-currency Birr/USD valuation.",
    capabilities: [
      "Multi-warehouse inventory synchronization",
      "Fast Point-of-Sale (POS) & electronic invoicing",
      "Field sales agent mobile order booking",
      "Reorder level alerts & batch expiry control",
      "Cash, Telebirr & bank slip payment reconciliation",
    ],
    detail: "Merkato Wholesalers, Industrial Importers & Regional Distribution Depots",
  },
  {
    name: "Transport, Freight & Fleet Dispatch",
    icon: "🚚",
    badge: "Corridor & Fleet Logistics",
    note: "Fleet tracking and dispatch management engineered for Ethiopian commercial freight corridors (including Addis Ababa – Djibouti Port corridor and Modjo Dry Port). Tracks vehicle movements, driver trip logs, fuel consumption, maintenance schedules, and digital delivery confirmations under intermittent GSM signals.",
    capabilities: [
      "Milestone-based route & trip progress logging",
      "Driver dispatch manifests & cargo tracking",
      "Fuel consumption, service intervals & tire wear logs",
      "Offline mobile check-ins for remote transit zones",
      "Corporate account invoicing & digital proof-of-delivery",
    ],
    detail: "Heavy Cargo Transporters, Dry Port Forwarders & City Delivery Fleets",
  },
  {
    name: "Hospitality, Restaurants & Lounges",
    icon: "🍽️",
    badge: "Alyah Restaurant OS Flagship",
    note: "All-in-one restaurant and dining operations platform connecting customer table QR menus, handheld waiter order consoles, kitchen display terminals (KDS), and cloud POS. Accelerates order-to-kitchen velocity by 40% and integrates native Telebirr QR & CBE Birr contactless checkout across Ethiopian restaurants, cafes, and lounges.",
    capabilities: [
      "Contactless guest table QR ordering & digital menu",
      "Live Kitchen Display System (KDS) & waiter call hub",
      "Cloud POS with split-bill & table state management",
      "Native Telebirr QR, CBE Birr & cash daily shift reconciliation",
      "Recipe costing, inventory depletion & multi-branch oversight",
    ],
    detail: "Restaurants, Cafes, Lounges & Hotel Dining Venues across Addis Ababa",
  },
  {
    name: "Corporate Enterprises & Manufacturing",
    icon: "🏢",
    badge: "Local Compliance ERP",
    note: "Operational software and management platforms tailored for Ethiopian manufacturing plants, institutions, and corporate enterprises. Features localized HR & payroll configured with Ethiopian personal income tax tiers, pension contributions, fixed asset depreciation, and multi-tier procurement approvals.",
    capabilities: [
      "Ethiopian tax & pension compliant payroll engine",
      "Fixed asset tracking & automated depreciation",
      "Multi-stage procurement requisitions & approvals",
      "Document archiving & bilingual Amharic/English UI",
      "Role-based security & immutable financial audit logs",
    ],
    detail: "Manufacturing Plants, Commercial Enterprises & Institutional Headquarters in Ethiopia",
  },
];

export const processSteps = [
  {
    id: "01",
    name: "Plan & Discovery",
    duration: "1–2 weeks",
    description:
      "We sit with your operational leaders in Addis Ababa or via video conference, review existing workflows, evaluate local integration requirements (Telebirr, banks, INSA), and define an exact project scope.",
    deliverables: [
      "Comprehensive product requirements document (PRD)",
      "Technical architecture and database schema roadmap",
      "Fixed-price transparent proposal with delivery milestones",
    ],
    expect: "Two to three focused working sessions resulting in an actionable architectural plan you own.",
  },
  {
    id: "02",
    name: "UI/UX & Prototyping",
    duration: "2–3 weeks",
    description:
      "We design modern, intuitive interfaces shaped specifically for Ethiopian users. We prototype all critical user flows (passenger, driver, merchant, admin) and test them before engineering begins.",
    deliverables: [
      "Clickable high-fidelity Figma prototype",
      "Design system with reusable UI tokens",
      "User testing validation and feedback report",
    ],
    expect: "Weekly interactive reviews. You interact with the software on your phone before production code is written.",
  },
  {
    id: "03",
    name: "Agile Sprints & Build",
    duration: "4–14 weeks",
    description:
      "Software is engineered in two-week iterative sprints. Every single sprint finishes with a working, deployed staging build or mobile APK you can test. Approved feedback shapes the subsequent sprint.",
    deliverables: [
      "Working software build every two weeks",
      "End-to-end automated test coverage",
      "Live staging environment with continuous integration (CI)",
    ],
    expect: "Bi-weekly sprint demos, direct access to the engineering team, and zero surprise delays.",
  },
  {
    id: "04",
    name: "QA & Payment Integration",
    duration: "1–2 weeks",
    description:
      "We conduct thorough quality assurance, stress test under realistic African mobile bandwidth conditions, and perform live end-to-end sandbox testing for Telebirr, Chapa, CBE, and SMS gateways.",
    deliverables: [
      "Penetration testing & security audit report",
      "Live merchant payment verification certificate",
      "Disaster recovery and automated backup runbooks",
    ],
    expect: "Rigorous quality gates with 100% verified payment settlement before production release.",
  },
  {
    id: "05",
    name: "Deployment & Support",
    duration: "Ongoing / Lifetime Warranty",
    description:
      "We manage the production launch, app store publishing, data migration, and on-site staff training. We stay on call with a dedicated local SLA to guarantee uptime and system health.",
    deliverables: [
      "Production cloud deployment & Play/App Store launch",
      "Staff training sessions and video documentation",
      "24/7 incident response SLA and monitoring",
    ],
    expect: "Smooth cutover with zero downtime and dedicated engineers on standby.",
  },
];

export const team = [
  {
    name: "Yordanos Yohans",
    role: "Founder & Lead Software Architect",
    bio: "Full-stack system architect specializing in high-throughput distributed backends, modern Next.js/React engineering, and localized fintech payment integrations across East Africa.",
    initials: "YY",
  },
  {
    name: "Tewodros Kassahun",
    role: "Mobile Engineering Lead",
    bio: "Expert in Flutter and React Native mobile architecture. Has shipped top-ranking ride-hailing and banking apps across Ethiopia.",
    initials: "TK",
  },
  {
    name: "Bethlehem Tadesse",
    role: "Head of Product & UX Design",
    bio: "Designs operational dashboards and intuitive mobile interfaces that bridge modern aesthetics with Ethiopian cultural trust.",
    initials: "BT",
  },
  {
    name: "Abel Getachew",
    role: "Fintech & Cloud Systems Engineer",
    bio: "Specializes in Telebirr, Chapa, and banking gateway integrations, PostgreSQL query optimization, and high-availability cloud infrastructure.",
    initials: "AG",
  },
  {
    name: "Meron Alemu",
    role: "Quality Assurance & Security Specialist",
    bio: "Conducts automated security audits, penetration testing, and compliance verification to ensure enterprise peace of mind.",
    initials: "MA",
  },
  {
    name: "Ephrem Negash",
    role: "Client Engagement & Delivery Lead",
    bio: "Your primary point of contact from discovery through deployment, keeping sprints on schedule and communication transparent.",
    initials: "EN",
  },
];

export type ClientPartner = {
  name: string;
  category: string;
  logo: string;
  badge?: string;
  url?: string;
  description?: string;
};

export const clientPartners: ClientPartner[] = [
  {
    name: "Alyah Restaurant OS",
    category: "Hospitality & Dining Platform",
    logo: "/logos/alyah-logo.png",
    badge: "Official Platform",
    url: "https://menu.alyaherp.com/landing",
    description: "Digital QR Menu & Restaurant Operating System",
  },
  {
    name: "Soser Union",
    category: "Saving & Credit Cooperative Union Ltd.",
    logo: "/logos/soserunion.png",
    badge: "Official Client",
    url: "https://soserunoin.com",
    description: "Soser Cooperative Societies Saving and Credit Union Ltd.",
  },
  {
    name: "Telebirr",
    category: "Mobile Money & Payment API",
    logo: "/logos/telebirr.svg",
    badge: "Ethio Telecom",
    url: "https://www.ethiotelecom.et/telebirr/",
    description: "Nationwide Mobile Payment Gateway",
  },
  {
    name: "Commercial Bank of Ethiopia",
    category: "Core Banking & CBE Birr",
    logo: "/logos/cbe.svg",
    badge: "CBE Birr",
    url: "https://www.combanketh.et/",
    description: "National Commercial Bank of Ethiopia",
  },
  {
    name: "Bank of Abyssinia",
    category: "Banking Integration Partner",
    logo: "/logos/bank-of-abyssinia.svg",
    badge: "BoA Mobile",
    url: "https://www.bankofabyssinia.com/",
    description: "Bank of Abyssinia Digital Banking Services",
  },
  {
    name: "Awash Bank",
    category: "Banking Integration Partner",
    logo: "/logos/awash-bank.svg",
    badge: "Awash Birr",
    url: "https://awashbank.com/",
    description: "Awash International Bank Digital Services",
  },
  {
    name: "Coop Bank",
    category: "Cooperative Bank of Oromia",
    logo: "/logos/coop-bank.svg",
    badge: "Coopay-Ebirr",
    url: "https://coopbankoromia.com.et/",
    description: "Cooperative Bank of Oromia Financial Services",
  },
  {
    name: "Dev Bank of Ethiopia",
    category: "Development Finance Institution",
    logo: "/logos/dbe.png",
    badge: "DBE",
    url: "https://www.dbe.com.et/",
    description: "Development Bank of Ethiopia",
  },
  {
    name: "Chapa",
    category: "Verified Payment Gateway",
    logo: "/logos/chapa.svg",
    badge: "Fintech Partner",
    url: "https://chapa.co/",
    description: "Secure Card & Local Payment Engine",
  },
  {
    name: "Ethio Telecom",
    category: "Telecommunications & USSD",
    logo: "/logos/ethio-telecom.svg",
    badge: "Infrastructure",
    url: "https://www.ethiotelecom.et/",
    description: "National Telecommunications Provider",
  },
];

export const clients = [
  "Alyah Restaurant OS",
  "Soser Union",
  "Telebirr Integrated",
  "Commercial Bank of Ethiopia (CBE)",
  "Bank of Abyssinia",
  "Awash Bank",
  "Cooperative Bank of Oromia",
  "Development Bank of Ethiopia",
  "Chapa Verified Partner",
  "Ethio Telecom",
];

export const stats = [
  { v: "5+ Years", l: "Building in Ethiopia" },
  { v: "10+", l: "Digital Systems Delivered" },
  { v: "99.99%", l: "Production System Uptime" },
];

export const contactDetails = {
  phone: "+251 96 195 7957",
  displayPhone: "0961 95 79 57",
  secondaryPhone: "",
  secondaryDisplayPhone: "",
  email: "contact@ethioratech.com",
  supportEmail: "support@ethioratech.com",
  location: "Bole Medhanialem, Edna Mall Area, Addis Ababa, Ethiopia",
  telegram: "https://t.me/ethioratech",
  whatsapp: "https://wa.me/251961957957?text=Hello+Ethiora+Technology+PLC%2C+I+want+to+discuss+a+new+software+project.",
  workingHours: "Monday – Saturday: 8:30 AM – 6:00 PM (EAT)",
};
