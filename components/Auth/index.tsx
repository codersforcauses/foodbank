import React, {
  useState,
  useMemo,
  ChangeEventHandler,
  MouseEventHandler
} from 'react'
import { SubmitHandler } from 'react-hook-form'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile
} from 'firebase/auth'
import { collection, doc, setDoc, getDoc } from 'firebase/firestore'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useFirebase } from '@components/firebase/context'
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

const MESSAGES = {
  USERNAME_LABEL: 'Enter a username.',
  PASSWORD_LABEL: 'Choose your three characters.',
  REPEATED_PASSWORD_LABEL:
    'Re-select those same three characters and remember them.',
  PASSWORD_MATCHED: 'Signed in',
  REPEATED_PASSWORD_MATCHED: 'Registered',
  WRONG_PASSWORD: 'Uh-oh! You have selected the wrong characters!',
  PASSWORDS_NOT_MATCHED: 'Uh-oh! You have selected the wrong characters!'
}
interface AuthProps {
  open: boolean
  onClose: () => void
}

interface FormValues {
  username: string
  password: string[]
  repeatedPassword: string[]
}

const defaultValues: FormValues = {
  username: '',
  password: [],
  repeatedPassword: []
}

const Auth = (props: AuthProps) => {
  const [input, setInput] = useState('')
  const [username, setUsername] = useState('')
  const [registered, setRegistered] = useState(false)
  const grid = useMemo<Character[]>(() => selectSet(username), [username])
  const [page, setPage] = useState(PAGES.USERNAME_FORM)
  const [error, setError] = useState('')
  const { auth, db, user, userLoading, userError } = useFirebase()

  // CHECKS IF USERNAME IS TAKEN
  const checkFirebase = async (username: string) => {
    if (!username) {
      return false
    }
    return (await getDoc(doc(db, 'usernames', username))).exists()
  }

  const handleUsernameChange: ChangeEventHandler<
    HTMLInputElement
  > = async e => {
    setInput(e.target.value)
    setRegistered(await checkFirebase(e.target.value.toLowerCase()))
  }

  const handleUsernameSubmit = () => {
    setUsername(input.toLowerCase())
    // console.log(input)
  }

  // SIGNIN OR SIGNUP HERE
  const handleValuesSubmit: SubmitHandler<FormValues> = async value => {
    console.log(value)
    if (!input) {
      console.log(value)
      return
    } else if (!username) {
      handleUsernameSubmit()
      setPage(PAGES.PASSWORD_FORM)
      return
    }
    if (!value?.password?.length && page !== PAGES.PASSWORD_FORM) {
      setPage(PAGES.PASSWORD_FORM)
      return
    }
    if (
      !registered &&
      !value?.repeatedPassword?.length &&
      page !== PAGES.REPEAT_PASSWORD_FORM
    ) {
      setPage(PAGES.REPEAT_PASSWORD_FORM)
      return
    }
    if (registered && value?.password?.length === CHARACTERS_FOR_AUTH) {
      const newPassword = value?.password?.join('')
      try {
        await signInWithEmailAndPassword(
          auth,
          `${username}@test123.xyz`,
          newPassword
        ) //<-- SIGNIN
        console.log('Password Matched!')
        alert(MESSAGES.PASSWORD_MATCHED)
        setError('')
      } catch (err) {
        console.dir(err)
        // console.log(err?.message)
        // if (err.code === 'auth/wrong-password') {
        //   console.log('Wrong')
        //   setError(MESSAGES.WRONG_PASSWORD)
        //   alert(MESSAGES.WRONG_PASSWORD)
        // }
      }
    } else if (
      !registered &&
      value?.password?.length === CHARACTERS_FOR_AUTH &&
      value?.repeatedPassword?.length === CHARACTERS_FOR_AUTH
    ) {
      const newPassword = value?.password?.join('')
      const newRepeatedPassword = value?.repeatedPassword?.join('')
      if (newRepeatedPassword === newPassword) {
        console.log('Password Matched!')
        alert(MESSAGES.REPEATED_PASSWORD_MATCHED) //<-- SIGNUP
        setError('')

        await createUserWithEmailAndPassword(
          auth,
          `${username}@test123.xyz`,
          newPassword
        )
        if (auth?.currentUser) {
          await updateProfile(auth.currentUser, {
            displayName: username
          })
        }
        await setDoc(doc(db, 'usernames', username), {
          password: newPassword
        })
      } else {
        setError(MESSAGES.PASSWORDS_NOT_MATCHED)
      }
    }
  }

  const handleReset = () => {
    setInput('')
    setUsername('')
    setRegistered(false)
    setError('')
  }

  const sleep = async (ms: number) => {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  const onClose = async () => {
    props.onClose()
    await sleep(1000)
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
          <Form<FormValues>
            defaultValues={defaultValues}
            onSubmit={handleValuesSubmit}
          >
            <UsernameForm
              label={MESSAGES.USERNAME_LABEL}
              input={input}
              handleUsernameChange={handleUsernameChange}
              goNextPage={goNextPage}
              registered={registered}
            />
          </Form>
        )
      case PAGES.PASSWORD_FORM:
        return (
          <PasswordForm
            label={MESSAGES.PASSWORD_LABEL}
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
            label={MESSAGES.REPEATED_PASSWORD_LABEL}
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
      {pageDisplay()}
    </Modal>
  )
}

export default Auth
export type LoginFormValues = keyof FormValues
