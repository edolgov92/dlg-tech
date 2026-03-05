"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";

const TEAM = [
  {
    nameKey: "member1Name",
    roleKey: "member1Role",
    statusKey: "member1Status",
    busy: true,
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
  },
  {
    nameKey: "member2Name",
    roleKey: "member2Role",
    statusKey: "member2Status",
    busy: true,
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face",
  },
  {
    nameKey: "member3Name",
    roleKey: "member3Role",
    statusKey: "member3Status",
    busy: false,
    photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face",
  },
  {
    nameKey: "member4Name",
    roleKey: "member4Role",
    statusKey: "member4Status",
    busy: false,
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
  },
  {
    nameKey: "member5Name",
    roleKey: "member5Role",
    statusKey: "member5Status",
    busy: false,
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
  },
];

const TECH_CATEGORIES = [
  { key: "frontend", icons: ["React", "Next.js", "TypeScript", "Tailwind"] },
  { key: "backend", icons: ["Node.js", "Python", "Go", "PostgreSQL"] },
  { key: "cloud", icons: ["AWS", "Docker", "Kubernetes", "Terraform"] },
];

export function TeamSection() {
  const t = useTranslations("team");
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
      id="team"
      aria-labelledby="team-heading"
      className="relative overflow-hidden px-6 py-24 sm:py-32"
      style={{
        background: `
          radial-gradient(ellipse 80% 60% at 20% 40%, rgba(99, 102, 241, 0.08) 0%, transparent 70%),
          radial-gradient(ellipse 70% 50% at 80% 60%, rgba(168, 85, 247, 0.07) 0%, transparent 70%),
          radial-gradient(ellipse 60% 70% at 50% 80%, rgba(59, 130, 246, 0.06) 0%, transparent 60%),
          linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.08) 50%, rgba(255,255,255,0.04) 100%)
        `,
      }}
    >
      <div
        className="relative z-10 mx-auto max-w-6xl"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(40px)",
          transition:
            "opacity 0.9s cubic-bezier(0.21,0.47,0.32,0.98), transform 0.9s cubic-bezier(0.21,0.47,0.32,0.98)",
        }}
      >
        {/* Header */}
        <div className="text-center">
          <p className="mb-4 text-[11px] tracking-[0.25em] text-white/50 uppercase sm:text-xs">
            {t("badge")}
          </p>
          <h2 id="team-heading" className="text-3xl font-bold leading-tight tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl">
            {t("title")}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
            {t("subtitle")}
          </p>
        </div>

        {/* Team grid */}
        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-5">
          {TEAM.map((member, i) => (
            <div
              key={member.nameKey}
              className="group text-center"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.6s ease ${0.2 + i * 0.1}s, transform 0.6s ease ${0.2 + i * 0.1}s`,
              }}
            >
              <div className="relative mx-auto mb-4 h-24 w-24 overflow-hidden rounded-2xl border border-white/[0.06] sm:h-28 sm:w-28">
                <Image
                  src={member.photo}
                  alt={t(member.nameKey)}
                  fill
                  sizes="(min-width: 640px) 112px, 96px"
                  className="object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              <p className="text-sm font-semibold text-white/80">
                {t(member.nameKey)}
              </p>
              <p className="mt-0.5 text-[11px] tracking-wide text-white/50">
                {t(member.roleKey)}
              </p>
              <p className={`mt-1.5 inline-flex items-center gap-1.5 text-[10px] tracking-wide ${member.busy ? "text-lime-400/70" : "text-emerald-400/70"}`}>
                <span className={`h-1.5 w-1.5 rounded-full ${member.busy ? "bg-lime-400" : "bg-emerald-400"}`} />
                {t(member.statusKey)}
              </p>
            </div>
          ))}
        </div>

        {/* Technologies */}
        <div className="mx-auto mt-20 max-w-3xl">
          <h3 className="mb-8 text-center text-[11px] tracking-[0.25em] text-white/60 uppercase sm:text-xs">
            {t("techTitle")}
          </h3>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {TECH_CATEGORIES.map((cat) => (
              <div
                key={cat.key}
                className="rounded-xl border border-white/[0.06] bg-white/[0.02] px-5 py-5"
              >
                <p className="mb-3 text-xs font-semibold tracking-wide text-white/70 uppercase">
                  {t(`${cat.key}Label`)}
                </p>
                <div className="flex flex-wrap gap-2">
                  {cat.icons.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-white/[0.08] bg-white/[0.05] px-2.5 py-1 text-xs text-white/65 transition-colors hover:text-white/90"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
