import type { Character } from 'lib/types'
import ProfileItem from '@components/Character/ProfileItem'
import CharacterImg from '@components/Character/CharacterImg'
interface Props {
  /** All characters from the town specified in the URL. Fetched from Notion DB. */
  character: Character
  state: boolean
  isShowing: boolean
}

function ProfileDisplay({ character, state, isShowing }: Props) {
  return (
    <>
      <div className='relative flex space-x-24 items-center justify-center main'>
        <div>
          <CharacterImg
            character={character}
            state={state}
            isShowing={isShowing}
          />
        </div>
        <div className='relative w-128 h-max flex flex-col justify-center items-center bg-grey-light z-20 rounded-3xl font-serif'>
          <ProfileItem character={character} state={state} />
        </div>
      </div>
    </>
    // </div>
  )
}

export default ProfileDisplay
