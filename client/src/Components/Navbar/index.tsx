import React from 'react'
import { Navlink } from '../Navlink/index'

export interface NavbarProps {
  /**
   * Background colour to use
   */
  backgroundColor: 'primary' | 'dark-grey' | 'light-grey'
}

export const Navbar: React.FC<NavbarProps> = ({
  backgroundColor = 'primary'
}) => {
  return (
    <nav
      className={[
        `flex`,
        `flex-col`,
        `lg:flex-row`,
        `fixed`,
        `bg-${backgroundColor}`,
        `w-full`,
        `h-screen`,
        `lg:h-auto`,
        `justify-center `,
        `text-2xl`,
        `lg:text-base`
      ].join(' ')}
    >
      <ul className={['flex', 'flex-col', 'lg:flex-row'].join(' ')}>
        <Navlink page='About' route='About/Route' textColor='white' />
        <Navlink page='Recipes' route='Recipes/Route' textColor='white' />
        <Navlink page='Item' route='Login/Route' textColor='white' />
      </ul>
    </nav>
  )
}
