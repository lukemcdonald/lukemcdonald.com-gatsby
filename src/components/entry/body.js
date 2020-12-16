import React from 'react';
import Img from 'gatsby-image';
import classnames from 'classnames';

import entryStyles from '../../assets/css/theme/modules/entry.module.css';

export default function EntryBody({ image, html }) {
	return (
		<div className={`${entryStyles.entryBody} bg-primary-500`}>
			{image && (
				<figure
					className={classnames(
						'relative bg-brand-light fill-current',
						entryStyles.entryMedia
					)}
				>
					<Img
						className="block xs:w-full xs:h-full xs:object-cover lg:absolute lg:pin-t lg:pin-l lg:w-full lg:h-full"
						fluid={image.childImageSharp.fluid}
					/>
				</figure>
			)}

			{html && (
				<div
					className={classnames(
						'bg-primary-900 flex flex-col justify-center px-5 py-10 text-lg text-white relative leading-normal xs:px-10',
						entryStyles.entryContent
					)}
					dangerouslySetInnerHTML={{ __html: html }}
				/>
			)}
		</div>
	);
}
