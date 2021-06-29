import type { AppProps } from 'next/app'
import Navbar, { NavLinkProps } from '@components/NavBar'
import '@styles/main.css'

const linkList: NavLinkProps[] = [
  {
    page: 'Home',
    route: '/'
  },
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
]

const FoodBank = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Navbar links={linkList} />
      <main className='h-full md:mt-16'>
        <Component {...pageProps} />
      </main>
    </>
  )
}
export default FoodBank
