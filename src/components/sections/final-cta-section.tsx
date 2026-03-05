"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { Button } from "@heroui/react";
import { ArrowRight } from "lucide-react";

export function FinalCTASection() {
  const t = useTranslations("finalCta");
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="cta"
      aria-labelledby="cta-heading"
      className="relative overflow-hidden px-6 py-28 sm:py-36"
    >
      {/* Gradient background */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 100% 80% at 50% 100%, rgba(180, 80, 40, 0.15) 0%, transparent 60%),
              radial-gradient(ellipse 70% 60% at 20% 80%, rgba(160, 50, 80, 0.12) 0%, transparent 50%),
              radial-gradient(ellipse 60% 50% at 80% 70%, rgba(200, 100, 50, 0.1) 0%, transparent 50%),
              radial-gradient(ellipse 50% 40% at 50% 50%, rgba(99, 102, 241, 0.08) 0%, transparent 50%)
            `,
          }}
        />
      </div>

      <div
        className="relative z-10 mx-auto max-w-3xl text-center"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0) scale(1)" : "translateY(30px) scale(0.97)",
          transition:
            "opacity 1s cubic-bezier(0.21,0.47,0.32,0.98), transform 1s cubic-bezier(0.21,0.47,0.32,0.98)",
        }}
      >
        <h2 id="cta-heading" className="text-4xl font-bold leading-[1.1] tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">
          {t("title")}
        </h2>
        <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-white/60 sm:text-lg">
          {t("subtitle")}
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-5">
          <Button
            as="a"
            href="https://calendly.com"
            target="_blank"
            rel="noopener noreferrer"
            size="lg"
            radius="full"
            className="bg-white px-10 font-semibold text-black hover:bg-white/90"
            endContent={<ArrowRight className="h-4 w-4" />}
          >
            {t("primaryCta")}
          </Button>
          <Button
            as="a"
            href="mailto:contact@dlgtech.com"
            size="lg"
            radius="full"
            className="border-2 border-white/40 bg-transparent px-10 font-semibold text-white hover:bg-white/10"
          >
            {t("secondaryCta")}
          </Button>
        </div>

        <p className="mt-6 text-xs text-white/50">{t("note")}</p>
      </div>
    </section>
  );
}
