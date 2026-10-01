import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/site";

export const metadata: Metadata = {
  title: "Services — Nova Tech",
  description: "Web & mobile apps, backend systems, AI integration and technical consulting.",
};

const included: Record<string, string[]> = {
  "web-mobile": [
    "Product and interaction design",
    "React / TypeScript front ends",
    "Design systems and component libraries",
    "Accessibility and performance budgets",
    "Automated test coverage and CI",
  ],
  "backend-cloud": [
    "API and data model design",
    "Postgres, queues and event pipelines",
    "Cloud infrastructure as code",
    "Observability, alerting and runbooks",
    "Migration from legacy systems",
  ],
  "ai-integration": [
    "Use-case scoping and feasibility review",
    "Retrieval pipelines over your own data",
    "Evaluation harnesses and quality gates",
    "Human review and fallback flows",
    "Cost and latency monitoring",
  ],
  consulting: [
    "Codebase and architecture audits",
    "Technical due diligence for investors",
    "Hiring and team structure advice",
    "Delivery process and release strategy",
    "Embedded pairing with your engineers",
  ],
};

const audience: Record<string, string> = {
  "web-mobile": "Companies replacing spreadsheets, legacy portals or an unmaintained internal tool with something people actually want to use.",
  "backend-cloud": "Teams whose product works but whose backend is slow, fragile, expensive, or all three at once.",
  "ai-integration": "Organisations with a repetitive, document-heavy or triage-heavy process and a clear definition of what a good answer looks like.",
  consulting: "CTOs, heads of engineering and institutions making a build-versus-buy or replatform decision.",
};

const engagement: Record<string, string> = {
  "web-mobile": "6–16 weeks, one designer and one to three engineers, shipped in two-week increments with a working build at the end of each.",
  "backend-cloud": "8–20 weeks, starting with a two-week architecture review that produces a written plan you own whether or not you continue with us.",
  "ai-integration": "Four-week evaluation pilot against your own data first. We only move to production once the numbers clear the bar you set.",
  consulting: "From a two-week fixed-scope review to an ongoing day-a-week advisory retainer. Always ends in a written document, never just a call.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Page header */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <p className="eyebrow">Services</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-[1.08] sm:text-5xl">
            Four ways we work with clients
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Every engagement starts with a discovery phase. We scope the problem before proposing a solution, and we
            only take on work where we have done it before.
          </p>
        </div>
      </section>

      {/* Services list */}
      {services.map((s, i) => (
        <section key={s.slug} id={s.slug} className="border-b border-border">
          <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
            <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
              <div>
                <span className="font-mono text-[11px] text-primary">{String(i + 1).padStart(2, "0")}</span>
                <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">{s.name}</h2>
                <p className="mt-5 text-base leading-relaxed text-muted-foreground">{s.summary}</p>
                <div className="mt-8 space-y-4">
                  <div>
                    <p className="eyebrow mb-3">Who it is for</p>
                    <p className="text-sm leading-relaxed text-muted-foreground">{audience[s.slug]}</p>
                  </div>
                  <div>
                    <p className="eyebrow mb-3">Typical engagement</p>
                    <p className="text-sm leading-relaxed text-muted-foreground">{engagement[s.slug]}</p>
                  </div>
                </div>
              </div>
              <div className="rounded-lg border border-border bg-secondary/20 p-8">
                <p className="eyebrow mb-5">What is included</p>
                <ul className="space-y-3">
                  {included[s.slug]?.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="relative overflow-hidden">
        <div className="hairline-grid pointer-events-none absolute inset-0 opacity-40" />
        <div className="nova-glow pointer-events-none absolute left-1/2 top-full h-[420px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40" />
        <div className="relative mx-auto max-w-6xl px-6 py-20 text-center sm:py-24">
          <p className="eyebrow">Next step</p>
          <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-semibold leading-tight sm:text-4xl">
            Tell us what is not working, and we will tell you honestly whether we can help.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground">
            A first conversation is 30 minutes, involves an engineer rather than a salesperson, and ends with a written
            summary of what we heard.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/85 border border-primary/60 shadow-[0_10px_40px_-18px_var(--primary)]"
            >
              Start a project
            </Link>
            <Link
              href="/work"
              className="inline-flex items-center gap-1.5 rounded-md border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-all hover:border-foreground/35 hover:bg-secondary/60"
            >
              See our work <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
