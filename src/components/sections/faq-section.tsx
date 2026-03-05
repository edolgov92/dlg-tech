"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { ChevronDown } from "lucide-react";

const FAQ_KEYS = ["faq1", "faq2", "faq3", "faq4", "faq5", "faq6"] as const;

function AccordionItem({
  question,
  answer,
  open,
  onToggle,
}: {
  question: string;
  answer: string;
  open: boolean;
  onToggle: () => void;
}) {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div className="border-b border-white/[0.06]">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 py-5 text-left transition-colors hover:text-white"
      >
        <span className="text-sm font-medium text-white/80 sm:text-base">
          {question}
        </span>
        <ChevronDown
          className={`h-4 w-4 shrink-0 text-white/40 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        ref={contentRef}
        className="grid transition-[grid-template-rows] duration-300"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <p className="pb-5 text-sm leading-relaxed text-white/50">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export function FAQSection() {
  const t = useTranslations("faq");
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = useCallback(
    (i: number) => setOpenIndex((prev) => (prev === i ? null : i)),
    [],
  );

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
      {/* Background image + gradient overlay */}
      <div className="pointer-events-none absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-[0.07]"
          loading="lazy"
        />
        <div
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(180deg, rgba(9,9,11,0.9) 0%, rgba(9,9,11,0.6) 50%, rgba(9,9,11,0.9) 100%),
              radial-gradient(ellipse 80% 60% at 100% 60%, rgba(20, 90, 80, 0.12) 0%, transparent 55%),
              radial-gradient(ellipse 60% 70% at 0% 40%, rgba(30, 70, 90, 0.1) 0%, transparent 50%)
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
        {/* Two-column: left headline, right accordion */}
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
          {/* Left — sticky headline */}
          <div className="lg:sticky lg:top-32">
            <p className="mb-4 text-[11px] tracking-[0.25em] text-white/50 uppercase sm:text-xs">
              {t("badge")}
            </p>
            <h2 className="text-3xl font-bold leading-tight tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl">
              {t("title")}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/50 sm:text-lg">
              {t("subtitle")}
            </p>
          </div>

          {/* Right — accordion */}
          <div className="border-t border-white/[0.06]">
            {FAQ_KEYS.map((key, i) => (
              <AccordionItem
                key={key}
                question={t(`${key}Q`)}
                answer={t(`${key}A`)}
                open={openIndex === i}
                onToggle={() => toggle(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
