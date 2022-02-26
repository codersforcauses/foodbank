import type { AppProps } from 'next/app'

import LoadingSpinner from '@components/Custom/LoadingSpinner'
import { FirebaseProvider } from '@components/FirebaseContext'
import MobileMenu from '@components/MobileMenu'
import Navbar from '@components/NavBar'
import { NavLinkProps } from '@components/NavBar/NavLink'

import '@styles/main.css'

const links: Array<NavLinkProps> = [
  {
    page: 'Tucker Island',
    route: '/'
  },
  {
    page: 'Recipes',
    route: '/recipes'
  },
  {
    page: 'Fun Food Sort',
    route: '/fun-food-sort'
  },
  {
    page: 'Trophy Room',
    route: '/trophy-room'
  },
  {
    page: 'Videos',
    route: '/videos'
  }
]

const FoodBank = ({ Component, pageProps }: AppProps) => {
  return (
    <FirebaseProvider>
      <MobileMenu links={links} />
      <Navbar links={links} />
      <main className='relative min-h-screen lg:main'>
        <Component {...pageProps} />
      </main>
      <LoadingSpinner />
    </FirebaseProvider>
  )
}
export default FoodBank
