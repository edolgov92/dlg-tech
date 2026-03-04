import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 px-6 py-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <span className="text-xs font-medium text-foreground/30">
          DLG Tech
        </span>
        <span className="text-xs text-foreground/20">
          {t("copyright", { year: String(year) })}
        </span>
      </div>
    </footer>
  );
}
