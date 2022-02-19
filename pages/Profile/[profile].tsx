import React, { useEffect, useState } from 'react'
import { useRouter, NextRouter } from 'next/router'
import Image from 'next/image'
import Background from 'public/images/BG Blue.jpg'
import { getCharsFromTown } from '@components/API/characters'
import type { Character } from 'lib/types'

interface Props {
    /** All characters from the town specified in the URL. Fetched from Notion DB. */
    character: Character
}

/** Page displaying carousel of characters from a particular town. Contains links to individual character pages. */
const Profile = ({ character }: Props) => {
    const route: NextRouter = useRouter()
    const { profile } = route.query
    const [title, setTitle] = useState<string | undefined>('')
    // Set the title of the page based on the location slug in the URL.

    return <span>bob</span>
}
export const getServerSideProps = async (context: {
    query: { location: string }
}) => {
    // Retrieve characters from town by slug in URL.
    const characters = await getCharsFromTown(context.query.location)
    return {
        props: {
            characters
        }
    }
}

export default Profile
