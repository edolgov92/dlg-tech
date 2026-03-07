import { useTranslations } from "next-intl";

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}


export function Footer() {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <footer role="contentinfo" className="border-t border-white/[0.06] px-6 py-12 sm:py-16">
      <div className="mx-auto max-w-6xl">
        {/* Top row */}
        <div className="grid gap-10 sm:grid-cols-3">
          {/* Brand */}
          <div>
            <p className="text-base font-semibold tracking-tight text-white">
              DLG Tech
            </p>
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-white/40">
              {t("tagline")}
            </p>
          </div>

          {/* Contact */}
          <div>
            <p className="mb-3 text-xs font-semibold tracking-wide text-white/60 uppercase">
              {t("contactTitle")}
            </p>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:contact@dlgtech.com"
                  className="text-sm text-white/40 transition-colors hover:text-white/80"
                >
                  contact@dlgtech.com
                </a>
              </li>
              <li>
                <a
                  href="https://calendly.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/40 transition-colors hover:text-white/80"
                >
                  {t("bookCall")}
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="mb-3 text-xs font-semibold tracking-wide text-white/60 uppercase">
              {t("legalTitle")}
            </p>
            <ul className="space-y-2">
              <li>
                <a
                  href="/privacy"
                  className="text-sm text-white/40 transition-colors hover:text-white/80"
                >
                  {t("privacy")}
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  className="text-sm text-white/40 transition-colors hover:text-white/80"
                >
                  {t("terms")}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-10 border-t border-white/[0.06] pt-6">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <span className="text-xs text-white/40">
              {t("copyright", { year: String(year) })}
            </span>

            <a
              href="https://www.linkedin.com/in/eugene-dolgov-tech/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 transition-colors hover:text-white/70"
              aria-label="LinkedIn"
            >
              <LinkedInIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
