import { Helmet } from "react-helmet-async"
import { siteConfig } from "../content/site"

export default function SEOHead({
  title,
  description,
  canonical,
  ogImage,
}) {
  const fullTitle = title
    ? `${title} | SahyogAI`
    : "SahyogAI | AI Voice Agents for Instant Lead Follow-Up in India"
  const desc = description || siteConfig.description
  const url = canonical || siteConfig.url
  const image = ogImage || siteConfig.ogImage

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  )
}
