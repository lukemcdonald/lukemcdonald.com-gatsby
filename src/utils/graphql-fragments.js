import { graphql } from 'gatsby';

export const FeaturedImage = graphql`
	fragment FeaturedImage on File {
		childImageSharp {
			fluid(maxWidth: 1280) {
				...GatsbyImageSharpFluid
			}
		}
	}
`;

export const SquareImage = graphql`
	fragment SquareImage on File {
		childImageSharp {
			fluid(maxWidth: 200, maxHeight: 200) {
				...GatsbyImageSharpFluid
			}
		}
	}
`;
