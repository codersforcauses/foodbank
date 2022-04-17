import Image from 'next/image'

import TrophyCabinet from '@components/TrophyRoom/TrophyCabinet'

import Background from 'public/images/blue-purple-bg.webp'
import VitaminCLion from 'public/images/lion.webp'
import Melonator from 'public/images/watermelonflipped.webp'
import { useFirebase } from '@components/FirebaseContext/context'

const TrophyRoom = () => {
  const { achievementsCount } = useFirebase()
  return (
    <div className='min-h-screen sm:pt-14'>
      <div className='z-0'>
        <Image
          src={Background}
          layout='fill'
          objectFit='cover'
          alt='background'
        />
      </div>
      <h1 className='text-white relative z-10 font-serif text-6xl xl:text-7xl text-center pt-10'>
        Trophy Room
      </h1>
      <div className='flex items-end justify-center mx-auto sm:w-[40rem] md:w-[48rem] lg:w-[64rem]'>
        <div className='max-w-sm hidden sm:block'>
          <Image src={Melonator} alt='Melonator' />
        </div>
        <TrophyCabinet numUnlocked={achievementsCount.count} />
        <div className='hidden max-w-sm sm:block'>
          <Image src={VitaminCLion} alt='Vitamin C Lion' />
        </div>
      </div>
    </div>
  )
}

export default TrophyRoom
