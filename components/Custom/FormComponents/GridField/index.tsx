import { useState, useEffect, InputHTMLAttributes, ChangeEvent } from 'react'
import { useForm } from 'react-hook-form'
import Image from 'next/image'
import { Character } from '@components/Custom/FormComponents/GridField/GridSet'
import { BsFillCheckCircleFill } from 'react-icons/bs'
import { RegisterOptions, useFormContext } from 'react-hook-form'

const CHARACTERS_FOR_AUTH = 3

export interface GridFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  charSet: Character[]
  label: string
  name: string
  rules?: RegisterOptions
}

const GridField = ({
  charSet,
  label,
  rules = {},
  ...props
}: GridFieldProps) => {
  const { register, watch } = useFormContext()

  const [grid, setGrid] = useState<Character[]>(charSet)
  const [selectedCount, setSelectedCount] = useState(0)
  const [array, setArray] = useState([])

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
      console.log('evoked!')
    } else {
      setSelectedCount(prev => prev - 1)
      console.log('revoked!')
    }
  }

  useEffect(() => {
    const subscription = watch(data => {
      setArray(data.password)
      setSelectedCount(data.password.filter(Boolean).length)
      console.log(data.password)
    })
    return () => subscription.unsubscribe()
  }, [watch, props.name])
  // const imagesIndex = watch(props.name)
  // console.log(imagesIndex)

  return (
    <>
      <p>{selectedCount}</p>
      <div className='grid w-full grid-cols-3 gap-2'>
        {grid.map((char, index) => (
          <div key={char.id} className='relative'>
            <input
              type='checkbox'
              aria-describedby={`${char.name}-label`}
              //   aria-invalid={!!error}
              aria-label={`${char.name}-checkbox`}
              id={char.id}
              // value={char.password}
              // value={index}
              // checked={char.isSelected}
              disabled={!array[index] && selectedCount === CHARACTERS_FOR_AUTH}
              // className='hidden'
              className='peer'
              // className='opacity-0'
              {...register?.(`${props.name}.${index}`, {
                ...rules
              })}
            />
            <label
              htmlFor={char.id}
              className='peer-checked:opacity-40 opacity-100'
            >
              <Image
                className='z-0 object-contain transition-all scale-90 hover:scale-100'
                height={250}
                width={250}
                src={char.image}
                alt={char.name}
              />
              <p className='text-center'>{char.name}</p>
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
                'peer-checked:opacity-100 opacity-0'
              }
            />
          </div>
        ))}
      </div>
    </>
  )
}

export default GridField
