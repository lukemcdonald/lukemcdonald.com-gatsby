import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Entry from '../components/entry'

const ErrorPage = ({ data, location }) => {
	const post = data.markdownRemark

	return (
		<Layout>
			<SEO title="404: Not Found" location={location} />

			<Entry
				title={post.frontmatter.title}
				subtitle={post.frontmatter.subtitle}
				image={post.frontmatter.image}
			/>
		</Layout>
	)
}

export default ErrorPage

export const query = graphql`
	query {
		markdownRemark(fields: { slug: { eq: "404" } }) {
			excerpt(pruneLength: 160)
			html
			frontmatter {
				title
				subtitle
				image {
					...featuredImage
				}
			}
		}
	}
`
