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
  title: "DLG Tech — Senior Architect-Led Engineering Team",
  description:
    "14 years of experience. US standards. Managed execution. Silicon Valley quality architecture at rational rates.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${instrumentSans.variable} ${spaceGrotesk.variable} ${geistMono.variable} min-h-screen bg-background font-[family-name:var(--font-instrument-sans)] text-foreground antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
