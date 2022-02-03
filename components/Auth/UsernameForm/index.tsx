import { ChangeEventHandler, MouseEventHandler } from 'react'

import { Button, TextField } from '@components/Custom'

import { MESSAGES } from '../enums'

interface UsernameFormProps {
  label: string
  error: string
  input: string
  handleUsernameChange: ChangeEventHandler<HTMLInputElement>
  validUsername: boolean
  updateValidation: (isValid: boolean) => void
  goNextPage: MouseEventHandler<HTMLButtonElement>
  registered: boolean
}

const UsernameForm = ({
  label,
  input,
  error,
  handleUsernameChange,
  validUsername,
  updateValidation,
  goNextPage,
  registered
}: UsernameFormProps) => {
  return (
    <>
      <TextField
        label={label}
        type='text'
        name='username'
        value={input}
        setFocused
        rules={{
          required: MESSAGES.USERNAME_REQUIRED,
          pattern: {
            value: /^[a-z0-9]+$/i,
            message: MESSAGES.USERNAME_ALPHANUMERIC
          },
          minLength: {
            value: 3,
            message: MESSAGES.USERNAME_MIN_LENGTH
          },
          onChange: handleUsernameChange
        }}
        updateValidation={updateValidation}
      />
      {error && <p className='text-lg text-center text-red'>{error}</p>}
      <div className='flex flex-col items-center pt-4 space-x-3'>
        <Button
          className='flex items-center disabled:opacity-50'
          type='button'
          onClick={goNextPage}
          disabled={!input || !validUsername}
        >
          {registered ? `WELCOME BACK, ${input}!!!` : 'HI, NEW FRIEND!!!!'}
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
        {registered && (
          <>
            <br />
            <p>NOT YOU? TRY A DIFFERENT USERNAME!</p>
          </>
        )}
      </div>
    </>
  )
}

export default UsernameForm
