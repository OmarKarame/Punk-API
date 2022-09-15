import './SearchBar.scss';

const SearchBar = ({getTextSearch}) => {
  return (
    <div>
        <input className="search-bar" type="text" onChange={getTextSearch} placeholder="Search"/>
    </div>
  )
}

export default SearchBar