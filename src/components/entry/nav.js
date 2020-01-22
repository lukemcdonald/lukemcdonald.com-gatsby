import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import slugify from 'slugify'

import Link from '../link'

import entryStyles from '../../assets/styles/theme/modules/entry.module.css'

const defaultLinks = [
	{
		name: `Github`,
		to: `https://github.com/lukemcdonald`,
	},
	{
		name: `Twitter`,
		to: `https://twitter.com/thelukemcdonald`,
	},
]

const EntryNav = ({ title, links }) => (
	<div
		className={`${entryStyles.entryNav} bg-white text-primary-900 px-5 py-10 sm:px-10 lg:py-8 xl:py-12`}
	>
		{title && <h1 className="font-normal mb-6 text-3xl">{title}</h1>}
		{links && (
			<div className="flex inline-flex items-center">
				{links.map((link) => (
					<Fragment key={slugify(link.name)}>
						<Link
							to={link.to}
							className="tracking-wide uppercase block border-b-2 border-transparent no-underline text-inherit tracking-wide uppercase hover:border-primary-500"
						>
							{link.name}
						</Link>
						<span className="border-b mx-4 w-24 last:hidden" />
					</Fragment>
				))}
			</div>
		)}
	</div>
)

EntryNav.defaultProps = {
	links: defaultLinks,
	title: `Connect.`,
}

EntryNav.propTypes = {
	links: PropTypes.arrayOf(PropTypes.object),
	title: PropTypes.string,
}

export default EntryNav
