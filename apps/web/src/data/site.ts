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
    slug: "eschool-erp",
    name: "eSchool Management ERP",
    tagline: "Unified school administration from student admission to grading & fee tracking",
    description:
      "Comprehensive school management system engineered for Ethiopian private and public educational institutions. Connects school administration, teachers, students, and parents into one cohesive digital campus.",
    badge: "35+ Schools Deployed",
    features: [
      "Digital student admissions, records, and ID card generation",
      "Grade book, curriculum tracking, and report card generation (Ethiopian curriculum compliant)",
      "Automated school fee billing and online tuition payment via Telebirr & CBE",
      "Parent mobile portal for attendance, teacher notes, and exam schedules",
      "Teacher timetable scheduling and staff payroll processing",
    ],
    scope: "School Web ERP + Parent/Student Mobile App + Teacher Portal",
    techStack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Docker", "Telebirr API"],
    ctaLink: "/contact?product=eschool",
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
    slug: "peace-ride-hailing",
    client: "Peace Ride Ethiopia",
    industry: "Logistics & Transport",
    serviceSlugs: ["mobile-app-development", "payment-system-integration"],
    timeline: "14 weeks, 2025",
    headline: "Building a resilient ride-hailing and fleet dispatch ecosystem in Addis Ababa",
    result: "Scales to 120,000+ completed rides monthly",
    image: "/images/case-peace-ride.jpg",
    challenge: [
      "The client operated an urban transport fleet across Addis Ababa with unreliable manual phone dispatching and lost driver tracking during peak traffic hours.",
      "Competitor software had severe payment drop-offs when drivers attempted to reconcile cash and digital wallets at trip completion.",
    ],
    approach: [
      "Architected native iOS and Android apps with offline caching and rapid reconnect algorithms for areas with intermittent mobile cellular signals.",
      "Integrated real-time WebSockets dispatch console that matches the nearest available driver within 4 seconds.",
      "Implemented direct Telebirr and Chapa in-app payment with automated driver commission splits, reducing settlement disputes to near zero.",
    ],
    metrics: [
      { value: "120k+", label: "monthly rides dispatched" },
      { value: "4.2s", label: "average driver match time" },
      { value: "99.98%", label: "uptime during peak rush hours" },
    ],
    stack: ["Flutter", "Node.js", "PostgreSQL", "Redis", "Telebirr API", "Chapa", "WebSockets"],
    quote: {
      text: "Ethiora Technology understood local network conditions and driver behaviors better than any agency we evaluated. Our platform has run without a minute of downtime.",
      name: "Solomon Getachew",
      role: "Operations Director, Peace Ride",
    },
  },
  {
    slug: "eschool-management-erp",
    client: "eSchool Ethiopia Consortium",
    industry: "Education",
    serviceSlugs: ["custom-software-erp", "payment-system-integration"],
    timeline: "12 weeks, 2024",
    headline: "Digitizing 35 schools: student enrollment, grading & automated Telebirr tuition payments",
    result: "Cut administrative overhead by 70%",
    image: "/images/case-eschool.jpg",
    challenge: [
      "Schools faced endless queues of parents paying quarterly tuition at bank branches with manual receipt verification and delayed enrollment confirmation.",
      "Report cards and grade calculation required weeks of manual paper transcript entry with high error rates.",
    ],
    approach: [
      "Engineered a centralized multi-tenant school ERP with automated grade computation aligned with Ministry of Education standards.",
      "Built a seamless parent portal linked to student IDs that accepts tuition payments directly through Telebirr and CBE Birr with instant digital receipt issuance.",
      "Provided on-site teacher and administrator training across all 35 campuses.",
    ],
    metrics: [
      { value: "65,000+", label: "students managed across 35 campuses" },
      { value: "70%", label: "reduction in administrative overhead" },
      { value: "85%", label: "of parents now pay tuition via mobile" },
    ],
    stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Telebirr API", "Tailwind CSS"],
    quote: {
      text: "The tuition collection bottleneck used to consume our entire finance team for two weeks every quarter. Now 85% of parents pay through Telebirr from home, verified automatically.",
      name: "Tigist Mekonnen",
      role: "Managing Director, Bright Horizon Education Group",
    },
  },
  {
    slug: "damay-digital-equb",
    client: "Damay Equb Platform",
    industry: "Fintech",
    serviceSlugs: ["mobile-app-development", "payment-system-integration"],
    timeline: "10 weeks, 2025",
    headline: "Transforming traditional community savings into a secure, regulated digital Equb",
    result: "25,000+ active members with over 150M ETB in monthly rotation",
    image: "/images/case-equb.jpg",
    challenge: [
      "Traditional Equbs suffered from lack of trust, manual bookkeeping, delayed member contributions, and high risk of organizer default.",
      "The founders needed a platform that mirrored the social trust of Ethiopian culture while providing cryptographic transparency for lotteries.",
    ],
    approach: [
      "Built a secure digital Equb engine with automated round scheduling, guarantor verification, and provably fair randomized draw algorithms.",
      "Integrated bank escrow and digital wallet deduction via Telebirr and Chapa with automated notification triggers.",
      "Created an organizer audit console allowing verified leaders to manage multiple pools with transparent member visibility.",
    ],
    metrics: [
      { value: "150M+ ETB", label: "monthly savings volume rotated" },
      { value: "25,000+", label: "verified active members" },
      { value: "0", label: "reconciliation discrepancies recorded" },
    ],
    stack: ["React Native", "Next.js", "Go", "PostgreSQL", "Telebirr API", "Chapa Gateway"],
    quote: {
      text: "Ethiora Technology preserved the soul and trust of Equb while giving us enterprise-grade security. Our members feel completely safe.",
      name: "Dawit Abebe",
      role: "Co-Founder & CEO, Damay Equb",
    },
  },
  {
    slug: "silkroad-marketplace",
    client: "SilkRoad Ethiopia",
    industry: "Retail & E-Commerce",
    serviceSlugs: ["web-portal-development", "payment-system-integration"],
    timeline: "8 weeks, 2025",
    headline: "B2B & B2C multi-vendor marketplace with automated Addis Ababa delivery dispatch",
    result: "3.5× revenue increase and sub-second catalog browsing",
    image: "/images/case-silkroad.jpg",
    challenge: [
      "Customers abandoned cart checkouts due to lack of local mobile payment options and confusion over Addis Ababa delivery zones.",
      "Merchants had difficulty updating inventory across both their physical shops in Merkato and online storefronts.",
    ],
    approach: [
      "Redesigned the entire storefront on Next.js 16 with instant catalog search and localized sub-city address selectors.",
      "Implemented a dual Telebirr/Chapa checkout flow with instantaneous SMS order confirmations to both customer and merchant.",
      "Created a simple mobile dashboard for merchants to update stock with camera barcode scanning.",
    ],
    metrics: [
      { value: "3.5×", label: "increase in completed checkouts" },
      { value: "0.5s", label: "median catalog page load time" },
      { value: "400+", label: "merchants onboarded in Addis Ababa" },
    ],
    stack: ["Next.js", "React 19", "Express", "tRPC", "PostgreSQL", "Chapa", "Telebirr"],
    quote: {
      text: "Sales tripled in two months because customers could finally pay with Telebirr in two taps without leaving our website.",
      name: "Blen Haile",
      role: "Head of Digital Commerce, SilkRoad",
    },
  },
];

export const industries = [
  {
    name: "Banking & Fintech",
    note: "Cooperative banking portals, SACCO platforms, Telebirr and Chapa payment gateways, micro-lending systems, and automated ledger reconciliation.",
    detail: "15+ engagements · Soser Union, Regional SACCOs, Microfinance Unions",
  },
  {
    name: "Education & Academia",
    note: "School and university ERPs, student lifecycle management, digital grading, parent communication portals, and automated tuition payment processing.",
    detail: "35+ school campuses · Regional Academies, University Portals, Private School Networks",
  },
  {
    name: "Transport & Logistics",
    note: "Ride-hailing ecosystems (passenger, driver, dispatch), freight tracking, route optimization, and fleet fuel/maintenance management.",
    detail: "8 engagements · Urban Transport Fleets, Freight Carriers, Delivery Networks",
  },
  {
    name: "Healthcare & Pharmaceuticals",
    note: "Hospital management systems (PMS/EMR), clinic appointment queues, digital lab orders, pharmacy inventory, and insurance claims.",
    detail: "6 engagements · Diagnostic Centers, Regional Clinics, Pharmacy Chains",
  },
  {
    name: "Retail & E-Commerce",
    note: "Multi-vendor marketplaces, direct-to-consumer online stores, local delivery tracking, POS integration, and inventory sync across Merkato and retail branches.",
    detail: "20+ engagements · SilkRoad, Enova Mart, Addis Fashion Hub",
  },
  {
    name: "Hospitality & Tourism",
    note: "Hotel property management (PMS), tour booking engines, multilingual guest portals, and integrated restaurant POS systems.",
    detail: "10 engagements · Bespoke Tours Ethiopia, Maryland Tours, Boutique Hotels",
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
