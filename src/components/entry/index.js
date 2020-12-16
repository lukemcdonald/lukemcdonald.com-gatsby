import React from 'react';
import classnames from 'classnames';

import entryStyles from '../../assets/css/theme/modules/entry.module.css';

import EntryHeader from './header';
import EntryNav from './nav';
import EntryBody from './body';

export default function Entry({ title, subtitle, date, image, html }) {
	return (
		<article
			className={classnames('w-full overflow-hidden', entryStyles.entry)}
		>
			<EntryHeader title={title} subtitle={subtitle} date={date} />

			<EntryNav />

			{(html || image) && <EntryBody html={html} image={image} />}
		</article>
	);
}
