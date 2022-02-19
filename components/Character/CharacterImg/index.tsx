import Image from 'next/image'
import type { Character } from 'lib/types'
interface Props {
  character: Character
  state: boolean
}

function CharacterImg({ character, state }: Props) {
  return (
    <>
      {state ? (
        <Image
          src={character.image}
          alt='Everyday Food'
          width={400}
          height={400}
        />
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
