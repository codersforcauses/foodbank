import React from 'react'
import { RecipeStep } from 'lib/types'

interface TabProps {
  step: RecipeStep
  [x: string]: any
}

const RecipeStepTab: React.FC<TabProps> = ({ step, ...props }: TabProps) => (
  <div
    className='flex flex-row items-center my-5 w-screen space-x-8'
    {...props}
  >
    <h1 className='text-4xl text-teal font-serif'>{step.number}</h1>
    <img className='w-80 rounded' src={step.image} alt='Step' />
    <p className='text-white'>{step.description}</p>
  </div>
)

export default RecipeStepTab
