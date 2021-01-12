import { useEffect, useState } from 'react'

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

export default useAudio
