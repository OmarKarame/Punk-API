import './FiltersList.scss'
import AbvSlider from '../../components/AbvSlider/AbvSlider';
import { useState } from 'react';

const FiltersList = ({getSliderAbvValue, abvValue, abvFiltered, toggleFilterByAbv, brewedBefore, toggleFilterByDate, acidity, toggleFilterByAcidity}) => {



  return (
    <div className='filters-list'>
        <div className='filters-list__abv'>
            <button onClick={toggleFilterByAbv} className={abvButtonClassName}>ABv % </button>
            {abvFiltered && <AbvSlider getSliderAbvValue={getSliderAbvValue} className="filters-list__slider" />}
            {abvFiltered && <h3 className='filters-list__value'> {abvValue}</h3>}
        </div>
        <div className='filters-list__brewed-before'>
            <button onClick={toggleFilterByDate} className={brewedBeforeButtonClassName}>Brewed before 2010</button>
        </div>
    </div>
  )
}

export default FiltersList