import './Main.scss';
import { useEffect, useState } from "react";
import CardList from '../../components/CardList/CardList';
import Card from '../../components/Card/Card'
import SearchBar from '../../components/SearchBar/SearchBar';

const Main = ({beers}) => {
  const getTextSearch = (event) => {
    setTextSearch(event.target.value);
  }

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

  const [textSearch, setTextSearch] = useState("");
  useEffect(() => {
    filterCards()
  }, [cardsJSX])

  const filterCards = () => {
    setCards(beers.filter((beer) => beer.name.toLowerCase().startsWith(textSearch.toLowerCase())).map((beer, index) => {
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
    }))
  }

  return (
    <div className='main'>
      <SearchBar getTextSearch={getTextSearch} />
      <CardList cardsJSX={cardsJSX} />
    </div>
  )
}

export default Main