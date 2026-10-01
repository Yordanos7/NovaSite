import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function PageHeader({
    eyebrow,
    title,
    intro,
}: {
    eyebrow: string;
    title: string;
    intro?: string;
}) {
    return (
        <section className="border-b border-border">
            <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
                <p className="eyebrow">{eyebrow}</p>
                <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-[1.08] sm:text-5xl">{title}</h1>
                {intro && <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">{intro}</p>}
            </div>
        </section>
    );
}

export function Section({
    children,
    className,
    bordered = true,
}: {
    children: ReactNode;
    className?: string;
    bordered?: boolean;
}) {
    return (
        <section className={cn(bordered && "border-b border-border", className)}>
            <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">{children}</div>
        </section>
    );
}

export function CtaBand() {
    return (
        <section className="relative overflow-hidden">
            <div className="hairline-grid pointer-events-none absolute inset-0 opacity-40" />
            <div className="nova-glow pointer-events-none absolute left-1/2 top-full h-[420px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40" />
            <div className="relative mx-auto max-w-6xl px-6 py-20 text-center sm:py-24">
                <p className="eyebrow">Next step</p>
                <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-semibold leading-tight sm:text-4xl">
                    Tell us what is not working, and we will tell you honestly whether we can help.
                </h2>
                <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground">
                    A first conversation is 30 minutes, involves an engineer rather than a salesperson, and ends with a written
                    summary of what we heard.
                </p>
                <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                    <ButtonLink to="/contact">Start a project</ButtonLink>
                    <ButtonLink to="/work" variant="ghost">
                        See our work
                    </ButtonLink>
                </div>
            </div>
        </section>
    );
}

const variants = {
    primary:
        "bg-primary text-primary-foreground hover:bg-primary/85 shadow-[0_10px_40px_-18px_var(--primary)] border border-primary/60",
    ghost: "border border-border text-foreground hover:border-foreground/35 hover:bg-secondary/60",
    ember: "bg-ember text-ember-foreground hover:bg-ember/85 border border-ember/60",
} as const;

export function ButtonLink({
    to,
    params,
    children,
    variant = "primary",
    className,
}: {
    to: string;
    params?: Record<string, string>;
    children: ReactNode;
    variant?: keyof typeof variants;
    className?: string;
}) {
    return (
        <Link
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            to={to as any}
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            params={params as any}
            className={cn(
                "inline-flex items-center justify-center rounded-md px-5 py-2.5 text-sm font-medium transition-all",
                variants[variant],
                className,
            )}
        >
            {children}
        </Link>
    );
}

export function Metric({ value, label }: { value: string; label: string }) {
    return (
        <div className="border-l border-primary/40 pl-4">
            <p className="font-display text-2xl font-semibold text-foreground sm:text-3xl">{value}</p>
            <p className="mt-1.5 text-sm leading-snug text-muted-foreground">{label}</p>
        </div>
    );
}
