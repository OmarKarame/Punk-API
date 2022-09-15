import './Nav.scss'
import FiltersList from '../../containers/FiltersList/FiltersList'

const Nav = ({getSliderAbvValue, abvValue, abvFiltered, toggleFilterByAbv}) => {
  return (
    <div className='nav'>
        <FiltersList getSliderAbvValue={getSliderAbvValue} abvValue={abvValue} abvFiltered={abvFiltered} toggleFilterByAbv={toggleFilterByAbv} />
    </div>
  )
}

export default Nav