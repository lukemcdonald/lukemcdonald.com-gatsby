import React from 'react';
import classnames from 'classnames';

import { getRandomInt } from '../utils/index';

import Header from './header';
import Main from './main';

import styles from '../assets/css/theme/modules/layout.module.css';

const images = require.context('../assets/images', true);
const bgImage = images(`./landscape-${getRandomInt(3, 1)}.jpg`);

export default function Layout({ children }) {
	return (
		<div className="w-full text-primary-900 lg:bg-shadow-lg lg:flex lg:items-center lg:justify-center lg:min-h-screen lg:relative">
			<div
				className="absolute inset-0 bg-cover"
				style={{
					backgroundBlendMode: 'luminosity',
					backgroundImage: `url(${bgImage})`,
					content: '',
					filter: 'gray',
					opacity: 0.15,
				}}
			/>

			<div
				className={classnames(
					'bg-white m-auto relative lg:max-w-screen-xl lg:w-11/12',
					styles.site
				)}
			>
				<Header />
				<Main>{children}</Main>
			</div>
		</div>
	);
}
