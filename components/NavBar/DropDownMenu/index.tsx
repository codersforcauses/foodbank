import NavLink, { NavLinkProps } from '../NavLink'
import { useState } from 'react'
import { Transition } from '@headlessui/react'

const links: Array<NavLinkProps> = [
  {
    page: 'Tucker Island',
    route: '/'
  },
  {
    page: 'Recipes',
    route: '/'
  },
  {
    page: 'Drag-Drop Game',
    route: '/'
  },
  {
    page: 'Trophy Room',
    route: '/'
  }
]

export interface DropDownMenuProps {
  page?: string
  route?: string
}

const DropDownMenu = ({ page, route }: DropDownMenuProps) => {
  const [subMenu, setSubMenu] = useState(false)
  return (
    <nav className='relative'>
      <button
        onClick={() => setSubMenu(!subMenu)}
        className='px-4 py-1 font-serif 
                    text-xl text-black 
                    hover:opacity-75 
                    bg-teal rounded-md'
      >
        <b>&#9776;</b> MENU
      </button>
      <Transition
        show={subMenu}
        enter='transition-opacity duration-75'
        enterFrom='opacity-0'
        enterTo='opacity-100'
        leave='transition-opacity duration-150'
        leaveFrom='opacity-100'
        leaveTo='opacity-0'
      >
        <div
          className='shadow-lg 
                        overflow-hidden 
                        absolute rounded-lg 
                        z-10 
                        right-0 w-max 
                        mt-6'
        >
          <div className='relative grid gap-6 bg-primary px-5 py-6 sm:gap-8 sm:p-8'>
            <div className='block items-center'>
              {links.map(nav => (
                <>
                  <NavLink key={nav.page} {...nav} />
                </>
              ))}
            </div>
          </div>
        </div>
      </Transition>
    </nav>
  )
}

export default DropDownMenu
