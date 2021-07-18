import { Popover, Transition } from '@headlessui/react'
import Link from 'next/link'

const MobileMenu = () => {
  return (
    <Popover className='menu text-white fixed flex flex-col items-center z-10 bottom-5 padding-0 right-5 w-2/12 text-lg'>
      <Transition
        enter='transition duration-400 ease-in'
        enterFrom='transform scale-95 opacity-0'
        enterTo='transform scale-100 opacity-100'
        leave='transition duration-400 ease'
        leaveFrom='transform scale-100 opacity-100'
        leaveTo='transform scale-95 opacity-0'
      >
        <Popover.Panel className='menu-list p-1'>
          <div className='menu-ele bg-primary flex flex-col items-center mt-1 p-3 rounded-lg '>
            <Link href='/'>
              <a>Home</a>
            </Link>
            <Link href='/'>
              <a>Superhero</a>
            </Link>
            <Link href='/'>
              <a>Recipe</a>
            </Link>
            <Link href='/'>
              <a>Progress</a>
            </Link>
            <Link href='/'>
              <a>Sign In</a>
            </Link>
          </div>
        </Popover.Panel>
      </Transition>
      <Popover.Button className='menu-button block md:hidden bg-primary w-10 h-10 rounded-full m-2'>
        +
      </Popover.Button>
    </Popover>
  )
}

export default MobileMenu
