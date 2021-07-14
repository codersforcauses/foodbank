import type { AppProps } from 'next/app'
import Navbar from '@components/NavBar'
import '@styles/main.css'

const FoodBank = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Navbar />
      <main className='relative min-h-screen lg:main lg:mt-16'>
        <Component {...pageProps} />
      </main>
    </>
  )
}
export default FoodBank
