import Image from "next/image";
import { useTranslations } from "next-intl";

const LOGOS = [
  { name: "Trilogy", src: "/logos/trilogy.svg", h: 28 },
  { name: "Crossover", src: "/logos/crossover.svg", h: 40 },
  { name: "GN Audio", src: "/logos/gn-audio.svg", h: 26 },
  { name: "Avaya", src: "/logos/avaya.svg", h: 28 },
  { name: "Payever", src: "/logos/payever.svg", h: 26 },
  { name: "Akkure", src: "/logos/akkure.svg", h: 24 },
  { name: "GrowSurf", src: "/logos/growsurf.svg", h: 26 },
  { name: "Sidus", src: "/logos/sidus.svg", h: 14 },
];

export function LogoStrip() {
  const t = useTranslations("logos");

  return (
    <section
      id="logos"
      aria-label="Companies our engineers worked at"
      className="relative z-10 border-y border-white/[0.04] bg-black/40 py-10 backdrop-blur-sm"
    >
      <div className="mx-auto max-w-5xl px-6">
        <p className="mb-8 text-center text-xs tracking-[0.2em] text-white/25 uppercase">
          {t("heading")}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {LOGOS.map(({ name, src, h }) => (
            <div
              key={name}
              className="flex h-8 items-center opacity-45 transition-opacity duration-300 hover:opacity-70"
            >
              <Image
                src={src}
                alt={name}
                width={Math.round(h * 4)}
                height={h}
                className="w-auto brightness-0 invert"
                style={{ height: h }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
