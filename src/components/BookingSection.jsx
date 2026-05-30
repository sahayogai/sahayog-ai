import { useEffect } from "react"
import { getCalApi } from "@calcom/embed-react"
import { booking } from "../content/site"

export default function BookingSection() {
  useEffect(() => {
    // Use Cal.com popup mode instead of inline embed.
    // The inline <Cal> component creates an iframe that runs a postMessage loop
    // (a Cal.com embed bug) which starves audio callbacks and prevents bot
    // audio from playing when the voice agent is active on the same page.
    ;(async function () {
      const cal = await getCalApi({ namespace: "30min" })
      cal("ui", {
        cssVarsPerTheme: { light: { "cal-brand": "#7c3bed" } },
        hideEventTypeDetails: true,
        layout: "month_view",
      })
    })()
  }, [])

  return (
    <section id="booking" className="py-16 md:py-24 px-4 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-800 tracking-tight leading-tight mb-10">
          {booking.heading}
        </h2>

        <div className="rounded-3xl border border-gray-100 shadow-xl bg-white p-10 flex flex-col items-center gap-6">
          <p className="text-lg text-gray-600 max-w-md">
            Pick a time that works for you. Our team will walk you through exactly how SahyogAI can transform your lead follow-up.
          </p>
          <a
            href="https://cal.com/aniket-wagh-zzgnej/30min"
            target="_blank"
            rel="noopener noreferrer"
            data-cal-namespace="30min"
            data-cal-link="aniket-wagh-zzgnej/30min"
            data-cal-config='{"layout":"month_view"}'
            className="inline-flex items-center gap-2 bg-gradient-btn hover:opacity-90 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-base"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Book a Free Strategy Call
          </a>
          <p className="text-sm text-gray-400">30 minutes · No commitment · Free</p>
        </div>
      </div>
    </section>
  )
}
