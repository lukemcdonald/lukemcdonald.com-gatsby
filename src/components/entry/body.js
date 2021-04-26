import React from 'react';
import { GatsbyImage } from "gatsby-plugin-image";
import classnames from 'classnames';

export default function EntryBody({ image, html }) {
	return (
        <div className="entry__body bg-primary-500">
			{image && (
				<figure
					className={classnames(
						'relative bg-brand-light fill-current',
						'entry__media'
					)}
				>
					<GatsbyImage
                        image={image.childImageSharp.gatsbyImageData}
                        className="block xs:w-full xs:h-full xs:object-cover lg:absolute lg:pin-t lg:pin-l lg:w-full lg:h-full" />
				</figure>
			)}

			{html && (
				<div
					className={classnames(
						'bg-primary-900 flex flex-col justify-center px-5 py-10 text-lg text-white relative leading-normal xs:px-10',
						'entry__content'
					)}
					dangerouslySetInnerHTML={{ __html: html }}
				/>
			)}
		</div>
    );
}
