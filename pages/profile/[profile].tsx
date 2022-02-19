import React, { useEffect, useState } from 'react'
import { useRouter, NextRouter } from 'next/router'
import Image from 'next/image'
import bgImg from 'public/images/BG Blue.jpg'
import { getCharsProfile } from '@components/API/characters'
import type { Character } from 'lib/types'
import Footer from '@components/Footer'
import ProfileDisplay from '@components/Character/ProfileDisplay'

interface Props {
  /** All characters from the town specified in the URL. Fetched from Notion DB. */
  character: Character
}

/** Page displaying carousel of characters from a particular town. Contains links to individual character pages. */
const Profile = ({ character }: Props) => {
  const route: NextRouter = useRouter()
  const { profile } = route.query
  console.log(character)
  // Set the title of the page based on the location slug in the URL.
  return (
    <>
      <Image
        className='fixed z-0 opacity-70'
        src={bgImg}
        alt='background image'
        layout='fill'
        objectFit='cover'
      />
      {/* <div>
            <ProfileDisplay character={character} />
        </div> */}
      <Footer />
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
