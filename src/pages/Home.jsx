import { lazy, Suspense } from "react"
import SEOHead from "../components/SEOHead"
import HeroSection from "../components/HeroSection"
import ServicesSection from "../components/ServicesSection"
import UVPSection from "../components/UVPSection"
import HowItWorks from "../components/HowItWorks"
import AIServicesSection from "../components/AIServicesSection"
import MetricsSection from "../components/MetricsSection"
import TestimonialsSection from "../components/TestimonialsSection"
import IndustriesSection from "../components/IndustriesSection"
import CTASection from "../components/CTASection"
import TrackSection from "../analytics/TrackSection"

// Lazy-load CalCom widget — uses browser-only APIs, must not run during SSR
const BookingSection = lazy(() => import("../components/BookingSection"))

export default function Home() {
  return (
    <>
      <SEOHead />
      {/* TrackSection fires a GA4 `section_view` once per section → scroll funnel.
          Names match SECTION_ORDER in src/analytics/events.js. */}
      <TrackSection name="hero"><HeroSection /></TrackSection>
      <TrackSection name="services"><ServicesSection /></TrackSection>
      <TrackSection name="uvp"><UVPSection /></TrackSection>
      <TrackSection name="how_it_works"><HowItWorks /></TrackSection>
      <TrackSection name="ai_services"><AIServicesSection /></TrackSection>
      <TrackSection name="metrics"><MetricsSection /></TrackSection>
      <TrackSection name="testimonials"><TestimonialsSection /></TrackSection>
      <TrackSection name="industries"><IndustriesSection /></TrackSection>
      <TrackSection name="cta"><CTASection /></TrackSection>
      <TrackSection name="booking">
        <Suspense fallback={
          <section id="booking" className="px-4 pb-24 pt-0" style={{ background: "#0f172a" }}>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10">
                Book a Free Strategy Call
              </h2>
              <div className="rounded-3xl min-h-[600px] flex items-center justify-center" style={{ border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.03)" }}>
                <p className="text-gray-500 text-sm">Loading calendar…</p>
              </div>
            </div>
          </section>
        }>
          <BookingSection />
        </Suspense>
      </TrackSection>
    </>
  )
}
