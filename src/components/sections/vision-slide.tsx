"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Button } from "@heroui/react";
import { ArrowRight } from "lucide-react";

const ease = [0.21, 0.47, 0.32, 0.98] as const;

function FogOrb() {
  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
      <div className="relative h-[500px] w-[500px] sm:h-[600px] sm:w-[600px]">
        {/* Primary warm orb */}
        <div
          className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-400/15 via-orange-500/10 to-transparent blur-[100px]"
          style={{ animation: "orb-breathe 8s ease-in-out infinite" }}
        />
        {/* Secondary cool orb */}
        <div
          className="absolute inset-8 rounded-full bg-gradient-to-tr from-violet-400/10 via-fuchsia-500/8 to-transparent blur-[80px]"
          style={{ animation: "orb-drift 14s ease-in-out infinite" }}
        />
        {/* Inner core glow */}
        <div
          className="absolute inset-20 rounded-full bg-gradient-to-b from-white/8 via-amber-200/6 to-transparent blur-[60px]"
          style={{ animation: "orb-breathe 6s ease-in-out infinite 2s" }}
        />
        {/* Hot center */}
        <div
          className="absolute inset-32 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.06),transparent_70%)] blur-[40px]"
          style={{ animation: "fog-drift-3 10s ease-in-out infinite" }}
        />

        {/* Particles */}
        <div className="absolute inset-0">
          {[
            { x: "20%", y: "30%", size: 2, delay: 0 },
            { x: "70%", y: "25%", size: 1.5, delay: 2 },
            { x: "45%", y: "65%", size: 2.5, delay: 1 },
            { x: "80%", y: "55%", size: 1, delay: 3 },
            { x: "30%", y: "70%", size: 1.5, delay: 4 },
            { x: "60%", y: "40%", size: 2, delay: 1.5 },
            { x: "15%", y: "50%", size: 1, delay: 2.5 },
            { x: "55%", y: "20%", size: 1.5, delay: 0.5 },
            { x: "75%", y: "75%", size: 2, delay: 3.5 },
            { x: "40%", y: "45%", size: 1, delay: 5 },
          ].map((p, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white/20"
              style={{
                left: p.x,
                top: p.y,
                width: p.size,
                height: p.size,
                animation: `shimmer ${3 + i * 0.5}s ease-in-out infinite ${p.delay}s`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export function VisionSlide() {
  const t = useTranslations("vision");

  const stats = [
    { value: t("statsExperience"), label: t("statsExperienceLabel") },
    { value: t("statsReview"), label: t("statsReviewLabel") },
    { value: t("statsRate"), label: t("statsRateLabel") },
  ];

  return (
    <section
      id="contact"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6"
    >
      {/* Animated aurora background — offset from hero for continuity */}
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
            animation: "aurora 90s ease infinite 20s",
          }}
        />
        <div
          className="absolute inset-0 opacity-70"
          style={{
            background: [
              "radial-gradient(ellipse at 20% 20%, rgba(55, 15, 50, 0.5) 0%, transparent 45%)",
              "radial-gradient(ellipse at 80% 25%, rgba(65, 30, 10, 0.4) 0%, transparent 45%)",
              "radial-gradient(ellipse at 25% 80%, rgba(10, 35, 55, 0.4) 0%, transparent 45%)",
              "radial-gradient(ellipse at 80% 80%, rgba(50, 10, 25, 0.4) 0%, transparent 45%)",
            ].join(", "),
            backgroundSize: "400% 400%",
            animation: "aurora-secondary 110s ease infinite 30s",
          }}
        />
      </div>

      <FogOrb />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease }}
          className="font-display text-4xl font-bold leading-[1.05] tracking-[-0.03em] sm:text-5xl lg:text-6xl xl:text-7xl"
        >
          <span className="block bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent">
            {t("title")}
          </span>
          <span className="block bg-gradient-to-r from-amber-200/90 to-orange-300/70 bg-clip-text text-transparent">
            {t("titleLine2")}
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.15, ease }}
          className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-foreground/35 sm:text-lg"
        >
          {t("subtitle")}
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.25, ease }}
          className="mx-auto mt-14 grid max-w-md grid-cols-3 gap-8"
        >
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
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.35, ease }}
          className="mt-14"
        >
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
        </motion.div>
      </div>
    </section>
  );
}
