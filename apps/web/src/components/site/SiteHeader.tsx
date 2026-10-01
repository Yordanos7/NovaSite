"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";

const nav = [
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/industries", label: "Industries" },
  { href: "/process", label: "Process" },
  { href: "/about", label: "About" },
];

function Wordmark() {
  return (
    <Link href="/" className="group flex items-center gap-3" aria-label="Nova Teach home">
      <span className="relative inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#F3D02D] via-[#06752F] to-[#EE334E] shadow-lg">
        <span className="absolute inset-1 rounded-full bg-[#F5E6D3] flex items-center justify-center">
          {/* Traditional Ethiopian Cross Symbol */}
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2V22M2 12H22M8 8L16 16M16 8L8 16" stroke="#06752F" strokeWidth="1.8" strokeLinecap="round" />
            <circle cx="12" cy="12" r="2" fill="#F3D02D" />
          </svg>
        </span>
      </span>
      <div className="flex flex-col leading-none">
        <span className="font-serif text-lg font-bold tracking-wider text-[#06752F]" style={{ fontVariantNumeric: "normal" }}>
          Nova Teach
        </span>
        <span className="font-crimson text-[10px] tracking-widest text-[#8B7355] italic">Ethiopian Legacy</span>
      </div>
    </Link>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#EE334E] via-[#F3D02D] to-[#06752F]" />
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Wordmark />

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-[#06752F]"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-md border-2 border-[#F3D02D] bg-transparent px-3.5 py-1.5 text-sm font-medium text-foreground transition-colors hover:bg-[#F3D02D]/10"
          >
            Start a project
          </Link>
          <ModeToggle />
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-9 w-9 items-center justify-center rounded-md border-2 border-[#F3D02D] text-[#06752F] md:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border bg-background px-6 py-4 md:hidden" aria-label="Mobile">
          <ul className="flex flex-col gap-1">
            {[...nav, { href: "/contact", label: "Contact" }].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-2 py-2.5 text-sm text-muted-foreground hover:bg-[#06752F]/10 hover:text-[#06752F]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
