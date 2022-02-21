import { useState } from 'react'
import Image from 'next/image'
import type { Character } from 'lib/types'

import ProfileDisplay from '@components/Character/ProfileDisplay'
import ProfileFooter from '@components/Character/ProfileFooter'
import { getCharsProfile } from '@components/NotionAPI/characters'

import bgImg from 'public/images/BG Blue.jpg'

interface Props {
  /** All characters from the town specified in the URL. Fetched from Notion DB. */
  character: Character
}

/** Page displaying carousel of characters from a particular town. Contains links to individual character pages. */
const Profile = ({ character }: Props) => {
  const [toggleTransition, setToggleTransition] = useState(true)
  const [showEverydayFood, setShowEverydayFood] = useState(true)
  const stateChange = () => {
    setToggleTransition(prev => !prev)
    setTimeout(() => {
      setShowEverydayFood(prev => !prev)
    }, 300)
  }

  return (
    <>
      <Image
        className='fixed z-0 opacity-70'
        src={bgImg}
        alt='background image'
        layout='fill'
        objectFit='cover'
      />
      <ProfileDisplay
        character={character}
        showEverydayFood={showEverydayFood}
        toggleTransition={toggleTransition}
      />
      <ProfileFooter location={character.location} stateChange={stateChange} />
    </>
  )
}

export const getServerSideProps = async (context: {
  query: { profile: string }
}) => {
  // Retrieve characters from town by slug in URL.
  const character = await getCharsProfile(context.query.profile)
  return {
    props: {
      character
    }
  }
}

export default Profile
