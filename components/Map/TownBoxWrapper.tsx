import React from 'react'
import Townbox from '../TownBox'
import descData from './assets/description.json'

interface TownBoxWrapperProps {
  selected: string | null
  resetTransform: () => void
  setSelect: (state: any) => void
  setDisplay: (state: boolean) => void
}

interface TownBox {
  headerColor?: any
  headerText?: string
  captionText?: string
  showButton?: boolean
  id?: string
}

const TownBoxWrapper : React.FC = ({
  selected,
  resetTransform,
  setSelect,
  setDisplay
}: TownBoxWrapperProps) => {

  const handleClose = () => {
    setSelect(null)
    setDisplay(false)
    resetTransform()
  }

  if (selected) {
    const selectedArea = descData.descriptionArray.find(x => x.id === selected)

    if (selectedArea) {
      const {
        headerText,
        captionText,
        headerColor,
        showButton,
        id
      }: TownBox  = selectedArea

      return (
          <div key={id} className='self-center'>
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
