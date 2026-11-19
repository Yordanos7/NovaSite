import type { Metadata } from "next";
import Link from "next/link";
import { contactDetails, stats } from "@/data/site";
import { ShieldCheck, Cpu, Layers, HeartHandshake, MapPin } from "lucide-react";
import { EthiopianAccentLine } from "@/components/site/EthiopianPattern";

export const metadata: Metadata = {
  title: "About Us — Ethiora Technology PLC Ethiopia",
  description:
    "Ethiora Technology PLC is a premier Ethiopian enterprise software engineering firm. Learn about our mission, principles, and specialized digital platforms.",
};

const values = [
  {
    icon: ShieldCheck,
    title: "100% Code & Data Sovereignty",
    body: "Every database, source repository, Docker container, and cloud credential belongs entirely to your business from day one. Zero vendor lock-in.",
  },
  {
    icon: Cpu,
    title: "Battle-Tested Local Infrastructure",
    body: "Our systems are architected to gracefully handle power interruptions, low-bandwidth networks, and offline data reconciliation.",
  },
  {
    icon: Layers,
    title: "Native Banking & Telebirr Integrations",
    body: "We don't rely on fragile third-party scrapers. We integrate directly with official merchant APIs from Telebirr, CBE Birr, Chapa, and Awash Bank.",
  },
  {
    icon: HeartHandshake,
    title: "Senior Engineering Delivery",
    body: "Experienced software engineers and architects design, build, and deploy your systems with dedicated accountability and transparent milestones.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-transparent via-[#0866F6]/5 to-transparent">
        <EthiopianAccentLine />
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3.5 py-1 text-xs font-medium text-[#0866F6] dark:text-[#38BDF8]">
            <span>Headquartered in Addis Ababa · Ethiopia</span>
          </div>
          <h1 className="mt-4 max-w-4xl font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
            Engineering Ethiopian Enterprise Excellence
          </h1>
          <p className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-muted-foreground">
            Ethiora Technology PLC was founded to bridge world-class software engineering with deep local operational insight. We turn complex business workflows into scalable, resilient digital systems.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="border-b border-border py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 lg:grid-cols-[260px_1fr]">
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-[#0866F6] dark:text-[#38BDF8] font-semibold">
                Our Mission
              </span>
              <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold text-foreground">
                Built in Ethiopia for Modern Enterprise
              </h2>
              <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
                <MapPin className="h-4 w-4 text-[#0866F6]" />
                <span>Bole Medhanialem, Addis Ababa</span>
              </div>
            </div>

            <div className="max-w-2xl space-y-5 text-sm sm:text-base leading-relaxed text-muted-foreground">
              <p>
                Ethiora Technology PLC was established to address a persistent challenge in the Ethiopian digital economy: organizations were frequently forced to choose between rigid, costly foreign software that failed to integrate with local payment rails like Telebirr and CBE, or fragile prototypes that broke down under real operational volume.
              </p>
              <p>
                We build scalable, enterprise-grade software platforms using modern, type-safe technologies including Next.js, React, Node.js, Flutter, and PostgreSQL—architected specifically for high availability, multi-branch scaling, and data security.
              </p>
              <p>
                Today, Ethiora Technology PLC designs and supports mission-critical software across financial cooperative federations (Soser Union), hospitality operating systems (Alyah Restaurant OS), clinical hospital suites (Ethiora HMS), and nationwide distribution supply chains.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-b border-border bg-secondary/15 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="font-mono text-xs uppercase tracking-wider text-[#0866F6] dark:text-[#38BDF8] font-semibold">
              Our Principles
            </span>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-foreground">How We Build Differently</h2>
            <p className="mt-2 text-sm sm:text-base text-muted-foreground">
              Core commitments that guide every project we architect and deliver.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="rounded-xl border border-border bg-background p-8 shadow-sm">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 text-[#0866F6] dark:text-[#38BDF8]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold text-foreground">{v.title}</h3>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground">{v.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Corporate Standards */}
      <section className="border-b border-border py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="font-mono text-xs uppercase tracking-wider text-[#0866F6] dark:text-[#38BDF8] font-semibold">
              Operational Rigor
            </span>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-foreground">
              Enterprise Delivery Standards
            </h2>
            <p className="mt-2 text-sm sm:text-base text-muted-foreground">
              Structured engineering practices designed for stability, compliance, and long-term success.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            <div className="rounded-xl border border-border bg-card p-7 shadow-xs">
              <span className="font-mono text-xs font-bold text-[#0866F6] dark:text-[#38BDF8]">01 // ARCHITECTURE</span>
              <h3 className="mt-3 font-display text-base font-bold text-foreground">Modern Scalable Stacks</h3>
              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                Full-stack systems engineered with Next.js, React, Node.js, and PostgreSQL—delivering rapid response times and high fault tolerance.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-7 shadow-xs">
              <span className="font-mono text-xs font-bold text-[#0866F6] dark:text-[#38BDF8]">02 // INTEGRATIONS</span>
              <h3 className="mt-3 font-display text-base font-bold text-foreground">Direct Payment Rail APIs</h3>
              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                Direct integrations with Telebirr, CBE Birr, Chapa, Awash Bank, and SMS gateways, ensuring automated multi-channel financial settlements.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-7 shadow-xs">
              <span className="font-mono text-xs font-bold text-[#0866F6] dark:text-[#38BDF8]">03 // SLA SUPPORT</span>
              <h3 className="mt-3 font-display text-base font-bold text-foreground">Dedicated On-Site Support</h3>
              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                Local engineering presence in Addis Ababa providing proactive monitoring, staff onboarding, and continuous maintenance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border bg-secondary/15 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 sm:grid-cols-3">
            {stats.map((s) => (
              <div key={s.l} className="rounded-xl border border-border bg-background p-6 text-center">
                <p className="font-display text-3xl font-bold text-[#0866F6] dark:text-[#38BDF8]">{s.v}</p>
                <p className="mt-1 text-xs text-muted-foreground">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-20 text-center">
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-xs font-mono uppercase tracking-wider text-[#0866F6] dark:text-[#38BDF8]">Let's collaborate in Addis Ababa</p>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-foreground">
            Ready to Build Your Next Product?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground">
            Visit our office at Bole Medhanialem or connect with us online for a technical consultation.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-[#0866F6] px-6 py-3 text-sm font-semibold text-white shadow-md shadow-blue-500/20 transition-all hover:bg-[#0650c5]"
            >
              Start Free Consultation
            </Link>
            <a
              href={`tel:${contactDetails.phone}`}
              className="inline-flex items-center justify-center rounded-md border border-border px-6 py-3 text-sm font-semibold text-foreground hover:border-[#0866F6] hover:text-[#0866F6] transition-all"
            >
              Call {contactDetails.displayPhone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
