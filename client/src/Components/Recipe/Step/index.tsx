import React from 'react'
import { ColorScheme, RecipeStep } from 'lib/types'

interface Props {
  step: RecipeStep
  colorScheme: ColorScheme
  key: number
}

const Step: React.FC<Props> = ({ step, colorScheme, key }) => (
  <div className='flex flex-row items-center my-5 w-screen space-x-8' key={key}>
    <h1 className={'w-12 text-4xl font-serif ' + colorScheme.header}>
      {step.number}
    </h1>
    <img className='w-80 rounded-3xl' src={step.image} alt='Step' />
    <p className={'w-1/2 ' + colorScheme.text}>{step.description}</p>
  </div>
)

export default Step
