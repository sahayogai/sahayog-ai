/**
 * TrackSection — fires a GA4 `section_view` event once, the first time the
 * wrapped section scrolls into view. This is the scroll-depth funnel for a
 * single-page site: hero → services → … → booking lets GA4 show exactly where
 * visitors drop off (Explore › Funnel exploration).
 *
 * Renders a plain block <div> around its children — visually transparent for
 * the stacked full-width sections on this page. The IntersectionObserver effect
 * is client-only, so it is inert during the SSR pre-render.
 */

import { useEffect, useRef } from "react"
import { trackSectionView } from "./events"

export default function TrackSection({ name, threshold = 0.3, children }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el || typeof IntersectionObserver === "undefined") return

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            trackSectionView(name)
            io.disconnect() // fire once
            break
          }
        }
      },
      { threshold },
    )

    io.observe(el)
    return () => io.disconnect()
  }, [name, threshold])

  return (
    <div ref={ref} data-ga-section={name}>
      {children}
    </div>
  )
}
