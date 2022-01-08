import React from 'react'
import ReactPlayer from "react-player"
import { useState, useEffect, PropsWithChildren } from 'react';

interface PopupVideoProps {
  url: string;
}

const PopupVideo = ({
  children,
  ...props
}: PropsWithChildren<PopupVideoProps>) => {
  return(
    <div>
      <ReactPlayer url="https://www.youtube.com/watch?v=oUVCWNQFGTc"/>
    </div>
  );
    
};

export default PopupVideo