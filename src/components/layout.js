import React from 'react'

import { getRandomInt } from '../utils/index'

import Header from './header'
import Main from './main'

import layoutStyles from '../assets/styles/theme/modules/layout.module.css'

const images = require.context('../assets/images', true)
const bgImage = images(`./landscape-${getRandomInt(3, 1)}.jpg`)

const Layout = ({ children }) => (
	<div className="text-primary-900 w-full lg:bg-shadow-lg lg:flex lg:items-center lg:justify-center lg:min-h-screen lg:relative">
		<div
			className="absolute bg-cover inset-0"
			style={{
				backgroundBlendMode: 'luminosity',
				backgroundImage: `url(${bgImage})`,
				content: '',
				filter: 'gray',
				opacity: 0.15,
			}}
		/>
		<div
			className={`${layoutStyles.site} bg-white m-auto relative lg:max-w-screen-xl lg:w-11/12`}
		>
			<Header />
			<Main className="absolute pin lg:flex">{children}</Main>
		</div>
	</div>
)

export default Layout
