import React from 'react'
import Card from '../../components/Card/Card'
import { useState } from 'react'
import './CardList.scss'

const CardList = ({cardsJSX}) => {


  return (
    <div className='card-list'>
        {cardsJSX}
    </div>
  )
}

export default CardList