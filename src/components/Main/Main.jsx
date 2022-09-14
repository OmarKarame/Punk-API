import './Main.scss';
import { useState } from "react";
import CardList from '../../containers/CardList/CardList';

const Main = ({beers}) => {

  return (
    <div className='main'>
        <CardList beers={beers} />
    </div>
  )
}

export default Main