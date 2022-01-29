import { useCallback, useState } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { NavLinkProps } from './NavLink'
import { useFirebase } from '@components/FirebaseContext/context'
import logo from 'public/images/foodbank-logo.webp'
import DropdownSignOut from './DropdownSignOut'
import DropDownMenu from './DropDownMenu'

const Auth = dynamic(() => import('../Auth'), { ssr: false })

interface NavbarProps {
  links: Array<NavLinkProps>
}

const Navbar = ({ links }: NavbarProps) => {
  const [openSignInForm, setOpenSignInForm] = useState(false)
  const { user } = useFirebase()

  const toggleOpenSignInForm = useCallback(() => {
    setOpenSignInForm(prev => !prev)
  }, [])

  return (
    <header className='fixed inset-x-0 top-0 z-10 hidden py-2 bg-primary md:block'>
      <nav className='container flex justify-between px-3 mx-auto font-serif text-2xl text-white'>
        <Link href='/'>
          <a className='relative flex rounded hover:opacity-75 focus:outline-none focus:ring focus:ring-teal/50'>
            <Image
              src={logo}
              alt='Foodbank logo'
              placeholder='blur'
              layout='fixed'
              height={45}
              width={65}
              quality={50}
            />
          </a>
        </Link>
        <div className='flex justify-end'>
          <DropDownMenu links={links} />
          {user?.displayName ? (
            <DropdownSignOut />
          ) : (
            <button
              className='px-3 ml-8 rounded hover:opacity-75 focus:outline-none focus:ring focus:ring-teal/50'
              onClick={toggleOpenSignInForm}
            >
              Sign-in
            </button>
          )}
        </div>
      </nav>
      <Auth open={openSignInForm && !user} onClose={toggleOpenSignInForm} />
    </header>
  )
}

export default Navbar
