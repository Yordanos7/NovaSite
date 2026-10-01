import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono, Playfair_Display, Crimson_Text } from "next/font/google";

import "../index.css";
import Providers from "@/components/providers";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({ variable: "--font-display", subsets: ["latin"], weight: ["500", "600", "700"] });
const jetbrainsMono = JetBrains_Mono({ variable: "--font-mono", subsets: ["latin"], weight: ["400", "500"] });
const playfairDisplay = Playfair_Display({ variable: "--font-serif", subsets: ["latin"], weight: ["700", "800", "900"] });
const crimsonText = Crimson_Text({ variable: "--font-crimson", subsets: ["latin"], weight: ["400", "600"] });

export const metadata: Metadata = {
  title: "Nova Teach — Ethiopian-led software solutions for African businesses",
  description:
    "Nova Teach is an African tech company building custom web apps, backend systems, AI solutions, and technical consulting. We design software that understands Africa.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} ${playfairDisplay.variable} ${crimsonText.variable} antialiased`}>
        <Providers>
          <div className="flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
        </Providers>
      </body>
    </html>
  );
}
