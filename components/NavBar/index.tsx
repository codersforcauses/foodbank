import { useCallback, useState } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import NavLink, { NavLinkProps } from './NavLink'

const Auth = dynamic(() => import('../Auth'), { ssr: false })

const links: Array<NavLinkProps> = [
  {
    page: 'Superhero Foods',
    route: '/'
  },
  {
    page: 'Recipe',
    route: '/'
  },
  {
    page: 'Progress',
    route: '/'
  }
]

const Navbar = () => {
  const [signIn, setSignIn] = useState(false)
  const toggleSignIn = useCallback(() => {
    setSignIn(prev => !prev)
  }, [])

  return (
    <header className='fixed inset-x-0 top-0 z-10 py-3 bg-primary'>
      <div className='container flex justify-between px-3 mx-auto'>
        <Link href='/'>
          <a className='px-4 py-1 font-serif text-xl text-white hover:opacity-75'>
            Home
          </a>
        </Link>
        <nav className='flex items-center space-x-10'>
          {links.map(nav => (
            <NavLink key={nav.page} {...nav} />
          ))}
        </nav>
        <button
          className='px-4 py-1 font-serif text-xl text-white hover:opacity-75'
          onClick={toggleSignIn}
        >
          Sign-in
        </button>
      </div>
      <Auth open={signIn} onClose={toggleSignIn} />
    </header>
  )
}

export default Navbar
