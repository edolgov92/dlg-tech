import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSlide } from "@/components/sections/hero-slide";
import { VisionSlide } from "@/components/sections/vision-slide";

export default function LandingPage() {
  return (
    <>
      <Header />
      <main>
        <HeroSlide />
        <VisionSlide />
      </main>
      <Footer />
    </>
  );
}
