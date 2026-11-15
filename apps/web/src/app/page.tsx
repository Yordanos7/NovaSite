"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  Zap,
  Database,
  Brain,
  ShieldCheck,
  PhoneCall,
  Smartphone,
  Layers,
  ShoppingBag,
  Car,
  GraduationCap,
  Building2,
  Stethoscope,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { HeroVisual } from "@/components/site/HeroVisual";
import { EthiopianCrossPattern, EthiopianAccentLine } from "@/components/site/EthiopianPattern";
import { LogoCarousel } from "@/components/site/LogoCarousel";
import { products, services, caseStudies, industries, processSteps, stats, clients, contactDetails } from "@/data/site";

export default function Home() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-transparent via-[#0866F6]/5 to-transparent">
        <EthiopianAccentLine />
        <EthiopianCrossPattern />
        <div className="hairline-grid pointer-events-none absolute inset-0 opacity-25" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3.5 py-1 text-xs font-medium text-[#0866F6] dark:text-[#38BDF8]">
              <span className="inline-flex h-2 w-2 rounded-full bg-[#0866F6] animate-pulse"></span>
              <span>Engineering AI-Powered Enterprise Systems in Ethiopia</span>
            </div>
            
            <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-foreground">
              Software crafted with <span className="text-[#0866F6] dark:text-[#38BDF8]">Ethiopian soul</span>, built to scale.
            </h1>
            
            <p className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-muted-foreground">
              We design and engineer high-performance mobile apps, custom ERPs, and digital platforms backed by native Telebirr, Chapa, and banking integrations.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/products"
                className="inline-flex items-center justify-center rounded-md bg-[#0866F6] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition-all hover:bg-[#0650c5] border border-blue-400/30"
              >
                Explore Products
                <ArrowRight className="ml-1.5 h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md border border-border bg-background px-5 py-2.5 text-sm font-semibold text-foreground transition-all hover:border-[#0866F6] hover:bg-[#0866F6]/5"
              >
                Start a Project
              </Link>
              <a
                href={`tel:${contactDetails.phone}`}
                className="inline-flex items-center gap-2 text-xs font-mono font-medium text-[#0866F6] dark:text-[#38BDF8] hover:underline px-2 py-2"
              >
                <PhoneCall className="h-4 w-4" />
                <span>{contactDetails.displayPhone}</span>
              </a>
            </div>

            {/* Quick Metrics */}
            <dl className="mt-12 grid max-w-xl grid-cols-2 sm:grid-cols-3 gap-6 border-t border-border pt-8">
              {stats.map((s) => (
                <div key={s.l} className="border-l-2 border-[#0866F6] pl-3">
                  <dt className="font-display text-xl sm:text-2xl font-bold text-[#0866F6] dark:text-[#38BDF8]">{s.v}</dt>
                  <dd className="mt-0.5 text-xs text-muted-foreground">{s.l}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="flex justify-center lg:justify-end">
            <HeroVisual />
          </div>
        </div>
      </section>

      {/* Partner & Integration Logos Carousel (Scrolling Right to Left) */}
      <section className="border-b border-border bg-secondary/15 py-8 overflow-hidden">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs font-mono uppercase tracking-wider text-center text-muted-foreground">
            Trusted by Ethiopian Enterprises & Verified Integration Partners
          </p>
        </div>
        <div className="mt-4">
          <LogoCarousel />
        </div>
      </section>

      {/* Specialized Products */}
      <section className="border-b border-border py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#0866F6] dark:text-[#38BDF8]">
                <Sparkles className="h-4 w-4" />
                <span>Ready-Made & Custom Systems</span>
              </div>
              <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-foreground">
                Specialized Digital Platforms & ERP
              </h2>
              <p className="mt-3 max-w-2xl text-base text-muted-foreground">
                Production-ready platforms built around local payment workflows, user habits, and enterprise requirements.
              </p>
            </div>
            <Link
              href="/products"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0866F6] dark:text-[#38BDF8] hover:underline"
            >
              View Full Product Catalog <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p) => (
              <div
                key={p.slug}
                className="group flex flex-col justify-between rounded-xl border border-border bg-card p-7 transition-all hover:border-[#0866F6] dark:hover:border-[#38BDF8] hover:shadow-lg"
              >
                <div>
                  <div className="flex items-start justify-between gap-2">
                    <span className="rounded-full bg-blue-500/10 px-2.5 py-0.5 text-[11px] font-medium text-[#0866F6] dark:text-[#38BDF8] border border-blue-500/20">
                      {p.badge}
                    </span>
                    <span className="font-mono text-xs text-muted-foreground">🇪🇹 Ready</span>
                  </div>

                  <h3 className="mt-4 font-display text-xl font-bold text-foreground group-hover:text-[#0866F6] dark:group-hover:text-[#38BDF8] transition-colors">
                    {p.name}
                  </h3>
                  <p className="mt-2 text-xs font-medium text-muted-foreground">
                    {p.tagline}
                  </p>
                  <p className="mt-3 text-xs leading-relaxed text-muted-foreground line-clamp-3">
                    {p.description}
                  </p>

                  <ul className="mt-5 space-y-2 border-t border-border pt-4">
                    {p.features.slice(0, 3).map((f) => (
                      <li key={f} className="flex items-start gap-2 text-xs text-muted-foreground">
                        <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#0866F6] dark:text-[#38BDF8]" />
                        <span className="line-clamp-1">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
                  <Link
                    href={`/products#${p.slug}` as any}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#0866F6] dark:text-[#38BDF8] hover:underline"
                  >
                    Explore Details <ArrowRight className="h-3 w-3" />
                  </Link>
                  <Link
                    href={p.ctaLink as any}
                    className="rounded bg-secondary px-2.5 py-1 text-[11px] font-medium text-foreground hover:bg-[#0866F6] hover:text-white transition-colors"
                  >
                    Request Demo
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Engineering Services */}
      <section className="border-b border-border bg-secondary/10 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-xs font-mono uppercase tracking-wider text-[#0866F6] dark:text-[#38BDF8]">💼 Engineering Capabilities</p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-foreground">
              End-to-End Enterprise Services
            </h2>
            <p className="mt-3 text-base text-muted-foreground">
              From concept to deployment, we build mobile apps, enterprise ERPs, and cloud systems that power real business operations.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, idx) => (
              <div
                key={s.slug}
                className="rounded-xl border border-border bg-background p-7 transition-all hover:border-[#0866F6]/60 dark:hover:border-[#38BDF8]/60 hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-[#0866F6] dark:text-[#38BDF8]">0{idx + 1}</span>
                  <span className="h-2 w-2 rounded-full bg-[#0866F6] dark:bg-[#38BDF8]" />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-foreground">{s.name}</h3>
                <p className="mt-2.5 text-xs leading-relaxed text-muted-foreground">{s.summary}</p>
                <div className="mt-5 border-t border-border pt-4">
                  <p className="font-mono text-[10px] uppercase text-muted-foreground mb-2">Includes:</p>
                  <ul className="space-y-1.5 text-xs text-muted-foreground">
                    {s.included.slice(0, 3).map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#0866F6]" />
                        <span className="line-clamp-1">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6">
                  <Link
                    href={`/services#${s.slug}` as any}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0866F6] dark:text-[#38BDF8] hover:underline"
                  >
                    View Engagement Scope <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="border-b border-border py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="text-xs font-mono uppercase tracking-wider text-[#0866F6] dark:text-[#38BDF8]">🏆 Proven Results in Addis Ababa</p>
              <h2 className="mt-1 font-display text-3xl sm:text-4xl font-bold text-foreground">Featured Client Impact</h2>
            </div>
            <Link
              href="/work"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0866F6] dark:text-[#38BDF8] hover:underline"
            >
              All Case Studies <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-10 rounded-2xl border border-border bg-card p-8 lg:grid-cols-2 lg:p-12 shadow-lg">
            <div className="flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-[#0866F6] font-semibold">
                  Featured Case Study · {caseStudies[0]?.industry}
                </span>
                <h3 className="mt-3 font-display text-2xl sm:text-3xl font-bold text-foreground">
                  {caseStudies[0]?.headline}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  Developed an enterprise-grade digital portal and financial platform for Soser Saving & Credit Cooperative Union LTD, unifying multi-branch accounts, automated loan tracking, and inclusive financial services across the region.
                </p>

                <div className="mt-8 grid grid-cols-3 gap-4 border-t border-border pt-6">
                  {caseStudies[0]?.metrics.map((m, idx) => (
                    <div key={m.label} className={`border-l-2 ${idx === 0 ? "border-[#0866F6]" : "border-border"} pl-3`}>
                      <p className={`font-display text-2xl font-bold ${idx === 0 ? "text-[#0866F6] dark:text-[#38BDF8]" : "text-foreground"}`}>
                        {m.value}
                      </p>
                      <p className="text-[11px] text-muted-foreground">{m.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <Link
                  href="/work"
                  className="inline-flex items-center justify-center rounded-md bg-[#0866F6] px-5 py-2.5 text-xs font-semibold text-white shadow shadow-blue-500/20 transition-all hover:bg-[#0650c5]"
                >
                  Read Full Case Study
                  <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            <div className="flex flex-col justify-between rounded-xl bg-gradient-to-br from-[#00267B]/10 via-[#0866F6]/10 to-[#38BDF8]/10 p-8 border border-border">
              <blockquote className="font-serif text-lg leading-relaxed text-foreground italic">
                "{caseStudies[0]?.quote?.text}"
              </blockquote>
              <div className="mt-6 flex items-center gap-4">
                <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white p-1 border border-border shadow-sm">
                  <Image
                    src="/logos/soserunion.png"
                    alt="Soser Union Logo"
                    width={48}
                    height={48}
                    className="h-full w-full object-contain"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{caseStudies[0]?.quote?.name}</p>
                  <p className="text-xs text-muted-foreground">{caseStudies[0]?.quote?.role}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Agile Sprint Delivery Process */}
      <section className="border-b border-border bg-secondary/15 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-xs font-mono uppercase tracking-wider text-[#0866F6] dark:text-[#38BDF8]">⚡ Transparent Methodology</p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-foreground">
              Agile Sprint Delivery
            </h2>
            <p className="mt-3 text-base text-muted-foreground">
              Approved priority in. Working software out every two weeks. You see and test real features before signing off.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {processSteps.map((step) => (
              <div
                key={step.id}
                className="relative rounded-lg border border-border bg-background p-6 transition-all hover:border-[#0866F6]"
              >
                <span className="font-mono text-xs font-bold text-[#0866F6] dark:text-[#38BDF8]">{step.id}</span>
                <h3 className="mt-3 font-display text-base font-bold text-foreground">{step.name}</h3>
                <span className="inline-block mt-1 text-[11px] font-mono text-muted-foreground bg-secondary/40 px-2 py-0.5 rounded">
                  {step.duration}
                </span>
                <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Verticals */}
      <section className="border-b border-border py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs font-mono uppercase tracking-wider text-[#0866F6] dark:text-[#38BDF8]">🏛️ Domain Expertise</p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-foreground">
              Industries We Power in Ethiopia
            </h2>
            <p className="mt-3 text-base text-muted-foreground">
              Deep context in local governance, compliance standards, and commercial user behaviors.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((ind) => (
              <div
                key={ind.name}
                className="rounded-xl border border-border bg-card p-7 transition-all hover:border-[#0866F6] dark:hover:border-[#38BDF8]"
              >
                <h3 className="font-display text-lg font-bold text-foreground">{ind.name}</h3>
                <p className="mt-2.5 text-xs leading-relaxed text-muted-foreground">{ind.note}</p>
                <div className="mt-4 border-t border-border pt-3">
                  <span className="font-mono text-[11px] text-[#0866F6] dark:text-[#38BDF8]">{ind.detail}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation & Office CTA Banner */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0866F6]/10 via-background to-background py-20 text-center">
        <EthiopianCrossPattern />
        <div className="relative mx-auto max-w-4xl px-6">
          <p className="text-xs font-mono uppercase tracking-wider text-[#0866F6] dark:text-[#38BDF8]">📍 Addis Ababa, Ethiopia</p>
          <h2 className="mt-3 font-display text-3xl sm:text-5xl font-bold text-foreground">
            Ready to Engineer Your System?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base sm:text-lg text-muted-foreground">
            Book a free project consultation to discuss your technical requirements, budget, and integration roadmap.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-[#0866F6] px-6 py-3 text-sm font-semibold text-white shadow-xl shadow-blue-500/25 transition-all hover:bg-[#0650c5] border border-blue-400/30"
            >
              Start Free Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <a
              href={`tel:${contactDetails.phone}`}
              className="inline-flex items-center justify-center rounded-md border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground hover:border-[#0866F6] hover:text-[#0866F6] transition-all"
            >
              <PhoneCall className="mr-2 h-4 w-4 text-[#0866F6] dark:text-[#38BDF8]" />
              Call {contactDetails.displayPhone}
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground">
            <span>📍 {contactDetails.location}</span>
            <span>·</span>
            <span>✉️ {contactDetails.email}</span>
            <span>·</span>
            <span>⏱️ {contactDetails.workingHours}</span>
          </div>
        </div>
      </section>
    </>
  );
}
