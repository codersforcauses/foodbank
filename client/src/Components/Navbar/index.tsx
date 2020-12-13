import React, { useState } from 'react';

export const NavbarContent = () => {
  return <nav>navbar here</nav>
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
