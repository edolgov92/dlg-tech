import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const SITE_URL = "https://dlgtech.com";

function BreadcrumbJsonLd({ title, path }: { title: string; path: string }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: title,
        item: `${SITE_URL}${path}`,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function LegalLayout({
  title,
  lastUpdated,
  path,
  children,
}: {
  title: string;
  lastUpdated: string;
  path: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      <BreadcrumbJsonLd title={title} path={path} />

      <header className="border-b border-white/[0.06] px-6 py-5">
        <div className="mx-auto flex max-w-3xl items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-white/80"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </Link>
          <span className="text-sm font-semibold tracking-tight text-white/80">
            DLG Tech
          </span>
        </div>
      </header>

      <main className="px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-xs text-white/30">
              <li>
                <Link href="/" className="transition-colors hover:text-white/60">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-white/50">{title}</li>
            </ol>
          </nav>

          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {title}
          </h1>
          <p className="mt-3 text-sm text-white/40">
            Last updated: {lastUpdated}
          </p>

          <div className="legal-prose mt-12">{children}</div>
        </div>
      </main>
    </div>
  );
}
