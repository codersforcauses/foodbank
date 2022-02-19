import type { Character } from 'lib/types'
import Image from 'next/image'
import { Transition } from '@headlessui/react'
import { useState } from 'react'
interface Props {
  character: Character
  state: boolean
}

function CharacterImg({ character, state }: Props) {
  return (
    <>
      {state ? (
        <Transition
          appear={true}
          enter='transition-opacity duration-75'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='transition-opacity duration-150'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <Image
            src={character.image}
            alt='Everyday Food'
            width={400}
            height={400}
          />
        </Transition>
      ) : (
        <Image
          src={character.aliasImage}
          alt='Superhero Food'
          width={400}
          height={400}
        />
      )}
    </>
  )
}

export default CharacterImg
