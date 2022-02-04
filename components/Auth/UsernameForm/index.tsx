import { ChangeEventHandler, MouseEventHandler } from 'react'

import { Button, TextField } from '@components/Custom'
import SolidArrowCircleRight from '@components/Custom/Svg/SolidArrowCircleRight'

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
  // validUsername, // For onChange validation
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
          // disabled={!input || !validUsername} // For onChange validation
          disabled={!input} // For onSubmit validation
        >
          {registered ? `WELCOME BACK, ${input}!!!` : 'HI, NEW FRIEND!!!!'}
          <SolidArrowCircleRight
            className='h-6 ml-8'
            viewBox='0 0 25 25'
            fill='#FFF'
          />
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
