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
import { BsFillCheckCircleFill } from 'react-icons/bs'

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
          <div key={char.id} className='relative'>
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
              className='hidden peer'
              // className='peer'
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
              className='relative opacity-100 peer-checked:opacity-40'
            >
              <Image
                // key={char.id}
                className='object-contain transition-all scale-90 hover:scale-100 z-0'
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
