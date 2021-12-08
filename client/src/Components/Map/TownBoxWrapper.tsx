import React from 'react'
import { Townbox } from '../Townbox'
import descData from './assets/description.json'

type HeaderColor = 'primary' | 'orange'


interface TownBoxProps {
  selected: string | null
  resetTransform: () => void
  setSelect: (state: any) => void
  setDisplay: (state: boolean) => void
}

interface TownBox {
  headerColor: any
  headerText: string
  captionText: string
  showButton: boolean
  id: string
}

const TownBoxWrapper = ({
  selected,
  resetTransform,
  setSelect,
  setDisplay
}: TownBoxProps) => {
    
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
      }: TownBox | undefined = selectedArea

      return (
        <>
          <div key={id} className='self-center'>
            <Townbox
              headerColor={headerColor as HeaderColor}
              headerText={headerText}
              captionText={captionText}
              showButton={showButton}
              close={handleClose}
            />
          </div>
        </>
      )
    }
  }
  return null
}

export default TownBoxWrapper
