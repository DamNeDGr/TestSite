import React from 'react'
import Video from './video/video.MP4'

export default function VideoPlayer() {
  return (
    <video
        className='rounded-3xl'
        controls
        src={Video}
        width={300}
        height={100}
     />
  )
}
