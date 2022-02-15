import React, { useEffect, useState } from 'react'
import { useRouter, NextRouter } from 'next/router'
import CharacterCarousel from 'components/Character/Carousel'
import Image from 'next/image'
import Background from 'public/images/characters/bg-turquoise.webp'
import { getCharsFromTown } from '@components/API/characters'
import descData from '@components/Map/assets/description.json'
import type { Character } from 'lib/types'
import { useViewport } from 'lib/hooks'

interface Props {
  characters: Character[]
}

const Town = ({ characters }: Props) => {
  const route: NextRouter = useRouter()
  const { location } = route.query
  const [allcharacters, setAllCharacters] = useState<Array<Character>>([])
  const [title, setTitle] = useState<string | undefined>('')
  const [maxCharsPerPage, setMaxCharsPerPage] = useState<number>(1)
  const { width } = useViewport()

  useEffect(() => {
    const locationInfo = descData.descriptionArray.find(
      x => x.route === location
    )
    setTitle(locationInfo?.headerText)
  }, [])

  useEffect(() => {
    console.log(characters)
    setAllCharacters(characters)
  }, [characters])

  useEffect(() => {
    setNextPrev({
      next: allcharacters.length > 4 ? true : false,
      prev: false
    })
  }, [allcharacters])

  // Adjust max chars that display on the page based on viewport width.
  useEffect(() => {
    if (width < 640) {
      setMaxCharsPerPage(1)
    } else if (640 <= width && width < 768) {
      // sm breakpoint
      setMaxCharsPerPage(1)
    } else if (768 <= width && width < 1024) {
      // md breakpoint
      setMaxCharsPerPage(1)
    } else if (1024 <= width && width < 1280) {
      // lg breakpoint
      setMaxCharsPerPage(2)
    } else if (1280 <= width && width < 1536) {
      // xl breakpoint
      setMaxCharsPerPage(3)
    } else {
      // 2xl breakpoint
      setMaxCharsPerPage(4)
    }
  }, [width])

  const [pageNumber, setPageNumber] = useState(1)
  const [hasnextprev, setNextPrev] = useState({
    next: false,
    prev: false
  })
  const pagination = (
    array: Character[],
    page_size: number,
    page_number: number
  ) => {
    return array.slice((pageNumber - 1) * page_size, page_number * page_size)
  }
  const pagehandle = (direction: string) => {
    if (direction == 'right') {
      setNextPrev(
        pageNumber < allcharacters.length / 4
          ? { prev: true, next: false }
          : { prev: true, next: false }
      )
      setPageNumber(pageNumber => pageNumber + 1)
    } else {
      setNextPrev(
        pageNumber > 1
          ? { prev: false, next: true }
          : { prev: true, next: true }
      )
      setPageNumber(pageNumber => pageNumber - 1)
    }
  }
  return (
    <div className='h-screen sm:pt-14'>
      <div className='z-0'>
        <Image
          src={Background}
          objectFit='cover'
          layout='fill'
          alt='background'
        />
      </div>
      <div className=' z-10 mt-8'>
        <h1 className='my-24 text-center text-6xl text-white font-serif relative'>
          {title}
        </h1>
        <CharacterCarousel
          characters={pagination(allcharacters, maxCharsPerPage, pageNumber)}
          maxPerPage={maxCharsPerPage}
          hasNext={hasnextprev.next}
          hasPrev={hasnextprev.prev}
          pageHandle={pagehandle}
        />
      </div>
    </div>
  )
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

export default Town
