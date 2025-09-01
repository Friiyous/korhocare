import type { Metadata } from "next";
import "./globals.css";
import CookieBanner from "@/components/CookieBanner";

export const metadata: Metadata = {
  metadataBase: new URL("https://porocare.vercel.app"),
  title: "POROCARE – Soins premium à domicile Korhogo",
  description: "Soins infirmiers, analyses sanguines, orientation CHU – Korhogo, Côte d’Ivoire.",
  keywords: "POROCARE, soins domicile, infirmier Korhogo, analyse sanguine, CHU",
  authors: [{ name: "POROCARE Team" }],
  openGraph: {
    title: "POROCARE",
    description: "Soins premium à domicile à Korhogo",
    images: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="font-sans">
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
