"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { Button } from "@heroui/react";
import { ArrowRight } from "lucide-react";

export function VisionSlide() {
  const t = useTranslations("vision");
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

  const stats = [
    { value: t("statsExperience"), label: t("statsExperienceLabel") },
    { value: t("statsReview"), label: t("statsReviewLabel") },
    { value: t("statsRate"), label: t("statsRateLabel") },
  ];

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6"
    >
      <div
        className="relative z-10 mx-auto max-w-3xl text-center"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(40px)",
          transition: "opacity 0.9s cubic-bezier(0.21,0.47,0.32,0.98), transform 0.9s cubic-bezier(0.21,0.47,0.32,0.98)",
        }}
      >
        <h2 className="text-4xl font-bold leading-[1.05] tracking-[-0.03em] sm:text-5xl lg:text-6xl xl:text-7xl">
          <span className="block bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent">
            {t("title")}
          </span>
          <span className="block bg-gradient-to-r from-amber-200/90 to-orange-300/70 bg-clip-text text-transparent">
            {t("titleLine2")}
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-foreground/35 sm:text-lg">
          {t("subtitle")}
        </p>

        {/* Stats */}
        <div className="mx-auto mt-14 grid max-w-md grid-cols-3 gap-8">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-[11px] tracking-wider text-foreground/25 uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14">
          <Button
            as="a"
            href="https://calendly.com"
            target="_blank"
            rel="noopener noreferrer"
            size="lg"
            radius="full"
            className="bg-white px-10 font-medium text-black hover:bg-white/90"
            endContent={<ArrowRight className="h-4 w-4" />}
          >
            {t("cta")}
          </Button>
          <p className="mt-4 text-xs text-foreground/20">{t("note")}</p>
        </div>
      </div>
    </section>
  );
}
