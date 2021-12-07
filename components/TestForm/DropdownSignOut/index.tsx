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
    <Menu as='div' className='relative w-56 text-right'>
      <Menu.Button className='font-serif text-black hover:text-opacity-75'>
        {username}
        <ChevronDownIcon
          className='inline w-5 h-5 ml-2 -mr-1'
          aria-hidden='true'
        />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter='transition ease-out duration-100'
        enterFrom='transform opacity-0 scale-95'
        enterTo='transform opacity-100 scale-100'
        leave='transition ease-in duration-75'
        leaveFrom='transform opacity-100 scale-100'
        leaveTo='transform opacity-0 scale-95'
      >
        <div className='absolute ml-5 c-triangle-up'></div>
      </Transition>
      <Transition
        as={Fragment}
        enter='transition ease-out duration-100'
        enterFrom='transform opacity-0 scale-95'
        enterTo='transform opacity-100 scale-100'
        leave='transition ease-in duration-75'
        leaveFrom='transform opacity-100 scale-100'
        leaveTo='transform opacity-0 scale-95'
      >
        <Menu.Items className='absolute right-0 w-24 font-serif rounded-md top-[2.8rem]'>
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
