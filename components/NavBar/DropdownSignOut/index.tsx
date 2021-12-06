import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/solid'

interface DropdownProp {
  username: string
  signOut: () => void
}

export default function DropdownSignOut({ username, signOut }: DropdownProp) {
  return (
    // <div className='text-right'>
    <Menu as='div' className='relative text-right'>
      <Menu.Button className='font-serif text-white hover:text-opacity-75'>
        {username}
        <span>
          <ChevronDownIcon
            className='inline w-5 h-5 ml-2 -mr-1'
            aria-hidden='true'
          />
        </span>
      </Menu.Button>
      <Transition
        as={Fragment}
        enter='transition ease-out duration-100'
        enterFrom='transform opacity-0'
        enterTo='transform opacity-100'
        leave='transition ease-in duration-75'
        leaveFrom='transform opacity-100'
        leaveTo='transform opacity-0'
      >
        <div className='ml-5 overflow-hidden w-7'>
          <div className='w-5 h-5 origin-bottom-left transform rotate-45 bg-orange'></div>
        </div>
      </Transition>
      <Transition
        as={Fragment}
        enter='transition ease-out duration-100'
        enterFrom='transform opacity-0'
        enterTo='transform opacity-100'
        leave='transition ease-in duration-75'
        leaveFrom='transform opacity-100'
        leaveTo='transform opacity-0'
      >
        <Menu.Items className='absolute right-0 w-24 font-serif rounded-md'>
          <Menu.Item>
            {({ active }) => (
              <button
                onClick={() => signOut()}
                className={`${
                  active ? 'text-opacity-75' : ''
                } text-white rounded-md items-center px-2 py-2 bg-orange`}
              >
                SIGN OUT
              </button>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
    // </div>
  )
}
