import type { AppProps } from 'next/app'
import Navbar from '@components/NavBar'
import { NavLinkProps } from '@components/NavBar/NavLink'
import MobileMenu from '@components/MobileMenu'
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
    route: '/'
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
    <>
      <MobileMenu links={links} />
      <Navbar links={links} />
      <main className='relative min-h-screen lg:main mt-14'>
        <Component {...pageProps} />
      </main>
    </>
  )
}
export default FoodBank
