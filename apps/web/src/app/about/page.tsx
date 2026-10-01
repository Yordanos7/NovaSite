import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { team } from "@/data/site";

export const metadata: Metadata = {
  title: "About — Nova Tech",
  description: "Nova Tech is a six-person software studio founded in 2019. Who we are, how we work, and what we will not do.",
};

const values = [
  {
    title: "Measure before rewriting",
    body: "Most systems we inherit are slower than they should be for one or two identifiable reasons. We find them before proposing a rebuild, and sometimes the honest answer is that you do not need one.",
  },
  {
    title: "Small team, no handoffs",
    body: "The engineers in your first call are the engineers who write the code. We do not sell with senior people and deliver with juniors, which is why we take on fewer projects at once.",
  },
  {
    title: "You own everything",
    body: "Code, cloud accounts, documentation and decision records are yours from the first commit. If you want to bring the work in house next quarter, we will help you do it.",
  },
  {
    title: "Say no early",
    body: "If a project needs a specialism we do not have, or the timeline is not achievable, we say so in the first conversation rather than finding out together in month three.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Page header */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <p className="eyebrow">About</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-[1.08] sm:text-5xl">
            Six people who would rather build one thing properly.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Nova Tech started in 2019 when two of us left in-house engineering roles at the same time — one from
            payments infrastructure, one from logistics product design.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-[220px_1fr]">
            <h2 className="text-2xl font-semibold">How it started</h2>
            <div className="max-w-2xl space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                The first project was a settlement dashboard for a former colleague, built in evenings over four months.
                It is still in production. The second came from someone who saw it, and the studio grew from there
                rather than from a pitch deck.
              </p>
              <p>
                We are six people now and have deliberately stayed that size. Every additional layer between the person
                who understands the problem and the person writing the code costs the client something, and we have not
                found a way to add layers without losing that.
              </p>
              <p>
                We take on roughly four to six engagements a year. That is a constraint, not a growth strategy — but it
                is the reason we can put the same people on a project from discovery through launch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <p className="eyebrow">The team</p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Who you will actually work with</h2>
          <ul className="mt-10 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {team.map((person) => (
              <li key={person.name} className="bg-background p-7 transition-colors hover:bg-secondary/20">
                <div
                  className="flex h-14 w-14 items-center justify-center rounded-full border border-primary/40 bg-primary/10 font-display text-sm font-semibold"
                  aria-hidden="true"
                >
                  {person.initials}
                </div>
                <p className="mt-5 font-semibold">{person.name}</p>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.12em] text-ember">{person.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{person.bio}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Values */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <p className="eyebrow">How we work</p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Four commitments we hold to</h2>
          <div className="mt-10 grid gap-10 sm:grid-cols-2">
            {values.map((v) => (
              <div key={v.title} className="border-t border-border pt-6">
                <h3 className="text-lg font-semibold">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-3">
            {[
              { v: "2019", l: "Year founded" },
              { v: "18", l: "Engagements delivered" },
              { v: "92%", l: "Of clients return" },
            ].map((s) => (
              <div key={s.l} className="bg-background px-8 py-10">
                <p className="font-display text-4xl font-semibold">{s.v}</p>
                <p className="mt-2 text-sm text-muted-foreground">{s.l}</p>
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
