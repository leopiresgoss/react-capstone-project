import { useDispatch } from 'react-redux';
import { searchValue } from '../../redux/search/search';

const Search = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(searchValue(e.target.value.trim()));
  };

  return (
    <div className="search-bar">
      <input
        className="bg-transparent text-white font-lato"
        name="search-input"
        id="search-input"
        placeholder="Search Country"
        onChange={handleChange}
      />
    </div>
  );
};

export default Search;
