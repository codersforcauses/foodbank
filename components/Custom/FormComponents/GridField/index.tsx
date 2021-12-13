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
  rules?: RegisterOptions
  selectedCount: number
  updateCount: (count: number) => void
}

const GridField = ({
  charSet,
  label,
  rules = {},
  selectedCount,
  updateCount,
  ...props
}: GridFieldProps) => {
  const { register, watch } = useFormContext()

  // const [grid, setGrid] = useState<Character[]>(charSet)
  const grid = charSet

  const [array, setArray] = useState([])

  useEffect(() => {
    const subscription = watch(data => {
      setArray(data.mask)
      updateCount(data.mask.filter(Boolean).length)
    })
    return () => subscription.unsubscribe()
  }, [watch, updateCount])
  // const imagesIndex = watch(props.name)
  // console.log(imagesIndex)

  return (
    <>
      <p>{selectedCount}/3 Selections</p>
      <div className='grid place-items-center w-full grid-cols-3 gap-2 mb-6 -mt-6'>
        {grid.map((char, index) => (
          <div key={char.id} className='relative md:-m-4'>
            <input
              type='checkbox'
              aria-describedby={`${char.name}-label`}
              //   aria-invalid={!!error}
              aria-label={`${char.name}-checkbox`}
              id={char.id}
              disabled={!array[index] && selectedCount === CHARACTERS_FOR_AUTH}
              // className='hidden'
              className='peer opacity-0'
              // className='opacity-0'
              {...register?.(`mask.${index}`, {
                ...rules
              })}
            />
            <label
              htmlFor={char.id}
              className='block w-28 xl:w-36 peer-checked:opacity-40 opacity-100'
            >
              <Image
                className='z-0 object-contain transition-all scale-90 md:scale-75 hover:scale-100 '
                width={250}
                height={250}
                layout='responsive'
                src={char.image}
                alt={char.name}
              />
              <p className='text-center text-sm md:text-lg'>{char.name}</p>
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
