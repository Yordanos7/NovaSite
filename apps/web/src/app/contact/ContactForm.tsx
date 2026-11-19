"use client";
import { useState } from "react";
import { ArrowRight, CheckCircle2, MessageCircle, PhoneCall } from "lucide-react";
import { contactDetails } from "@/data/site";

const options = [
  "Ethiora ERP & Enterprise Suite",
  "Alyah Restaurant OS & QR Digital Menu",
  "Ethiora HMS (Hospital & Clinic PMS)",
  "Digital Equb Platform",
  "SACCO & Cooperative Banking Portal",
  "Wholesale & FMCG Distribution ERP",
  "Transport & Logistics Dispatch App",
  "Telebirr / Chapa E-Commerce",
  "Mobile App Development",
  "IT Outsourcing & Dedicated Teams",
  "Custom Software & Cloud Systems",
  "AI & Automation",
  "Other / Architecture Review",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [selected, setSelected] = useState<string[]>([]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function toggle(s: string) {
    setSelected((prev) => (prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]));
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-start justify-center rounded-xl border border-blue-500/30 bg-blue-500/5 p-10 shadow-md">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0866F6] text-white">
          <CheckCircle2 className="h-6 w-6" />
        </div>
        <h2 className="mt-6 font-display text-2xl font-bold text-foreground">Inquiry Received</h2>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          Thank you, <strong className="text-foreground">{name || "there"}</strong>. Our lead engineer in Addis Ababa will review your requirements and reach out via phone or email within one business day.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={contactDetails.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-[#25D366] px-4 py-2 text-xs font-semibold text-white hover:bg-[#1EBE5D]"
          >
            <MessageCircle className="h-4 w-4" />
            Connect directly on WhatsApp
          </a>
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="text-xs text-muted-foreground hover:underline px-2 py-2"
          >
            Submit another inquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="space-y-6 rounded-xl border border-border bg-card p-8 shadow-sm"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="name" className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
            Full Name *
          </label>
          <input
            id="name"
            required
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Abebe Kebede"
            className="w-full rounded-md border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-colors focus:border-[#0866F6] focus:ring-2 focus:ring-[#0866F6]/20"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="phone" className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
            Phone (Ethiopia / Int'l) *
          </label>
          <input
            id="phone"
            required
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+251 91 123 4567"
            className="w-full rounded-md border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-colors focus:border-[#0866F6] focus:ring-2 focus:ring-[#0866F6]/20"
          />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="email" className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
            Work Email *
          </label>
          <input
            id="email"
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="abebe@company.com"
            className="w-full rounded-md border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-colors focus:border-[#0866F6] focus:ring-2 focus:ring-[#0866F6]/20"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="company" className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
            Organization / Company
          </label>
          <input
            id="company"
            type="text"
            placeholder="Ethiora Partner, Enterprise, NGO, etc."
            className="w-full rounded-md border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-colors focus:border-[#0866F6] focus:ring-2 focus:ring-[#0866F6]/20"
          />
        </div>
      </div>

      <div className="space-y-3">
        <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
          What products or services do you need?
        </p>
        <div className="flex flex-wrap gap-2">
          {options.map((opt) => (
            <button
              key={opt}
              type="button"
              onClick={() => toggle(opt)}
              className={`rounded-md border px-3 py-1.5 text-xs font-medium transition-all ${
                selected.includes(opt)
                  ? "border-[#0866F6] bg-[#0866F6] text-white shadow-sm"
                  : "border-border text-muted-foreground hover:border-[#0866F6]/50 hover:text-foreground"
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
          Project Overview / Challenge *
        </label>
        <textarea
          id="message"
          required
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Describe your workflows, goals, target audience, or desired launch timeframe..."
          className="w-full rounded-md border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-colors focus:border-[#0866F6] focus:ring-2 focus:ring-[#0866F6]/20 resize-none"
        />
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
        <button
          type="submit"
          className="inline-flex items-center gap-2 rounded-md bg-[#0866F6] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition-all hover:bg-[#0650c5]"
        >
          Submit Project Inquiry <ArrowRight className="h-4 w-4" />
        </button>

        <a
          href={contactDetails.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs font-semibold text-[#25D366] hover:underline"
        >
          <MessageCircle className="h-4 w-4" />
          Or message us directly on WhatsApp
        </a>
      </div>
    </form>
  );
}
