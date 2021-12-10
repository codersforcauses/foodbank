import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { Auth, signOut } from 'firebase/auth'
import { ChevronDownIcon } from '@heroicons/react/solid'

interface DropdownProp {
  username: string
  auth: Auth
}

const DropdownSignOut = ({ username, auth }: DropdownProp) => {
  return (
    <Menu as='div' className='relative flex text-xl text-right'>
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
          <div className='absolute right-[-0.13rem] top-8 c-triangle-up'></div>
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
          <Menu.Items className='absolute right-[-0.15rem] w-28 font-serif top-[3rem]'>
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={() => signOut(auth)}
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

export default DropdownSignOut
