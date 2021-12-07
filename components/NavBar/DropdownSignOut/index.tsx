import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/solid'

interface DropdownProp {
  username: string
  signOut: () => void
}

export default function DropdownSignOut({ username, signOut }: DropdownProp) {
  return (
    <Menu as='div' className='relative text-right'>
      <Menu.Button className='font-serif text-white hover:text-opacity-75'>
        {username}
        <ChevronDownIcon
          className='inline w-5 h-5 ml-2 -mr-1'
          aria-hidden='true'
        />
      </Menu.Button>
      <Transition>
        {/* Arrow */}
        <Transition.Child
          as={Fragment}
          enter='transition ease-in-out duration-150 transform'
          enterFrom='translate-y-full opacity-0'
          enterTo='translate-y-0 opacity-100'
          leave='transition ease-in-out duration-75 transform'
          leaveFrom='translate-y-0 opacity-100'
          leaveTo='translate-y-full opacity-0'
        >
          <div className='absolute ml-[2.5rem] c-triangle-up'></div>
        </Transition.Child>
        {/* Menu Items */}
        <Transition.Child
          as={Fragment}
          enter='transition-opacity ease-linear duration-75'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='transition-opacity ease-linear duration-100'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <Menu.Items className='absolute right-[-0.21rem] w-24 font-serif top-[2.45rem]'>
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
        </Transition.Child>
      </Transition>
    </Menu>
  )
}
