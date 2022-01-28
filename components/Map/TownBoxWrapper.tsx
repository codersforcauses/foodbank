import React from 'react'
import Townbox from '../TownBox'
import descData from './assets/description.json'

interface TownBoxWrapperProps {
  selected: string | null
  setSelect: (state: any) => void
  setDisplayBox: (state: boolean) => void
  zoomOut: Function
  initialScale: number
}

interface TownBox {
  headerColor?: any
  headerText?: string
  captionText?: string
  showButton?: boolean
  id?: string
}

const TownBoxWrapper: React.FC<TownBoxWrapperProps> = ({
  selected,
  setSelect,
  setDisplayBox,
  initialScale,
  zoomOut
}: TownBoxWrapperProps) => {
  const handleClose = () => {
    setSelect(null)
    setDisplayBox(false)
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
