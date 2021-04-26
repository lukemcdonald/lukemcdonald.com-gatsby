import { graphql } from 'gatsby';

export const FeaturedImage = graphql`fragment FeaturedImage on File {
  childImageSharp {
    gatsbyImageData(layout: FULL_WIDTH)
  }
}
`;

export const SquareImage = graphql`fragment SquareImage on File {
  childImageSharp {
    gatsbyImageData(width: 200, height: 200, layout: CONSTRAINED)
  }
}
`;
