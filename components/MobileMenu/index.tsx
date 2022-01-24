import { Popover, Transition } from '@headlessui/react'
import { NavLinkProps } from '@components/NavBar/NavLink'
import Link from 'next/link'
import Image from 'next/image'
import Hamburger from 'public/images/Hamburger_icon.svg'

interface MobileMenu {
  links: Array<NavLinkProps>
}

const MobileMenu = ({ links }: MobileMenu) => {
  return (
    <Popover className='text-white text-lg text-center flex flex-col items-end fixed z-10 bottom-5 right-5 '>
      {({ open }) => (
        <>
          <Transition
            enter='transition duration-400 ease-in'
            enterFrom='transform scale-95 opacity-0 translate-y-10'
            enterTo='transform translate-y-0 scale-100 opacity-100'
            leave='transition duration-400 ease-in'
            leaveFrom='transform scale-100 opacity-100 translate-y-0'
            leaveTo='transform scale-95 opacity-0 translate-y-10'
          >
            <Popover.Panel className='flex flex-col items-end'>
              <div className='bg-primary flex justify-around flex-col items-center p-3 rounded-lg w-full h-96 font-serif'>
                {links.map(navItem => (
                  <Link key={navItem.page} href={navItem.route}>
                    <a className='px-2 w-full opacity-100 transition-all duration-150 focus:ring focus:ring-teal focus:ring-opacity-50 rounded'>
                      {navItem.page}
                    </a>
                  </Link>
                ))}
                <Link href='/'>
                  <a className='w-full opacity-100 transition-all duration-150 focus:ring focus:ring-teal focus:ring-opacity-50 rounded'>
                    Sign In
                  </a>
                </Link>
              </div>
              <div className='mr-5 border-t-primary border-t-[1rem] border-r-transparent border-r-[0.5rem] border-l-transparent border-l-[0.5rem]' />
            </Popover.Panel>
          </Transition>
          <Popover.Button
            className={
              'flex items-center justify-center sm:hidden w-10 h-10 rounded-full m-2 no-tap-highlight ' +
              (open ? 'bg-teal text-black' : 'bg-primary')
            }
          >
            {open ? (
              <>&#9866;</>
            ) : (
              <Image
                src={Hamburger}
                alt='Hamburger'
                className='text-white'
                layout='fixed'
                width={25}
                height={25}
              />
            )}
          </Popover.Button>
        </>
      )}
    </Popover>
  )
}

export default MobileMenu
