import { useState, useMemo, ChangeEvent, MouseEventHandler } from 'react'
import { SubmitHandler } from 'react-hook-form'
import { Button, Form, TextField, Modal } from '@components/Custom'
import { selectSet, Character, GridField } from '@components/Grid/GridForm'

const CHARACTERS_FOR_AUTH = 3

const PAGES = { FIRST: 1 }
interface AuthProps {
  open: boolean
  onClose: () => void
}

interface FormValues {
  username: string
  password: Character[]
}

const defaultValues: FormValues = {
  username: '',
  password: []
}

const Auth = (props: AuthProps) => {
  const [input, setInput] = useState<string>('')
  const [username, setUsername] = useState<string>('')
  const grid = useMemo<Character[]>(() => selectSet(username), [username])
  const [page, setPage] = useState<number>(1)

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
    console.log(e.target.value)
    // console.log(JSON.stringify(defaultValues))
  }

  const handleUsernameSubmit = () => {
    setUsername(input)
    console.log(input)
  }

  const handlePasswordSubmit: SubmitHandler<FormValues> = value => {
    if (value?.password?.length !== CHARACTERS_FOR_AUTH) {
      return
    }
    const newPassword = value?.password?.join('')
    console.log(newPassword)
    alert('Username : \t' + username + '\nPassword  : \t' + newPassword)
  }

  const handleReset = () => {
    setInput('')
    setUsername('')
  }

  const onClose = () => {
    props.onClose()
    handleReset()
    setPage(1)
  }

  console.log('RENDERED!!!')

  const goPrevPage: MouseEventHandler<HTMLButtonElement> = () => {
    // handleReset()
    setPage(prev => prev - 1)
  }

  const goNextPage: MouseEventHandler<HTMLButtonElement> = () => {
    if (!input) {
      return
    }
    if (input !== username) {
      handleUsernameSubmit()
    }
    setPage(next => next + 1)
  }

  const pageDisplay = () => {
    switch (page) {
      case 1:
        return (
          <>
            <TextField
              label='Name'
              type='text'
              name='username'
              value={input}
              onChange={e => handleUsernameChange(e)}
            />
            <div className='flex justify-center pt-4'>
              <Button
                className='flex items-center'
                type='button'
                onClick={goNextPage}
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
        )
      case 2:
        return (
          <>
            <GridField
              label='grid'
              type='checkbox'
              name='password'
              charSet={grid}
            />
            <div className='flex justify-center pt-4'>
              <Button
                type='button'
                onClick={goPrevPage}
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
        )
      default:
        return <p>ERROR!!!</p>
    }
  }

  return (
    <Modal {...props} onClose={onClose} size='sm' heading='Sign-in'>
      <Form<FormValues>
        defaultValues={defaultValues}
        onSubmit={handlePasswordSubmit}
      >
        {pageDisplay()}
      </Form>
    </Modal>
  )
}

export default Auth
export type LoginFormValues = keyof FormValues
