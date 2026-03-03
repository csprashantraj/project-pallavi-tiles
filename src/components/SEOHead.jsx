/**
 * SEOHead.jsx
 * Reusable wrapper around react-helmet-async Helmet.
 * Pass title, description, keywords, ogTitle, ogDescription per page.
 */
import { Helmet } from 'react-helmet-async'

const SITE_NAME = 'Patel Building Materials'
const DEFAULT_OG_IMAGE = '/og-image.jpg'

export default function SEOHead({
  title,
  description,
  keywords = '',
  ogTitle,
  ogDescription,
}) {
  const fullTitle = `${title} | ${SITE_NAME}`
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta property="og:title" content={ogTitle || fullTitle} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:image" content={DEFAULT_OG_IMAGE} />
      <meta property="og:type" content="website" />
    </Helmet>
  )
}
