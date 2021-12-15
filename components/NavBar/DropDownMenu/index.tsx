import NavLink, { NavLinkProps } from '../NavLink'
import { Transition, Popover } from '@headlessui/react'

export interface DropDownMenuProps {
  page?: string
  route?: string
  links: Array<NavLinkProps>
}

const DropDownMenu = ({ page, route, links }: DropDownMenuProps) => {
  return (
    <Popover className='relative'>
      <Popover.Button
        className='px-4 py-1 font-serif 
                    text-2xl text-white 
                    hover:opacity-75 
                    '
      >
        <b>&#9776;</b> MENU
      </Popover.Button>
      <Transition
        enter='transition duration-70 ease-in'
        enterFrom='opacity-0 transform scale-95 -translate-y-1'
        enterTo='opacity-100 transform scale-100 translate-y-0'
        leave='transition duration-150 ease-linear'
        leaveFrom='opacity-100 transform scale-100 translate-y-0'
        leaveTo='opacity-0 transform scale-95 -translate-y-1'
      >
        <Popover.Panel
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
