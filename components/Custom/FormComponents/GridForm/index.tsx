import { useState, InputHTMLAttributes, useContext, ChangeEvent } from 'react'
import { RegisterOptions } from 'react-hook-form'
import seedrandom from 'seedrandom'
import shuffle from 'shuffle-array'
import { v4 as uuid_v4 } from 'uuid'
import Image from 'next/image'
import { FormContext } from '@components/Custom/FormComponents/Form/context'
import {
  FieldControl,
  FieldLabel,
  FieldMessage
} from '@components/Custom/FormComponents/utils'
import imgSet, {
  Character
} from '@components/Custom/FormComponents/GridForm/GridSet'

const PASSWORD_LENGTH = 9

const randomStringGen = (length: number) => {
  let result = ''
  let characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let charactersLength = characters.length
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
  }
  return result
}

export const selectSet = (seed: string) => {
  seedrandom(seed, { global: true })
  const selectedSet = shuffle(imgSet, { copy: true }).slice(0, PASSWORD_LENGTH)
  selectedSet.map(img => {
    img.id = uuid_v4()
    // img.password = randomStringGen(PASSWORD_LENGTH)
    img.password = img.name // For testing purposes
  })
  return selectedSet
}
export interface GridFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  charSet: Character[]
  label: string
  name: string
  description?: string
  rules?: RegisterOptions
}

export const GridField = ({
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

  const [grid, setGrid] = useState<Character[]>(charSet)
  const [test, setTest] = useState<number>(0)

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
    setTest(1)
  }

  console.table(grid)
  console.log('GRID RENDERED!!!')

  return (
    <FieldControl
      name={props.name}
      error={error}
      required={'required' in rules || required}
      disabled={formDisabled || disabled}
    >
      <div className='grid w-full grid-cols-3 gap-4'>
        {grid.map(char => (
          //   <FieldLabel key={char.id}>
          //   <div>
          <label key={char.id}>
            <input
              {...props}
              aria-describedby={`${char.name}-label`}
              aria-invalid={!!error}
              id={char.id}
              name='food'
              value={char.password}
              checked={char.isSelected}
              // className='hidden'
              //   className='opacity-0'
              {...register?.(props.name, rules)}
              onChange={e => toggleSelect(e, char)}
            />
            <Image
              key={char.id}
              className={char.isSelected ? '' : 'opacity-30'}
              height={200}
              width={200}
              src={`/..${char.image}`}
              alt={char.name}
              //   placeholder='blur'
            />
            <p className='text-center'>{char.name}</p>
            <p className='text-center'>{char.isSelected.toString()}</p>
            <p className='text-center'>{test}</p>
          </label>
          //   </div>
          //   </FieldLabel>
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
