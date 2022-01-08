import React from 'react'
import ReactPlayer from 'react-player'
import { useState, useEffect, PropsWithChildren } from 'react'

interface PopupVideoProps {
  url: string
}

const PopupVideo = ({
  children,
  ...props
}: PropsWithChildren<PopupVideoProps>) => {
  return (
    <div>
      <ReactPlayer url={props.url} />
    </div>
  )
}

export default PopupVideo
