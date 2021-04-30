import React from 'react';
import classnames from 'classnames';

import EntryHeader from './header';
import EntryNav from './nav';
import EntryBody from './body';

export default function Entry({ title, tagline, subtitle, date, image, html }) {
	return (
		<article className={classnames('entry', 'w-full overflow-hidden')}>
			<EntryHeader
				title={title}
				tagline={tagline}
				subtitle={subtitle}
				date={date}
			/>

			<EntryNav />

			{(html || image) && <EntryBody html={html} image={image} />}
		</article>
	);
}
