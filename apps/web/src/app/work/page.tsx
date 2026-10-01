import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { caseStudies } from "@/data/site";

export const metadata: Metadata = {
  title: "Work — Nova Tech",
  description: "Selected case studies from Nova Tech engagements across fintech, healthcare, logistics and education.",
};

export default function WorkPage() {
  return (
    <>
      {/* Page header */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <p className="eyebrow">Work</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-[1.08] sm:text-5xl">
            Selected engagements
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Eighteen engagements delivered since 2019. These are the four we can talk about in detail.
          </p>
        </div>
      </section>

      {/* Case studies */}
      {caseStudies.map((c, i) => (
        <section key={c.slug} className="border-b border-border">
          <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
            <div className={`grid items-center gap-12 lg:grid-cols-2 ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
              {/* Image placeholder */}
              <div className="overflow-hidden rounded-lg border border-border bg-secondary/30 aspect-[4/3] flex items-center justify-center">
                <span className="font-mono text-xs text-muted-foreground">{c.client} · {c.industry}</span>
              </div>

              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ember">
                  {c.client} · {c.industry}
                </p>
                <h2 className="mt-4 text-2xl font-semibold leading-tight sm:text-3xl">{c.headline}</h2>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{c.challenge[0]}</p>

                <div className="mt-8 grid grid-cols-2 gap-6 border-t border-border pt-6 sm:grid-cols-3">
                  {c.metrics.map((m) => (
                    <div key={m.label} className="border-l border-primary/40 pl-4">
                      <p className="font-display text-xl font-semibold">{m.value}</p>
                      <p className="mt-1 text-xs leading-snug text-muted-foreground">{m.label}</p>
                    </div>
                  ))}
                </div>

                {c.quote && (
                  <blockquote className="mt-8 border-l-2 border-primary/40 pl-4 text-sm italic leading-relaxed text-muted-foreground">
                    "{c.quote.text}"
                    <footer className="mt-2 not-italic font-medium text-foreground/70">
                      — {c.quote.name}, {c.quote.role}
                    </footer>
                  </blockquote>
                )}

                <div className="mt-8 flex flex-wrap items-center gap-2">
                  {c.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded border border-border bg-secondary/40 px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-8">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-primary"
                  >
                    Discuss a similar project <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
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
              href="/services"
              className="inline-flex items-center gap-1.5 rounded-md border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-all hover:border-foreground/35 hover:bg-secondary/60"
            >
              Our services <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
