"use client";
import Link from "next/link";
import { ArrowRight, Zap, Database, Brain, Users } from "lucide-react";
import { Ethiopian3DVisual } from "@/components/site/Ethiopian3DVisual";
import { EthiopianCrossPattern, EthiopianAccentLine } from "@/components/site/EthiopianPattern";

const services = [
  {
    slug: "web-mobile",
    num: "01",
    name: "Digital Transformation",
    summary:
      "Building bridges between tradition and innovation. Web and mobile applications designed for the African market with world-class quality.",
    icon: Zap,
  },
  {
    slug: "backend-cloud",
    num: "02",
    name: "Cloud Infrastructure",
    summary:
      "Scalable backend systems that grow with your ambitions. Data pipelines and infrastructure built to handle real-world African business demands.",
    icon: Database,
  },
  {
    slug: "ai-integration",
    num: "03",
    name: "AI & Intelligence",
    summary:
      "Intelligent solutions powered by modern AI. Language models and automation that understand and respect local context and culture.",
    icon: Brain,
  },
  {
    slug: "consulting",
    num: "04",
    name: "Technical Leadership",
    summary:
      "Strategic guidance for growing teams. Mentorship and architecture reviews that help your organization build sustainable tech capacity.",
    icon: Users,
  },
];

const clients = ["EthioTech Hub", "East African Fintech", "Regional Logistics", "Pan-African SaaS", "Local E-Commerce", "Addis Startups"];

const stats = [
  { v: "50+", l: "projects delivered" },
  { v: "25", l: "talented engineers" },
  { v: "95%", l: "client satisfaction" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <EthiopianAccentLine />
        <EthiopianCrossPattern />
        <div className="hairline-grid pointer-events-none absolute inset-0 opacity-30" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[#F3D02D]"></span>
              <p className="font-crimson text-sm italic tracking-wide text-[#8B7355]">Since ancient times · African wisdom meets modern tech</p>
            </div>
            <h1 className="ethiopian-old-title mt-5">
              Software crafted with <span className="text-[#EE334E]">Ethiopian soul</span>
            </h1>
            <p className="ethiopian-vintage-text mt-6 max-w-xl leading-relaxed text-[#8B7355]">
              We build technology that honors African heritage while powering modern businesses. Every line of code 
              carries the spirit of Ethiopian innovation and African excellence.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/work"
                className="inline-flex items-center justify-center rounded-md bg-[#06752F] px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-[#05562a] border border-[#06752F]/60 shadow-[0_10px_40px_-18px_rgba(6,117,47,0.5)]"
              >
                See our work
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md border-2 border-[#F3D02D] bg-transparent px-5 py-2.5 text-sm font-medium text-foreground transition-all hover:bg-[#F3D02D]/10"
              >
                Start a project
              </Link>
            </div>
            <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-[#F3D02D]/30 pt-8">
              {stats.map((s) => (
                <div key={s.l}>
                  <dt className="font-serif text-2xl font-bold text-[#06752F]">{s.v}</dt>
                  <dd className="mt-1 text-xs leading-snug text-muted-foreground font-crimson">{s.l}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="w-full aspect-square rounded-lg overflow-hidden">
              <Ethiopian3DVisual />
            </div>
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="border-b border-border bg-gradient-to-b from-transparent via-[#06752F]/5 to-transparent">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <p className="font-crimson text-sm italic text-[#8B7355]">Trusted by forward-thinking African companies</p>
          <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-3 lg:grid-cols-6">
            {clients.map((c) => (
              <li key={c} className="flex items-center gap-2.5 opacity-70 transition-opacity hover:opacity-100">
                <span className="h-2.5 w-2.5 rotate-45 border-2 border-[#F3D02D]" aria-hidden="true" />
                <span className="font-crimson text-xs italic tracking-wide text-muted-foreground">{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Services */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="font-crimson text-sm italic text-[#8B7355]">🌍 Our expertise</p>
              <h2 className="ethiopian-old-title mt-3 text-3xl sm:text-4xl">
                How we serve African businesses
              </h2>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              All services <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <div className="mt-10 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <Link
                  key={s.slug}
                  href="/services"
                  className="group relative bg-background p-7 transition-colors hover:bg-[#06752F]/5 border-l-4 border-l-transparent hover:border-l-[#F3D02D]"
                >
                  <div className="flex items-start justify-between">
                    <span className="font-crimson text-xs italic text-[#F3D02D]">{s.num}</span>
                    <Icon className="h-5 w-5 text-[#06752F] opacity-60" />
                  </div>
                  <h3 className="mt-4 font-serif text-lg font-semibold text-[#06752F]">{s.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground font-crimson">{s.summary}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm text-[#F3D02D] transition-colors group-hover:text-[#EE334E]">
                    Learn more <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured case study */}
      <section className="border-b border-border bg-gradient-to-b from-[#06752F]/5 to-transparent">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <p className="font-crimson text-sm italic text-[#8B7355]">💼 Success story</p>
          <div className="mt-8 grid items-center gap-10 lg:grid-cols-2">
            <div className="overflow-hidden rounded-lg border-2 border-[#F3D02D]/30 bg-gradient-to-br from-[#06752F]/10 to-[#F3D02D]/10 aspect-[3/2] flex flex-col items-center justify-center p-8">
              <div className="text-center">
                <div className="text-4xl mb-4">📱</div>
                <p className="font-crimson text-xs italic text-muted-foreground">African FinTech Platform Transformation</p>
              </div>
            </div>
            <div>
              <p className="font-crimson text-xs italic tracking-wider text-[#EE334E]">
                Regional Payments · Financial Technology
              </p>
              <h2 className="ethiopian-old-title mt-4 text-3xl sm:text-4xl text-[#06752F]">
                Building scalable payment infrastructure for East Africa
              </h2>
              <p className="ethiopian-vintage-text mt-5 leading-relaxed text-[#8B7355]">
                A growing fintech startup needed to scale from handling 10,000 daily transactions to over 500,000. 
                We rebuilt their backend infrastructure to handle peak loads during market hours, implemented real-time 
                settlement, and added support for multiple payment methods across East Africa.
              </p>
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <div className="border-l-4 border-[#F3D02D] pl-4">
                  <p className="font-serif text-2xl font-bold text-[#06752F]">50x</p>
                  <p className="mt-1.5 text-sm leading-snug text-muted-foreground font-crimson">transaction throughput increase</p>
                </div>
                <div className="border-l-4 border-[#06752F] pl-4">
                  <p className="font-serif text-2xl font-bold text-[#EE334E]">99.9%</p>
                  <p className="mt-1.5 text-sm leading-snug text-muted-foreground font-crimson">uptime reliability</p>
                </div>
              </div>
              <div className="mt-8">
                <Link
                  href="/work"
                  className="inline-flex items-center justify-center rounded-md border-2 border-[#F3D02D] bg-transparent px-5 py-2.5 text-sm font-medium text-[#06752F] transition-all hover:bg-[#F3D02D]/10"
                >
                  Read more case studies
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <figure className="mx-auto max-w-3xl text-center">
            <blockquote className="font-serif text-2xl leading-snug sm:text-3xl text-[#06752F] font-bold">
              "They didn't just build software for us; they built it the African way—understanding our challenges, 
              respecting our constraints, and delivering with pride."
            </blockquote>
            <figcaption className="mt-6 text-sm text-muted-foreground font-crimson italic">
              Tsegaye Assefa · CEO, Regional E-Commerce Platform
            </figcaption>
          </figure>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <EthiopianCrossPattern />
        <div className="hairline-grid pointer-events-none absolute inset-0 opacity-30" />
        <div className="ethiopian-glow pointer-events-none absolute left-1/2 top-full h-[420px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30" />
        <div className="relative mx-auto max-w-6xl px-6 py-20 text-center sm:py-24">
          <p className="font-crimson text-sm italic text-[#8B7355]">🚀 Let's build together</p>
          <h2 className="ethiopian-old-title mx-auto mt-4 max-w-2xl text-3xl sm:text-4xl text-[#06752F]">
            Ready to transform your business with African-led technology?
          </h2>
          <p className="ethiopian-vintage-text mx-auto mt-5 max-w-xl leading-relaxed text-[#8B7355]">
            We start with a free consultation. Share your challenges, and let's explore how we can build something extraordinary together.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-[#06752F] px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-[#05562a] border border-[#06752F]/60 shadow-[0_10px_40px_-18px_rgba(6,117,47,0.5)]"
            >
              Start your project
            </Link>
            <Link
              href="/work"
              className="inline-flex items-center justify-center rounded-md border-2 border-[#F3D02D] bg-transparent px-5 py-2.5 text-sm font-medium text-foreground transition-all hover:bg-[#F3D02D]/10"
            >
              Explore our work
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
