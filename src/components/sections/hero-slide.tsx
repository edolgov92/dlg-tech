"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useTranslations } from "next-intl";
import { Button } from "@heroui/react";
import { ArrowRight } from "lucide-react";

// ── Configuration ──────────────────────────────────────────────
// To add your team photo, place it in /public and set this path:
const PHOTO_SRC: string | null = "/team.jpg";

const STRIPS = 14;
const CURVATURE = 16; // degrees — max paper bend
const TILT_Z = -3; // degrees — overall clockwise tilt

// ── Precomputed strip geometry (runs once, not per render) ─────
const strips = Array.from({ length: STRIPS }, (_, i) => {
  const t = i / (STRIPS - 1); // 0 → 1 across the width
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

const ease = [0.21, 0.47, 0.32, 0.98] as const;

const PLACEHOLDER_GRADIENT =
  "linear-gradient(145deg, #111827 0%, #0f172a 20%, #1e1b4b 45%, #172554 65%, #0c0a09 100%)";

// ── Component ──────────────────────────────────────────────────
export function HeroSlide() {
  const t = useTranslations("hero");
  const ref = useRef<HTMLElement>(null);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const cfg = { stiffness: 60, damping: 30 };
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [3, -3]), cfg);
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-4, 4]), cfg);

  function onMove(e: React.MouseEvent) {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  }
  function onLeave() {
    mx.set(0);
    my.set(0);
  }

  const bgImage = PHOTO_SRC ? `url('${PHOTO_SRC}')` : PLACEHOLDER_GRADIENT;

  return (
    <section
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Animated aurora background — colors mapped to quadrants of a 400% canvas */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background: [
              "radial-gradient(ellipse at 15% 15%, rgba(90, 15, 18, 0.8) 0%, transparent 50%)",
              "radial-gradient(ellipse at 85% 10%, rgba(12, 25, 65, 0.8) 0%, transparent 50%)",
              "radial-gradient(ellipse at 10% 85%, rgba(70, 40, 8, 0.7) 0%, transparent 50%)",
              "radial-gradient(ellipse at 85% 85%, rgba(8, 50, 45, 0.7) 0%, transparent 50%)",
              "radial-gradient(ellipse at 50% 50%, rgba(45, 10, 55, 0.5) 0%, transparent 40%)",
            ].join(", "),
            backgroundSize: "400% 400%",
            animation: "aurora 90s ease infinite",
          }}
        />
        <div
          className="absolute inset-0 opacity-80"
          style={{
            background: [
              "radial-gradient(ellipse at 20% 20%, rgba(55, 15, 50, 0.6) 0%, transparent 45%)",
              "radial-gradient(ellipse at 80% 25%, rgba(65, 30, 10, 0.5) 0%, transparent 45%)",
              "radial-gradient(ellipse at 25% 80%, rgba(10, 35, 55, 0.5) 0%, transparent 45%)",
              "radial-gradient(ellipse at 80% 80%, rgba(50, 10, 25, 0.5) 0%, transparent 45%)",
            ].join(", "),
            backgroundSize: "400% 400%",
            animation: "aurora-secondary 110s ease infinite",
          }}
        />

        {/* Drifting fog accents */}
        <div
          className="absolute -right-[5%] top-[5%] h-[800px] w-[800px] rounded-full bg-[radial-gradient(circle,rgba(100,60,180,0.07),transparent_60%)] blur-[100px]"
          style={{ animation: "fog-drift-1 20s ease-in-out infinite" }}
        />
        <div
          className="absolute -bottom-[10%] -left-[5%] h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,rgba(40,80,120,0.05),transparent_60%)] blur-[80px]"
          style={{ animation: "fog-drift-2 25s ease-in-out infinite" }}
        />
      </div>

      {/* ── Curved photo ─────────────────────────────────────── */}
      <div
        className="relative z-10 w-[92vw] max-w-[1100px]"
        style={{ perspective: "1000px" }}
      >
        <motion.div
          style={{ rotateX: rx, rotateY: ry }}
          initial={{ opacity: 0, scale: 0.88, y: 100 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.6, ease }}
        >
          <div
            className="relative mx-auto aspect-[16/10]"
            style={{ transform: `rotateZ(${TILT_Z}deg)` }}
          >
            {/* Strips — each one is a vertical slice rotated to form curvature */}
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

            {/* Photo darkening for text contrast + light simulation */}
            <div className="pointer-events-none absolute inset-0 z-10 rounded-[20px] bg-black/40" />
            <div className="pointer-events-none absolute inset-0 z-10 rounded-[20px] bg-[radial-gradient(ellipse_at_40%_45%,transparent_10%,rgba(0,0,0,0.35)_100%)]" />
            <div className="pointer-events-none absolute inset-0 z-10 rounded-[20px] bg-gradient-to-b from-black/20 via-transparent to-black/40" />

            {/* Paper edge — thin inset ring */}
            <div className="pointer-events-none absolute inset-0 z-10 rounded-[20px] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)]" />

            {/* ── Text overlay ────────────────────────────────── */}
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-6 text-center sm:px-12">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 1 }}
                className="mb-4 inline-flex items-center gap-2 text-[10px] tracking-[0.25em] text-white/50 uppercase sm:text-[11px]"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                {t("available")}
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 1.2, ease }}
                className="font-display text-[clamp(2.2rem,8vw,7rem)] font-bold leading-[0.9] tracking-[-0.04em]"
              >
                <span className="block text-white">{t("titleLine1")}</span>
                <span className="block text-white">{t("titleLine2")}</span>
                <span className="block bg-gradient-to-r from-amber-200 via-orange-200 to-amber-400/70 bg-clip-text text-transparent">
                  {t("titleLine3")}
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="mt-5 max-w-sm text-[clamp(0.8rem,1.4vw,1.05rem)] leading-relaxed text-white/60 sm:max-w-md"
              >
                {t("subtitle")}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8, ease }}
                className="mt-7"
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
              </motion.div>
            </div>
          </div>

          {/* Ground shadow — elliptical, blurred, sells the float */}
          <div
            className="mx-auto mt-4 h-6 w-[70%] rounded-[50%] bg-black/30 blur-2xl"
            style={{ transform: `rotateZ(${TILT_Z}deg)` }}
          />
        </motion.div>
      </div>
    </section>
  );
}
