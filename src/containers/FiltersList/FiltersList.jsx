import './FiltersList.scss'
import AbvSlider from '../../components/AbvSlider/AbvSlider';
import { useState } from 'react';

const FiltersList = ({getSliderAbvValue, abvValue, abvFiltered, toggleFilterByAbv}) => {


  return (
    <div className='filters-list'>
        <div className='filters-list__abv'>
            <button onClick={toggleFilterByAbv}>ABv %: </button>
            {abvFiltered && <AbvSlider getSliderAbvValue={getSliderAbvValue} className="filters-list__slider" />}
            {abvFiltered && <h3 className='filters-list__value'> {abvValue}</h3>}
        </div>
        
    </div>
  )
}

export default FiltersList