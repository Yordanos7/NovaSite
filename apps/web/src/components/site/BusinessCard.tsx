"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import QRCode from "qrcode";
import {
  Phone,
  Mail,
  Globe,
  MapPin,
  Printer,
  Download,
  Copy,
  Check,
  MessageCircle,
  RefreshCw,
  Sparkles,
  Layers,
  ShieldCheck,
  Cpu,
  Share2,
} from "lucide-react";
import { contactDetails } from "@/data/site";

export function BusinessCard() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [isFlipped, setIsFlipped] = useState(false);
  const [copied, setCopied] = useState(false);
  const [qrMode, setQrMode] = useState<"vcard" | "phone" | "whatsapp">("vcard");
  const [qrCodeDataUrl, setQrCodeDataUrl] = useState<string>("");

  const vCardData = `BEGIN:VCARD
VERSION:3.0
N:Yohans;Yordanos;;;
FN:Yordanos Yohans
ORG:Ethiora Technology PLC;Ethiora Systems
TITLE:Founder & Lead Enterprise Architect
TEL;TYPE=CELL,VOICE:${contactDetails.phone.replace(/\s+/g, "")}
EMAIL:${contactDetails.email}
URL:https://ethioratech.com
ADR;TYPE=WORK:;;Bole Medhanialem;Addis Ababa;;;Ethiopia
NOTE:Ethiora Technology PLC - Ethiopian Enterprise Software, Ethiora HMS & Cloud Systems
END:VCARD`;

  useEffect(() => {
    let target = vCardData;
    if (qrMode === "phone") {
      target = `tel:${contactDetails.phone.replace(/\s+/g, "")}`;
    } else if (qrMode === "whatsapp") {
      target = `https://wa.me/${contactDetails.phone.replace(/[^0-9]/g, "")}?text=Hello+Ethiora+Technology+PLC%2C+I+want+to+inquire+about+your+enterprise+systems.`;
    }

    QRCode.toDataURL(target, {
      margin: 1,
      width: 320,
      color: {
        dark: theme === "dark" ? "#FFFFFF" : "#0A0E1A",
        light: theme === "dark" ? "#0F172A" : "#FFFFFF",
      },
      errorCorrectionLevel: "M",
    })
      .then((url) => setQrCodeDataUrl(url))
      .catch((err) => console.error("QR Code error", err));
  }, [qrMode, theme, vCardData]);

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(contactDetails.displayPhone.replace(/\s+/g, ""));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadVCard = () => {
    const blob = new Blob([vCardData], { type: "text/vcard;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "Yordanos_Yohans_Ethiora_Tech.vcf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handlePrint = () => {
    window.print();
  };

  const isDark = theme === "dark";

  return (
    <div className="w-full">
      {/* Controls Bar (hidden during print) */}
      <div className="no-print mb-8 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-border bg-card/60 p-4 backdrop-blur-md">
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground mr-1">
            Card Style:
          </span>
          <button
            type="button"
            onClick={() => setTheme("dark")}
            className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${
              isDark
                ? "bg-[#0866F6] text-white shadow-sm"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            }`}
          >
            Obsidian Dark (Luxury)
          </button>
          <button
            type="button"
            onClick={() => setTheme("light")}
            className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${
              !isDark
                ? "bg-[#0866F6] text-white shadow-sm"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            }`}
          >
            Executive Light (Clean)
          </button>

          <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground ml-3 mr-1">
            QR Action:
          </span>
          <select
            value={qrMode}
            onChange={(e) => setQrMode(e.target.value as any)}
            className="rounded-lg border border-border bg-background px-2.5 py-1.5 text-xs font-medium text-foreground outline-none focus:border-[#0866F6]"
          >
            <option value="vcard">Save Contact (.vcf)</option>
            <option value="phone">Direct Call ({contactDetails.phone})</option>
            <option value="whatsapp">Chat on WhatsApp</option>
          </select>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={handleCopyPhone}
            className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-secondary/60 px-3 py-1.5 text-xs font-medium text-foreground transition-all hover:bg-secondary"
            title={`Copy phone number ${contactDetails.displayPhone}`}
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5 text-green-500" />
                <span>Copied {contactDetails.displayPhone}!</span>
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5 text-muted-foreground" />
                <span>Copy {contactDetails.displayPhone}</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={handleDownloadVCard}
            className="inline-flex items-center gap-1.5 rounded-lg border border-blue-500/30 bg-blue-500/10 px-3 py-1.5 text-xs font-semibold text-[#0866F6] dark:text-[#38BDF8] transition-all hover:bg-blue-500/20"
          >
            <Download className="h-3.5 w-3.5" />
            <span>Download .VCF Card</span>
          </button>

          <button
            type="button"
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 rounded-lg bg-[#0866F6] px-4 py-1.5 text-xs font-semibold text-white shadow-md shadow-blue-500/20 transition-all hover:bg-[#0650c5]"
          >
            <Printer className="h-3.5 w-3.5" />
            <span>Print / PDF (3.5" × 2")</span>
          </button>
        </div>
      </div>

      {/* Side by Side Preview Layout (Desktop & Print) */}
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Front Card */}
        <div>
          <div className="no-print mb-2.5 flex items-center justify-between">
            <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              Front Side (Primary Identification)
            </span>
            <span className="text-[11px] font-mono text-[#0866F6] dark:text-[#38BDF8]">
              Standard 3.5" × 2" (88.9 × 50.8mm)
            </span>
          </div>

          <div
            className={`business-card-container relative overflow-hidden rounded-2xl border transition-all duration-300 shadow-2xl ${
              isDark
                ? "border-slate-800 bg-[#090D16] text-white shadow-blue-950/20"
                : "border-slate-200 bg-white text-slate-900 shadow-slate-300/40"
            }`}
            style={{
              aspectRatio: "3.5 / 2",
              minHeight: "260px",
            }}
          >
            {/* Background Decorative Accents */}
            <div
              className={`absolute -right-16 -top-16 h-48 w-48 rounded-full blur-3xl ${
                isDark ? "bg-[#0866F6]/15" : "bg-blue-400/15"
              }`}
            />
            <div
              className={`absolute -bottom-16 -left-16 h-48 w-48 rounded-full blur-3xl ${
                isDark ? "bg-[#38BDF8]/10" : "bg-emerald-400/10"
              }`}
            />

            {/* Subtle Ethiopian Geometric Watermark */}
            <div className="pointer-events-none absolute inset-0 opacity-[0.035]">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="card-tibeb" width="36" height="36" patternUnits="userSpaceOnUse">
                    <polygon points="18,4 32,18 18,32 4,18" fill="none" stroke="currentColor" strokeWidth="1" />
                    <rect x="14" y="14" width="8" height="8" fill="currentColor" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#card-tibeb)" />
              </svg>
            </div>

            {/* Metallic Foil Left Border Stripe */}
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[#0866F6] via-[#38BDF8] to-[#10B981]" />

            {/* Card Content Padding */}
            <div className="relative flex h-full flex-col justify-between p-6 sm:p-7">
              {/* Header: Brand + ERP pill */}
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div
                    className={`relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl p-1 shadow-md ${
                      isDark
                        ? "border border-blue-500/30 bg-[#0F172A]"
                        : "border border-slate-200 bg-slate-50"
                    }`}
                  >
                    <Image
                      src="/logos/ethiora-emblem.jpg"
                      alt="Ethiora Technology PLC Logo"
                      width={38}
                      height={38}
                      className="object-contain rounded-lg"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3
                        className={`font-display text-lg sm:text-xl font-bold tracking-tight leading-none ${
                          isDark ? "text-white" : "text-slate-900"
                        }`}
                      >
                        ETHIORA
                      </h3>
                      <span className="rounded bg-[#0866F6] px-1.5 py-0.5 font-mono text-[9px] font-bold uppercase tracking-wider text-white">
                        PLC
                      </span>
                    </div>
                    <p
                      className={`mt-1 font-mono text-[10px] tracking-wider uppercase ${
                        isDark ? "text-slate-400" : "text-slate-500"
                      }`}
                    >
                      Technology PLC · Software & Cloud
                    </p>
                  </div>
                </div>

                {/* Ge'ez brand seal */}
                <div className="text-right">
                  <span
                    className={`font-serif text-xs font-semibold tracking-wider ${
                      isDark ? "text-[#38BDF8]" : "text-[#0866F6]"
                    }`}
                  >
                    ኖቫ ሐበሻ
                  </span>
                  <p className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground opacity-60">
                    Addis Ababa
                  </p>
                </div>
              </div>

              {/* Middle: Person Name & Title */}
              <div className="my-auto pt-2">
                <div className="flex items-baseline gap-2">
                  <h4
                    className={`font-display text-xl sm:text-2xl font-bold tracking-tight ${
                      isDark ? "text-white" : "text-slate-950"
                    }`}
                  >
                    Yordanos Yohans
                  </h4>
                  <span className="font-mono text-[11px] font-medium text-[#0866F6] dark:text-[#38BDF8]">
                    / Founder
                  </span>
                </div>
                <p
                  className={`mt-0.5 text-xs font-medium ${
                    isDark ? "text-slate-300" : "text-slate-600"
                  }`}
                >
                  Lead Software Architect & Enterprise Solutions
                </p>
              </div>

              {/* Footer: Contacts + QR Code */}
              <div className="flex items-end justify-between gap-4 pt-2 border-t border-current/10">
                <div className="space-y-1.5 font-mono text-[11px] leading-tight">
                  {/* Phone */}
                  <div className="flex items-center gap-2">
                    <Phone className="h-3 w-3 text-[#0866F6] dark:text-[#38BDF8] shrink-0" />
                    <span className="font-bold tracking-wide">
                      {contactDetails.displayPhone}
                    </span>
                    <span className="opacity-60 text-[9px]">
                      ({contactDetails.phone})
                    </span>
                  </div>

                  {/* Email */}
                  <div className="flex items-center gap-2">
                    <Mail className="h-3 w-3 text-[#0866F6] dark:text-[#38BDF8] shrink-0" />
                    <span className={isDark ? "text-slate-300" : "text-slate-700"}>
                      contact@ethioratech.com
                    </span>
                  </div>

                  {/* Web & Location */}
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1.5">
                      <Globe className="h-3 w-3 text-[#0866F6] dark:text-[#38BDF8] shrink-0" />
                      <span className={isDark ? "text-slate-300" : "text-slate-700"}>
                        www.ethioratech.com
                      </span>
                    </div>
                    <span className="opacity-30">·</span>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="h-3 w-3 text-[#0866F6] dark:text-[#38BDF8] shrink-0" />
                      <span className="opacity-75 text-[10px]">
                        Bole, Addis Ababa
                      </span>
                    </div>
                  </div>
                </div>

                {/* QR Code Container */}
                <div className="flex flex-col items-center">
                  <div
                    className={`relative h-[68px] w-[68px] overflow-hidden rounded-lg p-1 shadow-inner ${
                      isDark
                        ? "border border-slate-700 bg-slate-900"
                        : "border border-slate-200 bg-white"
                    }`}
                  >
                    {qrCodeDataUrl ? (
                      <img
                        src={qrCodeDataUrl}
                        alt="Scannable QR Code"
                        className="h-full w-full object-contain rounded"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center text-[8px] text-muted-foreground">
                        QR
                      </div>
                    )}
                  </div>
                  <span className="mt-1 font-mono text-[8px] uppercase tracking-wider opacity-60">
                    Scan Contact
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Back Card */}
        <div>
          <div className="no-print mb-2.5 flex items-center justify-between">
            <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              Back Side (Enterprise Capabilities & Assurance)
            </span>
            <span className="text-[11px] font-mono text-emerald-500">
              Verified Production Scope
            </span>
          </div>

          <div
            className={`business-card-container relative overflow-hidden rounded-2xl border transition-all duration-300 shadow-2xl ${
              isDark
                ? "border-slate-800 bg-[#090D16] text-white shadow-blue-950/20"
                : "border-slate-200 bg-white text-slate-900 shadow-slate-300/40"
            }`}
            style={{
              aspectRatio: "3.5 / 2",
              minHeight: "260px",
            }}
          >
            {/* Background Radial Glow */}
            <div
              className={`absolute right-1/4 top-1/4 h-56 w-56 -translate-y-1/2 rounded-full blur-3xl ${
                isDark ? "bg-[#0866F6]/10" : "bg-blue-400/10"
              }`}
            />

            {/* Subtle Ethiopian Geometric Watermark */}
            <div className="pointer-events-none absolute inset-0 opacity-[0.035]">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="card-tibeb-back" width="36" height="36" patternUnits="userSpaceOnUse">
                    <polygon points="18,4 32,18 18,32 4,18" fill="none" stroke="currentColor" strokeWidth="1" />
                    <rect x="14" y="14" width="8" height="8" fill="currentColor" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#card-tibeb-back)" />
              </svg>
            </div>

            {/* Right Metallic Border Stripe */}
            <div className="absolute right-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[#10B981] via-[#38BDF8] to-[#0866F6]" />

            {/* Card Content Padding */}
            <div className="relative flex h-full flex-col justify-between p-6 sm:p-7">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-current/10 pb-2.5">
                <div className="flex items-center gap-2">
                  <Image
                    src="/logos/ethiora-emblem.jpg"
                    alt="Logo"
                    width={22}
                    height={22}
                    className="object-contain rounded"
                  />
                  <span className="font-display text-sm font-bold tracking-tight">
                    ETHIORA TECHNOLOGY PLC
                  </span>
                </div>
                <span className="font-mono text-[9px] uppercase tracking-wider text-emerald-500 font-semibold bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                  Enterprise Standard
                </span>
              </div>

              {/* 6 Core Modules Grid */}
              <div className="my-auto grid grid-cols-2 gap-2.5 py-1">
                <div
                  className={`rounded-lg border p-2 ${
                    isDark
                      ? "border-slate-800 bg-slate-900/60"
                      : "border-slate-100 bg-slate-50"
                  }`}
                >
                  <div className="flex items-center gap-1.5 text-[#0866F6] dark:text-[#38BDF8]">
                    <Layers className="h-3 w-3" />
                    <span className="font-mono text-[10px] font-bold">
                      Finance & Accounting
                    </span>
                  </div>
                  <p className="mt-0.5 text-[9px] text-muted-foreground leading-tight">
                    Double-entry ledger, VAT & Ethiopian tax reports.
                  </p>
                </div>

                <div
                  className={`rounded-lg border p-2 ${
                    isDark
                      ? "border-slate-800 bg-slate-900/60"
                      : "border-slate-100 bg-slate-50"
                  }`}
                >
                  <div className="flex items-center gap-1.5 text-[#0866F6] dark:text-[#38BDF8]">
                    <Cpu className="h-3 w-3" />
                    <span className="font-mono text-[10px] font-bold">
                      Inventory & Multi-Store
                    </span>
                  </div>
                  <p className="mt-0.5 text-[9px] text-muted-foreground leading-tight">
                    Real-time stock valuation, transfers & barcode ops.
                  </p>
                </div>

                <div
                  className={`rounded-lg border p-2 ${
                    isDark
                      ? "border-slate-800 bg-slate-900/60"
                      : "border-slate-100 bg-slate-50"
                  }`}
                >
                  <div className="flex items-center gap-1.5 text-[#0866F6] dark:text-[#38BDF8]">
                    <Sparkles className="h-3 w-3" />
                    <span className="font-mono text-[10px] font-bold">
                      Point of Sale (POS)
                    </span>
                  </div>
                  <p className="mt-0.5 text-[9px] text-muted-foreground leading-tight">
                    Instant touch cashier with offline continuity mode.
                  </p>
                </div>

                <div
                  className={`rounded-lg border p-2 ${
                    isDark
                      ? "border-slate-800 bg-slate-900/60"
                      : "border-slate-100 bg-slate-50"
                  }`}
                >
                  <div className="flex items-center gap-1.5 text-[#0866F6] dark:text-[#38BDF8]">
                    <ShieldCheck className="h-3 w-3" />
                    <span className="font-mono text-[10px] font-bold">
                      Telebirr & Local Banks
                    </span>
                  </div>
                  <p className="mt-0.5 text-[9px] text-muted-foreground leading-tight">
                    Telebirr, Chapa, CBE Birr & automated reconciliation.
                  </p>
                </div>
              </div>

              {/* Footer: Direct Call / WhatsApp CTA */}
              <div className="flex items-center justify-between border-t border-current/10 pt-2 font-mono text-[10px]">
                <div className="flex items-center gap-2">
                  <span className="text-muted-foreground">Book Demo:</span>
                  <a
                    href={`tel:${contactDetails.phone.replace(/\s+/g, "")}`}
                    className="font-bold text-[#0866F6] dark:text-[#38BDF8] hover:underline"
                  >
                    {contactDetails.displayPhone}
                  </a>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <span>Addis Ababa, Ethiopia</span>
                  <span>·</span>
                  <span className="text-[#25D366] font-semibold">
                    WhatsApp Ready
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Print-Specific Stylesheet */}
      <style jsx global>{`
        @media print {
          body {
            background: white !important;
            color: black !important;
            margin: 0 !important;
            padding: 0 !important;
          }
          header,
          footer,
          nav,
          .no-print {
            display: none !important;
          }
          .business-card-container {
            width: 3.5in !important;
            height: 2in !important;
            min-height: 2in !important;
            max-width: 3.5in !important;
            page-break-inside: avoid !important;
            break-inside: avoid !important;
            box-shadow: none !important;
            border: 1px solid #cbd5e1 !important;
            border-radius: 0.125in !important;
            margin: 0.25in auto !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
        }
      `}</style>
    </div>
  );
}
