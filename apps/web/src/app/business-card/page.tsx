import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BusinessCard } from "@/components/site/BusinessCard";
import { EthiopianAccentLine } from "@/components/site/EthiopianPattern";
import {
  Download,
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  CheckCircle2,
  ExternalLink,
  Printer,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { contactDetails } from "@/data/site";

export const metadata: Metadata = {
  title: "Official Business Card — Ethiora Technology PLC",
  description:
    "Official corporate business card for Ethiora Technology PLC and Yordanos Yohans. Print-ready standard 3.5x2 inch format, digital vCard download, and direct contact details.",
};

export default function BusinessCardPage() {
  return (
    <>
      {/* Header Banner (hidden on print) */}
      <section className="no-print relative overflow-hidden border-b border-border bg-gradient-to-b from-transparent via-[#0866F6]/5 to-transparent">
        <EthiopianAccentLine />
        <div className="mx-auto max-w-6xl px-6 py-14 sm:py-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3.5 py-1 text-xs font-medium text-[#0866F6] dark:text-[#38BDF8]">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Official Corporate Identity & Executive Card</span>
          </div>
          <h1 className="mt-4 max-w-4xl font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            Ethiora Technology PLC Business Card
          </h1>
          <p className="mt-4 max-w-2xl text-sm sm:text-base leading-relaxed text-muted-foreground">
            Standard 3.5" × 2" (88.9mm × 50.8mm) executive business card for Yordanos Yohans, Founder & Lead Software Architect.
            Includes dynamic scannable QR code, 1-click vCard import, and print-ready vector typography.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href={`tel:${contactDetails.phone.replace(/\s+/g, "")}`}
              className="inline-flex items-center gap-2 rounded-lg bg-[#0866F6] px-4 py-2 text-xs font-semibold text-white shadow-md shadow-blue-500/20 transition-all hover:bg-[#0650c5]"
            >
              <Phone className="h-3.5 w-3.5" />
              Call {contactDetails.displayPhone}
            </a>
            <a
              href={contactDetails.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-[#25D366]/40 bg-[#25D366]/10 px-4 py-2 text-xs font-semibold text-[#25D366] transition-all hover:bg-[#25D366]/20"
            >
              <MessageCircle className="h-3.5 w-3.5" />
              Chat on WhatsApp
            </a>
            <a
              href="/nova-habesha-erp-business-card.jpg"
              download="nova-habesha-erp-business-card.jpg"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-xs font-semibold text-foreground transition-all hover:bg-secondary"
            >
              <Download className="h-3.5 w-3.5" />
              Download 3D Mockup Image
            </a>
          </div>
        </div>
      </section>

      {/* Main Interactive Business Card Section */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-6">
          <BusinessCard />
        </div>
      </section>

      {/* Photorealistic 3D Mockup Gallery Section (hidden on print) */}
      <section className="no-print border-t border-border bg-secondary/15 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-[#0866F6] dark:text-[#38BDF8]">
                Photorealistic Studio Render
              </p>
              <h2 className="mt-1 font-display text-2xl sm:text-3xl font-bold text-foreground">
                Executive 3D Studio Mockup
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-muted-foreground max-w-xl">
                Luxury dark obsidian finish with electric blue foil and embossed Ethiopian geometric Tibeb accents on natural textured basalt stone.
              </p>
            </div>
            <a
              href="/nova-habesha-erp-business-card.jpg"
              download="nova-habesha-erp-business-card.jpg"
              className="inline-flex items-center gap-2 rounded-lg bg-[#0866F6] px-4 py-2 text-xs font-semibold text-white shadow-md shadow-blue-500/20 hover:bg-[#0650c5] transition-all shrink-0 self-start md:self-auto"
            >
              <Download className="h-3.5 w-3.5" />
              Download Full-Res Mockup (JPG)
            </a>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-border/80 bg-card shadow-2xl">
            <Image
              src="/nova-habesha-erp-business-card.jpg"
              alt="Ethiora Technology PLC Business Card 3D Studio Mockup"
              width={1920}
              height={1080}
              className="w-full h-auto object-cover"
              priority
            />
          </div>

          {/* Quick Specifications Grid */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-border bg-card p-5">
              <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                Card Dimensions
              </span>
              <p className="mt-2 text-base font-bold text-foreground">
                3.5" × 2.0" (US)
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                88.9mm × 50.8mm with 3mm bleed margin for standard commercial print shops.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-5">
              <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                Recommended Paper
              </span>
              <p className="mt-2 text-base font-bold text-foreground">
                400–450 GSM Matte
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                Soft-touch velvet laminate with raised electric blue metallic spot-UV foil.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-5">
              <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                Smart QR Technology
              </span>
              <p className="mt-2 text-base font-bold text-foreground">
                Dynamic vCard & Direct Call
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                Scans seamlessly on iPhone & Android to auto-save phone number and company info.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-5">
              <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                Direct Contact
              </span>
              <p className="mt-2 text-base font-bold text-[#0866F6] dark:text-[#38BDF8]">
                {contactDetails.displayPhone}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                Direct engineer line with WhatsApp support during business hours.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
