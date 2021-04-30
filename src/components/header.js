import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import classnames from 'classnames';

import Link from './link';
import Nav from './navMenu';

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
				'absolute top-0 left-0 flex items-center p-5 w-full z-50 lg:w-1/2 ',
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

			<Nav className="px-4" links={menuLinks}>
				{menuLinks.map((link) => (
					<Nav.Menu key={link.name} link={link} />
				))}
			</Nav>
		</header>
	);
}
