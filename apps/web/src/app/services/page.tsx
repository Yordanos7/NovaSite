import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, PhoneCall } from "lucide-react";
import { services, contactDetails } from "@/data/site";
import { EthiopianAccentLine } from "@/components/site/EthiopianPattern";

export const metadata: Metadata = {
  title: "Engineering Services — Nova Habesha ERP Ethiopia",
  description:
    "Mobile app development, custom ERP software, Telebirr & Chapa payment integrations, applied AI, and technical consulting in Addis Ababa, Ethiopia.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-transparent via-[#0866F6]/5 to-transparent">
        <EthiopianAccentLine />
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3.5 py-1 text-xs font-medium text-[#0866F6] dark:text-[#38BDF8]">
            <span>End-to-End Digital Engineering</span>
          </div>
          <h1 className="mt-4 max-w-3xl font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
            Software Services Built for Real Operations
          </h1>
          <p className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-muted-foreground">
            Every engagement starts with discovery and architecture. We scope your workflows, integrate local payment systems, and deliver working software every two weeks.
          </p>
        </div>
      </section>

      {/* Services List */}
      {services.map((s, i) => (
        <section key={s.slug} id={s.slug} className="scroll-mt-20 border-b border-border py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
              <div>
                <span className="font-mono text-xs font-bold text-[#0866F6] dark:text-[#38BDF8]">
                  0{i + 1} // SERVICE
                </span>
                <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl text-foreground">{s.name}</h2>
                <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground">{s.summary}</p>

                <div className="mt-8 space-y-5 border-t border-border pt-6">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-wider text-[#0866F6] dark:text-[#38BDF8] mb-1.5 font-semibold">
                      Target Audience
                    </p>
                    <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground">{s.audience}</p>
                  </div>
                  <div>
                    <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-1.5 font-semibold">
                      Typical Delivery Cycle
                    </p>
                    <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground">{s.engagement}</p>
                  </div>
                </div>

                <div className="mt-8">
                  <Link
                    href={`/contact?service=${s.slug}` as any}
                    className="inline-flex items-center gap-2 rounded-md bg-[#0866F6] px-5 py-2.5 text-xs font-semibold text-white shadow-md shadow-blue-500/20 transition-all hover:bg-[#0650c5]"
                  >
                    Discuss This Service <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>

              <div className="rounded-xl border border-border bg-card p-8 shadow-sm">
                <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-6 font-semibold">
                  What Is Included
                </p>
                <ul className="space-y-4">
                  {s.included.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-xs sm:text-sm text-foreground/90">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#0866F6] dark:text-[#38BDF8]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="relative overflow-hidden py-20 text-center">
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-xs font-mono uppercase tracking-wider text-[#0866F6] dark:text-[#38BDF8]">Ready to transform your operations?</p>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-foreground">
            Book a Free 30-Minute Scoping Call
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground">
            Talk with a lead engineer in Addis Ababa. We will review your requirements and provide an honest estimate.
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
