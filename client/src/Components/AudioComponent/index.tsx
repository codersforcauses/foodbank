import React, { useEffect, useState } from 'react'

const useAudio: (url: string, loop: boolean) => [boolean, () => void] = (
  url: string,
  loop: boolean
): [boolean, () => void] => {
  const [audio] = useState(new Audio(url))
  const [playing, setPlaying] = useState(false)
  audio.loop = loop
  const toggle = () => {
    setPlaying(!playing)
  }
  useEffect(() => {
    playing ? audio.play() : audio.pause()
  }, [audio, playing])
  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false))
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false))
    }
  }, [audio])
  return [playing, toggle]
}

interface Props {
  soundFile: string
  loop: boolean
}
const AudioComponent: React.FC<Props> = ({ soundFile, loop }: Props) => {
  const [playing, toggle] = useAudio(soundFile, loop)
  return (
    <button
      className='bg-orange'
      style={{
        padding: 10,
        top: 0,
        right: 0,
        position: 'fixed',
        zIndex: 3000
      }}
      onClick={toggle}
    >
      {playing ? 'Pause' : 'Play'} Music
    </button>
  )
}

export default AudioComponent
