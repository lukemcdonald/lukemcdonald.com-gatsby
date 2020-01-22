/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const SEO = ({ description, image, keywords, lang, meta, title, location }) => {
	const {
		site: { siteMetadata: config },
	} = useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						title
						tagline
						description
						siteUrl
						author {
							name
						}
						google {
							verificationID
						}
					}
				}
			}
		`
	)

	const seo = {
		description: description || config.description,
		image: image || config.siteUrl + config.image,
		title: title || '',
		url: config.siteUrl.concat(location.pathname || '/'),
	}

	return (
		<Helmet
			htmlAttributes={{
				lang,
			}}
			title={seo.title || ''}
			titleTemplate={`%s | ${config.title}`}
			meta={[
				{
					name: `description`,
					content: seo.description,
				},
				{
					property: `og:title`,
					content: seo.title,
				},
				{
					property: `og:description`,
					content: seo.description,
				},
				{
					property: `og:type`,
					content: `website`,
				},
				{
					property: 'og:url',
					content: seo.url,
				},
				{
					name: `twitter:card`,
					content: `summary`,
				},
				{
					name: `twitter:creator`,
					content: config.author.name,
				},
				{
					name: `twitter:title`,
					content: seo.title,
				},
				{
					name: `twitter:description`,
					content: seo.description,
				},
			].concat(
				config.google.verificationID
					? {
							name: 'google-site-verification',
							content: config.google.verificationID,
					  }
					: [],
				keywords.length > 0
					? {
							name: 'keywords',
							content: keywords.join(', '),
					  }
					: [],
				meta
			)}
		/>
	)
}

SEO.defaultProps = {
	description: ``,
	keywords: ``,
	lang: `en`,
	meta: [],
}

SEO.propTypes = {
	description: PropTypes.string,
	keywords: PropTypes.string,
	lang: PropTypes.string,
	meta: PropTypes.arrayOf(PropTypes.object),
	title: PropTypes.string.isRequired,
}

export default SEO
