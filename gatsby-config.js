/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const config = require(`./config/site`);

module.exports = {
	siteMetadata: {
		...config,
	},
	plugins: [
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/assets/images`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/src/assets/svgs`,
				name: `svgs`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/src/content`,
				name: `content`,
			},
		},
		`gatsby-plugin-postcss`,
		{
			resolve: `gatsby-plugin-react-svg`,
			options: {
				rule: {
					include: /svgs/,
				},
			},
		},
		{
			resolve: `gatsby-plugin-robots-txt`,
			options: {
				policy: [
					{
						userAgent: `*`,
						allow: `/`,
					},
				],
			},
		},
		`gatsby-plugin-sitemap`,
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 960,
							linkImagesToOriginal: false,
						},
					},
					{
						resolve: `gatsby-remark-responsive-iframe`,
						options: {
							wrapperStyle: `margin-bottom: 1.0725rem`,
						},
					},
					`gatsby-remark-copy-linked-files`,
				],
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: config.title,
				short_name: config.shortName,
				description: config.description,
				start_url: config.pathPrefix,
				background_color: config.backgroundColor,
				theme_color: config.themeColor,
				display: 'standalone',
				icon: config.image.icon,
			},
		},
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-netlify`,
	],
};
