"use client";

import { useCallback, useEffect, useState } from "react";
import { Button } from "@heroui/react";
import { useTranslations } from "next-intl";

export function Header() {
  const t = useTranslations("header");
  const [scrolled, setScrolled] = useState(false);

  const onScroll = useCallback(() => {
    setScrolled(window.scrollY > 40);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  return (
    <header
      className="fixed top-0 z-50 w-full transition-[background-color,backdrop-filter] duration-300"
      style={{
        backgroundColor: scrolled ? "rgba(0, 0, 0, 0.5)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
      }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-16">
        <span className="text-sm font-semibold tracking-tight text-foreground/80">
          DLG Tech
        </span>
        <Button
          as="a"
          href="#contact"
          size="sm"
          radius="full"
          className="bg-white/10 px-5 font-medium text-white backdrop-blur-sm hover:bg-white/20"
        >
          {t("cta")}
        </Button>
      </div>
    </header>
  );
}
