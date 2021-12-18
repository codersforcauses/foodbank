import { useCallback, useState } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import NavLink, { NavLinkProps } from './NavLink'
import logo from '../../public/images/foodbank-logo.webp'

const Auth = dynamic(() => import('../Auth'), { ssr: false })

const links: Array<NavLinkProps> = [
  {
    page: 'Super Hero Foods',
    route: '/Town/0'
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
    <header className='fixed inset-x-0 top-0 z-10 hidden py-3 bg-primary lg:block'>
      <div className='container flex justify-between px-3 mx-auto'>
        <Link href='/'>
          <a className='relative w-12 h-10 hover:opacity-75'>
            <Image
              src={logo}
              alt='Foodbank logo'
              placeholder='blur'
              layout='fill'
              quality={50}
            />
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
          {/* need to add proper state when auth was added */}
          {signIn ? 'Sign-out' : 'Sign-in'}
        </button>
      </div>
      <Auth open={signIn} onClose={toggleSignIn} />
    </header>
    
  )
}

export default Navbar
