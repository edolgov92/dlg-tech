import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero";
import { TrustBatterySection } from "@/components/sections/trust-battery";
import { HowItWorksSection } from "@/components/sections/how-it-works";
import { TechStackSection } from "@/components/sections/tech-stack";
import { TeamSection } from "@/components/sections/team";
import { CtaSection } from "@/components/sections/cta";

export default function LandingPage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <TrustBatterySection />
        <HowItWorksSection />
        <TechStackSection />
        <TeamSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
