import { Popover, Transition } from '@headlessui/react'
import NavLink, { NavLinkProps } from '@components/NavBar/NavLink'
import Link from 'next/link'

export interface MobileMenu {
  links: Array<NavLinkProps>
}

const MobileMenu = ({ links }: MobileMenu) => {
  return (
    <Popover className='menu text-white fixed flex flex-col items-center z-10 bottom-5 w-2/12 padding-0 right-5 text-lg '>
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
            <Popover.Panel className='menu-list p-1'>
              <div
                className='menu-ele 
                              bg-primary 
                              flex justify-around flex-col items-center 
                              p-3 rounded-lg h-96 
                              w-fit mr-20 overflow-clip whitespace-nowrap'
              >
                {links.map(navItem => (
                  <Link key={navItem.page} href={navItem.route}>
                    <a>{navItem.page}</a>
                  </Link>
                ))}
                <Link href='/'>
                  <a>Sign In</a>
                </Link>
              </div>
              <div className='flex justify-end pr-20 mr-4'>
                <div
                  className='c-triangle-down'
                  style={{
                    borderTop: '1em solid #671e75'
                  }}
                />
              </div>
            </Popover.Panel>
          </Transition>
          <Popover.Button
            className={
              'menu-button block md:hidden w-10 h-10 rounded-full m-2 ' +
              (open ? 'bg-teal text-black' : 'bg-primary')
            }
          >
            {open ? <>&#9866;</> : <>&#9776;</>}
          </Popover.Button>
        </>
      )}
    </Popover>
  )
}

export default MobileMenu
