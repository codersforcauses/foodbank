import React from 'react'
import { Navlink } from './Navlink'
import routes, { RouterElement } from '../../router'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

export interface NavbarProps {
  links: RouterElement[]
}

const Routing: React.FC = () => {
  return (
    <div className='w-100'>
      <Switch>
        {routes.map(nav => (
          <Route
            exact
            path={nav.path}
            key={nav.name}
            component={nav.component}
          />
        ))}
      </Switch>
    </div>
  )
}

export const Navbar: React.FC<NavbarProps> = ({ links }) => {
  return (
    <div className='w-container'>
      <Router>
        <header className='bg-primary'>
          foodbank
          <nav className='w-nav-menu nav_menu' role='navigation'>
            {links.map(nav => (
              <Navlink key={nav.name} {...nav} />
            ))}
          </nav>
        </header>
        <Routing />
      </Router>
    </div>
  )
}
