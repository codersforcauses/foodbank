import {
  Children,
  cloneElement,
  DetailedReactHTMLElement,
  ReactNode
} from 'react'
interface CarouselProps {
  /** Max number of characters to display on a single page. */
  maxPerPage: number
  /** Individual carousel items. */
  children?: ReactNode
}

/** The single-page view of character images and buttons which navigate to individual character pages. */
const CarouselDisplay = ({ maxPerPage, ...props }: CarouselProps) => {
  // Assuming we're still using PurgeCSS so can't do 'grid-cols-' + maxPerPage
  const gridColsClass: string =
    maxPerPage === 1
      ? 'grid-cols-1'
      : maxPerPage === 2
      ? 'grid-cols-2'
      : maxPerPage === 3
      ? 'grid-cols-3'
      : maxPerPage === 4
      ? 'grid-cols-4'
      : maxPerPage === 5
      ? 'grid-cols-5'
      : ''
  return (
    <div className={'grid gap-x-12 ' + gridColsClass}>
      {Children.map(props.children, child => {
        return (
          <div>
            {cloneElement(child as DetailedReactHTMLElement<any, HTMLElement>)}
          </div>
        )
      })}
    </div>
  )
}

export default CarouselDisplay
