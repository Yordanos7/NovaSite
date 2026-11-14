import Image from "next/image";
import Link from "next/link";
import { contactDetails, products, services } from "@/data/site";
import { Phone, Mail, MapPin, MessageCircle, ArrowUpRight } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      {/* Top Banner */}
      <div className="border-b border-border bg-gradient-to-r from-[#00267B]/10 via-[#0866F6]/10 to-[#38BDF8]/10 px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <div>
            <p className="font-display text-lg font-bold text-foreground">
              Ready to engineer your enterprise system?
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Book a free consultation in Addis Ababa or discuss your project online today.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`tel:${contactDetails.phone}`}
              className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-4 py-2 text-xs font-semibold text-foreground transition-all hover:border-[#0866F6] hover:text-[#0866F6]"
            >
              <Phone className="h-3.5 w-3.5 text-[#0866F6] dark:text-[#38BDF8]" />
              {contactDetails.displayPhone}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-[#0866F6] px-4 py-2 text-xs font-semibold text-white shadow-md shadow-blue-500/20 transition-all hover:bg-[#0650c5]"
            >
              Start Free Consultation
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand & About */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-card border border-border/80 shadow-sm">
              <Image
                src="/logos/nova-habesha-erp-logo-transparent.png"
                alt="Nova Habesha ERP Logo"
                width={40}
                height={40}
                className="h-full w-full object-contain p-0.5"
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <p className="font-display text-base font-bold text-foreground">Nova Habesha</p>
                <span className="font-mono text-[9px] font-bold text-[#0866F6] dark:text-[#38BDF8] bg-[#0866F6]/10 border border-[#0866F6]/30 px-1 py-0.5 rounded uppercase">
                  ERP
                </span>
              </div>
              <p className="font-mono text-[10px] tracking-wider text-muted-foreground uppercase">Enterprise Systems</p>
            </div>
          </div>
          <p className="text-xs leading-relaxed text-muted-foreground">
            A software development and AI engineering company headquartered in Addis Ababa, Ethiopia. We build mobile apps, ERPs, fintech platforms, and scalable digital systems engineered for the African market.
          </p>
          <div className="space-y-2 pt-2 text-xs text-muted-foreground">
            <div className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#0866F6] dark:text-[#38BDF8]" />
              <span>{contactDetails.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-3.5 w-3.5 shrink-0 text-[#0866F6] dark:text-[#38BDF8]" />
              <a href={`tel:${contactDetails.phone}`} className="hover:text-foreground">
                {contactDetails.secondaryDisplayPhone
                  ? `${contactDetails.displayPhone} / ${contactDetails.secondaryDisplayPhone}`
                  : contactDetails.displayPhone}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-3.5 w-3.5 shrink-0 text-[#0866F6] dark:text-[#38BDF8]" />
              <a href={`mailto:${contactDetails.email}`} className="hover:text-foreground">
                {contactDetails.email}
              </a>
            </div>
          </div>
        </div>

        {/* Ethiopian Products */}
        <div>
          <p className="eyebrow mb-4">Specialized Products</p>
          <ul className="space-y-2.5 text-xs">
            {products.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/products#${p.slug}`}
                  className="text-muted-foreground transition-colors hover:text-[#0866F6] dark:hover:text-[#38BDF8]"
                >
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Engineering Services */}
        <div>
          <p className="eyebrow mb-4">Services We Provide</p>
          <ul className="space-y-2.5 text-xs">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services#${s.slug}`}
                  className="text-muted-foreground transition-colors hover:text-[#0866F6] dark:hover:text-[#38BDF8]"
                >
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact & Hours */}
        <div>
          <p className="eyebrow mb-4">Direct Communication</p>
          <ul className="space-y-3 text-xs text-muted-foreground">
            <li>
              <a
                href={contactDetails.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-[#25D366]/40 bg-[#25D366]/10 px-3 py-2 text-xs font-medium text-[#25D366] transition-all hover:bg-[#25D366]/20"
              >
                <MessageCircle className="h-4 w-4" />
                Chat on WhatsApp Business
              </a>
            </li>
            <li className="pt-2">
              <span className="font-medium text-foreground block">Working Hours:</span>
              <span>{contactDetails.workingHours}</span>
            </li>
            <li>
              <span className="font-medium text-foreground block">Response Time:</span>
              <span>Direct engineer response within 2 hours</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border py-6 text-center text-xs text-muted-foreground">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 sm:flex-row">
          <span>© {new Date().getFullYear()} Nova Habesha Technologies PLC. Addis Ababa, Ethiopia.</span>
          <div className="flex items-center gap-6">
            <Link href={"/business-card" as any} className="hover:text-foreground text-[#0866F6] dark:text-[#38BDF8] font-semibold transition-colors">
              Business Card (3.5" × 2")
            </Link>
            <Link href={"/contact" as any} className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href={"/contact" as any} className="hover:text-foreground transition-colors">
              Terms of Service
            </Link>
            <Link href={"/contact" as any} className="hover:text-foreground transition-colors">
              Consultation
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
