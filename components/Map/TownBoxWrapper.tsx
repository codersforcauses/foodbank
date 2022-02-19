import { FC } from 'react'

import locations from './assets/locations'
import Townbox from '../TownBox'

interface TownBoxWrapperProps {
  selected: string | null
  setSelectedArea: (state: any) => void
  zoomOut: Function
  initialScale: number
  setIsShowing: (state: boolean) => void
}

interface TownBox {
  headerColor?: any
  headerText?: string
  captionText?: string
  showButton?: boolean
  id?: string
  showing?: boolean
  route?: string
}

const TownBoxWrapper: FC<TownBoxWrapperProps> = ({
  selected,
  setSelectedArea,
  setIsShowing,
  initialScale,
  zoomOut
}: TownBoxWrapperProps) => {
  const handleClose = () => {
    setSelectedArea(null)
    setIsShowing(false)
    zoomOut(initialScale * 2, 300, 'easeOut')
  }

  if (selected) {
    const selectedArea = locations.find(x => x.id === selected)
    if (selectedArea) {
      const {
        headerText,
        captionText,
        headerColor,
        showButton,
        id,
        route
      }: TownBox = selectedArea

      return (
        <div key={id} className='sm:w-2/3'>
          <Townbox
            headerColor={headerColor}
            headerText={headerText}
            captionText={captionText}
            showButton={showButton}
            close={handleClose}
            linksrc={route}
          />
        </div>
      )
    }
  }
  return null
}

export default TownBoxWrapper
