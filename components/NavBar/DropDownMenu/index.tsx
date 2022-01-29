import Image from 'next/image'
import { Transition, Popover } from '@headlessui/react'
import Hamburger from 'public/images/Hamburger_icon.svg'
import NavLink, { NavLinkProps } from '../NavLink'

interface DropDownMenuProps {
  links: Array<NavLinkProps>
}

const DropDownMenu = ({ links }: DropDownMenuProps) => {
  return (
    <Popover className='relative'>
      <Popover.Button className='flex items-center px-2 h-full hover:opacity-75 focus:outline-none focus:ring focus:ring-teal/50 rounded'>
        <Image
          src={Hamburger}
          alt='Hamburger'
          className='text-white'
          layout='fixed'
          width={25}
          height={25}
        />
        MENU
      </Popover.Button>
      <Transition
        enter='transition duration-70 ease-in'
        enterFrom='opacity-0 transform scale-95 -translate-y-1'
        enterTo='opacity-100 transform scale-100 translate-y-0'
        leave='transition duration-150 ease-linear'
        leaveFrom='opacity-100 transform scale-100 translate-y-0'
        leaveTo='opacity-0 transform scale-95 -translate-y-1'
      >
        <Popover.Panel className='flex flex-col items-end shadow-lg overflow-hidden absolute z-10 right-0 w-max mt-3'>
          <div className='mr-8 border-b-primary border-b-[1rem] border-r-transparent border-r-8 border-l-transparent border-l-8' />
          <div className='grid relative gap-4 p-8 rounded-lg bg-primary items-center font-serif text-xl text-white'>
            {links.map(nav => (
              <NavLink key={nav.page} {...nav} />
            ))}
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}

export default DropDownMenu
