
import './header.css'

import React from 'react'
export default function Header() {
  return (
    <>
        <header className='header header__fixed'>
            <a href='/' className='header__link'>Alesya</a>
            <div className='menu'>
                <input type='checkbox' id='burger-checkbox' className='burger-checkbox'></input>
                <label for='burger-checkbox' className='burger'></label>
                <ul className='menu-list'>
                    <li><a href='/' className='menu-item'>Главная</a></li>
                    <li><a href='/about' className='menu-item'>обо мне</a></li>
                    <li><a href='#' className='menu-item'>отзывы</a></li>
                    <li><a href='/contact' className='menu-item'>контакты</a></li>
                </ul>
            </div>
        </header>
    </>
  )
}
