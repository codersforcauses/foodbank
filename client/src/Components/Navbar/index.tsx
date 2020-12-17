import React, { useState } from 'react'
import './index.css'

export const NavbarContent = () => {
  return (
    <nav>
      <ul id='list'>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Resources</li>
      </ul>
    </nav>
  )
}

export const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(!open)
    const navbar = document.getElementById('navbar')
    if (open) {
      navbar?.classList.remove('navbarOpen')
      navbar?.classList.add('navbarClose')
    }
    if (!open) {
      navbar?.classList.add('navbarOpen')
      navbar?.classList.remove('navbarClose')
    }
  }

  return (
    <header>
      <span id='buttonSpan'>
        <div className='NavbarContent sm:block' id='navbar'>
          <NavbarContent />
        </div>
        <button className='sm:hidden FloatingButton' onClick={handleClick}>
          <span>&#43;</span>
        </button>
      </span>
    </header>
  )
}
