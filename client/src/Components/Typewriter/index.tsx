// modified from https://github.com/tanmaylaud/react-typewriting-effect/blob/master/src/Typewriter.tsx

import React, { useEffect, useState } from 'react'

interface Props {
  string: string
  delay?: number
  stopBlinkinOnComplete?: boolean
  className?: string
  onComplete?: () => void
  cursor?: string
  cursorClassName?: string
}

export const Typewriter: React.FC<Props> = ({
  string,
  delay = 100,
  stopBlinkinOnComplete = false,
  className,
  onComplete = () => {
    return
  },
  cursor = '|',
  cursorClassName = undefined
}: Props) => {
  const [text, setText] = useState('')
  const [pointer, setPointer] = useState(-1)
  const [isBlinking, setBlinking] = useState(true)

  useEffect(() => {
    let isMounted = true

    if (pointer < string.length) {
      setTimeout(() => {
        if (isMounted) setText(text + string.charAt(pointer))
        if (isMounted) setPointer(pointer + 1)
      }, delay)
    } else {
      if (stopBlinkinOnComplete && isMounted) setBlinking(false)
      if (isMounted) onComplete()
    }

    return () => {
      isMounted = false
    }
  }, [pointer])

  return (
    <span className={className}>
      {text}
      {isBlinking ? (
        <span className={cursorClassName || 'blinkingCursor'}>{cursor}</span>
      ) : null}
    </span>
  )
}
