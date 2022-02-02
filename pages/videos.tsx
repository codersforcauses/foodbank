import PopupVideo from '@components/Video/PopupVideo'
import { useState } from 'react'
import VideoCardContainer from '@components/Video/VideoCardContainer'

export interface Video {
  youtubeVideoID: string
  title: string
}

interface VideosGridProps {
  videos: Array<Video>
}

const DEFAULT_VIDEOS = [
  {
    youtubeVideoID: 'oUVCWNQFGTc',
    title: 'Knife Safety for Kids'
  },
  {
    youtubeVideoID: 's9F8pu5KfyM',
    title: 'Why Do Computers Suck At Math?'
  },
  {
    youtubeVideoID: 'B1t4Fjlomi8',
    title: 'Why do computers use RGB for colours, and not RBY?'
  },
  {
    youtubeVideoID: 'njdJeu95p6s',
    title: 'Top 3 Ways to Center a DIV with CSS'
  }
]

const VideosGridView: React.FC<VideosGridProps> = ({
  videos = DEFAULT_VIDEOS
}) => {
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
      <div className='grid gap-10 grid-1'>
        <div className='flex justify-center m-10'>
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
      </div>
      <PopupVideo
        url={activeVideo}
        visible={popupVisible}
        setVisibility={setPopupVisibility}
      />
    </>
  )
}

export default VideosGridView
