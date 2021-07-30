import React, { Component } from 'react';
import classnames from 'classnames';

import { Menu, Transition } from '@headlessui/react';
import { HiChevronDown as ChevronDown } from 'react-icons/hi';

import Link from 'components/link';

export const NavMenu = ({ as = 'div', children, className, link }) => (
	<Menu
		as={as}
		className={classnames('relative inline-block text-left testing', className)}
	>
		<Menu.Button className="inline-flex justify-center px-3 py-2 text-base tracking-wide uppercase bg-black bg-opacity-0 rounded-md text-primary-900 hover:bg-opacity-10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
			{link.name}
			<ChevronDown
				className="w-5 h-5 mt-px ml-1 text-primary-900"
				aria-hidden="true"
			/>
		</Menu.Button>

		{link?.links && (
			<Transition
				enter="transition ease-out duration-100"
				enterFrom="transform opacity-0 scale-95"
				enterTo="transform opacity-100 scale-100"
				leave="transition ease-in duration-75"
				leaveFrom="transform opacity-100 scale-100"
				leaveTo="transform opacity-0 scale-95"
			>
				<Menu.Items className="absolute left-0 z-10 mt-2 origin-top-left bg-white divide-y rounded-md shadow-lg w-44 divide-primary-100 ring-1 ring-black ring-opacity-5 focus:outline-none">
					<div className="px-1 py-1 ">
						{link.links.map((item) => (
							<Menu.Item>
								{({ active }) => (
									<Link
										className={classnames(
											active ? 'bg-primary-200' : 'text-primary-900',
											'group flex rounded items-center w-full px-3 py-2 text-base'
										)}
										partiallyActive={item.to !== `/`}
										to={item.to}
									>
										{item.name}
									</Link>
								)}
							</Menu.Item>
						))}
					</div>
				</Menu.Items>
			</Transition>
		)}

		{children}
	</Menu>
);

export default class Nav extends Component {
	static Menu = NavMenu;

	render() {
		const { children, className } = this.props;

		return <nav className={className}>{children}</nav>;
	}
}
