import React from 'react';
import { graphql } from 'gatsby';

import SEO from '../components/seo';
import Entry from '../components/entry';

export default function SinglePage({ data, location }) {
	const { page } = data;

	return (
		<>
			<SEO
				title={page.frontmatter.title}
				description={page.frontmatter.description || page.excerpt}
				location={location}
				image={page.frontmatter.image?.childImageSharp.fluid.src || ''}
			/>

			<Entry
				title={page.frontmatter.title}
				subtitle={page.frontmatter.subtitle}
				html={page.html}
				image={page.frontmatter.image || ''}
			/>
		</>
	);
}

export const query = graphql`
	query($slug: String!) {
		page: markdownRemark(fields: { slug: { eq: $slug } }) {
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
