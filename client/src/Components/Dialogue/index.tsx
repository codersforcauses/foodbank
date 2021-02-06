/* eslint-disable react/prop-types */
import React from 'react'
import './index.css'
import Button from '../Button'
import bananaMan from './The-Dicer-Colour.gif'
import { useState } from 'react'
export interface DialogueProps {
  // THINGS TO DO:
  //ADD RESPONSIVE DESIGN FOR IMAGE SIZING - MAYBE DON'T SHOW IMAGE ON SMALL MOBILE?
  //ADD ONLY SPECIFIC OPTIONS TO SELECT FOR CHARACTERNAME, AND LINK IT TO SHOW SPECIFIC CHARACTER IMAGES
  //ADD APPEARING TEXT - WORD BY WORD
  //REMOVE DEFAULT MESSAGE PROPS

  /**
   * Header colour: enter either orange/primary
   */
  headerColor?: 'primary' | 'orange'

  /**
   * Character's Name
   */
  characterName?: string

  /**
   * What the character says
   */
  dialogueText?: string[]

  /**
   * character image - file source
   */
  avatar?: string
}

/**
 * Primary UI component for user interaction
 */
export const Dialogue: React.FC<DialogueProps> = ({
  characterName = 'Banana Man',
  dialogueText = [
    'Hello I am banana man',
    'welcome to my island',
    'how are you going today?',
    'bananas are good for potassium and stuff',
    'Goodbye I was banana man',
    'hello I am back',
    'just wanted to say',
    'bye'
  ],
  headerColor = 'orange',
  avatar = bananaMan
}) => {
  const bgColour: 'bg-primary' | 'bg-orange' =
    headerColor === 'primary' ? 'bg-primary' : 'bg-orange'

  const numMessage = dialogueText.length

  const [displayDialogue, setDisplayDialogue] = useState({
    currentMessage: 0
  })

  const handleClickBack = () => {
    if (displayDialogue.currentMessage > 0) {
      setDisplayDialogue({
        currentMessage: displayDialogue.currentMessage - 1
      })
    }
  }

  const handleClickNext = () => {
    if (displayDialogue.currentMessage < numMessage - 1) {
      setDisplayDialogue({
        currentMessage: displayDialogue.currentMessage + 1
      })
    }
  }

  return (
    <div className='w-full grid grid-cols-2 p-4'>
      <div className='col-start-2 col-span-1 -mb-40 p-4'>
        <img src={avatar} alt={characterName} />
      </div>
      <div className='col-span-2'>
        <h2
          className={`font-serif text-white p-2 px-4 border-black border-4 rounded-md ml-10 mt-4 absolute z-10 text-3xl md:text-5xl ${bgColour}`}
        >
          {' '}
          {characterName}{' '}
        </h2>
        <div className='h-64 absolute mt-12 w-full'></div>
        <div className='dialoguebox place-self-center p-8 mt-12 border-black relative flex-col w-full h-64 pb-4 pt-4 border-4 rounded-md grid grid-rows-2'>
          <p className='font-sans p-2 mb-0 z-10 leading-5 relative mt-4 break-words text-2xl md:text-3xl row-start-1'>
            {dialogueText[displayDialogue.currentMessage]}
          </p>
          <span className='grid grid-cols-3 row-start-3'>
            <span className='col-start-1'>
              <Button bgColor={bgColour} onClick={handleClickBack}>
                back
              </Button>
            </span>
            <span className='col-start-4'>
              <Button bgColor={bgColour} onClick={handleClickNext}>
                next
              </Button>
            </span>
          </span>
        </div>
      </div>
    </div>
  )
}
