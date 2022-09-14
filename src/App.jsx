import './App.scss';
import React, { useState, useEffect } from 'react';
import Main from './components/Main/Main';


const App = () => {
  const [beers, setBeers] = useState(null);
  const [url, setUrl] = useState("https://api.punkapi.com/v2/beers");

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
