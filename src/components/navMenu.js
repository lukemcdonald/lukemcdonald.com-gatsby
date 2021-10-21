import React, { Component } from 'react'
import classnames from 'classnames'

import { Menu, Transition } from '@headlessui/react'
import { HiChevronDown as ChevronDown } from 'react-icons/hi'

import Link from 'components/link'

export const NavMenu = ({ as = 'div', children, className, link }) => (
  <Menu as={as} className={classnames('relative inline-block text-left testing', className)}>
    <Menu.Button className="inline-flex justify-center px-3 py-2 text-primary-900 text-base tracking-wide bg-black bg-opacity-0 hover:bg-opacity-10 rounded-md focus:outline-none uppercase focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
      {link.name}
      <ChevronDown className="ml-1 mt-px w-5 h-5 text-primary-900" aria-hidden="true" />
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
        <Menu.Items className="absolute z-10 left-0 mt-2 w-44 bg-white rounded-md focus:outline-none shadow-lg divide-primary-100 divide-y origin-top-left ring-1 ring-black ring-opacity-5">
          <div className="px-1 py-1">
            {link.links.map(item => (
              <Menu.Item>
                {({ active }) => (
                  <Link
                    className={classnames(
                      active ? 'bg-primary-200' : 'text-primary-900',
                      'group flex rounded items-center w-full px-3 py-2 text-base',
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
)

export default class Nav extends Component {
  static Menu = NavMenu

  render() {
    const { children, className } = this.props

    return <nav className={className}>{children}</nav>
  }
}
