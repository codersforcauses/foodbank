import { useCallback, useState } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import DropDownMenu from './DropDownMenu'
import logo from '../../public/images/foodbank-logo.webp'
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
    <header className='fixed inset-x-0 top-0 z-10 hidden py-3 bg-primary md:block'>
      <div className='container flex justify-between px-3 mx-auto'>
        <Link href='/'>
          <a className='absolute left-10 top-2 w-16 h-12 hover:opacity-75'>
            <Image
              src={logo}
              alt='Foodbank logo'
              placeholder='blur'
              layout='fill'
              quality={50}
            />
          </a>
        </Link>
        <div className='flex justify-end w-screen'>
          <DropDownMenu links={links} />
          <button
            className='px-4 py-1 font-serif text-2xl text-white hover:opacity-75'
            onClick={toggleSignIn}
          >
            {/* need to add proper state when auth was added */}
            {signIn ? 'Sign-out' : 'Sign-in'}
          </button>
        </div>
      </div>
      <Auth open={signIn} onClose={toggleSignIn} />
    </header>
  )
}

export default Navbar
