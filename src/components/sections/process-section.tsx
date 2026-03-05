"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { Package, Users, UserPlus } from "lucide-react";

const MODELS = [
  { key: "model1", icon: Package, accent: "from-violet-500/30 to-fuchsia-500/30", dot: "bg-violet-400" },
  { key: "model2", icon: Users, accent: "from-sky-500/30 to-cyan-500/30", dot: "bg-sky-400" },
  { key: "model3", icon: UserPlus, accent: "from-amber-500/30 to-orange-500/30", dot: "bg-amber-400" },
] as const;

export function ProcessSection() {
  const t = useTranslations("process");
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden px-6 py-24 sm:py-32"
    >
      {/* Background image + warm overlay */}
      <div className="pointer-events-none absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1920&q=80"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-[0.12]"
          loading="lazy"
        />
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 70% 50% at 20% 20%, rgba(200, 120, 60, 0.12) 0%, transparent 55%),
              radial-gradient(ellipse 60% 60% at 80% 70%, rgba(160, 70, 100, 0.08) 0%, transparent 55%),
              linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.07) 50%, rgba(255,255,255,0.04) 100%)
            `,
          }}
        />
      </div>

      <div
        className="relative z-10 mx-auto max-w-6xl"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(40px)",
          transition:
            "opacity 0.9s cubic-bezier(0.21,0.47,0.32,0.98), transform 0.9s cubic-bezier(0.21,0.47,0.32,0.98)",
        }}
      >
        {/* Header — left-aligned for variety */}
        <div className="max-w-2xl">
          <p className="mb-4 text-[11px] tracking-[0.25em] text-white/50 uppercase sm:text-xs">
            {t("badge")}
          </p>
          <h2 className="text-3xl font-bold leading-tight tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl">
            {t("title")}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/60 sm:text-lg">
            {t("subtitle")}
          </p>
        </div>

        {/* 3 engagement models */}
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {MODELS.map(({ key, icon: Icon, accent, dot }, i) => (
            <div
              key={key}
              className={`group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.04] p-8 backdrop-blur-sm transition-all duration-500 hover:bg-white/[0.08]`}
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(30px)",
                transition: `opacity 0.7s ease ${0.2 + i * 0.15}s, transform 0.7s ease ${0.2 + i * 0.15}s`,
              }}
            >
              <div className="relative z-10">
                <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${accent}`}>
                  <Icon className="h-6 w-6 text-white/80" />
                </div>

                <h3 className="text-xl font-bold text-white">{t(`${key}Title`)}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/55">
                  {t(`${key}Desc`)}
                </p>

                {/* Bullet points */}
                <ul className="mt-5 space-y-2.5">
                  {[1, 2, 3].map((n) => (
                    <li key={n} className="flex items-start gap-2.5">
                      <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${dot}`} />
                      <span className="text-sm text-white/70">{t(`${key}Point${n}`)}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-6 text-[11px] tracking-wide text-white/50 uppercase">
                  {t(`${key}Fit`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
