import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Entry from '../components/entry'
import PostNav from '../components/post-nav'

const PostTemplate = ({ data, location, pageContext }) => {
	const post = data.markdownRemark

	return (
		<Layout>
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
				image={post.frontmatter.image}
			/>

			<PostNav context={pageContext} />
		</Layout>
	)
}

export default PostTemplate

export const query = graphql`
	query PostBySlug($slug: String!) {
		markdownRemark(fields: { slug: { eq: $slug } }) {
			excerpt(pruneLength: 160)
			html
			frontmatter {
				title
				date(formatString: "MMMM DD, YYYY")
				description
			}
		}
	}
`
