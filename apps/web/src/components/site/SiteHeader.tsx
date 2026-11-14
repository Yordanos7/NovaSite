"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, PhoneCall } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";
import { contactDetails } from "@/data/site";

const nav = [
  { href: "/products", label: "Products" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Case Studies" },
  { href: "/industries", label: "Industries" },
  { href: "/process", label: "Process" },
  { href: "/about", label: "About" },
];

function Wordmark() {
  return (
    <Link href="/" className="group flex items-center gap-3" aria-label="Nova Habesha ERP home">
      <div className="relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-card border border-border/80 shadow-md transition-transform group-hover:scale-105">
        <Image
          src="/logos/nova-habesha-erp-logo-transparent.png"
          alt="Nova Habesha ERP Logo"
          width={44}
          height={44}
          className="h-full w-full object-contain p-0.5"
          priority
        />
      </div>
      <div className="flex flex-col leading-none">
        <div className="flex items-center gap-1.5">
          <span className="font-display text-lg font-bold tracking-tight text-foreground group-hover:text-[#0866F6] transition-colors">
            Nova Habesha
          </span>
          <span className="font-mono text-[9px] font-bold text-[#0866F6] dark:text-[#38BDF8] bg-[#0866F6]/10 border border-[#0866F6]/30 px-1 py-0.5 rounded uppercase">
            ERP
          </span>
        </div>
        <span className="font-mono text-[10px] tracking-wider text-muted-foreground uppercase mt-0.5">
          Enterprise Systems
        </span>
      </div>
    </Link>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-md">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00267B] via-[#0866F6] to-[#38BDF8]" />
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Wordmark />

        <nav className="hidden items-center gap-6 lg:gap-8 md:flex" aria-label="Main">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href as any}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-[#0866F6] dark:hover:text-[#38BDF8]"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={`tel:${contactDetails.phone}`}
            className="hidden items-center gap-1.5 text-xs font-mono font-medium text-[#0866F6] dark:text-[#38BDF8] hover:underline xl:inline-flex"
          >
            <PhoneCall className="h-3.5 w-3.5" />
            {contactDetails.displayPhone}
          </a>
          <Link
            href="/contact"
            className="rounded-md bg-[#0866F6] px-4 py-1.5 text-xs font-semibold text-white shadow-sm shadow-blue-500/25 transition-all hover:bg-[#0650c5] border border-blue-400/30"
          >
            Start a Project
          </Link>
          <ModeToggle />
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <ModeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-foreground hover:border-[#0866F6]"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-background px-6 py-4 md:hidden shadow-lg" aria-label="Mobile">
          <ul className="flex flex-col gap-1.5">
            {[...nav, { href: "/contact", label: "Contact Us" }].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href as any}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-[#0866F6]/10 hover:text-[#0866F6]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-2 border-t border-border">
              <a
                href={`tel:${contactDetails.phone}`}
                className="flex items-center gap-2 px-3 py-2 text-sm font-mono text-[#0866F6] dark:text-[#38BDF8]"
              >
                <PhoneCall className="h-4 w-4" />
                Call us: {contactDetails.displayPhone}
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
