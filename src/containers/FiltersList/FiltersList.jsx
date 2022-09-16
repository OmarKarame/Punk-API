import './FiltersList.scss'
import AbvSlider from '../../components/AbvSlider/AbvSlider';
import { useState } from 'react';

const FiltersList = ({getSliderAbvValue, abvValue, abvFiltered, toggleFilterByAbv, brewedBefore, toggleFilterByDate, acidity, toggleFilterByAcidity, resetFilters}) => {
  const [abvButtonClassName, setAbvButtonClassName] = useState('filters-list__button-unclicked');
  const [brewedBeforeButtonClassName, setBrewedBeforeButtonClassName] = useState('filters-list__button-unclicked');
  


  return (
    <div className='filters-list'>
        <div className='filters-list__abv'>
            <button onClick={toggleFilterByAbv} className={abvButtonClassName}>ABV %</button>
            {abvFiltered && <AbvSlider getSliderAbvValue={getSliderAbvValue} className="filters-list__slider" />}
            {abvFiltered && <h3 className='filters-list__value'> {abvValue}</h3>}
        </div>
        <div className='filters-list__brewed-before'>
            <button onClick={toggleFilterByDate} className={brewedBeforeButtonClassName}>Brewed before 2010</button>
            {brewedBefore && <h3 className='filters-list__value'>Showing beers brewed before 2010</h3>}
        </div>
        <div>
          <div className='filters-list__acidity'>
              <input type="checkbox" id='high-acidity' onChange={toggleFilterByAcidity}/>
              <label htmlFor="high-acidity">High acidity</label>
              {/* <button onClick={toggleFilterByAcidity} className={brewedBeforeButtonClassName}>High acidity</button> */}
          </div>
          {acidity && <h3  className='acidity-filter'>Showing beers with acidity below 4pH</h3>}
        </div>
        <button className={brewedBeforeButtonClassName} onClick={resetFilters}>Reset</button>
    </div>
  )
}

export default FiltersList