"use client";

import { useTranslations } from "next-intl";
import { MotionSection } from "@/components/ui/motion-section";
import { SectionBadge } from "@/components/ui/section-badge";
import { GlassCard } from "@/components/ui/glass-card";
import { Compass, Code2, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const STEPS = [
  {
    labelKey: "step1Label" as const,
    titleKey: "step1Title" as const,
    descKey: "step1Description" as const,
    icon: Compass,
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    labelKey: "step2Label" as const,
    titleKey: "step2Title" as const,
    descKey: "step2Description" as const,
    icon: Code2,
    gradient: "from-violet-500 to-purple-400",
  },
  {
    labelKey: "step3Label" as const,
    titleKey: "step3Title" as const,
    descKey: "step3Description" as const,
    icon: ShieldCheck,
    gradient: "from-emerald-500 to-teal-400",
  },
];

export function HowItWorksSection() {
  const t = useTranslations("howItWorks");

  return (
    <MotionSection className="px-6 py-24" id="how-it-works">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <SectionBadge text={t("badge")} />
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            {t("title")}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-foreground/50 sm:text-lg">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {STEPS.map((step, idx) => (
            <motion.div
              key={step.labelKey}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: idx * 0.15,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
            >
              <GlassCard className="group relative h-full overflow-hidden transition-colors hover:border-white/20">
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

                <div className="relative">
                  <span className="text-xs font-mono font-bold text-foreground/20">
                    {t(step.labelKey)}
                  </span>

                  <div
                    className={`mt-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${step.gradient} shadow-lg`}
                  >
                    <step.icon className="h-6 w-6 text-white" />
                  </div>

                  <h3 className="mt-5 text-lg font-semibold text-foreground">
                    {t(step.titleKey)}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/50">
                    {t(step.descKey)}
                  </p>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
