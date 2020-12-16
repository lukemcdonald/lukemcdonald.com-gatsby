import React from 'react';
import { graphql } from 'gatsby';

import SEO from '../components/seo';
import Entry from '../components/entry';

export default function IndexPage({ data, location }) {
	const { home } = data;

	return (
		<>
			<SEO title="Home" location={location} />

			<Entry
				title={home.frontmatter.title}
				subtitle={home.frontmatter.subtitle}
				html={home.html}
				image={home.frontmatter.image}
			/>
		</>
	);
}

export const query = graphql`
	query {
		home: markdownRemark(fields: { slug: { eq: "home" } }) {
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
`;
