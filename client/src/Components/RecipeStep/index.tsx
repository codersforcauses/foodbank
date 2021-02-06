import React from 'react'
import { ColorScheme, RecipeStep } from 'lib/types'

interface TabProps {
  step: RecipeStep
  colorScheme: ColorScheme
  [x: string]: any
}

const RecipeStepTab: React.FC<TabProps> = ({
  step,
  colorScheme,
  ...props
}: TabProps) => (
  <div
    className='flex flex-row items-center my-5 w-screen space-x-8'
    {...props}
  >
    <h1 className={'text-4xl font-serif ' + colorScheme.header}>
      {step.number}
    </h1>
    <img className='w-80 rounded' src={step.image} alt='Step' />
    <p className={colorScheme.text}>{step.description}</p>
  </div>
)

export default RecipeStepTab
