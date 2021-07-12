import { useState, useRef, useEffect, ChangeEvent } from 'react'
import Characters from '@components/Grid/Characters'

const UsernameForm = () => {
  const [username, setUsername] = useState('')
  const [selectedCount, setSelectedCount] = useState(0)
  const [grid, setGrid] = useState([])

  const focusRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    if (focusRef.current !== null) {
      focusRef.current.focus()
    }
  })

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value)
  }
  const handleUsernameSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    setUsername(username)
    alert(username)
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
        <button className=''>YOU SURE???</button>
      </form>
      {username ? (
        <>
          <p className='flex content-center justify-center pt-40'>
            Username: &emsp;
            {username}
          </p>
          {/* <Characters seed={username} /> */}
        </>
      ) : (
        ''
      )}
    </>
  )
}

export default UsernameForm
