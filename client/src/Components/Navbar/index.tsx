import React, { useState } from 'react';
import './index.css'

export const NavbarContent = () => {
  return <nav className={`Navbar ${!open ? 'Stuck' : 'Button'}`}>
      <ul id="list">
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Resources</li>
      </ul>
    </nav>
};

export const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
      <header>
        <span id="buttonSpan">
          <button id="button" className="sm:hidden" onClick={() => setOpen(!open)}>+</button>
          <div className={`sm:block ${!open ? 'hidden' : ''}`}>
            < NavbarContent />
          </div>
       </span>
     </header>
  );
};
