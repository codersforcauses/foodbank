export interface DotsProps {
  nImages: number
  currentSlide: number
  className: string
  onClick: (idx: number) => void
}

const Dots = ({ onClick, nImages, currentSlide, ...props }: DotsProps) => (
  <div {...props}>
    {[...Array(nImages).keys()].map(idx => (
      <button
        key={idx}
        onClick={() => onClick(idx)}
        className={[
          'w-2 h-2 p-2 m-2 rounded-full',
          currentSlide === idx ? 'bg-black' : 'bg-grey'
        ]
          .join(' ')
          .trim()}
        type='button'
      />
    ))}
  </div>
)

export default Dots
