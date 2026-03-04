"use client";

import { useTranslations } from "next-intl";
import { Avatar, Chip } from "@heroui/react";
import { MotionSection } from "@/components/ui/motion-section";
import { SectionBadge } from "@/components/ui/section-badge";
import { GlassCard } from "@/components/ui/glass-card";
import { motion } from "framer-motion";
import { Clock, Eye, Briefcase, Users } from "lucide-react";

export function TeamSection() {
  const t = useTranslations("team");

  return (
    <MotionSection className="px-6 py-24" id="team">
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

        <div className="grid gap-6 lg:grid-cols-5">
          {/* Lead profile */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.5,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
            className="lg:col-span-3"
          >
            <GlassCard className="h-full border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
              <div className="flex flex-col gap-6 sm:flex-row">
                <Avatar
                  name={t("leadName")}
                  size="lg"
                  classNames={{
                    base: "h-20 w-20 shrink-0 bg-gradient-to-br from-primary to-violet-500 text-xl",
                  }}
                />
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground">
                    {t("leadName")}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-primary-400">
                    {t("leadRole")}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/50">
                    {t("leadBio")}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    <Chip
                      startContent={<Briefcase className="ml-1 h-3 w-3" />}
                      variant="flat"
                      size="sm"
                      classNames={{
                        base: "bg-white/5 border border-white/10",
                        content: "text-foreground/60 text-xs",
                      }}
                    >
                      {t("experience")}
                    </Chip>
                    <Chip
                      startContent={<Eye className="ml-1 h-3 w-3" />}
                      variant="flat"
                      size="sm"
                      classNames={{
                        base: "bg-white/5 border border-white/10",
                        content: "text-foreground/60 text-xs",
                      }}
                    >
                      {t("codeReview")}
                    </Chip>
                    <Chip
                      startContent={<Clock className="ml-1 h-3 w-3" />}
                      variant="flat"
                      size="sm"
                      classNames={{
                        base: "bg-white/5 border border-white/10",
                        content: "text-foreground/60 text-xs",
                      }}
                    >
                      {t("timezone")}
                    </Chip>
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Team card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.5,
              delay: 0.15,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
            className="lg:col-span-2"
          >
            <GlassCard className="flex h-full flex-col items-center justify-center text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500/20 to-purple-500/20 border border-violet-500/20">
                <Users className="h-7 w-7 text-violet-400" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground">
                {t("teamTitle")}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/50">
                {t("teamDescription")}
              </p>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </MotionSection>
  );
}
