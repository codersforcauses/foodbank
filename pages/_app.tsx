import type { AppProps } from 'next/app'
import Navbar from '@components/NavBar'
import '@styles/main.css'
import MobileMenu from '@components/MobileMenu/MobileMenu'
const FoodBank = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <MobileMenu/>
      <Navbar />
      <main className='h-full md:mt-16'>
        <Component {...pageProps} />
      </main>
    </>
  )
}
export default FoodBank
