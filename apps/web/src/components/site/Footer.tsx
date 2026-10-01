import { Link } from "@tanstack/react-router";
import { contactDetails } from "@/data/site";

export function Footer() {
    return (
        <footer className="border-t border-border">
            <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4">
                <div>
                    <p className="font-display text-sm font-semibold">Nova Tech</p>
                    <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
                        A software studio building custom systems for companies and institutions.
                    </p>
                </div>

                <div>
                    <p className="eyebrow">Company</p>
                    <ul className="mt-4 space-y-2.5 text-sm">
                        <li>
                            <Link to="/services" className="text-muted-foreground transition-colors hover:text-foreground">
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link to="/work" className="text-muted-foreground transition-colors hover:text-foreground">
                                Work
                            </Link>
                        </li>
                        <li>
                            <Link to="/industries" className="text-muted-foreground transition-colors hover:text-foreground">
                                Industries
                            </Link>
                        </li>
                        <li>
                            <Link to="/process" className="text-muted-foreground transition-colors hover:text-foreground">
                                Process
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" className="text-muted-foreground transition-colors hover:text-foreground">
                                About
                            </Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <p className="eyebrow">Contact</p>
                    <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
                        <li>
                            <a href={`mailto:${contactDetails.email}`} className="transition-colors hover:text-foreground">
                                {contactDetails.email}
                            </a>
                        </li>
                        <li>{contactDetails.location}</li>
                        <li>
                            <Link to="/contact" className="transition-colors hover:text-foreground">
                                Start a project
                            </Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <p className="eyebrow">Working with us</p>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                        Most engagements start with a two-week discovery. You keep the findings either way.
                    </p>
                </div>
            </div>

            <div className="border-t border-border">
                <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-6 font-mono text-[11px] text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
                    <span>© {new Date().getFullYear()} Nova Tech Studio</span>
                    <span>Lisbon · Remote across Europe</span>
                </div>
            </div>
        </footer>
    );
}
