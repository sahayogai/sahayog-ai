import HeroSection from "../components/HeroSection"
import ComparisonSection from "../components/ComparisonSection"
import IntegrationSection from "../components/IntegrationSection"
import FeaturesSection from "../components/FeaturesSection"
import HowItWorks from "../components/HowItWorks"
import BookingSection from "../components/BookingSection"

export default function Home() {
  return (
    <>
      <HeroSection />
      <ComparisonSection />
      {/* <IntegrationSection /> */}
      <FeaturesSection />
      <HowItWorks />
      <BookingSection />
    </>
  )
}
