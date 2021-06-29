import NavLink, { NavLinkProps } from './NavLink'

interface NavbarProps {
  links: NavLinkProps[]
}

const Navbar = ({ links }: NavbarProps) => {
  return (
    <header className='fixed inset-x-0 top-0 z-10 py-3 bg-primary'>
      <nav className='container flex justify-center px-3 mx-auto space-x-10'>
        {links.map(nav => (
          <NavLink key={nav.page} {...nav} />
        ))}
      </nav>
    </header>
  )
}

export default Navbar
export type {NavLinkProps}
