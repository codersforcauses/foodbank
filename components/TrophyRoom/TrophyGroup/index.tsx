import Image from 'next/image'

interface Props {
  trophy1: StaticImageData | null
  trophy2: StaticImageData | null
  trophy3: StaticImageData | null
  side: string
}

const TrophyGroup = ({ trophy1, trophy2, trophy3, side }: Props) => {
  const numTrophies: number =
    trophy1 === null ? 0 : trophy2 === null ? 1 : trophy3 === null ? 2 : 3
  return (
    <div
      className={
        'w-[45%] ' +
        (side === 'left'
          ? 'sm:pl-9 md:pl-12 lg:pl-14'
          : 'sm:pr-9 md:pl-2 md:pr-10 lg:pl-2 lg:pr-12')
      }
    >
      <div className='flex items-center'>
        {trophy1 && (
          <div className='w-1/3'>
            <Image src={trophy1} alt='Trophy' />
          </div>
        )}
        {trophy2 && (
          <div className='w-1/3'>
            <Image src={trophy2} alt='Trophy' />
          </div>
        )}
        {trophy3 && (
          <div className='w-1/3'>
            <Image src={trophy3} alt='Trophy' />
          </div>
        )}
      </div>
      <div className='relative bottom-0 w-full h-3 bg-white md:h-4 lg:h-5 lg:mt-1'>
        <div className='absolute w-full font-serif text-center text-[70%] md:text-sm  -top-0.5 lg:top-0'>
          {numTrophies} / 3
        </div>
        <div className='mx-2 py-0.5'>
          <div
            className='h-2 bg-green md:h-3 lg:h-4'
            style={{ width: (numTrophies * 100) / 3 + '%' }}
          ></div>
        </div>
      </div>
    </div>
  )
}

export default TrophyGroup
