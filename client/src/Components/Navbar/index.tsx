import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const NavbarContent = () => {
  return (
    <>
    <nav>navbar here</nav>
    <nav>
      <Link to="/">Map</Link>
    </nav>
    </>
    )
};

export const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <button className="sm:hidden" onClick={() => setOpen(!open)}>Open Nav</button>
      <div className={`sm:block ${!open ? 'hidden' : ''}`}>
        <NavbarContent />
      </div>
    </header>
  );
};
