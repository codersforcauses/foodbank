import React from 'react'
import "animate.css"

const BACKGROUND_PURPLE = '#671E75'

export default function DropNotification(props) {

  const [visible,setVisible] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setVisible(false)
    },props.delay
    )
  },[props.delay])

  const styling = "flex flex-col items-center justify-center w-1/4 h-auto p-3 text-white text-center rounded-xl absolute animate__animated "
  const stylingWithFade = styling + ((visible) ? "animate__fadeIn" : "animate__fadeOut");

  return (
    <div className={stylingWithFade} style={{background:BACKGROUND_PURPLE}}>
        {props.content}
    </div>
  )
}
