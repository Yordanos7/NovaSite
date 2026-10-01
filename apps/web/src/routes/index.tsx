import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { HeroVisual } from "@/components/site/HeroVisual";
import { ButtonLink, CtaBand, Metric, Section } from "@/components/site/ui";
import { caseStudies, clients, services } from "@/data/site";

export const Route = createFileRoute("/")({
    head: () => ({
        meta: [
            { title: "Nova Tech — Custom software for companies and institutions" },
            {
                name: "description",
                content:
                    "Nova Tech is a small software studio building custom web apps, backend and cloud systems, AI integration and technical consulting for companies and institutions.",
            },
            { property: "og:title", content: "Nova Tech — Custom software for companies and institutions" },
            {
                property: "og:description",
                content: "Nova Tech is a small software studio building custom web apps, backend and cloud systems, AI integration and technical consulting for companies and institutions.",
            },
        ],
    }),
    component: Home,
});

function Home() {
    const featured = caseStudies[0]!;

    return (
        <>
            <section className="relative overflow-hidden border-b border-border">
                <div className="hairline-grid pointer-events-none absolute inset-0 opacity-50" />
                <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
                    <div>
                        <p className="eyebrow">Software studio · Est. 2019</p>
                        <h1 className="mt-5 text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-6xl">
                            Custom software for companies that have outgrown the workaround.
                        </h1>
                        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                            We design and build web applications, backend systems and applied AI for organisations where the software
                            is the operation — then hand it over documented, tested and yours.
                        </p>
                        <div className="mt-9 flex flex-wrap gap-3">
                            <ButtonLink to="/work">See our work</ButtonLink>
                            <ButtonLink to="/contact" variant="ghost">
                                Start a project
                            </ButtonLink>
                        </div>
                        <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-8">
                            {[
                                { v: "18", l: "engagements delivered" },
                                { v: "6", l: "people, no subcontractors" },
                                { v: "92%", l: "of clients return" },
                            ].map((s) => (
                                <div key={s.l}>
                                    <dt className="font-display text-2xl font-semibold">{s.v}</dt>
                                    <dd className="mt-1 text-xs leading-snug text-muted-foreground">{s.l}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <HeroVisual />
                    </div>
                </div>
            </section>

            <section className="border-b border-border">
                <div className="mx-auto max-w-6xl px-6 py-10">
                    <p className="eyebrow">Selected clients</p>
                    <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-3 lg:grid-cols-6">
                        {clients.map((c) => (
                            <li key={c} className="flex items-center gap-2.5 opacity-70 transition-opacity hover:opacity-100">
                                <span className="h-2.5 w-2.5 rotate-45 border border-primary/70" aria-hidden="true" />
                                <span className="font-mono text-xs tracking-wide text-muted-foreground">{c}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <Section>
                <div className="flex flex-wrap items-end justify-between gap-4">
                    <div>
                        <p className="eyebrow">What we do</p>
                        <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Four ways we work with clients</h2>
                    </div>
                    <Link
                        to="/services"
                        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                        All services <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                </div>

                <div className="mt-10 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2">
                    {services.map((s, i) => (
                        <Link
                            key={s.slug}
                            to="/services"
                            hash={s.slug}
                            className="group relative bg-background p-7 transition-colors hover:bg-surface"
                        >
                            <span className="font-mono text-[11px] text-primary">{String(i + 1).padStart(2, "0")}</span>
                            <h3 className="mt-4 text-lg font-semibold">{s.name}</h3>
                            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.summary}</p>
                            <span className="mt-5 inline-flex items-center gap-1.5 text-sm text-foreground/80 transition-colors group-hover:text-foreground">
                                Read more <ArrowRight className="h-3.5 w-3.5" />
                            </span>
                        </Link>
                    ))}
                </div>
            </Section>

            <Section>
                <p className="eyebrow">Featured case study</p>
                <div className="mt-8 grid items-center gap-10 lg:grid-cols-2">
                    <div className="overflow-hidden rounded-lg border border-border">
                        <img
                            src={featured.image}
                            alt={`${featured.client} project visual`}
                            width={1200}
                            height={800}
                            loading="lazy"
                            className="h-full w-full object-cover"
                        />
                    </div>
                    <div>
                        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ember">
                            {featured.client} · {featured.industry}
                        </p>
                        <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">{featured.headline}</h2>
                        <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{featured.challenge[0]}</p>
                        <div className="mt-8 grid gap-6 sm:grid-cols-2">
                            {featured.metrics.slice(0, 2).map((m) => (
                                <Metric key={m.label} value={m.value} label={m.label} />
                            ))}
                        </div>
                        <div className="mt-8">
                            <ButtonLink to="/work/$slug" params={{ slug: featured.slug }} variant="ghost">
                                Read the case study
                            </ButtonLink>
                        </div>
                    </div>
                </div>
            </Section>

            <Section>
                <figure className="mx-auto max-w-3xl text-center">
                    <blockquote className="font-display text-2xl leading-snug sm:text-3xl">
                        "They asked our intake coordinators harder questions than our own vendors ever have. The result is the first
                        system our staff have not asked us to replace."
                    </blockquote>
                    <figcaption className="mt-6 text-sm text-muted-foreground">
                        Dr. Ines Marchetti · Clinical Director, Vitals Network
                    </figcaption>
                </figure>
            </Section>

            <CtaBand />
        </>
    );
}
