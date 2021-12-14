import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/solid'

interface DropdownProp {
  username: string
  signOut: () => void
}

export default function DropdownSignOut1({ username, signOut }: DropdownProp) {
  return (
    <div className='w-56 text-right'>
      <Menu as='div' className='relative inline-block text-left'>
        <div>
          <Menu.Button className='inline-flex justify-center w-full px-4 py-1 font-serif text-sm font-medium text-white rounded-md hover:text-opacity-75 bg-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'>
            {username}
            <ChevronDownIcon
              className='w-5 h-5 ml-2 -mr-1'
              aria-hidden='true'
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter='transition ease-out duration-100'
          enterFrom='transform opacity-0 scale-95'
          enterTo='transform opacity-100 scale-100'
          leave='transition ease-in duration-75'
          leaveFrom='transform opacity-100 scale-100'
          leaveTo='transform opacity-0 scale-95'
        >
          <Menu.Items className='absolute right-0 w-56 mt-2 font-serif origin-top-right bg-white divide-y rounded-md shadow-lg divide-grey ring-1 ring-black ring-opacity-5 focus:outline-none'>
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={() => signOut()}
                  className={`${
                    active
                      ? 'bg-primary text-white'
                      : 'text-primary bg-grey-light'
                  } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                >
                  Sign-Out
                </button>
              )}
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}