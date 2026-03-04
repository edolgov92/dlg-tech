import { useTranslations } from "next-intl";
import { Code2 } from "lucide-react";
import { Divider } from "@heroui/react";

export function Footer() {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-background">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          <div className="flex items-center gap-2">
            <Code2 className="h-5 w-5 text-primary" />
            <span className="font-semibold tracking-tight text-foreground">
              DLG Tech
            </span>
          </div>
          <p className="text-sm text-foreground/40">{t("tagline")}</p>
        </div>
        <Divider className="my-8 bg-white/5" />
        <p className="text-center text-xs text-foreground/30">
          {t("copyright", { year: String(year) })}
        </p>
      </div>
    </footer>
  );
}
