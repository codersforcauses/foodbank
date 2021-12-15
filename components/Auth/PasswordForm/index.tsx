import React, { useState, MouseEventHandler, useRef } from 'react'
import { Button, GridField } from '@components/Custom'
import { Character } from '@components/Custom/FormComponents/GridField/GridSet'
import { useForm, FormProvider } from 'react-hook-form'

const CHARACTERS_FOR_AUTH = 3

const PAGES = {
  USERNAME_FORM: 1,
  PASSWORD_FORM: 2,
  REPEAT_PASSWORD_FORM: 3
}
interface PasswordFormProps {
  label: string
  error: string
  name: string
  page: number
  grid: Character[]
  goPrevPage: MouseEventHandler<HTMLButtonElement>
  registered: boolean
  updatePassword: (value: string) => void
}

const PasswordForm = ({
  label,
  error,
  grid,
  name,
  page,
  goPrevPage,
  registered,
  updatePassword
}: PasswordFormProps) => {
  const [selectedCount, setSelectedCount] = useState(0)
  const methods = useForm()

  const updateCount = (newSelectedCount: number) => {
    setSelectedCount(newSelectedCount)
  }

  const getPassword = (mask: boolean[]) => {
    const selectedGrid = grid.filter((item, i) => mask[i])
    return selectedGrid.map(item => item.password).join('')
  }

  const formSelector = useRef<HTMLFormElement>(null)

  const goBack = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (null !== formSelector.current) {
      formSelector.current.reset()
    }
    goPrevPage(e)
  }
  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(data =>
          updatePassword(getPassword(data.mask))
        )}
        ref={formSelector}
      >
        <p className='text-lg text-center'>{label}</p>
        {error && <p>{error}</p>}
        <GridField
          label='grid'
          name={name}
          charSet={grid}
          selectedCount={selectedCount}
          updateCount={updateCount}
        />
        <div className='flex justify-center pt-4 space-x-2'>
          <Button type='button' onClick={goBack} className='flex items-center'>
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
          <Button
            className='flex items-center disabled:opacity-50'
            disabled={selectedCount !== CHARACTERS_FOR_AUTH}
          >
            {registered || page === PAGES.REPEAT_PASSWORD_FORM
              ? 'Confirm'
              : 'Next'}
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
      </form>
    </FormProvider>
  )
}

export default PasswordForm
