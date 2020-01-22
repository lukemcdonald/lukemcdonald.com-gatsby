import { graphql } from 'gatsby'

export const featuredImage = graphql`
	fragment featuredImage on File {
		childImageSharp {
			fluid(maxWidth: 1280) {
				...GatsbyImageSharpFluid
			}
		}
	}
`

export const squareImage = graphql`
	fragment squareImage on File {
		childImageSharp {
			fluid(maxWidth: 200, maxHeight: 200) {
				...GatsbyImageSharpFluid
			}
		}
	}
`
