import React, { useEffect, useState } from 'react'
import { useRouter, NextRouter } from 'next/router'
import CharacterCarousel from 'components/Character/Carousel'
import Image from 'next/image'
import Background from 'public/images/characters/bg-turquoise.webp'
import { getCharsFromTown } from '@components/API/characters'
import locations from '@components/Map/assets/locations'
import type { Character, Location } from 'lib/types'
import { useViewport } from 'lib/hooks'

interface Props {
  /** All characters from the town specified in the URL. Fetched from Notion DB. */
  characters: Character[]
}

/** Page displaying carousel of characters from a particular town. Contains links to individual character pages. */
const Town = ({ characters }: Props) => {
  const route: NextRouter = useRouter()
  const { location } = route.query
  const [title, setTitle] = useState<string | undefined>('')
  const [maxCharsPerPage, setMaxCharsPerPage] = useState<number>(1)
  const [pageNumber, setPageNumber] = useState(1)
  const [canGoToNextPage, setCanGoToNextPage] = useState<boolean>(false)
  const [canGoToPrevPage, setCanGoToPrevPage] = useState<boolean>(false)
  const { height, width }: { height: number; width: number } = useViewport()

  // Set the title of the page based on the location slug in the URL.
  useEffect(() => {
    const locationInfo: Location | undefined = locations.find(
      loc => loc.route === location
    )
    setTitle(locationInfo?.headerText)
  }, [location])

  // Determine whether next/prev buttons should render.
  useEffect(() => {
    pageNumber > 1 ? setCanGoToPrevPage(true) : setCanGoToPrevPage(false)
    pageNumber * maxCharsPerPage < characters.length
      ? setCanGoToNextPage(true)
      : setCanGoToNextPage(false)
  }, [pageNumber, maxCharsPerPage, characters])

  // Adjust max chars that display on the page based on viewport width.
  useEffect(() => {
    if (width < 640) {
      setMaxCharsPerPage(1)
    } else if (640 <= width && width < 768) {
      // sm breakpoint
      setMaxCharsPerPage(1)
    } else if (768 <= width && width < 1024) {
      // md breakpoint
      setMaxCharsPerPage(2)
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

  /** Returns the subarray of characters displayed on the current page.*/
  const pagination = (
    array: Character[],
    page_size: number,
    page_number: number
  ) => {
    return array.slice((pageNumber - 1) * page_size, page_number * page_size)
  }

  /** Increments or decrements the page number. */
  const pagehandle = (direction: string) => {
    if (direction == 'right') {
      setPageNumber(pageNumber => pageNumber + 1)
    } else {
      setPageNumber(pageNumber => pageNumber - 1)
    }
  }

  return (
    <div className='min-h-screen sm:pt-14'>
      <div className='z-0'>
        <Image
          src={Background}
          objectFit='cover'
          layout='fill'
          alt='background'
        />
      </div>
      <div className='flex flex-col z-10 h-full items-center'>
        <h1 className='text-center mt-20 text-6xl text-white font-serif relative'>
          {title}
        </h1>
        <CharacterCarousel
          characters={pagination(characters, maxCharsPerPage, pageNumber)}
          direction={width < 768 ? 'vertical' : 'horizontal'}
          maxPerPage={maxCharsPerPage}
          hasNextPage={canGoToNextPage}
          hasPrevPage={canGoToPrevPage}
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
