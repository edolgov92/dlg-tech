"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { Button } from "@heroui/react";
import { ArrowRight, ShieldCheck, DollarSign, Blocks } from "lucide-react";

const POINTS = [
  { key: "point1", icon: ShieldCheck },
  { key: "point2", icon: DollarSign },
  { key: "point3", icon: Blocks },
] as const;

export function FounderSection() {
  const t = useTranslations("founder");
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
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const stats = [
    { value: t("statsExperience"), label: t("statsExperienceLabel") },
    { value: t("statsMarkets"), label: t("statsMarketsLabel") },
    { value: t("statsRate"), label: t("statsRateLabel") },
  ];

  return (
    <section
      ref={sectionRef}
      id="contact"
      aria-labelledby="founder-heading"
      className="relative overflow-hidden px-6 py-24 sm:py-32"
    >
      {/* Ambient background — warm gradient + subtle texture */}
      <div className="pointer-events-none absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=1920&q=80"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-[0.15]"
          loading="lazy"
        />
        <div
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(180deg, rgba(9,9,11,0.85) 0%, rgba(9,9,11,0.5) 50%, rgba(9,9,11,0.85) 100%),
              radial-gradient(ellipse 70% 60% at 70% 30%, rgba(160, 80, 40, 0.2) 0%, transparent 60%),
              radial-gradient(ellipse 60% 50% at 20% 70%, rgba(100, 40, 80, 0.15) 0%, transparent 55%),
              radial-gradient(ellipse 80% 40% at 50% 90%, rgba(180, 100, 50, 0.12) 0%, transparent 50%)
            `,
          }}
        />
      </div>

      <div
        className="relative z-10 mx-auto max-w-6xl"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(40px)",
          transition:
            "opacity 0.9s cubic-bezier(0.21,0.47,0.32,0.98), transform 0.9s cubic-bezier(0.21,0.47,0.32,0.98)",
        }}
      >
        {/* Badge */}
        <p className="mb-10 text-center text-[11px] tracking-[0.25em] text-white/30 uppercase sm:text-xs">
          {t("badge")}
        </p>

        {/* Two-column layout */}
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left — Text */}
          <div>
            <h2 id="founder-heading" className="text-3xl font-bold leading-tight tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl">
              {t("name")}
            </h2>
            <p className="mt-1 text-sm font-medium tracking-wide text-white/40 sm:text-base">
              {t("role")}
            </p>
            <p className="mt-6 text-base leading-relaxed text-white/60 sm:text-lg">
              {t("bio")}
            </p>

            {/* Key points */}
            <div className="mt-10 space-y-6">
              {POINTS.map(({ key, icon: Icon }) => (
                <div key={key} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/[0.05] text-white/50">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white/90">
                      {t(`${key}title`)}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-white/40">
                      {t(`${key}text`)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Video placeholder */}
          <div className="flex flex-col items-center gap-8">
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.03]">
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-white/5">
                  <svg
                    className="ml-1 h-6 w-6 text-white/40"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <span className="text-xs text-white/20">
                  Video coming soon
                </span>
              </div>
            </div>

            {/* Stats */}
            <div className="grid w-full grid-cols-3 gap-3 sm:gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-white/[0.06] bg-white/[0.02] px-2 py-3 text-center sm:px-4 sm:py-4"
                >
                  <p className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                    {stat.value.includes("&")
                      ? stat.value.split("&").map((part, i, arr) => (
                          <span key={i}>
                            {part}
                            {i < arr.length - 1 && (
                              <span className="text-xl font-normal text-white">&</span>
                            )}
                          </span>
                        ))
                      : stat.value}
                  </p>
                  <p className="mt-1 text-[10px] tracking-wider text-white/30 uppercase sm:text-[11px]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
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
          <p className="mt-4 text-xs text-white/45">{t("note")}</p>
        </div>
      </div>
    </section>
  );
}
