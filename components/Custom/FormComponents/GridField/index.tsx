import { useState, InputHTMLAttributes, ChangeEvent } from 'react'
import { useForm } from 'react-hook-form'
import Image from 'next/image'
import { Character } from '@components/Custom/FormComponents/GridField/GridSet'
import { BsFillCheckCircleFill } from 'react-icons/bs'

const CHARACTERS_FOR_AUTH = 3

export interface GridFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  charSet: Character[]
  label: string
}

const GridField = ({ charSet, label, ...props }: GridFieldProps) => {
  const [grid, setGrid] = useState<Character[]>(charSet)
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
      console.log('evoked!')
    } else {
      setSelectedCount(prev => prev - 1)
      console.log('revoked!')
    }
  }

  const { register, handleSubmit } = useForm()
  const onSubmit = (data: any) => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* <p>{selectedCount}</p> */}
      <div className='grid w-auto grid-cols-3 gap-2'>
        {grid.map(char => (
          <div key={char.id} className='relative'>
            <input
              type='checkbox'
              aria-describedby={`${char.name}-label`}
              //   aria-invalid={!!error}
              aria-label={`${char.name}-checkbox`}
              id={char.id}
              name='food'
              value={char.password}
              checked={char.isSelected}
              disabled={
                !char.isSelected && selectedCount === CHARACTERS_FOR_AUTH
              }
              // className='hidden'
              className='opacity-0'
              //    {...register.(props.name, {
              //      ...rules
              //    })}
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
                className='z-0 object-contain transition-all scale-75 hover:scale-100 '
                height={250}
                width={250}
                src={char.image}
                alt={char.name}
              />
              <p className='text-center'>{char.name}</p>
              {/* <p className='text-center'>{char?.isSelected?.toString()}</p> */}
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
      </div>
    </form>
  )
}

export default GridField
