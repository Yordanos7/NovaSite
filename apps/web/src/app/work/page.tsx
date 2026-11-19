import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, TrendingUp, ExternalLink, Globe, Award } from "lucide-react";
import { caseStudies, contactDetails } from "@/data/site";
import { EthiopianAccentLine } from "@/components/site/EthiopianPattern";

export const metadata: Metadata = {
  title: "Case Studies & Work — Ethiora Technology PLC Ethiopia",
  description:
    "Explore how Ethiora Technology PLC built and scaled enterprise platforms across Ethiopia: Alyah Restaurant OS, Soser Union Digital Banking Portal, Ethiora HMS, and modern digital ecosystems.",
};

export default function WorkPage() {
  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-transparent via-[#0866F6]/5 to-transparent">
        <EthiopianAccentLine />
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3.5 py-1 text-xs font-medium text-[#0866F6] dark:text-[#38BDF8]">
            <span>Proven Engineering Impact</span>
          </div>
          <h1 className="mt-4 max-w-4xl font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
            Selected Ethiopian Client Engagements
          </h1>
          <p className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-muted-foreground">
            Real systems deployed in Addis Ababa and across Ethiopia. Measurable increases in transaction throughput, automated Telebirr/Chapa settlements, and zero downtime.
          </p>
        </div>
      </section>

      {/* Case studies list */}
      {caseStudies.map((c, i) => (
        <section key={c.slug} id={c.slug} className="scroll-mt-20 border-b border-border py-16 sm:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className={`grid items-center gap-12 lg:grid-cols-2 ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
              {/* Visual Card */}
              <div className="group overflow-hidden rounded-2xl border border-border bg-card shadow-lg transition-all hover:border-[#0866F6]/50">
                {/* Browser-style Topbar */}
                <div className="flex items-center justify-between border-b border-border bg-secondary/50 px-4 py-3">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                  </div>
                  <div className="flex items-center gap-1.5 rounded-md border border-border/60 bg-background/80 px-3 py-1 font-mono text-[11px] text-muted-foreground max-w-[200px] sm:max-w-xs truncate">
                    <Globe className="h-3 w-3 shrink-0 text-[#0866F6]" />
                    <span className="truncate">
                      {c.liveUrl ? c.liveUrl.replace(/^https?:\/\//, "") : `${c.slug}.ethioratech.com`}
                    </span>
                  </div>
                  {c.liveUrl ? (
                    <a
                      href={c.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-mono font-medium text-[#0866F6] dark:text-[#38BDF8] hover:underline"
                    >
                      <span>Live</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  ) : (
                    <span className="font-mono text-[10px] text-muted-foreground">{c.timeline}</span>
                  )}
                </div>

                {/* Main Screenshot Container */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted/40">
                  <Image
                    src={c.image}
                    alt={`${c.client} Platform Screenshot`}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority={i < 2}
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>

                {/* Card Footer with Industry & Stack */}
                <div className="border-t border-border bg-background p-4 sm:p-5">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="rounded-full bg-[#0866F6]/10 px-2.5 py-0.5 font-mono text-xs font-semibold text-[#0866F6] dark:text-[#38BDF8] border border-[#0866F6]/20">
                      {c.industry}
                    </span>
                    <span className="font-mono text-xs font-medium text-[#0866F6] dark:text-[#38BDF8]">{c.result}</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {c.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded bg-secondary/80 px-2 py-0.5 font-mono text-[10px] text-muted-foreground border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Text & Metrics */}
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-[#0866F6] font-semibold">
                  {c.industry} · {c.timeline}
                </p>
                <h2 className="mt-3 font-display text-2xl sm:text-3xl font-bold text-foreground leading-tight">
                  {c.headline}
                </h2>
                <p className="mt-4 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                  {c.challenge[0]}
                </p>
                <p className="mt-3 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                  {c.approach[0]}
                </p>

                {/* Metrics */}
                <div className="mt-8 grid grid-cols-3 gap-4 border-t border-border pt-6">
                  {c.metrics.map((m) => (
                    <div key={m.label} className="border-l-2 border-[#0866F6] pl-3">
                      <p className="font-display text-xl sm:text-2xl font-bold text-[#0866F6] dark:text-[#38BDF8]">
                        {m.value}
                      </p>
                      <p className="mt-1 text-[11px] text-muted-foreground leading-tight">{m.label}</p>
                    </div>
                  ))}
                </div>

                {/* Quote */}
                {c.quote && (
                  <blockquote className="mt-8 rounded-lg border border-border/80 bg-secondary/30 p-5">
                    <p className="font-serif text-sm italic text-foreground">"{c.quote.text}"</p>
                    <footer className="mt-2 text-xs font-semibold text-[#0866F6] dark:text-[#38BDF8]">
                      — {c.quote.name}, <span className="font-normal text-muted-foreground">{c.quote.role}</span>
                    </footer>
                  </blockquote>
                )}

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <Link
                    href={`/contact?case=${c.slug}` as any}
                    className="inline-flex items-center gap-2 rounded-md bg-[#0866F6] px-5 py-2.5 text-xs font-semibold text-white shadow-md shadow-blue-500/20 transition-all hover:bg-[#0650c5]"
                  >
                    Discuss a Similar Project <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                  {c.liveUrl && (
                    <a
                      href={c.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-4 py-2.5 text-xs font-semibold text-foreground hover:border-[#0866F6] hover:text-[#0866F6] transition-all shadow-xs"
                    >
                      Visit Live Platform <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  )}
                  {c.certificateImage && (
                    <a
                      href={c.certificateImage}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-md border border-amber-500/30 bg-amber-500/10 px-4 py-2.5 text-xs font-semibold text-amber-700 dark:text-amber-400 hover:bg-amber-500/20 transition-all shadow-xs"
                    >
                      <Award className="h-3.5 w-3.5" />
                      Official Certificate
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="relative overflow-hidden py-20 text-center">
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-xs font-mono uppercase tracking-wider text-[#0866F6] dark:text-[#38BDF8]">Have an engineering challenge?</p>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-foreground">
            Let's Build Your Success Story
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground">
            Whether you need a digital Equb app, ride-hailing software, or custom ERP, our engineers in Addis Ababa are ready to assist.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-[#0866F6] px-6 py-3 text-sm font-semibold text-white shadow-md shadow-blue-500/20 transition-all hover:bg-[#0650c5]"
            >
              Start Free Consultation
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center justify-center rounded-md border border-border px-6 py-3 text-sm font-semibold text-foreground hover:border-[#0866F6] hover:text-[#0866F6] transition-all"
            >
              Browse Products
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
