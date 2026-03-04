"use client";

import { Button } from "@heroui/react";
import { useTranslations } from "next-intl";

export function Header() {
  const t = useTranslations("header");

  return (
    <header className="fixed top-0 z-50 w-full">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-16">
        <span className="text-sm font-semibold tracking-tight text-foreground/80">
          DLG Tech
        </span>
        <Button
          as="a"
          href="#contact"
          variant="bordered"
          size="sm"
          radius="full"
          className="border-white/15 text-xs font-medium text-foreground/70 backdrop-blur-sm"
        >
          {t("cta")}
        </Button>
      </div>
    </header>
  );
}
