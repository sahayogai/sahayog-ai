import { lazy, Suspense } from "react"
import SEOHead from "../components/SEOHead"
import HeroSection from "../components/HeroSection"
import ComparisonSection from "../components/ComparisonSection"
import FeaturesSection from "../components/FeaturesSection"
import HowItWorks from "../components/HowItWorks"

// Lazy-load CalCom widget — it uses browser-only APIs and must not run during SSR
const BookingSection = lazy(() => import("../components/BookingSection"))

export default function Home() {
  return (
    <>
      <SEOHead />
      <HeroSection />
      <ComparisonSection />
      <FeaturesSection />
      <HowItWorks />
      <Suspense fallback={
        <section id="booking" className="py-24 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-800 mb-10">
              Book a Free Strategy Call
            </h2>
            <div className="rounded-3xl border border-gray-100 shadow-xl bg-white min-h-[600px] flex items-center justify-center">
              <p className="text-gray-400 text-sm">Loading calendar…</p>
            </div>
          </div>
        </section>
      }>
        <BookingSection />
      </Suspense>
    </>
  )
}
