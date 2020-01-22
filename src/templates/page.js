import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Entry from '../components/entry'

const PageTemplate = ({ data, location }) => {
	const post = data.markdownRemark

	return (
		<Layout>
			<SEO
				title={post.frontmatter.title}
				description={post.frontmatter.description || post.excerpt}
				location={location}
				image={post.frontmatter.image.fluid.src || ''}
			/>

			<Entry
				title={post.frontmatter.title}
				subtitle={post.frontmatter.subtitle}
				html={post.html}
				image={post.frontmatter.image}
			/>
		</Layout>
	)
}

export default PageTemplate

export const query = graphql`
	query PageBySlug($slug: String!) {
		markdownRemark(fields: { slug: { eq: $slug } }) {
			excerpt(pruneLength: 160)
			html
			frontmatter {
				title
				subtitle
				description
				image {
					...featuredImage
				}
			}
		}
	}
`
