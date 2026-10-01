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
        slug: "web-mobile",
        name: "Web & Mobile Apps",
        summary:
            "Production interfaces for internal tools, customer portals and operational software — built to be maintained by your team after we hand over.",
        included: [
            "Product and interaction design",
            "React / TypeScript front ends",
            "Design systems and component libraries",
            "Accessibility and performance budgets",
            "Automated test coverage and CI",
        ],
        audience:
            "Companies replacing spreadsheets, legacy portals or an unmaintained internal tool with something people actually want to use.",
        engagement:
            "6–16 weeks, one designer and one to three engineers, shipped in two-week increments with a working build at the end of each.",
    },
    {
        slug: "backend-cloud",
        name: "Backend & Cloud Systems",
        summary:
            "APIs, data pipelines and infrastructure that hold up under real load, real audits and real on-call rotations.",
        included: [
            "API and data model design",
            "Postgres, queues and event pipelines",
            "Cloud infrastructure as code",
            "Observability, alerting and runbooks",
            "Migration from legacy systems",
        ],
        audience:
            "Teams whose product works but whose backend is slow, fragile, expensive, or all three at once.",
        engagement:
            "8–20 weeks, starting with a two-week architecture review that produces a written plan you own whether or not you continue with us.",
    },
    {
        slug: "ai-integration",
        name: "AI Integration",
        summary:
            "Applied language-model and retrieval work tied to a measurable outcome — not a chatbot bolted onto a homepage.",
        included: [
            "Use-case scoping and feasibility review",
            "Retrieval pipelines over your own data",
            "Evaluation harnesses and quality gates",
            "Human review and fallback flows",
            "Cost and latency monitoring",
        ],
        audience:
            "Organisations with a repetitive, document-heavy or triage-heavy process and a clear definition of what a good answer looks like.",
        engagement:
            "Four-week evaluation pilot against your own data first. We only move to production once the numbers clear the bar you set.",
    },
    {
        slug: "consulting",
        name: "Technical Consulting",
        summary:
            "Architecture reviews, due diligence and hands-on guidance for in-house teams that need a second pair of experienced eyes.",
        included: [
            "Codebase and architecture audits",
            "Technical due diligence for investors",
            "Hiring and team structure advice",
            "Delivery process and release strategy",
            "Embedded pairing with your engineers",
        ],
        audience:
            "CTOs, heads of engineering and institutions making a build-versus-buy or replatform decision.",
        engagement:
            "From a two-week fixed-scope review to an ongoing day-a-week advisory retainer. Always ends in a written document, never just a call.",
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
    image: string; // public path e.g. /images/case-meridian.jpg
    challenge: string[];
    approach: string[];
    metrics: { value: string; label: string }[];
    stack: string[];
    quote?: { text: string; name: string; role: string };
};

export const caseStudies: CaseStudy[] = [
    {
        slug: "meridian-clearing",
        client: "Meridian Clearing",
        industry: "Fintech",
        serviceSlugs: ["backend-cloud", "web-mobile"],
        timeline: "14 weeks, 2024",
        headline: "Rebuilding a settlement pipeline that ran out of headroom",
        result: "Cut processing time by 40%",
        image: "/images/case-meridian.jpg",
        challenge: [
            "Meridian settled roughly 90,000 transactions a night through a batch process written eight years earlier. It had grown past its window: a run that once finished by 03:00 was finishing at 06:40, and any retry pushed it into the business day.",
            "Their operations team had no visibility into a run in progress. When something failed, the first signal was a client phone call.",
        ],
        approach: [
            "We started with two weeks of instrumentation before changing any logic — tracing the batch end to end so decisions were based on measurements rather than assumptions.",
            "The monolithic run was decomposed into idempotent stages behind a queue, so a failed stage retries on its own instead of restarting the night.",
            "We built an operations console that shows each stage live, with per-stage timings, exception queues and a manual replay control.",
        ],
        metrics: [
            { value: "40%", label: "reduction in nightly processing time" },
            { value: "6h40 → 4h00", label: "typical run completion" },
            { value: "0", label: "missed settlement windows since launch" },
        ],
        stack: ["TypeScript", "Node.js", "PostgreSQL", "Kafka", "Terraform", "AWS", "React"],
        quote: {
            text: "They spent the first fortnight measuring instead of rewriting. That is the reason the rewrite worked.",
            name: "Dana Whitfield",
            role: "Director of Engineering, Meridian Clearing",
        },
    },
    {
        slug: "atlas-freight",
        client: "Atlas Freight",
        industry: "Logistics",
        serviceSlugs: ["ai-integration", "backend-cloud"],
        timeline: "11 weeks, 2025",
        headline: "Automated exception triage across a 40-country freight network",
        result: "72% of exceptions resolved without a human",
        image: "/images/case-atlas.jpg",
        challenge: [
            "Atlas handled about 1,400 shipment exceptions a day — customs holds, missing documents, address mismatches — each read and routed manually by a coordinator.",
            "Coordinators spent most of their shift classifying rather than resolving, and response times drifted past the SLA during peak season.",
        ],
        approach: [
            "We defined a quality bar with the operations team first: an automated route had to be at least as accurate as a coordinator on a labelled set of 5,000 historical exceptions.",
            "A retrieval pipeline over their own carrier documentation and past resolutions produces a proposed route with a confidence score and a cited source.",
            "Anything below the confidence threshold goes to a human queue with the model's reasoning attached, so coordinators start from a draft rather than a blank screen.",
        ],
        metrics: [
            { value: "72%", label: "of exceptions routed without human review" },
            { value: "31 min → 6 min", label: "median time to first action" },
            { value: "98.1%", label: "routing accuracy on the audit set" },
        ],
        stack: ["Python", "TypeScript", "PostgreSQL", "pgvector", "Temporal", "GCP", "React"],
        quote: {
            text: "The pilot could have failed and we would still have had a usable evaluation set. That framing made it an easy decision to fund.",
            name: "Ruben Oyelaran",
            role: "COO, Atlas Freight",
        },
    },
    {
        slug: "vitals-network",
        client: "Vitals Network",
        industry: "Healthcare",
        serviceSlugs: ["web-mobile", "consulting"],
        timeline: "16 weeks, 2024",
        headline: "One referral workflow across 22 clinics",
        result: "Referral turnaround down from 9 days to 2",
        image: "/images/case-vitals.jpg",
        challenge: [
            "Twenty-two clinics each ran referrals their own way — fax, email, three different portals. Patients fell through the gaps and nobody could say where a referral was.",
            "Any replacement had to satisfy clinical governance, work on ageing hardware, and be learnable in a single shift.",
        ],
        approach: [
            "We shadowed intake staff at four clinics before designing anything, then tested paper prototypes on the same desks.",
            "The build is a single referral record with an explicit state machine, so every participant sees the same status and the same audit trail.",
            "We ran the rollout clinic by clinic with a two-week parallel period, and wrote the internal training material with their staff.",
        ],
        metrics: [
            { value: "9 → 2 days", label: "median referral turnaround" },
            { value: "22", label: "clinics on one workflow" },
            { value: "94%", label: "staff task completion in first-week testing" },
        ],
        stack: ["TypeScript", "React", "Node.js", "PostgreSQL", "Azure", "HL7 FHIR"],
        quote: {
            text: "They asked our intake coordinators harder questions than our own vendors ever have.",
            name: "Dr. Ines Marchetti",
            role: "Clinical Director, Vitals Network",
        },
    },
    {
        slug: "lumen-institute",
        client: "Lumen Institute",
        industry: "Education",
        serviceSlugs: ["web-mobile", "backend-cloud"],
        timeline: "9 weeks, 2025",
        headline: "A public course platform that survives enrolment week",
        result: "Handled 5× peak load at 38% lower cost",
        image: "/images/case-lumen.jpg",
        challenge: [
            "Lumen's enrolment platform fell over every intake. The fix each year was more servers, and the bill grew faster than enrolment did.",
            "The institute needed the site to stay fast for candidates on slow mobile connections in the middle of that peak.",
        ],
        approach: [
            "We load-tested the existing system to find the actual bottleneck — a single unindexed availability query — rather than scaling around it.",
            "Course catalogue pages were moved to statically rendered, cache-first delivery; only the seat-reservation path talks to the database.",
            "Enrolment now runs through a queued reservation with a visible position indicator, so the platform degrades honestly instead of timing out.",
        ],
        metrics: [
            { value: "5×", label: "peak concurrent load handled" },
            { value: "38%", label: "lower infrastructure cost" },
            { value: "0.4s", label: "median catalogue page load on 3G" },
        ],
        stack: ["TypeScript", "React", "PostgreSQL", "Redis", "Cloudflare", "Terraform"],
    },
];

export const industries = [
    {
        name: "Fintech",
        note: "Settlement and clearing pipelines, ledger design, audit trails and the operational tooling that regulated finance teams live in daily.",
        detail: "3 engagements · Meridian Clearing, two under NDA",
    },
    {
        name: "Healthcare",
        note: "Clinical workflow software built around governance requirements, HL7 FHIR interoperability and staff who cannot afford a slow interface.",
        detail: "2 engagements · Vitals Network, one regional trust",
    },
    {
        name: "Logistics",
        note: "Exception handling, carrier integrations and applied AI triage across networks where a delayed decision has a physical cost.",
        detail: "4 engagements · Atlas Freight and three carriers",
    },
    {
        name: "Education",
        note: "Enrolment and course delivery platforms that hold up under seasonal peaks without a permanent infrastructure bill.",
        detail: "2 engagements · Lumen Institute, one university faculty",
    },
];

export const processSteps = [
    {
        id: "01",
        name: "Discovery",
        duration: "1–2 weeks",
        description:
            "We sit with the people who will use the software, read the existing code, and write down what is actually true about the system today.",
        deliverables: [
            "Written problem statement and scope",
            "Technical findings from the current system",
            "Fixed-price proposal with a delivery plan",
        ],
        expect: "Two to four working sessions and one document you keep, whether or not we continue.",
    },
    {
        id: "02",
        name: "Design",
        duration: "2–4 weeks",
        description:
            "Interface and architecture are designed together. We prototype the difficult screens early and test them with real users before anything is built.",
        deliverables: ["Clickable prototype of core flows", "Architecture decision records", "Agreed success metrics"],
        expect: "Weekly reviews. You will see and click the product before we write production code.",
    },
    {
        id: "03",
        name: "Build",
        duration: "6–16 weeks",
        description:
            "Two-week increments, each ending in a deployed build on a staging environment you can use. No demo-only progress reports.",
        deliverables: ["Working software every two weeks", "Test suite and CI pipeline", "Open backlog and burn-up chart"],
        expect: "A standing 30-minute weekly call, an always-current staging link, and direct access to the engineers.",
    },
    {
        id: "04",
        name: "Launch",
        duration: "1–3 weeks",
        description:
            "We migrate data, run in parallel where the risk warrants it, and stay in the room during the cutover instead of handing over a repository.",
        deliverables: ["Migration and rollback plan", "Runbooks and alerting", "Team training sessions"],
        expect: "A named engineer on call through the cutover window and the first week after.",
    },
    {
        id: "05",
        name: "Support",
        duration: "Ongoing, optional",
        description:
            "A defined support agreement, or a structured handover to your team. We are happy to be the ones who make ourselves unnecessary.",
        deliverables: ["Response-time agreement", "Quarterly architecture review", "Documented handover"],
        expect: "No lock-in. You own the code, the infrastructure accounts and the documentation from day one.",
    },
];

export const team = [
    {
        name: "Nadia Farrow",
        role: "Principal Engineer & Co-founder",
        bio: "Fifteen years on distributed systems and payments infrastructure. Writes the architecture reviews.",
        initials: "NF",
    },
    {
        name: "Tomas Berg",
        role: "Product Design Lead & Co-founder",
        bio: "Designs operational software for people who use it eight hours a day. Formerly in-house at a logistics carrier.",
        initials: "TB",
    },
    {
        name: "Priya Raghavan",
        role: "Staff Engineer, Applied AI",
        bio: "Builds retrieval and evaluation pipelines. Insists on a measurable bar before anything ships.",
        initials: "PR",
    },
    {
        name: "Marcus Ilunga",
        role: "Platform Engineer",
        bio: "Infrastructure, observability and the migrations nobody volunteers for.",
        initials: "MI",
    },
    {
        name: "Sofia Lindqvist",
        role: "Senior Product Engineer",
        bio: "Front-end systems, accessibility and design system work across every client project.",
        initials: "SL",
    },
    {
        name: "Owen Castellanos",
        role: "Engagement Lead",
        bio: "Runs discovery and keeps scope honest. The person you will speak to most.",
        initials: "OC",
    },
];

export const clients = ["Client A", "Client B", "Client C", "Client D", "Client E", "Client F"];

export const contactDetails = {
    email: "hello@novatech.studio",
    location: "Studio 4, Rosewood Yard, Lisbon, Portugal",
    booking: "calendly.com/novatech/intro",
};
