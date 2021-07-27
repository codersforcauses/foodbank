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
import { firestore } from './firebase'


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



const Auth = (props: AuthProps) => {
  const [input, setInput] = useState<string>('')
  const [username, setUsername] = useState<string>('')
  const [registered, setRegistered] = useState<boolean>(false)
  const grid = useMemo<Character[]>(() => selectSet(username), [username])
  const [page, setPage] = useState<number>(PAGES.USERNAME_FORM)
  const [error, setError] = useState<string>('')


  // CHECKS IF USERNAME IS TAKEN
  const checkFirebase = async (username: string) => username ? (await firestore.doc(`usernames/${username}`).get()).exists : false

  // CHECKS IF PASSWORD MATCHES THE USERNAME IN THE DATABASE.
  const checkPassword = async (password: string) => password == (await firestore.doc(`usernames/${username}`).get()).data()?.password

  const handleUsernameChange: ChangeEventHandler<HTMLInputElement> = async e => {
    setInput(e.target.value)
    setRegistered(await checkFirebase(e.target.value))
  }

  const handleUsernameSubmit = () => {
    setUsername(input)
    console.log(input)
  }

  // SIGNIN OR SIGNUP HERE
  const handleValuesSubmit: SubmitHandler<FormValues> = async value => {
    if (registered && value?.password?.length === CHARACTERS_FOR_AUTH) {
      const newPassword = value?.password?.join('')
      if (await checkPassword(newPassword)) {
        console.log("Password Matched!")
        setError('')
        alert('Username : ' + username + '\nPassword  : ' + newPassword) //<-- SIGNIN
      } else {
        setError('Uh-oh! You have selected the wrong characters!')
      }
    }
    else if (
      !registered &&
      value?.password?.length === CHARACTERS_FOR_AUTH &&
      value?.repeatedPassword?.length === CHARACTERS_FOR_AUTH
    ) {
      const newPassword = value?.password?.join('')
      const newRepeatedPassword = value?.repeatedPassword?.join('')
      if (newRepeatedPassword === newPassword) {
        setError('')
        alert('Username : ' + username + '\nPassword  : ' + newPassword) //<-- SIGNUP

        //Sending the details to the Firebase Firestore database
        const batch = firestore.batch();
        batch.set(
          firestore.doc(`usernames/${username}`), // Selecting the reference to the document associated with username
          { "password": newPassword } // The information to be stored in that document.
        )
        await batch.commit()
        
      } else {
        setError('Uh-Oh, your Repeated Seletions don\'t match!')
      }
    }
  }

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
            label='Choose your three characters.'
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
            label='Re-select those same three characters and remember them.'
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
