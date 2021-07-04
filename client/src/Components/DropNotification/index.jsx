import React from 'react'

const BACKGROUND_PURPLE = '#671E75'

export default function DropNotification(props) {
  

  return props.visible ? (
      <div className='flex flex-col items-center justify-center w-1/4 h-auto p-3 text-white text-center rounded-xl absolute' style={{background:BACKGROUND_PURPLE}}>
          <h2 className='text-3xl'>{props.message1}</h2>
          <p>{props.message2}</p>
      </div>
  ) :
  (<div/>)
}