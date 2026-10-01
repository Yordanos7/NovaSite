import type { Metadata } from "next";
import { contactDetails } from "@/data/site";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Start a project — Nova Tech",
  description: "Tell us what is not working. A first conversation is 30 minutes and ends with a written summary.",
};

export default function ContactPage() {
  return (
    <>
      {/* Page header */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <p className="eyebrow">Start a project</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-[1.08] sm:text-5xl">
            Tell us what is not working.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
            A first conversation is 30 minutes, involves an engineer rather than a salesperson, and ends with a written
            summary of what we heard — whether or not we continue.
          </p>
        </div>
      </section>

      {/* Form + details */}
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-6xl gap-16 px-6 py-16 sm:py-20 lg:grid-cols-[1fr_380px]">
          <ContactForm />

          <aside className="space-y-10">
            <div>
              <p className="eyebrow mb-4">What happens next</p>
              <ol className="space-y-4">
                {[
                  "We read your message and reply within one business day.",
                  "If it sounds like a fit, we schedule a 30-minute call with an engineer.",
                  "After the call you receive a written summary of what we heard.",
                  "If you want to continue, we propose a discovery engagement.",
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-primary/40 font-mono text-[10px] text-primary">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>

            <div className="border-t border-border pt-8">
              <p className="eyebrow mb-4">Contact details</p>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>
                  <a
                    href={`mailto:${contactDetails.email}`}
                    className="transition-colors hover:text-foreground"
                  >
                    {contactDetails.email}
                  </a>
                </li>
                <li>{contactDetails.location}</li>
              </ul>
            </div>

            <div className="rounded-lg border border-border bg-secondary/20 p-6">
              <p className="text-sm font-medium">Not ready to start?</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Most engagements start with a two-week discovery. You keep the findings either way — there is no
                obligation to continue.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
