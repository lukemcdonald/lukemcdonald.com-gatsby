/**
 * @link Gallery of images: https://egghead.io/lessons/gatsby-add-multiple-images-from-a-directory-with-gatsby-image
 */

import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Entry from '../components/entry'

const IndexPage = ({ data, location }) => {
	const post = data.markdownRemark

	return (
		<Layout>
			<SEO title="Home" location={location} />

			<Entry
				title={post.frontmatter.title}
				subtitle={post.frontmatter.subtitle}
				html={post.html}
				image={post.frontmatter.image}
			/>
		</Layout>
	)
}

export default IndexPage

export const query = graphql`
	query {
		markdownRemark(fields: { slug: { eq: "home" } }) {
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
