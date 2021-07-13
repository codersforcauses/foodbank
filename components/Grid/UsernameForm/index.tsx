import { useState, useRef, useEffect, ChangeEvent } from 'react'
import { Button, Form, TextField, Modal } from '@components/Custom'
import GridDisplay, { selectSet, Character } from '@components/Grid/Characters'
import Rng from '../RngTest'

const UsernameForm = () => {
  const [username, setUsername] = useState('')
  const [selectedCount, setSelectedCount] = useState(0)
  const [grid, setGrid] = useState<Character[]>([])

  const focusRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    if (focusRef.current !== null) {
      focusRef.current.focus()
    }
  })

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value)
    setGrid([])
  }
  const handleUsernameSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    setGrid(selectSet(username))
    // setUsername(username)
  }

  return (
    <>
      <form
        className='flex content-center justify-center pt-60'
        onSubmit={handleUsernameSubmit}
      >
        <input
          type='text'
          placeholder={'Username'}
          value={username}
          name='text'
          className=''
          onChange={handleUsernameChange}
          ref={focusRef}
        />
        <button className=''>YOU SURE????</button>
      </form>
      {username ? (
        <>
          <p className='flex content-center justify-center pt-40'>
            Username: &emsp;
            {username}
          </p>
          {grid.length ? (
            <>
              <GridDisplay selectedSet={grid} />
              {console.log(username)}
              <Rng seed={username} />
            </>
          ) : (
            ''
          )}
        </>
      ) : (
        // <>{setGrid([])}</>
        ''
      )}
    </>
  )
}

export default UsernameForm
