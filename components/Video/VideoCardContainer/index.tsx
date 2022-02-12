import React, { PropsWithChildren } from 'react'

import { Video } from 'pages/videos'

import VideoCard from '../VideoCard'

interface VideoCardContainerProps extends Video {
  clickFunction: (url: string) => void
}

const VideoCardContainer = ({
  youtubeVideoID,
  title,
  clickFunction
}: PropsWithChildren<VideoCardContainerProps>) => {
  return (
    <button
      className='bg-primary flex flex-col rounded-2xl overflow-hidden'
      key={youtubeVideoID}
      onClick={() =>
        clickFunction(`https://www.youtube.com/watch?v=${youtubeVideoID}`)
      }
    >
      <VideoCard title={title} youtubeVideoID={youtubeVideoID} />
      <h1 className=' px-4 py-1 font-serif text-md text-white hover:opacity-75'>
        {title}
      </h1>
    </button>
  )
}

export default VideoCardContainer
