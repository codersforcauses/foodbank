interface Props {
  title: string
  unlocked: boolean
  progress: number
  total: number
}

/**
 * Displays achievement title and progress.
 */
const Label = ({ title, unlocked, progress, total }: Props): JSX.Element => {
  return (
    <div
      className={
        'relative left-5 top-9 font-serif text-center ' +
        (unlocked || 'grayscale contrast-50 opacity-50')
      }
    >
      <div>{title}</div>
      <div>
        {progress} / {total}
      </div>
    </div>
  )
}

export default Label
