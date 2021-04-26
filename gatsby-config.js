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
    `gatsby-plugin-postcss`,
		`gatsby-plugin-react-helmet`,
    `gatsby-plugin-robots-txt`,
		`gatsby-plugin-sitemap`,
    `gatsby-plugin-image`,
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-netlify`,
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
		{
			resolve: `gatsby-plugin-react-svg`,
			options: {
				rule: {
					include: /svgs/,
				},
			},
		},
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					`gatsby-remark-responsive-iframe`,
					`gatsby-remark-copy-linked-files`,
				],
			},
		},
	],
};
