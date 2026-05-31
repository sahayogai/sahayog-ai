import { lazy, Suspense } from "react"
import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import ConsentBanner from "../components/ConsentBanner"

// Browser-only — uses WebRTC + microphone, must not run during SSR
const ConversationalAgent = lazy(() => import("../components/ConversationalAgent"))

export default function SiteLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 flex flex-col">
        <Outlet />
      </main>
      <Footer />
      <Suspense fallback={null}>
        <ConversationalAgent />
      </Suspense>
      <ConsentBanner />
    </div>
  )
}
