import Image from 'next/image'
import Link from 'next/link'

import { Character } from '@lib/types'

import explosion from 'public/images/Extra/explosion.png'

export interface CardProps {
  /**
   * Has this recipe been unlocked?
   */
  unlocked?: boolean
  /**
   * Recipe title
   */
  label: string
  /**
   * Image to show
   */
  image: StaticImageData | string
  /**
   * Alt text for image
   */
  text: string
  /**
   * Color of Card
   */
  color: 'Primary' | 'Orange' | 'Teal' | 'Blue'
  /**
   * Optional click handler
   */
  onClick?: () => void
  /**
   * Slug part of the recipe url
   */
  slug: string
  /**
   * Character for the recipe
   */
  character?: Character
}

const getClassesFromColor = (color: string, unlocked: boolean) => {
  if (unlocked) {
    switch (color) {
      case 'Primary':
        return 'unlocked bg-primary text-white'

      case 'Teal':
        return 'unlocked bg-teal text-black'

      case 'Orange':
        return 'unlocked bg-orange text-black'

      default:
        return 'unlocked bg-blue text-black'
    }
  } else {
    return 'locked bg-grey opacity-50 text-black'
  }
}

const Card = ({
  unlocked = true,
  label,
  image,
  text,
  color,
  slug,
  character,
  ...props
}: CardProps) => {
  return (
    <div
      className={`${getClassesFromColor(
        color,
        unlocked
      )} w-fit h-fit rounded-[10%] text-center relative shadow-xl hover:shadow-2xl`}
      {...props}
    >
      <div className='flex flex-col'>
        {character && (
          <>
            <Link
              href={{
                pathname: '/recipes/recipe/',
                query: {
                  name: slug
                }
              }}
              passHref
            >
              <div className='cursor-pointer'>
                <div className='w-full !span-child-relative mt-8'>
                  <Image
                    className='!relative !w-full !h-[unset] object-contain'
                    src={image}
                    alt={text}
                    layout='fill'
                  />
                </div>
                <h1 className='text-2xl font-semibold tracking-wide'>
                  {label}
                </h1>
              </div>
            </Link>
            {/* Superhero on top of the recipe image */}
            <div className='w-1/2 !span-child-relative absolute top-0 right-0 -mr-10 -mt-14 opacity-80'>
              <Image
                className='!relative !w-full !h-[unset] object-contain'
                src={explosion}
                alt='explosion'
                layout='fill'
              />
            </div>
            <div className='w-[30%] h-[55%] absolute top-0 right-0 -mr-2 -mt-16'>
              <Image
                className='!relative !w-full !h-[unset] object-contain'
                src={character.imageGif}
                alt={character.name}
                layout='fill'
              />
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Card
