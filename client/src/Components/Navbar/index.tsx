import React from 'react'
import { NavlinkProps, Navlink } from './Navlink'

export interface NavbarProps {
  links: NavlinkProps[]
}

export const Navbar: React.FC<NavbarProps> = ({ links }) => {
  return (
    <nav className='bg-primary'>
      <ul className='flex flex-col lg:flex-row justify-center'>
        {links.map(nav => (
          <Navlink key={nav.page} {...nav} />
        ))}
      </ul>
    </nav>
  )
}
