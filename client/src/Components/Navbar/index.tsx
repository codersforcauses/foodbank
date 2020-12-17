import React, { useState } from 'react'
import './index.css'

export const NavbarContent = () => {
  return (
    <nav>
      <ul id="list">
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

//my attempt at making a menu reveal animation, didn't work

// function buttonAnimation() {
//   let action = document.querySelector('.NavbarContent')!;
//   action.classList.toggle('active')
// }

//wrapper for running two function onClick

// function click() {
//   {() => setOpen(!open)}
//   {buttonAnimation()}
// }

  return (
    <header>
      <span id='buttonSpan'>
        <div className={`NavbarContent sm:block ${!open ? 'hidden' : ''}`} >
          <NavbarContent />
        </div>
        <button
          className='sm:hidden FloatingButton'
          onClick={() => setOpen(!open)}
        >
          <span>&#43;</span>
        </button>
      </span>
    </header>
  )
}
