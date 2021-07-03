import type { AppProps } from 'next/app'
import Navbar from '@components/NavBar'
import '@styles/main.css'

const FoodBank = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Navbar />
      <main className='h-full md:mt-16'>
        <Component {...pageProps} />
      </main>
    </>
  )
}
export default FoodBank
