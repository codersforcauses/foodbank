import React from 'react'
import { PropsWithChildren } from 'react'
import Image from 'next/image'
import { Video } from 'pages/videos'

export interface VideoCardProps extends Video {}

const VideoCard = ({
  title,
  youtubeVideoID
}: PropsWithChildren<VideoCardProps>) => {
  const videoThumbnail = `https://img.youtube.com/vi/${youtubeVideoID}/0.jpg`

  return (
    <div className=' w-full relative overflow-hidden'>
      <Image
        src={videoThumbnail}
        layout='responsive'
        width='480'
        height='360'
        alt={title}
        className='object-contain relative'
      />
    </div>
  )
}

export default VideoCard
