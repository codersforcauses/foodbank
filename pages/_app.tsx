import type { AppProps } from 'next/app'
import Navbar from '@components/NavBar'
import '@styles/main.css'
import MobileMenu from '@components/MobileMenu'
const FoodBank = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <MobileMenu />
      <Navbar />
      <main className='min-h-screen lg:main'>
        <Component {...pageProps} />
      </main>
    </>
  )
}
export default FoodBank
