import React from 'react'
import classnames from 'classnames'
import { StaticImage } from 'gatsby-plugin-image'

import Header from 'components/header'
import Main from 'components/main'

export default function Layout({ children }) {
  return (
    <div className="lg:grid">
      <StaticImage
        className="hidden lg:block lg:max-h-screen lg:opacity-20 lg:overflow-hidden"
        style={{
          gridArea: '1/1',
        }}
        src="../assets/images/landscape-3.jpg"
        alt="Background"
        layout="fullWidth"
        transformOptions={{
          grayscale: true,
        }}
      />

      <div
        className="lg:bg-shadow-lg place-items-center text-primary-900 lg:relative lg:flex lg:items-center lg:justify-center lg:min-h-screen"
        style={{
          gridArea: '1/1',
        }}
      >
        <div className={classnames('site', 'bg-white m-auto relative lg:max-w-screen-xl lg:w-11/12 lg:max-h-site')}>
          <Header />
          <Main>{children}</Main>
        </div>
      </div>
    </div>
  )
}

// export const query = graphql`
//   {
//     bgImage: file(relativePath: { eq: "billy-graham-preaching-header.jpg" }) {
//       childImageSharp {
//         gatsbyImageData(placeholder: TRACED_SVG, transformOptions: { grayscale: true }, layout: FULL_WIDTH)
//       }
//     }
//   }
// `
