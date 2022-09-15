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

  useEffect(() => {
    const getBeers = async () => {
      const res = await fetch(url);
      const data = await res.json();
      setBeers(data)
      console.log(beers);
    }
    getBeers()
  }, [url]);

  if (beers){
    return (
      <div className="App">
        <Header navDisplay={navDisplay} setNavDisplay={setNavDisplay} headerDark={headerDark} setHeaderDark={setHeaderDark}/>
        {navDisplay && <Nav />}
        <Main beers={beers}/>
      </div>
    );
  }

  return (
    <div>

    </div>
  )

}

export default App;
