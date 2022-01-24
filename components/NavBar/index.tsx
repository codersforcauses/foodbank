import { useCallback, useState } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { useFirebase } from '@components/FirebaseContext'
import NavLink, { NavLinkProps } from './NavLink'
import logo from 'public/images/foodbank-logo.webp'
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
  },
  {
    page: 'My Trophy',
    route: '/trophy'
  }
]

const Navbar = () => {
  const [openSignInForm, setOpenSignInForm] = useState(false)
  const [gridDisabled, setGridDisabled] = useState(false)
  const { user, signOutClearData } = useFirebase()

  const toggleOpenSignInForm = useCallback(() => {
    setOpenSignInForm(prev => !prev)
  }, [])

  const signOutClearDataUnlockGrid = () => {
    signOutClearData?.()
    setGridDisabled(false)
  }

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
        {user?.displayName ? (
          <DropdownSignOut
            username={user.displayName}
            signOutClearDataUnlockGrid={signOutClearDataUnlockGrid}
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
      <Auth
        open={openSignInForm && !user}
        onClose={toggleOpenSignInForm}
        gridDisabled={gridDisabled}
        setGridDisabled={setGridDisabled}
      />
    </header>
  )
}

export default Navbar
