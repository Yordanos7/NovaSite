import type { Metadata } from "next";
import { contactDetails } from "@/data/site";
import ContactForm from "./ContactForm";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { EthiopianAccentLine } from "@/components/site/EthiopianPattern";

export const metadata: Metadata = {
  title: "Contact & Project Consultation — Ethiora Technology PLC",
  description:
    "Book a free technical consultation with Ethiora Technology PLC. Discuss your ERP, Ethiora HMS, mobile app, fintech integration, or custom software requirements.",
};

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-transparent via-[#0866F6]/5 to-transparent">
        <EthiopianAccentLine />
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3.5 py-1 text-xs font-medium text-[#0866F6] dark:text-[#38BDF8]">
            <span>Addis Ababa Office & Online Consultation</span>
          </div>
          <h1 className="mt-4 max-w-4xl font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
            Start Your Enterprise Project
          </h1>
          <p className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-muted-foreground">
            Book a 30-minute consultation with a senior software architect. We review your requirements, technical feasibility, and provide an honest scoped proposal.
          </p>
        </div>
      </section>

      {/* Form + Sidebar */}
      <section className="border-b border-border py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-16 px-6 lg:grid-cols-[1fr_380px]">
          <div>
            <div className="mb-8">
              <h2 className="font-display text-2xl font-bold text-foreground">Tell Us About Your Project</h2>
              <p className="mt-1 text-xs text-muted-foreground">
                Fill in the details below or message us directly on WhatsApp or Telegram.
              </p>
            </div>
            <ContactForm />
          </div>

          <aside className="space-y-8">
            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-4">
                What Happens Next
              </h3>
              <ol className="space-y-4">
                {[
                  "We review your project goals within 24 hours.",
                  "A senior architect connects for a 30-minute scoping call.",
                  "We deliver a written technical summary and architecture roadmap.",
                  "We propose fixed sprint milestones with transparent pricing.",
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-muted-foreground">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-500/10 font-mono text-[11px] font-bold text-[#0866F6] dark:text-[#38BDF8]">
                      {i + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="rounded-xl border border-border bg-secondary/20 p-6 space-y-4">
              <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                Direct Contact Information
              </h3>
              <ul className="space-y-3 text-xs text-muted-foreground">
                <li className="flex items-start gap-2.5">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#0866F6] dark:text-[#38BDF8]" />
                  <span>{contactDetails.location}</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone className="h-4 w-4 shrink-0 text-[#0866F6] dark:text-[#38BDF8]" />
                  <a href={`tel:${contactDetails.phone}`} className="font-mono hover:text-foreground">
                    {contactDetails.secondaryDisplayPhone
                      ? `${contactDetails.displayPhone} / ${contactDetails.secondaryDisplayPhone}`
                      : contactDetails.displayPhone}
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <Mail className="h-4 w-4 shrink-0 text-[#0866F6] dark:text-[#38BDF8]" />
                  <a href={`mailto:${contactDetails.email}`} className="hover:text-foreground">
                    {contactDetails.email}
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <Clock className="h-4 w-4 shrink-0 text-[#0866F6] dark:text-[#38BDF8]" />
                  <span>{contactDetails.workingHours}</span>
                </li>
              </ul>

              <div className="pt-3 border-t border-border">
                <a
                  href={contactDetails.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#25D366] px-4 py-2 text-xs font-semibold text-white hover:bg-[#1EBE5D] transition-colors"
                >
                  <MessageCircle className="h-4 w-4" />
                  Chat on WhatsApp Now
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
