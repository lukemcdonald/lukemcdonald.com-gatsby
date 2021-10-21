import { graphql } from 'gatsby'

export const FeaturedImage = graphql`
  fragment FeaturedImage on File {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH, placeholder: NONE, transformOptions: { grayscale: true })
    }
  }
`
