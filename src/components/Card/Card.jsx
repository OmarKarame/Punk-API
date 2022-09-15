import './Card.scss';

const Card = ({name, firstBrewed, description, abv, ibu, image}) => {
  return (
    <div className='card'>
        <img src={image} alt="Beer image" className='card__image'/>
        <div className='card__content'>
          <h2 className='card__first-brewed'>{firstBrewed}</h2>
          <h1 className='card__beer-name'>{name}</h1>
          {/* <p className='card__description'>{description}</p> */}
          <div className='card__alcohol-info'>
              <h3 className='card__abv'>{abv}% ABV</h3>
              <h2 className='card__line-design'>|</h2>
              <h3 className='card__ibu'>{ibu} IBU</h3>
          </div>
        </div>
    </div>
  )
}

export default Card