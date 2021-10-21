import React from 'react'
import { graphql } from 'gatsby'

import SEO from 'components/seo'
import Entry from 'components/entry'

export default function ErrorPage({ data, location }) {
  const { error } = data

  return (
    <>
      <SEO title="404: Not Found" location={location} />

      <Entry title={error.frontmatter.title} subtitle={error.frontmatter.subtitle} image={error.frontmatter.image} />
    </>
  )
}

export const query = graphql`
  query {
    error: markdownRemark(fields: { slug: { eq: "404" } }) {
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        subtitle
        description
        image {
          ...FeaturedImage
        }
      }
    }
  }
`
