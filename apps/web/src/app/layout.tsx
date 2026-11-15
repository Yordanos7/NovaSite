import type { Metadata } from "next";

import "../index.css";
import Providers from "@/components/providers";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Ethiora Technology PLC — Enterprise Software, AI & Digital Systems in Ethiopia",
  description:
    "Ethiora Technology PLC is a leading enterprise software engineering company in Ethiopia. We build enterprise ERPs, clinical healthcare software (Ethiora HMS), mobile apps, digital Equb platforms, ride-hailing software, and high-conversion web applications with native Telebirr and Chapa integrations.",
  keywords: [
    "Ethiora Technology PLC",
    "Ethiora",
    "Ethiora HMS",
    "Ethiora ERP",
    "Software company Ethiopia",
    "Enterprise Resource Planning Addis Ababa",
    "Telebirr integration",
    "Chapa payment gateway",
    "Digital Equb app",
    "IT Outsourcing Ethiopia",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,600;1,400&family=Inter:wght@100..900&family=JetBrains+Mono:wght@100..800&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Space+Grotesk:wght@300..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">
        <Providers>
          <div className="flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
            <WhatsAppFloat />
          </div>
        </Providers>
      </body>
    </html>
  );
}
