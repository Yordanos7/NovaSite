import Image from "next/image";
import Link from "next/link";

interface EthioraLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  showText?: boolean;
  variant?: "light" | "dark" | "auto";
  asLink?: boolean;
}

const sizes = {
  sm: { img: 28, text: "text-base", sub: "text-[8px]", badge: "text-[8px] px-1 py-0.2" },
  md: { img: 38, text: "text-lg", sub: "text-[9px]", badge: "text-[9px] px-1.5 py-0.5" },
  lg: { img: 48, text: "text-2xl", sub: "text-[11px]", badge: "text-[10px] px-2 py-0.5" },
  xl: { img: 64, text: "text-3xl", sub: "text-[13px]", badge: "text-[11px] px-2.5 py-1" },
};

export function EthioraLogo({
  className = "",
  size = "md",
  showText = true,
  variant = "auto",
  asLink = false,
}: EthioraLogoProps) {
  const currentSize = sizes[size];

  const content = (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      {/* Emblem Container */}
      <div className="relative flex shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white border border-border/80 shadow-sm p-1">
        <Image
          src="/logos/ethiora-emblem.jpg"
          alt="Ethiora Technology PLC"
          width={currentSize.img}
          height={currentSize.img}
          className="h-full w-full object-contain"
          priority
        />
      </div>

      {showText && (
        <div className="flex flex-col leading-none">
          <div className="flex items-center gap-1.5">
            <span
              className={`font-display ${currentSize.text} font-bold tracking-tight text-foreground transition-colors`}
            >
              ETHIORA
            </span>
            <span
              className={`font-mono ${currentSize.badge} font-bold text-[#0866F6] dark:text-[#38BDF8] bg-[#0866F6]/10 border border-[#0866F6]/30 rounded uppercase`}
            >
              PLC
            </span>
          </div>
          <span
            className={`font-mono ${currentSize.sub} tracking-wider text-muted-foreground uppercase mt-0.5 font-medium`}
          >
            Technology PLC
          </span>
        </div>
      )}
    </div>
  );

  if (asLink) {
    return (
      <Link href="/" aria-label="Ethiora Technology PLC Home">
        {content}
      </Link>
    );
  }

  return content;
}
