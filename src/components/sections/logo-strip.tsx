import { useTranslations } from "next-intl";

function LogoGoogle({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 272 92" fill="currentColor">
      <path d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"/>
      <path d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"/>
      <path d="M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z"/>
      <path d="M225 3v65h-9.5V3h9.5z"/>
      <path d="M262.02 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z"/>
      <path d="M35.29 41.19V32H67c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C16.32 69.35.36 53.89.36 34.91.36 15.93 16.32.47 35.3.47c10.5 0 17.98 4.12 23.6 9.49l-6.64 6.64c-4.03-3.78-9.49-6.72-16.97-6.72-13.86 0-24.7 11.17-24.7 25.03 0 13.86 10.84 25.03 24.7 25.03 8.99 0 14.11-3.61 17.39-6.89 2.66-2.66 4.41-6.46 5.1-11.65l-22.49-.21z"/>
    </svg>
  );
}

function LogoAWS({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 40" fill="none">
      <text x="0" y="28" fill="currentColor" fontFamily="sans-serif" fontWeight="700" fontSize="22" letterSpacing="-0.5">
        aws
      </text>
    </svg>
  );
}

function LogoStripe({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 40" fill="currentColor">
      <path d="M12.5 13.4c0-1.7 1.4-2.4 3.6-2.4 3.2 0 7.3 1 10.5 2.7V6.2c-3.5-1.4-7-2-10.5-2C8.9 4.2 4 7.8 4 13.9c0 9.5 13.1 8 13.1 12.1 0 2-1.7 2.7-4.1 2.7-3.6 0-8.1-1.5-11.7-3.5v7.6c4 1.7 8 2.4 11.7 2.4 7.4 0 12.5-3.7 12.5-9.8-.1-10.3-13-8.4-13-12z"/>
      <path d="M40.2 18.2l-3-1.5c-1.3-.6-1.7-1-1.7-1.7 0-.8.7-1.2 1.8-1.2 2.4 0 4.8 1 6.4 2l2.5-5.5c-2.2-1.3-4.9-2.1-8.5-2.1-5.3 0-8.8 2.8-8.8 6.7 0 3.4 2.3 5.3 5.7 6.8l2.6 1.2c1.5.7 2 1.2 2 2 0 1-.9 1.5-2.3 1.5-2.6 0-5.9-1.3-8.1-3.1l-2.8 5.4c2.7 2.1 6.5 3.3 10.5 3.3 5.6 0 9.4-2.7 9.4-6.9.1-3.7-2.5-5.5-5.7-6.9z"/>
      <path d="M59.5 25.2V8.7h-5v-1c0-2.3 1-3.4 3.1-3.4 1.1 0 2 .2 3 .5l1.5-5.8C60.7.4 59 0 56.8 0 51.6 0 48.5 3 48.5 8.3v.4h-3v6h3v16.5h7v-6z"/>
      <path d="M73.6 8.2c-3.4 0-5.6 1.6-6.8 2.7l-.4-2.2h-6.2v26.5h7V23.7c1.1 1.5 3.2 2.7 6.1 2.7 5.8 0 10-4.7 10-9.7s-3.9-8.5-9.7-8.5zm-1.8 14.2c-1.7 0-3-.7-3.8-1.8v-5c.8-1 2.1-1.7 3.8-1.7 2.5 0 4.4 2 4.4 4.3 0 2.2-1.9 4.2-4.4 4.2z"/>
      <path d="M95.7 8.2c-6 0-10.5 4.1-10.5 9.2 0 6.1 4.7 9.2 10.8 9.2 3.1 0 5.4-.7 7.5-2l-2-4c-1.4.8-3 1.3-4.8 1.3-2.2 0-4-.8-4.5-2.8h12.3c0-.4.1-1.2.1-2 0-5.5-3.5-8.9-8.9-8.9zm-3.7 7.5c.3-2 1.7-3.3 3.7-3.3s3.2 1.3 3.3 3.3h-7z"/>
    </svg>
  );
}

function LogoSlack({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 40" fill="none">
      <text x="0" y="28" fill="currentColor" fontFamily="sans-serif" fontWeight="700" fontSize="24" letterSpacing="-1">
        slack
      </text>
    </svg>
  );
}

function LogoShopify({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 40" fill="none">
      <text x="0" y="28" fill="currentColor" fontFamily="sans-serif" fontWeight="600" fontSize="22" letterSpacing="-0.5">
        shopify
      </text>
    </svg>
  );
}

const LOGOS = [
  { name: "Google", component: LogoGoogle },
  { name: "AWS", component: LogoAWS },
  { name: "Stripe", component: LogoStripe },
  { name: "Slack", component: LogoSlack },
  { name: "Shopify", component: LogoShopify },
];

export function LogoStrip() {
  const t = useTranslations("logos");

  return (
    <section id="logos" aria-label="Companies our engineers worked at" className="relative z-10 border-y border-white/[0.04] bg-black/40 py-10 backdrop-blur-sm">
      <div className="mx-auto max-w-5xl px-6">
        <p className="mb-8 text-center text-xs tracking-[0.2em] text-white/25 uppercase">
          {t("heading")}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-14 gap-y-6">
          {LOGOS.map(({ name, component: Logo }) => (
            <div
              key={name}
              className="flex h-8 items-center text-white/30 transition-all duration-300 hover:text-white/60"
            >
              <Logo className="h-6 w-auto" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
