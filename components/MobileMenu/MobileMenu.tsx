
import React from 'react'

import { Popover,Transition } from '@headlessui/react'

function MobileMenu() {
  return (
    <Popover className="menu">
      <Transition 
        enter="transition duration-400 ease-in"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-400 ease"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0">
          <Popover.Panel className="menu-list">
            <div className="menu-ele">
              <a href="/">Home</a>
              <a href="/">Superhero</a>
              <a href="/">Recipe</a>
              <a href="/">Progress</a>
              <a href="/">Sign In</a>
            </div>
          </Popover.Panel>
      </Transition>
      <Popover.Button className="menu-button">+</Popover.Button>
    </Popover>)
  }
  
export default MobileMenu