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
  selectedCount: number
  updateCount: (count: number) => void
}

const GridField = ({
  charSet,
  label,
  rules = {},
  name,
  selectedCount,
  updateCount,
  ...props
}: GridFieldProps) => {
  const { register, watch, formState, reset } = useFormContext()

  // const [grid, setGrid] = useState<Character[]>(charSet)
  const grid = charSet

  const [mask, setMask] = useState(new Array(9).fill(false))

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      updateCount(0)
      reset(new Array(9).fill(false))
    }
  }, [formState, reset, updateCount])

  useEffect(() => {
    const subscription = watch(data => {
      // console.log(data.mask[name])
      setMask(data.mask[name])
      updateCount(data.mask[name].filter(Boolean).length)
    })
    return () => subscription.unsubscribe()
  }, [watch, updateCount, name])

  const imagesIndex = watch(`mask.${name}`)
  console.log(imagesIndex)

  return (
    <>
      {/* <p>{selectedCount}/3 Selections</p> */}
      <div className='grid place-items-center w-full grid-cols-3 gap-2 mb-6 -mt-3'>
        {grid.map((char, index) => (
          <div key={char.id} className='relative md:-m-4'>
            <input
              type='checkbox'
              aria-describedby={`${char.name}-label`}
              //   aria-invalid={!!error}
              aria-label={`${char.name}-checkbox`}
              id={char.id}
              disabled={
                (!mask[index] && selectedCount === CHARACTERS_FOR_AUTH) ||
                formState.isSubmitting
              }
              // className='hidden'
              // className='opacity-0 peer'
              className='peer'
              {...register?.(`mask.${name}.${index}`, {
                ...rules
              })}
            />
            <label
              htmlFor={char.id}
              className='block opacity-100 w-28 xl:w-36 peer-checked:opacity-40'
            >
              <Image
                className='z-0 object-contain transition-all scale-90 md:scale-75 hover:scale-100 '
                width={250}
                height={250}
                layout='responsive'
                src={char.image}
                alt={char.name}
              />
              <p className='text-sm text-center md:text-lg'>{char.name}</p>
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