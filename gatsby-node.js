const path = require(`path`)
const pluralize = require(`pluralize`)
const { paginate } = require(`gatsby-awesome-pagination`)

/**
 * Create fields from Markdown files.
 */
exports.onCreateNode = ({ node, actions }) => {
	const { createNodeField } = actions

	if (node.internal.type === `MarkdownRemark`) {
		const directories = path.dirname(node.fileAbsolutePath).split('/')

		if (directories.includes(`content`)) {
			const { slug } = node.frontmatter
			const type = directories[directories.indexOf(`content`) + 1] || 'pages'

			createNodeField({
				node,
				name: `slug`,
				value: slug,
			})

			createNodeField({
				node,
				name: `type`,
				value: pluralize.singular(type),
			})

			createNodeField({
				node,
				name: `path`,
				value: type === 'pages' ? `/${slug}/` : `/${type}/${slug}/`,
			})
		}
	}
}

/**
 * Create web pages for Posts.
 */
exports.createPages = async ({ graphql, actions, reporter }) => {
	const { createPage } = actions

	// Query data.
	const result = await graphql(`
		query {
			pagesQuery: allMarkdownRemark(
				filter: {
					fields: { type: { eq: "page" } }
					frontmatter: { draft: { eq: false } }
				}
			) {
				edges {
					node {
						fields {
							path
							slug
							type
						}
					}
				}
			}
			postsQuery: allMarkdownRemark(
				filter: {
					fields: { type: { eq: "post" } }
					frontmatter: { draft: { eq: false } }
				}
			) {
				edges {
					node {
						fields {
							path
							slug
							type
						}
					}
				}
			}
			worksQuery: allMarkdownRemark(
				filter: {
					fields: { type: { eq: "work" } }
					frontmatter: { draft: { eq: false } }
				}
			) {
				edges {
					node {
						fields {
							path
							slug
							type
						}
					}
				}
			}
		}
	`)

	// Report errors.
	if (result.errors) {
		reporter.panicOnBuild(`Error while running GraphQL query.`)
	}

	// Define content types.
	const pages = result.data.pagesQuery.edges
	const posts = result.data.postsQuery.edges
	const works = result.data.worksQuery.edges

	// Define content templates.
	const pageTemplate = path.resolve(`./src/templates/page.js`)
	const postTemplate = path.resolve(`./src/templates/post.js`)
	const postsTemplate = path.resolve(`./src/templates/posts.js`)
	const workTemplate = path.resolve(`./src/templates/work.js`)

	// Create content pages.
	pages.forEach(({ node }) =>
		createPage({
			path: node.fields.path,
			component: pageTemplate,
			context: {
				slug: node.fields.slug,
				type: node.fields.type,
			},
		})
	)

	posts.forEach(({ node }, index) => {
		const previous = index === posts.length - 1 ? null : posts[index + 1].node
		const next = index === 0 ? null : posts[index - 1].node

		createPage({
			path: node.fields.path,
			component: postTemplate,
			context: {
				slug: node.fields.slug,
				type: node.fields.type,
				previous,
				next,
			},
		})
	})

	paginate({
		createPage,
		items: posts,
		itemsPerPage: 1,
		component: postsTemplate,
		pathPrefix: ({ pageNumber }) =>
			pageNumber === 0 ? `/posts` : `/posts/page`,
	})

	works.forEach(({ node }) =>
		createPage({
			path: node.fields.path,
			component: workTemplate,
			context: {
				slug: node.fields.slug,
				type: node.fields.type,
			},
		})
	)
}
