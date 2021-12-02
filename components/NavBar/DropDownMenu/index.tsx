import Link from 'next/link'
import NavLink, { NavLinkProps } from '../NavLink'
import { useEffect, useState } from 'react'


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
    },
  ]

export interface DropDownMenuProps {
  page: string
  route: string
}

const DropDownMenu = () => {
  const [subMenu, setSubMenu] = useState(false)
  return (
    <nav>
        <button onClick={() => setSubMenu(!subMenu)} className='px-4 py-1 font-serif text-xl text-white hover:opacity-75 bg-teal rounded-md'>	
            <b>&#9776;</b> MENU
        </button>
        {subMenu && (
          <div className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-6 px-2 w-auto max-w-md sm:px-0">
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div className="relative grid gap-6 bg-primary px-5 py-6 sm:gap-8 sm:p-8">
                    <div className='block items-center'>
                        {links.map(nav => (<NavLink key={nav.page} {...nav} />))}
                    </div>
                </div>
            </div>
          </div>
        )}
    </nav>
  )
  /*
    <nav className="absolute w-auto p-2 m-2 min-w-max top-14 rounded-md shadow-md text-white bg-gray-900 text-xs font-bold transition-all duration-100 scale-0 origin-left;">
            <div className='flex items-center space-x-10'>
            {links.map(nav => (
            <NavLink key={nav.page} {...nav} />
            ))}
            </div>
        </nav>
  */

}

export default DropDownMenu
