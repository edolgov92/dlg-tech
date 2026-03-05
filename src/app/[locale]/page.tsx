import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSlide } from "@/components/sections/hero-slide";
import { LogoStrip } from "@/components/sections/logo-strip";
import { FounderSection } from "@/components/sections/founder-section";
import { TeamSection } from "@/components/sections/team-section";
import { ProcessSection } from "@/components/sections/process-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { FAQSection } from "@/components/sections/faq-section";
import { FinalCTASection } from "@/components/sections/final-cta-section";
import { JsonLd } from "@/components/seo/json-ld";

export default async function LandingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <>
      <JsonLd locale={locale} />
      <Header />
      <main>
        <HeroSlide />
        <LogoStrip />
        <FounderSection />
        <TeamSection />
        <ProcessSection />
        <TestimonialsSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
    </>
  );
}
