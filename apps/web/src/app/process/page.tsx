import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, PhoneCall } from "lucide-react";
import { processSteps, contactDetails } from "@/data/site";
import { EthiopianAccentLine } from "@/components/site/EthiopianPattern";

export const metadata: Metadata = {
  title: "Delivery Process & Methodology — Ethiora Technology PLC Ethiopia",
  description:
    "How Ethiora Technology PLC engineers digital systems in Ethiopia: Discovery, Architecture, 2-Week Agile Sprints, QA & Local Payment Verification, and Launch.",
};

export default function ProcessPage() {
  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-transparent via-[#0866F6]/5 to-transparent">
        <EthiopianAccentLine />
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3.5 py-1 text-xs font-medium text-[#0866F6] dark:text-[#38BDF8]">
            <span>Transparent Engineering Delivery</span>
          </div>
          <h1 className="mt-4 max-w-4xl font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
            Agile Sprints: From Idea to Working Software
          </h1>
          <p className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-muted-foreground">
            Approved priority in. Reviewed feature out. You see and test working software on your phone every two weeks instead of guessing from static paper reports.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="border-b border-border py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="relative">
            <div className="space-y-16">
              {processSteps.map((step) => (
                <div key={step.id} className="grid gap-8 rounded-xl border border-border bg-card p-8 lg:grid-cols-[1fr_1.1fr] lg:p-10 shadow-sm">
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-sm font-bold text-[#0866F6] dark:text-[#38BDF8]">
                        STEP {step.id}
                      </span>
                      <span className="rounded bg-secondary/80 px-2.5 py-0.5 font-mono text-[11px] text-muted-foreground border border-border">
                        {step.duration}
                      </span>
                    </div>

                    <h2 className="mt-3 font-display text-2xl sm:text-3xl font-bold text-foreground">
                      {step.name}
                    </h2>
                    <p className="mt-4 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>

                    <div className="mt-6 rounded-lg border border-blue-500/20 bg-blue-500/5 p-4">
                      <p className="font-mono text-[11px] uppercase tracking-wider text-[#0866F6] dark:text-[#38BDF8] font-semibold mb-1">
                        What to expect
                      </p>
                      <p className="text-xs text-muted-foreground leading-relaxed">{step.expect}</p>
                    </div>
                  </div>

                  <div className="flex flex-col justify-center rounded-lg border border-border bg-secondary/20 p-6 lg:p-8">
                    <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-4">
                      Guaranteed Deliverables
                    </p>
                    <ul className="space-y-3">
                      {step.deliverables.map((d) => (
                        <li key={d} className="flex items-start gap-3 text-xs sm:text-sm text-foreground/90">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#0866F6] dark:text-[#38BDF8]" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-20 text-center">
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-xs font-mono uppercase tracking-wider text-[#0866F6] dark:text-[#38BDF8]">Ready to kick off Step 01?</p>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-foreground">
            Book Discovery with Our Lead Architect
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground">
            We will analyze your requirements and produce a written delivery plan you own whether or not you proceed.
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
              <PhoneCall className="mr-2 h-4 w-4 text-[#0866F6] dark:text-[#38BDF8]" />
              Call {contactDetails.displayPhone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
