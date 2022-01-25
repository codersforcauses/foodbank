import { ColorScheme, RecipeStep } from 'lib/types'
import Image from 'next/image'

interface Props {
  step: RecipeStep
  colorScheme?: ColorScheme
}

const Step = ({ step, colorScheme }: Props) => (
  <div className='lg:flex lg:flex-row items-center my-5 space-x-8'>
    <h1 className={`${colorScheme?.header} w-12 text-4xl font-serif`}>
      {step.number}
    </h1>
    <div className=' w-3/5 lg:w-1/3 !span-child-relative mb-3 lg:mb-0'>
      <Image
        className='!relative !w-full !h-[unset] object-contain rounded-2xl'
        src={step.image as string}
        alt='Step'
        layout='fill'
      />
    </div>
    <p className={`${colorScheme?.text} lg:w-1/2 md:text-2xl`}>
      {step.description}
    </p>
  </div>
)

export default Step
