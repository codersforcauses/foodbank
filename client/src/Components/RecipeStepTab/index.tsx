import React from 'react'

interface TabProps {
    stepNo: number
    description: string
    image: string
    [x:string]: any
}

const RecipeStepTab: React.FC<TabProps> = ({stepNo, description, image, ...props}: TabProps) => (
    <div className='flex flex-row items-center p-10 w-1/2 space-x-8' {...props}>
        <h1 className='text-4xl text-teal font-serif'>{stepNo}</h1>
        <img className='w-80 rounded' src={image} alt='Step'/>
        <p className='text-white'>{description}</p>
    </div>
)

export default RecipeStepTab