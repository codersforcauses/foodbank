import React, {
  useState,
  useMemo,
  ChangeEventHandler,
  MouseEventHandler
} from 'react'
import { SubmitHandler } from 'react-hook-form'
import { useDebounce } from 'react-use'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  fetchSignInMethodsForEmail,
  EmailAuthProvider,
  AuthErrorCodes
} from 'firebase/auth'
import { doc, setDoc, getDoc } from 'firebase/firestore'
import { FirebaseError } from '@firebase/util'
import { useFirebase, defaultAchievements } from '@components/Firebase/context'
import { Form, Modal, selectSet } from '@components/Custom'
import { Character } from '@components/Custom/FormComponents/GridField/GridSet'
import { PASSWORD_LENGTH, PAGES, MESSAGES } from './enums'
import UsernameForm from './UsernameForm'
import PasswordForm from './PasswordForm'

const DEBOUNCE_DELAY = 400

const WAIT_FOR_MODAL_TO_CLOSE = 150

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
  const [validUsername, setValidUsername] = useState(false)
  const [registered, setRegistered] = useState(false)
  const [password, setPassword] = useState('')
  const grid = useMemo<Character[]>(() => selectSet(username), [username])
  const [page, setPage] = useState(PAGES.USERNAME_FORM)
  const [error, setError] = useState('')
  const { auth, db, setAchievements } = useFirebase()

  useDebounce(
    async () => {
      if (input && validUsername) {
        try {
          const signInMethods = await fetchSignInMethodsForEmail(
            auth,
            `${input.toLowerCase()}@test123.xyz`
          )
          // User can sign in with email/password.
          signInMethods.indexOf(
            EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD
          ) !== -1
            ? setRegistered(true)
            : setRegistered(false)
        } catch (err: unknown) {
          if (err instanceof FirebaseError) {
            switch (err.code) {
              default:
                console.error(err.message)
            }
          }
        }
      }
    },
    DEBOUNCE_DELAY,
    [input]
  )

  const handleUsernameChange: ChangeEventHandler<
    HTMLInputElement
  > = async e => {
    setInput(e.target.value)
    if (!e.target.value) {
      setRegistered(false)
      return
    }
  }

  const handleInputSubmit = () => {
    setUsername(input.toLowerCase())
  }

  const updateValidation = (isValid: boolean) => {
    setValidUsername(isValid)
  }

  const handlePasswordSubmit = async (newPassword: string) => {
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
        onClose()
        setError('')
        if (auth?.currentUser?.uid) {
          const userDoc = await getDoc(doc(db, 'users', auth.currentUser.uid))
          if (userDoc.exists()) {
            setAchievements?.(prev => ({ ...prev, ...userDoc.data() }))
          } else {
            // doc.data() will be undefined in this case
            console.error(MESSAGES.NO_USER_DOCUMENT)
            if (auth?.currentUser?.uid) {
              await setDoc(
                doc(db, 'users', auth.currentUser.uid),
                defaultAchievements
              )
            }
          }
        }
      } catch (err: unknown) {
        if (err instanceof FirebaseError) {
          switch (err.code) {
            case AuthErrorCodes.INVALID_PASSWORD:
              setError(MESSAGES.WRONG_PASSWORD)
              break
            default:
              console.error(err.message)
          }
        } else {
          console.error(err)
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
        onClose()
        setError('')
        try {
          await createUserWithEmailAndPassword(
            auth,
            `${username}@test123.xyz`,
            password
          )
          if (auth?.currentUser?.uid) {
            await updateProfile(auth.currentUser, {
              displayName: username
            })
            await setDoc(
              doc(db, 'users', auth.currentUser.uid),
              defaultAchievements
            )
          }
        } catch (err: unknown) {
          if (err instanceof FirebaseError) {
            switch (err.code) {
              default:
                console.error(err.message)
            }
          } else {
            console.error(err)
          }
        }
      } else {
        setError(MESSAGES.PASSWORDS_NOT_MATCHED)
      }
    }
  }

  // SIGNIN OR SIGNUP HERE
  const handleValuesSubmit: SubmitHandler<FormValues> = async () => {
    if (!input) {
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
    setRegistered?.(false)
    setError('')
  }

  const sleep = async (ms: number) => {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  const onClose = async () => {
    props.onClose()
    await sleep(WAIT_FOR_MODAL_TO_CLOSE)
    handleReset()
    setPage(PAGES.USERNAME_FORM)
  }

  const goPrevPage: MouseEventHandler<HTMLButtonElement> = () => {
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
              validUsername={validUsername}
              updateValidation={updateValidation}
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
            registered={registered}
            updatePassword={handlePasswordSubmit}
          />
        )
      case PAGES.REPEAT_PASSWORD_FORM:
        return (
          <PasswordForm
            label={MESSAGES.REPEATED_PASSWORD_LABEL}
            error={error}
            name='repeatPassword'
            page={page}
            grid={grid}
            goPrevPage={goPrevPage}
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
