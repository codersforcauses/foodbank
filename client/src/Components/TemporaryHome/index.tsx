import React, { useEffect, useRef, useState } from 'react'
import Map from 'Components/Map'
import Dialogue from 'Components/Dialogue'
import { Location } from 'lib/types'
import bananamanAvatar from 'lib/assets/banana.jpg'
import AudioButton from 'Components/AudioButton'

// TODO messages from DB?
const songLocation =
  'https://freesound.org/data/previews/475/475736_4397472-lq.mp3'

const messages = [
  'Hi I am banana man nice to meet you',
  'This is tucker island, I hope you have a jolly good time learning here',
  'pew pew, Bnaana man out'
]

const TemporaryHome: React.FC = () => {
  const [height, setHeight] = useState(0)
  const elementRef = useRef(null as null | HTMLDivElement)

  useEffect(() => {
    if (elementRef?.current?.clientHeight) {
      setHeight(elementRef?.current?.clientHeight)
    }
  }, []) //empty dependency array so it only runs once at render

  const [selected, onSelect] = useState<Location | null>(null)

  return (
    <>
      <AudioButton soundFile={songLocation} loop={true} />
      <div className='flex-auto'>
        <div
          ref={elementRef}
          className='h-full 2xl:h-4/5 xl:h-4/5 flex justify-center'
        >
          {height === 0 ? null : (
            <Map selected={selected} onSelect={onSelect} height={height} />
          )}
        </div>
      </div>
      <Dialogue
        messages={messages}
        speaker={'bananaman'}
        avatar={bananamanAvatar}
      />
    </>
  )
}

export default TemporaryHome
