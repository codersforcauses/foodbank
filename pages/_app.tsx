import type { AppProps } from 'next/app'
import Navbar from '@components/NavBar'
import { AchievementContext } from 'contexts'
import achievements from 'lib/achievements'
import '@styles/main.css'

const FoodBank = ({ Component, pageProps }: AppProps) => {
  return (
    <AchievementContext.Provider value={achievements}>
      <Navbar />
      <main className='h-full md:mt-16'>
        <Component {...pageProps} />
      </main>
    </AchievementContext.Provider>
  )
}
export default FoodBank
