import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Layers, Cpu, ShieldCheck } from "lucide-react";
import { products, contactDetails } from "@/data/site";
import { EthiopianAccentLine } from "@/components/site/EthiopianPattern";

export const metadata: Metadata = {
  title: "Specialized Products — Nova Habesha ERP Ethiopia",
  description:
    "Explore our ready-made and custom enterprise digital platforms: Nova Habesha ERP, Digital Equb, Ride Hailing, E-Commerce, School ERP, and Healthcare systems.",
};

export default function ProductsPage() {
  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-transparent via-[#0866F6]/5 to-transparent">
        <EthiopianAccentLine />
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3.5 py-1 text-xs font-medium text-[#0866F6] dark:text-[#38BDF8]">
            <span>🇪🇹 Engineered for Ethiopian Business Operations</span>
          </div>
          <h1 className="mt-4 max-w-4xl font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
            Enterprise Software Products Built for Scale
          </h1>
          <p className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-muted-foreground">
            From Nova Habesha ERP and supply chain to digitized community savings and transport ecosystems — discover our battle-tested platforms with native Telebirr, Chapa, and CBE Birr integrations.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="border-b border-border py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6 space-y-16">
          {products.map((product, i) => (
            <div
              key={product.slug}
              id={product.slug}
              className="scroll-mt-24 overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all hover:border-[#0866F6] dark:hover:border-[#38BDF8]"
            >
              <div className="grid gap-8 p-8 lg:grid-cols-[1.1fr_0.9fr] lg:p-12">
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="font-mono text-xs font-semibold text-[#0866F6] dark:text-[#38BDF8]">
                      0{i + 1} // PRODUCT
                    </span>
                    {product.badge && (
                      <span className="rounded-full bg-blue-500/10 px-3 py-0.5 text-xs font-medium text-[#0866F6] dark:text-[#38BDF8] border border-blue-500/20">
                        {product.badge}
                      </span>
                    )}
                  </div>

                  <h2 className="mt-4 font-display text-2xl font-bold sm:text-3xl text-foreground">
                    {product.name}
                  </h2>
                  <p className="mt-2 text-sm font-medium text-muted-foreground">
                    {product.tagline}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {product.description}
                  </p>

                  <div className="mt-8 rounded-lg border border-border/80 bg-secondary/30 p-4">
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#0866F6] dark:text-[#38BDF8]">
                      <Layers className="h-4 w-4" />
                      <span>Delivery Scope:</span>
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground">{product.scope}</p>
                  </div>

                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <Link
                      href={product.ctaLink as any}
                      className="inline-flex items-center gap-2 rounded-md bg-[#0866F6] px-5 py-2.5 text-xs font-semibold text-white shadow-md shadow-blue-500/20 transition-all hover:bg-[#0650c5]"
                    >
                      Request Demo & Pricing
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                    <a
                      href={contactDetails.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-[#0866F6] dark:hover:text-[#38BDF8]"
                    >
                      Ask on WhatsApp →
                    </a>
                  </div>
                </div>

                {/* Features & Tech Stack */}
                <div className="flex flex-col justify-between rounded-lg border border-border bg-secondary/15 p-6 lg:p-8">
                  <div>
                    <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-4">
                      Core Capabilities
                    </h3>
                    <ul className="space-y-3">
                      {product.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/90">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#0866F6] dark:text-[#38BDF8]" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 border-t border-border pt-6">
                    <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-1.5">
                      <Cpu className="h-3.5 w-3.5 text-[#0866F6] dark:text-[#38BDF8]" />
                      Technology Architecture
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {product.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded border border-border bg-background px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trust & Guarantee Banner */}
      <section className="border-b border-border bg-gradient-to-r from-[#00267B]/5 via-transparent to-[#0866F6]/5 py-16">
        <div className="mx-auto max-w-6xl px-6 grid gap-8 sm:grid-cols-3">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-blue-500/30 bg-blue-500/10 text-[#0866F6]">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-display text-base font-bold text-foreground">100% Code Ownership</h3>
              <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                Full intellectual property, databases, source repositories, and cloud accounts belong to you from day one.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-blue-500/30 bg-blue-500/10 text-[#0866F6]">
              <Layers className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-display text-base font-bold text-foreground">Local Payment Ready</h3>
              <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                Pre-tested sandbox and live verified integration for Telebirr, Chapa, and CBE Birr with zero drop-offs.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-blue-500/30 bg-blue-500/10 text-[#0866F6]">
              <Cpu className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-display text-base font-bold text-foreground">Addis Ababa On-Site Support</h3>
              <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                On-premise deployment, in-person staff training, and rapid SLA response directly from our local engineers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-20 text-center">
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-xs font-mono uppercase tracking-wider text-[#0866F6] dark:text-[#38BDF8]">
            Have a unique product idea or custom requirements?
          </p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-foreground">
            Let's Discuss Your Software Vision
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground">
            We provide a free architectural and scoping session to estimate timelines, tech stacks, and budget.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-[#0866F6] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition-all hover:bg-[#0650c5]"
            >
              Book Free Project Consultation
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
