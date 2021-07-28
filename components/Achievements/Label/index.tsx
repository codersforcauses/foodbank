interface Props {
  title: string
  unlocked: boolean
  progress: number
  total: number
}

/**
 * Displays achievement title and progress.
 */
const Label = ({ title, unlocked, progress, total }: Props) => {
  return (
    <div
      className={
        'relative left-5 top-9 font-serif text-center text-white ' +
        (unlocked || 'grayscale contrast-50 opacity-20')
      }
    >
      <div className='cursor-default transition duration-500 ease-in-out transform hover:scale-110'>
        {title}
      </div>
      <div className='cursor-default transition duration-500 ease-in-out transform hover:scale-110'>
        {progress} / {total}
      </div>
    </div>
  )
}

export default Label
