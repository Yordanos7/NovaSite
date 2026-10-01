import { createFileRoute } from "@tanstack/react-router";
import { CtaBand, PageHeader, Section } from "@/components/site/ui";
import { team } from "@/data/site";

export const Route = createFileRoute("/about")({
    head: () => ({
        meta: [
            { title: "About — The team behind Nova Tech" },
            {
                name: "description",
                content:
                    "Nova Tech is a six-person software studio founded in 2019. Who we are, how we work, and what we will not do.",
            },
            { property: "og:title", content: "About — Nova Tech" },
            { property: "og:description", content: "A six-person studio, not a faceless agency." },
        ],
    }),
    component: AboutPage,
});

const values = [
    {
        title: "Measure before rewriting",
        body: "Most systems we inherit are slower than they should be for one or two identifiable reasons. We find them before proposing a rebuild, and sometimes the honest answer is that you do not need one.",
    },
    {
        title: "Small team, no handoffs",
        body: "The engineers in your first call are the engineers who write the code. We do not sell with senior people and deliver with juniors, which is why we take on fewer projects at once.",
    },
    {
        title: "You own everything",
        body: "Code, cloud accounts, documentation and decision records are yours from the first commit. If you want to bring the work in house next quarter, we will help you do it.",
    },
    {
        title: "Say no early",
        body: "If a project needs a specialism we do not have, or the timeline is not achievable, we say so in the first conversation rather than finding out together in month three.",
    },
];

function AboutPage() {
    return (
        <>
            <PageHeader
                eyebrow="About"
                title="Six people who would rather build one thing properly."
                intro="Nova Tech started in 2019 when two of us left in-house engineering roles at the same time — one from payments infrastructure, one from logistics product design."
            />

            <Section>
                <div className="grid gap-10 lg:grid-cols-[220px_1fr]">
                    <h2 className="text-2xl font-semibold">How it started</h2>
                    <div className="max-w-2xl space-y-5 text-base leading-relaxed text-muted-foreground">
                        <p>
                            The first project was a settlement dashboard for a former colleague, built in evenings over four months.
                            It is still in production. The second came from someone who saw it, and the studio grew from there rather
                            than from a pitch deck.
                        </p>
                        <p>
                            We are six people now and have deliberately stayed that size. Every additional layer between the person
                            who understands the problem and the person writing the code costs the client something, and we have not
                            found a way to add layers without losing that.
                        </p>
                        <p>
                            We take on roughly four to six engagements a year. That is a constraint, not a growth strategy — but it is
                            the reason we can put the same people on a project from discovery through launch.
                        </p>
                    </div>
                </div>
            </Section>

            <Section>
                <p className="eyebrow">The team</p>
                <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Who you will actually work with</h2>
                <ul className="mt-10 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
                    {team.map((person) => (
                        <li key={person.name} className="bg-surface p-7">
                            <div
                                className="flex h-14 w-14 items-center justify-center rounded-full border border-primary/40 bg-primary/10 font-display text-sm font-semibold"
                                aria-hidden="true"
                            >
                                {person.initials}
                            </div>
                            <p className="mt-5 font-semibold">{person.name}</p>
                            <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.12em] text-ember">{person.role}</p>
                            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{person.bio}</p>
                        </li>
                    ))}
                </ul>
            </Section>

            <Section>
                <p className="eyebrow">How we work</p>
                <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Four commitments we hold to</h2>
                <div className="mt-10 grid gap-10 sm:grid-cols-2">
                    {values.map((v) => (
                        <div key={v.title} className="border-t border-border pt-6">
                            <h3 className="text-lg font-semibold">{v.title}</h3>
                            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
                        </div>
                    ))}
                </div>
            </Section>

            <CtaBand />
        </>
    );
}
