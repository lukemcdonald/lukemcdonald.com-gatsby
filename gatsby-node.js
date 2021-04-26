import path from 'path';
import pluralize from 'pluralize';

/**
 * Create fields from Markdown files.
 */
exports.onCreateNode = ({ node, actions }) => {
	const { createNodeField } = actions;

	if (node.internal.type === `MarkdownRemark`) {
		const directories = path.dirname(node.fileAbsolutePath).split('/');

		if (directories.includes(`content`)) {
			const { slug } = node.frontmatter;
			const type = directories[directories.indexOf(`content`) + 1] || 'pages';

			createNodeField({
				node,
				name: `slug`,
				value: slug,
			});

			createNodeField({
				node,
				name: `type`,
				value: pluralize.singular(type),
			});

			createNodeField({
				node,
				name: `path`,
				value: type === 'pages' ? `/${slug}/` : `/${type}/${slug}/`,
			});
		}
	}
};

async function createPagePages({ graphql, actions, reporter }) {
	const { data, errors } = await graphql(`
		query {
			pages: allMarkdownRemark(
				filter: {
					fields: { type: { eq: "page" } }
					frontmatter: { draft: { eq: false } }
				}
			) {
				nodes {
					fields {
						path
						slug
						type
					}
				}
			}
		}
	`);

	if (errors) {
		reporter.panicOnBuild(`Error while running GraphQL query for pages.`);
		return;
	}

	const results = (data.pages || {}).nodes || [];

	results.forEach((post) => {
		actions.createPage({
			path: post.fields.path,
			component: require.resolve(`./src/templates/page.js`),
			context: {
				slug: post.fields.slug,
				type: post.fields.type,
			},
		});
	});
}

async function createPostPages({ graphql, actions, reporter }) {
	const { data, errors } = await graphql(`
		query {
			posts: allMarkdownRemark(
				filter: {
					fields: { type: { eq: "post" } }
					frontmatter: { draft: { eq: false } }
				}
			) {
				nodes {
					fields {
						path
						slug
						type
					}
				}
			}
		}
	`);

	if (errors) {
		reporter.panicOnBuild(`Error while running GraphQL query for posts.`);
		return;
	}

	const results = (data.posts || {}).nodes || [];

	results.forEach((post) => {
		actions.createPage({
			path: post.fields.path,
			component: require.resolve(`./src/templates/post.js`),
			context: {
				slug: post.fields.slug,
				type: post.fields.type,
			},
		});
	});
}

async function createWorkPages({ graphql, actions, reporter }) {
	const { data, errors } = await graphql(`
		query {
			works: allMarkdownRemark(
				filter: {
					fields: { type: { eq: "work" } }
					frontmatter: { draft: { eq: false } }
				}
			) {
				nodes {
					fields {
						path
						slug
						type
					}
				}
			}
		}
	`);

	if (errors) {
		reporter.panicOnBuild(`Error while running GraphQL query for works.`);
		return;
	}

	const results = (data.works || {}).nodes || [];

	results.forEach((post) => {
		actions.createPage({
			path: post.fields.path,
			component: path.resolve(`./src/templates/work.js`),
			context: {
				slug: post.fields.slug,
				type: post.fields.type,
			},
		});
	});
}

export async function createPages(params) {
	await Promise.all([
		createPagePages(params),
		createPostPages(params),
		createWorkPages(params),
	]);
}
