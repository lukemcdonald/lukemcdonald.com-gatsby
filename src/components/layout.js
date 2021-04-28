import React from 'react';
import classnames from 'classnames';
import { StaticImage } from 'gatsby-plugin-image';

import Header from './header';
import Main from './main';

export default function Layout({ children }) {
	return (
		<div className="lg:grid">
			<StaticImage
				className="hidden lg:max-h-screen lg:overflow-hidden lg:opacity-20 lg:block"
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
				className="text-primary-900 lg:bg-shadow-lg lg:flex lg:items-center lg:justify-center lg:min-h-screen lg:relative place-items-center"
				style={{
					gridArea: '1/1',
				}}
			>
				<div
					className={classnames(
						'site',
						'bg-white m-auto relative lg:max-w-screen-xl lg:w-11/12'
					)}
				>
					<Header />
					<Main>{children}</Main>
				</div>
			</div>
		</div>
	);
}

// export const query = graphql`
// 	{
// 		bgImage: file(relativePath: { eq: "billy-graham-preaching-header.jpg" }) {
// 			childImageSharp {
// 				gatsbyImageData(
// 					placeholder: TRACED_SVG
// 					transformOptions: { grayscale: true }
// 					layout: FULL_WIDTH
// 				)
// 			}
// 		}
// 	}
// `;
