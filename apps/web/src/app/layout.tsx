import type { Metadata } from "next";

import "../index.css";
import Providers from "@/components/providers";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Nova Habesha ERP — Enterprise Software & Digital Systems in Ethiopia",
  description:
    "Nova Habesha is an enterprise software development company in Addis Ababa, Ethiopia. We build Nova Habesha ERP, mobile apps, digital Equb platforms, ride-hailing software, and custom web applications with Telebirr and Chapa integrations.",
  keywords: [
    "Nova Habesha ERP",
    "ERP software Ethiopia",
    "Enterprise Resource Planning Addis Ababa",
    "Software company Ethiopia",
    "Telebirr integration",
    "Chapa payment gateway",
    "Digital Equb app",
  ],
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
