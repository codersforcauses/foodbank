import React, { useState, useEffect } from 'react'
import './index.css'

//still need to add button code so that it spins onClick not
//just on hold

export const FloatingButton = () => {
  return (
    <nav className='
    fixed bottom-10 
    right-5 
    bg-primary 
    outline-none 
    border-2
    border-white 
    rounded-lg 
    w-50 
    h-50 
    leading-6 
    text-lg 
    text-center 
    text-white
    font-serif
    m-0
    px-6'>
      <ul id='list' className='p-0'>
        <li className='hover:scale-150'>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Resources</li>
      </ul>
    </nav>
  )
}

export const Navbar: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState(0)

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowWidth(window.innerWidth)
    }
    // Add event listener
    window.addEventListener('resize', handleResize)

    // Call handler right away so state gets updated with initial window size
    handleResize()

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize)
  }, []) // Empty array ensures that effect is only run on mount

  return windowWidth > 640 ? null : <FloatingButton />
  // <header>
  //   <span id='buttonSpan'>
  //     {/* Navbar content */}
  //     <div className='NavbarContent sm:block' id='navbar'>
  //       <FloatingButton />
  //     </div>
  //     {/* Floating action button */}
  //     <button className='sm:hidden FloatingButton'>
  //       <span>&#43;</span>
  //     </button>
  //   </span>
  // </header>
}
