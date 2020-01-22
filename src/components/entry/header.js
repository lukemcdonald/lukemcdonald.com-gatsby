import React from 'react'

import entryStyles from '../../assets/styles/theme/modules/entry.module.css'
import Mountains from '../../assets/svgs/mountains.svg'

const EntryHeader = ({ title, subtitle, date }) => (
	<header
		className={`${entryStyles.entryHeader} relative overflow-hidden bg-primary-500 justify-center flex flex-col px-5 pt-32 pb-10 text-primary-900 sm:px-10 xl:py-20`}
		style={{
			backgroundSize: '120%',
		}}
	>
		<div className="relative z-10">
			<h1 className="font-semibold mb-6 text-5xl">{title}</h1>
			{subtitle && (
				<div
					className="text-lg leading-normal"
					dangerouslySetInnerHTML={{ __html: subtitle }}
				/>
			)}
			{date && <div className="text-lg leading-normal">{date}</div>}
		</div>
		<Mountains className="absolute left-0 bottom-0 z-0" />
	</header>
)

export default EntryHeader
