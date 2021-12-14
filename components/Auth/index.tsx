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
  updateProfile,
  fetchSignInMethodsForEmail,
  EmailAuthProvider,
  AuthErrorCodes
} from 'firebase/auth'
import { collection, doc, setDoc, getDoc } from 'firebase/firestore'
import { FirebaseError } from '@firebase/util'
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

const PASSWORD_LENGTH = 27

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
}

const defaultValues: FormValues = {
  username: ''
}

const Auth = (props: AuthProps) => {
  const [input, setInput] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
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
    // const isRegistered = await checkFirebase(e.target.value.toLowerCase())
    // console.log(
    //   `input: ${e.target.value.toLowerCase()} username: ${username}`,
    //   isRegistered
    // )
    // setRegistered(isRegistered)
    if (!e.target.value) {
      setRegistered(false)
      return
    }
    try {
      const signInMethods = await fetchSignInMethodsForEmail(
        auth,
        `${e.target.value.toLowerCase()}@test123.xyz`
      )
      // User can sign in with email/password.
      signInMethods.indexOf(EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD) !==
      -1
        ? setRegistered(true)
        : setRegistered(false)
    } catch (err: unknown) {
      if (err instanceof FirebaseError) {
        console.log(err?.message)
      }
    }
  }

  const handleInputSubmit = () => {
    setUsername(input.toLowerCase())
    // console.log(input)
  }

  const handlePasswordSubmit = async (newPassword: string) => {
    console.log(newPassword)
    if (newPassword?.length && page !== PAGES.PASSWORD_FORM) {
      setPage(PAGES.PASSWORD_FORM)
      return
    }
    setPassword(newPassword)
    if (registered && newPassword?.length === PASSWORD_LENGTH) {
      try {
        await signInWithEmailAndPassword(
          auth,
          `${username}@test123.xyz`,
          newPassword
        ) //<-- SIGNIN
        console.log('Password Matched!')
        onClose()
        // alert(MESSAGES.PASSWORD_MATCHED)
        setError('')
      } catch (err: unknown) {
        if (err instanceof FirebaseError) {
          // console.dir(err)
          console.log(err?.message)
          if (err.code === AuthErrorCodes.INVALID_PASSWORD) {
            console.log('Wrong')
            setError(MESSAGES.WRONG_PASSWORD)
            alert(MESSAGES.WRONG_PASSWORD)
          }
        }
      }
    } else if (!registered && newPassword?.length === PASSWORD_LENGTH) {
      setPage(PAGES.REPEAT_PASSWORD_FORM)
    } else {
      setError(MESSAGES.PASSWORDS_NOT_MATCHED)
    }
  }

  const handleRepeatedPasswordSubmit = async (newRepeatedPassword: string) => {
    if (
      !registered &&
      !newRepeatedPassword?.length &&
      page !== PAGES.REPEAT_PASSWORD_FORM
    ) {
      setPage(PAGES.REPEAT_PASSWORD_FORM)
      return
    }
    if (
      !registered &&
      password?.length === PASSWORD_LENGTH &&
      newRepeatedPassword?.length === PASSWORD_LENGTH
    ) {
      if (newRepeatedPassword === password) {
        console.log('Registered!')
        onClose()
        // alert(MESSAGES.REPEATED_PASSWORD_MATCHED) //<-- SIGNUP
        setError('')
        try {
          await createUserWithEmailAndPassword(
            auth,
            `${username}@test123.xyz`,
            password
          )
        } catch (err: unknown) {
          if (err instanceof FirebaseError) {
            console.log(err?.message)
          }
        }
        // if (auth?.currentUser) {
        //   await updateProfile(auth.currentUser, {
        //     displayName: username
        //   })
        // }
        try {
          await setDoc(doc(db, 'usernames', username), {
            achievement1: false,
            achievement2: false,
            achievement3: false,
            achievement4: false,
            achievement5: false,
            achievement6: false,
            achievement7: false,
            achievement8: false,
            achievement9: false
          })
        } catch (err: unknown) {
          if (err instanceof FirebaseError) {
            console.log(err?.message)
          }
        }
      } else {
        setError(MESSAGES.PASSWORDS_NOT_MATCHED)
      }
    }
  }

  // SIGNIN OR SIGNUP HERE
  const handleValuesSubmit: SubmitHandler<FormValues> = async value => {
    if (!input) {
      console.log(value)
      return
    } else if (!username) {
      handleInputSubmit()
      setPage(PAGES.PASSWORD_FORM)
      return
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
    await sleep(150)
    handleReset()
    setPage(PAGES.USERNAME_FORM)
  }

  const goPrevPage: MouseEventHandler<HTMLButtonElement> = () => {
    // handleReset()
    if (page === PAGES.PASSWORD_FORM) {
      handleReset()
    }
    setError('')
    setPage(current => current - 1)
  }

  const goNextPage: MouseEventHandler<HTMLButtonElement> = () => {
    if (!input) {
      return
    }
    if (input !== username) {
      handleInputSubmit()
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
            error={error}
            name='password'
            page={page}
            grid={grid}
            goPrevPage={goPrevPage}
            goNextPage={goNextPage}
            registered={registered}
            updatePassword={handlePasswordSubmit}
          />
        )
      case PAGES.REPEAT_PASSWORD_FORM:
        return (
          // <RepeatPasswordForm
          <PasswordForm
            label={MESSAGES.REPEATED_PASSWORD_LABEL}
            error={error}
            name='repeatPassword'
            page={page}
            grid={grid}
            goPrevPage={goPrevPage}
            goNextPage={goNextPage}
            registered={registered}
            updatePassword={handleRepeatedPasswordSubmit}
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
