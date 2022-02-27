import type { Character } from 'lib/types'

import CharacterImg from '@components/Character/CharacterImg'
import ProfileItem from '@components/Character/ProfileItem'

interface Props {
  /** All characters from the town specified in the URL. Fetched from Notion DB. */
  character: Character
  showEverydayFood: boolean
  toggleTransition: boolean
}
function ProfileDisplay({
  character,
  showEverydayFood,
  toggleTransition
}: Props) {
  return (
    <>
      <div className='relative flex h-full  flex-col sm:space-x-24 items-center justify-center content-center main sm:pt-14 sm:flex-row  md:space-x-4 '>
        <CharacterImg
          character={character}
          showEverydayFood={showEverydayFood}
          toggleTransition={toggleTransition}
        />
        <div className='relative w-52 ml-0 lg:w-128 md:w-72 h-max flex flex-col justify-center items-center bg-grey-light rounded-3xl font-serif shadow-2xl'>
          <ProfileItem
            character={character}
            showEverydayFood={showEverydayFood}
          />
        </div>
      </div>
    </>
  )
}

export default ProfileDisplay
