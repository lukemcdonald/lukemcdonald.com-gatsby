import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import slugify from 'slugify';
import classnames from 'classnames';

import Link from './link';

import Logo from '../assets/svgs/logo.svg';

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
];

export default function Header() {
	const data = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					title
				}
			}
		}
	`);

	const { site } = data;

	return (
		<header
			className={classnames(
				'absolute top-0 left-0 flex items-center p-5 w-1/2 z-50',
				'site-header'
			)}
		>
			<Link
				to="/"
				className="relative inline-flex items-center text-white no-underline bg-white whitespace-nowrap hover:shadow-lg"
			>
				<Logo className="w-16 h-16 p-4 fill-current bg-primary-900" />

				<h1 className="px-0 overflow-hidden text-xl font-bold tracking-wide uppercase transition-all duration-150 text-primary-900">
					{site.siteMetadata.title}
				</h1>
			</Link>

			<nav className="px-3 transition-all duration-300">
				<ul className="flex">
					{menuLinks.map((link) => (
						<li
							className="relative block hover:text-white group hover:cursor-pointer"
							key={slugify(link.name)}
						>
							<Link
								activeClassName="text-white"
								className="block p-2 tracking-wide uppercase"
								partiallyActive={link.to !== `/`}
								to={link.to}
							>
								{link.name}
							</Link>

							{link?.links && (
								<ul
									className="absolute left-0 invisible hidden w-40 min-w-full py-2 transition-all duration-500 transform -translate-x-1/2 bg-white rounded shadow-lg opacity-0 group-hover:visible group-hover:opacity-100 group-hover:block"
									style={{ left: '50%' }}
								>
									{link.links.map((item) => (
										<li
											className="block clear-both w-full duration-500 hover:cursor-pointer text-primary-900"
											key={slugify(item.name)}
										>
											<Link
												activeClassName="text-primary-700"
												className="block px-4 py-1 hover:text-primary-700"
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
	);
}
