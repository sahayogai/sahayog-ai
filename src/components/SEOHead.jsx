import { Helmet } from "react-helmet-async"
import { siteConfig } from "../content/site"

const DEFAULT_TITLE = "SahyogAI | AI & Automation for SMEs & Local Businesses India"
const DEFAULT_DESC  = "SahyogAI helps SMEs and local businesses in India adopt AI, automate operations, and grow faster. AI agents, WhatsApp AI, workflow automation & more. Book a free AI audit today."

export default function SEOHead({ title, description, canonical, ogImage }) {
  const fullTitle = title ? `${title} | SahyogAI` : DEFAULT_TITLE
  const desc      = description || DEFAULT_DESC
  const url       = canonical   || siteConfig.url
  const image     = ogImage     || siteConfig.ogImage

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type"        content="website" />
      <meta property="og:site_name"   content="SahyogAI" />
      <meta property="og:title"       content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url"         content={url} />
      <meta property="og:image"       content={image} />
      <meta property="og:image:width"  content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale"      content="en_IN" />

      {/* Twitter */}
      <meta name="twitter:card"        content="summary_large_image" />
      <meta name="twitter:site"        content="@SahyogAI" />
      <meta name="twitter:title"       content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image"       content={image} />
    </Helmet>
  )
}
