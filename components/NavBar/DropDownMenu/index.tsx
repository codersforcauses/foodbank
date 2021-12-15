import NavLink, { NavLinkProps } from '../NavLink'
import { useState } from 'react'
import { Transition } from '@headlessui/react'

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
      <Transition
        show={subMenu}
      >
        <div
          className='shadow-lg 
                        overflow-hidden 
                        absolute 
                        z-10 
                        right-0 w-max 
                        mt-3'
        >
          <Transition.Child
            enter='transition ease-in-out duration-150 transform'
            enterFrom='translate-y-full opacity-0'
            enterTo='translate-y-0 opacity-100'
            leave='transition ease-in-out duration-75 transform'
            leaveFrom='translate-y-0 opacity-100'
            leaveTo='translate-y-full opacity-0'
          >
            <div className='flex justify-end '>
              <div
                className='relative right-5 c-triangle-up'
                style={{
                  borderBottom: '1em solid #671e75'
                }}
              />
            </div>
          </Transition.Child>
          <Transition.Child
            enter='transition-opacity ease-linear duration-75'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='transition-opacity ease-linear duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='relative grid gap-6 rounded-lg bg-primary px-5 py-6 sm:gap-8 sm:p-8'>
              <div className='block items-center'>
                {links.map(nav => (
                  <>
                    <NavLink key={nav.page} {...nav} />
                  </>
                ))}
              </div>
            </div>
          </Transition.Child>
        </div>
      </Transition>
    </nav>
  )
}

export default DropDownMenu
