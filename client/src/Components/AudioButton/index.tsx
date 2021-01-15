import useAudio from 'lib/hooks/useAudio'
import React from 'react'

interface Props {
  soundFile: string
  loop: boolean
}
const AudioButton: React.FC<Props> = ({ soundFile, loop }: Props) => {
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

export default AudioButton
