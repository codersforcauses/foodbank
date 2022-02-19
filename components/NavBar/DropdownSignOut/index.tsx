import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'

import Svg from '@components/Custom/Svg'
import { useFirebase } from '@components/FirebaseContext/context'

const DropdownSignOut = () => {
  const { user, signOutClearDataUnlockGrid } = useFirebase()
  return (
    <Menu as='div' className='relative flex text-xl text-right'>
      <Menu.Button className='px-3 ml-8 font-serif text-white rounded hover:opacity-75 focus:outline-none focus:ring focus:ring-teal/50'>
        <span className='capitalize'>{user?.displayName}</span>
        <Svg
          name='SolidChevronDown'
          className='inline w-5 h-5 ml-2 -mr-1'
          viewBox='0 0 20 20'
          fill='currentColor'
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
          <div className='absolute right-[0.62rem] top-8'>
            <div className='w-0 h-0 border-b-orange border-b-[1.25rem] border-r-transparent border-r-8 border-l-transparent border-l-8' />
          </div>
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
          <Menu.Items className='absolute font-serif right-2 w-28 top-12 focus:outline-none'>
            <div className='items-center px-2 py-2 rounded-md bg-orange'>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active
                        ? 'text-opacity-75 text-primary bg-teal rounded'
                        : ''
                    } items-center w-full text-white`}
                    onClick={signOutClearDataUnlockGrid}
                  >
                    SIGN OUT
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition.Child>
      </Transition>
    </Menu>
  )
}

export default DropdownSignOut
