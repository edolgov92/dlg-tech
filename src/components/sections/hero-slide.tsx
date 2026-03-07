"use client";

import { useCallback, useRef } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Button } from "@heroui/react";
import { ArrowRight } from "lucide-react";

const PHOTO_SRC: string | null = "/team.webp";
const TILT_Z = -3;

export function HeroSlide() {
  const t = useTranslations("hero");
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const onMove = useCallback((e: React.MouseEvent) => {
    const r = sectionRef.current?.getBoundingClientRect();
    const el = cardRef.current;
    if (!r || !el) return;
    const mx = (e.clientX - r.left) / r.width - 0.5;
    const my = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `rotateX(${(my * -6).toFixed(2)}deg) rotateY(${(mx * 8).toFixed(2)}deg)`;
  }, []);

  const onLeave = useCallback(() => {
    const el = cardRef.current;
    if (el) el.style.transform = "rotateX(0deg) rotateY(0deg)";
  }, []);

  return (
    <section
      ref={sectionRef}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      id="hero"
      aria-label="Hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-10 md:px-0 md:py-0"
    >
      {/* Aurora background */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 80% 70% at 30% 40%, rgba(120, 15, 15, 0.9) 0%, transparent 70%)",
            animation: "aurora-fade 25s ease-in-out infinite",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 70% 80% at 70% 30%, rgba(10, 25, 80, 0.9) 0%, transparent 70%)",
            animation: "aurora-fade 25s ease-in-out infinite 5s",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 75% 65% at 60% 70%, rgba(8, 60, 50, 0.85) 0%, transparent 70%)",
            animation: "aurora-fade 25s ease-in-out infinite 10s",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 65% 75% at 25% 65%, rgba(90, 45, 8, 0.85) 0%, transparent 70%)",
            animation: "aurora-fade 25s ease-in-out infinite 15s",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 70% 70% at 50% 45%, rgba(50, 10, 65, 0.8) 0%, transparent 65%)",
            animation: "aurora-fade 25s ease-in-out infinite 20s",
          }}
        />
      </div>

      {/* Drifting fog accents */}
      <div
        className="pointer-events-none absolute -right-[5%] top-[5%] h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,rgba(100,60,180,0.07),transparent_60%)] blur-[100px] sm:h-[800px] sm:w-[800px]"
        style={{
          animation: "fog-drift-1 20s ease-in-out infinite",
          willChange: "transform",
        }}
      />
      <div
        className="pointer-events-none absolute -bottom-[10%] -left-[5%] h-[300px] w-[300px] rounded-full bg-[radial-gradient(circle,rgba(40,80,120,0.05),transparent_60%)] blur-[80px] sm:h-[600px] sm:w-[600px]"
        style={{
          animation: "fog-drift-2 25s ease-in-out infinite",
          willChange: "transform",
        }}
      />

      {/* Photo card — entrance via CSS, mouse tilt via CSS transition */}
      <div
        className="relative z-10 w-full max-w-[1100px] md:w-[92vw]"
        style={{
          perspective: "1000px",
          animation: "hero-card-in 1.6s cubic-bezier(0.21,0.47,0.32,0.98) both",
        }}
      >
        <div
          ref={cardRef}
          style={{ transition: "transform 0.3s ease-out" }}
        >
          <div
            className="relative mx-auto aspect-[3/5] max-h-[calc(100svh-6rem)] overflow-hidden rounded-[14px] sm:aspect-[3/4] md:aspect-[16/10] md:max-h-none md:rounded-[20px]"
            style={{ transform: `rotateZ(${TILT_Z}deg)` }}
          >
            {/* Photo with cover */}
            {PHOTO_SRC && (
              <Image
                src={PHOTO_SRC}
                alt="DLG Tech engineering team"
                fill
                priority
                sizes="(min-width: 768px) 92vw, 100vw"
                className="object-cover"
              />
            )}

            {/* Photo darkening for text contrast */}
            <div className="pointer-events-none absolute inset-0 z-10 bg-black/40" />
            <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_40%_45%,transparent_10%,rgba(0,0,0,0.35)_100%)]" />
            <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-black/20 via-transparent to-black/40" />

            {/* Paper edge */}
            <div className="pointer-events-none absolute inset-0 z-10 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)]" />

            {/* Text overlay */}
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-5 text-center sm:px-12">
              <span
                className="mb-4 inline-flex items-center gap-2 text-[10px] tracking-[0.25em] text-white/70 uppercase sm:text-[11px]"
                style={{ animation: "fade-in 1s ease 0.8s both" }}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                {t("available")}
              </span>

              <h1
                className="leading-[1.1] tracking-[-0.03em]"
                style={{ animation: "fade-in-up 1.2s cubic-bezier(0.21,0.47,0.32,0.98) 0.5s both" }}
              >
                <span className="block text-[clamp(2rem,6vw,4.5rem)] font-bold text-white">
                  {t("titleLine1")}
                </span>
                <span className="block text-[clamp(2.5rem,8vw,6rem)] font-bold text-white">
                  {t("titleLine2")}
                </span>
                <span className="block text-[clamp(3.5rem,12vw,9rem)] font-bold tracking-[-0.06em] bg-gradient-to-r from-amber-200 via-orange-200 to-amber-400/70 bg-clip-text text-transparent">
                  {t("titleLine3")}
                </span>
              </h1>

              <p
                className="mt-4 max-w-xs text-[clamp(0.95rem,1.5vw,1.05rem)] leading-relaxed text-white/80 sm:mt-5 sm:max-w-lg"
                style={{ animation: "fade-in 1s ease 1s both" }}
              >
                {t("subtitle")}
              </p>

              <p
                className="mt-3 hidden text-[clamp(0.7rem,1.1vw,0.85rem)] font-medium tracking-wide text-white/60 sm:block"
                style={{ animation: "fade-in 1s ease 1.3s both" }}
              >
                {t("proof")}
              </p>

              <div
                className="mt-5 sm:mt-7"
                style={{ animation: "fade-in-up-sm 0.8s cubic-bezier(0.21,0.47,0.32,0.98) 1.5s both" }}
              >
                <Button
                  as="a"
                  href="#contact"
                  size="lg"
                  radius="full"
                  className="border border-white/15 bg-white/10 px-6 text-sm font-medium text-white backdrop-blur-xl hover:bg-white/15 sm:px-8 sm:text-base"
                  endContent={<ArrowRight className="h-4 w-4" />}
                >
                  {t("cta")}
                </Button>
              </div>
            </div>
          </div>

          {/* Ground shadow */}
          <div
            className="mx-auto mt-4 hidden h-6 w-[70%] rounded-[50%] bg-black/30 blur-2xl md:block"
            style={{ transform: `rotateZ(${TILT_Z}deg)` }}
          />
        </div>
      </div>
    </section>
  );
}
