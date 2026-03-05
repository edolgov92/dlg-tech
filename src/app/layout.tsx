import type { ReactNode } from "react";
import type { Metadata } from "next";
import {
  Instrument_Sans,
  Space_Grotesk,
  Geist_Mono,
} from "next/font/google";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dlgtech.com"),
  title: {
    default: "DLG Tech — Architect-Founded Engineering Team",
    template: "%s — DLG Tech",
  },
  description:
    "Your next CTO doesn't need equity. Architect-founded engineering team with 14+ years experience, real technical oversight, and startup-friendly rates.",
  keywords: [
    "software development agency",
    "architect-led engineering",
    "dedicated development team",
    "staff augmentation",
    "team extension",
    "startup CTO",
    "offshore development",
    "React development",
    "Node.js development",
    "full-stack engineering",
    "technical architecture",
    "startup engineering team",
    "DLG Tech",
  ],
  authors: [{ name: "Eugene Dolgov", url: "https://dlgtech.com" }],
  creator: "DLG Tech",
  publisher: "DLG Tech",
  formatDetection: { telephone: false },
  openGraph: {
    type: "website",
    siteName: "DLG Tech",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@dlgtech",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#09090b" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
      </head>
      <body
        className={`${instrumentSans.variable} ${spaceGrotesk.variable} ${geistMono.variable} min-h-screen bg-background font-[family-name:var(--font-instrument-sans)] text-foreground antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
