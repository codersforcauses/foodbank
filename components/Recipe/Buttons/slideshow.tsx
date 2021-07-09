import React, { MouseEventHandler } from 'react'

interface Props {
    name: string
    handleClick: MouseEventHandler
}

const SlideShowButton: React.FC<Props> = ({ name, handleClick }) => {
    return (
        <button className='w-48 my-4 py-2 px-4 rounded-full bg-blue text-black'
            onClick={handleClick}
        >
            {name}
        </button>
    )
}

export default SlideShowButton;