import Typewriter from 'Components/Typewriter'
import React, { useState } from 'react'
import './index.css'

interface Props {
  messages: string[]
  speaker: string
  avatar: string //file location??
}

const Dialogue: React.FC<Props> = ({ messages, speaker, avatar }: Props) => {
  const [displayDialogue, setDisplayDialogue] = useState('block')

  const [typingState, setTypingState] = useState({
    currentMessage: 0,
    typing: true,
    typed: false,
    delay: 100
  })
  const handleClick = () => {
    if (typingState.typed) {
      if (typingState.currentMessage < messages.length - 1) {
        setTypingState({
          typing: true,
          typed: false,
          delay: 100,
          currentMessage: typingState.currentMessage + 1
        })
      } else {
        setDisplayDialogue('none')
      }
    } else {
      setTypingState({
        typing: false,
        typed: true,
        delay: 10,
        currentMessage: typingState.currentMessage
      })
    }
  }

  const onTypingComplete = () => {
    setTypingState({
      typing: false,
      typed: true,
      delay: 100,
      currentMessage: typingState.currentMessage
    })
  }

  const Message = ({ message }: { message: string }) => {
    if (!typingState.typed) {
      return (
        <Typewriter
          string={message}
          onComplete={onTypingComplete}
          delay={typingState.delay}
        />
      )
    }
    return <>{message}</>
  }

  return (
    <div className='overlay' style={{ display: displayDialogue }}>
      <div className='dialogue'>
        <div className='speaker'>
          {speaker}
          <img src={avatar} alt={speaker} />
        </div>
        <div className='dialogueMessage'>
          <Message message={messages[typingState.currentMessage]} />
        </div>
        <div
          role='button'
          className='dialogueNext'
          onClick={handleClick}
          onKeyDown={handleClick}
          tabIndex={0}
        >
          Next
        </div>
      </div>
    </div>
  )
}

export default Dialogue
