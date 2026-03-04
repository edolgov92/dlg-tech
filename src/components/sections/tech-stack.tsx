"use client";

import { useTranslations } from "next-intl";
import { Chip } from "@heroui/react";
import { MotionSection } from "@/components/ui/motion-section";
import { SectionBadge } from "@/components/ui/section-badge";
import { GlassCard } from "@/components/ui/glass-card";
import { motion } from "framer-motion";

interface TechItem {
  name: string;
  level: "primary" | "secondary";
}

interface TechCategory {
  key: string;
  items: TechItem[];
}

const CATEGORIES: TechCategory[] = [
  {
    key: "frontend",
    items: [
      { name: "React", level: "primary" },
      { name: "Next.js", level: "primary" },
      { name: "TypeScript", level: "primary" },
      { name: "Tailwind CSS", level: "secondary" },
      { name: "React Native", level: "secondary" },
    ],
  },
  {
    key: "backend",
    items: [
      { name: "Node.js", level: "primary" },
      { name: "Python", level: "primary" },
      { name: "PostgreSQL", level: "primary" },
      { name: "Redis", level: "secondary" },
      { name: "GraphQL", level: "secondary" },
    ],
  },
  {
    key: "cloud",
    items: [
      { name: "AWS", level: "primary" },
      { name: "Docker", level: "primary" },
      { name: "Terraform", level: "secondary" },
      { name: "CI/CD", level: "secondary" },
      { name: "Kubernetes", level: "secondary" },
    ],
  },
  {
    key: "ai",
    items: [
      { name: "OpenAI", level: "primary" },
      { name: "LangChain", level: "primary" },
      { name: "RAG", level: "secondary" },
      { name: "Fine-tuning", level: "secondary" },
      { name: "Vector DBs", level: "secondary" },
    ],
  },
];

export function TechStackSection() {
  const t = useTranslations("techStack");

  return (
    <MotionSection className="px-6 py-24" id="tech-stack">
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

        <div className="grid gap-6 sm:grid-cols-2">
          {CATEGORIES.map((cat, idx) => (
            <motion.div
              key={cat.key}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: idx * 0.1,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
            >
              <GlassCard className="h-full">
                <h3 className="mb-4 text-sm font-semibold tracking-wide text-foreground/40 uppercase">
                  {t(cat.key as "frontend" | "backend" | "cloud" | "ai")}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((tech) => (
                    <Chip
                      key={tech.name}
                      variant={tech.level === "primary" ? "flat" : "bordered"}
                      color={tech.level === "primary" ? "primary" : "default"}
                      size="sm"
                      classNames={{
                        base:
                          tech.level === "primary"
                            ? "bg-primary/15 border-primary/30"
                            : "border-white/10 bg-white/5",
                        content:
                          tech.level === "primary"
                            ? "text-primary-300 font-medium"
                            : "text-foreground/50",
                      }}
                    >
                      {tech.name}
                    </Chip>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
