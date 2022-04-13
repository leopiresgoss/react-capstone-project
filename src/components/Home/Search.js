import PropTypes from 'prop-types';

const Search = ({ filterSearched }) => {
  const handleChange = (e) => {
    filterSearched(e.target.value.trim());
  };

  return (
    <div className="search-bar">
      <input name="search-input" id="search-input" placeholder="Search" onChange={handleChange} />
    </div>
  );
};

Search.propTypes = {
  filterSearched: PropTypes.func.isRequired,
};

export default Search;
