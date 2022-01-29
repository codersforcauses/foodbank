import PopupVideo from '@components/Video/PopupVideo'
import VideoCard from '@components/Video/VideoCard'
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'

interface Video {
  youtubeVideoID: string
  title: string
}

interface VideosGridProps {
  videos: Array<Video>
}

const VideosGridView: React.FC<VideosGridProps> = ({ videos }) => {
  videos = [
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
    },
    {
      youtubeVideoID: 'njdJeu95p6s',
      title: 'Top 3 Ways to Center a DIV with CSS'
    }
  ]

  const [popupVisible, setPopupVisibility] = useState(false)
  const handlePopupVisibility = () => setPopupVisibility(!popupVisible)
  const [activeVideo, setActiveVideo] = useState(
    'https://www.youtube.com/watch?v=oUVCWNQFGTc'
  )
  const handleActiveVideoChange = (url: string) => {
    setActiveVideo(url)
    setPopupVisibility(true)
  }

  const videoCards = videos.map(video => {
    const { youtubeVideoID, title } = video
    return (
      <button
        className='bg-primary flex flex-col rounded-2xl overflow-hidden'
        key={youtubeVideoID}
        onClick={() =>
          handleActiveVideoChange(
            'https://www.youtube.com/watch?v=' + youtubeVideoID
          )
        }
      >
        <VideoCard title={title} youtubeVideoID={youtubeVideoID} />
        <h1 className=' px-4 py-1 font-serif text-md text-white hover:opacity-75'>
          {title}
        </h1>
      </button>
    )
  })

  return (
    <>
      <div className='grid gap-10 grid-1'>
        <div className='flex justify-center m-10'>
          <div className='grid mt-6 sm:grid-cols-2 lg:grid-cols-3 gap-14'>
            {videoCards}
          </div>
        </div>
      </div>
      <Transition.Root show={popupVisible} as={Fragment}>
        <Dialog
          onClose={() => setPopupVisibility(false)}
          className='fixed z-10 inset-0 overflow-y-auto'
        >
          <div className='flex items-center justify-center min-h-screen'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <Dialog.Overlay className='fixed inset-0 bg-black opacity-30' />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              enterTo='opacity-100 translate-y-0 sm:scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 translate-y-0 sm:scale-100'
              leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            >
              <div className='relative bg-primary rounded max-w-3xl mx-auto p-5'>
                <PopupVideo url={activeVideo} />
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  )
}

export default VideosGridView
