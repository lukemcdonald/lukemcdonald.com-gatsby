import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import PostsNav from '../components/posts-nav'

const PostsPage = ({ data, location, pageContext }) => {
	const posts = data.allMarkdownRemark.edges

	return (
		<Layout>
			<SEO title="Posts" location={location} />

			<section>
				<h1>Posts</h1>

				<ol>
					{posts.map(({ node: post }) => (
						<li key={post.fields.slug}>
							<h2>
								<Link to={`${post.fields.path}`}>{post.frontmatter.title}</Link>
							</h2>
							<p>{post.frontmatter.date}</p>
						</li>
					))}
				</ol>
			</section>

			<PostsNav context={pageContext} />
		</Layout>
	)
}

export default PostsPage

export const query = graphql`
	query PostsWithNav($limit: Int!, $skip: Int!) {
		allMarkdownRemark(
			filter: {
				fields: { type: { eq: "post" } }
				frontmatter: { draft: { eq: false } }
			}
			sort: { fields: [frontmatter___date], order: DESC }
			limit: $limit
			skip: $skip
		) {
			edges {
				node {
					excerpt
					fields {
						path
						slug
					}
					frontmatter {
						title
						date
					}
				}
			}
		}
	}
`
