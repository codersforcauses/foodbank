import { useState, InputHTMLAttributes, useContext, ChangeEvent } from 'react'
import { RegisterOptions } from 'react-hook-form'
import Image from 'next/image'
import cloneDeep from 'lodash.clonedeep'
import { FormContext } from '@components/Custom/FormComponents/Form/context'
import {
  FieldControl,
  FieldLabel,
  FieldMessage
} from '@components/Custom/FormComponents/utils'
import { Character } from '@components/Custom/FormComponents/GridField/GridSet'
import { BsFillCheckCircleFill } from 'react-icons/bs'

const CHARACTERS_FOR_AUTH = 3

export interface GridFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  charSet: Character[]
  label: string
  name: string
  description?: string
  rules?: RegisterOptions
}

const GridField = ({
  charSet,
  color,
  description,
  disabled = false,
  label,
  required = false,
  rules = {},
  ...props
}: GridFieldProps) => {
  const {
    formState,
    disabled: formDisabled,
    register
  } = useContext(FormContext)
  const error: string = formState?.errors?.[props.name]?.message

  const [grid, setGrid] = useState<Character[]>(cloneDeep(charSet))
  const [selectedCount, setSelectedCount] = useState(0)

  const toggleSelect = (
    e: ChangeEvent<HTMLInputElement>,
    currentChar: Character
  ) => {
    const newChar: Character = { ...currentChar }
    newChar.isSelected = e.target.checked
    const newGrid: Character[] = grid
      .slice()
      .map(char => (char.id === newChar.id ? newChar : char))
    setGrid(newGrid)
  }

  const toggleSelectedCount = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setSelectedCount(prev => prev + 1)
    } else {
      setSelectedCount(prev => prev - 1)
    }
  }

  return (
    <FieldControl
      name={props.name}
      error={error}
      required={'required' in rules || required}
      disabled={formDisabled || disabled}
    >
      <p>{selectedCount}</p>
      <div className='grid w-full grid-cols-3 gap-2'>
        {grid.map(char => (
          <div key={char.id} className='relative'>
            <input
              type='checkbox'
              aria-describedby={`${char.name}-label`}
              aria-invalid={!!error}
              aria-label={`${char.name}-checkbox`}
              id={char.id}
              name='food'
              value={char.password}
              checked={char.isSelected}
              disabled={
                !char.isSelected && selectedCount === CHARACTERS_FOR_AUTH
              }
              // className='hidden'
              // className='opacity-0'
              {...register?.(props.name, {
                ...rules
              })}
              onChange={e => {
                toggleSelect(e, char)
                toggleSelectedCount(e)
              }}
            />
            <label
              htmlFor={char.id}
              className={char.isSelected ? 'opacity-40' : 'opacity-100'}
            >
              <Image
                className='z-0 object-contain transition-all scale-90 hover:scale-100'
                height={250}
                width={250}
                src={char.image}
                alt={char.name}
              />
              <p className='text-center'>{char.name}</p>
              <p className='text-center'>{char?.isSelected?.toString()}</p>
            </label>

            <BsFillCheckCircleFill
              className={
                'absolute top-0 ' +
                'bottom-0 left-0 ' +
                'right-0 ' +
                'text-center ' +
                'm-auto ' +
                'text-3xl ' +
                'z-1 ' +
                'pointer-events-none ' +
                (char.isSelected ? 'opacity-100' : 'opacity-0')
              }
            />
          </div>
        ))}
        {error ? (
          <FieldMessage>{error}</FieldMessage>
        ) : (
          description && <FieldMessage description>{description}</FieldMessage>
        )}
      </div>
    </FieldControl>
  )
}

export default GridField
