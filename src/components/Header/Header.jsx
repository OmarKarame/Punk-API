import React from 'react'
import './Header.scss'
import image from '../../assets/images/navbar-icon.png'

const Header = () => {
  return (
    <div className='header'>
        <img src={image} alt="Navbar icon" className='header__navbar-icon' />
        <h1 className='header__title'>PUNK <span>API</span></h1>
        <h2 className='header__name'>Omar K</h2>
    </div>
  )
}

export default Header