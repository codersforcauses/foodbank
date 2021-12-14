import NavLink, { NavLinkProps } from '../NavLink'
import { useState } from 'react'

export interface DropDownMenuProps {
  page?: string
  route?: string
  links: Array<NavLinkProps>
}

const DropDownMenu = ({ page, route, links }: DropDownMenuProps) => {
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
      {subMenu && (
        <div
          className='shadow-lg 
                        overflow-hidden 
                        absolute 
                        z-10 
                        right-0 w-max 
                        mt-3'
        >
          <div className='flex justify-end '>
            <div
              className='relative right-5 c-triangle-up'
              style={{
                borderBottom: '1em solid #671e75'
              }}
            />
          </div>
          <div className='relative grid gap-6 rounded-lg bg-primary px-5 py-6 sm:gap-8 sm:p-8'>
            <div className='block items-center'>
              {links.map(nav => (
                <>
                  <NavLink key={nav.page} {...nav} />
                </>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default DropDownMenu
