import React, { useState, useEffect } from 'react'
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

  useEffect(() => {
    const navbar: HTMLElement | null = document.getElementById('navbar')
    if (navbar !== null) {
      navbar.addEventListener('transitionstart', () => {
        if (!open) navbar.style.display = 'inline'
      })
      navbar.addEventListener('transitionend', () => {
        if (open) navbar.style.display = 'inline'
      })
    } else {
      console.log('no navbar')
    }
  }, [document.getElementById('navbar')])

  const handleClick = () => {
    setOpen(!open)
    document.getElementById('navbar')?.classList.toggle('navbarOpen')
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
