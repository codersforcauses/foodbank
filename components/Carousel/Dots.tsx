export interface DotsProps {
  onClick: (idx: number) => void
  nImages: number
  currentSlide: number
  className: string
}

const Dots: React.FC<DotsProps> = ({
  onClick,
  nImages,
  currentSlide,
  className
}) => {
  const dots = [...Array(nImages).keys()].map(idx => {
    const isActiveSlide = currentSlide === idx
    return (
      <button
        key={idx}
        onClick={() => onClick(idx)}
        className={`w-2 h-2 p-2 m-2 rounded-full cursor-pointer ${
          isActiveSlide ? 'bg-black' : 'bg-grey'
        }`}
        type='button'
      />
    )
  })
  return <div className={className}>{dots}</div>
}

export default Dots
