import { useCallback, useState } from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { Popover, Transition } from '@headlessui/react'

import { useFirebase } from '@components/FirebaseContext/context'
import { NavLinkProps } from '@components/NavBar/NavLink'

const Auth = dynamic(() => import('../Auth'), { ssr: false })

interface MobileMenuProps {
  links: Array<NavLinkProps>
}

const MobileMenu = ({ links }: MobileMenuProps) => {
  const [openSignInForm, setOpenSignInForm] = useState(false)
  const { user, signOutClearDataUnlockGrid } = useFirebase()

  const toggleOpenSignInForm = useCallback(() => {
    setOpenSignInForm(prev => !prev)
  }, [])

  return (
    <>
      <Popover className='fixed z-40 flex flex-col items-end text-lg text-center text-white bottom-5 right-5 sm:hidden'>
        {({ open }) => (
          <>
            <Transition
              enter='transition duration-400 ease-in'
              enterFrom='transform scale-95 opacity-0 translate-y-10'
              enterTo='transform translate-y-0 scale-100 opacity-100'
              leave='transition duration-400 ease-in'
              leaveFrom='transform scale-100 opacity-100 translate-y-0'
              leaveTo='transform scale-95 opacity-0 translate-y-10'
            >
              <Popover.Panel className='flex flex-col items-end justify-end h-screen'>
                <div className='flex flex-col items-center justify-around w-full p-3 font-serif rounded-lg bg-primary h-1/2'>
                  {user && (
                    <span className='capitalize text-orange'>
                      {user.displayName}
                    </span>
                  )}
                  {links.map(navItem => (
                    <Link key={navItem.page} href={navItem.route}>
                      <a className='w-full px-2 transition-all duration-150 rounded opacity-100 focus:ring focus:ring-teal/50'>
                        {navItem.page}
                      </a>
                    </Link>
                  ))}
                  {user?.displayName ? (
                    <button onClick={signOutClearDataUnlockGrid}>
                      Sign-out
                    </button>
                  ) : (
                    <button
                      className='animate-bounce'
                      // className='w-full transition-all duration-150 rounded opacity-100 focus:ring focus:ring-teal focus:ring-opacity-50'
                      onClick={toggleOpenSignInForm}
                    >
                      Sign-in
                    </button>
                  )}
                </div>
                <div className='mr-5 border-t-primary border-t-[1rem] border-r-transparent border-r-8 border-l-transparent border-l-8' />
              </Popover.Panel>
            </Transition>
            <Popover.Button
              className={`flex items-center justify-center sm:hidden w-10 h-10 rounded-full m-2 no-tap-highlight ${
                open ? 'bg-teal text-black' : 'bg-primary'
              }`}
            >
              <span
                aria-hidden='true'
                className={`block absolute h-0.5 w-5 bg-current transition duration-500 ease-in-out ${
                  open ? 'rotate-45' : '-translate-y-1.5'
                }`}
              />
              <span
                aria-hidden='true'
                className={`block absolute h-0.5 w-5 bg-current transition duration-500 ease-in-out ${
                  open ? 'opacity-0 text-teal' : 'bg-current'
                }`}
              />
              <span
                aria-hidden='true'
                className={`block h-0.5 w-5 bg-current transition duration-500 ease-in-out ${
                  open ? '-rotate-45' : 'translate-y-1.5'
                }`}
              />
            </Popover.Button>
          </>
        )}
      </Popover>
      <Auth open={openSignInForm && !user} onClose={toggleOpenSignInForm} />
    </>
  )
}

export default MobileMenu
