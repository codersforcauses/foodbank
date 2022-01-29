import React from "react";
import { PropsWithChildren } from 'react';
import Image from "next/image";
import Link from "next/link";

export interface VideoCardProps {
  title: string;
  youtubeVideoID: string;
}

const VideoCard = ({
  title,
  youtubeVideoID,
  ...props
}: PropsWithChildren<VideoCardProps>) => {
  const videoURL = "https://www.youtube.com/watch?v=" + youtubeVideoID;
  //const videoThumbnail = "https://img.youtube.com/vi/" + youtubeVideoID + "/maxresdefault.jpg";
  const videoThumbnail = "https://img.youtube.com/vi/" + youtubeVideoID + "/0.jpg";

  return (
    <div className="">
      <div className="flex flex-col">
        <div className=" w-96 h-96 mt-8 relative">
          
          <Image
            src={videoThumbnail}
            layout="fill" 
            alt={title}
            className="object-contain relative"
          />
        </div>
        <h1 className="tracking-wide font-semibold text-2xl">
          {title}
        </h1>
        {/*</a>*/}
      </div>
    </div>
  )
}

export default VideoCard
  