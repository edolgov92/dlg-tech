"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
} from "@heroui/react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { Code2 } from "lucide-react";

const NAV_ITEMS = [
  { key: "howItWorks", href: "#how-it-works" },
  { key: "stack", href: "#tech-stack" },
  { key: "team", href: "#team" },
] as const;

export function Header() {
  const t = useTranslations("header");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="xl"
      isBlurred
      classNames={{
        base: "bg-background/60 backdrop-blur-xl border-b border-white/5",
        wrapper: "px-4 sm:px-6",
      }}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden text-foreground"
        />
        <NavbarBrand>
          <Code2 className="mr-2 h-6 w-6 text-primary" />
          <span className="text-lg font-bold tracking-tight text-foreground">
            DLG Tech
          </span>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden gap-6 sm:flex" justify="center">
        {NAV_ITEMS.map((item) => (
          <NavbarItem key={item.key}>
            <a
              href={item.href}
              className="text-sm text-foreground/60 transition-colors hover:text-foreground"
            >
              {t(item.key)}
            </a>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            as="a"
            href="#contact"
            color="primary"
            variant="flat"
            size="sm"
            radius="full"
            className="font-medium"
          >
            {t("cta")}
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="bg-background/95 backdrop-blur-xl pt-6">
        {NAV_ITEMS.map((item) => (
          <NavbarMenuItem key={item.key}>
            <a
              href={item.href}
              className="block w-full py-2 text-lg text-foreground/70 transition-colors hover:text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              {t(item.key)}
            </a>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
