import type { AppProps } from 'next/app'
import Navbar from '@components/NavBar'
import { NavLinkProps } from '@components/NavBar/NavLink'
import '@styles/main.css'
import MobileMenu from '@components/MobileMenu'

const links: Array<NavLinkProps> = [
  {
    page: 'Tucker Island',
    route: '/'
  },
  {
    page: 'Recipes',
    route: '/'
  },
  {
    page: 'Drag-Drop Game',
    route: '/'
  },
  {
    page: 'Trophy Room',
    route: '/'
  }
]

const FoodBank = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <MobileMenu links={links} />
      <Navbar links={links} />
      <main className='relative min-h-screen lg:main lg:mt-16'>
        <Component {...pageProps} />
      </main>
    </>
  )
}
export default FoodBank
