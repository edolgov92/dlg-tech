"use client";

import { useCallback, useRef } from "react";
import { useTranslations } from "next-intl";
import { Button } from "@heroui/react";
import { ArrowRight } from "lucide-react";

const PHOTO_SRC: string | null = "/team.jpg";

const STRIPS = 14;
const CURVATURE = 16;
const TILT_Z = -3;

const strips = Array.from({ length: STRIPS }, (_, i) => {
  const t = i / (STRIPS - 1);
  const angle = -CURVATURE * Math.sin((t - 0.5) * Math.PI);
  const w = 100 / STRIPS;

  return {
    left: `${i * w}%`,
    width: `${w + 0.5}%`,
    transform: `rotateY(${angle.toFixed(2)}deg)`,
    backgroundPosition: `${(t * 100).toFixed(1)}% center`,
    backgroundSize: `${STRIPS * 100}% 100%`,
  };
});

const PLACEHOLDER_GRADIENT =
  "linear-gradient(145deg, #111827 0%, #0f172a 20%, #1e1b4b 45%, #172554 65%, #0c0a09 100%)";

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

  const bgImage = PHOTO_SRC ? `url('${PHOTO_SRC}')` : PLACEHOLDER_GRADIENT;

  return (
    <section
      ref={sectionRef}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Aurora background — each layer is a distinct color tone, cross-faded via opacity */}
      <div className="pointer-events-none absolute inset-0">
        {/* Deep red */}
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 80% 70% at 30% 40%, rgba(120, 15, 15, 0.9) 0%, transparent 70%)",
            animation: "aurora-fade 25s ease-in-out infinite",
          }}
        />
        {/* Deep blue */}
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 70% 80% at 70% 30%, rgba(10, 25, 80, 0.9) 0%, transparent 70%)",
            animation: "aurora-fade 25s ease-in-out infinite 5s",
          }}
        />
        {/* Teal / green */}
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 75% 65% at 60% 70%, rgba(8, 60, 50, 0.85) 0%, transparent 70%)",
            animation: "aurora-fade 25s ease-in-out infinite 10s",
          }}
        />
        {/* Warm orange / amber */}
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 65% 75% at 25% 65%, rgba(90, 45, 8, 0.85) 0%, transparent 70%)",
            animation: "aurora-fade 25s ease-in-out infinite 15s",
          }}
        />
        {/* Deep violet */}
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 70% 70% at 50% 45%, rgba(50, 10, 65, 0.8) 0%, transparent 65%)",
            animation: "aurora-fade 25s ease-in-out infinite 20s",
          }}
        />
      </div>

      {/* Drifting fog accents — transform-only, blur computed once */}
      <div
        className="pointer-events-none absolute -right-[5%] top-[5%] h-[800px] w-[800px] rounded-full bg-[radial-gradient(circle,rgba(100,60,180,0.07),transparent_60%)] blur-[100px]"
        style={{
          animation: "fog-drift-1 20s ease-in-out infinite",
          willChange: "transform",
        }}
      />
      <div
        className="pointer-events-none absolute -bottom-[10%] -left-[5%] h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,rgba(40,80,120,0.05),transparent_60%)] blur-[80px]"
        style={{
          animation: "fog-drift-2 25s ease-in-out infinite",
          willChange: "transform",
        }}
      />

      {/* Curved photo — entrance via CSS, mouse tilt via CSS transition */}
      <div
        className="relative z-10 w-[92vw] max-w-[1100px]"
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
            className="relative mx-auto aspect-[16/10]"
            style={{ transform: `rotateZ(${TILT_Z}deg)` }}
          >
            {/* Strips */}
            <div
              className="absolute inset-0 overflow-hidden rounded-[20px]"
              style={{ transformStyle: "preserve-3d" }}
            >
              {strips.map((s, i) => (
                <div
                  key={i}
                  className="absolute top-0 h-full bg-cover"
                  style={{
                    left: s.left,
                    width: s.width,
                    transform: s.transform,
                    backgroundImage: bgImage,
                    backgroundPosition: s.backgroundPosition,
                    backgroundSize: s.backgroundSize,
                  }}
                />
              ))}
            </div>

            {/* Photo darkening for text contrast */}
            <div className="pointer-events-none absolute inset-0 z-10 rounded-[20px] bg-black/40" />
            <div className="pointer-events-none absolute inset-0 z-10 rounded-[20px] bg-[radial-gradient(ellipse_at_40%_45%,transparent_10%,rgba(0,0,0,0.35)_100%)]" />
            <div className="pointer-events-none absolute inset-0 z-10 rounded-[20px] bg-gradient-to-b from-black/20 via-transparent to-black/40" />

            {/* Paper edge */}
            <div className="pointer-events-none absolute inset-0 z-10 rounded-[20px] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)]" />

            {/* Text overlay */}
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-6 text-center sm:px-12">
              <span
                className="mb-4 inline-flex items-center gap-2 text-[10px] tracking-[0.25em] text-white/50 uppercase sm:text-[11px]"
                style={{ animation: "fade-in 1s ease 0.8s both" }}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                {t("available")}
              </span>

              <h1
                className="text-[clamp(2.2rem,8vw,7rem)] font-bold leading-[1.15] tracking-[-0.045em]"
                style={{ animation: "fade-in-up 1.2s cubic-bezier(0.21,0.47,0.32,0.98) 0.5s both" }}
              >
                <span className="block text-white">{t("titleLine1")}</span>
                <span className="block text-white">{t("titleLine2")}</span>
                <span className="block bg-gradient-to-r from-amber-200 via-orange-200 to-amber-400/70 bg-clip-text text-transparent">
                  {t("titleLine3")}
                </span>
              </h1>

              <p
                className="mt-5 max-w-sm text-[clamp(0.8rem,1.4vw,1.05rem)] leading-relaxed text-white sm:max-w-md"
                style={{ animation: "fade-in 1s ease 1s both" }}
              >
                {t("subtitle")}
              </p>

              <div
                className="mt-7"
                style={{ animation: "fade-in-up-sm 0.8s cubic-bezier(0.21,0.47,0.32,0.98) 1.2s both" }}
              >
                <Button
                  as="a"
                  href="#contact"
                  size="lg"
                  radius="full"
                  className="border border-white/15 bg-white/10 px-8 font-medium text-white backdrop-blur-xl hover:bg-white/15"
                  endContent={<ArrowRight className="h-4 w-4" />}
                >
                  {t("cta")}
                </Button>
              </div>
            </div>
          </div>

          {/* Ground shadow */}
          <div
            className="mx-auto mt-4 h-6 w-[70%] rounded-[50%] bg-black/30 blur-2xl"
            style={{ transform: `rotateZ(${TILT_Z}deg)` }}
          />
        </div>
      </div>
    </section>
  );
}
