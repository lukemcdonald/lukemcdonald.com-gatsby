import React from 'react'
import Img from 'gatsby-image'

import entryStyles from '../../assets/styles/theme/modules/entry.module.css'

const EntryBody = ({ image, html }) => (
	<div className={`${entryStyles.entryBody} bg-primary-500`}>
		{image && Object.keys(image).length !== 0 && (
			<figure
				className={`${entryStyles.entryMedia} relative bg-brand-light fill-current`}
			>
				<Img
					className={`${entryStyles.entryImg} block xs:w-full xs:h-full lg:absolute lg:pin-t lg:pin-l lg:w-full lg:h-full`}
					fluid={image.childImageSharp.fluid}
				/>
			</figure>
		)}

		{html && (
			<div
				className={`${entryStyles.entryContent} bg-primary-900 flex flex-col justify-center px-5 py-10 text-lg text-white relative leading-normal xs:px-10`}
				dangerouslySetInnerHTML={{ __html: html }}
			/>
		)}
	</div>
)

export default EntryBody
