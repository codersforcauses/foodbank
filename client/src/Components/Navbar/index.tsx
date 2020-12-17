import React, { useState } from 'react'
import './index.css'

export const NavbarContent = () => {
  return (
    <nav>
      <ul>
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

  return (
    <header>
      <span id='buttonSpan'>
        <div className={`NavbarContent sm:block ${!open ? 'hidden' : ''}`}>
          <NavbarContent />
        </div>
        <button
          className='sm:hidden FloatingButton'
          onClick={() => setOpen(!open)}
          style={{}}
        >
          +
        </button>
      </span>
    </header>
  )
}
