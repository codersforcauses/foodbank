import React, { useRef } from 'react'

import RecipeStepsTab from 'Components/RecipeStepTab'

import Step1 from 'lib/Recipe Images/Super Sonic Dip/Super sonic dip step 1.jpg'
import Step2 from 'lib/Recipe Images/Super Sonic Dip/Super sonic dip step 2.jpg'
import Step3 from 'lib/Recipe Images/Super Sonic Dip/Super sonic dip step 3.jpg'


const RecipeSteps: React.FC = () => {
    const prevStep = useRef<HTMLDivElement>(null)
    const currStep = useRef<HTMLDivElement>(null)
    const nextStep = useRef<HTMLDivElement>(null)

    return(
        <div className='inline-grid grid-cols-3 bg-primary'>
            <div className=''>
                <RecipeStepsTab ref={prevStep} stepNo={1} description='Cook like a boss' image={Step1}/>
            </div>
            <div className=''>
                <RecipeStepsTab ref={currStep} stepNo={2} description='Cook like a BOSS' image={Step2}/>
            </div>
            <div className=''>
                <RecipeStepsTab ref={nextStep} stepNo={3} description='Cook like a BBBOOOSSS' image={Step3}/>
            </div>
        </div>
    )
}

export default RecipeSteps