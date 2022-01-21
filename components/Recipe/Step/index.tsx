import { ColorScheme, RecipeStep } from 'lib/types'
import Image from 'next/image'

interface Props {
  step: RecipeStep
  colorScheme?: ColorScheme
}

const Step = ({ step, colorScheme }: Props) => (
  <div className='flex flex-row items-center w-screen my-5 space-x-8'>
    <h1 className={`${colorScheme?.header} w-12 text-4xl font-serif`}>
      {step.number}
    </h1>
    <div className='w-full !span-child-relative'>
      <Image
        className='!relative !w-full !h-[unset] object-contain rounded-2xl'
        src={step.image}
        alt='Step'
        layout='fill'
      />
    </div>
    <p className={`${colorScheme?.text} w-1/2`}>{step.description}</p>
  </div>
)

export default Step
