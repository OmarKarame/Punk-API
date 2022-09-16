import './FiltersList.scss'
import AbvSlider from '../../components/AbvSlider/AbvSlider';
import { useState } from 'react';

const FiltersList = ({getSliderAbvValue, abvValue, abvFiltered, toggleFilterByAbv, brewedBefore, toggleFilterByDate, acidity, toggleFilterByAcidity}) => {
  const [abvButtonClassName, setAbvButtonClassName] = useState('filters-list__button-unclicked');
  const [brewedBeforeButtonClassName, setBrewedBeforeButtonClassName] = useState('filters-list__button-unclicked');
  


  return (
    <div className='filters-list'>
        <div className='filters-list__abv'>
            <button onClick={toggleFilterByAbv} className={abvButtonClassName}>ABV % </button>
            {abvFiltered && <AbvSlider getSliderAbvValue={getSliderAbvValue} className="filters-list__slider" />}
            {abvFiltered && <h3 className='filters-list__value'> {abvValue}</h3>}
        </div>
        <div className='filters-list__brewed-before'>
            <button onClick={toggleFilterByDate} className={brewedBeforeButtonClassName}>Brewed before 2010</button>
            {brewedBefore && <h3 className='filters-list__value'>Showing beers brewed before 2010</h3>}
        </div>
        <div className='filters-list__acidity'>
            <button onClick={toggleFilterByAcidity} className={brewedBeforeButtonClassName}>High acidity</button>
            {acidity && <h3  className='filters-list__value'>Showing beers with acidity below 4pH</h3>}
        </div>
    </div>
  )
}

export default FiltersList