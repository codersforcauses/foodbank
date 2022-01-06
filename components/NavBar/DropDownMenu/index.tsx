import NavLink, { NavLinkProps } from '../NavLink'
import { Transition, Popover } from '@headlessui/react'
import Hamburger from '@components/Custom/Hamburger'

export interface DropDownMenuProps {
  links: Array<NavLinkProps>
}

const DropDownMenu = ({ links }: DropDownMenuProps) => {
  return (
    <Popover className='relative'>
      <Popover.Button className='relative px-4 py-1 font-serif text-2xl text-white hover:opacity-75'>
        <div className='flex'>
          <Hamburger /> MENU
        </div>
      </Popover.Button>
      <Transition
        enter='transition duration-70 ease-in'
        enterFrom='opacity-0 transform scale-95 -translate-y-1'
        enterTo='opacity-100 transform scale-100 translate-y-0'
        leave='transition duration-150 ease-linear'
        leaveFrom='opacity-100 transform scale-100 translate-y-0'
        leaveTo='opacity-0 transform scale-95 -translate-y-1'
      >
        <Popover.Panel className='shadow-lg overflow-hidden absolute z-10 right-0 w-max mt-3'>
          <div className='flex justify-end'>
            <div className='relative right-5 traingle-up' />
          </div>
          <div className='relative grid rounded-lg bg-primary gap-8 p-8'>
            <div className='block items-center'>
              {links.map(nav => (
                <NavLink key={nav.page} {...nav} />
              ))}
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}

export default DropDownMenu
