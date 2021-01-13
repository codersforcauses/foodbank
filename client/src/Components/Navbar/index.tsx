import React from 'react'
import { NavlinkProps } from './Navlink'
import { Navlink } from './Navlink'

export interface NavbarProps {
  links: NavlinkProps[]
}

export const Navbar: React.FC<NavbarProps> = ({ links }) => {
  return (
    <nav className='bg-primary'>
      <ul className='flex flex-col lg:flex-row justify-center'>
        {links.map((x: NavlinkProps, i: number) => (
          <Navlink key={i} page={x.page} route={x.route} />
        ))}
      </ul>
    </nav>
  )
}
