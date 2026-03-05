"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { Star } from "lucide-react";

const TESTIMONIALS = [
  {
    key: "t1",
    photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&crop=face",
  },
  {
    key: "t2",
    photo: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200&h=200&fit=crop&crop=face",
  },
  {
    key: "t3",
    photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop&crop=face",
  },
];

export function TestimonialsSection() {
  const t = useTranslations("testimonials");
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
      {/* Warm peach/salmon gradient — inspired by Blue Yard */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 100% 70% at 50% 40%, rgba(200, 120, 80, 0.1) 0%, transparent 60%),
              radial-gradient(ellipse 80% 60% at 80% 20%, rgba(220, 140, 100, 0.08) 0%, transparent 50%),
              radial-gradient(ellipse 70% 50% at 20% 70%, rgba(180, 90, 60, 0.07) 0%, transparent 50%),
              linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.06) 50%, rgba(255,255,255,0.03) 100%)
            `,
          }}
        />
      </div>

      <div
        className="relative z-10 mx-auto max-w-5xl"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(40px)",
          transition:
            "opacity 0.9s cubic-bezier(0.21,0.47,0.32,0.98), transform 0.9s cubic-bezier(0.21,0.47,0.32,0.98)",
        }}
      >
        {/* Header — centered */}
        <div className="text-center">
          <p className="mb-4 text-[11px] tracking-[0.25em] text-white/50 uppercase sm:text-xs">
            {t("badge")}
          </p>
          <h2 className="text-3xl font-bold leading-tight tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl">
            {t("title")}
          </h2>
        </div>

        {/* Testimonial cards — staggered layout */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map(({ key, photo }, i) => (
            <div
              key={key}
              className="relative rounded-2xl border border-white/[0.06] bg-white/[0.03] p-7 backdrop-blur-sm"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible
                  ? `translateY(${i === 1 ? "-12px" : "0"})`
                  : "translateY(30px)",
                transition: `opacity 0.7s ease ${0.2 + i * 0.15}s, transform 0.7s ease ${0.2 + i * 0.15}s`,
              }}
            >
              {/* Stars */}
              <div className="mb-4 flex gap-1">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star
                    key={s}
                    className="h-3.5 w-3.5 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-sm leading-relaxed text-white/70">
                &ldquo;{t(`${key}Quote`)}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="mt-6 flex items-center gap-3">
                <img
                  src={photo}
                  alt={t(`${key}Name`)}
                  className="h-10 w-10 rounded-full object-cover grayscale"
                  loading="lazy"
                />
                <div>
                  <p className="text-sm font-semibold text-white/80">
                    {t(`${key}Name`)}
                  </p>
                  <p className="text-[11px] text-white/40">
                    {t(`${key}Role`)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
