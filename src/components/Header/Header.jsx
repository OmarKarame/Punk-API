import React from 'react'
import './Header.scss'
import image from '../../assets/images/navbar-icon.png'
import { useState } from 'react'

const Header = ({navDisplay, setNavDisplay, headerDark, setHeaderDark}) => {
    const [headerClassName, setHeaderClassName] = useState("header");
    const displayNav = () => {
        changeHeaderDark();
        setNavDisplay(!navDisplay);
    }
    const changeHeaderDark = () => {
        setHeaderDark(!headerDark);
        if (headerDark) {
            setHeaderClassName("header-dark")
        }
        else {
            setHeaderClassName("header")
        }
    }
  return (
    <div className={headerClassName}>
        <img src={image} alt="Navbar icon" className={`${headerClassName}__navbar-icon`} onClick={displayNav}/>
        <h1 className={`${headerClassName}__title`}>BREWDOG</h1>
        <h2 className={`${headerClassName}__name`}>OK</h2>
    </div>
  )
}

export default Header