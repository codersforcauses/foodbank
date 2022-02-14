import { Popover, Transition } from '@headlessui/react'

import Svg from '@components/Custom/Svg'

import NavLink, { NavLinkProps } from '../NavLink'

interface DropDownMenuProps {
  links: Array<NavLinkProps>
}

const DropDownMenu = ({ links }: DropDownMenuProps) => {
  return (
    <Popover className='relative'>
      <Popover.Button className='flex items-center h-full px-2 rounded hover:opacity-75 focus:outline-none focus:ring focus:ring-teal/50'>
        <Svg
          name='SolidHamburger'
          className='w-6 h-auto text-white'
          viewBox='0 0 20 20'
          stroke='currentColor'
          fill='currentColor'
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
        <Popover.Panel className='absolute right-0 flex flex-col items-end mt-3 overflow-hidden shadow-lg w-max'>
          <div className='mr-8 border-b-primary border-b-[1rem] border-r-transparent border-r-8 border-l-transparent border-l-8' />
          <div className='grid items-center gap-4 p-8 font-serif text-xl text-white rounded-lg bg-primary'>
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
