"use client";
import Image from "next/image";
import Link from "next/link";
import { clientPartners, type ClientPartner } from "@/data/site";
import { CheckCircle2, ExternalLink } from "lucide-react";

interface LogoCarouselProps {
  className?: string;
}

export function LogoCarousel({ className = "" }: LogoCarouselProps) {
  // Duplicate array 2 times to ensure infinite seamless scrolling without empty gaps
  const marqueeItems: ClientPartner[] = [
    ...clientPartners,
    ...clientPartners,
  ];

  return (
    <div className={`relative w-full overflow-hidden py-4 ${className}`}>
      {/* Left & Right Edge Gradient Fade Masks */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-16 sm:w-28 bg-gradient-to-r from-background via-background/80 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-16 sm:w-28 bg-gradient-to-l from-background via-background/80 to-transparent" />

      {/* Infinite Scrolling Track (Right to Left) */}
      <div className="flex animate-marquee-rtl gap-6 py-2">
        {marqueeItems.map((item, index) => {
          const cardContent = (
            <div className="group flex h-20 shrink-0 items-center gap-4 rounded-2xl border border-border/80 bg-card/80 px-5 py-3 shadow-xs backdrop-blur-sm transition-all duration-300 hover:border-[#0866F6] hover:bg-card hover:shadow-md hover:scale-[1.02]">
              {/* Logo Box */}
              <div className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white p-1 border border-border/60 shadow-xs transition-transform duration-300 group-hover:scale-105">
                <Image
                  src={item.logo}
                  alt={`${item.name} Logo`}
                  width={48}
                  height={48}
                  className="h-full w-full object-contain"
                  loading="eager"
                />
              </div>

              {/* Text Info */}
              <div className="flex flex-col justify-center pr-2">
                <div className="flex items-center gap-2">
                  <span className="font-display text-sm sm:text-base font-bold tracking-tight text-foreground transition-colors group-hover:text-[#0866F6] dark:group-hover:text-[#38BDF8]">
                    {item.name}
                  </span>
                  {item.badge && (
                    <span className="rounded-full bg-[#0866F6]/10 border border-[#0866F6]/25 px-2 py-0.5 text-[10px] font-mono font-semibold text-[#0866F6] dark:text-[#38BDF8]">
                      {item.badge}
                    </span>
                  )}
                  {item.url && (
                    <ExternalLink className="h-3 w-3 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                  )}
                </div>
                <span className="font-mono text-[11px] text-muted-foreground line-clamp-1 mt-0.5">
                  {item.category}
                </span>
              </div>
            </div>
          );

          if (item.url) {
            return (
              <a
                key={`partner-${index}-${item.name}`}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 outline-none focus:ring-2 focus:ring-[#0866F6]/30 rounded-2xl"
                aria-label={`Visit ${item.name}`}
              >
                {cardContent}
              </a>
            );
          }

          return (
            <div key={`partner-${index}-${item.name}`} className="shrink-0">
              {cardContent}
            </div>
          );
        })}
      </div>
    </div>
  );
}
