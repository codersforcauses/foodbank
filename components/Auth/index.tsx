import React, {
  useState,
  useMemo,
  ChangeEventHandler,
  MouseEventHandler
} from 'react'
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
import UsernameForm from './UsernameForm'
import PasswordForm from './PasswordForm'
import RepeatPasswordForm from './RepeatPasswordForm'

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
const checkPassword = (password: string) =>
  password === 'BlueBoyFishCanFreshFish' // <------ CHECKS IF PASSWORD IS CORRECT

const Auth = (props: AuthProps) => {
  const [input, setInput] = useState<string>('')
  const [username, setUsername] = useState<string>('')
  const [registered, setRegistered] = useState<boolean>(false)
  const grid = useMemo<Character[]>(() => selectSet(username), [username])
  const [page, setPage] = useState<number>(PAGES.USERNAME_FORM)
  const [error, setError] = useState<string>('')

  const handleUsernameChange: ChangeEventHandler<HTMLInputElement> = e => {
    setInput(e.target.value)
    setRegistered(() => checkFirebase(e.target.value))
  }

  const handleUsernameSubmit = () => {
    setUsername(input)
    console.log(input)
  }

  // SIGNIN OR SIGNUP HERE
  const handleValuesSubmit: SubmitHandler<FormValues> = value => {
    if (registered && value?.password?.length === CHARACTERS_FOR_AUTH) {
      const newPassword = value?.password?.join('')
      if (checkPassword(newPassword)) {
        setError('')
        alert('Username : \t' + username + '\nPassword  : \t' + newPassword) //<-- SIGNIN
      } else {
        setError('Wrong Selections')
      }
    }
    if (
      !registered &&
      value?.password?.length === CHARACTERS_FOR_AUTH &&
      value?.repeatedPassword?.length === CHARACTERS_FOR_AUTH
    ) {
      const newPassword = value?.password?.join('')
      const newRepeatedPassword = value?.repeatedPassword?.join('')
      if (newRepeatedPassword === newPassword) {
        setError('')
        alert('Username : \t' + username + '\nPassword  : \t' + newPassword) //<-- SIGNUP
      } else {
        setError('Wrong Selections')
      }
    }
  }
  console.log(page)

  const handleReset = () => {
    setInput('')
    setUsername('')
    setRegistered(false)
    setError('')
  }

  const onClose = () => {
    props.onClose()
    handleReset()
    setPage(PAGES.USERNAME_FORM)
  }

  console.log('RENDERED!!!')

  const goPrevPage: MouseEventHandler<HTMLButtonElement> = () => {
    // handleReset()
    setError('')
    setPage(current => current - 1)
  }

  const goNextPage: MouseEventHandler<HTMLButtonElement> = () => {
    if (!input) {
      return
    }
    if (input !== username) {
      handleUsernameSubmit()
    }
    setError('')
    setPage(current => current + 1)
  }

  const pageDisplay = () => {
    switch (page) {
      case PAGES.USERNAME_FORM:
        return (
          <UsernameForm
            input={input}
            handleUsernameChange={handleUsernameChange}
            goNextPage={goNextPage}
            registered={registered}
          />
        )
      case PAGES.PASSWORD_FORM:
        return (
          <PasswordForm
            label='Pick 3'
            name='password'
            error={error}
            grid={grid}
            goPrevPage={goPrevPage}
            goNextPage={goNextPage}
            registered={registered}
          />
        )
      case PAGES.REPEAT_PASSWORD_FORM:
        return (
          <RepeatPasswordForm
            label='Repick 3'
            name='repeatedPassword'
            error={error}
            grid={grid}
            goPrevPage={goPrevPage}
            goNextPage={goNextPage}
            registered={registered}
          />
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
