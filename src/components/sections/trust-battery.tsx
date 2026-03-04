"use client";

import { useTranslations } from "next-intl";
import { MotionSection } from "@/components/ui/motion-section";

const LOGOS = [
  "React",
  "Next.js",
  "AWS",
  "Node.js",
  "TypeScript",
  "Python",
  "PostgreSQL",
  "Docker",
];

export function TrustBatterySection() {
  const t = useTranslations("trustBattery");

  return (
    <MotionSection className="border-y border-white/5 bg-white/[0.02] px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <p className="mb-8 text-center text-xs font-medium tracking-widest text-foreground/30 uppercase">
          {t("label")}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {LOGOS.map((logo) => (
            <span
              key={logo}
              className="text-sm font-medium text-foreground/20 transition-colors hover:text-foreground/50"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
