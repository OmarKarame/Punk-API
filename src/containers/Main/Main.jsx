import './Main.scss';
import { useEffect, useState } from "react";
import CardList from '../../components/CardList/CardList';
import Card from '../../components/Card/Card'
import SearchBar from '../../components/SearchBar/SearchBar';

const Main = ({beers, acidity}) => {
  const [textSearch, setTextSearch] = useState("");
  const [numberOfCardsDisplayed, setNumberOfCardsBeingDisplayed] = useState(beers.length);

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

  useEffect(() => {
    filterCards()
  }, [textSearch, beers])

  useEffect(() => {
    if (acidity) {
      filterCardsByAcidity();
    }
    else {
      displayAllCards();
    }
  }, [acidity])

  const displayAllCards = () => {
    setCards(beers?.map((beer, index) => {
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
    setNumberOfCardsBeingDisplayed(beers.length);
  }

  const filterCards = () => {
    const newBeersArr = beers.filter((beer) => beer.name.toLowerCase().startsWith(textSearch.toLowerCase())).map((beer, index) => {
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
    })
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
    setNumberOfCardsBeingDisplayed(newBeersArr.length);
  }

  const filterCardsByAcidity = () => {
    const newBeersArr = beers.filter((beer) => beer.ph <= 4).map((beer, index) => {
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
    })
    setCards(beers.filter((beer) => beer.ph <= 4).map((beer, index) => {
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
    setNumberOfCardsBeingDisplayed(newBeersArr.length);
  }

  return (
    <div className='main'>
      <div className='main__heading'>
        <SearchBar getTextSearch={getTextSearch} />
        <h3>Number of cards being displayed: {numberOfCardsDisplayed}</h3>
      </div>
      <CardList cardsJSX={cardsJSX} />
    </div>
  )
}

export default Main