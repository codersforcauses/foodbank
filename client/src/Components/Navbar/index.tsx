import React, { useState } from 'react';
import './navbar.css';

export const NavbarContent = () => {
  return <div>navbar here</div>
};

export const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button className="navbar-toggle-button" onClick={() => setOpen(!open)}>Open Nav</button>
      <div className={`navbar-container ${open ? 'open' : ''}`}>
        <NavbarContent />
      </div>
    </div>
  );
};
