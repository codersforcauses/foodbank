/* eslint-disable react/prop-types */
import React from 'react'
import './index.css'
import Button from '../Button'
import bananaMan from './The-Dicer-Colour.gif'
import transformMan from './Mighty-Milk.gif'
import { useState } from 'react'
import Typewriter from 'Components/Typewriter'
export interface DialogueProps {
  /**
   * Header colour: enter either orange/primary
   */
  headerColor?: 'primary' | 'orange'

  /**
   * The character's name
   */
  characterName?: string

  /**
   * character name of transformed form
   */
  transformName?: string

  /**
   * List of messages that the characters says
   */
  dialogueText?: string[]

  /**
   * character image - file source (location)
   */
  avatar?: string

  /**
   * transformed avatar
   */
  transformAvatar?: string

  /**
   * transformation animations
   */
  transformAnimation?: () => void

  /**
   * show character image on left/right
   */
  direction?: 'left' | 'right'

  /**
   * show transform button (shows transform button at the end of the dialogue)
   */
  transform?: boolean

  /**
   * include back button for dialogue
   */
  backButton?: boolean

  /**
   * function for closing the dialogue
   */
  closeDialogue?: () => void
}

/**
 * Primary UI component for user interaction
 */
export const Dialogue: React.FC<DialogueProps> = ({
  characterName = 'Banana Man',
  transformName = 'Super Banana Man',
  dialogueText = [
    'Hello I am banana man',
    'welcome to my island',
    'how are you going today?',
    'bananas are good for potassium and stuff',
    'Goodbye I was banana man'
  ],
  headerColor = 'orange',
  avatar = bananaMan,
  transformAvatar = transformMan,
  transformAnimation,
  direction = 'right',
  transform = 'true',
  backButton = 'true',
  closeDialogue
}) => {
  const bgColour: 'bg-primary' | 'bg-orange' =
    headerColor === 'primary' ? 'bg-primary' : 'bg-orange'

  const numMessage = dialogueText.length
  const [characterTransformed, setCharacterTransformed] = useState(false)
  const [displayImage, setDisplayImage] = useState(avatar)
  const [displayName, setDisplayName] = useState(characterName)

  const [displayDialogue, setDisplayDialogue] = useState({
    currentMessage: 0,
    typing: true,
    typed: false
  })

  const handleClickBack = () => {
    if (displayDialogue.currentMessage > 0) {
      setDisplayDialogue({
        currentMessage: displayDialogue.currentMessage - 1,
        typing: false,
        typed: true
      })
    }
  }

  const handleClickNext = () => {
    if (
      displayDialogue.currentMessage < numMessage ||
      (transform && displayDialogue.currentMessage === numMessage)
    ) {
      setDisplayDialogue({
        currentMessage: displayDialogue.currentMessage + 1,
        typing: true,
        typed: false
      })
    }
  }

  // changes character image, and character name
  const transformCharacter = () => {
    transformAnimation
    setCharacterTransformed(true)
    setDisplayImage(transformAvatar)
    setDisplayName(transformName)
  }

  const onTypingComplete = () => {
    setDisplayDialogue({
      typing: false,
      typed: true,
      currentMessage: displayDialogue.currentMessage
    })
  }

  const Message = ({ message }: { message: string }) => {
    if (!displayDialogue.typed) {
      return (
        <Typewriter string={message} onComplete={onTypingComplete} delay={20} />
      )
    }
    return <>{message}</>
  }

  return (
    <div className='w-full grid grid-cols-2 p-4'>
      {direction === 'right' && (
        <div className='col-start-1 col-span-2 sm:col-start-2 sm:col-span-1 -mb-20 md:-mb-40 p-4'>
          <img src={displayImage} alt={characterName} />
        </div>
      )}
      {direction === 'left' && (
        <div className='col-start-1 col-span-2 sm:col-start-1 sm:col-span-1 -mb-20 md:-mb-40 p-4'>
          <img src={displayImage} alt={characterName} />
        </div>
      )}
      <div className='col-span-2'>
        <h2
          className={`font-serif text-white p-2 px-4 border-black border-4 rounded-md ml-10 mt-4 absolute z-10 text-3xl md:text-5xl ${bgColour}`}
        >
          {' '}
          {displayName}{' '}
        </h2>
        <div className='h-64 absolute mt-12 w-full'></div>
        <div className='townboxBackground place-self-center p-8 mt-12 border-black relative flex-col w-full h-64 pb-4 pt-4 border-4 rounded-md grid grid-rows-2'>
          <p className='font-sans p-2 mb-0 z-10 leading-5 relative mt-4 break-words text-2xl md:text-3xl row-start-1'>
            {displayDialogue.currentMessage < numMessage && (
              <Message message={dialogueText[displayDialogue.currentMessage]} />
            )}
          </p>
          {/* show transform button if reached the end of messages */}
          {displayDialogue.currentMessage === numMessage &&
            transform &&
            !characterTransformed && (
              <span className='place-self-center'>
                <Button bgColor={bgColour} onClick={transformCharacter}>
                  transform
                </Button>
              </span>
            )}
          {/* show close button if character has been transformed */}
          {transform && characterTransformed && (
            <span className='place-self-center'>
              <Button bgColor={bgColour} onClick={closeDialogue}>
                close
              </Button>
            </span>
          )}
          {/* show back button */}
          <span className='grid grid-cols-3 row-start-3'>
            <span className='col-start-1'>
              {displayDialogue.currentMessage > 0 &&
                backButton &&
                !characterTransformed && (
                  <Button bgColor={bgColour} onClick={handleClickBack}>
                    back
                  </Button>
                )}
            </span>
            <span className='col-start-4'>
              {/* transform button to be shown */}
              {transform && displayDialogue.currentMessage < numMessage && (
                <Button bgColor={bgColour} onClick={handleClickNext}>
                  next
                </Button>
              )}

              {/* transform button not to be shown */}
              {!transform && displayDialogue.currentMessage < numMessage - 1 && (
                <Button bgColor={bgColour} onClick={handleClickNext}>
                  next
                </Button>
              )}
              {/* show close button if reached end of dialogue */}
              {!transform && displayDialogue.currentMessage === numMessage - 1 && (
                <Button bgColor={bgColour} onClick={closeDialogue}>
                  close
                </Button>
              )}
            </span>
          </span>
        </div>
      </div>
    </div>
  )
}
