import React from "react";
import Image from "next/image";

interface NovaHabeshaLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "horizontal" | "vertical" | "icon-only";
  showGeez?: boolean;
}

export function NovaHabeshaEmblem({ className = "h-11 w-11" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Nova Habesha Emblem"
    >
      <defs>
        {/* Ethiopian Flag & Heritage Gradients */}
        <linearGradient id="nh-green" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10B981" />
          <stop offset="55%" stopColor="#06752F" />
          <stop offset="100%" stopColor="#044E20" />
        </linearGradient>

        <linearGradient id="nh-gold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FEF08A" />
          <stop offset="50%" stopColor="#F3D02D" />
          <stop offset="100%" stopColor="#D97706" />
        </linearGradient>

        <linearGradient id="nh-red" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F87171" />
          <stop offset="60%" stopColor="#EE334E" />
          <stop offset="100%" stopColor="#991B1B" />
        </linearGradient>

        {/* Ambient Nova Star Glow */}
        <radialGradient id="nh-nova-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#F3D02D" stopOpacity="0.5" />
          <stop offset="45%" stopColor="#06752F" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#EE334E" stopOpacity="0" />
        </radialGradient>

        <filter id="nh-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="3" stdDeviation="3.5" floodOpacity="0.3" />
        </filter>
      </defs>

      {/* Radiant Background Aura */}
      <circle cx="60" cy="60" r="54" fill="url(#nh-nova-glow)" />

      {/* Outer Protective Habesha Meskel & Diamond Border Ring */}
      <circle
        cx="60"
        cy="60"
        r="50"
        stroke="url(#nh-gold)"
        strokeWidth="1.5"
        strokeDasharray="5 3"
        opacity="0.45"
      />

      {/* Interwoven Geometric Cross & Modular ERP Pillars */}
      <g filter="url(#nh-shadow)">
        {/* Top Arm (Vision & Strategy) */}
        <path
          d="M52 14 L68 14 L64 36 L56 36 Z"
          fill="url(#nh-green)"
        />
        <circle cx="60" cy="14" r="3.5" fill="#F3D02D" />

        {/* Bottom Arm (Execution & Infrastructure) */}
        <path
          d="M56 84 L64 84 L68 106 L52 106 Z"
          fill="url(#nh-red)"
        />
        <circle cx="60" cy="106" r="3.5" fill="#F3D02D" />

        {/* Left Arm (Supply & Operations) */}
        <path
          d="M14 52 L14 68 L36 64 L36 56 Z"
          fill="url(#nh-green)"
        />
        <circle cx="14" cy="60" r="3.5" fill="#F3D02D" />

        {/* Right Arm (Finance & Enterprise Growth) */}
        <path
          d="M84 56 L84 64 L106 68 L106 52 Z"
          fill="url(#nh-red)"
        />
        <circle cx="106" cy="60" r="3.5" fill="#F3D02D" />

        {/* Diagonal Cross Weaves (Traditional Lalibela Interlock Structure) */}
        <polygon
          points="32,32 46,24 60,38 46,52"
          fill="url(#nh-gold)"
          opacity="0.85"
        />
        <polygon
          points="88,32 74,24 60,38 74,52"
          fill="url(#nh-gold)"
          opacity="0.85"
        />
        <polygon
          points="32,88 46,96 60,82 46,68"
          fill="url(#nh-gold)"
          opacity="0.85"
        />
        <polygon
          points="88,88 74,96 60,82 74,68"
          fill="url(#nh-gold)"
          opacity="0.85"
        />

        {/* Central Interlocking Square (The Enterprise Core) */}
        <rect
          x="44"
          y="44"
          width="32"
          height="32"
          rx="6"
          fill="#0A0E1A"
          stroke="url(#nh-gold)"
          strokeWidth="2"
        />
      </g>

      {/* The Central Radiant 'Nova' Starburst (Luminous Core) */}
      <g transform="translate(60, 60)">
        {/* 8-Pointed Starburst */}
        <polygon
          points="0,-16 4,-4 16,0 4,4 0,16 -4,4 -16,0 -4,-4"
          fill="url(#nh-gold)"
        />
        <polygon
          points="0,-11 3,-3 11,0 3,3 0,11 -3,3 -11,0 -3,-3"
          transform="rotate(45)"
          fill="#FEF08A"
        />
        {/* Core Diamond */}
        <circle cx="0" cy="0" r="4" fill="#FFFFFF" />
        <circle cx="0" cy="0" r="2.2" fill="#06752F" />
      </g>
    </svg>
  );
}

export function NovaHabeshaLogo({
  className = "",
  size = "md",
  variant = "horizontal",
  showGeez = true,
}: NovaHabeshaLogoProps) {
  const sizeMap = {
    sm: { emblem: "h-8 w-8", title: "text-lg", geez: "text-[10px]", sub: "text-[8px]" },
    md: { emblem: "h-12 w-12", title: "text-2xl", geez: "text-xs", sub: "text-[10px]" },
    lg: { emblem: "h-16 w-16", title: "text-3xl", geez: "text-sm", sub: "text-xs" },
    xl: { emblem: "h-24 w-24", title: "text-5xl", geez: "text-base", sub: "text-sm" },
  };

  const currentSize = sizeMap[size];

  if (variant === "icon-only") {
    return (
      <div className={`inline-flex items-center justify-center ${className}`}>
        <NovaHabeshaEmblem className={currentSize.emblem} />
      </div>
    );
  }

  if (variant === "vertical") {
    return (
      <div className={`flex flex-col items-center text-center gap-2.5 ${className}`}>
        <NovaHabeshaEmblem className={currentSize.emblem} />
        <div>
          <div className="flex items-center justify-center gap-2 font-bold tracking-wider leading-none">
            <span className={`font-serif ${currentSize.title} text-[#06752F] dark:text-[#10B981]`}>
              NOVA
            </span>
            <span className={`font-serif ${currentSize.title} text-[#F3D02D] dark:text-[#F3D02D]`}>
              HABESHA
            </span>
          </div>
          <div className="mt-1 flex items-center justify-center gap-2 text-muted-foreground">
            {showGeez && (
              <span className={`font-serif text-[#EE334E] font-medium tracking-wide ${currentSize.geez}`}>
                ኖቫ ሐበሻ
              </span>
            )}
            {showGeez && <span className="text-[9px] opacity-40">·</span>}
            <span className={`font-mono uppercase tracking-[0.2em] ${currentSize.sub}`}>
              ERP Systems
            </span>
          </div>
        </div>
      </div>
    );
  }

  // Horizontal variant (default)
  return (
    <div className={`inline-flex items-center gap-3.5 ${className}`}>
      <NovaHabeshaEmblem className={currentSize.emblem} />
      <div className="flex flex-col leading-tight">
        <div className="flex items-center gap-2 font-bold tracking-wide">
          <span className={`font-serif ${currentSize.title} text-[#06752F] dark:text-[#10B981]`}>
            NOVA
          </span>
          <span className={`font-serif ${currentSize.title} text-[#F3D02D] dark:text-[#F3D02D]`}>
            HABESHA
          </span>
          <span className="font-mono text-[10px] text-[#EE334E] dark:text-[#F87171] bg-[#EE334E]/10 border border-[#EE334E]/30 px-1.5 py-0.5 rounded font-semibold uppercase tracking-wider ml-1">
            ERP
          </span>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground mt-0.5">
          {showGeez && (
            <span className={`font-serif text-[#EE334E] font-medium ${currentSize.geez}`}>
              ኖቫ ሐበሻ
            </span>
          )}
          {showGeez && <span className="text-[9px] opacity-40">·</span>}
          <span className={`font-mono uppercase tracking-[0.18em] ${currentSize.sub}`}>
            Enterprise Systems
          </span>
        </div>
      </div>
    </div>
  );
}

export function NovaHabeshaImageLogo({
  className = "",
  size = 48,
  transparent = true,
}: {
  className?: string;
  size?: number;
  transparent?: boolean;
}) {
  return (
    <Image
      src={
        transparent
          ? "/logos/nova-habesha-erp-logo-transparent.png"
          : "/logos/nova-habesha-erp-logo.png"
      }
      alt="Nova Habesha ERP Logo"
      width={size}
      height={size}
      className={`object-contain ${className}`}
    />
  );
}
