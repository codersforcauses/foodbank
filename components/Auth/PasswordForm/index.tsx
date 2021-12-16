import { useState, MouseEventHandler } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { Button, GridField } from '@components/Custom'
import { Character } from '@components/Custom/FormComponents/GridField/GridSet'
import { CHARACTERS_FOR_AUTH, PAGES } from '../enums'

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

  const defaultMask = new Array(9).fill(false)

  const updateCount = (newSelectedCount: number) => {
    setSelectedCount(newSelectedCount)
  }

  const getPassword = (mask: boolean[]) => {
    const selectedGrid = grid.filter((item, i) => mask[i])
    return selectedGrid.map(item => item.password).join('')
  }

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(data => {
          updatePassword(getPassword(data.mask))
          setSelectedCount(0)
        })}
      >
        <p className='text-lg text-center'>{label}</p>
        {error && <p>{error}</p>}
        <GridField
          label='grid'
          name={name}
          charSet={grid}
          defaultMask={defaultMask}
          selectedCount={selectedCount}
          updateCount={updateCount}
        />
        <div className='flex justify-center pt-4 space-x-2'>
          <Button
            type='button'
            onClick={e => {
              goPrevPage(e)
              methods.reset({ mask: defaultMask })
            }}
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
