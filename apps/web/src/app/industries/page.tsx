import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, PhoneCall } from "lucide-react";
import { industries, caseStudies, contactDetails } from "@/data/site";
import { EthiopianAccentLine } from "@/components/site/EthiopianPattern";

export const metadata: Metadata = {
  title: "Industries & Sectors — Nova Habesha ERP Ethiopia",
  description:
    "Tailored enterprise digital solutions across banking & fintech, education, transport, healthcare, retail, and hospitality in Ethiopia.",
};

const industryIcons: Record<string, string> = {
  "Banking & Fintech": "💳",
  "Education & Academia": "🎓",
  "Transport & Logistics": "🚗",
  "Healthcare & Pharmaceuticals": "🏥",
  "Retail & E-Commerce": "🛍️",
  "Hospitality & Tourism": "🏨",
};

export default function IndustriesPage() {
  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-transparent via-[#0866F6]/5 to-transparent">
        <EthiopianAccentLine />
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3.5 py-1 text-xs font-medium text-[#0866F6] dark:text-[#38BDF8]">
            <span>Sector-Specific Digital Architecture</span>
          </div>
          <h1 className="mt-4 max-w-4xl font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
            Sectors We Power in Ethiopia
          </h1>
          <p className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-muted-foreground">
            We build with domain depth. We understand the regulatory standards, user workflows, and local payment expectations across each vertical.
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="border-b border-border py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((ind) => (
              <div
                key={ind.name}
                className="rounded-xl border border-border bg-card p-8 transition-all hover:border-[#0866F6] dark:hover:border-[#38BDF8] shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3">
                    <span className="text-3xl" aria-hidden="true">
                      {industryIcons[ind.name] ?? "◆"}
                    </span>
                    <h2 className="font-display text-xl font-bold text-foreground">{ind.name}</h2>
                  </div>
                  <p className="mt-4 text-xs sm:text-sm leading-relaxed text-muted-foreground">{ind.note}</p>
                </div>
                <div className="mt-6 border-t border-border pt-4">
                  <p className="font-mono text-xs text-[#0866F6] dark:text-[#38BDF8] font-medium">{ind.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Case Studies */}
      <section className="border-b border-border bg-secondary/15 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="font-mono text-xs uppercase tracking-wider text-[#0866F6] dark:text-[#38BDF8] font-semibold">
              Client Results
            </span>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-foreground">Proven Track Record</h2>
            <p className="mt-2 text-sm sm:text-base text-muted-foreground">
              Real deployments transforming operational efficiency across Ethiopia.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {caseStudies.map((c) => (
              <div
                key={c.slug}
                className="group flex flex-col justify-between rounded-xl border border-border bg-background p-6 transition-all hover:border-[#0866F6] shadow-sm"
              >
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-wider text-[#0866F6] font-medium">
                    {c.industry}
                  </p>
                  <h3 className="mt-2 font-display text-base font-bold text-foreground leading-snug">{c.client}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground line-clamp-3">{c.headline}</p>
                </div>

                <div className="mt-6 border-t border-border pt-4">
                  <div className="mb-4">
                    <p className="font-display text-lg font-bold text-[#0866F6] dark:text-[#38BDF8]">
                      {c.metrics[0]?.value}
                    </p>
                    <p className="text-[10px] text-muted-foreground">{c.metrics[0]?.label}</p>
                  </div>
                  <Link
                    href={`/work#${c.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-foreground transition-colors group-hover:text-[#0866F6]"
                  >
                    View Project <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-20 text-center">
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-xs font-mono uppercase tracking-wider text-[#0866F6] dark:text-[#38BDF8]">Ready to discuss your industry's requirements?</p>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-foreground">
            Book a Free Consultation in Addis Ababa
          </h2>
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
