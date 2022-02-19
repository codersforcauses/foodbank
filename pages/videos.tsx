import { FC, useState } from 'react'

import { getVideos } from '@components/API/getData'
import PopupVideo from '@components/Video/PopupVideo'
import VideoCardContainer from '@components/Video/VideoCardContainer'

export interface Video {
  youtubeVideoID: string
  title: string
}

interface VideosGridProps {
  videos: Array<Video>
}

// in case getVideos() returns null
const DEFAULT_VIDEOS = [
  {
    youtubeVideoID: 'oUVCWNQFGTc',
    title: 'Knife Safety for Kids'
  }
]

const VideosGridView: FC<VideosGridProps> = ({ videos }) => {
  const [popupVisible, setPopupVisibility] = useState(false)
  const [activeVideo, setActiveVideo] = useState(
    `https://www.youtube.com/watch?v=${videos[0]}`
  )
  const handleActiveVideoChange = (url: string) => {
    setActiveVideo(url)
    setPopupVisibility(true)
  }

  return (
    <>
      <div className='flex justify-center md:pt-14'>
        <div className='grid mt-6 sm:grid-cols-2 lg:grid-cols-3 gap-14'>
          {videos.map(video => (
            <VideoCardContainer
              key={video.youtubeVideoID}
              {...video}
              clickFunction={handleActiveVideoChange}
            />
          ))}
        </div>
      </div>
      <PopupVideo
        url={activeVideo}
        visible={popupVisible}
        setVisibility={setPopupVisibility}
      />
    </>
  )
}

export const getServerSideProps = async () => {
  let data = await getVideos()

  return {
    props: {
      videos: data ?? DEFAULT_VIDEOS
    }
  }
}

export default VideosGridView
