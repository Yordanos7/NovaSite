import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { industries, caseStudies } from "@/data/site";

export const metadata: Metadata = {
  title: "Industries — Nova Tech",
  description: "Sectors where Nova Tech has delivered production software: fintech, healthcare, logistics and education.",
};

const industryIcons: Record<string, string> = {
  Fintech: "◈",
  Healthcare: "◎",
  Logistics: "◉",
  Education: "◐",
};

export default function IndustriesPage() {
  return (
    <>
      {/* Page header */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <p className="eyebrow">Industries</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-[1.08] sm:text-5xl">
            Sectors where we have done this before
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
            We do not work across every industry. The ones below are where we have enough context to ask the right
            questions in the first conversation.
          </p>
        </div>
      </section>

      {/* Industries grid */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2">
            {industries.map((ind) => (
              <div key={ind.name} className="bg-background p-8 transition-colors hover:bg-secondary/20">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-2xl text-primary" aria-hidden="true">
                    {industryIcons[ind.name] ?? "◆"}
                  </span>
                  <h2 className="text-xl font-semibold">{ind.name}</h2>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{ind.note}</p>
                <p className="mt-4 font-mono text-[11px] text-ember">{ind.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related case studies */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <p className="eyebrow">Case studies by industry</p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Work from each sector</h2>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {caseStudies.map((c) => (
              <div
                key={c.slug}
                className="group flex flex-col rounded-lg border border-border bg-background p-6 transition-colors hover:bg-secondary/20"
              >
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ember">{c.industry}</p>
                <h3 className="mt-3 text-base font-semibold leading-snug">{c.client}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-3">{c.headline}</p>
                <div className="mt-4 border-t border-border pt-4">
                  {c.metrics.slice(0, 1).map((m) => (
                    <div key={m.label}>
                      <p className="font-display text-xl font-semibold">{m.value}</p>
                      <p className="mt-0.5 text-xs text-muted-foreground">{m.label}</p>
                    </div>
                  ))}
                </div>
                <Link
                  href="/work"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors group-hover:text-foreground"
                >
                  Read more <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

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
