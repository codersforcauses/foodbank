interface Props {
  title: string
  unlocked: boolean
  progress: number
  total: number
}

const Label = ({ title, unlocked, progress, total }: Props): JSX.Element => {
  return (
    <div
      className={
        'font-serif text-center ' +
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
