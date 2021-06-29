// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// export const NavbarContent = () => {
//   return (
//     <>
//     <nav>navbar here</nav>
//     <nav>
//       <Link to="/">Map</Link>
//     </nav>
//     </>
//     )
// };

// export const Navbar: React.FC = () => {
//   const [open, setOpen] = useState(false);
import React from 'react'
import { Navlink } from './Navlink'
import { RouterElement } from '../../router'
import { BrowserRouter as Router } from 'react-router-dom'

export interface NavbarProps {
  links: RouterElement[]
}

export const Navbar: React.FC<NavbarProps> = ({ links }) => {
  return (
    <header className='bg-primary'>
      <nav className='navbar'>
        <Router>
          <ul className='flex flex-col lg:flex-row justify-center'>
            {links.map(nav => (
              <Navlink key={nav.name} {...nav} />
            ))}
          </ul>
        </Router>
      </nav>
    </header>
  )
}
