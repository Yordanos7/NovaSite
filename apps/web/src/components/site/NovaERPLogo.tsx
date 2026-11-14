import React from "react";

interface NovaERPLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "horizontal" | "vertical" | "icon-only";
  theme?: "dark" | "light" | "auto";
}

export function NovaERPEmblem({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Nova ERP Emblem"
    >
      <defs>
        {/* Core Gradients */}
        <linearGradient id="nova-emerald" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10B981" />
          <stop offset="50%" stopColor="#06752F" />
          <stop offset="100%" stopColor="#044E20" />
        </linearGradient>

        <linearGradient id="nova-gold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FDE047" />
          <stop offset="60%" stopColor="#F3D02D" />
          <stop offset="100%" stopColor="#D97706" />
        </linearGradient>

        <linearGradient id="nova-cyan" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#06752F" />
          <stop offset="100%" stopColor="#06B6D4" />
        </linearGradient>

        <radialGradient id="nova-glow-radial" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#F3D02D" stopOpacity="0.45" />
          <stop offset="50%" stopColor="#10B981" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#06752F" stopOpacity="0" />
        </radialGradient>

        <filter id="soft-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="4" stdDeviation="4" floodOpacity="0.25" />
        </filter>
      </defs>

      {/* Ambient Nova Glow Aura */}
      <circle cx="60" cy="60" r="52" fill="url(#nova-glow-radial)" />

      {/* Outer Hexagonal Shield Matrix (ERP Network) */}
      <polygon
        points="60,10 102,32 102,88 60,110 18,88 18,32"
        fill="#0A0E1A"
        stroke="url(#nova-gold)"
        strokeWidth="1.5"
        strokeDasharray="4 2"
        opacity="0.35"
      />

      {/* Isometric Modular Data Blocks forming the letter 'N' */}
      <g filter="url(#soft-shadow)">
        {/* Left Column Block (Resource & Supply Module) */}
        <path
          d="M26 38 L42 29 L42 81 L26 90 Z"
          fill="url(#nova-emerald)"
        />
        <path
          d="M26 38 L42 29 L58 38 L42 47 Z"
          fill="#34D399"
          opacity="0.75"
        />

        {/* Diagonal Traverse Beam (Connecting Operations & Core Ledger) */}
        <path
          d="M42 42 L78 78 L62 87 L26 51 Z"
          fill="url(#nova-cyan)"
          opacity="0.9"
        />

        {/* Right Column Block (Finance & Planning Module) */}
        <path
          d="M78 29 L94 38 L94 90 L78 81 Z"
          fill="url(#nova-emerald)"
        />
        <path
          d="M78 29 L94 38 L78 47 L62 38 Z"
          fill="#6EE7B7"
          opacity="0.65"
        />
      </g>

      {/* The Central Radiant 'Nova' Starburst (Intelligence Nexus) */}
      <g transform="translate(60, 60)">
        {/* Diamond Flare */}
        <polygon
          points="0,-18 5,-5 18,0 5,5 0,18 -5,5 -18,0 -5,-5"
          fill="url(#nova-gold)"
        />
        {/* Core Star Node */}
        <circle cx="0" cy="0" r="4.5" fill="#FFFFFF" />
        <circle cx="0" cy="0" r="2.5" fill="#F3D02D" />
      </g>

      {/* Corner Data Nodes (Modular Microservices) */}
      <circle cx="42" cy="29" r="2.5" fill="#F3D02D" />
      <circle cx="78" cy="29" r="2.5" fill="#F3D02D" />
      <circle cx="42" cy="81" r="2.5" fill="#10B981" />
      <circle cx="78" cy="81" r="2.5" fill="#10B981" />
    </svg>
  );
}

export function NovaERPLogo({
  className = "",
  size = "md",
  variant = "horizontal",
}: NovaERPLogoProps) {
  const sizeMap = {
    sm: { emblem: "h-7 w-7", title: "text-base", sub: "text-[9px]" },
    md: { emblem: "h-10 w-10", title: "text-xl", sub: "text-[11px]" },
    lg: { emblem: "h-14 w-14", title: "text-2xl", sub: "text-xs" },
    xl: { emblem: "h-20 w-20", title: "text-4xl", sub: "text-sm" },
  };

  const currentSize = sizeMap[size];

  if (variant === "icon-only") {
    return (
      <div className={`inline-flex items-center justify-center ${className}`}>
        <NovaERPEmblem className={currentSize.emblem} />
      </div>
    );
  }

  if (variant === "vertical") {
    return (
      <div className={`flex flex-col items-center text-center gap-2 ${className}`}>
        <NovaERPEmblem className={currentSize.emblem} />
        <div>
          <div className="flex items-center justify-center gap-1.5 font-bold tracking-wider leading-none">
            <span className={`font-serif ${currentSize.title} text-[#06752F] dark:text-[#10B981]`}>
              NOVA
            </span>
            <span className={`font-mono ${currentSize.title} text-[#F3D02D] bg-[#F3D02D]/15 dark:bg-[#F3D02D]/20 px-1.5 py-0.5 rounded border border-[#F3D02D]/40`}>
              ERP
            </span>
          </div>
          <span className={`block mt-1 font-mono uppercase tracking-[0.22em] text-muted-foreground ${currentSize.sub}`}>
            Enterprise System
          </span>
        </div>
      </div>
    );
  }

  // Horizontal variant (default)
  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <NovaERPEmblem className={currentSize.emblem} />
      <div className="flex flex-col leading-none">
        <div className="flex items-center gap-1.5 font-bold tracking-wider">
          <span className={`font-serif ${currentSize.title} text-[#06752F] dark:text-[#10B981]`}>
            NOVA
          </span>
          <span className={`font-mono ${currentSize.title} text-[#F3D02D] bg-[#F3D02D]/15 dark:bg-[#F3D02D]/20 px-1.5 py-0.5 rounded border border-[#F3D02D]/40`}>
            ERP
          </span>
        </div>
        <span className={`font-mono uppercase tracking-[0.2em] text-muted-foreground mt-1 ${currentSize.sub}`}>
          Enterprise System
        </span>
      </div>
    </div>
  );
}
