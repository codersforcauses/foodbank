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
        <ChevronDownIcon
          className='inline w-5 h-5 ml-2 -mr-1'
          aria-hidden='true'
        />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter='transition ease-out duration-100'
        enterFrom='transform scale-50'
        enterTo='transform scale-100'
        leave='transition ease-in duration-75'
        leaveFrom='transform scale-100'
        leaveTo='transform scale-95'
      >
        <div className='absolute ml-[2.5rem] c-triangle-up'></div>
      </Transition>
      <Transition
        as={Fragment}
        enter='transition ease-out duration-100'
        enterFrom='transform scale-95'
        enterTo='transform scale-100'
        leave='transition ease-in duration-75'
        leaveFrom='transform scale-100'
        leaveTo='transform scale-95'
      >
        <Menu.Items className='absolute right-[-0.2095rem] w-24 font-serif top-[2.45rem]'>
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
