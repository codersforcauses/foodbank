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
  const [selectedCount, setSelectedCount] = useState(0)

  // const toggleSelect = (
  //   e: ChangeEvent<HTMLInputElement>,
  //   currentChar: Character
  // ) => {
  //   console.log(currentChar.name)
  //   const newChar: Character = { ...currentChar }
  //   newChar.isSelected = e.target.checked
  //   const newGrid: Character[] = grid
  //     .slice()
  //     .map(char => (char.id === newChar.id ? newChar : char))
  //   setGrid(newGrid)
  // }

  const toggleSelect = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(selectedCount)
    console.log(e.target.checked)
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
      <div
        className='grid w-full grid-cols-3 gap-2'
        // style={{ border: '20px solid blue' }}
      >
        {grid.map(char => (
          //   <FieldLabel key={char.id}>
          <div key={char.id}>
            <input
              type='checkbox'
              aria-describedby={`${char.name}-label`}
              aria-invalid={!!error}
              aria-label={`${char.name}-checkbox`}
              id={char.id}
              name='food'
              value={char.password}
              // disabled={selectedCount === 3}
              // checked={char.isSelected}
              // className='opacity-0 peer'
              className='peer'
              {...register?.(props.name, {
                ...rules
                // onChange: e => toggleSelect(e, char)
              })}
              // onChange={e => toggleSelect(e, char)}
              // onChange={e => toggleSelect(e)}
            />
            <label
              htmlFor={char.id}
              // className='flex flex-col justify-content-center'
              className='opacity-30 peer-checked:opacity-100'
            >
              <Image
                // key={char.id}
                className='object-contain transition-all scale-90 hover:scale-100'
                height={250}
                width={250}
                // layout='responsive'
                src={char.image}
                alt={char.name}
                //   placeholder='blur'
              />
              <p className='text-center'>{char.name}</p>
              {/* <p className='text-center'>{char.isSelected.toString()}</p> */}
            </label>
            {/* <p className='hidden text-center peer-checked:block'>{char.name}</p> */}
          </div>
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
