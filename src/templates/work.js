import React from 'react';
import { graphql } from 'gatsby';

import SEO from 'components/seo';
import Entry from 'components/entry';

export default function SingleWorkPage({ data, location }) {
	const { work } = data;

	return (
		<>
			<SEO
				title={work.frontmatter.title}
				description={work.frontmatter.description || work.excerpt}
				location={location}
			/>

			<Entry
				title={work.frontmatter.title}
				subtitle={work.frontmatter.subtitle}
				html={work.html}
				image={work.frontmatter.image || ''}
			/>
		</>
	);
}

export const query = graphql`
	query ($slug: String!) {
		work: markdownRemark(fields: { slug: { eq: $slug } }) {
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
