import React from 'react'
import Helmet from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'

export default function SEO({ children, location, title, description, image }) {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          google {
            verificationID
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  const seo = {
    title: title || site.siteMetadata.title,
    description,
    image: image || 'logo.svg',
  }

  return (
    <Helmet htmlAttributes={{ lang: 'en' }} titleTemplate={`%s — ${site.siteMetadata.title}`}>
      <title>{seo.title}</title>

      {/* Fav Icons */}
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="alternate icon" type="image/svg+xml" href="/favicon.svg" />

      {/* Google Verification */}
      <meta name="google-site-verification" content={site.siteMetadata.google.verificationID} />

      {/* Open Graph */}
      {location && <meta property="og:url" content={location.href} />}
      <meta property="og:image" content={seo.image} />
      <meta property="og:title" content={seo.title} key="ogtitle" />
      <meta property="og:site_name" content={site.siteMetadata.title} key="ogsitename" />
      <meta property="og:description" content={seo.description} key="ogdesc" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:creator" content={`@${site.siteMetadata.social.twitter}`} />

      {/* Additions and Overrides */}
      {children}
    </Helmet>
  )
}
