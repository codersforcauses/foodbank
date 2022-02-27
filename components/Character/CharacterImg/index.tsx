import Image from 'next/image'
import { Transition } from '@headlessui/react'
import type { Character } from 'lib/types'
interface Props {
  character: Character
  showEverydayFood: boolean
  toggleTransition: boolean
}

function CharacterImg({
  character,
  showEverydayFood,
  toggleTransition
}: Props) {
  return (
    <>
      {showEverydayFood ? (
        <Transition
          show={toggleTransition}
          appear={true}
          enter='transition-opacity duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='transition-opacity duration-300'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='lg:w-[32rem] w-52 md:w-96'>
            <Image
              src={character.image}
              alt='Everyday Food'
              width={400}
              height={400}
              layout='responsive'
            />
          </div>
        </Transition>
      ) : (
        <Transition
          show={!toggleTransition}
          appear={true}
          enter='transition-opacity duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='transition-opacity duration-300'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='lg:w-[32rem] w-52 md:w-96'>
            <Image
              src={character.aliasImage}
              alt='Superhero Food'
              width={400}
              height={400}
            />
          </div>
        </Transition>
      )}
    </>
  )
}

export default CharacterImg
