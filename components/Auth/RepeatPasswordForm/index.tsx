import { ChangeEventHandler, MouseEventHandler } from 'react'
import { Button, GridField } from '@components/Custom'
import { Character } from '@components/Custom/FormComponents/GridField/GridSet'

interface PasswordFormProps {
  label: string
  name: string
  error: string
  grid: Character[]
  goPrevPage: MouseEventHandler<HTMLButtonElement>
  goNextPage: MouseEventHandler<HTMLButtonElement>
  registered: boolean
}

const REPEAT_PASSWORD_PAGE = 3

const RepeatPasswordForm = ({
  label,
  name,
  error,
  grid,
  goPrevPage,
  goNextPage,
  registered
}: PasswordFormProps) => {
  return (
    <>
      {!registered && (
        <>
          <p className='text-lg'>{label}</p>
          {error && <p>{error}</p>}
          <GridField label='grid' name={name} charSet={grid} />
          <div className='flex justify-center pt-4'>
            <Button
              type='button'
              onClick={goPrevPage}
              className='flex items-center'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 25 25'
                className='h-6 mr-8 rotate-180'
              >
                <path
                  fill='#FFF'
                  fillRule='evenodd'
                  d='M12 0a12 12 0 100 25 12 12 0 000-25zm1 19v-5H6v-3h7V6l6 6-6 7z'
                />
              </svg>
              Back
            </Button>
            <Button className='flex items-center'>
              Confirm Selections
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
          </div>
        </>
      )}
    </>
  )
}

export default RepeatPasswordForm
