"use client";

import { Button } from "@heroui/react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { ArrowRight, Play } from "lucide-react";

const ease = [0.21, 0.47, 0.32, 0.98] as const;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease },
  },
};

export function HeroSection() {
  const t = useTranslations("hero");

  return (
    <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden px-6 pt-20">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(139,92,246,0.1),transparent_50%)]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto max-w-4xl text-center"
      >
        <motion.div variants={item}>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-foreground/50 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Available for new projects
          </div>
        </motion.div>

        <motion.h1
          variants={item}
          className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl"
        >
          <span className="bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
            {t("titleLine1")}
          </span>
          <br />
          <span className="bg-gradient-to-r from-primary-400 to-violet-400 bg-clip-text text-transparent">
            {t("titleLine2")}
          </span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-foreground/50 sm:text-xl"
        >
          {t("description")}
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <Button
            as="a"
            href="#contact"
            color="primary"
            size="lg"
            radius="full"
            className="w-full px-8 font-medium sm:w-auto"
            endContent={<ArrowRight className="h-4 w-4" />}
          >
            {t("cta")}
          </Button>
          <Button
            as="a"
            href="#how-it-works"
            variant="ghost"
            size="lg"
            radius="full"
            className="w-full border-white/10 px-8 font-medium text-foreground/70 sm:w-auto"
            startContent={<Play className="h-4 w-4" />}
          >
            {t("ctaSecondary")}
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={item}
          className="mx-auto mt-16 grid max-w-lg grid-cols-3 gap-8"
        >
          {[
            { value: t("statsExperience"), label: t("statsExperienceLabel") },
            { value: t("statsReview"), label: t("statsReviewLabel") },
            { value: t("statsRate"), label: t("statsRateLabel") },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl font-bold text-foreground sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs text-foreground/40">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
