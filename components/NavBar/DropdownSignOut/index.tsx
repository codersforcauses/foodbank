import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'

interface DropdownProp {
  username: string
  signOutClearDataUnlockGrid: () => void
}

const DropdownSignOut = ({
  username,
  signOutClearDataUnlockGrid
}: DropdownProp) => {
  return (
    <Menu as='div' className='relative flex text-xl text-right'>
      <Menu.Button
        //   className='font-serif text-white hover:text-opacity-75'
        className='px-3 ml-8 font-serif text-white rounded hover:opacity-75 focus:outline-none focus:ring focus:ring-teal focus:ring-opacity-50'
      >
        <span className='capitalize'>{username}</span>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='inline w-5 h-5 ml-2 -mr-1'
          aria-hidden='true'
          viewBox='0 0 20 20'
          fill='currentColor'
        >
          <path
            fillRule='evenodd'
            d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
            clipRule='evenodd'
          />
        </svg>
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
          <div className='absolute right-[-0.13rem] top-8'>
            <div className='w-0 h-0 border-b-orange border-b-[1em] border-r-transparent border-r-[0.5rem] border-l-transparent border-l-[0.5rem]'></div>
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
          <Menu.Items className='absolute right-[-0.15rem] w-28 font-serif top-[3rem]'>
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={() => signOutClearDataUnlockGrid()}
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
