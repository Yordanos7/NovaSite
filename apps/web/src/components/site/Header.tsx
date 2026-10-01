import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const nav = [
    { to: "/services", label: "Services" },
    { to: "/work", label: "Work" },
    { to: "/industries", label: "Industries" },
    { to: "/process", label: "Process" },
    { to: "/about", label: "About" },
] as const;

function Wordmark() {
    return (
        <Link to="/" className="group flex items-center gap-2.5" aria-label="Nova Tech home">
            <span className="relative inline-flex h-6 w-6 items-center justify-center">
                <span className="absolute inset-0 rounded-full bg-primary/25 blur-[6px] transition-opacity group-hover:opacity-100" />
                <svg viewBox="0 0 24 24" className="relative h-5 w-5" fill="none" aria-hidden="true">
                    {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => (
                        <line
                            key={a}
                            x1="12"
                            y1="12"
                            x2={12 + 9 * Math.cos((a * Math.PI) / 180)}
                            y2={12 + 9 * Math.sin((a * Math.PI) / 180)}
                            stroke="currentColor"
                            className="text-primary"
                            strokeWidth="1.2"
                        />
                    ))}
                    <circle cx="12" cy="12" r="2.2" className="fill-ember" />
                </svg>
            </span>
            <span className="font-display text-[15px] font-semibold tracking-tight">Nova Tech</span>
        </Link>
    );
}

export function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
            <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
                <Wordmark />

                <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
                    {nav.map((item) => (
                        <Link
                            key={item.to}
                            to={item.to}
                            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                            activeProps={{ className: "text-foreground" }}
                        >
                            {item.label}
                        </Link>
                    ))}
                    <Link
                        to="/contact"
                        className="rounded-md border border-primary/50 bg-primary/10 px-3.5 py-1.5 text-sm font-medium text-foreground transition-colors hover:bg-primary/20"
                    >
                        Start a project
                    </Link>
                </nav>

                <button
                    type="button"
                    onClick={() => setOpen((v) => !v)}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-foreground md:hidden"
                    aria-expanded={open}
                    aria-label={open ? "Close menu" : "Open menu"}
                >
                    {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
                </button>
            </div>

            {open && (
                <nav className="border-t border-border bg-background px-6 py-4 md:hidden" aria-label="Mobile">
                    <ul className="flex flex-col gap-1">
                        {[...nav, { to: "/contact", label: "Contact" } as const].map((item) => (
                            <li key={item.to}>
                                <Link
                                    to={item.to}
                                    onClick={() => setOpen(false)}
                                    className="block rounded-md px-2 py-2.5 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground"
                                    activeProps={{ className: "text-foreground" }}
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
