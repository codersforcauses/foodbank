import { MouseEventHandler } from 'react'

interface Props {
  name: string
  handleClick: MouseEventHandler
  shouldRender: boolean
}

const SlideShowButton = ({ name, handleClick, shouldRender }: Props) => {
  return (
    <button
      className={`${
        shouldRender ? 'bg-blue text-black' : 'invisible'
      } w-48 my-4 py-2 px-4 rounded-full`}
      onClick={handleClick}
    >
      {name}
    </button>
  )
}

export default SlideShowButton
