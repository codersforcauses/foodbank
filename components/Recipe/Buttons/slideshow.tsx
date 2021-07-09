import React, { MouseEventHandler } from 'react'

interface Props {
    name: string
    handleClick: MouseEventHandler
    lastStep: boolean
}

const SlideShowButton: React.FC<Props> = ({ name, handleClick, lastStep}) => {
    let className: string = "w-48 my-4 py-2 px-4 rounded-full ";
    if (lastStep) className += "invisible";
    else className += "bg-blue text-black";

    return (
        <button className={className} onClick={handleClick}>
            {name}
        </button>
    )
}

export default SlideShowButton;