import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { processSteps } from "@/data/site";

export const metadata: Metadata = {
  title: "Process — Nova Tech",
  description: "How Nova Tech runs engagements: discovery, design, build, launch and support.",
};

export default function ProcessPage() {
  return (
    <>
      {/* Page header */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <p className="eyebrow">Process</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-[1.08] sm:text-5xl">
            How an engagement runs
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Every project follows the same five phases. The durations vary; the structure does not. You always know
            where you are and what comes next.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[19px] top-0 hidden h-full w-px bg-border sm:block" aria-hidden="true" />

            <ol className="space-y-0">
              {processSteps.map((step, i) => (
                <li key={step.id} className="relative grid gap-8 sm:grid-cols-[40px_1fr] sm:gap-12">
                  {/* Step dot */}
                  <div className="hidden sm:flex sm:flex-col sm:items-center">
                    <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-primary/50 bg-background">
                      <span className="font-mono text-[11px] font-medium text-primary">{step.id}</span>
                    </div>
                    {i < processSteps.length - 1 && (
                      <div className="mt-2 h-full w-px bg-border" aria-hidden="true" />
                    )}
                  </div>

                  <div className={`pb-16 ${i === processSteps.length - 1 ? "pb-0" : ""}`}>
                    <div className="flex flex-wrap items-baseline gap-4">
                      <span className="font-mono text-[11px] text-primary sm:hidden">{step.id}</span>
                      <h2 className="text-2xl font-semibold">{step.name}</h2>
                      <span className="rounded border border-border bg-secondary/40 px-2.5 py-0.5 font-mono text-[11px] text-muted-foreground">
                        {step.duration}
                      </span>
                    </div>

                    <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>

                    <div className="mt-8 grid gap-6 sm:grid-cols-2">
                      <div className="rounded-lg border border-border bg-secondary/20 p-6">
                        <p className="eyebrow mb-4">Deliverables</p>
                        <ul className="space-y-2.5">
                          {step.deliverables.map((d) => (
                            <li key={d} className="flex items-start gap-3 text-sm text-muted-foreground">
                              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                              {d}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="rounded-lg border border-border border-primary/20 bg-primary/5 p-6">
                        <p className="eyebrow mb-4">What to expect</p>
                        <p className="text-sm leading-relaxed text-muted-foreground">{step.expect}</p>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <p className="eyebrow">Principles</p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">What does not change</h2>
          <div className="mt-10 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-3">
            {[
              {
                title: "You own everything from day one",
                body: "Code, cloud accounts, documentation and decision records are yours from the first commit. No lock-in, no licence fees.",
              },
              {
                title: "Engineers in every conversation",
                body: "The people you speak to in the first call are the people who write the code. We do not sell with seniors and deliver with juniors.",
              },
              {
                title: "Written summaries, not just calls",
                body: "Every significant conversation ends with a written summary. If it is not written down, it did not happen.",
              },
            ].map((p) => (
              <div key={p.title} className="bg-background p-8">
                <h3 className="text-base font-semibold">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
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
