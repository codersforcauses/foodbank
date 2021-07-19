import { useState, ChangeEvent, MouseEventHandler } from 'react'
import { SubmitHandler } from 'react-hook-form'
import { Button, Form, TextField, Modal } from '@components/Custom'
import { selectSet, Character, GridField } from '@components/Grid/GridForm'

const CHARACTERS_FOR_AUTH = 3
interface AuthProps {
  open: boolean
  onClose: () => void
}

interface FormValues {
  username: string
  password: Array<Character>
}

const defaultValues: FormValues = {
  username: '',
  password: []
}

const Auth = (props: AuthProps) => {
  const [input, setInput] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [grid, setGrid] = useState<Character[]>([])
  const [selectedCount, setSelectedCount] = useState(0)

  const handleUsernameChange = (
    e: ChangeEvent<HTMLInputElement>,
    values: 'username'
  ) => {
    setInput(e.target.value)
    console.log(e.target.value)
    console.log(JSON.stringify(defaultValues))
  }

  const handleUsernameSubmit: MouseEventHandler<HTMLButtonElement> = () => {
    setUsername(input)
    setGrid(selectSet(input))
    setPassword('')
    setSelectedCount(0)
    console.log(input)
    console.log(defaultValues)
  }

  const toggleSelect = (id: string) => {
    const newGrid: Array<Character> = JSON.parse(JSON.stringify(grid))
    const character = newGrid.find(char => char.id === id)
    if (character) {
      if (character.isSelected) {
        setSelectedCount(prevCount => prevCount - 1)
      } else {
        setSelectedCount(prevCount => prevCount + 1)
      }
      character.isSelected = !character.isSelected
    }
    setGrid(newGrid)
  }

  const handlePasswordSubmit: SubmitHandler<FormValues> = value => {
    if (selectedCount !== CHARACTERS_FOR_AUTH) {
      return
    }
    // if (value.password.length !== CHARACTERS_FOR_AUTH) {
    //   return
    // }
    const newPassword = value.password.join('')
    setPassword(newPassword)
    console.log(value.password)
    console.log(newPassword)
    console.log(defaultValues)
  }

  return (
    <Modal {...props} size='sm' heading='Sign-in'>
      <Form<FormValues>
        defaultValues={defaultValues}
        onSubmit={handlePasswordSubmit}
      >
        {!username ? (
          <>
            <TextField
              label='Name'
              type='text'
              name='username'
              value={input}
              onChange={e => handleUsernameChange(e, 'username')}
            />
            <div className='flex justify-center pt-4'>
              <Button
                className='flex items-center'
                type='button'
                onClick={handleUsernameSubmit}
              >
                Set Username
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 25 25'
                  className='h-6 ml-8'
                >
                  <path
                    fill='#FFF'
                    fillRule='evenodd'
                    d='M12 0a12 12 0 100 25 12 12 0 000-25zm1 19v-5H6v-3h7V6l6 6-6 7z'
                  />
                </svg>
              </Button>
            </div>
          </>
        ) : (
          <>
            {/* <TextField label='' type='hidden' name='username' value={username} /> */}
            <GridField
              label='grid'
              type='checkbox'
              name='password'
              grid={grid}
              toggleSelect={toggleSelect}
            />
            <div className='flex justify-center pt-4'>
              <Button
                type='button'
                onClick={() => setUsername('')}
                className='flex items-center'
              >
                Back
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 25 25'
                  className='h-6 ml-8'
                >
                  <path
                    fill='#FFF'
                    fillRule='evenodd'
                    d='M12 0a12 12 0 100 25 12 12 0 000-25zm1 19v-5H6v-3h7V6l6 6-6 7z'
                  />
                </svg>
              </Button>
              <Button className='flex items-center'>
                Confirm Selections
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 25 25'
                  className='h-6 ml-8'
                >
                  <path
                    fill='#FFF'
                    fillRule='evenodd'
                    d='M12 0a12 12 0 100 25 12 12 0 000-25zm1 19v-5H6v-3h7V6l6 6-6 7z'
                  />
                </svg>
              </Button>
            </div>
          </>
        )}
      </Form>
    </Modal>
  )
}

export default Auth
export type LoginFormValues = keyof FormValues
