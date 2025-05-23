import React from 'react'
import Video from './video/video.MP4'
import Poster from './video/poster.png'
export default function VideoPlayer() {
  return (
    <video
        className='rounded-3xl'
        poster={Poster}
        controls
        src={Video}
        width={300}
        height={100}
     />
  )
}
