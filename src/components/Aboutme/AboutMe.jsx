import React from 'react'
import Header from '../header/header'

import './aboutme.css'

export default function AboutMe() {
  return (
    <>
        <Header />
        <div className='container'>
          <div className='about__content'>
            <h1 className='about__title'>об о мне :</h1>
            <h2 className='about__content-title'>Образование :</h2>
            <p className='about__content-educat'>Cамарский медицинский университет РЕАВИЗ. Высшее сестринское дело.преподаватель.</p>
            <p className='about__content-educat'>Частное образовательное учреждение "фельдшер", "лечебное дело"</p>
            <h2 className='about__content-title'>Повышение квалификации :</h2>
            <p className='about__content-educat'>Нейропсихология детского возраста. Детский массаж. Тренер по адаптивной физической культуре. Войта и Бобат терапия ( высшая академия медицинского образования г. Санкт-Петербург)</p>
            <h2 className='about__content-title'>Опыт работы :</h2>
            <p className='about__content-educat'>Более 7 лет</p>
            <p className='about__content-educat'>Индивидуальный подход к каждому ребенку. работаю с такими заболеваниями как : РАС, синдром Дауна, умственная отсталость, синдром дефицита внимания и гиперактивность, ДЦП и т.д.</p>
          </div>
        </div>
    </>
  )
}
