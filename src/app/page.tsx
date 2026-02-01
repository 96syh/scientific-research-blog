import { Header } from "@/components/Header"
import { HeroSection } from "@/components/HeroSection"
import { TrustedBySection } from "@/components/TrustedBySection"
import { FeatureSection } from "@/components/FeatureSection"
import { TestimonialsSection } from "@/components/TestimonialsSection"
import { StayOnFrontierSection } from "@/components/StayOnFrontierSection"
import { ChangelogSection } from "@/components/ChangelogSection"
import { FinalCTASection } from "@/components/FinalCTASection"
import { Footer } from "@/components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <TrustedBySection />
        <FeatureSection />
        <TestimonialsSection />
        <StayOnFrontierSection />
        <ChangelogSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  )
}
