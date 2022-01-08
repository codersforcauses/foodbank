import PopupVideo from '@components/PopupVideo'
import { useState } from 'react'

const Player = () => {
  const [popupVisible, setPopupVisibility] = useState(false)
  const handlePopupVisibility = () => setPopupVisibility(!popupVisible)
  const handleVideoClose = () => {
    if (popupVisible) {setPopupVisibility(false)}
  }
  return (
    <>
      <div onClick={handleVideoClose}>
        <button onClick={handlePopupVisibility}>Open video</button>
        <div className={popupVisible ? 'visible' : 'hidden'} style={{}}>
          <PopupVideo url='https://www.youtube.com/watch?v=oUVCWNQFGTc' />
        </div>
      </div>
    </>
  )
}

export default Player
