import { useState, useRef, useEffect, ChangeEvent } from 'react'
import { Button, Form, TextField, Modal } from '@components/Custom'
import GridDisplay, { selectSet, Character } from '@components/Grid/Characters'
import Rng from '../RngTest'

const CHARACTERS_FOR_AUTH = 3

const UsernameForm = () => {
  const [input, setInput] = useState('')
  const [username, setUsername] = useState('')
  const [selectedCount, setSelectedCount] = useState(0)
  const [grid, setGrid] = useState<Character[]>([])
  const [password, setPassword] = useState('')

  const focusRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    if (focusRef.current !== null) {
      focusRef.current.focus()
    }
  })

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
    setGrid([])
  }

  const handleUsernameSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    setUsername(input)
    setGrid(selectSet(input))
    setInput('')
    setSelectedCount(0)
  }

  const toggleSelect = (id: string) => {
    const newGrid: Array<Character> = JSON.parse(JSON.stringify(grid))
    const character = newGrid.find(char => char.id === id)
    if (character) {
      if (character.isSelected) {
        setSelectedCount(selectedCount - 1)
      } else {
        setSelectedCount(selectedCount + 1)
      }
      character.isSelected = !character.isSelected
    }
    setGrid(newGrid)
  }

  const handlePasswordSubmit = () => {
    if (selectedCount !== CHARACTERS_FOR_AUTH) {
      return
    }
    const newFilteredGrid = [...grid].filter(char => char.isSelected)
    const newPassword = newFilteredGrid.map(char => char.password).join('')
    setPassword(newPassword)
  }

  return (
    <>
      <form
        className='flex content-center justify-center pt-60'
        onSubmit={handleUsernameSubmit}
      >
        <input
          type='text'
          placeholder='Username'
          value={input}
          name='text'
          className=''
          onChange={handleUsernameChange}
          ref={focusRef}
        />
        <button className='text-white bg-primary'>YOU SURE????</button>
      </form>
      {username || input ? (
        <>
          {input ? (
            <p className='flex content-center justify-center'>
              Username: &emsp;
              {input}
            </p>
          ) : (
            ''
          )}
          {grid.length ? (
            <>
              <p className='flex content-center justify-center'>
                Username: &emsp;
                {username}
              </p>
              <p className='flex content-center justify-center'>
                Count: &emsp;
                {selectedCount}
              </p>
              <div className='flex content-center justify-center text-center'>
                <button
                  className={
                    selectedCount === CHARACTERS_FOR_AUTH
                      ? 'text-white bg-primary'
                      : 'bg-grey text-black'
                  }
                  onClick={handlePasswordSubmit}
                >
                  GENERATE PASSWORD????
                </button>
              </div>
              {password ? (
                <p className='flex content-center justify-center'>{password}</p>
              ) : (
                ''
              )}
              <GridDisplay selectedSet={grid} toggleSelect={toggleSelect} />
              <Rng seed={username} />
            </>
          ) : (
            ''
          )}
        </>
      ) : (
        ''
      )}
    </>
  )
}

export default UsernameForm
