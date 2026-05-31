import Cal, { getCalApi } from "@calcom/embed-react"
import { useEffect } from "react"
import { booking } from "../content/site"

export default function BookingSection() {
  useEffect(() => {
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

        <div className="rounded-3xl border border-gray-100 shadow-xl overflow-hidden bg-white min-h-[600px]">
          <Cal
            namespace="30min"
            calLink="aniket-wagh-zzgnej/30min"
            style={{ width: "100%", height: "100%", overflow: "scroll", minHeight: 600 }}
            config={{
              layout: "month_view",
              useSlotsViewOnSmallScreen: "true",
              theme: "lite",
            }}
          />
        </div>
      </div>
    </section>
  )
}
