import './App.scss';
import React, { useState, useEffect } from 'react';
import Main from './containers/Main/Main';
import Header from './components/Header/Header';
import Nav from "./components/Nav/Nav";


const App = () => {
  const [beers, setBeers] = useState(null);
  const [url, setUrl] = useState("https://api.punkapi.com/v2/beers");
  const [navDisplay, setNavDisplay] = useState(false);
  const [headerDark, setHeaderDark] = useState(true);
  const [abvFiltered, setAbvFiltered] = useState(false);
  const [abvValue, setAbvValue] = useState(50);
  const [brewedBefore, setBrewedBefore] = useState(false);
  const [acidity, setAcidity] = useState(false);

  const getBeers = async () => {
    const res = await fetch(url);
    const data = await res.json();
    console.log(url);
    setBeers(data)
  }

  useEffect(() => {
    getBeers()
    updateCardFilter()
  }, [acidity, brewedBefore, abvValue, url])

  const getSliderAbvValue = (event) => {
    setAbvValue(event.target.value);
  }

  const toggleFilterByAbv = () => {
    setAbvFiltered(!abvFiltered);
  }

  const toggleFilterByDate = () => {
    setBrewedBefore(!brewedBefore);
  }

  const toggleFilterByAcidity = () => {
    setAcidity(!acidity)
  }
  const resetFilters = () => {
    setAbvFiltered(false)
    setBrewedBefore(false)
    setAcidity(false)
  }

  const updateCardFilter = () => {
    if (abvFiltered && brewedBefore){
      setUrl(`https://api.punkapi.com/v2/beers?abv_gt=${abvValue}&brewed_before=01-2010`)
    }
    else if (abvFiltered && !brewedBefore){
      setUrl(`https://api.punkapi.com/v2/beers?abv_gt=${abvValue}`)
    }
    else if (brewedBefore) {
      setUrl(`https://api.punkapi.com/v2/beers?brewed_before=01-2010`)
    }
    else if (!brewedBefore){
      setUrl(`https://api.punkapi.com/v2/beers`)
    }
    else if (!abvFiltered) {
      setUrl(`https://api.punkapi.com/v2/beers`)
    }
  }



  if (beers){
    return (
      <div className="App">
        <Header 
          navDisplay={navDisplay} 
          setNavDisplay={setNavDisplay} 
          headerDark={headerDark} 
          setHeaderDark={setHeaderDark}/>

        {navDisplay && <Nav 
          getSliderAbvValue={getSliderAbvValue} 
          abvValue={abvValue}
          abvFiltered={abvFiltered}
          toggleFilterByAbv={toggleFilterByAbv}
          brewedBefore={brewedBefore}
          toggleFilterByDate={toggleFilterByDate}
          acidity={acidity}
          toggleFilterByAcidity={toggleFilterByAcidity}
          resetFilters={resetFilters}
        />}

        <Main 
          beers={beers}
          acidity={acidity}
        />
      </div>
    );
  }

  return (
    <div>

    </div>
  )

}

export default App;
