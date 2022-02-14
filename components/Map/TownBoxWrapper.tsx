import { FC } from 'react'

import descData from './assets/description.json'
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
    const selectedArea = descData.descriptionArray.find(x => x.id === selected)
    if (selectedArea) {
      const { headerText, captionText, headerColor, showButton, id }: TownBox =
        selectedArea

      return (
        <div key={id} className='sm:w-2/3'>
          <Townbox
            headerColor={headerColor}
            headerText={headerText}
            captionText={captionText}
            showButton={showButton}
            close={handleClose}
          />
        </div>
      )
    }
  }
  return null
}

export default TownBoxWrapper
