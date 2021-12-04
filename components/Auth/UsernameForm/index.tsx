import { ChangeEventHandler, MouseEventHandler } from 'react'
import { Button, TextField } from '@components/Custom'

interface UsernameFormProps {
  label: string
  input: string
  handleUsernameChange: ChangeEventHandler<HTMLInputElement>
  goNextPage: MouseEventHandler<HTMLButtonElement>
  registered: boolean
}

const UsernameForm = ({
  label,
  input,
  handleUsernameChange,
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
        rules={{
          required: true,
          onChange: handleUsernameChange
        }}
        // onChange={handleUsernameChange}
      />
      <div className='flex justify-center pt-4'>
        <Button
          className='flex items-center disabled:opacity-50'
          type='button'
          onClick={goNextPage}
          disabled={!input}
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
        {registered && (
          <>
            <br />
            <p>NOT YOU? TRY A DIFFERENT USERNAME!!!</p>
          </>
        )}
      </div>
    </>
  )
}

export default UsernameForm
