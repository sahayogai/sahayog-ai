import Cal, { getCalApi } from "@calcom/embed-react"
import { useEffect } from "react"
import { useLanguage } from "../i18n/LanguageContext"

export default function BookingSection() {
  const { booking } = useLanguage().t
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
    <section
      id="booking"
      className="px-4 pb-24 pt-0"
      style={{ background: "#0f172a" }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-3">
          {booking.heading}
        </h2>
        <p className="text-gray-400 text-base mb-10">
          {booking.note}
        </p>

        <div
          className="rounded-3xl overflow-hidden"
          style={{
            border: "1px solid rgba(255,255,255,0.08)",
            background: "rgba(255,255,255,0.03)",
            boxShadow: "0 8px 40px rgba(0,0,0,0.40), 0 0 0 1px rgba(124,59,237,0.12)",
          }}
        >
          <Cal
            namespace="30min"
            calLink="aniket-wagh-zzgnej/30min"
            style={{ width: "100%", height: "100%", overflow: "scroll", minHeight: 600 }}
            config={{
              layout: "month_view",
              useSlotsViewOnSmallScreen: "true",
              theme: "dark",
            }}
          />
        </div>
      </div>
    </section>
  )
}
