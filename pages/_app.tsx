import type { AppProps } from 'next/app'
import Navbar from '@components/NavBar'
import '@styles/main.css'
import MobileMenu from '@components/MobileMenu'
const FoodBank = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <MobileMenu />
      <Navbar />
      <main className='relative min-h-full lg:main lg:mt-16'>
        <Component {...pageProps} />
      </main>
    </>
  )
}
export default FoodBank
