import NavLink, { NavLinkProps } from '../NavLink'
import { useState } from 'react'

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
  page: string
  route: string
}

const DropDownMenu = () => {
  const [subMenu, setSubMenu] = useState(false)
  return (
    <nav>
      <button
        onClick={() => setSubMenu(!subMenu)}
        className='px-4 py-1 font-serif text-xl text-white hover:opacity-75 bg-teal rounded-md'
      >
        <b>&#9776;</b> MENU
      </button>
      {subMenu && (
        <div className='shadow-lg overflow-hidden absolute rounded-lg z-10 left-1/2 transform -translate-x-1/2 mt-6 px-2 w-auto max-w-md sm:px-0'>
          <div className='relative grid gap-6 bg-primary px-5 py-6 sm:gap-8 sm:p-8'>
            <div className='block items-center'>
              {links.map(nav => (
                <NavLink key={nav.page} {...nav} />
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default DropDownMenu
