"use client";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

const services = ["Web & Mobile Apps", "Backend & Cloud Systems", "AI Integration", "Technical Consulting", "Not sure yet"];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [selected, setSelected] = useState<string[]>([]);

  function toggle(s: string) {
    setSelected((prev) => prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-start justify-center rounded-lg border border-border bg-secondary/20 p-10">
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/40 bg-primary/10">
          <span className="font-mono text-lg text-primary">✓</span>
        </div>
        <h2 className="mt-6 text-2xl font-semibold">Message received</h2>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          We will read it and reply within one business day. If it sounds like a fit, we will suggest a 30-minute call.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
      className="space-y-8"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="name" className="eyebrow">Your name</label>
          <input
            id="name"
            type="text"
            required
            placeholder="Jane Smith"
            className="w-full rounded-md border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-colors focus:border-primary/60 focus:ring-2 focus:ring-primary/20"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="eyebrow">Work email</label>
          <input
            id="email"
            type="email"
            required
            placeholder="jane@company.com"
            className="w-full rounded-md border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-colors focus:border-primary/60 focus:ring-2 focus:ring-primary/20"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="company" className="eyebrow">Company</label>
        <input
          id="company"
          type="text"
          placeholder="Acme Corp"
          className="w-full rounded-md border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-colors focus:border-primary/60 focus:ring-2 focus:ring-primary/20"
        />
      </div>

      <div className="space-y-3">
        <p className="eyebrow">What are you looking for?</p>
        <div className="flex flex-wrap gap-2">
          {services.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => toggle(s)}
              className={`rounded-md border px-3.5 py-1.5 text-sm transition-colors ${
                selected.includes(s)
                  ? "border-primary/60 bg-primary/10 text-foreground"
                  : "border-border text-muted-foreground hover:border-foreground/30 hover:text-foreground"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="eyebrow">Tell us what is not working</label>
        <textarea
          id="message"
          required
          rows={5}
          placeholder="Describe the problem, not the solution. What is breaking, slow, or missing?"
          className="w-full rounded-md border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-colors focus:border-primary/60 focus:ring-2 focus:ring-primary/20 resize-none"
        />
      </div>

      <button
        type="submit"
        className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/85 border border-primary/60 shadow-[0_10px_40px_-18px_var(--primary)]"
      >
        Send message <ArrowRight className="h-4 w-4" />
      </button>
    </form>
  );
}
