import type { Character } from 'lib/types'
import ProfileItem from '@components/Character/ProfileItem'
interface Props {
  /** All characters from the town specified in the URL. Fetched from Notion DB. */
  character: Character
}
function ProfileDisplay({ character }: Props) {
  return (
    <>
      <div className='relative flex items-center justify-center main'>
        <div className='relative w-128 h-max flex flex-col justify-center items-center bg-grey-light z-20 rounded-3xl font-serif'>
          <ProfileItem character={character} />
        </div>
      </div>
    </>
    // </div>
  )
}

export default ProfileDisplay
