import Image from 'next/image'

import TrophyCabinet from '@components/TrophyRoom/TrophyCabinet'

import VitaminCLion from 'public/images/lion.webp'
import Melonator from 'public/images/watermelonflipped.webp'

const TrophyRoom = () => {
  return (
    <div className='bg-primary min-h-screen sm:pt-14'>
      <h1 className='text-white font-bold text-6xl text-center pt-10'>
        Trophy Room
      </h1>
      <div className='flex items-end justify-center mx-auto sm:w-[40rem] md:w-[48rem] lg:w-[64rem]'>
        <div className='max-w-sm hidden sm:block'>
          <Image src={Melonator} alt='Melonator' />
        </div>
        <TrophyCabinet />
        <div className='max-w-sm hidden sm:block'>
          <Image src={VitaminCLion} alt='Vitamin C Lion' />
        </div>
      </div>
    </div>
  )
}

export default TrophyRoom
