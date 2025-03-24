import React from 'react'
import Avatar from './img/image.jpg'
import './content.css'
import Header from '../header/header'
export default function Content() {
  return (
    <>
    <Header />
      <main>
        <div className='container'>
          <div className='content'>
            <div className='content__image'>
              <img className='content__image-img' src={Avatar} alt='Avatar' loading='lazy'></img>
            </div>
            <div className='content__title'>Специалист по Детской Реабилитации</div>
            <div className='content__descript'><p className='content__descript-text'>Шайморданова Алеся Равильевна</p></div>
          </div>
        </div>
      </main>
    </>
  )
}
