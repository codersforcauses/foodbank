import React from 'react'
import Map from 'Components/Map'
import Dialogue from 'Components/Dialogue'
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
  return (
    <>
      <AudioButton soundFile={songLocation} loop={true} />
      <Map />
      <Dialogue
        messages={messages}
        speaker={'bananaman'}
        avatar={bananamanAvatar}
      />
    </>
  )
}

export default TemporaryHome
