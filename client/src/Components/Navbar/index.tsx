import React, { useState } from 'react';
import './navbar.css';

export const NavbarContent = () => {
  return <nav>navbar here</nav>
};

export const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <button className="md:hidden block" onClick={() => setOpen(!open)}>Open Nav</button>
      <div className={`md:block ${!open ? 'hidden' : ''}`}>
        <NavbarContent />
      </div>
    </header>
  );
};
