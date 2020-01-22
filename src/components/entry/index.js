import React from 'react'
import PropTypes from 'prop-types'

import entryStyles from '../../assets/styles/theme/modules/entry.module.css'

import EntryHeader from './header'
import EntryNav from './nav'
import EntryBody from './body'

const Entry = ({ title, subtitle, date, image, html }) => (
	<article className={`${entryStyles.entry} w-full overflow-hidden`}>
		<EntryHeader title={title} subtitle={subtitle} date={date} />
		<EntryNav />
		{(html || image) && <EntryBody html={html} image={image} />}
	</article>
)

Entry.defaultProps = {
	subtitle: ``,
	date: ``,
	image: {},
	html: ``,
}

Entry.propTypes = {
	title: PropTypes.string.isRequired,
	subtitle: PropTypes.string,
	date: PropTypes.string,
	image: PropTypes.object,
	html: PropTypes.string,
}

export default Entry
