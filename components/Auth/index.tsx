import { useState, useMemo, ChangeEventHandler, MouseEventHandler } from 'react'
import { SubmitHandler } from 'react-hook-form'
import { useDebounce } from 'react-use'
import { useFirebase } from '@components/Firebase/context'
import { Form, Modal, selectSet } from '@components/Custom'
import { Character } from '@components/Custom/FormComponents/GridField/GridSet'
import { PASSWORD_LENGTH, PAGES, MESSAGES } from './enums'
import { sleep, checkUsername, signIn, signUp } from './account'
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
      if (input && validUsername)
        await checkUsername(auth, input, setRegistered)
    },
    DEBOUNCE_DELAY,
    [input]
  )

  const handleUsernameChange: ChangeEventHandler<HTMLInputElement> = e => {
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
      if (
        await signIn(auth, db, username, newPassword, setError, setAchievements)
      )
        onClose()
    } else if (!registered && newPassword?.length === PASSWORD_LENGTH)
      setPage(PAGES.REPEAT_PASSWORD_FORM)
    else setError(MESSAGES.PASSWORDS_NOT_MATCHED)
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
        await signUp(auth, db, username, password)
        onClose()
        setError('')
      } else setError(MESSAGES.PASSWORDS_NOT_MATCHED)
    }
  }

  // SIGNIN OR SIGNUP HERE
  const handleValuesSubmit: SubmitHandler<FormValues> = async () => {
    if (!input) return
    else if (!username) {
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

  const onClose = async () => {
    props.onClose()
    await sleep(WAIT_FOR_MODAL_TO_CLOSE)
    handleReset()
    setPage(PAGES.USERNAME_FORM)
  }

  const goPrevPage: MouseEventHandler<HTMLButtonElement> = () => {
    if (page === PAGES.PASSWORD_FORM) handleReset()
    setError('')
    setPage(current => current - 1)
  }

  const goNextPage: MouseEventHandler<HTMLButtonElement> = () => {
    if (!input) return
    if (input !== username) handleInputSubmit()
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
