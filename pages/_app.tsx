import type { AppProps } from 'next/app'
import { FirebaseProvider } from '@components/Firebase/context'
import Navbar from '@components/NavBar'
import MobileMenu from '@components/MobileMenu'
import '@styles/main.css'

const FoodBank = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <FirebaseProvider>
        <MobileMenu />
        <Navbar />
        <main className='relative min-h-screen lg:main lg:mt-16'>
          <Component {...pageProps} />
        </main>
      </FirebaseProvider>
    </>
  )
}
export default FoodBank
