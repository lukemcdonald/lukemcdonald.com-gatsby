import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import slugify from 'slugify'

import Link from './link'

import headerStyles from '../assets/styles/theme/modules/header.module.css'

import Logo from '../assets/svgs/logo.svg'

const menuLinks = [
	{
		name: 'Work',
		to: '#',
		links: [
			{
				name: 'AudioTheme',
				to: '/work/audiotheme',
			},
			{
				name: 'Blazer Six',
				to: '/work/blazer-six',
			},
			{
				name: 'Cedaro',
				to: '/work/cedaro',
			},
		],
	},
	{
		name: 'Play',
		to: '#',
		links: [
			{
				name: 'TREAD Talks',
				to: 'https://gettreadtalks.com/',
			},
		],
	},
]

const Header = () => {
	const data = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					title
				}
			}
		}
	`)

	const { title } = data.site.siteMetadata

	return (
		<header
			className={`${headerStyles.siteHeader} absolute top-0 left-0 flex items-center p-5 w-1/2 z-50`}
		>
			<Link
				to="/"
				className="bg-white inline-flex items-center no-underline relative text-white whitespace-no-wrap hover:shadow-lg"
			>
				<Logo className="fill-current bg-primary-900 h-16 w-16 p-4" />
				<h1 className="transition-all duration-150 font-bold overflow-hidden px-0 text-xl text-primary-900 tracking-wide uppercase">
					{title}
				</h1>
			</Link>

			<nav className="px-3 transition-all duration-300">
				<ul className="flex">
					{menuLinks.map((link) => (
						<li
							className="hover:text-white group block relative hover:cursor-pointer"
							key={slugify(link.name)}
						>
							<Link
								activeClassName="text-white"
								className=" tracking-wide uppercase block p-2"
								partiallyActive={`/` !== link.to}
								to={link.to}
							>
								{link.name}
							</Link>

							{link.links && (
								<ul
									className="group-hover:visible group-hover:opacity-100 group-hover:block hidden invisible opacity-0 absolute left-0 transition-all duration-500 transform -translate-x-1/2 bg-white rounded py-2 shadow-lg w-40 min-w-full"
									style={{ left: '50%' }}
								>
									{link.links.map((item) => (
										<li
											className="block clear-both w-full duration-500 hover:cursor-pointer text-primary-900"
											key={slugify(item.name)}
										>
											<Link
												activeClassName="text-primary-700"
												className="px-4 py-1 hover:text-primary-700 block"
												partiallyActive
												to={item.to}
											>
												{item.name}
											</Link>
										</li>
									))}
								</ul>
							)}
						</li>
					))}
				</ul>
			</nav>
		</header>
	)
}

export default Header
