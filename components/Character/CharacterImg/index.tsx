import type { Character } from 'lib/types'
import Image from 'next/image'
import { Transition } from '@headlessui/react'
interface Props {
    character: Character
    state: boolean
}
function CharacterImg({ character, state }: Props) {
    console.log(state)
    if (state) {
        return (
            <>
                <Transition show={state}
                    enter="transition-opacity duration-75"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity duration-150"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0">
                    <Image src={character.image} width={400} height={400} />
                </Transition>
            </>
        )
    } else {
        return (
            <>
                <Image src={character.aliasImage} width={400} height={400} />
            </>
        )
    }
}

export default CharacterImg
