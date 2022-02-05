import { useCallback, useState } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import logo from 'public/images/foodbank-logo.webp'
import DropDownMenu from './DropDownMenu'
import { NavLinkProps } from './NavLink'

const Auth = dynamic(() => import('../Auth'), { ssr: false })

interface NavbarProps {
  links: Array<NavLinkProps>
}

const Navbar = ({ links }: NavbarProps) => {
  const [signIn, setSignIn] = useState(false)
  const toggleSignIn = useCallback(() => {
    setSignIn(prev => !prev)
  }, [])

  return (
    <header className='fixed inset-x-0 top-0 z-10 hidden py-2 bg-primary md:block'>
      <nav className='font-serif text-2xl text-white container flex justify-between px-3 mx-auto'>
        <Link href='/'>
          <a className='flex relative hover:opacity-75 focus:outline-none focus:ring focus:ring-teal focus: focus:ring-opacity-50 rounded'>
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
          <button
            className='px-3 ml-8 hover:opacity-75 focus:outline-none focus:ring focus:ring-teal focus:ring-opacity-50 rounded'
            onClick={toggleSignIn}
          >
            {/* need to add proper state when auth was added */}
            {signIn ? 'SIGN-OUT' : 'SIGN-IN'}
          </button>
        </div>
      </nav>
      <Auth open={signIn} onClose={toggleSignIn} />
    </header>
  )
}

export default Navbar
