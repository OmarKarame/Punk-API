import React from 'react'
import Card from '../../components/Card/Card'
import { useState } from 'react'

const CardList = ({beers}) => {
  const [cardsJSX, setCards] = useState(beers?.map((beer, index) => {
    return (
      <>
        <Card
          key={index} 
          name={beer.name}
          firstBrewed={beer.first_brewed} 
          description={beer.description} 
          abv={beer.abv}
          ibu={beer.ibu}
          image={beer.image_url} />
      </>
    )
  }));

  return (
    <div className='card-list'>
        {cardsJSX}
    </div>
  )
}

export default CardList