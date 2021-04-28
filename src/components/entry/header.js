import React from 'react';
import classnames from 'classnames';

import Mountains from '../../assets/svgs/mountains.svg';

export default function EntryHeader({ title, subtitle, date }) {
	return (
		<header
			className={classnames(
				'entry__header',
				'relative overflow-hidden bg-primary-500 justify-center flex flex-col px-5 pt-32 pb-10 text-primary-900 sm:px-10 xl:py-20'
			)}
			style={{
				backgroundSize: '120%',
			}}
		>
			<div className="relative z-10">
				<h1 className="mb-6 text-5xl font-semibold">{title}</h1>
				{subtitle && (
					<div
						className="text-lg leading-normal"
						dangerouslySetInnerHTML={{ __html: subtitle }}
					/>
				)}
				{date && <div className="text-lg leading-normal">{date}</div>}
			</div>

			<Mountains className="absolute bottom-0 left-0 z-0" />
		</header>
	);
}
