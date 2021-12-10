import { useCallback, useState } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import capitalize from 'lodash.capitalize'
import { useFirebase } from '@components/firebase/context'
import NavLink, { NavLinkProps } from './NavLink'
import logo from '../../public/images/foodbank-logo.webp'
import DropdownSignOut from './DropdownSignOut'

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
  const [openSignInForm, setOpenSignInForm] = useState(false)
  const toggleOpenSignInForm = useCallback(() => {
    setOpenSignInForm(prev => !prev)
  }, [])

  const { auth, user, userLoading, userError } = useFirebase()

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
        {user ? (
          <DropdownSignOut
            username={capitalize(user!.email!.replace(/@[^@]+$/, ''))}
            auth={auth}
          />
        ) : (
          <button
            className='px-4 py-1 font-serif text-xl text-white hover:opacity-75'
            onClick={toggleOpenSignInForm}
          >
            Sign-in
          </button>
        )}
      </div>
      <Auth open={openSignInForm} onClose={toggleOpenSignInForm} />
    </header>
  )
}

export default Navbar
