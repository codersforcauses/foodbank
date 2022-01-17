import { useState, useEffect, InputHTMLAttributes } from 'react'
import Image from 'next/image'
import { Character } from '@components/Custom/FormComponents/GridField/GridSet'
import { BsFillCheckCircleFill } from 'react-icons/bs'
import { RegisterOptions, useFormContext } from 'react-hook-form'

const CHARACTERS_FOR_AUTH = 3

export interface GridFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  charSet: Character[]
  defaultMask: boolean[]
  label: string
  name: string
  rules?: RegisterOptions
  selectedCount: number
  updateCount: (count: number) => void
  gridDisabled: boolean
}

const GridField = ({
  charSet,
  defaultMask,
  label,
  rules = {},
  name,
  selectedCount,
  updateCount,
  gridDisabled,
  ...props
}: GridFieldProps) => {
  const { register, watch, formState, reset } = useFormContext()
  const grid = charSet
  const [mask, setMask] = useState(defaultMask)

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      updateCount(0)
      reset({ mask: defaultMask })
      setMask(defaultMask)
    }
  }, [formState, reset, updateCount, defaultMask])

  useEffect(() => {
    const subscription = watch(data => {
      setMask(data.mask)
      updateCount(data.mask.filter(Boolean).length)
    })
    return () => subscription.unsubscribe()
  }, [watch, updateCount])

  return (
    <div className='grid w-full grid-cols-3 gap-2 mb-6 -mt-2 place-items-center'>
      {grid.map((char, index) => (
        <div key={index} className='relative md:-m-5 xl:-m-4'>
          <input
            type='checkbox'
            aria-describedby={`${char.name}-label`}
            aria-label={`${char.name}-checkbox`}
            id={char.name}
            disabled={
              (!mask[index] && selectedCount === CHARACTERS_FOR_AUTH) ||
              gridDisabled
            }
            className='opacity-0 peer'
            {...register?.(`mask.${index}`, {
              ...rules
            })}
          />
          <label
            htmlFor={char.name}
            className={`${
              gridDisabled ? 'opacity-40' : 'opacity-100'
            } block w-28 xl:w-36 peer-checked:opacity-40`}
          >
            <Image
              className={`${
                !gridDisabled && 'hover:scale-100'
              } z-0 object-contain transition-all scale-90 md:scale-75`}
              width={250}
              height={250}
              layout='responsive'
              src={char.image}
              alt={char.name}
            />
            <p className='text-sm text-center whitespace-nowrap md:text-lg'>
              {char.name}
            </p>
          </label>

          <BsFillCheckCircleFill
            className={
              'absolute top-0 bottom-0 left-0 right-0 text-center m-auto text-3xl z-1 pointer-events-none peer-checked:opacity-100 opacity-0'
            }
          />
        </div>
      ))}
    </div>
  )
}

export default GridField
