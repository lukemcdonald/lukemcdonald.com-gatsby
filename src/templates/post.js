import React from 'react';
import { graphql } from 'gatsby';

import SEO from '../components/seo';
import Entry from '../components/entry';
import PostNav from '../components/postNav';

export default function SinglePostPage({ data, location, pageContext }) {
	const { post } = data;

	return (
		<>
			<SEO
				title={post.frontmatter.title}
				description={post.frontmatter.description || post.excerpt}
				location={location}
			/>

			<Entry
				title={post.frontmatter.title}
				subtitle={post.frontmatter.subtitle}
				date={post.frontmatter.date}
				html={post.html}
				image={post.frontmatter.image || ''}
			/>

			<PostNav context={pageContext} />
		</>
	);
}

export const query = graphql`
	query($slug: String!) {
		post: markdownRemark(fields: { slug: { eq: $slug } }) {
			excerpt(pruneLength: 160)
			html
			frontmatter {
				title
				date(formatString: "MMMM DD, YYYY")
				description
			}
		}
	}
`;
