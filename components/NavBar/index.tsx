import { useCallback, useState } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import NavLink, { NavLinkProps } from './NavLink'
import Image from 'next/image'
import logo from '../../public/images/logoFoodbankAus.webp'

const Auth = dynamic(() => import('../Auth'), { ssr: false })

const links: Array<NavLinkProps> = [
  {
    page: 'SUPERHERO FOODS',
    route: '/super_foods' //placeholder
  },
  {
    page: 'RECIPE',
    route: '/recipe' //placeholder
  },
  {
    page: 'PROGRESS',
    route: '/progress' //placeholder
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
          <a className='hover:opacity-75'>
            <Image
              className='w-full h-full'
              src={logo}
              alt='Foodbank logo'
              placeholder='blur'
            />
          </a>
        </Link>
        <nav className='flex items-center space-x-10' role='navigation'>
          {links.map(nav => (
            <NavLink key={nav.page} {...nav} />
          ))}
        </nav>
        {signIn ? (
          <button
            className='px-4 py-1 font-serif text-xl text-white hover:opacity-75'
            onClick={toggleSignIn}
          >
            SIGN-OUT
          </button>
        ) : (
          <button
            className='px-4 py-1 font-serif text-xl text-white hover:opacity-75'
            onClick={toggleSignIn}
          >
            SIGN-IN
          </button>
        )}
      </div>
      <Auth open={signIn} onClose={toggleSignIn} />
    </header>
  )
}

export default Navbar
