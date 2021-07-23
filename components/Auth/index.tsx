import { useState, useMemo, ChangeEvent, MouseEventHandler } from 'react'
import { SubmitHandler } from 'react-hook-form'
import {
  Button,
  Form,
  TextField,
  Modal,
  GridField,
  selectSet
} from '@components/Custom'
import { Character } from '@components/Custom/FormComponents/GridField/GridSet'

const CHARACTERS_FOR_AUTH = 3

const PAGES = {
  USERNAME_FORM: 1,
  PASSWORD_FORM: 2,
  REPEAT_PASSWORD_FORM: 3
}
interface AuthProps {
  open: boolean
  onClose: () => void
}

interface FormValues {
  username: string
  password: Character[]
  repeatedPassword: Character[]
}

const defaultValues: FormValues = {
  username: '',
  password: [],
  repeatedPassword: []
}

const checkFirebase = (username: string) => username === 'hello' // <------ CHECKS IF USERNAME IS TAKEN

const Auth = (props: AuthProps) => {
  const [input, setInput] = useState<string>('')
  const [registered, setRegistered] = useState<boolean>(false)
  const [username, setUsername] = useState<string>('')
  const grid = useMemo<Character[]>(() => selectSet(username), [username])
  const [page, setPage] = useState<number>(PAGES.USERNAME_FORM)
  const [error, setError] = useState<string>('')

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
    setRegistered(() => checkFirebase(e.target.value))
  }

  const handleUsernameSubmit = () => {
    setUsername(input)
    console.log(input)
  }

  // LOGIN OR SIGNUP HERE
  const handleValuesSubmit: SubmitHandler<FormValues> = value => {
    if (registered && value.password.length === CHARACTERS_FOR_AUTH) {
      const newPassword = value.password.join('')
      console.log(value)
      if (registered)
        alert('Username : \t' + username + '\nPassword  : \t' + newPassword)
    }
    if (
      !registered &&
      value.password.length === CHARACTERS_FOR_AUTH &&
      value.repeatedPassword.length === CHARACTERS_FOR_AUTH
    ) {
      const newPassword = value.password.join('')
      const newRepeatedPassword = value.repeatedPassword.join('')
      if (newRepeatedPassword === newPassword)
        alert('Username : \t' + username + '\nPassword  : \t' + newPassword)
      else alert('Wrong Selections')
    }
  }

  const handleReset = () => {
    setInput('')
    setUsername('')
  }

  const onClose = () => {
    props.onClose()
    handleReset()
    setPage(PAGES.USERNAME_FORM)
  }

  console.log('RENDERED!!!')

  const goPrevPage: MouseEventHandler<HTMLButtonElement> = () => {
    // handleReset()
    setPage(current => current - 1)
  }

  const goNextPage: MouseEventHandler<HTMLButtonElement> = () => {
    if (!input) {
      return
    }
    if (input !== username) {
      handleUsernameSubmit()
    }
    setPage(current => current + 1)
  }

  const pageDisplay = () => {
    switch (page) {
      case PAGES.USERNAME_FORM:
        return (
          <>
            <TextField
              label='Name'
              type='text'
              name='username'
              value={input}
              onChange={handleUsernameChange}
            />
            <div className='flex justify-center pt-4'>
              <Button
                className='flex items-center'
                type='button'
                onClick={goNextPage}
              >
                {registered ? 'WELCOME BACK, FRIEND!!!!' : 'HI, NEW FRIEND!!!!'}
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
      case PAGES.PASSWORD_FORM:
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
              {registered ? (
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
              ) : (
                <Button
                  className='flex items-center'
                  type='button'
                  onClick={goNextPage}
                >
                  Repeat Selections
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
              )}
            </div>
          </>
        )
      case PAGES.REPEAT_PASSWORD_FORM:
        return (
          <>
            {!registered && (
              <>
                <GridField
                  label='grid'
                  type='checkbox'
                  name='repeatedPassword'
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
            )}
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
        onSubmit={handleValuesSubmit}
      >
        {pageDisplay()}
      </Form>
    </Modal>
  )
}

export default Auth
export type LoginFormValues = keyof FormValues
