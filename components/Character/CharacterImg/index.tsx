import type { Character } from 'lib/types'
import Image from 'next/image'
import { Transition } from '@headlessui/react'
import { useState } from 'react'
interface Props {
  character: Character
  state: boolean
  isShowing: boolean
}

function CharacterImg({ character, state, isShowing }: Props) {
  return (
    <>
      {state ? (
        <Transition
          show={isShowing}
          enter='transition-opacity duration-75'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='transition-opacity duration-150'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <Image
            className='animate-movement'
            src={character.image}
            width={400}
            height={400}
          />
        </Transition>
      ) : (
        <Image src={character.aliasImage} width={400} height={400} />
      )}
    </>
  )
}

export default CharacterImg
