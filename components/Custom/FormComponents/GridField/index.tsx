import { useState, InputHTMLAttributes, useContext, ChangeEvent } from 'react'
import { RegisterOptions } from 'react-hook-form'
import Image from 'next/image'
import { FormContext } from '@components/Custom/FormComponents/Form/context'
import {
  FieldControl,
  FieldLabel,
  FieldMessage
} from '@components/Custom/FormComponents/utils'
import { Character } from '@components/Custom/FormComponents/GridField/GridSet'

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

  const [grid, setGrid] = useState<Character[]>(charSet)
  // const [test, setTest] = useState(0)

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
    // setTest(1)
  }

  return (
    <FieldControl
      name={props.name}
      error={error}
      required={'required' in rules || required}
      disabled={formDisabled || disabled}
    >
      <div
        className='grid w-full grid-cols-3 gap-4'
        // style={{ border: '20px solid blue' }}
      >
        {grid.map(char => (
          //   <FieldLabel key={char.id}>
          //   <div>
          <label key={char.id} className='flex flex-col justify-content-center'>
            <input
              {...props}
              aria-describedby={`${char.name}-label`}
              aria-invalid={!!error}
              id={char.id}
              name='food'
              value={char.password}
              checked={char.isSelected}
              // className='hidden'
              className='opacity-0'
              {...register?.(props.name, rules)}
              onChange={e => toggleSelect(e, char)}
            />
            <Image
              key={char.id}
              className={char.isSelected ? '' : ' opacity-30'}
              height={100}
              width={100}
              layout='responsive'
              src={char.image}
              alt={char.name}
              //   placeholder='blur'
            />
            {/* <p className='text-center'>{char.isSelected.toString()}</p> */}
            {/* <p className='text-center'>{test}</p> */}
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

export default GridField
