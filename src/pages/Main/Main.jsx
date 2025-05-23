import React from 'react'
import Image from './img/image1.png'

export default function Main() {
  return (
    <>
      <div className="container mx-auto w-2/3 p-4 mt-5">
        <div>
          <img
            src={Image}
            alt="image"
            loading="lazy"
            width={253}
            height={391}
            className="rounded-full mx-auto block"
          />
          <div className="flex flex-col text-4xl mt-10 font-bold text-center items-center">
            <span>Специалист по</span>
            <span>Детской</span>
            <span>Реабилитации</span>
          </div>
          <div className="flex flex-col text-center mt-10 text-3xl items-center mb-10">
            <span>Шайморданова</span>
            <span>Алеся</span>
            <span>Равильевна</span>
          </div>
        </div>
      </div>
    </>
  );
}
