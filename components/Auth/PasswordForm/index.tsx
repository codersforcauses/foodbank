import { MouseEventHandler, SetStateAction, useState } from 'react'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'

import { Button, GridField } from '@components/Custom'
import { Character } from '@components/Custom/FormComponents/GridField/GridSet'
import SolidArrowCircleRight from '@components/Custom/Svg/SolidArrowCircleRight'

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
  gridDisabled?: boolean
  setGridDisabled?: (value: SetStateAction<boolean>) => void
}

const PasswordForm = (props: PasswordFormProps) => {
  const [selectedCount, setSelectedCount] = useState(0)
  const methods = useForm()
  const { formState, handleSubmit } = methods

  const defaultMask = new Array(9).fill(false)

  const updateCount = (newSelectedCount: number) => {
    setSelectedCount(newSelectedCount)
  }

  const getPassword = (mask: boolean[]) => {
    const selectedGrid = props.grid.filter((_, i) => mask[i])
    return selectedGrid.map(item => item.password).join('')
  }

  const disableGrid = () => props.setGridDisabled?.(true)

  const onSubmit: SubmitHandler<Record<string, boolean[]>> = data => {
    if (props.registered || props.page === PAGES.REPEAT_PASSWORD_FORM)
      disableGrid()
    props.updatePassword(getPassword(data.mask))
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <p className='text-lg text-center'>{props.label}</p>
        {props.error && (
          <p className='text-lg text-center text-red'>{props.error}</p>
        )}
        <GridField
          label='grid'
          name={props.name}
          charSet={props.grid}
          defaultMask={defaultMask}
          selectedCount={selectedCount}
          updateCount={updateCount}
          gridDisabled={props.gridDisabled}
        />
        <div className='flex justify-center pt-4 space-x-2'>
          <Button
            type='button'
            onClick={e => {
              props.goPrevPage(e)
              methods.reset({ mask: defaultMask })
            }}
            className='flex items-center'
          >
            <SolidArrowCircleRight
              viewBox='0 0 25 25'
              className='h-6 mr-8 rotate-180'
              fill='#FFF'
            />
            Back
          </Button>
          <Button
            className='flex items-center disabled:opacity-50'
            disabled={
              selectedCount !== CHARACTERS_FOR_AUTH || formState.isSubmitting
            }
          >
            {props.registered || props.page === PAGES.REPEAT_PASSWORD_FORM
              ? 'Confirm'
              : 'Next'}
            <SolidArrowCircleRight
              viewBox='0 0 25 25'
              className='h-6 ml-8'
              fill='#FFF'
            />
          </Button>
        </div>
      </form>
    </FormProvider>
  )
}

export default PasswordForm
