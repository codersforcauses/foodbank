import React, { MouseEventHandler } from 'react'

interface Props {
  name: string
  handleClick: MouseEventHandler
  shouldRender: boolean
}

const SlideShowButton: React.FC<Props> = ({
  name,
  handleClick,
  shouldRender
}) => {
  let className: string = 'w-48 my-4 py-2 px-4 rounded-full '
  if (shouldRender) className += 'bg-blue text-black'
  else className += 'invisible'

  return (
    <button className={className} onClick={handleClick}>
      {name}
    </button>
  )
}

export default SlideShowButton
