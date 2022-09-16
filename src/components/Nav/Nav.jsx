import './Nav.scss'
import FiltersList from '../../containers/FiltersList/FiltersList'

const Nav = ({getSliderAbvValue, abvValue, abvFiltered, toggleFilterByAbv, brewedBefore, toggleFilterByDate, acidity, toggleFilterByAcidity, resetFilters}) => {
  return (
    <div className='nav'>
        <FiltersList 
          getSliderAbvValue={getSliderAbvValue} 
          abvValue={abvValue} 
          abvFiltered={abvFiltered} 
          toggleFilterByAbv={toggleFilterByAbv}
          brewedBefore={brewedBefore}
          toggleFilterByDate={toggleFilterByDate}
          acidity={acidity}
          toggleFilterByAcidity={toggleFilterByAcidity}
          resetFilters={resetFilters}
        />
    </div>
  )
}

export default Nav