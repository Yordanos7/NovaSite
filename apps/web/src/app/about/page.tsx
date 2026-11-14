import type { Metadata } from "next";
import Link from "next/link";
import { contactDetails, stats, team } from "@/data/site";
import { ShieldCheck, Cpu, Layers, HeartHandshake, MapPin } from "lucide-react";
import { EthiopianAccentLine } from "@/components/site/EthiopianPattern";

export const metadata: Metadata = {
  title: "About Us — Nova Habesha ERP Ethiopia",
  description:
    "Nova Habesha is an Ethiopian enterprise software engineering company in Addis Ababa. Learn about our team, our mission, and our enterprise ERP systems.",
};

const values = [
  {
    icon: ShieldCheck,
    title: "100% Code & Data Sovereignty",
    body: "Every database, source repository, Docker container, and cloud credential belongs to your business from day one. Zero vendor lock-in.",
  },
  {
    icon: Cpu,
    title: "Battle-Tested Local Infrastructure",
    body: "Our systems are architected to gracefully handle Addis Ababa power fluctuations, low-bandwidth mobile connections, and offline reconciliation.",
  },
  {
    icon: Layers,
    title: "Native Banking & Telebirr Integrations",
    body: "We don't rely on third-party scrapers. We integrate directly with official merchant APIs from Telebirr, CBE Birr, Chapa, and Awash Bank.",
  },
  {
    icon: HeartHandshake,
    title: "Senior Engineers in Every Call",
    body: "The architects and engineers who design your system are the ones writing the code. We don't sell with executives and hand off to untrained juniors.",
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
            Nova Habesha was founded to bridge world-class software engineering with deep Ethiopian enterprise insight. We turn complex workflows into scalable, resilient digital systems.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="border-b border-border py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 lg:grid-cols-[260px_1fr]">
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-[#0866F6] dark:text-[#38BDF8] font-semibold">
                Our Story
              </span>
              <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold text-foreground">
                Built in Addis Ababa for Africa
              </h2>
              <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
                <MapPin className="h-4 w-4 text-[#0866F6]" />
                <span>Bole, Addis Ababa</span>
              </div>
            </div>

            <div className="max-w-2xl space-y-5 text-sm sm:text-base leading-relaxed text-muted-foreground">
              <p>
                Nova Habesha started with a clear observation: too many Ethiopian businesses were forced to choose between rigid, expensive foreign software that failed to integrate with Telebirr and local banking, or flimsy prototypes that crashed under real customer load.
              </p>
              <p>
                Led by software architect <strong className="text-foreground">Yordanos Yohans</strong>, we assembled an elite engineering team dedicated to building enterprise-grade systems with modern stacks: Next.js, React, Node.js, Flutter, and PostgreSQL.
              </p>
              <p>
                Today, Nova Habesha powers mission-critical software across ride-hailing networks, multi-campus school ERPs, digital Equb platforms, and nationwide supply chain operations.
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
              Four non-negotiable commitments to every client we partner with.
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

      {/* Team */}
      <section className="border-b border-border py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="font-mono text-xs uppercase tracking-wider text-[#0866F6] dark:text-[#38BDF8] font-semibold">
              Engineering Leadership
            </span>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-foreground">Meet the Builders</h2>
            <p className="mt-2 text-sm sm:text-base text-muted-foreground">
              Experienced engineers and designers who guide your product from inception to deployment.
            </p>
          </div>

          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((person) => (
              <li
                key={person.name}
                className="rounded-xl border border-border bg-card p-7 transition-all hover:border-[#0866F6] shadow-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#00267B] to-[#0866F6] font-display text-sm font-bold text-white shadow">
                  {person.initials}
                </div>
                <h3 className="mt-4 font-display text-base font-bold text-foreground">{person.name}</h3>
                <p className="font-mono text-[11px] uppercase tracking-wider text-[#0866F6] dark:text-[#38BDF8] font-medium mt-0.5">
                  {person.role}
                </p>
                <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{person.bio}</p>
              </li>
            ))}
          </ul>
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
