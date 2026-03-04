"use client";

import { Button } from "@heroui/react";
import { useTranslations } from "next-intl";
import { MotionSection } from "@/components/ui/motion-section";
import { ArrowRight } from "lucide-react";

export function CtaSection() {
  const t = useTranslations("cta");

  return (
    <MotionSection className="px-6 py-32" id="contact">
      <div className="relative mx-auto max-w-3xl text-center">
        {/* Background glow */}
        <div className="pointer-events-none absolute -inset-x-20 -inset-y-10">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/10 via-violet-500/10 to-primary/10 blur-3xl" />
        </div>

        <div className="relative">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            {t("title")}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base text-foreground/50 sm:text-lg">
            {t("subtitle")}
          </p>
          <div className="mt-10">
            <Button
              as="a"
              href="https://calendly.com"
              target="_blank"
              rel="noopener noreferrer"
              color="primary"
              size="lg"
              radius="full"
              className="px-10 text-base font-medium"
              endContent={<ArrowRight className="h-4 w-4" />}
            >
              {t("button")}
            </Button>
          </div>
          <p className="mt-4 text-sm text-foreground/30">{t("note")}</p>
        </div>
      </div>
    </MotionSection>
  );
}
