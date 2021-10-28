import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import classnames from 'classnames'

export default function EntryBody({ image, html }) {
  return (
    <div className="entry__body bg-primary-500">
      {image && (
        <figure className={classnames('entry__media', 'bg-primary-500 relative fill-current')}>
          <GatsbyImage
            image={image.childImageSharp.gatsbyImageData}
            className="block lg:pin-t lg:pin-l xs:w-full xs:h-full xs:object-cover lg:absolute lg:w-full lg:h-full"
          />
        </figure>
      )}

      {html && (
        <div
          className={classnames(
            'entry__content',
            'bg-primary-900 flex flex-col justify-center px-5 py-10 text-lg text-white relative leading-normal xs:px-10 ',
          )}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      )}
    </div>
  )
}
