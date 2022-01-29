import React from 'react'
import { PropsWithChildren } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export interface VideoCardProps {
  title: string
  youtubeVideoID: string
}

const VideoCard = ({
  title,
  youtubeVideoID,
  ...props
}: PropsWithChildren<VideoCardProps>) => {
  const videoURL = 'https://www.youtube.com/watch?v=' + youtubeVideoID
  //const videoThumbnail = "https://img.youtube.com/vi/" + youtubeVideoID + "/maxresdefault.jpg";
  const videoThumbnail =
    'https://img.youtube.com/vi/' + youtubeVideoID + '/0.jpg'

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
