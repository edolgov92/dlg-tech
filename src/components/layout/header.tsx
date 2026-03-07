"use client";

import { useCallback, useEffect, useState } from "react";
import { Button } from "@heroui/react";
import { useTranslations } from "next-intl";
import Image from "next/image";

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
      role="banner"
      className="fixed top-0 z-50 w-full transition-[background-color,backdrop-filter] duration-300"
      style={{
        backgroundColor: scrolled ? "rgba(0, 0, 0, 0.5)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
      }}
    >
      <nav aria-label="Main navigation" className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-16">
        <a href="/" className="flex items-center gap-2 text-sm font-semibold tracking-tight text-foreground/80">
          <Image src="/logos/dlg-tech.png" alt="DLG Tech" width={24} height={24} className="h-6 w-6" />
          DLG Tech
        </a>
        <Button
          as="a"
          href="#contact"
          size="sm"
          radius="full"
          className="bg-white/10 px-5 font-medium text-white backdrop-blur-sm hover:bg-white/20"
        >
          {t("cta")}
        </Button>
      </nav>
    </header>
  );
}
