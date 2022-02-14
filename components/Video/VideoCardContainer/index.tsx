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
      className='flex flex-col overflow-hidden bg-primary rounded-2xl'
      key={youtubeVideoID}
      onClick={() =>
        clickFunction(`https://www.youtube.com/watch?v=${youtubeVideoID}`)
      }
    >
      <VideoCard title={title} youtubeVideoID={youtubeVideoID} />
      <h1 className='px-4 py-1 font-serif text-white text-md hover:opacity-75'>
        {title}
      </h1>
    </button>
  )
}

export default VideoCardContainer
