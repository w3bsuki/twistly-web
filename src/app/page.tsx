import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { HeroSection } from "@/components/sections/hero-section"
import { LogoCarousel } from "@/components/sections/logo-carousel"
import { ServicesSection } from "@/components/sections/services-section"
import { ContactSection } from "@/components/sections/contact-section"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <LogoCarousel />
        <ServicesSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  )
}
