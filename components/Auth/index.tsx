import { MouseEventHandler, useMemo, useState } from 'react'
import { SubmitHandler } from 'react-hook-form'

import { Form, Modal, selectSet } from '@components/Custom'
import { Character } from '@components/Custom/FormComponents/GridField/GridSet'
import { useFirebase } from '@components/FirebaseContext/context'

import { checkUsername, signIn, signUp, sleep } from './account'
import { MESSAGES, PAGES, PASSWORD_LENGTH } from './enums'
import PasswordForm from './PasswordForm'
import UsernameForm from './UsernameForm'

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

const Auth = ({ ...props }: AuthProps) => {
  const [username, setUsername] = useState('')
  const [validUsername, setValidUsername] = useState(false)
  const [registered, setRegistered] = useState(false)
  const [password, setPassword] = useState('')
  const grid = useMemo<Character[]>(() => selectSet(username), [username])
  const [page, setPage] = useState(PAGES.USERNAME_FORM)
  const [error, setError] = useState('')
  const { auth, gridDisabled, setGridDisabled } = useFirebase()

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
      if (await signIn(auth, username, newPassword, setError, setGridDisabled))
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
        await signUp(auth, username, password)
        onClose()
        setError('')
      } else {
        setError(MESSAGES.PASSWORDS_NOT_MATCHED)
        setGridDisabled?.(false)
      }
    }
  }

  // SIGNIN OR SIGNUP HERE
  const handleValuesSubmit: SubmitHandler<FormValues> = async data => {
    setUsername(data.username.toLowerCase())
    setPage(PAGES.PASSWORD_FORM)
    await checkUsername(
      auth,
      data.username.toLowerCase(),
      setRegistered,
      setError
    )
  }

  const handleReset = () => {
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

  const pageDisplay = () => {
    switch (page) {
      case PAGES.USERNAME_FORM:
        return (
          <Form<FormValues>
            defaultValues={defaultValues}
            onSubmit={handleValuesSubmit}
          >
            <UsernameForm
              label='Enter a username'
              error={error}
              validUsername={validUsername}
              updateValidation={updateValidation}
            />
          </Form>
        )
      case PAGES.PASSWORD_FORM:
        return (
          <PasswordForm
            name='password'
            label='Choose your three characters'
            error={error}
            page={page}
            grid={grid}
            goPrevPage={goPrevPage}
            registered={registered}
            updatePassword={handlePasswordSubmit}
            gridDisabled={gridDisabled}
            setGridDisabled={setGridDisabled}
          />
        )
      case PAGES.REPEAT_PASSWORD_FORM:
        return (
          <PasswordForm
            name='repeatPassword'
            label='Re-select those same three characters and remember them'
            error={error}
            page={page}
            grid={grid}
            goPrevPage={goPrevPage}
            registered={registered}
            updatePassword={handleRepeatedPasswordSubmit}
            gridDisabled={gridDisabled}
            setGridDisabled={setGridDisabled}
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
