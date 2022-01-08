import PopupVideo from '@components/PopupVideo'
import { useState, useEffect } from 'react'

const player = () => {
    const [popupVisible, setPopupVisibility] = useState(false);

    const handlePopupVisibility = () => {
        setPopupVisibility(!popupVisible);
    }
    return(
        <>
            <button onClick={handlePopupVisibility}>Open video</button>
            <div className={popupVisible ? "visible" : "hidden"} style={{}}>
                <PopupVideo url="https://www.youtube.com/watch?v=oUVCWNQFGTc"/>
            </div>
        </>
    )
}

export default player
