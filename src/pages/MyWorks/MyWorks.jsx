import React from 'react'
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';

export default function MyWorks() {
  return (
    <>
      <div className="container mx-auto w-2/3 p-4 mt-10 items-center">
        <div className="text-3xl text-center items-center">Мои работы:</div>
        <div className=' flex justify-center mt-20'>
         <VideoPlayer />
        </div>
      </div>
    </>
  );
}
